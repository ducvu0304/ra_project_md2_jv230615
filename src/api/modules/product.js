import axios from "axios";

export default {
  findAllProduct: () => axios.get(import.meta.env.VITE_API_URL + "/products"),
  findProductByGender: (gender) =>
    axios.get(import.meta.env.VITE_API_URL + `/products?gender=${gender}`),
  findProductById: (id) =>
    axios.get(import.meta.env.VITE_API_URL + `/products?id=${id}`),
};
