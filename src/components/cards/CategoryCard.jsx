import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CategoryCard = ({ name, imageUrl, gender, to }) => {

  
    return (
      <Link
        to={to}
        className="relative overflow-hidden group h-40"
      >
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover contrast-50"
        />
        <div className="absolute text-center inset-0 bg-red bg-opacity-30 flex flex-col justify-center">
        <span className="text-white text-md sm:text-md font-normal tracking-wide">
            {gender}
          </span>
          <span className="text-white text-lg sm:text-xl font-semibold tracking-wide">
            {name}
          </span>
        </div>
      </Link>
    );
  };
  
  export default CategoryCard;
  