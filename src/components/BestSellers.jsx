import ProductCard from "./ProductCard"
import products from "../../products.json"
import { useState } from "react";
import ButtonMd from "./ButtonMd";

const BestSellers = () => {

    const [visibleProducts, setVisibleProducts] = useState(6);
    const [isDisabled, setDisabled] = useState(false);

    const loadMore = () => {
        if(products.length >= visibleProducts + 3) {
            setVisibleProducts(prev => prev + 3);
            if(products.length % 3 == 0)
                setDisabled(true);
        } else if(products.length >= visibleProducts + 2) {
            setVisibleProducts(prev => prev + 2)
            setDisabled(true);
        } else if(products.length >= visibleProducts + 1) {
            setVisibleProducts(prev => prev + 1)
        }
      };

    return(
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 justify-items-center py-4 mx-32 md:mx-16 xl:mx-64">
            {products.slice(0, visibleProducts).map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
            <ButtonMd onClick={loadMore} isDisabled={isDisabled}>
                LOAD MORE PRODUCTS
            </ButtonMd>
        </div>
        
    )
}

export default BestSellers;