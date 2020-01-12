import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';
import Introduce from './components/Pages/Introduce/Introduce';
import Welcome from './components/Pages/Introduce/Welcome';
import Bottom from './components/Bottom/Bottom';
import Welcome2 from './components/Pages/Introduce/Welcome2';
import Welcome3 from './components/Pages/Introduce/Welcome3';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default () => (
    <Router>
        <Header/>
        <Route path="/welcome/:page" component={Welcome}></Route>
        <Route path="/welcome/1/:people" component={Welcome3}></Route>
        <Route path="/introduce" component={Introduce}></Route>
        <Route exact path="/" component={Home}></Route>
        <Bottom/>
    </Router>
)