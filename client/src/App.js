import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./component/views/LandingPage/LandingPage";
import Register from "./component/views/RegisterPage/RegisterPage";
import Login from "./component/views/LoginPage/LoginPage";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
