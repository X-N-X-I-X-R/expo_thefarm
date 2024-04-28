// reducers/loginReducer.js
const initialState = {
  loading: false,
  user: null,
  error: null,
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, loading: true };
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, user: action.payload };
    case 'LOGIN_FAILURE':
      return { ...state, loading: false, error: action.payload };

    
    default:
      return state;
  }
}