// components/ProductDetailCard.jsx
import { Star } from "lucide-react";
import exampleProduct from "../../data/exampleProduct.json";
import Slider from "../sliders/Slider";
import ProductRating from "../ProductRating";
import ColorSelection from "../buttons/ColorSelection";

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
                
                <ColorSelection colors={product.colors}/>
            </div>
        </div>
    </div>
    

  );
};

export default ProductDetailCard;
