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
      {image && <img src={image} alt="Jewelry" className="w-full h-30 rounded-[16px]" />}
      {name && <p className="text-xl text-white font-semibold hover:bg-gray-500 hover:rounded-lg hover:text-gray-900 hover:font-semibold text-center">{name}</p>}
      {description && <p className='text-white font-semibold hover:bg-gray-500 hover:rounded-lg'>{description}</p>}
      {price && <p className="text-white bg-gray-500 rounded-lg font-bold hover:bg-slate-500  hover:rounded-lg text-center">Price: ${price}</p>}
      <div className="flex justify-center items-center">
  <button className="bg-blue-700 hover:bg-blue-500 rounded-[15px] text-white p-2 md:rounded-[25px] mt-3 mb-2 md:mt-3" onClick={onClick}>
    Add to Cart
  </button>
</div>

    </motion.div>
  );
};

export default AnimatedScrollComponent;
