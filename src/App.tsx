import Categories from "./Categories/Categories"
import { CartProvider } from "./Context/CartContext"
import { ContactUs } from "./Email/SendMail"
import JewelryScroll from "./FramerMotion/JewelryScroll"
// import Home from "./Pages/Home"
import SavedItems from "./SavedItems/SavedItems"
import StarReview from "./Starreview/StarReview"
function App() {

  return (
    <div className="">
      <CartProvider>
        {/* <Home/> */}
      <JewelryScroll/>
      <ContactUs/>
      <StarReview/>
      <div className="flex justify-center text-3xl mt-4 hover:bg-customcolor hover:text-white">
      <SavedItems />
      </div>
      <Categories/>
      </CartProvider>
    </div>
  )
}

export default App
