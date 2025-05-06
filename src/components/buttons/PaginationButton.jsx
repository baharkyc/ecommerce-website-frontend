const PaginationButton = ({ totalPages, handleClick, pageNumber }) => {
    const getPages = () => {
        const pages = [];

        if (totalPages <= 7) {
            // Show all numbers if total pages less than 7
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            // Always show 1st page
            pages.push(1);

            if (pageNumber > 4) pages.push("...");

            // Mid pages
            const start = Math.max(2, pageNumber - 1);
            const end = Math.min(totalPages - 1, pageNumber + 1);

            for (let i = start; i <= end; i++) pages.push(i);

            if (pageNumber < totalPages - 3) pages.push("...");

            // Always show last page
            pages.push(totalPages);
        }

        return pages;
    };

    const pagesToShow = getPages();

    return (
        <div className="flex justify-center mt-8">
            {pagesToShow.map((page, idx) =>
                page === "..." ? (
                    <span key={`dots-${idx}`} className="px-2 py-2 text-gray-500">...</span>
                ) : (
                    <button
                        key={`page-${idx}`}
                        onClick={() => handleClick(page)}
                        className={`px-4 py-2  font-semibold ${
                            page === pageNumber
                                ? "underline underline-offset-2  text-primary-color"
                                : "bg-white text-second-text-color"
                        }`}
                    >
                        {page}
                    </button>
                )
            )}
        </div>
    );
};

export default PaginationButton;
