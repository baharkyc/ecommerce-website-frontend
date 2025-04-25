import ButtonMd from "../buttons/ButtonMd";

const AboutBanner = () => {
    return (
        <div className="flex flex-col md:flex-row px-16 xl:px-48 lg:px-28 md:px-16 md:gap-32 md:h-[500px]">
            <div className="md:w-1/3 flex flex-col items-center md:items-start gap-8 py-16">
                <h4 className="font-bold text-sm tracking-wider ">ABOUT COMPANY</h4>
                <h2 className="font-bold text-4xl tracking-wider">ABOUT US</h2>
                <p className="font-semibold text-sm tracking-wide text-second-text-color">Come and explore the latest trends in fashion and sustainibility. Be slow, be respectful and in style at the same time.</p>
                <ButtonMd isFilled={true}> Learn More </ButtonMd>
            </div>
                
            <div className="md:w-2/3 h-[500px] md:h-full">
                <img
                    className="w-full h-full object-cover"
                    src="https://images.pexels.com/photos/6214383/pexels-photo-6214383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    />
            </div>
        </div>
    )
}

export default AboutBanner;