import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {DataProvider} from "./GlobalState"
import SideBar from "./components/sidebar/SideBar";
import Pages from "./components/mainpages/Pages";
import Login from "./components/mainpages/auth/Login";


function App() {
    return (
        <DataProvider>
            <Router>
                <Switch>
                    <Route exact path={["/admin/:page", "/admin/:page/:page", "/admin/:page/:page/:id"]}>
                        <SideBar/>
                        <Pages/>
                    </Route>
                    <Route path="/admin" component={Login}/>

                </Switch>
                <div className="overlay"/>
            </Router>
        </DataProvider>
    );
}

export default App;
