const Project = () => {
  return (
    <div className="px-4 sm:px-8">
      <div className="py-7 text-center">
        <h1 className="text-4xl font-bold">Our projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 h-[25rem] gap-10">
        <img
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=384,fit=crop/m7V8PnDoX2ur9GvK/img_1092-mv0laQ0V0BfavbLP.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold">Walters Coffee</h1>
          <p className="mt-6">"Awaken Your Senses, Sip by Sip."</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-10 h-[25rem]">
        <div className="flex md:flex-col flex-col-reverse justify-center">
          <h1 className="text-2xl font-bold">Walters Coffee</h1>
          <p className="mt-6">"Awaken Your Senses, Sip by Sip."</p>
        </div>
      </div>
    </div>
  );
};
export default Project;
