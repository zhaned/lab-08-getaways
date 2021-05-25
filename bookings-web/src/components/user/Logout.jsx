import React, { useEffect, useState } from 'react';
import { signOutUser } from '../../services/userUtils';
import Loading from '../loading/Loading';

const Logout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    signOutUser()
      .then(() => setLoading(false));
  }, [])

  return (
  <div>
    {loading ? <Loading /> : 'Successfully Logged Out!'}
  </div>
  )
};

export default Logout;
