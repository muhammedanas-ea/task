const Home = () => {
  return (
    <>
      <div className="h-[90vh]">
        <div className="text-center py-7">
          <h1 className="text-2xl font-bold text-[#eb4949]">
            النقش للمسابح والمقاولات ذ.م.م.
          </h1>
          <h1 className="text-3xl font-bold mt-2">
            AlNaqsh Pools and Contracting W.L.L.
          </h1>
        </div>
        <div className="h-[62vh]">
          <img
            className="w-full h-full object-cover"
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/m7V8PnDoX2ur9GvK/img-20240109-wa0052-YyvovwPvDkIZBrMj.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=661,fit=crop/m7V8PnDoX2ur9GvK/generated/generated-YBgpxBEbl3U5vDoD.png"
          alt=""
        />
        <div>
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-6">
            Creating exceptional experiences through innovative solutions for
            swimming pools, infrastructure piping, sports flooring, landscaping,
            civil fit-out, and car park enhancements. A sauna, steam room,
            jacuzzi, plunge pool, ice bath, and ice fountain are available.
          </p>
        </div>
      </div>
      <div className="px-4 sm:px-10 py-20 bg-[#0d1b2b] mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="text-white mt-6" key={index}>
              <img
                className="w-full h-64 object-cover"
                src="https://images.unsplash.com/photo-1470376619031-a6791e534bf0?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw1fHxzd2ltbWluZ3xlbnwwfHx8fDE2OTY3NjA1MzV8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
              />
              <h1 className="mt-3">Swimming Pool and Wellness Solutions</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 sm:px-8 my-12 flex flex-col-reverse md:flex-row md:items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold">Swimming Pools</h1>
          <p className="mt-6">
            Explore our portfolio of stunning swimming pool projects, showcasing
            our expertise in creating luxurious and functional aquatic spaces.
          </p>
        </div>
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=661,fit=crop/m7V8PnDoX2ur9GvK/generated/generated-YBgpxBEbl3U5vDoD.png"
          alt=""
          className="md:w-1/2"
        />
      </div>
      <div className="px-4 sm:px-8 my-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=661,fit=crop/m7V8PnDoX2ur9GvK/generated/generated-YBgpxBEbl3U5vDoD.png"
          alt=""
        />
        <div>
          <h1 className="text-4xl font-bold">
            Transforming Outdoor Spaces Through Exceptional Landscaping
          </h1>
          <p className="mt-6">
            Welcome to our world of landscaping, where we merge the beauty of
            nature with innovative design to craft outdoor spaces that are as
            stunning as they are functional. At AlNaqsh, we're passionate about
            bringing your outdoor vision to life. Discover our exceptional
            landscaping projects and let us show you the artistry and
            craftsmanship that can transform your outdoor environment.
          </p>
        </div>
      </div>
      <div className="px-4 sm:px-8 my-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <form className="py-10" action="">
            <div className="flex flex-col py-4">
              <label htmlFor="">Name</label>
              <input
                className="border border-gray-300 px-3 py-3 rounded-md mt-2"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col py-4">
              <label htmlFor="">Your email</label>
              <input
                className="border px-3 py-3 border-gray-300 rounded-md mt-2"
                type="text"
                placeholder="Your email address"
              />
            </div>
            <div className="flex flex-col py-4">
              <label htmlFor="">Message</label>
              <textarea
                className="border px-3 py-3 rounded-md mt-2"
                placeholder="Enter your message"
              />
            </div>
            <button className="px-4 py-2 bg-[#2E994D] text-white rounded-md">
              submit
            </button>
          </form>
        </div>
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=861,h=661,fit=crop/m7V8PnDoX2ur9GvK/generated/generated-YBgpxBEbl3U5vDoD.png"
          alt=""
        />
      </div>
    </>
  );
};
export default Home;
