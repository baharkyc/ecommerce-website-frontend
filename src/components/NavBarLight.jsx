import HeaderMenuRight from './HeaderMenuRight';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const NavBarLight = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full flex flex-col sm:flex-row items-center justify-between px-4 py-4 shadow-sm">
            {/* Logo */}
            <div className="flex justify-between items-center w-full sm:w-auto">
                <a href="/" className="text-2xl font-bold tracking-widest text-second-text-color">Fizzy Store</a>
                <button
                    className="sm:hidden text-primary-color"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Navigation */}
            <div className={`${isOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row gap-4 sm:items-center mt-4 sm:mt-0 w-full sm:w-auto`}>
                <a href="/" className="text-second-text-color text-sm font-semibold">Menu</a>
                
                {/* Shop Dropdown */}
                <div className="relative group">
                    <button className="flex items-center text-second-text-color text-sm font-semibold">
                        Shop
                        <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    <div className="absolute left-0 mt-2 hidden group-hover:flex bg-white shadow-lg p-4 rounded-md gap-8 z-10">
                        <div>
                            <p className="text-xs font-bold mb-2">Women</p>
                            <a href="#" className="block text-xs text-second-text-color hover:text-primary-color">Dress</a>
                            <a href="#" className="block text-xs text-second-text-color hover:text-primary-color">Pants</a>
                            <a href="#" className="block text-xs text-second-text-color hover:text-primary-color">Tshirt</a>
                            <a href="#" className="block text-xs text-second-text-color hover:text-primary-color">Top</a>
                        </div>
                        <div>
                            <p className="text-xs font-bold mb-2">Men</p>
                            <a href="#" className="block text-xs text-second-text-color hover:text-primary-color">Trousers</a>
                            <a href="#" className="block text-xs text-second-text-color hover:text-primary-color">Shirt</a>
                            <a href="#" className="block text-xs text-second-text-color hover:text-primary-color">Outer Wear</a>
                            <a href="#" className="block text-xs text-second-text-color hover:text-primary-color">Tshirt</a>
                        </div>
                    </div>
                </div>

                <a href="/" className="text-second-text-color text-sm font-semibold">About</a>
                <a href="/" className="text-second-text-color text-sm font-semibold">Blog</a>
                <a href="/" className="text-second-text-color text-sm font-semibold">Contact</a>
                <a href="/" className="text-second-text-color text-sm font-semibold">Pages</a>
            </div>

            {/* Header Right */}
            <div className="hidden sm:flex">
                <HeaderMenuRight />
            </div>
        </nav>
    );
};

export default NavBarLight;
