
const ButtonMd = ({children, onClick, isDisabled, isFilled = false}) => {

    return(
        <button

            onClick={onClick}
            disabled={isDisabled}
            className={`text-s col-span-3 py-2 px-4 border-1 border-primary-color text-primary-color rounded-md hover:scale-105 hover:shadow-xs transition-all duration-300 ${isDisabled ? 'hidden' : ''} ${isFilled ? 'bg-primary-color text-white' : ''}`}
            >
            {children}
        </button>
    )
}

export default ButtonMd;

