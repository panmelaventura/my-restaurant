import React, {Component} from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, DataTable, TableHeader } from 'react-mdl';
import RestaurantService from '../business/RestaurantService';

class RestaurantMenu extends React.Component {
    componentDidMount() {
    console.log('Stateful component successfully mounted.');
debugger;

    let restService = new RestaurantService();
    restService.getRestaurant(this.props.match.params.number).then(myRestaurant => {
      this.setState({
        ...this.state,
        restaurant: myRestaurant
        //meuRestaurantePrincipal: myList.find(rest => rest.name === 'Cheese Cake Factory')
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
        <Grid>      
         
       <div>    
        <h3>{this.state && this.state.restaurant ? this.state.restaurant.name : ''}</h3>

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
                             
        </Grid>
      </div>

    );
  }
}
export default RestaurantMenu;


