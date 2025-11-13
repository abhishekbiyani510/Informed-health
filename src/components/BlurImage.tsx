import { useState, useEffect } from 'react';

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
}

const BlurImage = ({ src, alt, className = '' }: BlurImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`
          absolute inset-0 
          ${isLoading ? 'animate-pulse bg-muted' : 'opacity-0'}
          transition-opacity duration-300
        `}
      />
      {currentSrc && (
        <img
          src={currentSrc}
          alt={alt}
          className={`
            w-full h-full object-cover
            ${isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0'}
            transition-all duration-300
          `}
        />
      )}
    </div>
  );
};

export default BlurImage;
