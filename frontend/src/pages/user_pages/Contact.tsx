const Contact = () => {
  return (
    <div className="">
      <div className="bg-[#b8c0cc] py-7">
        <div className="py-7 text-center">
          <h1 className="text-5xl text-white font-bold">Get in Touch</h1>
        </div>
        <div className="flex justify-center gap-8">
          <div className="px-8">
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border border-gray-300 rounded-md   
 p-2 w-full"
              />
              <textarea
                name="message"
                placeholder="Message"
                className="border border-gray-300 rounded-md p-2 w-full h-32"
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#2E994D] text-white rounded-md  px-10 py-4"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-8 px-8">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15657.802823224323!2d75.88825034999999!3d11.1542272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6839a6863059baaf%3A0x6569ab277eb4473b!2sKVN%20Farm%20Rich%20-%20Factory!5e0!3m2!1sen!2sin!4v1723107204015!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </div>
        <div className="h-[30rem]">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1600965962102-9d260a71890d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwzfHxzd2ltbWluZ3xlbnwwfHx8fDE2OTY3NjA1MzV8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=606&h=464"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
