export function getOptimizedImageUrl(src: string, options: { width?: number; quality?: number } = {}) {
  if (!src) return '';
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) {
    return src; // Fallback to local image
  }

  // If it's already an external URL, return it as is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  // Normalize path by removing leading slash
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;

  // Cloudinary transformations: auto format (WebP/AVIF) and auto compression quality
  const transformations = ['f_auto', 'q_auto'];
  if (options.width) {
    transformations.push(`w_${options.width}`);
  }

  const transformString = transformations.join(',');

  const folder = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER !== undefined 
    ? process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER 
    : 'hotel-sunrise';
  const folderPrefix = folder ? `${folder}/` : '';

  // Return optimized Cloudinary URL pointing to the configured folder namespace
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformString}/${folderPrefix}${cleanSrc}`;
}

export function getOptimizedVideoUrl(src: string) {
  if (!src) return '';
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) {
    return src; // Fallback to local video
  }

  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;

  const folder = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER !== undefined 
    ? process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER 
    : 'hotel-sunrise';
  const folderPrefix = folder ? `${folder}/` : '';

  return `https://res.cloudinary.com/${cloudName}/video/upload/f_auto,q_auto/${folderPrefix}${cleanSrc}`;
}
