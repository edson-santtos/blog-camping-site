import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join, extname } from 'path';

const imagesDir = './public/images';
const outputDir = './public/images/webp';

const supportedExts = ['.jpg', '.jpeg', '.png'];

async function convertToWebP() {
  await import('fs').then(fs => {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
  });

  const files = await readdir(imagesDir);
  
  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (!supportedExts.includes(ext)) continue;

    const inputPath = join(imagesDir, file);
    const outputFile = file.replace(ext, '.webp');
    const outputPath = join(outputDir, outputFile);

    try {
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      const inputStats = (await import('fs')).statSync(inputPath);
      const outputStats = (await import('fs')).statSync(outputPath);
      const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
      
      console.log(`✓ ${file} → ${outputFile} (${reduction}% menor)`);
    } catch (err) {
      console.error(`✗ Erro ao converter ${file}:`, err.message);
    }
  }
}

convertToWebP();
