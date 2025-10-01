const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const optimizeImage = async (inputPath, outputPath, options = {}) => {
  try {
    const { width = 1920, quality = 85, format = 'webp' } = options;

    await sharp(inputPath)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality })
      .toFile(outputPath);

    const originalSize = (await fs.stat(inputPath)).size;
    const optimizedSize = (await fs.stat(outputPath)).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);

    console.log(`✓ ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    console.log(`  Size: ${(originalSize/1024/1024).toFixed(1)}MB → ${(optimizedSize/1024/1024).toFixed(1)}MB (${savings}% reduction)\n`);

    return { originalSize, optimizedSize, savings };
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
  }
};

const optimizeImages = async () => {
  const assetsDir = 'src/assets';

  // Large images to optimize
  const imagesToOptimize = [
    {
      input: `${assetsDir}/isolated-bike.png`,
      output: `${assetsDir}/isolated-bike-optimized.webp`,
      width: 800 // Bike image doesn't need to be huge
    },
    {
      input: `${assetsDir}/ManCutting.png`,
      output: `${assetsDir}/ManCutting-optimized.webp`,
      width: 1200
    },
    {
      input: `${assetsDir}/cutting-meat-old.png`,
      output: `${assetsDir}/cutting-meat-optimized.webp`,
      width: 1200
    },
    {
      input: `${assetsDir}/isolated meat 4-transparent.png`,
      output: `${assetsDir}/isolated-meat-4-optimized.webp`,
      width: 800
    },
    {
      input: `${assetsDir}/Delivery-in-yellow.jpg`,
      output: `${assetsDir}/Delivery-in-yellow-optimized.webp`,
      width: 1200
    },
    {
      input: `${assetsDir}/raw-beef-steaks-2024-09-17-03-02-53-utc-Qs-9Wr_u.jpg`,
      output: `${assetsDir}/raw-beef-steaks-optimized.webp`,
      width: 1200
    },
    {
      input: `${assetsDir}/raw-beef-steaks-2024-09-17-03-02-53-utc.jpg`,
      output: `${assetsDir}/raw-beef-steaks-2-optimized.webp`,
      width: 1200
    },
    {
      input: `${assetsDir}/black-deliveryman-holding-eco-mesh-bag-with-grocer-2025-03-18-18-17-38-utc.jpg`,
      output: `${assetsDir}/deliveryman-optimized.webp`,
      width: 1200
    },
    {
      input: `${assetsDir}/women-buying-groceries.jpg`,
      output: `${assetsDir}/women-groceries-optimized.webp`,
      width: 1200
    },
    {
      input: `${assetsDir}/isolated meat 3-transparent.png`,
      output: `${assetsDir}/isolated-meat-3-optimized.webp`,
      width: 800
    },
    {
      input: `${assetsDir}/womangroceries.jpg`,
      output: `${assetsDir}/womangroceries-optimized.webp`,
      width: 1200
    },
    {
      input: `${assetsDir}/raw-meat-steaks-on-a-dark-background-ready-to-roas-2025-02-12-22-41-18-utc.jpg`,
      output: `${assetsDir}/raw-meat-steaks-dark-optimized.webp`,
      width: 1200
    },
    {
      input: `${assetsDir}/isolated-grocery-bag.png`,
      output: `${assetsDir}/isolated-grocery-bag-optimized.webp`,
      width: 600
    },
    {
      input: `${assetsDir}/Isolated meat 2-transparent.png`,
      output: `${assetsDir}/isolated-meat-2-optimized.webp`,
      width: 800
    },
    {
      input: `${assetsDir}/isolated meat-transparent.png`,
      output: `${assetsDir}/isolated-meat-1-optimized.webp`,
      width: 800
    },
    {
      input: `${assetsDir}/grilled-kebabs-and-vegetables-cooking-on-a-barbecu-2025-04-05-03-50-29-utc-DpONd5qP.jpg`,
      output: `${assetsDir}/grilled-kebabs-optimized.webp`,
      width: 1200
    }
  ];

  console.log('Starting image optimization...\n');

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const { input, output, width } of imagesToOptimize) {
    try {
      await fs.access(input);
      const result = await optimizeImage(input, output, { width, quality: 85 });
      if (result) {
        totalOriginalSize += result.originalSize;
        totalOptimizedSize += result.optimizedSize;
      }
    } catch (error) {
      console.log(`⚠ Skipping ${input} (file not found)`);
    }
  }

  const totalSavings = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
  console.log(`\n🎉 Total optimization complete!`);
  console.log(`📊 Total size reduction: ${(totalOriginalSize/1024/1024).toFixed(1)}MB → ${(totalOptimizedSize/1024/1024).toFixed(1)}MB`);
  console.log(`💾 Space saved: ${((totalOriginalSize - totalOptimizedSize)/1024/1024).toFixed(1)}MB (${totalSavings}% reduction)`);
};

optimizeImages().catch(console.error);