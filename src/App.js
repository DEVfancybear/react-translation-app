import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useTranslation} from 'react-i18next';

const App = () => {
    const {t, i18n} = useTranslation();
    const handleChangeLanguages = (language) => {
        i18n.changeLanguage(language);

    }
    return (
        <div className="App">
            <nav style={{width: '100%', padding: '2rem 0', backgroundColor: 'gray'}}>
                <button onClick={()=>handleChangeLanguages('en')}>
                    English
                </button>
                <button onClick={()=>handleChangeLanguages('ko')}>
                    Korean
                </button>
                <button onClick={()=>handleChangeLanguages('chi')}>
                    Chinese
                </button>
                <button onClick={()=>handleChangeLanguages('vi')}>
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
