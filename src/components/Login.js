import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/loginAction'; // Adjusted path

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(login(username, password));
  };

  return (
    <div>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}