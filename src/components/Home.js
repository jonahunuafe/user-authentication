import React from 'react';
import { useAuth } from '../firebaseContext/authContext';
import { doSignOut } from '../firebase/auth';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  function handleNavigate() {
    doSignOut();
    navigate("/")
  }

  return (
    <div className="logoutContainer">
    <div onClick={handleNavigate} className="logoutBtn">
      logout
    </div>
    <div className="loggedInMessage">
      <p>
        Hello 
        <span> {currentUser.displayName ? currentUser.displayName : currentUser.email}
        </span>, you are logged in.
      </p>
    </div>
    </div>
  )
}

export default Home;