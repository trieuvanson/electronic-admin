import React, {createContext, useEffect, useState} from "react";
import UserApi from "./api/UserApi";
import ProductsApi from "./api/ProductsApi";
import {getToken} from "./utils/Common";
import CategoriesApi from "./api/CategoriesApi";
import OrdersApi from "./api/OrdersApi";

export const GlobalState = createContext({})

export const DataProvider = ({children}) => {
    const [token, setToken] = useState("")
    useEffect(() => {
        const loggedIn = localStorage.getItem('isLogin')
        if (loggedIn) {
            const refreshToken = () => {
                setToken(getToken().access_token)
            }
            refreshToken()
        }
    }, [])
    const state = {
        tokens: [token, setToken],
        userAPI: UserApi(token),
        productAPI: ProductsApi(token),
        categoriesApi: CategoriesApi(),
        orderAPI: OrdersApi(token)
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}