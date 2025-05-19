import sharp from 'sharp';

const sizes = [192, 512];
const sourceIcon = 'public/icon.png'; // You'll need to add this source icon

async function generateIcons() {
  for (const size of sizes) {
    await sharp(sourceIcon)
      .resize(size, size)
      .toFile(`public/pwa-${size}x${size}.png`);
  }
}

generateIcons().catch(console.error); 