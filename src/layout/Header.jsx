import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import NavBarLight from "../components/NavBarLight";
import NavBarDark from "../components/NavBarDark";

const Header = () =>{

    return (
        <div className="w-full ">
            <NavBarDark/>
            <NavBarLight/>
        </div>

    )

}

export default Header;