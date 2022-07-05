import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../pages/Main';
import Navbar from './Navbar';

const Router = () => {
    return (
<BrowserRouter>
<Navbar/>
    <Switch>
        <Route path="/" component={Main} exact />
    </Switch>
</BrowserRouter>
    );
};

export default Router;