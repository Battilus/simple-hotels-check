import React from "react";
import './App.scss';
import {Route, Switch, Redirect} from "react-router-dom"
import WrappedAuthorization from "./components/Authorization/AuthorizationContainer";
import Hotels from "./components/Hotels/Hotels";


const App = () => {
  return (
    <div className="App">
        <Switch>
            <Route path="/Authorization" render={() => <WrappedAuthorization />} />
            <Route path="/Hotels" render={() => <Hotels />} />
            <Route path="/" exact render={() => <Redirect to="/Authorization" />} />
        </Switch>
    </div>
  );
}

export default App;
