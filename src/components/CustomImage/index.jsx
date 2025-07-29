import Image from 'next/image';

export default function CustomImage({ src, ...props }) {
  // Se a imagem já começa com http ou https, não adiciona o prefixo
  const imageSrc = src.startsWith('http') ? src : src;
  return <Image src={imageSrc} {...props} />;
} 