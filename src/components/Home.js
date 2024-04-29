import React from 'react';
import { useAuth } from '../firebaseContext/authContext';

function Home() {
  const { currentUser } = useAuth();

  return (
    <div className="loggedInMessage">
      <p>
        Hello 
        <span> {currentUser.displayName ? currentUser.displayName : currentUser.email}
        </span>, you are logged in.
      </p>
    </div>
  )
}

export default Home;