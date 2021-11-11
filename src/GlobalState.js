import React, {createContext, useEffect, useState} from "react";
import UserApi from "./api/UserApi";

export const GlobalState = createContext({})

export const DataProvider = ({children}) =>{
    const [token, setToken] = useState("")
   const state = {
       tokens: [token, setToken],
       userAPI: UserApi(token),
   }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}