import HeaderMenuRight from './HeaderMenuRight';
import NavMenu from './Menus/NavMenu';
import { useState } from 'react';

const NavBarLight = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full h-16 md:flex md:flex-row ">
            <div className="flex items-center justify-between  flex-nowrap h-full w-full">
                {/* Logo */}
                <a
                    href="/"
                    className="mx-4 text-2xl font-bold tracking-widest text-second-text-color whitespace-nowrap flex-shrink-0"
                >
                    Fizzy Store
                </a>

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
                <div className="md:hidden absolute top-16 left-0 w-screen z-50">
                    <NavMenu isOpen={true} />
                </div>
            )}
        </nav>
    );
};

export default NavBarLight;
