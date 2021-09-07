import React from "react";
import './App.scss';
import {Route, Redirect, Switch} from "react-router-dom"
import Authorization from "./components/Authorization/AuthorizationContainer";
import {useSelector} from "react-redux";
import Hotels from "./components/Hotels/HotelsContainer";


const App = (state) => {

    let loggedIn = useSelector(state => state.authorization.loggedIn);

    return (
        <div className="App">
            {loggedIn ?
                <Redirect to={"/hotels"}/> :
                <Redirect to={"/authorization"}/>}
            <Switch>
                <Route path="/authorization" render={() => <Authorization/>}/>
                <Route path="/hotels" render={() => <Hotels />}/>
            </Switch>
        </div>
    );
}


export default App;
