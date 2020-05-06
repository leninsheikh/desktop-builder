import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import TestPage from "../pages/TestPage";
import SelectComponentPage from "../pages/SelectComponentPage";

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
                <Route  path='/select-component'>
                    <SelectComponentPage/>
                </Route>
            </Switch>
        </Router>
    )
}
