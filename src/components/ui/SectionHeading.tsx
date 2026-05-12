import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

export const SectionHeading = ({ title, subtitle, light = false, className }: SectionHeadingProps) => (
  <div className={cn("mb-16", className)}>
    <motion.div 
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      className={cn("h-1 w-24 mb-4", light ? 'bg-accent' : 'bg-primary')}
    />
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("text-4xl md:text-5xl font-display font-bold mb-4", light ? 'text-white' : 'text-dark')}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn("max-w-xl text-lg", light ? 'text-white/70' : 'text-primary/70')}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);
