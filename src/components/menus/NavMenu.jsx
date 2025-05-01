import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import DropdownMenu from "./DropdownMenu";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/actions/productActions';

const NavMenu = ({ isOpen }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    const categories = useSelector((state) => state.product.categories);
    
    return (
        <div className={`${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row gap-3 items-center justify-center md:items-center md:mt-0 sm:w-auto w-full h-full px-4 text-second-text-color text-sm font-semibold `}>
            <Link to="/" >Menu</Link>

            {/* Shop */}
            <div className="relative group cursor-pointer md:h-full md:flex items-center place-items-center w-full">
                <div className=" h-full flex items-center text-second-text-color text-sm font-semibold ">
                    <Link to="/shop" className="flex items-center">
                    Shop
                    <ChevronDown className="w-4 h-4 ml-1" />
                    </Link>
                </div>

                {/* Shop Dropdown */}
                {categories.length !== 0 && (
                    <DropdownMenu 
                    categories={categories}
                    />
                )}
                
                
            </div>      

            <Link to="/about">About</Link>
            <Link to="/" >Blog</Link>
            <Link to="/contact" >Contact</Link>
            <Link to="/team" >Team</Link>
        </div>
    );
};

export default NavMenu;
