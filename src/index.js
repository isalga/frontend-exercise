import "./index.less";
import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from "./pages/Login";
import Recipes from "./pages/Recipes";

const App = () => {
    return (
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/login'>login</Link>
                </li>
                <li>
                  <Link to='/recipes'>recipes</Link>
                </li>
              </ul>
            </nav>
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