import axios from "axios"; //! this is for https request

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bd9077d22e3a4e2bad63941a8c10695d",
  },
});
