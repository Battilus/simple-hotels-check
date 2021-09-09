import React from "react";
import './App.scss';
import {Route, Redirect, Switch} from "react-router-dom"
import Auth from "./components/Auth/Auth";
import {useSelector} from "react-redux";
import Hotels from "./components/Hotels/Hotels";


const App = () => {

    let loggedIn = useSelector(state => state.auth.loggedIn);

    return (
        <div className="App">
            {loggedIn ?
                <Redirect to={"/hotels"}/> :
                <Redirect to={"/auth"}/>}
            <Switch>
                <Route path="/auth" render={() => <Auth/>}/>
                <Route path="/hotels" render={() => <Hotels />}/>
            </Switch>
        </div>
    );
}


export default App;
