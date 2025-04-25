import SocialLinks from "../components/buttons/SocialLinks";
import FooterMenu from "../components/menus/FooterMenu";

const Footer = () => {

    return (
        <footer className="">
            <div className="px-12 py-10 md:px-32 ">
                {/* Brand & Socials */}
                <div className="md:my-16 my-4 flex flex-col sm:flex-row justify-between border-b">
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