import React, { useState } from 'react';
import { CartProvider } from "./Context/CartContext";
import { ContactUs } from "./Email/SendMail";
import JewelryScroll from "./FramerMotion/JewelryScroll";
import StarReview from "./Starreview/StarReview";
import Comment from "./Starreview/Comment";
import WhatsappContact from "./Social/Whatsapp";
import SignUpForm from "./SignUp/SignUp";
import NavBar from './NavBar/NavBar';
import Categories from './Categories/Categories';
import NavBarDesktop from './NavBar/NavBar2';
import { Cart } from './SavedItems/Cart';
import GoToTopBottomIcons from './GotoTopBo/GotoTopBottom';
import Footer from './Categories/FooterC';
import JewelryPoll from './Poll/Poll';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <CartProvider>
      <div>
        {isLoggedIn ? (
          <>
          <NavBarDesktop/>
            <NavBar />
            <Cart/>
            <JewelryScroll />
            <Categories/>
            <StarReview />
            <Comment />
            <ContactUs />
            <JewelryPoll/>
            <WhatsappContact />

            <Footer/>
            <GoToTopBottomIcons/>
          </>
        ) : (
          <SignUpForm onLogin={handleLogin} />
        )}
      </div>
    </CartProvider>
  );
}

export default App;
