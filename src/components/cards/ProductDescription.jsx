import { ChevronRight } from "lucide-react";
import Loading from "../Loading";

const ProductDescription = ({ fakeProduct, product }) => {

    if (!product || !product.name || !product.images) {
        return <Loading />;
      }


    return (
        <div className="flex flex-col overflow-hidden lg:flex-row px-14 py-8 gap-y-4 items-center lg:items-start w-full h-full mt-8">
            {/* Product Image */}
            <img 
                src={product.images[0].url}
                alt="Product Image"
                className="w-full h-full mb-4 max-h-[350px] max-w-[350px] aspect-square object-cover rounded-xl [box-shadow:10px_10px_0_rgba(0,0,0,0.05)]"
            />
            
            {/* Description */}
            <div className=" h-full w-full px-4 lg:px-8 lg:ml-8">
                <h2 className="text-xl text-text-color font-bold mb-2">{product.name.toLowerCase()}</h2>
                <p className="text-second-text-color text-sm font-medium leading-relaxed">{fakeProduct.description}</p>
            </div>

            {/* Details */}
            <div className="w-full px-4 lg:px-8">
                <h2 className="text-xl text-text-color font-bold mb-2">details</h2>
                <ul className="text-second-text-color font-medium text-sm space-y-2">
                    {fakeProduct.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <ChevronRight className="w-5 h-5 mt-[2px] text-second-text-color" />
                            <span>{detail}</span>
                        </li>
                    ))}
                </ul>
            </div>


        </div>
    );
};

export default ProductDescription;
