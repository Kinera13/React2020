import logo from './favicon.ico';
import './App.css';
import React from "react";
import {Main} from "./main";
import {Navbar} from "./navbar.js";
import {Test} from  './test';

function App() {
    return (
        <div className="App">
            <header className="App-header">

                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>,

    <div className="App">
        <Navbar />
        <Main />
        <Test />
    </div>
    );
}

export default App;
