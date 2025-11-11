import sharp from 'sharp';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const execAsync = promisify(exec);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, 'src', 'assets');

// Large PNG files to optimize
const pngFiles = [
  'Bike-RustedOrgange.png',
  'WomenCard-RustedOrgange.png',
  'DeliveryMan-RustedOrgange.png',
  'BraaiStand-RustedOrgange.png',
  'logo.png',
  'loyalty.png'
];

// Video files to optimize
const videoFiles = [
  { input: 'grilling.mp4', output: 'grilling-optimized.mp4' },
  { input: 'food-delivery.mp4', output: 'food-delivery-optimized.mp4' },
  { input: 'women-buying-groceries.mp4', output: 'women-buying-groceries-optimized.mp4' }
];

async function optimizePNGs() {
  console.log('🖼️  Optimizing PNG files...\n');

  for (const file of pngFiles) {
    const inputPath = path.join(assetsDir, file);
    const outputPath = path.join(assetsDir, file.replace('.png', '-optimized.webp'));

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${file} - not found`);
      continue;
    }

    try {
      const inputStats = fs.statSync(inputPath);
      const inputSizeMB = (inputStats.size / 1024 / 1024).toFixed(2);

      await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);

      const outputStats = fs.statSync(outputPath);
      const outputSizeMB = (outputStats.size / 1024 / 1024).toFixed(2);
      const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

      console.log(`✅ ${file}`);
      console.log(`   ${inputSizeMB}MB → ${outputSizeMB}MB (${reduction}% reduction)\n`);
    } catch (error) {
      console.error(`❌ Error optimizing ${file}:`, error.message);
    }
  }
}

async function optimizeVideos() {
  console.log('\n🎥 Optimizing video files...\n');

  for (const { input, output } of videoFiles) {
    const inputPath = path.join(assetsDir, input);
    const outputPath = path.join(assetsDir, output);

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${input} - not found`);
      continue;
    }

    if (fs.existsSync(outputPath)) {
      console.log(`⚠️  Skipping ${input} - optimized version already exists`);
      continue;
    }

    try {
      const inputStats = fs.statSync(inputPath);
      const inputSizeMB = (inputStats.size / 1024 / 1024).toFixed(2);

      console.log(`   Processing ${input} (${inputSizeMB}MB)...`);

      // Optimize video: reduce resolution if > 1080p, compress with H.264, reduce bitrate
      await execAsync(
        `ffmpeg -i "${inputPath}" -vf "scale='min(1920,iw)':min(1080,ih):force_original_aspect_ratio=decrease" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k -movflags +faststart "${outputPath}"`,
        { maxBuffer: 10 * 1024 * 1024 }
      );

      const outputStats = fs.statSync(outputPath);
      const outputSizeMB = (outputStats.size / 1024 / 1024).toFixed(2);
      const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

      console.log(`✅ ${input}`);
      console.log(`   ${inputSizeMB}MB → ${outputSizeMB}MB (${reduction}% reduction)\n`);
    } catch (error) {
      console.error(`❌ Error optimizing ${input}:`, error.message);
    }
  }
}

async function main() {
  console.log('🚀 Starting media optimization...\n');

  await optimizePNGs();
  await optimizeVideos();

  console.log('\n✨ Optimization complete!');
  console.log('💡 Remember to update import paths in your components to use -optimized files');
}

main().catch(console.error);
