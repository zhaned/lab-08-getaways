import React, { useState } from 'react';
import { signInUser } from '../../services/userUtils';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setUser(prevUser => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = await signInUser(user.email, user.password);
    console.log(newUser)
  }

  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input name='email' value={user.email} onChange={handleChange} />
        </label>
        <label>
          Password: 
          <input name='password' value={user.password} onChange={handleChange} />
        </label>
        <button>Log In</button>
      </form>
  </div>
  )
}

export default Login;