import ProductCard from "./Cards/ProductCard"
import products from "../../products.json"
import { useState } from "react";
import ButtonMd from "./Buttons/ButtonMd";

const BestSellers = () => {

    const [visibleProducts, setVisibleProducts] = useState(6);
    const [isDisabled, setDisabled] = useState(false);

    const loadMore = () => {
        const remaining = products.length - visibleProducts;
        const toAdd = Math.min(3, remaining); // En fazla 3, ama kalan ne kadarsa o

        setVisibleProducts(prev => prev + toAdd);

        // Yeni görünür ürün sayısı, toplam ürün sayısına ulaşırsa disable et
        if (visibleProducts + toAdd >= products.length) {
            setDisabled(true);
        }
      };

    return(
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 justify-items-center py-4 mx-8 md:mx-16 xl:mx-64">
            
            {products.slice(0, visibleProducts).map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
            <div className="col-span-3 flex justify-center w-full">
                <ButtonMd onClick={loadMore} isDisabled={isDisabled}>
                LOAD MORE PRODUCTS
                </ButtonMd>
            </div>
        </div>
        
    )
}

export default BestSellers;