import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '../Context/CartContext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Pearl4 from '../assets/Pearl4.jpg';
import Pearl2 from '../assets/Pearl2.jpg';
import Pearl3 from '../assets/Pearl3.jpg';

const getRandomPrice = () => {
  return Math.floor(Math.random() * (2000 - 500 + 1) + 500);
};

const CarouselComponent = () => {
  const { addToCart } = useCart();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const pearls = [
    { id: 1, image: Pearl4, alt: 'Pearl 1', price: getRandomPrice() },
    { id: 2, image: Pearl2, alt: 'Pearl 2', price: getRandomPrice() },
    { id: 3, image: Pearl3, alt: 'Pearl 3', price: getRandomPrice() },
  ];

  const handleAddToCart = (pearl: any) => {
    addToCart({
      id: pearl.id,
      name: `Pearl ${pearl.id}`,
      image: pearl.image,
      price: pearl.price,
    });

    toast.success(`${pearl.alt} has been added to the cart!`, {
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
        {pearls.map((pearl) => (
          <div key={pearl.id} className="h-10">
            <img src={pearl.image} alt={pearl.alt} className="" />
            <p className="text-center mt-2">${pearl.price}</p>
            <button onClick={() => handleAddToCart(pearl)}>Add to Cart</button>
          </div>
        ))}
      </Slider>
      <ToastContainer />
    </div>
  );
};

export default CarouselComponent;
