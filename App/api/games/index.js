import axios from "../../Services/axiosConfig";

export const fetchGames = async ({ gameId }) => {
  return await axios.get(`/games/${gameId}`);
};

export default {
  fetchGames,
};
