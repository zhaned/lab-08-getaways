import React, { useState } from 'react';
import { registerUser } from '../../services/userUtils';

const Register = () => {
  const [user, setUser] = useState({
    username: '',
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
    const newUser = await registerUser(user.email, user.password, user.username);
    console.log(newUser);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input name='username' value={user.username} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input name='email' value={user.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password: 
          <input name='password' value={user.password} onChange={handleChange} />
        </label>
        <br />
        <button>Create Account</button>
      </form>
    </div>
  )
}

export default Register;