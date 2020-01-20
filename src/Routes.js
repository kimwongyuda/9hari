import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';
import Welcome from './components/Pages/Welcome/Welcome';
import Welcome3_1 from './components/Pages/Welcome/contents/details/Welcome3_1';
import Bottom from './components/Bottom/Bottom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* 글자 가운데 정렬, 폰트 나중에 하기*/
export default () => (
    <Router>
        <Header/>
        <Route path="/welcome/:page" component={Welcome}></Route>
        <Route path="/welcome/3/:people" component={Welcome3_1}></Route>
        <Route exact path="/" component={Home}></Route>
        <Bottom/>
    </Router>
)