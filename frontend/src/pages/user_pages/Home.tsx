const Home = () => {
  const servicesData = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=503&h=264",
      title: "Swimming Pool and Wellness Solutions",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=400&h=400",
      title: "Infrastructure Piping Excellence",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1609941699682-8188acb757df?auto=format&fit=crop&w=400&h=400",
      title: "Sports Flooring Mastery",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=503&h=264",
      title: "Swimming Pool and Wellness Solutions",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=400&h=400",
      title: "Infrastructure Piping Excellence",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1609941699682-8188acb757df?auto=format&fit=crop&w=400&h=400",
      title: "Sports Flooring Mastery",
    },
  ];
  return (
    <>
      <section className="relative pt-24 bg-cover bg-center bg-no-repeat h-screen bg-image">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative px-12 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center flex flex-col justify-center items-center">
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-white md:text-6xl md:tracking-tight">
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                Alnaqsh Pools and Contracting W.L.L.
              </span>
            </h1>
            <p className="px-0 mb-8 text-lg text-gray-100 md:text-xl lg:px-24">
              From consulting and strategy development to implementation and
              support, our comprehensive services can help your business thrive.
            </p>
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
              <a
                href="#_"
                className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-black rounded-2xl sm:w-auto sm:mb-0"
              >
                Get Started
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto mt-16  text-black ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-5xl font-extrabold tracking-wide leading-tight">
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                About us
              </span>{" "}
            </h1>
            <p className="mt-6 text-lg leading-relaxed">
              We create exceptional experiences through innovative solutions for
              swimming pools, infrastructure piping, sports flooring,
              landscaping, civil fit-out, and car park enhancements. Enjoy our
              sauna, steam room, jacuzzi, plunge pool, ice bath, and ice
              fountain.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=661,fit=crop/m7V8PnDoX2ur9GvK/generated/generated-YBgpxBEbl3U5vDoD.png"
              alt="About Us"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-20 mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {servicesData.map((items, index) => (
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
              key={index}
            >
              <img
                className="w-full h-64 object-cover"
                src={items.imgSrc}
                alt="Swimming Pool"
              />
              <div className="p-3">
                <h1 className="text-xl font-semibold text-gray-800 mt-3">
                  {items.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto mt-16  text-black ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-5xl font-extrabold tracking-wide leading-tight">
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                Swimming Pools
              </span>{" "}
            </h1>
            <p className="mt-6 text-lg leading-relaxed">
              Explore our portfolio of stunning swimming pool projects,
              showcasing our expertise in creating luxurious and functional
              aquatic spaces.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
              src="https://images.unsplash.com/photo-1574744918163-6cef6f4a31b0?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw2fHxzd2ltbWluZ3xlbnwwfHx8fDE2OTY3NjA1MzV8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=703&h=495"
              alt="About Us"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-16  text-black ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="flex justify-center">
            <img
              className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
              src="https://images.unsplash.com/photo-1622015663319-e97e697503ee?auto=format&fit=crop&w=709&h=435"
              alt="About Us"
            />
          </div>
          <div>
            <h1 className="text-5xl font-extrabold tracking-wide leading-tight">
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                Transforming Outdoor Spaces Through Exceptional Landscaping
              </span>{" "}
            </h1>
            <p className="mt-6 text-lg leading-relaxed">
              Welcome to our world of landscaping, where we merge the beauty of
              nature with innovative design to craft outdoor spaces that are as
              stunning as they are functional. At AlNaqsh, we're passionate
              about bringing your outdoor vision to life. Discover our
              exceptional landscaping projects and let us show you the artistry
              and craftsmanship that can transform your outdoor environment.
            </p>
          </div>
        </div>
      </div>
      <div className="container  my-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900">
            {" "}
            <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
              Contact Us
            </span>{" "}
          </h1>
          <form className="py-10" action="">
            <div className="flex flex-col py-4">
              <label
                className="text-sm font-semibold text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="border border-gray-300 px-4 py-3 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-[#000]"
                type="text"
                placeholder="Your Name"
                id="name"
              />
            </div>
            <div className="flex flex-col py-4">
              <label
                className="text-sm font-semibold text-gray-700"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                className="border border-gray-300 px-4 py-3 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-[#000]"
                type="email"
                placeholder="Your email address"
                id="email"
              />
            </div>
            <div className="flex flex-col py-4">
              <label
                className="text-sm font-semibold text-gray-700"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="border border-gray-300 px-4 py-3 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-[#000] resize-none h-32"
                placeholder="Enter your message"
                id="message"
              ></textarea>
            </div>
            <button className="px-6 py-3 bg-[#000] text-white font-semibold rounded-lg hover:bg-[#26853e] transition-colors duration-200 ease-in-out">
              Submit
            </button>
          </form>
        </div>
        <div>
          <img
            className="w-full h-auto rounded-lg shadow-lg"
            src="https://images.unsplash.com/photo-1593055497705-59a84c5928b2?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw3fHxzd2ltbWluZ3xlbnwwfHx8fDE2OTY3NjA1MzV8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=606&h=584"
            alt="Contact Us Image"
          />
        </div>
      </div>
    </>
  );
};
export default Home;
