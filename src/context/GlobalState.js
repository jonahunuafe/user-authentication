import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({  children }) => {
   const [state, setState] = useState("");

   useEffect(() => {
      const storedInitialState = window.localStorage.getItem("state", state);
      setState(storedInitialState);
   }, [state]);

  
   const toggleForm = (formName) => {
      setState(formName);
      window.localStorage.setItem("state", formName)
   } 
 
   return (
      <GlobalContext.Provider value={{ state, setState, toggleForm }}>
         { children }
      </GlobalContext.Provider>
   );
}