import React, { useEffect } from 'react';

import CartButton from '@/components/CartButton';
import ProductCard from '@/components/ProductCard';
import { testProducts } from '@/data/testProducts';

const Index = () => {
  useEffect(() => {
    document.title = "Hello , John";
    const desc = "Lets buy some stuff";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.href);
  }, []);

  return (
    <div>
      <header className="container py-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Hello, John</h1>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              Lets buy some stuff
            </p>
          </div>
        </div>
      </header>

      <main className="container pb-20">
        <section aria-label="Product Listing">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
