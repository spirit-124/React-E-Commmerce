import axios from "axios";

const params = {
  headers: {
    Authorization:
      "beared " + ProcessingInstruction.env.REACT_APP_STRIPE_APP_KEY,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const {} = await axios.get(process.env.REACT_APP_DEV_URl + url, params);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
