import SocialLinks from "../components/buttons/SocialLinks";
import FooterMenu from "../components/Menus/FooterMenu";

const Footer = () => {

    return (
        <footer className="">
            <div className=" px-6 py-10 md:px-32">
                {/* Brand & Socials */}
                <div className="my-16 flex flex-col sm:flex-row justify-between">
                    <p className="text-2xl font-bold tracking-widest mb-4">FizzyStore</p>
                    <SocialLinks color="#23A6F0" />
                </div>
                <FooterMenu/>
            </div>
            <div className="text-center bg-gray-100 text-sm mt-16 p-8 sm:px-32">
                    Made with love @2025
            </div>
      </footer>
        
    )
}

export default Footer;