import { LayoutGrid, List, Menu } from "lucide-react";
import ButtonMd from "./buttons/ButtonMd";
import {ButtonSm} from "./buttons/ButtonSm";
import { useState } from "react";
import { useSelector } from "react-redux";

const ProductFilterRow = ({ onViewChange, onSortChange }) => {

    const [isGridView, setGridView] = useState(true);
    const [isSortMenuOpen, setSortMenuOpen] = useState(false);
    const totalProducts = useSelector((state) => state.product.total);

    const handleGridViewClick = () => {
        setGridView(true);
        onViewChange("grid");
    };

    const handleListViewClick = () => {
        
        setGridView(false);
        onViewChange("list");
    };

    const toggleSortMenu = () => {
        setSortMenuOpen((prevState) => !prevState); 
    };

    const handleSortClick = (sort) => {

        onSortChange(sort);
        setSortMenuOpen(false);
        
    }

    return (
        <div className="px-8 sm:mx-10 md:px-20 lg:px-32 xl:px-52">
            <div className="h-full flex flex-col gap-y-8 py-4 justify-between items-center sm:flex-row font-bold text-second-text-color text-sm">
                <div className="flex-1">
                    Total of  {totalProducts + " products."}
                </div>
                <div className="flex-1 flex flex-row gap-4 items-center justify-center">
                    Views:
                    <ButtonSm disabled={isGridView} onClick={handleGridViewClick}>
                        <LayoutGrid className="h-4" />
                    </ButtonSm>
                    <ButtonSm disabled={!isGridView} onClick={handleListViewClick}>
                        <List className="h-4" />
                    </ButtonSm>
                </div>

                <div className="flex-1 flex sm:justify-end gap-4">
                    {/* Sort button and dropdown menu */}
                    <div className="relative">
                        <ButtonMd onClick={toggleSortMenu}>
                            Sort
                        </ButtonMd>

                        {isSortMenuOpen && (
                            <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg border rounded-md z-50">
                                <ul className="text-sm">
                                    <li 
                                        onClick={() => handleSortClick("price:desc")}
                                        className="px-4 py-2 cursor-pointer hover:bg-gray-100">Price: High to Low</li>
                                    <li
                                        onClick={() => handleSortClick("price:asc")}
                                        className="px-4 py-2 cursor-pointer hover:bg-gray-100">Price: Low to High </li>
                                    <li 
                                        onClick={() => handleSortClick("rating:desc")}
                                        className="px-4 py-2 cursor-pointer hover:bg-gray-100">Rating: Highest</li>
                                </ul>
                            </div>
                        )}
                    </div>
               
                    <ButtonMd>
                        Filter
                    </ButtonMd>
                </div>
            </div>
        </div>
    );
};


export default ProductFilterRow;