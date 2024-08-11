import { useEffect, useState } from "react";
import { fetchServiceApi } from "@/api/Route";
import { AddServices } from "../../components/admin_components/add_services/AddServices";
import { ServiceProps } from "./type"; // Import the ServiceProps interface

const Service = () => {
  const [services, setServices] = useState<ServiceProps[]>([]);

  const fetchServices = async () => {
    try {
      const response = await fetchServiceApi();
      if (response?.data?.success) {
        setServices(response.data.data);
      }
    } catch (err) {
      console.error("Error fetching services:", err);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div>
      <div className="flex justify-end mb-5">
        <AddServices onServiceAdded={fetchServices} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="h-40">
              <img
                className="w-full h-full object-cover"
                src={service.image_url}
                alt={service.service_name}
              />
            </div>
            <h3 className="text-lg font-semibold my-2">
              {service.service_name}
            </h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
