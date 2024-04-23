import React, { createContext, useState } from "react";

// const initialState = { login: "login" }

export const GlobalContext = createContext();

export const GlobalProvider = ({  children }) => {
   const [state, setState] = useState("");

   const toggleForm = (formName) => {
      setState(formName);
   } 
 
   return (
      <GlobalContext.Provider value={{ state, setState, toggleForm }}>
         { children }
      </GlobalContext.Provider>
   );
}