import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/getaways">Back to Home</Link>
      <span>  </span>
      <Link to="/register">Register</Link>
      <span>  </span>
      <Link to="/login">Login</Link>   
      <span>  </span>
      <Link to="/logout">Logout</Link>   
    </header>
  )
}

export default Header;
