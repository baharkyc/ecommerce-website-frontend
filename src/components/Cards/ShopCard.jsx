
const ShopCard = ({ imageUrl, title, description }) => {
  return (
    <div className="relative h-full overflow-hidden rounded-xl group hover:shadow-md transition-shadow">
      <img
        src={imageUrl}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0  flex flex-col justify-end">
        <div className="bg-primary-color/30 mr-0 sm:mr-24  mt-32 flex flex-col justify-end h-2/3">
          <div className="m-8">
            <h3 className="text-white text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-200 text-md">{description}</p>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default ShopCard;