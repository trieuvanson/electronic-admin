import React, {createContext, useEffect, useState} from "react";

export const GlobalState = createContext({})

export const DataProvider = ({children}) =>{
    const [token, setToken] = useState("")
   const state = {
       tokens: [token, setToken],

   }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}