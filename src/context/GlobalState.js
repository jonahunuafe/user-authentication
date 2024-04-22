import React, { createContext, useReducer } from "react";
import { Link } from "react-router-dom";

const TEXT_1 = (
   <div>
      <p>Don't have an account yet? <span><Link to="/">Signup</Link></span></p>
   </div>
);

const TEXT_2 = (
   <div>
      <p>Already have an account? <span><Link to="/login">Login</Link></span></p>
   </div>
);

//initial state

const initialState = {
   data: [
      {text1: TEXT_1, link1: TEXT_2},
      // {text2: , link2: },
   ]
}