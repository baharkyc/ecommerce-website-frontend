import { ChevronUp } from "lucide-react"

const GoUpButton = () => {

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-16 right-16 p-3   text-primary-color  hover:text-second-text-color transition duration-300"
            title="Go up"
            >
            <ChevronUp size={"36px"} />
        </button>
    )
}

export default GoUpButton;