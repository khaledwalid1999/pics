import axios from "axios";

const searchImages = async (query) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID ibtflmxwBlVg9KdRlGxea5Vuosr3Z6DvUJ-bpCCB1-8",
    },
    params: { query: query },
  });
  console.log(response);
  return response;
};
export default searchImages;
