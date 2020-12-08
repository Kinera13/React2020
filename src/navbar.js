import React from  "react";
import './styles.css';
import  logo from  "./logo.jpg";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Main} from "./main";
import  {Test} from "./test";

export function Navbar() {
    return (
        <Router>
    <nav className="navbar navbar-expand-sm" style={{backgroundColor: '#29bade'}}>
        <img src={logo} className="logo" alt={logo} />

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={Main}>Главная</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={Test}>Test</Link>
                    </li>
                </ul>
    </nav>
    <Switch>
        <Route path="/">
            <Main />
        </Route>
        <Route path="/test">
            <Test />
        </Route>
    </Switch>
</Router>

    );
}