import React, {Component, useContext} from 'react';
import {Redirect, Route} from "react-router-dom";
import {getToken} from "./Common";
import {GlobalState} from "../GlobalState";

const PublicRoute = ({component: Component, ...rest}) => {
    const states = useContext(GlobalState)
    const [user] = states.userAPI.user;
    return(
        <Route
            {...rest}
            render={props => {
                return user ? <Component {...props} />
                    : <Redirect to={{pathname: "/admin/dashboard", state: {from: props.location} }} />
            }}
            />
    )
}

export default PublicRoute;