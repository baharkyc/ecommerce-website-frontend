import { LayoutGrid, List, Menu } from "lucide-react";
import ButtonMd from "./buttons/ButtonMd";
import {ButtonSm} from "./buttons/ButtonSm";
import { useState } from "react";
import { useSelector } from "react-redux";

const ProductFilterRow = ({ onViewChange, onSortChange, onFilterChange }) => {

    const [isGridView, setGridView] = useState(true);
    const [isSortMenuOpen, setSortMenuOpen] = useState(false);
    const [isFilterMenuOpen, setFilterMenuOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState(null);
    

    const totalProducts = useSelector((state) => state.product.total);
    const productList = useSelector((state) => state.product.productList);

    const highestPrice = productList?.reduce((max, product) => 
        product.price > max ? product.price : max , 0
    );

    const [maxPrice, setMaxPrice] = useState(highestPrice);

    console.log(highestPrice);

    const handleColorTranslate = (color) => {
        const colorMap = {
            red: "Kirmizi",
            blue: "Mavi",
            green: "Yeşil",
            black: "Siyah",
            white: "Beyaz",
            yellow: "Sarı",
            purple: "Mor",
            pink: "Pembe",
            gray: "Gri",
            brown: "Kahverengi",
            orange: "Turuncu",
            beige: "Bej",
            navy: "Lacivert"
        };
    
        return colorMap[color.toLowerCase()] || color;
    };

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

        if(isFilterMenuOpen) { //close filter menu if open when clicked on sort menu.
            setFilterMenuOpen(false);
        }
    };

    const handleSortClick = (sort) => {
        onSortChange(sort);
        setSortMenuOpen(false);
    }

    const toggleFilterMenu = () => {
        setFilterMenuOpen((prevState) => !prevState);

        if (isSortMenuOpen) { //close sort menu if open when clicked on filter menu.
            setSortMenuOpen(false);
        }
    }

    const handleFilterClick = () => {
        onFilterChange({ color: selectedColor, maxPrice: Number(maxPrice) });
        setFilterMenuOpen(false);
    };




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

                    <div className="relative">
                        {/* Filter button and filter menu */}
                        <ButtonMd onClick={toggleFilterMenu}>
                            Filter
                        </ButtonMd>

                        {isFilterMenuOpen && (
                            <div className="absolute right-0 top-full mt-2 w-64 bg-white shadow-lg border rounded-md z-50 p-4 space-y-4 text-sm">
                                
                                {/* Color Filter */}
                                <div>
                                    <h4 className="font-semibold mb-2">Color</h4>
                                    <div className="flex gap-2 flex-wrap">
                                        {["Red", "Blue", "Green", "Black", "White"].map((color) => {
                                            const isSelected = selectedColor === handleColorTranslate(color);
                                            return (
                                                <button
                                                    key={color}
                                                    onClick={() => setSelectedColor(handleColorTranslate(color))}
                                                    className={`border px-3 py-1 rounded hover:bg-gray-100 ${
                                                        isSelected ? "bg-blue-100 border-blue-500 text-blue-700" : ""
                                                    }`}
                                                >
                                                    {color}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Price Range Filter */}
                                    <div>
                                        <h4 className="font-semibold mb-2">Price Range</h4>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs text-gray-500">₺0</span>
                                            <input
                                                type="range"
                                                min={0}
                                                max={highestPrice}
                                                step={1}
                                                value={maxPrice}
                                                onChange={(e) => setMaxPrice(e.target.value)}
                                                className="flex-1"
                                            />
                                            <span className="text-xs text-gray-500">{highestPrice}</span>
                                        </div>

                                        <div className="text-center text-xs text-gray-600 mt-2">
                                            <span className="font-semibold">₺{maxPrice}</span>
                                        </div>
                                    </div>

                                <div className="flex justify-between items-center gap-4">
                                    <button
                                        onClick={() => {
                                            setSelectedColor(null);
                                            setMaxPrice(highestPrice);
                                        }}
                                        className="text-sm text-gray-500 hover:underline"
                                    >
                                        Clear
                                    </button>
                                    <ButtonMd onClick={handleFilterClick}>
                                        Apply
                                    </ButtonMd>
                                </div>  

                            </div>
                        )}
                    </div>
                    
                </div>
            </div>
        </div>
    );
};


export default ProductFilterRow;