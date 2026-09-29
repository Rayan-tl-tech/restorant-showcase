import fs from "fs";
import path from "path";
import zlib from "zlib";

function createPng(width, height, getPixel) {
  // Build uncompressed scanlines
  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(height * rowSize);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // Filter type: None
    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const [r, g, b, a] = getPixel(x, y, width, height);
      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = a;
    }
  }

  const deflated = zlib.deflateSync(rawData);

  // PNG Signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR Chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth: 8
  ihdr[9] = 6; // color type: 6 (RGBA)
  ihdr[10] = 0; // compression: 0
  ihdr[11] = 0; // filter: 0
  ihdr[12] = 0; // interlace: 0

  const ihdrChunk = createChunk("IHDR", ihdr);
  const idatChunk = createChunk("IDAT", deflated);
  const iendChunk = createChunk("IEND", Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function createChunk(type, data) {
  const length = data.length;
  const chunk = Buffer.alloc(8 + length + 4);
  chunk.writeUInt32BE(length, 0);
  chunk.write(type, 4, 4, "ascii");
  data.copy(chunk, 8);
  const crc = crc32(chunk.subarray(4, 8 + length));
  chunk.writeUInt32BE(crc, 8 + length);
  return chunk;
}

// CRC32 implementation for PNG
function crc32(buf) {
  let crc = -1;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ -1) >>> 0;
}

const crcTable = new Uint32Array(256);
for (let i = 0; i < 256; i++) {
  let c = i;
  for (let j = 0; j < 8; j++) {
    c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  crcTable[i] = c;
}

function createIco(pngBuffers) {
  // ICO Header
  // 6 bytes header + 16 bytes per image + image data
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = ICO
  header.writeUInt16LE(count, 4); // count

  let offset = 6 + count * 16;
  const entries = [];
  const datas = [];

  for (const { width, height, buffer } of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(width >= 256 ? 0 : width, 0);
    entry.writeUInt8(height >= 256 ? 0 : height, 1);
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // image size
    entry.writeUInt32LE(offset, 12); // image offset

    entries.push(entry);
    datas.push(buffer);
    offset += buffer.length;
  }

  return Buffer.concat([header, ...entries, ...datas]);
}

// Pixel drawer for Maison Ember luxury logo (Dark charcoal base, terracotta frame, "ME" monogram)
function getMaisonEmberPixel(x, y, w, h) {
  const normX = x / w;
  const normY = y / h;

  // Corner radius check
  const cornerR = 0.18;
  const inCorner =
    (normX < cornerR && normY < cornerR && Math.hypot(normX - cornerR, normY - cornerR) > cornerR) ||
    (normX > 1 - cornerR && normY < cornerR && Math.hypot(normX - (1 - cornerR), normY - cornerR) > cornerR) ||
    (normX < cornerR && normY > 1 - cornerR && Math.hypot(normX - cornerR, normY - (1 - cornerR)) > cornerR) ||
    (normX > 1 - cornerR && normY > 1 - cornerR && Math.hypot(normX - (1 - cornerR), normY - (1 - cornerR)) > cornerR);

  if (inCorner) {
    return [0, 0, 0, 0]; // Transparent outside rounded corner
  }

  // Border check (border thickness ~ 0.05)
  const margin = 0.07;
  const borderThickness = 0.045;
  const isBorder =
    (normX >= margin && normX <= 1 - margin && (Math.abs(normY - margin) < borderThickness || Math.abs(normY - (1 - margin)) < borderThickness)) ||
    (normY >= margin && normY <= 1 - margin && (Math.abs(normX - margin) < borderThickness || Math.abs(normX - (1 - margin)) < borderThickness));

  // Terracotta gold color: #c98a6a -> rgb(201, 138, 106)
  if (isBorder) {
    return [201, 138, 106, 255];
  }

  // Draw "ME" Monogram
  // Canvas coordinate for M (left) and E (right)
  // Let's test if (normX, normY) is on M or E
  const onM = isLetterM(normX, normY);
  const onE = isLetterE(normX, normY);

  if (onM || onE) {
    return [206, 146, 115, 255]; // Terracotta warm gold
  }

  // Dark charcoal background: #131413 -> rgb(19, 20, 19)
  return [19, 20, 19, 255];
}

function isLetterM(x, y) {
  // M spans x: [0.22, 0.47], y: [0.30, 0.70]
  if (y < 0.30 || y > 0.70) return false;
  const th = 0.042; // stroke thickness

  // Left vertical stem
  if (x >= 0.22 && x <= 0.22 + th) return true;
  // Right vertical stem
  if (x >= 0.44 && x <= 0.44 + th) return true;

  // Left diagonal: from (0.23, 0.30) to (0.35, 0.58)
  const d1 = (y - 0.30) / (0.58 - 0.30); // 0 to 1
  const targetX1 = 0.24 + d1 * (0.345 - 0.24);
  if (y <= 0.58 && Math.abs(x - targetX1) < th * 0.9) return true;

  // Right diagonal: from (0.35, 0.58) to (0.45, 0.30)
  const d2 = (0.58 - y) / (0.58 - 0.30);
  const targetX2 = 0.345 + (1 - d2) * (0.44 - 0.345);
  if (y <= 0.58 && Math.abs(x - targetX2) < th * 0.9) return true;

  // Top / bottom serifs
  if (y >= 0.30 && y <= 0.33 && x >= 0.19 && x <= 0.27) return true;
  if (y >= 0.67 && y <= 0.70 && x >= 0.19 && x <= 0.27) return true;
  if (y >= 0.30 && y <= 0.33 && x >= 0.42 && x <= 0.50) return true;
  if (y >= 0.67 && y <= 0.70 && x >= 0.42 && x <= 0.50) return true;

  return false;
}

function isLetterE(x, y) {
  // E spans x: [0.54, 0.77], y: [0.30, 0.70]
  if (y < 0.30 || y > 0.70) return false;
  const th = 0.042;

  // Left vertical spine
  if (x >= 0.54 && x <= 0.54 + th) return true;

  // Top bar
  if (y >= 0.30 && y <= 0.30 + th * 0.9 && x >= 0.54 && x <= 0.76) return true;
  // Top bar serif drop
  if (x >= 0.73 && x <= 0.76 && y >= 0.30 && y <= 0.38) return true;

  // Middle bar
  if (y >= 0.48 && y <= 0.48 + th * 0.8 && x >= 0.54 && x <= 0.71) return true;

  // Bottom bar
  if (y >= 0.70 - th * 0.9 && y <= 0.70 && x >= 0.54 && x <= 0.77) return true;
  // Bottom bar serif rise
  if (x >= 0.74 && x <= 0.77 && y >= 0.62 && y <= 0.70) return true;

  // Left spine bottom & top serifs
  if (y >= 0.30 && y <= 0.33 && x >= 0.51 && x <= 0.58) return true;
  if (y >= 0.67 && y <= 0.70 && x >= 0.51 && x <= 0.58) return true;

  return false;
}

// Generate all sizes
const publicDir = path.resolve("./public");

const png16 = createPng(16, 16, getMaisonEmberPixel);
const png32 = createPng(32, 32, getMaisonEmberPixel);
const png64 = createPng(64, 64, getMaisonEmberPixel);
const png180 = createPng(180, 180, getMaisonEmberPixel);
const png192 = createPng(192, 192, getMaisonEmberPixel);
const png512 = createPng(512, 512, getMaisonEmberPixel);

// Write PNG files
fs.writeFileSync(path.join(publicDir, "favicon-16x16.png"), png16);
fs.writeFileSync(path.join(publicDir, "favicon-32x32.png"), png32);
fs.writeFileSync(path.join(publicDir, "favicon.png"), png64);
fs.writeFileSync(path.join(publicDir, "apple-touch-icon.png"), png180);
fs.writeFileSync(path.join(publicDir, "android-chrome-192x192.png"), png192);
fs.writeFileSync(path.join(publicDir, "android-chrome-512x512.png"), png512);

// Write ICO file containing 16x16, 32x32, 48x48
const ico = createIco([
  { width: 16, height: 16, buffer: png16 },
  { width: 32, height: 32, buffer: png32 },
  { width: 64, height: 64, buffer: png64 },
]);
fs.writeFileSync(path.join(publicDir, "favicon.ico"), ico);

console.log("Successfully generated all favicon formats: .ico, .png (16, 32, 64, 180, 192, 512)!");
