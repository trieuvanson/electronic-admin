import React from 'react'
import {Route, Switch} from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";



function Pages() {
    return (
        <Switch>
            <Route path={["/admin/dashboard", "/"]} exact component={Dashboard} />

        </Switch>

        
    )
}

export default Pages