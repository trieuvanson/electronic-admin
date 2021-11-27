import React, {useContext} from 'react';
import {Redirect, Route} from "react-router-dom";
import {isLogin} from "./Common";

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                return isLogin()? <Component {...props} />
                    : <Redirect to={{pathname: "/admin"}}/>
            }}
        />
    )
}

export default PrivateRoute;