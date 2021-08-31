import React from "react";
import './App.scss';
import {Route, Switch, Redirect} from "react-router-dom"
import Authorization from "./components/Authorization/Authorization";
import Hotels from "./components/Hotels/Hotels";


const App = () => {
  return (
    <div className="App">
        <Switch>
            <Route path="/Authorization" render={() => <Authorization />} />
            <Route path="/Hotels" render={() => <Hotels />} />
            <Route path="/" exact render={() => <Redirect to="/Authorization" />} />
        </Switch>
    </div>
  );
}

export default App;
