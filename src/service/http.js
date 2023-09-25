import axios from "axios"

export const doGet = async (apiUrl) => {
  const response = await axios.get(apiUrl)
  return response.data;
}