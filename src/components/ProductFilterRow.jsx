import { LayoutGrid, List, Menu } from "lucide-react";
import ButtonMd from "./buttons/ButtonMd";
import ButtonSm from "./buttons/ButtonSm";
import { useState } from "react";

const ProductFilterRow = ({ products, onViewChange }) => {
    const [isGridView, setGridView] = useState(true);

    const handleGridViewClick = () => {
        setGridView(true);
        onViewChange("grid");
    };

    const handleListViewClick = () => {
        setGridView(false);
        onViewChange("list");
    };

    return (
        <div className="px-8 sm:mx-10 md:px-20 lg:px-32 xl:px-52">
            <div className="h-full flex flex-col gap-y-8 py-4 justify-between items-center sm:flex-row font-bold text-second-text-color text-sm">
                <div className="flex-1">
                    Showing {products.length + " products."}
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
                <div className="flex-1 flex sm:justify-end">
                    <ButtonMd>
                        Filter
                    </ButtonMd>
                        
                  
                </div>
            </div>
        </div>
    );
};


export default ProductFilterRow;