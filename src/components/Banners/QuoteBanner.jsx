const QuoteBanner = ({header, description, quote}) => {

    return (
        <div className="flex flex-col sm:flex-row sm:items-start items-center text-center py-24 gap-8 px-16 xl:px-48 lg:px-28 md:px-16">
            <div className="w-2/5 space-y-4 sm:text-left">
                <h4 className="text-sm font-medium text-red-500">{quote}</h4>
                <h1 className="text-2xl font-bold text-text-color">{header}</h1>
            </div>
            <p className="w-3/5 text-sm pt-4 text-second-text-color sm:text-left">{description}</p>
        </div>
    )
}

export default QuoteBanner;