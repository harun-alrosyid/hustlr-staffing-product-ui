import React from 'react';

import { Button } from '@/components/ui/button';
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from '@/components/ui/select';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

import type { Product } from "@/types/product";
type Props = { product: Product };

const currency = new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" });

export const ProductCard: React.FC<Props> = ({ product }) => {
  const hasVariants = !!product.variants?.options?.length;
  const [selected, setSelected] = React.useState<string | undefined>(
    hasVariants ? product.variants!.options[0] : undefined
  );
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product, selected);
    toast({
      title: "Added to cart",
      description: `${product.name}${selected ? ` • ${selected}` : ""} — ${currency.format(product.price)}`,
    });
  };

  return (
    <article className="product-card" aria-labelledby={`product-${product.id}-title`}>
      <div className="p-4">
        <div className="product-media">
          <img
            src={product.image}
            alt={`${product.name} product image`}
            loading="lazy"
            width={768}
            height={768}
          />
        </div>

        <div className="mt-4 flex items-start justify-between gap-3">
          <h3 id={`product-${product.id}-title`} className="text-base font-semibold leading-tight line-clamp-2">
            {product.name}
          </h3>
          <p className="shrink-0 text-sm font-bold">
            {currency.format(product.price)}
          </p>
        </div>

        {hasVariants && (
          <div className="mt-3">
            <Select value={selected} onValueChange={setSelected}>
              <SelectTrigger aria-label={product.variants!.label}>
                <SelectValue placeholder={product.variants!.label} />
              </SelectTrigger>
              <SelectContent>
                {product.variants!.options.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="mt-4">
          {product.inStock ? (
            <Button className="w-full" onClick={handleAdd}>
              Add to Cart
            </Button>
          ) : (
            <Button className="w-full" disabled aria-disabled>
              Out of Stock
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
