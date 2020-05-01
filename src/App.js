import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <nav style={{width: '100%', padding: '2rem 0', backgroundColor: 'gray'}}>
                <button>
                    English
                </button>
                <button>
                    Korean
                </button>
                <button>
                    Chinese
                </button>
                <button>
                    Vietnam
                </button>
            </nav>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
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
        </div>
    );
}

export default App;
