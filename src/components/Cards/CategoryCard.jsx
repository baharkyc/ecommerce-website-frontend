const CategoryCard = ({ name, imageUrl, href, count }) => {
    return (
      <a
        href={href}
        className="relative overflow-hidden group h-40"
      >
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover "
        />
        <div className="absolute text-center inset-0 bg-red bg-opacity-30 flex flex-col justify-center">
          <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">
            {name}
          </span>
          <span className="text-white text-l sm:text-l md:text-xl  tracking-wide">
            {count}
          </span>
        </div>
      </a>
    );
  };
  
  export default CategoryCard;
  