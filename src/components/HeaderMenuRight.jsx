
import { User, Search, Heart, ShoppingCart } from "lucide-react";


const HeaderMenuRight = () => {

    return (
        <div className="flex flex-row justify-between sm:justify-center pr-10 font-bold text-xs text-primary-color sm:hidden lg:flex lg:flex-row">
            <button className="flex flex-row items-center py-2 sm:px-2">
                <User className="w-5 h-5 mx-1" />
                <div className="hidden sm:flex">Login/Register</div>
            </button>
            <div className="flex ">
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Search className="h-5, w-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <ShoppingCart className=" h-5, w-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Heart className=" h-5, w-5" />
                </button>
            </div>
        </div>


    )
}

export default HeaderMenuRight;