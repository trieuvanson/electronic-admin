import React from 'react';
import {BrowserRouter as Router, Route, Switch, useLocation} from "react-router-dom";
import {DataProvider} from "./GlobalState"
import SideBar from "./components/sidebar/SideBar";
import Pages from "./components/mainpages/Pages";
import Login from "./components/mainpages/auth/Login";
import PublicRoute from "./utils/PublicRoute";
import PrivateRoute from "./utils/PrivateRoute";
import {isLogin} from "./utils/Common";


function App() {
    // return (
    //     <DataProvider>
    //         <Router>
    //             <SideBar/>
    //             <Switch>
    //                 <PublicRoute path="/admin" component={Login}/>
    //                 <Pages/>
    //             </Switch>
    //             <div className="overlay"/>
    //         </Router>
    //     </DataProvider>
    // );
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
