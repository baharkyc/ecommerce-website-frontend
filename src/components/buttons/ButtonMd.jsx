
const ButtonMd = ({children, onClick, isDisabled, isHidden, isFilled = false, isLoading}) => {

    return(
        <button
            onClick={onClick}
            disabled={isDisabled}
            className={`text-s col-span-3 py-2 px-4 border-1 w-full rounded-md  hover:shadow-xs transition-all duration-300 
                ${isHidden ? 'hidden' : ''}
                ${
                isFilled && isDisabled
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : isDisabled
                    ? 'bg-white text-gray-300 cursor-not-allowed'
                    : isFilled
                    ? 'bg-primary-color text-white hover:scale-105'
                    : 'text-primary-color border-primary-color hover:scale-105'
                }
                 `}
            >
            {isLoading ? (
            <div className="flex items-center justify-center w-full h-full">
                <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"/>
            </div>
        ) : (
            children
        )}
        </button>
    )
}

export default ButtonMd;

