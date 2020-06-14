import "./index.less";
import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Login from "./pages/Login";
import Recipes from "./pages/Recipes";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <Router>
          <div>
            <Navbar />
            <div className="page-container">
              <Switch>
                <Route exact path='/login'>
                  <Login />
                </Route>
                <Route path='/recipes'>
                  <Recipes />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      );
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;