import { useState } from "react";
import { ProductCardNoBorder} from "./Cards/ProductCard";
import PaginationButton from "./Buttons/PaginationButton";
import clothes from "../data/clothes.json";

const PRODUCTS_PER_PAGE = 12;

const ListProducts = ({category, products}) => {

    const PRODUCTS_PER_PAGE = 12;
    
    const [pageNumber, setPageNumber] = useState(1);

    const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

    const startIndex = (pageNumber - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    const visibleProducts = products.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setPageNumber(page);
    };

    return (
        <div className="flex flex-col py-16 px-8 md:px-16 lg:px-32 xl:px-56 place-items-center">

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-y-4">
                {visibleProducts.map(product => (
                    <ProductCardNoBorder key={product.id} product={product} />
                ))}
            </div>

            {/* Pagination */}
            <PaginationButton handleClick={handlePageChange} totalPages={totalPages} pageNumber={pageNumber}/>
        </div>
    );
};

export default ListProducts;
