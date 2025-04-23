import ButtonMd from "../buttons/ButtonMd";
import SocialLinks from "../buttons/SocialLinks";

const ClickToAction = ({header, description, buttonText, children}) => {

    return (
        
        <section className="flex flex-col w-full text-center items-cener lg:px-16 pt-12 text-wrap px-16 bg-gray-50">
            
            {/* Text content */}
            <div className=" w-full md:mx-0 space-y-12">
                
                <h2 className="text-3xl font-bold mb-4">
                    {header}
                </h2>
                <p className="text-gray-700 mb-6">
                    {description}
                </p>
                
                <ButtonMd isFilled={true}>
                    {buttonText}
                </ButtonMd>
                <SocialLinks color={"#23A6F0"}/>
            </div>
        </section>

    )
}

export default ClickToAction;

