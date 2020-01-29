import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';
import Welcome from './components/Pages/Welcome/Welcome';
import Welcome4 from './components/Pages/Welcome/contents/Welcome4';
import Welcome3_1 from './components/Pages/Welcome/contents/details/Welcome3_1';
import Welcome4_1 from './components/Pages/Welcome/contents/details/Welcome4_1';
import Suggest from './components/Pages/Suggest/Suggest';
import Bottom from './components/Bottom/Bottom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* Home에서만 sticky 적용됨*/
export default () => (
    <Router>
        <Header/>
        <Route path="/suggest/:page" component={Suggest}></Route>
        <Route path="/welcome/:page" component={Welcome}></Route>
        <Route path="/welcome/3/:page"></Route>
        <Route path="/welcome/4/:page"></Route>
        <Route exact path="/" component={Home}></Route>
        <Bottom/>
    </Router>
)