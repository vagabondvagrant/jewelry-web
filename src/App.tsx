import Categories from "./Categories/Categories"
import { CartProvider } from "./Context/CartContext"
import { ContactUs } from "./Email/SendMail"
import JewelryScroll from "./FramerMotion/JewelryScroll"
import SavedItems from "./SavedItems/SavedItems"
function App() {

  return (
    <div className="">
      <CartProvider>
      <JewelryScroll/>
      <ContactUs/>
      <div className="flex justify-center text-3xl mt-4 hover:bg-customcolor hover:text-white">
      <SavedItems />
      </div>
      <Categories/>
      </CartProvider>
    </div>
  )
}

export default App
