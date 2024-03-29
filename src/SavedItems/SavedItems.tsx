import { useState } from 'react';
import { useCart } from '../Context/CartContext';
import { IoCartOutline } from 'react-icons/io5';
import Modal from 'react-modal';

const SavedItems: React.FC = () => {
  const { items, removeFromCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button onClick={toggleModal} className="sm:hidden md:hidden lg:block xl:block">
        <IoCartOutline />
      </button>
      <Modal isOpen={isModalOpen} onRequestClose={toggleModal}>
        <h2 className="text-customcolor text-3xl text-center font-semibold hover:bg-gray-900 hover:text-white hover:rounded-lg mb-4">
          Saved Items
        </h2>
        {items.length === 0 ? (
          <p className="text-2xl text-center text-customcolor font-semibold">
            You haven't saved any items yet.
          </p>
        ) : (
          <div>
            <form>
              <ul>
                {items.map((item) => (
                  <li key={item.id} className="flex justify-center mb-2 p-2 border rounded">
                    <div className="flex flex-col sm:flex-row items-center w-full">
                      <h3 className="text-lg font-semibold sm:mr-4 mb-2 sm:mb-0">{item.name}</h3>
                      <span className="text-gray-600">${item.price}</span>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover ml-2 sm:ml-4"
                      />
                    </div>
                    <button
                      type="button"
                      className="text-white bg-gray-900 px-2 py-1 rounded hover:bg-gray-600 transition-all duration-300"
                      onClick={() => removeFromCart(item.id)}
                    >
                      delete
                    </button>
                  </li>
                ))}
              </ul>
            </form>
          </div>
        )}
        <div className="flex justify-center bg-gray-800 h-10 hover:bg-gray-600">
          <button className="text-white" onClick={toggleModal}>
            Close Cart
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default SavedItems;
