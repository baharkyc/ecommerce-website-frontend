import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavMenu = ({ isOpen }) => {
    return (
        <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-3 md:items-center md:mt-0 w-auto h-full px-4 text-second-text-color text-sm font-semibold `}>
            <a href="/" className="">Menu</a>

            {/* Shop */}
            <div className="relative group cursor-pointer md:h-full md:flex md:items-center">
                <div className=" h-full flex items-center text-second-text-color text-sm font-semibold ">
                    <Link to="/shop" className="flex items-center">
                    Shop
                    <ChevronDown className="w-4 h-4 ml-1" />
                    </Link>
                </div>

                {/* Shop Dropdown */}
                <div >
                    <div className="absolute left-0 mt-4 p-4 hidden group-hover:flex flex-row bg-white shadow-lg rounded-md gap-8 z-10 whitespace-nowrap">
                        <div className='text-s font-semibold space-y-2'>
                            <p className="mb-2">Women</p>
                            <a href="#" className="block font-medium text-second-text-color hover:text-primary-color">Dress</a>
                            <a href="#" className="block font-medium text-second-text-color hover:text-primary-color">Pants</a>
                            <a href="#" className="block font-medium  text-second-text-color hover:text-primary-color">Tshirt</a>
                            <a href="#" className="block font-medium text-second-text-color hover:text-primary-color">Top</a>
                        </div>
                        <div className='text-s font-semibold space-y-2'>
                            <p className="mb-2">Men</p>
                            <a href="#" className="block font-medium text-second-text-color hover:text-primary-color">Trousers</a>
                            <a href="#" className="block font-medium text-second-text-color hover:text-primary-color">Shirt</a>
                            <a href="#" className="block font-medium text-second-text-color hover:text-primary-color">Outer Wear</a>
                            <a href="#" className="block font-medium text-second-text-color hover:text-primary-color">Tshirt</a>
                        </div>
                    </div>
                </div>
                
            </div>      

            <a href="/" >About</a>
            <a href="/" >Blog</a>
            <a href="/" >Contact</a>
            <a href="/" >Pages</a>
        </div>
    );
};

export default NavMenu;
