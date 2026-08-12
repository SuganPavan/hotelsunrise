/* eslint-disable */
require('dotenv').config({ path: '.env.local' });
const cloudinary = require('cloudinary').v2;

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

console.log("=== Cloudinary Configuration Diagnostic ===");
console.log("NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME:", cloudName || "(Not set)");
console.log("CLOUDINARY_API_KEY:", apiKey ? "Configured (Hidden)" : "(Not set)");
console.log("CLOUDINARY_API_SECRET:", apiSecret ? "Configured (Hidden)" : "(Not set)");

if (!cloudName) {
  console.log("\n[WARNING] NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is not set. The website will fallback to serving images locally from the public/ folder.");
  process.exit(0);
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret
});

async function checkAsset() {
  try {
    console.log("\nAttempting to connect to Cloudinary and search for uploaded assets...");
    // Search for resources in the hotel-sunrise folder
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'hotel-sunrise',
      max_results: 10
    });
    
    if (result.resources && result.resources.length > 0) {
      console.log(`\n[SUCCESS] Connected to Cloudinary! Found ${result.resources.length} assets under 'hotel-sunrise/' prefix.`);
      console.log("\nHere are a few sample public IDs:");
      result.resources.forEach(r => {
        console.log(`- Public ID: "${r.public_id}" | Format: ${r.format} | URL: ${r.secure_url}`);
      });
      
      console.log("\nComparing with Loader URL pattern:");
      const sampleAsset = result.resources[0];
      const cleanId = sampleAsset.public_id.replace(/^hotel-sunrise\//, ""); // e.g. "rooms/double-ac"
      const loaderUrl = `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/hotel-sunrise/${cleanId}.${sampleAsset.format}`;
      console.log(`Generated Loader URL: ${loaderUrl}`);
      console.log("If this URL does not load in your browser, check if your Cloudinary account is active or if there are access restrictions.");
    } else {
      console.log("\n[WARNING] Connected to Cloudinary, but no assets were found under the 'hotel-sunrise/' folder.");
      console.log("Please run the upload script to copy your local images to Cloudinary:");
      console.log("  node scripts/upload-to-cloudinary.js");
    }
  } catch (error) {
    console.error("\n[ERROR] Failed to connect to Cloudinary API:", error.message);
    console.log("Please double-check your API key and secret credentials in .env.local.");
  }
}

if (apiKey && apiSecret) {
  checkAsset();
} else {
  console.log("\nAPI Key or Secret is not set. Cannot run API connection tests. Please verify these settings.");
}
