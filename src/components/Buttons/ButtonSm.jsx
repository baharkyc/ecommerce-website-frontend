export const ButtonSm = ({children, onClick, disabled}) => {

    return(
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center justify-center p-2 border-1 h-[46px] w-[46px] border-light-gray-2 rounded-md hover:shadow-xs transition-all duration-300 ${disabled
                ? 'text-text-color fill-text-color border-text-color '
                : 'text-gray-400 fill-gray-400 border-gray-400 hover:text-text-color hover:border-text-color hover:fill-text-color'}`}
            >
            {children}
        </button>
    )
}

export const ButtonSmWhite = ({children, onClick, disabled}) => {

    return(
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center justify-center p-2 border-1 h-[46px] w-[150px] border-white rounded-md hover:shadow-xs transition-all duration-300 hover:border-text-color hover:fill-text-color'}`}
            >
            {children}
        </button>
    )
}

