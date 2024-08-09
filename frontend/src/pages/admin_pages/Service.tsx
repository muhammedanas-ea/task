import  {AddServices}  from "../../components/admin_components/add_services/AddServices";

const Service = () => {
  return (
    <div>
        <div className="flex justify-end mb-5">
          <AddServices />
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="h-40">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=503&h=264"
              alt=""
            />
          </div>
          <h3 className="text-lg font-semibold my-2">Card 1</h3>
          <p>Some content for the first card.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Card 2</h3>
          <p>Some content for the second card.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Card 3</h3>
          <p>Some content for the third card.</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
