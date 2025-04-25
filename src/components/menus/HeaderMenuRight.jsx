import { User, Search, Heart, ShoppingCart } from "lucide-react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import LoginForm from "../forms/LoginForm";

const HeaderMenuRight = () => {

    const history = useHistory();

    const [showForm, setShowForm] = useState(false);
    const token =  localStorage.getItem("token");

    const handleClick = () => {
        if(token === null) {  //Check if there is session token.
            history.push("./login");
        }
    }

    return (
        <div className="flex items-center space-x-4 mx-4 text-sm ">
            <div
                className="relative"
                onMouseEnter={() => setShowForm(true)}
                onMouseLeave={() => setShowForm(false)}
            >
                
                <button
                    className="flex items-center gap-1 hover:text-second-text-color rounded-full hover:bg-gray-50"
                    onClick={handleClick}
                >
                    <User className=" text-primary-color w-5 h-5" />
                    <span className="hidden lg:inline text-primary-color">Login / Signup</span>
                </button>

                {showForm && token === null && (
                    <div className="text-text-color absolute top-full right-0 w-72 border border-gray-200 rounded-lg z-50 shadow-lg bg-transparent">
                        <div className="rounded-lg bg-white overflow-hidden">
                            <LoginForm />
                        </div>
                    </div>
                )}
                
            </div>
            <button className=" text-primary-color rounded-full hover:bg-gray-100">
                <Search className="w-5 h-5" />
            </button>
            <button className=" text-primary-color rounded-full hover:bg-gray-100">
                <ShoppingCart className="w-5 h-5" />
            </button>
            <button className=" text-primary-color rounded-full hover:bg-gray-100">
                <Heart className="w-5 h-5" />
            </button>
        </div>
    );
};

export default HeaderMenuRight;
