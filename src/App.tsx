import React, { useState } from 'react';
import { CartProvider } from "./Context/CartContext";
import { ContactUs } from "./Email/SendMail";
import JewelryScroll from "./FramerMotion/JewelryScroll";
import SavedItems from "./SavedItems/SavedItems";
import StarReview from "./Starreview/StarReview";
import Comment from "./Starreview/Comment";
import WhatsappContact from "./Social/Whatsapp";
import SignUpForm from "./SignUp/SignUp";
import NavBar from './NavBar/NavBar';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // This function will be passed as a prop to SignUpForm
  const handleLogin = () => {
    // Perform any login logic you need
    setIsLoggedIn(true);
  };

  return (
    <CartProvider>
      <div>
        {isLoggedIn ? (
          <>
            <NavBar />
            <JewelryScroll />
            <ContactUs />
            <SavedItems/>
            <StarReview />
            <div className="flex justify-center text-3xl mt-4 hover:bg-customcolor hover:text-white">
              {/* <SavedItems /> */}
            </div>
            <Comment />
            <WhatsappContact />
          </>
        ) : (
          <SignUpForm onLogin={handleLogin} />
        )}
      </div>
    </CartProvider>
  );
}

export default App;
