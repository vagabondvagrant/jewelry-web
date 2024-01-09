import React from 'react';
import { useSpring, animated } from 'react-spring';
import Featured4 from '../Featured/Featured4.avif';
import Featured2 from '../Featured/Featured2.avif';
import { useCart, Item as CartItem } from '../Context/CartContext';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const getRandomPrice = () => {
  return Math.floor(Math.random() * (500 - 50 + 1) + 50);
};

const items = [
  { id: 1, name: 'Antique Ring ', image: Featured4, price: getRandomPrice() },
  { id: 2, name: 'Vintage Bangles', image: Featured2, price: getRandomPrice() },
];

const Home: React.FC = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 200,
  });

  const itemAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(1.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 200, friction: 12 },
  });

  const { addToCart } = useCart(); 

  const handleAddToCart = (item: CartItem) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <animated.div style={fadeIn} className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-3 text-center bg-customcolor opacity-80 rounded-lg text-white">Antique Jewelry</h1>
      <animated.div style={itemAnimation} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <animated.div key={item.id} className="bg-white p-4 rounded shadow-md" style={itemAnimation}>
            <animated.img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-cover mb-4 rounded"
              style={itemAnimation}
            />
            <animated.h2 className="text-xl font-semibold text-center" style={itemAnimation}>
              {item.name}
            </animated.h2>
            <p className="text-gray-500 font-semibold text-center">Price: ${item.price}</p>
            <div className='flex justify-center'>
            <button
              onClick={() => handleAddToCart(item)}
              className="bg-blue-600 text-white py-2 px-4 rounded-full mt-2 hover:bg-blue-400 hover:text-white hover:font-semibold"
            >
              Add to Cart
            </button>
            </div>
          </animated.div>
        ))}
      </animated.div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </animated.div>
  );
};

export default Home;
