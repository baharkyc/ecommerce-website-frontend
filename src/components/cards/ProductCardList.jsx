import AddToCartButtonNoBorder from "../buttons/AddToCartButtonNoBorder";
import ColorSelection from "../buttons/ColorSelection";

const ProductCardList = ({ product }) => {
    return (
        <div className="flex flex-row gap-4 lg:mx-32 relative">
            {/* Product Image */}
            <div className="flex-shrink-0 w-1/4 group relative">
                <img
                    className="w-full h-full object-cover aspect-[2/3]"
                    src={product.imageUrl}
                    alt={product.name}
                />

                {/* Sizes + AddToCart on Hover */}
                <div className="absolute bottom-0 w-full hidden lg:group-hover:flex group-hover:bg-white/40 backdrop-blur-sm items-center z-10 px-4 py-2">
                    <div className="flex flex-wrap justify-center items-center gap-2 flex-grow">
                        {product.sizes?.map((size, index) => (
                            <button
                                key={index}
                                className="text-xs font-sans px-2 py-1 rounded-md text-black"
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                    <div className="flex-shrink-0 ml-4">
                        <AddToCartButtonNoBorder />
                    </div>
                </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col place-content-center lg:ml-16 w-2/4">
                <h3 className="text-lg font-semibold text-text-color mb-2">{product.name}</h3>
                <p className="text-sm font-semibold text-second-text-color mb-4">
                    {product.description}
                </p>
                <div className="text-xl font-bold text-secondary-1 mb-4">
                    {product.price.toFixed(2)} ₺
                </div>
                <ColorSelection colors={product.colors}/>
            </div>

            {/* Add To Cart */}
            <div className="flex flex-row justify-end w-1/4">
                <AddToCartButtonNoBorder />
            </div>
        </div>
    );
};

export default ProductCardList;
