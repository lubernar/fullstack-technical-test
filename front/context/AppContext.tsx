import { createContext, useContext, useState } from 'react';

interface Item {
  id: number;
  image: string;
  name: string;
  salePrice: number;
}

type CartState = {
  loading: boolean;
  error: boolean;
  items: Item[];
};

export type CartContextType = {
  cart: CartState[];
  addToCart: (id: number, item: Item) => void;
  removeFromCart: (id: number) => void;
};

export const AppContext = createContext<CartContextType | null>(null);

const url = "http://localhost:4000/cart";

export function AppWrapper({ children }) {

  const [cart, setCart] = useState<CartState[]>([
    {
      loading: false,
      error: false,
      items: []
    },
  ]);

  const addToCart = async (id, item) => {
    try {
      const res = await fetch(`${url}/${id}`, {
        method: 'POST',
        body: JSON.stringify({ item: item }),
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors'
      });
      const newCart = await res.json();
      setCart((prevCart) => {
        const updatedCart = [newCart, ...prevCart];
        console.log({updatedCart})
        return updatedCart;
      });
    } catch (err) {
      console.error(err);
    }
  };

  const removeFromCart = async (id) => {
    try {
      const res = await fetch(`${url}/${id}`, {
        method: 'DELETE',
      });
      const newCart = await res.json();
      setCart((prevCart) => {
        const updatedCart = [newCart, ...prevCart];
        return updatedCart;
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AppContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}