import { User, Search, Heart, ShoppingCart } from "lucide-react";
import { useHistory } from "react-router-dom";

const HeaderMenuRight = () => {

    const history = useHistory();

    const handleclick = () => {
        history.push("./signup");
    }

    return (
        <div className="flex items-center space-x-4 mx-4 text-primary-color text-sm ">
            <button 
                className="flex items-center gap-1 hover:text-second-text-color rounded-full hover:bg-gray-50"
                onClick={handleclick}>
                <User className="w-5 h-5" />
                <span className="hidden lg:inline">Login / Signup</span>
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
