import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Landingpage from './Landingpage';
import Restaurants from './Restaurants';
import RestaurantMenu from './RestaurantMenu';

const Rotas = () => (
    <Switch>
        <Route exact path="/" component={Landingpage} />>
        <Route path="/about" component={About} />
        <Route path="/restaurants" component={Restaurants} />
        <Route path="/restaurantMenu/:number" component={RestaurantMenu} />
    </Switch>
)

export default Rotas;