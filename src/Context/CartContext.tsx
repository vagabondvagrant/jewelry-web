// import React, { createContext, useContext, ReactNode, useState } from 'react';

// export interface Item {
//   id: number;
//   name: string;
//   image: string; 
// }

// interface CartContextProps {
//   items: Item[];
//   addToCart: (item: Item) => void;
//   removeFromCart: (itemId: number) => void;
// }

// export const CartContext = createContext<CartContextProps | undefined>(undefined);

// const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [items, setItems] = useState<Item[]>([]);

//   const addToCart = (item: Item) => {
//     setItems((prevItems) => [...prevItems, item]);
//   };

//   const removeFromCart = (itemId: number) => {
//     setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
//   };

//   const contextValue: CartContextProps = {
//     items,
//     addToCart,
//     removeFromCart,
//   };

//   return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
// };

// const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

// export type { Item as CartItem }; 

// export { CartProvider, useCart };
// CartContext.tsx
import { createContext, useContext, ReactNode, useState } from 'react';

export interface Item {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface CartContextProps {
  items: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (itemId: number) => void;
}

export const CartContext = createContext<CartContextProps | undefined>(undefined);

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);

  const addToCart = (item: Item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const contextValue: CartContextProps = {
    items,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export type { Item as CartItem };
export { CartProvider, useCart };
