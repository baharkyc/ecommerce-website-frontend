import ButtonMd from "../buttons/ButtonMd";
import SocialLinks from "../buttons/SocialLinks";

const ClickToAction = ({ header, description, buttonText, children }) => {
    return (
        <section className="flex flex-col w-full text-center items-center lg:px-16 pt-12 px-4 bg-gray-50">
            {/* Text content */}
            <div className="w-full max-w-xl space-y-8 flex flex-col items-center">
                <h2 className="text-3xl font-bold">
                    {header}
                </h2>
                <p className="text-gray-700">
                    {description}
                </p>

                <div className="w-56">
                    <ButtonMd isFilled={true}>
                        {buttonText}
                    </ButtonMd>
                </div>

                <SocialLinks color={"#23A6F0"} />
            </div>
        </section>
    );
};

export default ClickToAction;
