import { ShoppingCart } from "lucide-react";

const AddToCartButton = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className="p-2 bg-white rounded-full shadow-md text-gray-700 hover:text-primary transition-colors"
            aria-label="Add To Cart"
        >
            <ShoppingCart className="w-5 h-5" />
            {children}
        </button>
    );
};

export default AddToCartButton;
