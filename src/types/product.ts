export type ProductVariants = {
  label: string;
  options: string[];
};

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
  variants?: ProductVariants;
};
