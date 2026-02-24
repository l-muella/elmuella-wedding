const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration matching the navbar style
const config = {
  // "P | L" styling similar to navbar
  text: 'P | L',
  shortText: 'PL',
  backgroundColor: '#635f53', // Text-foreground color
  textColor: '#ffffff',
  fontFamily: 'Times New Roman, serif', // Closest to Cormorant for favicons
};

// Paths
const faviconDir = path.join(__dirname, '..', 'public', 'favicon');

// Create PL favicon function
async function createPLFavicon(size, outputPath, text = config.text) {
  const fontSize = text === config.shortText ? size * 0.5 : size * 0.4;
  const letterSpacing = text === config.shortText ? -1 : -2;

  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${size}" height="${size}" fill="${config.backgroundColor}"/>
      <text x="50%" y="50%" font-family="${config.fontFamily}"
            font-size="${fontSize}" font-weight="bold"
            fill="${config.textColor}" text-anchor="middle"
            dominant-baseline="central" letter-spacing="${letterSpacing}">
        ${text}
      </text>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(outputPath);
}

// Create favicon.ico (multiple sizes in one file)
async function createFaviconICO() {
  const sizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    sizes.map(async (size) => {
      const svg = `
        <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
          <rect width="${size}" height="${size}" fill="${config.backgroundColor}"/>
          <text x="50%" y="50%" font-family="${config.fontFamily}"
                font-size="${size * 0.5}" font-weight="bold"
                fill="${config.textColor}" text-anchor="middle"
                dominant-baseline="central" letter-spacing="-1">
            ${config.shortText}
          </text>
        </svg>
      `;
      return sharp(Buffer.from(svg)).png().toBuffer();
    })
  );

  // Create ICO manually with proper header
  const iconDir = createIconDirectory(pngBuffers, sizes);
  fs.writeFileSync(path.join(faviconDir, 'favicon.ico'), iconDir);
}

// Create ICO directory structure
function createIconDirectory(images, sizes) {
  const numImages = images.length;
  const entrySize = 16; // ICONDIR entry size
  const headerSize = 6 + (numImages * entrySize);

  // Calculate data offset
  let dataOffset = headerSize;
  const imageSizeData = images.map((img) => {
    const size = img.length;
    const offset = dataOffset;
    dataOffset += size;
    return { size, offset };
  });

  // Write ICO header
  const header = Buffer.alloc(headerSize + images.reduce((acc, img) => acc + img.length, 0));

  // ICONDIR header (6 bytes)
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type: 1 = ICO
  header.writeUInt16LE(numImages, 4); // Number of images

  // ICONDIRENTRY for each image
  let entryOffset = 6;
  images.forEach((img, i) => {
    const size = sizes[i];
    header.writeUInt8(size >= 256 ? 0 : size, entryOffset); // Width
    header.writeUInt8(size >= 256 ? 0 : size, entryOffset + 1); // Height
    header.writeUInt8(0, entryOffset + 2); // Color palette
    header.writeUInt8(0, entryOffset + 3); // Reserved
    header.writeUInt16LE(1, entryOffset + 4); // Color planes
    header.writeUInt16LE(32, entryOffset + 6); // Bits per pixel
    header.writeUInt32LE(img.length, entryOffset + 8); // Image size
    header.writeUInt32LE(imageSizeData[i].offset, entryOffset + 12); // Image offset
    entryOffset += entrySize;
  });

  // Write image data
  let currentOffset = headerSize;
  images.forEach((img) => {
    img.copy(header, currentOffset);
    currentOffset += img.length;
  });

  return header;
}

// Create SVG favicon (best for modern browsers)
function createSVGFavicon() {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="${config.backgroundColor}"/>
  <text x="50" y="50" font-family="${config.fontFamily}"
        font-size="42" font-weight="bold"
        fill="${config.textColor}" text-anchor="middle"
        dominant-baseline="central" letter-spacing="-2">
    P | L
  </text>
</svg>`;

  fs.writeFileSync(path.join(faviconDir, 'favicon.svg'), svg);
}

// Main execution
async function main() {
  console.log('Generating PL favicons...');

  // Create favicon.svg
  createSVGFavicon();
  console.log('✓ Created favicon.svg');

  // Create favicon-96x96.png
  await createPLFavicon(96, path.join(faviconDir, 'favicon-96x96.png'));
  console.log('✓ Created favicon-96x96.png');

  // Create apple-touch-icon.png (180x180)
  await createPLFavicon(180, path.join(faviconDir, 'apple-touch-icon.png'));
  console.log('✓ Created apple-touch-icon.png');

  // Create web-app-manifest-192x192.png
  await createPLFavicon(192, path.join(faviconDir, 'web-app-manifest-192x192.png'));
  console.log('✓ Created web-app-manifest-192x192.png');

  // Create web-app-manifest-512x512.png
  await createPLFavicon(512, path.join(faviconDir, 'web-app-manifest-512x512.png'));
  console.log('✓ Created web-app-manifest-512x512.png');

  // Create favicon.ico
  await createFaviconICO();
  console.log('✓ Created favicon.ico');

  console.log('\n✅ All favicons generated successfully!');
  console.log('\nFile sizes:');
  const files = fs.readdirSync(faviconDir);
  files.forEach(file => {
    const filePath = path.join(faviconDir, file);
    const stats = fs.statSync(filePath);
    console.log(`  ${file}: ${(stats.size / 1024).toFixed(2)} KB`);
  });
}

main().catch(console.error);
