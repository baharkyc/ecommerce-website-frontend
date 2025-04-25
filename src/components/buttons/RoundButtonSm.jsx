
const RoundButtonSm = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className="p-2  text-gray-700 hover:text-primary transition-colors"
            aria-label="Add To Cart"
        >
           {children}
        </button>
    );
};

export default RoundButtonSm;
