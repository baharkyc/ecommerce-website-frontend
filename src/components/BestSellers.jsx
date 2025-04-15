import {ProductCardBordered} from "./Cards/ProductCard"
import products from "../data/products.json"
import { useState } from "react";
import ButtonMd from "./Buttons/ButtonMd";

const BestSellers = () => {

    const [visibleProducts, setVisibleProducts] = useState(6);
    const [isDisabled, setDisabled] = useState(false);

    const loadMore = () => {
        const remaining = products.length - visibleProducts;
        const toAdd = Math.min(3, remaining); 

        setVisibleProducts(prev => prev + toAdd);

        
        if (visibleProducts + toAdd >= products.length) {
            setDisabled(true);
        }
      };

    return(
        <div className="flex flex-col py-16 px-32 place-items-center md:grid md:grid-cols-3 gap-4 md:mx-0 lg:mx-16 xl:mx-64">
            <div className="col-span-3 flex justify-center w-full text-md tracking-widest ">
                Featured Products
            </div>
            <div className="col-span-3 flex justify-center w-full text-xl font-bold tracking-widest">
                BESTSELLERS
            </div>
            {products.slice(0, visibleProducts).map(product => (
                <ProductCardBordered key={product.id} product={product} />
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