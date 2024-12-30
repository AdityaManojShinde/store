'use client';
import { useState } from 'react';
import { products } from '../product-data';
import Link from 'next/link';

export default function CartPage() {
    const [cardIds] = useState(['123', '345'])
    const cartProducts = cardIds.map(
        id => products.find(
            p => p.id === id
        )!
    );
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Shopping Cart</h1>
            <div className="space-y-4">
                {cartProducts.map(product => (
                    <Link
                        key={product.id}
                        href={"/products/" + product.id}
                        className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition"
                    >
                        <h3 className="text-lg font-medium text-gray-700">{product.name}</h3>
                        <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
                    </Link>
                ))}
            </div>
        </div>

    );
}