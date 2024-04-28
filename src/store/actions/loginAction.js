// actions/loginAction.js
import axios from 'axios';

export const login = (username, password) => async dispatch => {
  dispatch({ type: 'LOGIN_REQUEST' });

  try {
    const response = await axios.post('http://127.0.0.1:8000/login', { username, password });
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
  }
};

export default login; 