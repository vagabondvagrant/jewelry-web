import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import CarouselComponent from './Diamond';
import Gold from './Gold';
import Bangles from './Bangles';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import FooterC from './FooterC';
// import SavedItems from '../SavedItems/SavedItems';

type CategoriesProps = {};

type SelectedCategories = 'Diamond' | 'Gold' | 'Bangles';

const Categories: React.FC<CategoriesProps> = () => {
  const [selectedCategories, setSelectedCategories] = useState<SelectedCategories[]>([]);
  const [categoryVisibility, setCategoryVisibility] = useState<{ [key in SelectedCategories]: boolean }>({
    Diamond: false,
    Gold: false,
    Bangles: false,
  });

  const fadeIn = useSpring({
    opacity: 1,
    transform: 'translateY(3)',
    from: { opacity: 0, transform: 'translateY(50px)' },
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
    <animated.div style={fadeIn} className="py-8 px-4 md:px-8 lg:px-16 xl:px-32">
      <h1 className="flex justify-center text-[1.5rem] md:text-3xl mb-20 font-bold hover:bg-gray-200 hover:rounded hover:text-customcolor">
        Jewelry Categories
      </h1>

      <div className="mb-4 mx-auto text-center">
        <h1
          className="text-3xl font-bold cursor-pointer hover:bg-yellow-900 hover:rounded hover:text-white"
          onClick={() => handleCategoryClick('Diamond')}
        >
          Diamond Categories
          {categoryVisibility.Diamond ? <FiChevronUp /> : <FiChevronDown />}
        </h1>
        {categoryVisibility.Diamond && selectedCategories.includes('Diamond') && <CarouselComponent />}
      </div>

      <div className="mb-4 mx-auto text-center">
        <h1
          className="text-3xl font-bold cursor-pointer hover:bg-yellow-900 hover:rounded hover:text-white"
          onClick={() => handleCategoryClick('Gold')}
        >
          Gold Categories
          {categoryVisibility.Gold ? <FiChevronUp /> : <FiChevronDown />}
        </h1>
        {categoryVisibility.Gold && selectedCategories.includes('Gold') && <Gold />}
      </div>

      <div className="mx-auto text-center">
        <h1
          className="text-3xl font-bold cursor-pointer hover:bg-yellow-900 hover:rounded hover:text-white"
          onClick={() => handleCategoryClick('Bangles')}
        >
          Bangles Categories
          {categoryVisibility.Bangles ? <FiChevronUp /> : <FiChevronDown />}
        </h1>
        {categoryVisibility.Bangles && selectedCategories.includes('Bangles') && <Bangles />}
      </div>

      <div className="bg-customcolor rounded-lg text-white font-semibold flex justify-center text-xl" >
        Swipe right or left to see the items
      </div>

      <FooterC />
      {/* <SavedItems/> */}
    </animated.div>
  );
};

export default Categories;
