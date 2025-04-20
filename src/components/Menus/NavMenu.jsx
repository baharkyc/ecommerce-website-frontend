import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import DropdownMenu from "./DropdownMenu";

const NavMenu = ({ isOpen }) => {

    const categories = [ 
        {"Women": ["Dress", "Pants", "Tshirt", "Top",]}, 
        {"Men": ["Trousers", "Shirts", "Outer Wear", "Tshirt"]   
        }];


    return (
        <div className={`${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row gap-3 items-center justify-center md:items-center md:mt-0 sm:w-auto w-full h-full px-4 text-second-text-color text-sm font-semibold bg-white`}>
            <a href="/" >Menu</a>

            {/* Shop */}
            <div className="relative group cursor-pointer md:h-full md:flex items-center place-items-center w-full">
                <div className=" h-full flex items-center text-second-text-color text-sm font-semibold ">
                    <Link to="/shop" className="flex items-center">
                    Shop
                    <ChevronDown className="w-4 h-4 ml-1" />
                    </Link>
                </div>

                {/* Shop Dropdown */}
                <DropdownMenu menuItems={categories}/>
                
            </div>      

            <a href="/" >About</a>
            <a href="/" >Blog</a>
            <a href="/" >Contact</a>
            <a href="/" >Pages</a>
        </div>
    );
};

export default NavMenu;
