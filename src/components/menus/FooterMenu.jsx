import EmailSubscribe from "../forms/EmailSubscribe";


const FooterMenu = () => {
    return(
        <div className="w-full flex flex-col gap-8 md:flex-row justify-between sm:my-8">
            <div>
                <h4 className="font-semibold text-lg">Company</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                    <li>
                        <a href="/about" className="hover:underline">About Us</a>
                    </li>
                    <li>
                        <a href="/careers" className="hover:underline">Careers</a>
                    </li>
                    <li>
                        <a href="/press" className="hover:underline">Press</a>
                    </li>
                </ul>
            </div>

            {/* Menu 2 */}
            <div>
                <h4 className="font-semibold text-lg">Support</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                    <li>
                        <a href="/contact" className="hover:underline">Contact</a>
                    </li>
                    <li>
                        <a href="/faq" className="hover:underline">FAQ</a>
                    </li>
                    <li>
                        <a href="/shipping" className="hover:underline">Shipping Info</a>
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