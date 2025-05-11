import { ShoppingCart } from "lucide-react";
import { useState } from "react";

const AddToCartButtonNoBorder = ({ onClick }) => {
    const [isClicked, setClicked] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setShowMessage(true);
        onClick?.(); // safe call onClick function

        setTimeout(() => setClicked(false), 300); // reset after 300 milliseconds
        setTimeout(() => setShowMessage(false), 2000);
    };

    return (
        <div className="relative flex flex-col items-center">
            <button
                onClick={handleClick}
                className={`p-2 text-second-text-color hover:text-primary-color transition-transform duration-200 ${
                    isClicked ? "scale-125 text-primary-color" : ""
                }`}
                aria-label="Add To Cart"
            >
                <ShoppingCart className="w-5 h-5" />
            </button>

            {showMessage && (
                <div className="absolute -top-12 text-xs whitespace-nowrap text-white font-semibold bg-primary-color px-8 py-2 rounded-lg shadow-lg opacity-80">
                    Added to cart
                </div>
            )}
        </div>
    );
};

export default AddToCartButtonNoBorder;
