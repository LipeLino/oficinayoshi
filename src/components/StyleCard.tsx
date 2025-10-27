import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface StyleCardProps {
  title: string;
  description: string;
  accentColor: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export function StyleCard({
  title,
  description,
  accentColor,
  icon,
  onClick,
}: StyleCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.2, 0.8, 0.2, 1] } }}
      className="group relative bg-[#151A1E] rounded-lg p-8 border border-[#2A2F35] hover:border-current hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer overflow-hidden"
      style={{ color: accentColor }}
      onClick={onClick}
    >
      <div
        className="absolute top-0 left-0 w-1 h-full rounded-l-lg transition-all duration-300 group-hover:w-1.5"
        style={{ backgroundColor: accentColor }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
        style={{ background: `radial-gradient(circle at top right, ${accentColor}, transparent 70%)` }}
        aria-hidden="true"
      />
      
      <div className="flex flex-col h-full">
        <div className="mb-4" aria-hidden="true">
          {icon}
        </div>
        
        <h3 className="text-[#F2F2F2] mb-3">{title}</h3>
        
        <p className="text-[#C8CDD2] text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        <div className="flex items-center gap-2 group-hover:gap-3 transition-all">
          <span className="text-sm font-medium" style={{ color: accentColor }}>
            Ver mais
          </span>
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </div>
      </div>
    </motion.article>
  );
}
