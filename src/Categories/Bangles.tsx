import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '../Context/CartContext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Bangle1 from '../assets/Bangle1.jpg';
import Bangle2 from '../assets/Bangle2.jpg';
import Bangle3 from '../assets/Bangle3.jpg';

const getRandomPrice = () => {
  return Math.floor(Math.random() * (2000 - 500 + 1) + 500);
};

const Bangles = () => {
  const { addToCart } = useCart()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const bangles = [
    { id: 1, image: Bangle1, alt: 'Bangles 1', price: getRandomPrice() },
    { id: 2, image: Bangle2, alt: 'Bangles 2', price: getRandomPrice() },
    { id: 3, image: Bangle3, alt: 'Bangles 3', price: getRandomPrice() },
  ];

  const handleAddToCart = (bangle: any) => {
    addToCart({
      id: bangle.id,
      name: `Bangle ${bangle.id}`,
      image: bangle.image,
      price: bangle.price,
    });

    toast.success(`${bangle.alt} has been added to the cart!`, {
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
        {bangles.map((bangle) => (
          <div key={bangle.id} className="h-10">
            <img src={bangle.image} alt={bangle.alt} className="" />
            <p className="text-center mt-2">${bangle.price}</p>
            <button onClick={() => handleAddToCart(bangle)}>Add to Cart</button>
          </div>
        ))}
      </Slider>
      <ToastContainer />
    </div>
  );
};

export default Bangles;
