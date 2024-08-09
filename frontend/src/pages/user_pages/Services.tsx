import ServiceCard from "../../components/user_components/common/service_card/ServiceCard";



const Services = () => {
  const servicesData = [
    {
      imgSrc: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=503&h=264",
      title: "Swimming Pool and Wellness Solutions",
      description: "Our experienced architects provide personalized design solutions that turn your dreams into reality."
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=503&h=264",
      title: "Swimming Pools",
      description: "From consulting and strategy development to implementation and support, our comprehensive services can help your business thrive."
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=503&h=264",
      title: "Swimming Pools",
      description: "From consulting and strategy development to implementation and support, our comprehensive services can help your business thrive."
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=503&h=264",
      title: "Swimming Pools",
      description: "From consulting and strategy development to implementation and support, our comprehensive services can help your business thrive."
    },
  ];

  return (
    <div className="px-4 sm:px-8">
      <div className="py-7">
        <h1 className="text-4xl font-bold">Swimming Pools</h1>
        <p className="mt-6">
          From consulting and strategy development to implementation and <br/> support, our comprehensive services can help your business thrive.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 my-10">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            imgSrc={service.imgSrc}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
