import { Menu } from 'lucide-react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import CartButton from '@/components/CartButton';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/" }, 
];

const activeCls = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "text-foreground border-b-2 border-primary"
    : "text-muted-foreground hover:text-foreground";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
          </Sheet>

          <Link to="/" className="text-lg font-semibold tracking-tight">
           Product UI
          </Link>
        </div>

      

        <div className="flex items-center gap-2">
          <CartButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
