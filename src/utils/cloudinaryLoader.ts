export default function cloudinaryLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  // If it's already an external URL (like Unsplash) or the updated turtle image/hero-poster, return it as is
  if (src.startsWith('http://') || src.startsWith('https://') || src.includes('turtle.jpg') || src.includes('hero-poster-')) {
    return src;
  }

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) {
    return src; // Fallback to local files
  }

  // Normalize path by removing leading slash
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;

  // Cloudinary transformations: auto format, auto quality, and responsive width
  const params = ['f_auto', 'q_auto', `w_${width}`];
  if (quality) {
    params.push(`q_${quality}`);
  }

  // Allow configuring folder prefix (default is "hotel-sunrise"). If set to "", serves from root
  const folder = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER !== undefined 
    ? process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER 
    : 'hotel-sunrise';
  const folderPrefix = folder ? `${folder}/` : '';

  return `https://res.cloudinary.com/${cloudName}/image/upload/${params.join(',')}/${folderPrefix}${cleanSrc}`;
}
