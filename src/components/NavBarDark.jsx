import { Mail, Phone, Instagram, Youtube, Facebook, Twitter } from "lucide-react"
const NavBarDark = () => {

    return (
        <div className="nav-bar-dark hidden sm:flex sm:justify-between items-center h-[42px] px-6 text-xs text-light-text-color font-semibold  bg-dark-background-color">
            <div className="flex flex-row">   
                <div className="flex flex-row items-center">
                    <Phone className="h-4 w-4 mx-1"/>
                    (225) 555-0118
                </div>
                <div className="flex flex-row items-center px-3">
                    <Mail className="h-4 w-4 mx-1"/>
                    fizzystore@info.com
                </div>
            </div>
            <div className="min-w-[100px] mx-2 px-2 py-2 text-left">
                Follow us and get 10% off!
            </div>
            <div className="socials">
                <button>
                    <Instagram  className="h-4 w-4 mx-1"/>
                </button>
                <button>
                    <Youtube className="h-4 w-4 mx-1"/>
                </button>
                <button>
                    <Facebook className="h-4 w-4 mx-1"/>
                </button>
                <button>
                    <Twitter className="h-4 w-4 mx-1"/>
                </button>
            </div>
         </div>
       
    )
}

export default NavBarDark;