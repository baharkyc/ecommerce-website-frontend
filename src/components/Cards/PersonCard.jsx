import { Facebook, Instagram, Linkedin } from "lucide-react";


export const PersonCard = ({ person }) => {
  return (
    <div className="max-w-[400px]  w-full h-full p-2 flex flex-col items-center justify-between">
      {/* Image */}
      <div className="h-full w-full mb-8 max-h-[300px]">
        <img
          className="object-cover object-center w-full h-full mb-8 filter grayscale "
          src={person.imageUrl}
          alt={person.name}
        />
      </div>
      

      {/* Person Name */}
      <h2 className="text-center text-lg font-semibold text-text-color leading-tight pb-2">
        {person.name}
      </h2>

      {/* Profession */}
      <p className="text-center text-sm font-medium text-gray-500 mb-3">{person.profession}</p>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mb-4 ">
        <a href={person.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
          <Instagram  className="h-5 w-5"/>
        </a>
        <a href={person.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
          <Facebook  className="h-5 w-5"/>
        </a>
        <a href={person.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
          <Linkedin  className="h-5 w-5"/>
        </a>
      </div>
    </div>
  );
};

export default PersonCard;
