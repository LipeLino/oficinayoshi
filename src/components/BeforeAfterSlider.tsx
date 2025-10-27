import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging && e.type !== 'click') return;

    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    
    let clientX: number;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  return (
    <div className="relative">
      <h3 className="text-[#F2F2F2] mb-4">{title}</h3>
      
      <div
        className="relative aspect-[16/10] overflow-hidden rounded-lg cursor-ew-resize select-none bg-[#0B0D0E]"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleMove}
        onClick={handleMove}
        role="img"
        aria-label={`Comparação antes e depois: ${title}`}
      >
        {/* After Image (background) */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={afterImage}
            alt={`${title} - Depois`}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-[#22C55E] text-white px-3 py-1 rounded text-xs">
            Depois
          </div>
        </div>

        {/* Before Image (overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <ImageWithFallback
            src={beforeImage}
            alt={`${title} - Antes`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: `${(100 / sliderPosition) * 100}%` }}
          />
          <div className="absolute bottom-4 left-4 bg-[#2A2F35] text-white px-3 py-1 rounded text-xs">
            Antes
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
          aria-hidden="true"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <ChevronLeft size={16} className="text-[#0B0D0E] absolute left-1" />
            <ChevronRight size={16} className="text-[#0B0D0E] absolute right-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
