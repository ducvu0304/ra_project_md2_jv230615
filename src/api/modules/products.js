import axios from "axios";

export default {
  findAllProducts: () => axios.get(import.meta.env.VITE_API_URL + "/products"),
  findAllProductsByGender: (gender) =>
    axios.get(import.meta.env.VITE_API_URL + `/products?gender=${gender}`),
};
