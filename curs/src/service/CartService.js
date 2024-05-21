import axios from "axios";
let token = localStorage.getItem("jwt-token")

const REST_API_BASE_URL = 'https://prac-marketplace.onrender.com/cart_jewelry'

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
  }
}

export const listJewelryCart =  async () => {
	
	return await axios.get(REST_API_BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export const statsJewelry = () => {
	
	return axios.get('https://prac-marketplace.onrender.com/cart_jewelry/stats', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export const addJewelry = (jewelryId) => {
	console.log(jewelryId + " add");
	
	
	return axios({
        method: 'POST',
        url: 'https://prac-marketplace.onrender.com/cart_jewelry/'+jewelryId+'/1',
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: ""
      })
	
	return axios.post('https://prac-marketplace.onrender.com/cart_jewelry/'+jewelryId+'/1', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export const orderJewelry = () => {
	console.log("posting");
	
	return axios.delete('https://prac-marketplace.onrender.com/cart_jewelry/make', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export const deleteJewelryById = (id) => {
	return axios.delete('https://prac-marketplace.onrender.com/cart_jewelry/'+id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

