import {Route, Switch} from 'react-router-dom';
import React from 'react';
import Login from './Components/Login';
import Buy from './Components/Buy';
import Landing from './Components/Landing';
import Register from './Components/Register';
import Search from './Components/Search';
import Sell from './Components/Sell';
import Chat from'./Components/Chat';
export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path ='/Login' component={Login}/>
        <Route path = '/Register-to-buy'  component={Buy}/>
        <Route path = '/Register-to-sell' component={Sell}/>
        <Route path = '/Register-vehicle' component={Register}/>
        <Route path = '/Search' component={Search}/>
        <Route path = '/Chat' component={Chat}/>
    </Switch>
);