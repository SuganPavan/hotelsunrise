import type { NextConfig } from "next";
import * as fs from "fs";
import * as path from "path";

// Copy wildlife files from temp directory
const srcDir = "C:\\Users\\sugan\\.gemini\\antigravity\\brain\\de305fed-f56e-4524-aebc-1b4f44d9e403";
const destDir = "D:\\Hotel_Andaman\\public\\images\\wildlife";
const srcDestDir = "D:\\Hotel_Andaman\\src\\assets\\images";

try {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  if (!fs.existsSync(srcDestDir)) {
    fs.mkdirSync(srcDestDir, { recursive: true });
  }

  // Files to copy
  const filesMap: Record<string, { name: string; dir: string }> = {
    "media__1784952180872.jpg": { name: "viper.jpg", dir: srcDir },
    "media__1784953059256.png": { name: "crocodile.png", dir: srcDir },
    "media_1786547161345.jpg": { name: "turtle.jpg", dir: "C:\\Users\\sugan\\.gemini\\antigravity\\brain\\faa8c06a-9592-4a46-897f-b15f3c2daa8b\\.user_uploaded" },
    "media__1784953131422.jpg": { name: "gecko.jpg", dir: srcDir },
    "media__1784953158649.png": { name: "keelback.png", dir: srcDir }
  };

  for (const [srcName, info] of Object.entries(filesMap)) {
    const srcPath = path.join(info.dir, srcName);
    
    // Copy to public
    const destPath = path.join(destDir, info.name);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
    }
    
    // Copy to src/assets/images
    const srcDestPath = path.join(srcDestDir, info.name);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, srcDestPath);
    }
  }
} catch (err) {
  console.error("Error copying wildlife files:", err);
}

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/utils/cloudinaryLoader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;

