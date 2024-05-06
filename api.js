import axios from 'axios';

const MY_SERVER = "http://127.0.0.1:8000/";

export async function login(username, password) {
  try {
    const response = await axios.post(`${MY_SERVER}/login`, { username, password });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

