import React from 'react';
import { useAuth0 } from '../../react-auth0-spa';

const Profile = () => {
  const { loading, user } = useAuth0();
  return (
    <>
      { (loading || !user) && <div>No data</div>}
      { (!loading && user) && (
        <>
          <div>
            <img src={user.picture} alt="Profile" />
          </div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <code>{JSON.stringify(user, null, 2)}</code>
        </>
      )}
    </>
  );
};

export default Profile;
