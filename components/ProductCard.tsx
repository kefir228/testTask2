'use client'

import { useCart } from "../context/CartContext"

export default function ProductCard({ product }: { product: any }) {
    const { addToCart } = useCart()

    return (
        <div className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-sm">{product.description}</p>
            <p className="font-bold">${product.price}</p>
            <button
                onClick={() => addToCart({ id: product.id, title: product.title, price: product.price, quantity: 1 })}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
                Купити
            </button>
        </div>
    )
}