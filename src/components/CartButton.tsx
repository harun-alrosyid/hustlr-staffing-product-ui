import { ShoppingCart } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useCart } from '@/contexts/CartContext';

const currency = new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" });

const CartButton: React.FC = () => {
  const { items, totalItems, subtotal, clear } = useCart();

  const handleOpenChange = (open: boolean) => {
    if (open) {
      console.log("Cart opened: ", items);
    }
  };

  return (
    <DropdownMenu onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="sm" aria-label="Open cart" className="relative">
          <ShoppingCart className="h-4 w-4" />
          {totalItems > 0 && (
            <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs font-bold text-primary-foreground">
              {totalItems}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Cart</span>
          <span className="text-xs text-muted-foreground">{totalItems} item(s)</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.length === 0 ? (
          <div className="px-2 py-6 text-center text-sm text-muted-foreground">Your cart is empty</div>
        ) : (
          <div className="max-h-80 overflow-auto">
            {items.map((i) => (
              <DropdownMenuItem key={i.id} className="flex items-start gap-3 py-3">
                <img
                  src={i.image}
                  alt={`${i.name} thumbnail`}
                  className="h-12 w-12 rounded-md object-cover"
                  loading="lazy"
                />
                <div className="flex-1">
                  <div className="line-clamp-1 text-sm font-medium">{i.name}</div>
                  {i.variant && (
                    <div className="text-xs text-muted-foreground">{i.variant}</div>
                  )}
                  <div className="mt-1 text-xs">
                    {i.quantity} × {currency.format(i.price)}
                  </div>
                </div>
                <div className="text-sm font-semibold">
                  {currency.format(i.price * i.quantity)}
                </div>
              </DropdownMenuItem>
            ))}
          </div>
        )}
        <DropdownMenuSeparator />
        <div className="flex items-center justify-between px-2 py-2">
          <div className="text-sm text-muted-foreground">Subtotal</div>
          <div className="text-sm font-semibold">{currency.format(subtotal)}</div>
        </div>
        <div className="flex items-center gap-2 px-2 pb-2">
          <Button variant="outline" className="w-full" onClick={clear}>Clear</Button>
          <Button className="w-full">Checkout</Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CartButton;
