import React from 'react';
import AnimatedScrollComponent from './ScrollAnimation';
import { useCart } from '../Context/CartContext';
import { toast } from 'react-toastify'; // Import the toast module
import 'react-toastify/dist/ReactToastify.css'; // Import the styles for toast notifications
import First from './First.jpg';
import Sec from './Sec.jpg';
import Thi from './Thi.jpg';
import Fou from './Fou.jpg';
import Five from './Five.jpg';
import Six from './Six.jpg';
import Sev from './Sev.jpg';
import Eight from './Eight.jpg';

const JewelryScroll: React.FC = () => {
  const { addToCart } = useCart();

  const jewelryData = [
    { id: 1, image: First, name: 'Expensive Jewelry 1', description: 'This is a beautiful piece of jewelry with intricate design.', price: 1000 },
    { id: 2, image: Sec, name: 'Expensive Jewelry 2', description: 'A stunning and elegant jewelry piece that catches everyone\'s attention.', price: 1200 },
    { id: 3, image: Thi, name: 'Expensive Jewelry 3', description: 'Elevate your style with this unique and eye-catching jewelry.', price: 800 },
    { id: 4, image: Fou, name: 'Expensive Jewelry 4', description: 'Make a statement with this bold and luxurious jewelry.', price: 1500 },
    { id: 5, image: Five, name: 'Expensive Jewelry 5', description: 'An exquisite piece of jewelry that adds a touch of sophistication.', price: 900 },
    { id: 6, image: Six, name: 'Expensive Jewelry 6', description: 'This jewelry is a perfect blend of modern and classic design.', price: 1100 },
    { id: 7, image: Sev, name: 'Expensive Jewelry 7', description: 'Unique and timeless, this jewelry complements any outfit.', price: 1300 },
    { id: 8, image: Eight, name: 'Expensive Jewelry 8', description: 'Experience elegance and charm with this captivating jewelry.', price: 1000 },
  ];

  const handleAddToCart = (jewelry:any) => {
    addToCart(jewelry);
    toast.success(`${jewelry.name} has been added to the cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="flex flex-row flex-wrap bg-gray-700 p-4 md:bg-gray-900 justify-center md:grid md:grid-cols-3 md:gap-5">
      <div className="col-span-full flex justify-center items-center mb-7 w-full">
        <h1 className="text-2xl font-bold text-white md:text-4xl md:mt-6">Expensive Jewelry Collection</h1>
      </div>
      {jewelryData.map((jewelry) => (
        <AnimatedScrollComponent
          key={jewelry.id}
          image={jewelry.image}
          name={jewelry.name}
          description={jewelry.description}
          price={jewelry.price}
          onClick={() => handleAddToCart(jewelry)} 
        />
      ))}
       <footer className="flex justify-center text-center text-white mt-auto py-4 md:py-8 md:text-[30px] font-semibold ">
        <p className='hover:bg-customcolor hover:rounded-lg  '>&copy; 2023 Expensive Jewelry Collection. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default JewelryScroll;
