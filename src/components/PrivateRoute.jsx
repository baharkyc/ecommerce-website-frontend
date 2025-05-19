
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";


const PrivateRoute = ({children, ...rest}) => {

    const { user } = useSelector(state => state.client);

    const isAuthenticated = !!(
        user &&
        typeof user === 'object' &&
        user.email && user.email.trim() !== '' &&
        user.name && user.name.trim() !== ''
      );


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