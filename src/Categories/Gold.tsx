import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '../Context/CartContext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Gold1 from '../assets/Gold1.jpg';
import Gold2 from '../assets/Gold2.jpg';
import Gold3 from '../assets/Gold3.jpg';

const getRandomPrice = () => {
  return Math.floor(Math.random() * (2000 - 500 + 1) + 500);
};

const Gold = () => {
  const { addToCart } = useCart();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goldItems = [
    { id: 1, image: Gold1, alt: 'Gold 1', price: getRandomPrice() },
    { id: 2, image: Gold2, alt: 'Gold 2', price: getRandomPrice() },
    { id: 3, image: Gold3, alt: 'Gold 3', price: getRandomPrice() },
  ];

  const handleAddToCart = (goldItem: any) => {
    addToCart({
      id: goldItem.id,
      name: `Gold ${goldItem.id}`,
      image: goldItem.image,
      price: goldItem.price,
    });

    toast.success(`${goldItem.alt} has been added to the cart!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {goldItems.map((goldItem) => (
          <div key={goldItem.id} className="h-10">
            <img src={goldItem.image} alt={goldItem.alt} className="" />
            <p className="text-center mt-2">${goldItem.price}</p>
            <button onClick={() => handleAddToCart(goldItem)}>Add to Cart</button>
          </div>
        ))}
      </Slider>
      <ToastContainer />
    </div>
  );
};

export default Gold;
