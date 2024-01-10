import SavedItems from "./SavedItems"

export const Cart = () => {
  return (
    <div id="cart" className="h-10 bg-gray-400 flex justify-end text-2xl md:text-3xl">
        <SavedItems/>
    </div>
  )
}
