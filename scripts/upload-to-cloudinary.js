/* eslint-disable */
require('dotenv').config({ path: '.env.local' });
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  console.error('Error: Please configure NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in your .env.local file.');
  process.exit(1);
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret
});

const foldersToUpload = [
  { localDir: 'public/bathrooms', cloudSubDir: 'bathrooms' },
  { localDir: 'public/rooms', cloudSubDir: 'rooms' },
  { localDir: 'public/video', cloudSubDir: 'video', resourceType: 'video' },
  { localDir: 'public/images/experiences', cloudSubDir: 'images/experiences' },
  { localDir: 'public/images/wildlife', cloudSubDir: 'images/wildlife' },
  { localDir: 'src/assets/images', cloudSubDir: 'src/assets/images' },
  { localDir: 'public', cloudSubDir: '', isRoot: true } // root level assets
];

async function uploadFile(filePath, cloudPath, resourceType = 'image') {
  try {
    const folder = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER !== undefined 
      ? process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER 
      : 'hotel-sunrise';
    
    // Combine configured root folder with sub-directory
    const targetFolder = folder 
      ? (cloudPath ? `${folder}/${cloudPath}` : folder) 
      : cloudPath;

    const filename = path.basename(filePath, path.extname(filePath));
    console.log(`Uploading ${filePath} to Cloudinary under folder "${targetFolder}" as "${filename}"...`);
    
    const result = await cloudinary.uploader.upload(filePath, {
      folder: targetFolder,
      use_filename: true,
      unique_filename: false,
      resource_type: resourceType
    });
    console.log(`Successfully uploaded! URL: ${result.secure_url}`);
  } catch (error) {
    console.error(`Failed to upload ${filePath}:`, error.message);
  }
}

async function run() {
  for (const folder of foldersToUpload) {
    const localPath = path.join(process.cwd(), folder.localDir);
    if (!fs.existsSync(localPath)) {
      console.log(`Folder not found: ${localPath}, skipping.`);
      continue;
    }

    const files = fs.readdirSync(localPath);
    for (const file of files) {
      const fullPath = path.join(localPath, file);
      const stat = fs.statSync(fullPath);

      // Skip subfolders to prevent duplicate uploads
      if (stat.isDirectory()) {
        continue;
      }

      // Check extensions
      const ext = path.extname(file).toLowerCase();
      if (!['.jpg', '.jpeg', '.png', '.svg', '.gif', '.mp4', '.webm'].includes(ext)) {
        continue;
      }

      // Skip Next.js standard svgs in root public folder
      if (folder.isRoot && ['file.svg', 'globe.svg', 'next.svg', 'vercel.svg', 'window.svg'].includes(file)) {
        continue;
      }

      const resourceType = folder.resourceType || (ext === '.mp4' || ext === '.webm' ? 'video' : 'image');
      await uploadFile(fullPath, folder.cloudSubDir, resourceType);
    }
  }
  console.log('Upload process completed!');
}

run();
