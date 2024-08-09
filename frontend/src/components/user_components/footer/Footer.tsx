import SocialMedia from "../common/SocialMedia";

const Footer = () => {
  return (
    <div className="px-4 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#EBEADF]">
      <div>
        <h1 className="text-xl font-bold">Subscribe to our newsletter</h1>
        <form action="">
          <div className="flex flex-col py-4">
            <label htmlFor="">Your email</label>
            <input
              className="border px-3 py-3 w-[70%] border-gray-300 rounded-md mt-2"
              type="text"
              placeholder="Your email address"
            />
          </div>
        </form>
        <button className="px-4 py-2 bg-[#2E994D] text-white rounded-md">
          submit
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h1 className="text-xl font-bold">Contacts</h1>
          <p className="my-6">
            info@alnaqshqatar.com <br />: +974 41439515
          </p>
          <p>
            Office No B 262, 2nd floor, Entrance 6, Building 43, Souq Al Nayef,
            Street 100, Zone 56 Ain Khaled Qatar{" "}
          </p>
        </div>
        <div className="md:mt-0 mt-4">
          <h1 className="text-xl font-bold">Socials</h1>
          <SocialMedia className="mt-6"/>
        </div>
      </div>
    </div>
  );
};
export default Footer;
