import ButtonMd from "./Buttons/ButtonMd";

const ClickToAction = () => {

    return (
        
        <section className="flex w-full md:min-h-[600px] lg:px-16 py-16">
            <div className="flex flex-col md:flex-row items-center px-12 md:px-24">
                
                {/* LEFT: Two side-by-side images */}
                <div className=" flex flex-row justify-center gap-4 h-full w-full p-6">
                    <img 
                        src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="CTA Image 1" 
                        className="w-1/2 object-cover"
                    />
                    <img 
                        src="https://images.pexels.com/photos/2112651/pexels-photo-2112651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="CTA Image 2" 
                        className="w-1/2 object-cover"
                    />
                </div>

                {/* RIGHT: Text content */}
                <div className=" w-full text-left md:mx-0 mx-12  p-6">
                    <p className="text-xl font-bold text-primary-color mb-4">
                        Blog
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Elevate Your Style</h2>
                    <p className="text-gray-700 mb-6">
                        Discover fashion that combines elegance, comfort, and functionality. Bring your dream style to life.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Problems trying to resolve the conflict between the two major realms of Fashion:
                    </p>
                    
                    <ButtonMd>
                        EXPLORE OUR BLOG
                    </ButtonMd>
                </div>
                
            </div>
        </section>

    )
}

export default ClickToAction;

