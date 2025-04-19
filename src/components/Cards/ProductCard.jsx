import { Circle } from "lucide-react"
import AddToCartButton from "../buttons/AddToCartButton"

export const ProductCardBordered = ({product}) => {


    return (
        <div className="relative w-full h-full max-w-sm bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex flex-col">
            {/* Floating Add to Cart Button */}
            <div className="absolute top-4 right-4 z-10">
                <AddToCartButton />
            </div>

            {/* Product Image */}
            <img
                className="w-full h-64 object-cover rounded-md mb-4"
                src={product.imageUrl}
                alt={product.name}
            />

            {/* Product Name */}
            <h2 className="text-center text-lg font-semibold text-text-color mb-2">
                {product.name}
            </h2>

            {/* Product Description */}
            <p className="text-center text-sm text-second-text-color mb-4">
                {product.description}
            </p>

            {/* Price */}
            <div className="mt-auto text-center text-xl font-bold text-secondary-1">
                {product.price.toFixed(2)} ₺
            </div>
        </div>

    )
}


