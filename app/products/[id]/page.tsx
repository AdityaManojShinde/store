import NotFoundPage from '@/app/not-found';
import { products } from '@/app/product-data';

export default function ProductDetailPage(
    { params }: { params: { id: string } }
) {
    const product = products.find(p => p.id == params.id);

    if (!product) {
        return <NotFoundPage />;
    }

    return (
        <div className="container mx-auto px-6 py-10">
            <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Image Section */}
                <div className="md:w-1/2">
                    <img
                        src={'/' + product.imageUrl}
                        alt="Product Image"
                        className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                </div>

                {/* Details Section */}
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{product.name}</h1>
                    <p className="text-2xl text-blue-600 font-semibold mb-6">${product.price.toFixed(2)}</p>

                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Description</h3>
                    <p className="text-gray-700 leading-relaxed mb-8">{product.description}</p>

                    {/* Action Button */}
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
