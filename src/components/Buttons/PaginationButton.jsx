
const PaginationButton = ({totalPages, handleClick, pageNumber}) => {

    

    return (
        <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                    key={page}
                    onClick={() => handleClick(page)}
                    className={`px-4 py-2 border rounded-md font-semibold ${
                        page === pageNumber
                            ? "bg-primary-color text-white"
                            : " bg-white text-primary-color"
                    }`}
                >
                    {page}
                </button>
            ))}
        </div>
    )
}
export default PaginationButton;
