import axios from "axios";

const userApi = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: true,
});

export const addServiceApi = async (data: FormData) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    };

    return await userApi.post("/addservices", data, config);
  } catch (err) {
    console.error("Error occurred during API call:", err);
  }
};

export const fetchServiceApi = async () => {
  try {
    return await userApi.get("/services");
  } catch (err) {
    console.error("Error occurred during API call:", err);
  }
};
