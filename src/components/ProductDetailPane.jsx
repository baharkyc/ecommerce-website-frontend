import { useState } from "react";
import ProductDescription from "./cards/ProductDescription";
import TabMenu from "./menuss/TabMenu";
import ReviewsList from "./ReviewsList";
import exampleProduct from "../data/exampleProduct.json";

const ProductDetailPane = () => {
    const [activeTab, setActiveTab] = useState("description");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const product = exampleProduct[0];

    return (
        <div className="w-full h-full text-second-text-color sm:px-16 max-w-6xl mx-auto mt-8 px-14">
            {/* Tab navigation */}
            <TabMenu activeTab={activeTab} 
                handleTabClick={handleTabClick} 
                reviews={product.reviews}/>

            {/* Tab Content */}
            {activeTab === "description" && (
                <ProductDescription product={product} />
            )}

            {activeTab === "additionalInfo" && (
                <div className="w-full px-8 md:px-32">
                    <h2 className="text-xl text-text-color font-bold mb-4 pt-4">additional information</h2>
                    <div className="text-sm font-sans text-second-text-color space-y-4">
                        <p>Shipping: {product.additionalInformation?.shipping || "Not available"}</p>
                        <p>Return Policy: {product.additionalInformation?.returnPolicy || "Not available"}</p>
                        <p>Material Care: {product.additionalInformation?.materialCare || "Not available"}</p>
                    </div>
                </div>
            )}

            {activeTab === "reviews" && (
                <div className="w-full md:px-32 px-8">
                    
                    <ReviewsList reviews={product.reviews}/>
                    
                </div>
            )}
        </div>
    );
};

export default ProductDetailPane;
