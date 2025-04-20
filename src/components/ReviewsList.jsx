const ReviewsList = ({ reviews }) => {
    return (
        <div className="space-y-4">
            <h2 className="text-xl text-text-color font-bold mb-4 pt-4">reviews</h2>
            {reviews.map((review, index) => (
                <div key={index} className="border-b pb-4 space-y-2">
                    <h3 className="text-md font-semibold">{review.name}</h3>
                    <p className="text-sm text-second-text-color">{review.comment}</p>
                </div>
            ))}
        </div>
    );
};

export default ReviewsList;
