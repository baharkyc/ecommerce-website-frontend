import HeaderMenuRight from './menus/HeaderMenuRight';
import NavMenu from './menus/NavMenu';
import { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const NavBarLight = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full md:h-16 md:flex-row flex-col place-content-center">
            <div className="flex items-center justify-between  flex-nowrap h-full w-full min-h-16">
                {/* Logo */}
                <Link
                    to="/"
                    className="mx-4 text-2xl font-bold tracking-widest text-second-text-color whitespace-nowrap flex-shrink-0"
                >
                    Fizzy Store
                </Link>

                {/* Menu */}
                <div className="hidden md:flex md:flex-grow md:justify-center md:items-center h-full">
                    <NavMenu isOpen={true} />
                </div>

                {/* Menu Right */}
                <div className="hidden md:flex md:items-center flex-shrink-0 h-full">
                    <HeaderMenuRight />
                </div>

                {/* Mobil Menu Button */}
                <button
                    className="md:hidden text-primary-color px-6 text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden w-full mb-4 ">
                    <NavMenu isOpen={true} />
                </div>
            )}
        </nav>
    );
};

export default NavBarLight;
