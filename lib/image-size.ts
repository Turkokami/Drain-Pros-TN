/**
 * INTRINSIC IMAGE SIZE — read from the file header at build time.
 *
 * Why not a hardcoded table: lib/gallery.ts reads whatever is in public/photos
 * at build time, so the client can drop a job photo in and it appears with no
 * code change. A table of dimensions would silently go stale the first time
 * that happened, and a wrong width/height is worse than none — it reserves the
 * wrong box and causes the layout shift it was meant to prevent.
 *
 * Why not a dependency: this needs two numbers out of a file header. JPEG and
 * PNG between them cover every photo in the repo, and WebP is here because the
 * gallery's extension allow-list includes it.
 *
 * Returns null when the format is not recognised or the header is truncated.
 * Callers must omit the attributes in that case rather than guess.
 */
import fs from 'node:fs'

export interface ImageSize {
  width: number
  height: number
}

/** JPEG: walk the marker segments to the first Start Of Frame. */
function jpegSize(b: Buffer): ImageSize | null {
  if (b.length < 4 || b[0] !== 0xff || b[1] !== 0xd8) return null

  let i = 2
  while (i < b.length - 9) {
    // Segments start with 0xFF. Padding bytes of 0xFF are legal, so skip them.
    if (b[i] !== 0xff) {
      i += 1
      continue
    }
    const marker = b[i + 1]

    // Standalone markers with no length field.
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      i += 2
      continue
    }
    if (marker === 0xd9) return null // end of image, no SOF found

    const length = b.readUInt16BE(i + 2)
    if (length < 2) return null

    // SOF0/1/2/3, 5/6/7, 9/10/11, 13/14/15. Excludes 0xC4 (DHT), 0xC8 (JPG)
    // and 0xCC (DAC), which share the range but carry no frame header.
    const isSof =
      marker >= 0xc0 &&
      marker <= 0xcf &&
      marker !== 0xc4 &&
      marker !== 0xc8 &&
      marker !== 0xcc

    if (isSof) {
      if (i + 9 > b.length) return null
      // segment: [len:2][precision:1][height:2][width:2]
      return { height: b.readUInt16BE(i + 5), width: b.readUInt16BE(i + 7) }
    }

    i += 2 + length
  }
  return null
}

/** PNG: the IHDR chunk is always first and always at a fixed offset. */
function pngSize(b: Buffer): ImageSize | null {
  if (b.length < 24) return null
  if (b.readUInt32BE(0) !== 0x89504e47 || b.readUInt32BE(4) !== 0x0d0a1a0a) return null
  if (b.toString('ascii', 12, 16) !== 'IHDR') return null
  return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) }
}

/** WebP: three sub-formats, each storing the size differently. */
function webpSize(b: Buffer): ImageSize | null {
  if (b.length < 30) return null
  if (b.toString('ascii', 0, 4) !== 'RIFF' || b.toString('ascii', 8, 12) !== 'WEBP') return null

  const fourcc = b.toString('ascii', 12, 16)

  if (fourcc === 'VP8X') {
    // 24-bit little-endian, stored as value minus one.
    const width = 1 + (b[24] | (b[25] << 8) | (b[26] << 16))
    const height = 1 + (b[27] | (b[28] << 8) | (b[29] << 16))
    return { width, height }
  }

  if (fourcc === 'VP8L') {
    const bits = b.readUInt32LE(21)
    return { width: 1 + (bits & 0x3fff), height: 1 + ((bits >> 14) & 0x3fff) }
  }

  if (fourcc === 'VP8 ') {
    // Lossy keyframe: 3-byte start code 0x9d012a, then 14-bit w/h.
    if (b[23] !== 0x9d || b[24] !== 0x01 || b[25] !== 0x2a) return null
    return {
      width: b.readUInt16LE(26) & 0x3fff,
      height: b.readUInt16LE(28) & 0x3fff,
    }
  }

  return null
}

/**
 * Reads the intrinsic size of an image on disk. Only the first 64KB is read,
 * which is far more than any of these headers need.
 */
export function imageSize(absPath: string): ImageSize | null {
  let buf: Buffer
  try {
    const fd = fs.openSync(absPath, 'r')
    try {
      buf = Buffer.alloc(65536)
      const read = fs.readSync(fd, buf, 0, 65536, 0)
      buf = buf.subarray(0, read)
    } finally {
      fs.closeSync(fd)
    }
  } catch {
    return null
  }

  const size = jpegSize(buf) ?? pngSize(buf) ?? webpSize(buf)
  if (!size) return null
  if (!Number.isFinite(size.width) || !Number.isFinite(size.height)) return null
  if (size.width <= 0 || size.height <= 0) return null
  return size
}
