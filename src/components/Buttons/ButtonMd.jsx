
const ButtonMd = ({children, onClick, isDisabled, isHidden, isFilled = false}) => {

    return(
        <button

            onClick={onClick}
            disabled={isDisabled}
            className={`text-s col-span-3 py-2 px-4 border-1   rounded-md  hover:shadow-xs transition-all duration-300 
                ${isHidden ? 'hidden' : ''} 
                ${isDisabled ? 'bg-white text-gray-300 cursor-not-allowed' : 'hover:scale-105 text-primary-color border-primary-color'} 
            transition-all duration-300
                ${isFilled ? 'bg-primary-color text-white' : ''} 
                 `}
            >
            {children}
        </button>
    )
}

export default ButtonMd;

