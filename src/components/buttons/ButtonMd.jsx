
const ButtonMd = ({children, onClick, isDisabled, isHidden, isFilled = false, isLoading}) => {

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
            {isLoading ? (
            <div className="flex items-center justify-center w-full h-full">
            <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin">

            </div>
          </div>
        ) : (
            children
        )}
        </button>
    )
}

export default ButtonMd;

