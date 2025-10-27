import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  project: string;
  rating?: number;
}

export function TestimonialCard({
  quote,
  author,
  project,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#151A1E] rounded-lg p-8 border border-[#2A2F35] h-full flex flex-col"
    >
      <Quote size={32} className="text-[#D72638] mb-4" aria-hidden="true" />
      
      <blockquote className="text-[#C8CDD2] leading-relaxed mb-6 flex-grow">
        "{quote}"
      </blockquote>

      <div className="flex items-center gap-2 mb-3" aria-label={`Avaliação: ${rating} de 5 estrelas`}>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill={i < rating ? '#D72638' : '#2A2F35'}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M8 0L10.3511 5.52786L16 6.21885L11.9 10.0279L12.9389 15.7812L8 13.0557L3.06107 15.7812L4.1 10.0279L0 6.21885L5.64886 5.52786L8 0Z" />
          </svg>
        ))}
      </div>

      <footer>
        <p className="text-[#F2F2F2]">{author}</p>
        <p className="text-[#C8CDD2] text-sm">{project}</p>
      </footer>
    </motion.article>
  );
}
