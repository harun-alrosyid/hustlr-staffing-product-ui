import sneakers from "@/assets/products/sneakers.jpg";
import headphones from "@/assets/products/headphones.jpg";
import chair from "@/assets/products/chair.jpg";
import type { Product } from "@/types/product";

export const testProducts: Product[] = [
  {
    id: "p1",
    name: "AeroRun Sneakers",
    price: 129.99,
    image: sneakers,
    inStock: true,
    variants: { label: "Size", options: ["US 7", "US 8", "US 9", "US 10", "US 11"] },
  },
  {
    id: "p2",
    name: "Nimbus Wireless Headphones",
    price: 249.0,
    image: headphones,
    inStock: true,
    variants: { label: "Color", options: ["Matte Black", "Silver", "Sand"] },
  },
  {
    id: "p3",
    name: "ErgoFlex Office Chair",
    price: 399.0,
    image: chair,
    inStock: false,
    variants: { label: "Finish", options: ["Charcoal", "Slate"] },
  },
];
