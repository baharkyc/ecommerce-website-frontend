import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import NavBarLight from "../components/NavBarLight";
import NavBarDark from "../components/NavBarDark";

const Header = () =>{

    return (
        <Navbar>
            <div className="w-full  bg-white">
                <NavBarDark/>
                <NavBarLight/>
            </div>
        </Navbar>
    )

}

export default Header;