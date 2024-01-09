import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Categories from "./Categories/Categories";
import { CartProvider } from "./Context/CartContext";
import { ContactUs } from "./Email/SendMail";
import JewelryScroll from "./FramerMotion/JewelryScroll";
import SavedItems from "./SavedItems/SavedItems";
import StarReview from "./Starreview/StarReview";
import Comment from "./Starreview/Comment";
import WhatsappContact from "./Social/Whatsapp";
import SignUpForm from "./SignUp/SignUp";
import NavBar from './NavBar/NavBar';
import About from './About'

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
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {isLoggedIn ? (
                  <>
                    <NavBar />
                    <JewelryScroll />
                    <ContactUs />
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
                <Outlet /> {/* This is where nested routes will be rendered */}
              </div>
            }
          />
          <Route
            path="categories/*"
            element={<Categories />}
          >
            <Route path="saved" element={<SavedItems />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
