import React, {useContext} from 'react';
import {Redirect, Route} from "react-router-dom";
import {GlobalState} from "../GlobalState";

const PublicRoute = ({component: Component, ...rest}) => {
    const state = useContext(GlobalState)
    const [user] = state.userAPI.user;
    return (
        <Route
            {...rest}
            render={props => {
                return !user ? <Component {...props} />
                    : <Redirect to={{pathname: "/"}}/>
            }}
        />
    )
}

export default PublicRoute;