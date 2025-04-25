import AddToCartButtonNoBorder from "../buttons/AddToCartButtonNoBorder";
import ColorSelection from "../buttons/ColorSelection";

export const ProductCardNoBorder = ({ product }) => {
    return (
        <div className="relative w-full h-full p-4 flex flex-col">
            {/* Image */}
            <div className="group relative w-full aspect-[3/4] flex-shrink-0 overflow-hidden mb-4">
                <img
                    className="w-full h-full object-cover"
                    src={product.imageUrl}
                    alt={product.name}
                />

                {/* Sizes + AddToCart on Hover */}
                <div className="absolute bottom-0 w-full hidden group-hover:flex group-hover:bg-white/40 backdrop-blur-sm items-center z-10 px-4 py-2">
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

            {/* Product Name */}
            <a 
                className="text-center text-lg font-semibold text-text-color leading-tight pb-4"
                href="./product"
            >
                {product.name}
            </a>

            {/* Esnek alan - boşluğu ismin altına bırakıyoruz */}
            <div className="flex-grow" />

            {/* Price & Colors */}
            <div className="text-center text-lg font-semibold text-secondary-1">
                {product.price.toFixed(2)} ₺
            </div>
            <div className="pt-4 flex justify-center">
                <ColorSelection colors={product.colors} text={false} size={20}/>
            </div>
        </div>
    );
};



export default ProductCardNoBorder;