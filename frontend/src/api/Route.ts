import axios from "axios";

const userApi = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: true, // Correct spelling here
});

export const addServiceApi = async (data: FormData) => {
  try {
    console.log(data);

    // Axios automatically sets the Content-Type to multipart/form-data for FormData
    const config = {
      headers: {
        "Content-Type": "multipart/form-data", // Correct spelling here
      },
      withCredentials: true, // Correct spelling here
    };

    return await userApi.post("/addservices", data, config);
  } catch (err) {
    console.error("Error occurred during API call:", err);
    throw err; // Rethrow the error to be handled by the caller
  }
};
