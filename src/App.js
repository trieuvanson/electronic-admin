import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {DataProvider} from "./GlobalState"
import SideBar from "./components/sidebar/SideBar";
import Pages from "./components/mainpages/Pages";
import Login from "./components/mainpages/auth/Login";


function App() {
    return (
        //Tao test ở đây
        //Đây là của Đại
        //Chờ
        //Giờ test lại nè
        //Ở master ấn fetch, xong ấn update(nếu có thông báo)
        //Xong rồi qua dai1 để merge
        //Xong là xong xuôi
        //Giờ t sửa ở đây nè lm sao quen me r
        //H push lên dai1
        //Hi
        <DataProvider>
            {/*Hi*/}
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
