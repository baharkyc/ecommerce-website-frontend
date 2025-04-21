// components/ProductDetailCard.jsx
import { Heart, Eye, ShoppingCart } from "lucide-react";
import exampleProduct from "../../data/exampleProduct.json";
import Slider from "../sliders/Slider";
import ProductRating from "../ProductRating";
import ColorSelection from "../buttons/ColorSelection";
import RoundButtonSm from "../buttons/RoundButtonSm";
import ButtonMd from "../buttons/ButtonMd";

const ProductDetailCard = () => {
  const product = exampleProduct[0];
  const images = product.images || [];

  return (

    <div className="w-full h-full bg-gray-50">
        <div className="flex flex-col md:flex-row sm:gap-8 gap-4 py-8 px-8 sm:px-16 w-full max-w-6xl mx-auto ">
        {/* Slider */}
        <div className="flex-1 flex justify-center">
            <Slider images={images} />
        </div>

        {/* Product info */}
        <div className="flex-1 m-4 flex flex-col gap-y-6">
            <h2 className="text-xl text-text-color font-semibold">{product.name}</h2>
            <div className="flex flex-row">
                <ProductRating rating={product.rating} reviews={product.reviews}/>
            </div>
                <p className="text-xl font-bold mt-2">₺{product.price}</p>
                <p className="text-gray-400 text-md font-semibold mt-1">{product.description}</p>
                <hr className="border-t border-text-color" />

                <ColorSelection colors={product.colors} text={false}/>
                
                <div className="flex flex-row gap-16 mt-4 place-items-end">
                    <ButtonMd >
                        Select Options
                    </ButtonMd>
                    <div className="">
                        <RoundButtonSm>
                            <Heart/>
                        </RoundButtonSm>
                        <RoundButtonSm>
                            <ShoppingCart/>
                        </RoundButtonSm>
                        <RoundButtonSm>
                            <Eye/>
                        </RoundButtonSm>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    

  );
};

export default ProductDetailCard;
