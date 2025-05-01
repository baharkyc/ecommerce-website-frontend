import { Link } from "react-router-dom/cjs/react-router-dom.min";
import EmailSubscribe from "../forms/EmailSubscribe";


const FooterMenu = () => {
    return(
        <div className="w-full flex flex-col gap-8 md:flex-row justify-between sm:my-8">
            <div>
                <h4 className="font-semibold text-lg">Company</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                    <li>
                        <Link to="/about" className="hover:underline">About Us</Link>
                    </li>
                    <li>
                        <Link to="/careers" className="hover:underline">Careers</Link>
                    </li>
                    <li>
                        <Link to="/press" className="hover:underline">Press</Link>
                    </li>
                </ul>
            </div>

            {/* Menu 2 */}
            <div>
                <h4 className="font-semibold text-lg">Support</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                    <li>
                        <Link to="/contact" className="hover:underline">Contact</Link>
                    </li>
                    <li>
                        <Link to="/faq" className="hover:underline">FAQ</Link>
                    </li>
                    <li>
                        <Link to="/shipping" className="hover:underline">Shipping Info</Link>
                    </li>
                </ul>
            </div>

            {/* Get in Touch */}
            <div className="sm:flex sm:flex-row justify-between ">
                <div>
                    <h4 className="font-semibold text-lg mb-2">Get in Touch</h4>
                    <p className="text-sm text-gray-700 mb-2">info@fizzystore.com</p>
                    <p className="text-sm text-gray-700">+1 234 567 890</p>
                    <EmailSubscribe/>
                </div>
            </div>
        </div>
        
    )
}
export default FooterMenu;