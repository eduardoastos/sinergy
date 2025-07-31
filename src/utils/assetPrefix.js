export function getAssetPrefix(path) {
  const basePath = process.env.NODE_ENV === 'production' ? '/sinergy' : '';
  return `${basePath}${path}`;
}