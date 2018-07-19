import React, {Component} from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { Link } from 'react-router-dom';
import RestaurantService from '../business/RestaurantService';

class Restaurants extends React.Component {
    componentDidMount() {
    console.log('Stateful component successfully mounted.');

    let restService = new RestaurantService();
    restService.getRestaurants().then(myList => {
      this.setState({
        ...this.state,
        restaurants: myList,
        meuRestaurantePrincipal: myList.find(rest => rest.name === 'Cheese Cake Factory')
      });
      console.log(this.state.restaurants);
    });

    restService = new RestaurantService();
    restService.getMenus().then(myMenus => {
      this.setState({
        ...this.state,
        menus: myMenus
      });
      console.log(this.state.menus);
    });
  }

  render() {

    return (
      <div className="restaurants-content">
        <h3>Lista de Restaurantes</h3>
          {/*{(this.state && this.state.meuRestaurantePrincipal ?
          <h1> Welcome to the {this.state.meuRestaurantePrincipal.name} website! </h1> : '')}*/} 
            {(this.state && this.state.restaurants ?          
                this.state.restaurants.map(mostrar => (
                  <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}} 
                  key={mostrar.id.toString()}>
                    Restaurante: {mostrar.name}
                    <CardActions border>
                        <Button colored>
                          <Link to={`/restaurantMenu/${mostrar.id}`}>Menu</Link>  
                        </Button>
                    </CardActions>
                    </Card>
                ))
              : ''
            )}

       <div>    
        <h3>Lista de Menus</h3>

        {(this.state && this.state.menus ?
          <ul>
            {this.state.menus.map(mostrarmenu => (
              <li key={mostrarmenu.id.toString()}>
                Menu: {mostrarmenu.name}
              </li>
            ))}
          </ul>
          : ''
        )}
      </div>
    </div>
    );
  }
}
export default Restaurants;


