import { ShoppingCart } from "lucide-react";

const AddToCartButtonNoBorder = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="p-2  text-gray-700 hover:text-primary transition-colors"
            aria-label="Add To Cart"
        >
            <ShoppingCart className="w-5 h-5" />
        </button>
    );
};

export default AddToCartButtonNoBorder;
