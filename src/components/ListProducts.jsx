import { useState, useEffect } from "react";
import ProductCardNoBorder from "./cards/ProductCardNoBorder";
import PaginationButton from "./Buttons/PaginationButton";
import ProductCardList from "./cards/ProductCardList";
import clothes from "../data/clothes.json";

const PRODUCTS_PER_PAGE = 12;

const ListProducts = ({ category, products, viewMode = "grid" }) => {
    const [pageNumber, setPageNumber] = useState(1);

    const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

    const startIndex = (pageNumber - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    const visibleProducts = products.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setPageNumber(page);
    };

    useEffect(() => {
        window.scrollTo(0, 350); // Scroll to page start
    }, [pageNumber]); // When pageNumber changes

    return (
        <div className={`flex flex-col place-items-center mt-8 ${
            viewMode === "grid"
                ? "px-8 md:px-16 lg:px-32 xl:px-56"
                : "px-16 xl:px-24 lg:px-4 md:px-24 sm:px-24"
        }`}
        >
            <div
                className={`w-full gap-y-4  ${
                    viewMode === "grid"
                        ? "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                        : "flex flex-col gap-y-6"
                }`}
            >
                {visibleProducts.map((product) => (
                    viewMode === "grid" ? (
                        <ProductCardNoBorder key={product.id} product={product} />
                    ) : (
                        <ProductCardList key={product.id} product={product} />
                    )
                ))}
            </div>

            <PaginationButton
                handleClick={handlePageChange}
                totalPages={totalPages}
                pageNumber={pageNumber}
            />
        </div>
    );
};


export default ListProducts;
