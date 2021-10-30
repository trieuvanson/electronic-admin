import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {DataProvider} from "./GlobalState"
import SideBar from "./components/sidebar/SideBar";
import Pages from "./components/mainpages/Pages";


function App() {
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
