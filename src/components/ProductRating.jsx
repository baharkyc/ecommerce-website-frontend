// components/Rating.jsx
import { Star, StarHalf, StarOff } from "lucide-react";

const ProductRating = ({ rating = 0, reviews, max = 5, size = 20, showReviews = true }) => {

  const safeRating = typeof rating === 'number' && !isNaN(rating) && rating >= 0 ? rating : 0;

  const fullStars = Math.floor(safeRating);
  const hasHalfStar = safeRating % 1 >= 0.5;
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

  const iconSize = `${size}px`;

  return (
    <div
      className="flex items-center gap-1"
      aria-label={`Rated ${safeRating} out of ${max}`}
    >
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          className="text-yellow-500 fill-yellow-500"
          style={{ width: iconSize, height: iconSize }}
        />
      ))}
      {hasHalfStar && (
        <StarHalf
          className="text-yellow-500 fill-yellow-500"
          style={{ width: iconSize, height: iconSize }}
        />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star
          key={`empty-${i}`}
          className="text-gray-300 "
          style={{ width: iconSize, height: iconSize }}
        />
      ))}
      {showReviews && (
        <span className="ml-2 text-sm font-semibold text-gray-600">
          {Array.isArray(reviews) ? reviews.length : 0} reviews
        </span>
      )}
    </div>
  );
};

export default ProductRating;
