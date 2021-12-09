import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, useLocation} from "react-router-dom";
import {DataProvider} from "./GlobalState"
import SideBar from "./components/sidebar/SideBar";
import Pages from "./components/mainpages/Pages";
import Login from "./components/mainpages/auth/Login";
import PublicRoute from "./route/PublicRoute";
import PrivateRoute from "./route/PrivateRoute";
import {isLogin} from "./utils/Common";


function App() {
    useEffect(() => {
        let hours = 1; // to clear the localStorage after 1 hour(if someone want to clear after 8hrs simply change hours=8)
        let now = new Date().getTime();
        let setupTime = localStorage.getItem('setupTime');
        if (setupTime == null) {
            localStorage.setItem('setupTime', now)
        } else {
            if(now-setupTime > hours*60*60*1000) {
                localStorage.clear()
                localStorage.setItem('setupTime', now);
            }
        }    }, []);
    return (
        <DataProvider>
            <Router>
                    <SideBar/>
                    <Pages/>
                <div className="overlay"/>
            </Router>
        </DataProvider>
    );
}

export default App;
