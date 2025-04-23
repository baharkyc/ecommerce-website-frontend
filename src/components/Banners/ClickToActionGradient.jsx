import {ButtonSmWhite} from "../buttons/ButtonSm";

const ClickToActionGradient = () => {
    return (
        <div className="bg-primary-color">
            <div className="flex flex-col md:flex-row md:h-[600px] my-16 text-white ">
                <div className="md:w-2/3 h-full flex flex-col items-center justify-center md:items-start gap-8 py-16 xl:px-56 lg:px-32 px-24 text-center ">
                    <h4 className="font-bold text-sm tracking-wider ">WORK WITH US</h4>
                    <h2 className="font-bold text-4xl tracking-wider sm:text-start">Now let's grow yours!</h2>
                    <p className="font-semibold text-sm tracking-wide sm:text-start">Come and explore the latest trends in fashion and sustainibility. Be slow, be respectful and in style at the same time.</p>
                    <ButtonSmWhite > Learn More </ButtonSmWhite>
                </div>
                    
                <div className="md:w-1/3 h-[500px] md:h-full ">
                    <img
                        className="w-full h-full object-cover"
                        src="https://images.pexels.com/photos/6214383/pexels-photo-6214383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        />
                </div>
            </div>
        </div>
    )
}

export default ClickToActionGradient;