export default function imageLoader({ src, width, quality }) {
  console.log('Image loader called with:', src);
  
  // Se for uma URL externa, retornar como está
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('//')) {
    console.log('External URL detected:', src);
    return src;
  }
  
  // Sempre adicionar basePath para imagens locais no GitHub Pages
  const basePath = '/sinergy';
  
  // Se o src já incluir o basePath, não adicionar novamente
  if (src.startsWith(basePath)) {
    console.log('BasePath already present:', src);
    return src;
  }
  
  // Adicionar basePath para imagens locais
  const finalUrl = `${basePath}${src}`;
  console.log('Generated URL:', finalUrl);
  return finalUrl;
}