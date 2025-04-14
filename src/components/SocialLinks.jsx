
import { Instagram, Youtube, Facebook, Twitter } from "lucide-react";


const SocialLinks = ({color}) => {

    return (
        <div className="p-2">
            <button>
                <Instagram  color={color} className="h-4 w-4 mx-1"/>
            </button>
            <button>
                <Youtube 
                color={color}
                className="h-4 w-4 mx-1"/>
            </button>
            <button>
                <Facebook 
                color={color}
                className="h-4 w-4 mx-1"/>
            </button>
            <button>
                <Twitter 
                color={color}
                className="h-4 w-4 mx-1"/>
            </button>
        </div>


    )
}

export default SocialLinks;