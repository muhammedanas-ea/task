import ServiceCard from "../../components/user_components/common/service_card/ServiceCard";

const Services = () => {
  const servicesData = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=503&h=264",
      title: "Swimming Pool and Wellness Solutions",
      description:
        "Our experienced architects provide personalized design solutions that turn your dreams into reality.",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1696154994502-93dd97495a4f?auto=format&fit=crop&w=503&h=264",
      title: "Infrastructure Piping Excellence",
      description:
        "We craft unique and innovative designs, working closely with our clients to bring their visions to life.",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1659468551117-8255d708e197?auto=format&fit=crop&w=503&h=264",
      title: "Sports Flooring Mastery",
      description:
        "Our architecture services prioritize function and form to create spaces that stand the test of time",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1542446608-e9525230faed?auto=format&fit=crop&w=503&h=264",
      title: "Pedel Tennis",
      description:
        "From concept to completion, our architecture services use the latest technology and techniques to deliver exceptional results",
    },
  ];

  return (
    <div className="">
      <div className="bg-gradient-to-r from-green-400 to-purple-500 py-12">
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-semibold">our services</h1>
            <p className="mt-4 text-1xl text-center text-white">
              From consulting and strategy development to implementation and
              support, <br /> our comprehensive services can help your business
              thrive.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
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
