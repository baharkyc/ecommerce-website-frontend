
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HeaderMenuRight from "./HeaderMenuRight";


const NavBarLight = () => {

    return (
        <div>
            <Navbar  className="flex flex-col sm:flex-row w-full ">
                <div className='flex flex-1 grow-0 justify-center sm:justify-start px-4 '>
                    <Navbar.Brand className="text-secondary-1 text-2xl font-bold tracking-widest text-center sm:text-left text-nowrap" href="/">Fizzy Store</Navbar.Brand>
                </div>
                <div className='flex flex-2 flex-grow flex-col justify-center'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto text-xs p-2 font-bold">
                            <div className='flex flex-col sm:flex-row'>
                                <Nav.Link href="/" className='text-second-text-color'>Menu</Nav.Link>
                                <NavDropdown title="Shop" id="basic-nav-dropdown">
                                    <div className="flex justify-around items-center text-xs text-second-text-color w-48 h-36 sm:w-72">
                                        <div>
                                            <div className="dropdown-header text-xs">Women</div>
                                            <NavDropdown.Item href="#action/3.1">Dress</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Pants</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Tshirt</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.4">Top</NavDropdown.Item>
                                        </div>
                                        <div>
                                            <div className="dropdown-header text-xs">Men</div>
                                            <NavDropdown.Item href="#action/3.1">Trousers</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Shirt</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Outer Wear</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.4">Tshirt</NavDropdown.Item>
                                        </div>
                                    </div>
                                </NavDropdown>
                                <Nav.Link  href="/" className='text-second-text-color'>About</Nav.Link>
                                <Nav.Link href="/" className='text-second-text-color'>Blog</Nav.Link>
                                <Nav.Link href="/" className='text-second-text-color'>Contact</Nav.Link>
                                <Nav.Link href="/" className='text-second-text-color'>Pages</Nav.Link>
                             </div>   
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <div className='flex flex-1 items-center flex-col justify-center'>
                    <HeaderMenuRight/>
                </div>
            </Navbar>
        </div>
       
    )
}

export default NavBarLight;