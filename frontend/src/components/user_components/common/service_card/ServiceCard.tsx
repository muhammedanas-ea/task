import { serviceCardProps } from "./type";

const ServiceCard = ({ imgSrc, title, description }: serviceCardProps) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
    <div className="relative w-full h-48">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-full object-cover rounded-t-lg"
      />
    </div>
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

export default ServiceCard;
