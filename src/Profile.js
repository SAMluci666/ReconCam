import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <h2>You need to log in to access your profile.</h2>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome, {user.name}!</p>
      <img src={user.picture} alt={user.name} />
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
