import ButtonMd from "../buttons/ButtonMd";

const ContactBanner = ()=> {

    

    return(
        <div className="relative md:h-[700px] flex text-white">
            <img
                className="absolute z-1 h-full w-full object-cover "
                src="https://images.pexels.com/photos/1487835/pexels-photo-1487835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
            <div className="w-full py-24 z-10 flex flex-col md:flex-row gap-y-16 items-center justify-around">
                <div className="flex flex-col gap-y-8 items-center ">
                    <h1 className="text-3xl font-bold">CONTACT US</h1>
                    <p className="text-sm font-medium">Reach us anywhere anytime.</p>
                    <ButtonMd isFilled="true">
                        CONTACT US
                    </ButtonMd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-32 text-sm md:text-base">
                    <div>
                        <h2 className="text-xl font-bold uppercase">New York</h2>
                        <p>123 Broadway Ave</p>
                        <p>Suite 500</p>
                        <p>10001 New York, NY</p>
                        <p>+1 (212) 555-1234</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold uppercase">London</h2>
                        <p>221B Baker Street</p>
                        <p>Flat 2</p>
                        <p>NW1 6XE London, UK</p>
                        <p>+44 20 7946 0958</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold uppercase">Istanbul</h2>
                        <p>İstiklal Caddesi No:45</p>
                        <p>Beyoğlu</p>
                        <p>34430 İstanbul, Türkiye</p>
                        <p>+90 212 555 1234</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold uppercase">Tokyo</h2>
                        <p>1-1 Chiyoda</p>
                        <p>Chiyoda-ku</p>
                        <p>100-0001 Tokyo, Japan</p>
                        <p>+81 3-1234-5678</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ContactBanner;