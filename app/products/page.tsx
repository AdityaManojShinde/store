import ProductsList from "../ProductList";
import { products } from "../product-data";

export default function ProductsPage() {
    return (
        <>
            <h1 className="text-3xl pt-2 pl-5 font-bold">Products</h1>
            <ProductsList products={products} />
        </>
    );
}