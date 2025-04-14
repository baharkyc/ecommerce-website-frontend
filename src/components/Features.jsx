import { Ear, Earth, Leaf, Turtle } from "lucide-react";
import FeatureCard from "./Cards/FeatureCard";

const Features = () => {

    return (
        
        <div className="flex flex-col h-full  w-full md:min-h-[500px] ">
            <div className="border-1 mx-16 my-4 md:mx-32 lg:mx-64 border-gray-100"></div>
            <div className="flex flex-1 flex-col w-full h-full justify-center place-items-center gap-4 ">
                <p className="text-lg">All the best</p>
                <p className="font-bold text-lg text-primary-color">THE BEST SERVICE</p>
                <p className="text-s">We value earth, we respect it. Slow fashion at best.</p>
            </div>
            
            <div className="flex md:flex-row flex-col flex-1 w-full h-full justify-around place-items-center sm:px-24 my-16">
                <FeatureCard name={"Organic"} description={"We value your skin."}>
                    <Leaf strokeWidth={1} className="h-20 w-20 text-primary-color" />
                </FeatureCard>
                <FeatureCard name={"Slow Fashion"} description={"Respect nature, protect it."}>
                    <Turtle strokeWidth={1} className="h-20 w-20 text-primary-color" />
                </FeatureCard>
                <FeatureCard name={"Sustainable"} description={"We value our earth."}>
                    <Earth strokeWidth={1} className="h-20 w-20 text-primary-color" />
                </FeatureCard>
            </div>
        </div>
    )
}

export default Features;