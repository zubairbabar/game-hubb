import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1c4ac59fd4f34f789401e08413d292a7",
  },
});
