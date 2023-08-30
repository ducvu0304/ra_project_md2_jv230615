import axios from "axios";

export default {
  findAllUser: () => axios.get(import.meta.env.VITE_API_URL + "/users"),
  getUserByEmail: (email) =>
    axios.get(import.meta.env.VITE_API_URL + `/users?email=${email}`),
  createUser: (userInfo) =>
    axios.post(import.meta.env.VITE_API_URL + "/users", userInfo),
};
