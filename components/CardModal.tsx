"use client";

import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function CartModal() {
  const { cart, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} >
        Кошик ({cart.length})
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-black p-4 rounded-lg w-96">
            <h2 className="text-xl font-bold">Кошик</h2>
            {cart.length === 0 ? (
              <p>Порожньо</p>
            ) : (
              <ul>
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between items-center border-b py-2">
                    <span>{item.title} x{item.quantity}</span>
                    <button onClick={() => removeFromCart(item.id)} className="font-bold">
                      Вилучити
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <button onClick={() => setIsOpen(false)} className="font-bold">
              Закрити
            </button>
          </div>
        </div>
      )}
    </>
  );
}
