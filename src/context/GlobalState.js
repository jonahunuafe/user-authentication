import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({  children }) => {
   const [state, setState] = useState("login");

   useEffect(() => {
      const storedInitialState = localStorage.getItem("state", state);
      setState(storedInitialState);
   }, [state]);

  
   const toggleForm = (formName) => {
      setState(formName);
      localStorage.setItem("state", formName)
   } 
 
   return (
      <GlobalContext.Provider value={{ state, setState, toggleForm }}>
         { children }
      </GlobalContext.Provider>
   );
}