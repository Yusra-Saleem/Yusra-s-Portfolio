const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const projectsDir = path.join(__dirname, '../public/projects');
const outputDir = path.join(__dirname, '../public/projects');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Convert and optimize images
async function optimizeImages() {
  try {
    const files = fs.readdirSync(projectsDir);
    
    for (const file of files) {
      if (file.match(/\.(png|jpe?g)$/i)) {
        const inputPath = path.join(projectsDir, file);
        const outputPath = path.join(outputDir, `${path.parse(file).name}.webp`);
        
        await sharp(inputPath)
          .webp({ quality: 85 })
          .resize({ 
            width: 1280,
            height: 720,
            fit: 'cover',
            withoutEnlargement: true
          })
          .toFile(outputPath);
        
        console.log(`Converted ${file} to WebP format`);
      }
    }
    
    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();
