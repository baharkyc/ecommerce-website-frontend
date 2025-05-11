import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AddToCartButtonNoBorder from "../buttons/AddToCartButtonNoBorder";
import ColorSelection from "../buttons/ColorSelection";
import { useDispatch, useSelector } from "react-redux";
import AddToCartButton from "../buttons/AddToCartButton";

export const ProductCardNoBorder = ({ product, onAddToCart }) => {

    const { categories } = useSelector(state => state.product);
    const productCategory = categories.find(category => category.id === product.category_id);

    const dispatch = useDispatch();

    if (!productCategory) return null;

    const gender = productCategory.gender.toLowerCase();
    const categoryName = productCategory.title.toLowerCase();
    const categoryId = product.category_id;
    const productId = product.id;

    const slugify = (text) =>
        text
          .toString()
          .toLowerCase()
          .trim()
          .replace(/\s+/g, '-')       // spaces to -
          .replace(/[^\w\-]+/g, '')   
          .replace(/\-\-+/g, '-');  
    
    const productNameSlug = slugify(product.name);

    const productUrl = `/shop/${gender}/${categoryName}/${categoryId}/${productNameSlug}/${productId}`;


    return (
        <div className="relative w-full h-full p-4 flex flex-col">
            {/* Image */}
            <div className="group relative w-full aspect-[3/4] flex-shrink-0 overflow-hidden mb-4">
                <img
                    className="w-full h-full object-cover"
                    src={product.images[0]?.url}
                    alt={product.name}
                />

                {/* Sizes + AddToCart on Hover */}
                <div className="absolute bottom-0 w-full hidden group-hover:flex group-hover:bg-white/40 backdrop-blur-md items-center z-10 px-4 py-2">
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
                    <div className="flex w-full justify-center ml-4">
                        <AddToCartButtonNoBorder onClick={onAddToCart}/>
                    </div>
                </div>
            </div>

            {/* Product Name and Click*/}
            <Link 
                className="text-center text-lg font-semibold text-text-color leading-tight pb-4"
                to={productUrl}  
            >
                {product.name}
            </Link>
            <div className="flex-grow" />

            {/* Price & Colors */}
            <div className="text-center text-lg font-semibold text-secondary-1">
                {product.price.toFixed(2)} ₺
            </div>
            {product.colors && (
                <div className="pt-4 flex justify-center">
                    <ColorSelection colors={product.colors} text={false} size={20}/>
                </div>
            )}            
            
        </div>
    );
};



export default ProductCardNoBorder;