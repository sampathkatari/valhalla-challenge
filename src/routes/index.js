// Application Router configuration

import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../ui/layouts/app';
import Cards from '../ui/components/cards';
import CardDetails from '../ui/components/card-details';

const ValhallaRouter = (props) => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Cards}/>
                <Route path="/:cardId" component={CardDetails}/>
            </Route>
        </Router>
    )
}

export default ValhallaRouter;