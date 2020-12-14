import './App.css';
import React, { useState } from "react";
import {Main} from "./main";
import {Navbar} from "./navbar.js";

function App() {
    const [tech] = useState("React");
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
            </div>
    );
}

export default App;