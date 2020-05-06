import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import TestPage from "../pages/TestPage";

export default () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <HomePage/>
                </Route>
                <Route  path='/test'>
                    <TestPage/>
                </Route>
            </Switch>
        </Router>
    )
}
