import { User, Search, Heart, ShoppingCart } from "lucide-react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import LoginForm from "../forms/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/actions/authActions";
import ButtonMd from "../buttons/ButtonMd";
import ShoppingCartDropdown from "../ShoppingCartDropdown";

const HeaderMenuRight = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const [ showForm, setShowForm ] = useState(false);
    const [ showCart, setShowCart ] = useState(false);

    const user = useSelector((state) => state.client.user); //retrieve user from store
    const isLoggedIn = Boolean(user?.name);  //logged in if there is user in store
    const {cart} = useSelector(state => state.shoppingCart) ;

    const handleClick = () => {
        
        if (!isLoggedIn) {
            history.push("/login");
        } 
    };

    const handleLogout = () => {

        dispatch(logoutUser());
        setShowForm(false);
        history.push("/");
        console.log("User logged out")

    };

    const handleMyOrdersClick = () => {

        setShowForm(false); // Close menu on navigating
        history.push("/previousOrders");

      };


    return (
        <div className="flex items-center space-x-4 mx-4 text-sm ">
            <div
                className="relative"
                onClick={() => {
                    setShowForm(prev => {
                        const newState = !prev;
                        if (newState) {
                            setShowCart(false);  // Form açılırken cart kapanır
                        }
                        return newState;
                    });
                }}
            >
                
                <button
                    className="flex items-center gap-1 hover:text-second-text-color rounded-full hover:bg-gray-50"
                    onClick={handleClick}
                >
                    <User className=" text-primary-color w-5 h-5" />
                    <span className="hidden lg:inline text-primary-color">
                        {isLoggedIn ? user.name : "Login / Signup"}
                    </span>
                </button>

                {showForm && (
                    <div className="text-text-color absolute top-full right-0 w-72 z-50 bg-transparent">
                        {!isLoggedIn ? (
                            <div className="overflow-hidden shadow-lg ">
                                <LoginForm />
                            </div>
                        ): (
                            <div className="w-full pl-28 flex flex-col items-end py-4 gap-y-4">
                               <div className="bg-white w-full px-4 py-4 flex flex-col gap-4 rounded-md shadow-md border border-gray-200">
                                    <button
                                        onClick={handleMyOrdersClick}
                                        className=" text-second-text-color text-nowrap text-right font-semibold px-4 rounded-md hover:text-primary-color  transition-colors duration-200"
                                    >
                                        My Orders
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-red-500 text-right px-4 hover:text-primary-color  transition-colors duration-200"
                                        
                                    >
                                        Logout
                                    </button>
                                    </div>

                                
                            </div>
                            
                          )}
                    </div>
                )}
            </div>

            <button className="text-primary-color rounded-full hover:bg-gray-100">
                <Search className="w-5 h-5" />
            </button>

            <div className="relative top-0 z-50">
                <button 
                    className=" text-primary-color rounded-full hover:bg-gray-100 relative"
                    onClick={() => {
                        setShowCart(prev => {
                            const newState = !prev;
                            if (newState) {
                                setShowForm(false); // Cart açılırken form kapanacak
                            }
                            return newState;
                        });
                    }}
                >
                    <ShoppingCart className="w-5 h-5" />
                    { cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                            {cart.length}
                        </span>
                    )}
                </button>

                {showCart && (
                    <div className="absolute top-full right-0 mt-6 w-96 z-50">
                        <ShoppingCartDropdown/>
                    </div>
                    
                )}
            </div>
            

            <button className=" text-primary-color rounded-full hover:bg-gray-100">
                <Heart className="w-5 h-5" />
            </button>
        </div>
    );
};

export default HeaderMenuRight;
