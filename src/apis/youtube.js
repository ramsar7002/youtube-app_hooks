import axios from "axios";

const KEY = "AIzaSyADrPcH_iISGHWGStmo1hMNqO-zRqw0kK0";
const baseURL = "https://www.googleapis.com/youtube/v3";

export default axios.create({
  baseURL,
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
