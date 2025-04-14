const FeatureCard = ({name, description, children}) => {


    return (
        <div className="flex flex-col place-items-center w-full h-full p-4">
            {children}
            <div className="mt-4">
                <h2 className="text-center text-lg font-semibold text-text-color mb-2">{name}</h2>
                <p className="text-center text-sm text-second-text-color mb-4">{description}</p>
            </div>
            
    </div>  
    )
}

export default FeatureCard;