import React from  "react";
import './styles.css';
import  logo from  "./logo.jpg";
import {BrowserRouter as Router, Link, Switch} from "react-router-dom";
import {Main} from "./main";
import {Route} from "react-router-dom";
import HelloWorld from "./HelloWorld";
import {Test} from  './test';



export function Navbar() {
    return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-sm" style={{backgroundColor: '#29bade'}}>
                        <img src={logo} className="logo" alt={logo}/>

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/">Главная</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/test">Test</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/HelloWorld">HelloWorld</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route exact path="/test" component={Test}/>
                        <Route exact path="/HelloWorld" component={HelloWorld}/>
                    </Switch>
                </div>
            </Router>

    );
}

