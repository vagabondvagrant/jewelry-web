import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedScrollComponentProps {
  image: string;
  description: string;
  price: number;
  name: string;
  onClick: () => void;
}

const AnimatedScrollComponent: React.FC<AnimatedScrollComponentProps> = ({ image, description, price, name, onClick }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      borderRadius: '0%',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    },
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8,
      rotate: 45,
      borderRadius: '50%',
      boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="mt-6"
    >
      {image && <img src={image} alt="Jewelry" className="w-full h-auto" />}
      {name && <p className="text-xl font-bold">{name}</p>}
      {description && <p className='text-white'>{description}</p>}
      {price && <p>Price: ${price}</p>}
      <button className="bg-blue-700 hover:bg-blue-500 rounded-[15px] text-white p-2 md:rounded-[25px] mt-1 mb-2 md:mt-3" onClick={onClick}>
        Add to Cart
      </button>
    </motion.div>
  );
};

export default AnimatedScrollComponent;
