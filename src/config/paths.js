const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/sinergy' : '';

export const getImagePath = (path) => {
  if (path.startsWith('http')) return path;
  return `${basePath}${path}`;
}; 