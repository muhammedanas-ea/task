import { serviceCardProps } from "./type";

const ServiceCard = ({ imgSrc, title, description }:serviceCardProps) => (
  <div className="md:pr-16 py-7">
    <img src={imgSrc} alt={title} className="w-full object-cover" />
    <h2 className="text-3xl font-bold mt-4">{title}</h2>
    <p className="mt-4">{description}</p>
  </div>
);

export default ServiceCard;
