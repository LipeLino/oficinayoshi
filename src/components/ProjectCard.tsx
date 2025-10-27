import { Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  style: 'cafe-racer' | 'bobber' | 'scrambler' | 'chopper';
  duration: string;
  imageUrl: string;
  services: string[];
  onClick?: () => void;
}

const styleColors = {
  'cafe-racer': '#D72638',
  'bobber': '#B08D57',
  'scrambler': '#7A8F4E',
  'chopper': '#6C2BD9',
};

const styleNames = {
  'cafe-racer': 'Café Racer',
  'bobber': 'Bobber',
  'scrambler': 'Scrambler',
  'chopper': 'Chopper',
};

export function ProjectCard({
  title,
  style,
  duration,
  imageUrl,
  services,
  onClick,
}: ProjectCardProps) {
  const accentColor = styleColors[style];
  const styleName = styleNames[style];

  return (
    <motion.article
      whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.2, 0.8, 0.2, 1] } }}
      className="group bg-[#151A1E] rounded-lg overflow-hidden border border-[#2A2F35] hover:border-current hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-pointer"
      style={{ '--hover-color': accentColor } as React.CSSProperties}
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0B0D0E]">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4">
          <span
            className="inline-block px-3 py-1.5 rounded-md text-white text-xs backdrop-blur-sm border transition-all group-hover:scale-105"
            style={{ 
              backgroundColor: `${accentColor}dd`,
              borderColor: accentColor 
            }}
          >
            {styleName}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-[#F2F2F2] mb-3">{title}</h3>

        <div className="flex items-center gap-2 text-[#C8CDD2] text-sm mb-4">
          <Clock size={16} aria-hidden="true" />
          <span>{duration}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {services.slice(0, 3).map((service, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-[#2A2F35] text-[#C8CDD2] text-xs rounded"
            >
              {service}
            </span>
          ))}
          {services.length > 3 && (
            <span className="px-2 py-1 text-[#C8CDD2] text-xs">
              +{services.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 group-hover:gap-3 transition-all">
          <span className="text-sm" style={{ color: accentColor }}>
            Ver projeto
          </span>
          <ArrowRight
            size={16}
            style={{ color: accentColor }}
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </div>
      </div>
    </motion.article>
  );
}
