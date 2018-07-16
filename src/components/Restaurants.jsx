import React from 'react';
import RestaurantService from '../business/RestaurantService';

class Restaurants extends React.Component {
  constructor(props) {
    super(props);
  }

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
      <div>
        {(this.state && this.state.meuRestaurantePrincipal ?
          <h1> Welcome to the {this.state.meuRestaurantePrincipal.name} website! </h1> : '')}


        <h3>Lista de Restaurantes</h3>



        {(this.state && this.state.restaurants ?
          <ul>
            {this.state.restaurants.map(mostrar => (
              <li key={mostrar.id.toString()}>
                Restaurante: {mostrar.name}
              </li>
            ))}
          </ul>
          : ''
        )}

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

    );
  }
}
export default Restaurants;


