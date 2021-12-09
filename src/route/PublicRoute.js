import React, {useContext} from 'react';
import {Redirect, Route} from "react-router-dom";
import {isLogin} from "../utils/Common";

const PublicRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                return !isLogin()? <Component {...props} />
                    : <Redirect to={{pathname: "/admin/dashboard"}}/>
            }}
        />
    )
}

export default PublicRoute;