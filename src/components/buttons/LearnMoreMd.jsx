import { ChevronRight } from "lucide-react";

const LearnMoreMd = ({onClick, isDisabled}) => {

    return(
        <button
            onClick={onClick}
            disabled={isDisabled}
            className={`text-s flex flex-row  py-2  text-primary-color hover:scale-105 hover:shadow-xs transition-all duration-300 ${isDisabled ? 'hidden' : ''}`}
            >
            Learn More
            <ChevronRight />
        </button>
    )
}

export default LearnMoreMd;

