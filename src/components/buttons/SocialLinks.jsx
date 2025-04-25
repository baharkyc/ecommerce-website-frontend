
import { Instagram, Youtube, Facebook, Twitter } from "lucide-react";


const SocialLinks = ({color}) => {

    return (
        <div className="p-3 ">
            <button>
                <Instagram  color={color} className="h-5 w-5 mx-1"/>
            </button>
            <button>
                <Youtube 
                color={color}
                className="h-5 w-5 mx-1"/>
            </button>
            <button>
                <Facebook 
                color={color}
                className="h-5 w-5 mx-1"/>
            </button>
            <button>
                <Twitter 
                color={color}
                className="h-5 w-5 mx-1"/>
            </button>
        </div>


    )
}

export default SocialLinks;