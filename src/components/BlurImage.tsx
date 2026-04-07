import { useState, useEffect } from 'react';

interface BlurImageProps {
  src: string;
  srcSmall: string;
  alt: string;
  className?: string;
}

const BlurImage = ({ src, srcSmall, alt, className = '' }: BlurImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`
          absolute inset-0 bg-cover bg-center
          transition-opacity duration-300
          ${isLoaded ? 'opacity-0' : 'opacity-100 blur-md'}
        `}
        style={{ backgroundImage: `url(${srcSmall})` }}
      />
      <img
        src={src}
        alt={alt}
        className={`
          w-full h-full object-cover
          transition-opacity duration-300
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
        `}
      />
    </div>
  );
};

export default BlurImage;
