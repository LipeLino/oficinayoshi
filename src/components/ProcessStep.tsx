import { motion } from 'motion/react';
import { Check } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  status?: 'completed' | 'active' | 'pending';
  isLast?: boolean;
}

export function ProcessStep({
  number,
  title,
  description,
  status = 'pending',
  isLast = false,
}: ProcessStepProps) {
  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return '#22C55E';
      case 'active':
        return '#D72638';
      default:
        return '#2A2F35';
    }
  };

  const statusColor = getStatusColor();

  return (
    <div className="flex gap-6">
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: number * 0.1 }}
          className="w-12 h-12 rounded-full flex items-center justify-center border-2 relative z-10 bg-[#151A1E]"
          style={{ borderColor: statusColor }}
        >
          {status === 'completed' ? (
            <Check size={20} style={{ color: statusColor }} aria-label="Concluído" />
          ) : (
            <span className="font-bold" style={{ color: statusColor, fontFamily: 'Oswald, sans-serif' }}>
              {number}
            </span>
          )}
        </motion.div>

        {!isLast && (
          <div
            className="w-0.5 h-full min-h-16 mt-2"
            style={{ backgroundColor: '#2A2F35' }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: number * 0.1 + 0.1 }}
        className="flex-1 pb-12"
      >
        <h3 className="text-[#F2F2F2] mb-2">{title}</h3>
        <p className="text-[#C8CDD2] text-sm leading-relaxed">{description}</p>
      </motion.div>
    </div>
  );
}
