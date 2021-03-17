import axios from "../../Services/axiosConfig";

export const fetchProducts = async (gameType) => {
  return await axios.get(`/products/${gameType}`);
};

export default {
  fetchProducts,
};
