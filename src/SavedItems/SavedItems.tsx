// import  { useState } from 'react';
// import { useCart } from '../Context/CartContext';
// import { IoCartOutline } from 'react-icons/io5';
// import Modal from 'react-modal';

// const SavedItems: React.FC = () => {
//   const { items, removeFromCart } = useCart();
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <div>
//       <button onClick={toggleModal}>
//         <IoCartOutline />
//       </button>

//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={toggleModal}
//         contentLabel="Saved Items Modal"
//       >
//         <h2>Saved Items</h2>
//         {items.length === 0 ? (
//           <p>You haven't saved any items yet.</p>
//         ) : (
//           <form>
//             <ul>
//               {items.map((item) => (
//                 <li key={item.id}>
//                   {item.name}
//                   { <img src={item.image} alt={item.name} />}
//                   <button type="button" onClick={() => removeFromCart(item.id)}>
//                     Remove from Cart
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </form>
//         )}
//         <button onClick={toggleModal}>Close</button>
//       </Modal>
//     </div>
//   );
// };

// export default SavedItems;

// // import { useState, useEffect, useRef } from 'react';
// // import { useCart } from '../Context/CartContext';
// // import { IoCartOutline } from 'react-icons/io5';
// // import Modal from 'react-modal';

// // const SavedItems: React.FC = () => {
// //   const { items, removeFromCart } = useCart();
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const inputRef = useRef<HTMLInputElement>(null);

// //   const toggleModal = () => {
// //     setIsModalOpen(!isModalOpen);
// //   };

// //   useEffect(() => {
// //     // Focus on the input field when the modal opens
// //     if (isModalOpen && inputRef.current) {
// //       inputRef.current.focus();
// //     }
// //   }, [isModalOpen]);

// //   return (
// //     <div className="text-center">
// //       <button
// //         onClick={toggleModal}
// //         className="bg-blue-500 text-white p-2 rounded-full focus:outline-none"
// //       >
// //         <IoCartOutline />
// //       </button>

// //       <Modal
// //         isOpen={isModalOpen}
// //         onRequestClose={toggleModal}
// //         contentLabel="Saved Items Modal"
// //         className="modal-content"
// //         overlayClassName="modal-overlay"
// //       >
// //         <div className="p-4">
// //           <h2 className="text-2xl font-bold mb-4">Saved Items</h2>
// //           {items.length === 0 ? (
// //             <p className="text-gray-600">You haven't saved any items yet.</p>
// //           ) : (
// //             <form>
// //               <ul className="list-none p-0 m-0">
// //                 {items.map((item) => (
// //                   <li key={item.id} className="flex items-center mb-2">
// //                     <div className="flex-shrink-0">
// //                       <img
// //                         src={item.image}
// //                         alt={item.name}
// //                         className="w-12 h-12 object-cover rounded-lg"
// //                       />
// //                     </div>
// //                     <div className="ml-3">
// //                       <p className="text-lg font-medium">{item.name}</p>
// //                       <button
// //                         type="button"
// //                         onClick={() => removeFromCart(item.id)}
// //                         className="text-red-500 text-sm"
// //                       >
// //                         Remove from Cart
// //                       </button>
// //                     </div>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </form>
// //           )}  
// //           <button
// //             onClick={toggleModal}
// //             className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none"
// //           >
// //             Close
// //           </button>
// //         </div>
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default SavedItems;
