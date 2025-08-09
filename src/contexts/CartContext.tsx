import React, { createContext, useContext, useMemo, useState, ReactNode } from "react";
import type { Product } from "@/types/product";

export type CartItem = {
  id: string; // product id + variant key
  productId: string;
  name: string;
  price: number;
  image: string;
  variant?: string;
  quantity: number;
};

export type CartContextType = {
  items: CartItem[];
  addItem: (product: Product, variant?: string) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  totalItems: number;
  subtotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product, variant?: string) => {
    const key = `${product.id}${variant ? `__${variant}` : ""}`;
    setItems((prev) => {
      const existing = prev.find((i) => i.id === key);
      if (existing) {
        return prev.map((i) => (i.id === key ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [
        ...prev,
        {
          id: key,
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          variant,
          quantity: 1,
        },
      ];
    });
  };

  const removeItem = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));

  const clear = () => setItems([]);

  const { totalItems, subtotal } = useMemo(() => {
    const totalItems = items.reduce((acc, i) => acc + i.quantity, 0);
    const subtotal = items.reduce((acc, i) => acc + i.price * i.quantity, 0);
    return { totalItems, subtotal };
  }, [items]);

  const value = useMemo(
    () => ({ items, addItem, removeItem, clear, totalItems, subtotal }),
    [items, totalItems, subtotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
