"use client"

import { useEffect, useState } from "react";
import CartButton from "@/components/CartButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import dataProducts from "./api/page";
import MenuItems from "@/components/MenuItems";

interface Product {
  id: number;
  name: string,
  description: string;
  price: number;
  image: string
}

interface CartItem extends Product {
  quantity: number
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setProducts(dataProducts);
    const storadCart = localStorage.getItem('cart');
    if (storadCart) {
      setCart(JSON.parse(storadCart));
    }
  }, []);

  const addToCart = (id: number) => {
    const product = products.find((prod: Product) => prod.id === id);

    if (!product) return;

    const existingProduct = cart.find(item => item.id === id);

    let updateCart: CartItem[];

    if (existingProduct) {
      updateCart = cart.map(item => item.id ? { ...item, quantity: item.quantity + 1 } : item);
    } else {
      updateCart = [...cart, { ...product, quantity: 1 }];
    }
    setCart(updateCart);
    localStorage.setItem('cart', JSON.stringify(updateCart));
  }

  return (
    <div className="mt-80">
      <Header />
      <div className="p-4">
        <h1 className="font-bold text-center text-2xl md:text-center text-zinc-700">Nosso Cardápio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16">
          {products.map(product => (
            <MenuItems
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              addToCart={addToCart}
              image={product.image}
            />
          ))}
        </div>
        <CartButton itemCount={cart.length} />
      </div>
      <Footer />
    </div>


  );
}

