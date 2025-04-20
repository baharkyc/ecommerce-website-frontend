import { Link } from "react-router-dom";

const MenuButton = ({children, to}) => {

    return (
            <Link to={to} className="items-center text-xs p-2 font-bold text-second-text-color">
                {children}
            </Link>
    )
}

export default MenuButton;