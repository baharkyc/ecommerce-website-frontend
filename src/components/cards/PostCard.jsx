import LearnMoreMd from "../Buttons/LearnMoreMd";

const PostCard = ({department, name, description, imageUrl}) => {


    return (
        <div className="flex flex-col md:flex-row gap-6 w-full p-2 overflow-hidden">
      {/* Left: Image */}
      <div className="w-full md:w-[40%]">
        <img
          className="w-full h-full max-h-[400px] object-cover"
          src={imageUrl}
          alt={name}
        />
      </div>

      {/* Right: Content */}
      <div className="text-justify w-full md:w-[60%] flex flex-col justify-between track">
        <div>
          <p className="text-sm font-semibold text-primary-color mb-1">{department}</p>
          <p className="text-lg font-bold text-text-color mb-2">{name}</p>
          <p className="text-sm text-second-text-color mb-4">{description}</p>
        </div>
        <LearnMoreMd />
      </div>
    </div>
    )
}

export default PostCard;