import Image from 'next/image';
import Link from 'next/link';
import { Product } from "./product-data";

export default function ProductsList({ products }: { products: Product[] }) {
    return (
        <div className="container mx-auto px-6 py-10">
            <div className="flex flex-wrap -mx-4">
                {products.map(product => (
                    <Link
                        href={"/products/" + product.id}
                        key={product.id}
                        className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-6 sm:mb-8"
                    >
                        <div className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 p-4 sm:p-6">
                            <div className="w-full aspect-square overflow-hidden rounded-md">
                                <Image
                                    src={'/' + product.imageUrl}
                                    alt={product.name}
                                    width={150}
                                    height={150}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <h2 className="mt-3 text-base sm:text-lg font-semibold text-gray-900 group-hover:text-blue-500">
                                {product.name}
                            </h2>
                            <p className="mt-2 text-sm sm:text-md text-gray-700 font-medium">${product.price.toFixed(2)}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
