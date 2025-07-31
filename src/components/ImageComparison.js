'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './ImageComparison.module.css';

export default function ImageComparison() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const containerWidth = container.offsetWidth;
    
    const newPosition = (x / containerWidth) * 100;
    setPosition(Math.min(100, Math.max(0, newPosition)));
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    e.preventDefault(); // Previne o scroll durante o toque
    handleMove(e.touches[0].clientX);
  };

  return (
    <div 
      ref={containerRef}
      className={styles.container}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <div className={styles.imgWrapper}>
        <Image
          src="/imagem02.png"
          alt="Antes"
          fill
          className={styles.img}
        />
      </div>
      <div 
        className={styles.imgWrapper}
        style={{ width: `${position}%` }}
      >
        <Image
          src="/imagem01.png"
          alt="Depois"
          fill
          className={styles.img}
        />
      </div>
      <div 
        className={styles.slider}
        style={{ left: `${position}%` }}
      >
        <div className={styles.handle}>
          <Image
            src="/logo_small.svg"
            alt="Logo handle"
            width={32}
            height={32}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
      <div className={styles.labels}>
        {/* <span className={styles.beforeLabel}>Antes</span>
        <span className={styles.afterLabel}>Depois</span> */}
      </div>
    </div>
  );
} 