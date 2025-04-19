
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mainImage = images[currentIndex];

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-full md:max-w-[500px]">
      {/* Main image with arrows */}
      <div className="relative flex justify-center items-center w-full h-[350px] overflow-hidden mb-8 ">
        {mainImage && (
          <img
            src={mainImage.imageUrl}
            alt="Main product"
            className="w-full h-full object-cover object-center"
          />
        )}

        {/* Left arrow */}
        <button
          onClick={goPrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-700 hover:text-light-gray-2"
        >
          <ChevronLeft size={30} />
        </button>

        {/* Right arrow */}
        <button
          onClick={goNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-700 hover:text-light-gray-2"
        >
          <ChevronRight size={30} />
        </button>
      </div>

      {/* Thumbnail gallery */}
      <div className="flex space-x-4 overflow-x-auto mb-6 scrollbar-hide">
        {images.map((img, index) => (
          <button
            key={img.id}
            onClick={() => setCurrentIndex(index)}
            className={`w-[100px] h-[75px] flex-shrink-0 overflow-hidden hover:opacity-10 ${
              currentIndex === index ? "opacity-30" : ""
            }`}
          >
            <img
              src={img.imageUrl}
              alt={`Thumbnail ${img.id}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
