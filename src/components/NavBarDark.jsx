import { Mail, Phone } from "lucide-react"
import SocialLinks from "./buttons/SocialLinks";

const NavBarDark = () => {
    return (
        <div className="z-0 nav-bar-dark hidden sm:flex justify-between items-center h-[46px] px-6 text-xs text-light-text-color font-semibold bg-dark-background-color">
            {/* Left - Contact Info */}
            <div className="flex flex-row items-center gap-6 truncate">
                <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-1" />
                    (225) 555-0118
                </div>
                <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-1" />
                    fizzystore@info.com
                </div>
            </div>

            {/* Middle - Message */}
            <div className="hidden lg:flex  pr-56 ">
                Follow us and get 10% off!
            </div>

            {/* Right - Social Links */}
            <SocialLinks />
        </div>
    )
}

export default NavBarDark;
