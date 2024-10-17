import axios from "axios";

// Create an Axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

// add interceptors for request/response handling
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify request configuration (e.g., add headers) if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data; // Return the data from the response
  },
  (error) => {
    return Promise.reject(error);
  }
);

//API to fetch all tasks
export const getTasks = () => {
  return axiosInstance.get("/tasks");
};

//API to delete a particular task
export const deleteTask = (data) => {
  return axiosInstance.delete(`/task?id=${data}`);
};

//API to create a task
export const saveTask = (data) => {
  return axiosInstance.post("/task", { description: data });
};

export default axiosInstance;
