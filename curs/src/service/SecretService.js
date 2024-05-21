import { Buffer } from 'buffer'
import axios from "axios";
let token = localStorage.getItem("jwt-token")

const REST_API_BASE_URL = 'https://prac-marketplace.onrender.com/secret'

export const getMessage = async () => {
	return await axios.get(REST_API_BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export const createMessage = (secretMessage) => {
	
	return axios({
        method: 'POST',
        url: 'https://prac-marketplace.onrender.com/secret',
        headers: {
          Authorization: `Bearer ${token}`,
		  "Content-Type": "application/json"
        },
        data:{
			message: secretMessage,
		}
      })
}
