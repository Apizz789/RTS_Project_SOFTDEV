import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Signup from './components/pages/Signup';

function App() {
    return ( <
        >
        <
        Router >
        <
        Navbar / >
        <
        Switch >
        <
        Route path = '/'
        exact component = { Home }
        /> <
        Route path = '/services'
        exact component = { Services }
        /> <
        Route path = '/signup'
        exact component = { Signup }
        /> <
        /Switch> <
        /Router> <
        />
    );
}

export default App;