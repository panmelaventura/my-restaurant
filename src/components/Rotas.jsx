import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import Restaurants from './Restaurants'

const Rotas = () => (
    <Router>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/restaurants" component={Restaurants} />
    </Switch>
    </Router>
)

export default Rotas;