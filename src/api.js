import axios from "axios";
import { API_BASE_URL } from "./settings";


export const apiCall = async (
  endpoint = "",
  method = "GET",
  data = null,
  headers = {}
) => {
  const url = `${API_BASE_URL}${endpoint}`;
  if (localStorage.getItem('loginData')) {
    const accessToken = JSON.parse(localStorage.getItem('loginData')).access
    headers = {
      'Authorization': `Bearer ${accessToken}`,
    }
  }

  try {
    const response = await axios({
      url,
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      data,
    });
    return response;
  } catch (error) {
    return error;
  }
};

// example use of apiCall
// apiCall('your/api/endpoint/', 'METHOD', your_data_array, request_header_array)
