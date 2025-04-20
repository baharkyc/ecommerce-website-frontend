import { User, Search, Heart, ShoppingCart } from "lucide-react";

const HeaderMenuRight = () => {
    return (
        <div className="flex items-center space-x-4 mx-4 text-primary-color text-sm">
            <button className="flex items-center gap-1 hover:text-gray-800">
                <User className="w-5 h-5" />
                <span className="hidden lg:inline">Login/Register</span>
            </button>
            <button className="rounded-full hover:bg-gray-100">
                <Search className="w-5 h-5" />
            </button>
            <button className="rounded-full hover:bg-gray-100">
                <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="rounded-full hover:bg-gray-100">
                <Heart className="w-5 h-5" />
            </button>
        </div>
    );
};

export default HeaderMenuRight;
