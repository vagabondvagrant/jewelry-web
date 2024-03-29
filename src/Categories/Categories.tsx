import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import CarouselComponent from './Diamond';
import Gold from './Gold';
import Bangles from './Bangles';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
type CategoriesProps = {};

type SelectedCategories = 'Diamond' | 'Gold' | 'Bangles';

const Categories: React.FC<CategoriesProps> = () => {
  const [selectedCategories, setSelectedCategories] = useState<SelectedCategories[]>([]);
  const [categoryVisibility, setCategoryVisibility] = useState<{ [key in SelectedCategories]: boolean }>({
    Diamond: false,
    Gold: false,
    Bangles: false,
  });

  const springConfig = { tension: 300, friction: 20 };
  const animateTitle = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-10px)' },
    config: springConfig,
  });

  const handleCategoryClick = (category: SelectedCategories) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(category)) {
        return prevSelectedCategories.filter((c) => c !== category);
      } else {
        return [...prevSelectedCategories, category];
      }
    });

    setCategoryVisibility((prevVisibility) => ({
      ...prevVisibility,
      [category]: !prevVisibility[category],
    }));
  };

  return (
    <animated.div id="categories" style={animateTitle} className="py-8 px-4 md:px-8 lg:px-16 xl:px-32">
      <h1 className="flex justify-center text-[1.5rem] md:text-3xl mb-7 font-bold bg-gray-200 hover:rounded text-customcolor">
        Jewelry Categories
      </h1>

      <div className="mb-4 mx-auto text-center">
        <h1
          className="text-2xl font-bold cursor-pointer hover:bg-gray-400 hover:opacity-70 hover:rounded-full hover:text-white"
          onClick={() => handleCategoryClick('Diamond')}
        >
          Diamond Categories
          {categoryVisibility.Diamond ? <FiChevronUp /> : <FiChevronDown />}
        </h1>
        {categoryVisibility.Diamond && selectedCategories.includes('Diamond') && <CarouselComponent />}
      </div>

      <div className="mb-4 mx-auto text-center">
        <h1
          className="text-2xl font-bold cursor-pointer hover:bg-gray-400 hover:opacity-70 hover:rounded-full hover:text-white"
          onClick={() => handleCategoryClick('Gold')}
        >
          Gold Categories
          {categoryVisibility.Gold ? <FiChevronUp /> : <FiChevronDown />}
        </h1>
        {categoryVisibility.Gold && selectedCategories.includes('Gold') && <Gold />}
      </div>

      <div className="mx-auto text-center">
        <h1
          className="text-2xl font-bold cursor-pointer hover:bg-gray-400 hover:opacity-70 hover:rounded-full hover:text-white"
          onClick={() => handleCategoryClick('Bangles')}
        >
          Bangles Categories
          {categoryVisibility.Bangles ? <FiChevronUp /> : <FiChevronDown />}
        </h1>
        {categoryVisibility.Bangles && selectedCategories.includes('Bangles') && <Bangles />}
      </div>

      <div className="bg-customcolor rounded-lg text-white font-semibold flex justify-center mt-2 text-xl">
        Swipe right or left to see the items
      </div>
    </animated.div>
  );
};

export default Categories;
