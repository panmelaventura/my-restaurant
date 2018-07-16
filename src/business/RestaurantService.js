export class RestaurantService {
    getRestaurants() {
        return new Promise((resolve, reject) => {
        fetch('http://localhost:53690/api/restaurants')
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          resolve(myJson);
        });
    });
    }

    getMenus() {
      return new Promise((resolve, reject) => {
      fetch('http://localhost:53690/api/menus')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        resolve(myJson);
      });
  });
  }

  getItems() {
    return new Promise((resolve, reject) => {
    fetch('http://localhost:53690/api/items')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      resolve(myJson);
    });
});
}
}
export default RestaurantService;
