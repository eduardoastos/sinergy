export default function imageLoader({ src, width, quality }) {
  const basePath = process.env.NODE_ENV === 'production' ? '/sinergy' : '';
  
  // Se o src já incluir o basePath, não adicionar novamente
  if (src.startsWith(basePath)) {
    return src;
  }
  
  // Se for uma URL externa, retornar como está
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('//')) {
    return src;
  }
  
  // Adicionar basePath para imagens locais
  return `${basePath}${src}`;
}