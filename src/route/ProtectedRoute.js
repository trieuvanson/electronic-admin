import React, {useEffect} from 'react';
import {useHistory, useLocation} from "react-router-dom";

function ProtectedRoute(props) {
    let Cmp = props.Cpm;
    const history = useHistory();
    const location = useLocation();
    useEffect(() => {
        if (!getUser()) {
            history.push("/register")
        }
    })
    return (
        <></>
    )
}

export default ProtectedRoute;