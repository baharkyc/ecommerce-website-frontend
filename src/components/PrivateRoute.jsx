
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";


const PrivateRoute = ({children, ...rest}) => {

    const { isAuthenticated } = useSelector(state => state.auth);

    if (isAuthenticated === null) {
        return (
            <div className="w-full h-screen flex items-center justify-center text-gray-600">
                <span>Loading...</span>
            </div>
        );
    }

    return (
        <Route 
            {...rest} render={() => isAuthenticated ? 
            (children) : 
            <Redirect 
                to="/login"
            />}
        />
    )

}

export default PrivateRoute;