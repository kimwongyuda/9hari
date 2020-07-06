import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';
import Upload_Sermon from './components/Pages/Super/Upload_Sermon';
import Find from './components/Pages/Member/Find';
import Signup from './components/Pages/Member/Signup';
import Login from './components/Pages/Member/Login';
import Welcome from './components/Pages/Welcome/Welcome';
import NG from './components/Pages/NG/NG';
import Group from './components/Pages/Group/Group';
import Event from './components/Pages/Event/Event';
import Organ from './components/Pages/Organ/Organ';
import Suggest from './components/Pages/Suggest/Suggest';
import Worship from './components/Pages/Worship/Worship';
import Bottom from './components/Bottom/Bottom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default () => (
    <Router>
        <Header/>
        <Route path="/Upload_Sermon/:page" component={Upload_Sermon}></Route>
        <Route path="/Find/1/:page" component={Find}></Route>
        <Route path="/Signup/:page" component={Signup}></Route>
        <Route path="/Login/:page" component={Login}></Route>
        <Route path="/group/:page" component={Group}></Route>
        <Route path="/worship/:page/:page2" component={Worship}></Route>
        <Route path="/worship/:page/:page2/:num"></Route>
        <Route path="/organ/:page" component={Organ}></Route>
        <Route path="/event/:page" component={Event}></Route>
        <Route path="/suggest/:page" component={Suggest}></Route>
        <Route path="/ng/:page" component={NG}></Route>
        <Route path="/welcome/:page" component={Welcome}></Route>
        <Route path="/welcome/4/:page"></Route>
        <Route path="/welcome/6/:page"></Route>
        <Route exact path="/" component={Home}></Route>
        <Bottom/>
    </Router>
)