import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * كشف الصورة داخل قناع (clip-path) مع Parallax خفيف.
 * إن لم توجد صورة يظهر Placeholder أنيق بدل الفراغ.
 */
export default function ImageReveal({ src, alt = '', className = '', parallax = 40, direction = 'up' }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-parallax, parallax]);

  const hidden = {
    up: 'inset(100% 0% 0% 0%)',
    left: 'inset(0% 100% 0% 0%)',
    right: 'inset(0% 0% 0% 100%)',
  }[direction];

  return (
    <motion.div
      ref={ref}
      className={`image-reveal ${className}`}
      initial={false}
      whileInView={{
        clipPath: 'inset(0% 0% 0% 0%)',
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 1.3,
        ease: [0.76, 0, 0.24, 1],
      }}
      style={{
        overflow: 'hidden',
        willChange: 'clip-path',
      }}>
      {src ?
        <motion.img
          src={src}
          alt={alt}
          loading='eager'
          decoding='async'
          style={{
            y,
            scale: 1.15,
            willChange: 'transform',
          }}
          className='image-reveal__img'
        />
      : <div className='image-reveal__empty' aria-hidden='true' />}
    </motion.div>
  );
}
