import  { useState } from 'react';
import Categories from "./Categories/Categories";
import { CartProvider } from "./Context/CartContext";
import { ContactUs } from "./Email/SendMail";
import JewelryScroll from "./FramerMotion/JewelryScroll";
import SavedItems from "./SavedItems/SavedItems";
import StarReview from "./Starreview/StarReview";
import Comment from "./Starreview/Comment";
import WhatsappContact from "./Social/Whatsapp";
import SignUpForm from "./SignUp/SignUp";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // This function will be passed as a prop to SignUpForm
  const handleLogin = () => {
    // Perform any login logic you need
    setIsLoggedIn(true);
  };

  return (
    <div className="">
      <CartProvider>
        {/* Conditionally render components based on isLoggedIn */}
        {isLoggedIn ? (
          <>
            <JewelryScroll />
            <ContactUs />
            <StarReview />
            <div className="flex justify-center text-3xl mt-4 hover:bg-customcolor hover:text-white">
              <SavedItems />
            </div>
            <Comment />
            <Categories />
            <WhatsappContact />
          </>
        ) : (
          // Render SignUpForm if not logged in
          <SignUpForm onLogin={handleLogin} />
        )}
      </CartProvider>
    </div>
  );
}

export default App;
