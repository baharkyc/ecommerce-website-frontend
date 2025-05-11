import { Heart, Eye, ShoppingCart } from "lucide-react";
import exampleProduct from "../../data/exampleProduct.json";
import Slider from "../sliders/Slider";
import ProductRating from "../ProductRating";
import ColorSelection from "../buttons/ColorSelection";
import RoundButtonSm from "../buttons/RoundButtonSm";
import ButtonMd from "../buttons/ButtonMd";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loading from "../Loading";

const ProductDetailCard = ({product, addToCart}) => {
 

    const {isLoading} = useSelector(state => state.global);
    const [productImages, setProductImages] = useState([]);
    const [ isAdded, setAdded ] = useState(false); //for add to cart button text manipulation
    const fakeProduct = exampleProduct[0];

    useEffect(() => {

        if(!isLoading && product.images?.length > 0) {
            setProductImages(product.images);
        }

    }, [product])

    const handleAddToCart = () => {
        setAdded(true);
        addToCart();
        setTimeout(() => {
            setAdded(false); //Change button to original after 1 second.
        }, 1000);
    }

    if(isLoading || !product) {
        return <Loading/>;
        
    }
    

    return (
        <div className="w-full h-full bg-gray-50">
            <div className="flex flex-col md:flex-row sm:gap-8 gap-4 py-8 px-8 sm:px-12 xl:px-2 w-full max-w-6xl mx-auto ">
            {/* Slider */}
            <div className="flex-1 flex md:w-1/2 justify-center">
                <Slider images={productImages} />
            </div>

            {/* Product info */}
            <div className="flex-1 m-4 flex flex-col gap-y-6 ">
                <h2 className="text-xl text-text-color font-semibold">{product.name}</h2>
                <div className="flex flex-row">
                    <ProductRating rating={product.rating} reviews={fakeProduct.reviews}/>
                </div>
                    <p className="text-xl font-bold mt-2">₺{product.price}</p>
                    <p className="overflow-visible break-words text-gray-400 text-md font-semibold mt-1">{product.description}</p>
                    <hr className="border-t border-text-color" />

                    <ColorSelection colors={fakeProduct.colors} text={false}/>
                    
                    <div className="w-full flex flex-row gap-8 mt-4 place-items-end">
                        <div className="w-56 ">
                            <ButtonMd 
                                onClick={handleAddToCart}
                                isFilled={isAdded}
                            >
                                <div className="flex flex-row gap-4">
                                    <ShoppingCart/>
                                    {isAdded ? "Added to Cart" : "Add to Cart"}
                                
                                </div>
                                
                            </ButtonMd>
                        </div>
                           
                        <div className="flex flex-row">
                            <RoundButtonSm>
                                <Heart/>
                            </RoundButtonSm>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ProductDetailCard;
