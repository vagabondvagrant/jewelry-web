import Categories from "./Categories/Categories"
import { ContactUs } from "./Email/SendMail"
import JewelryScroll from "./FramerMotion/JewelryScroll"

function App() {

  return (
    <div className="">
      <JewelryScroll/>
      <ContactUs/>
      <Categories/>
    </div>
  )
}

export default App
