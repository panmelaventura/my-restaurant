import React, { Component } from 'react';
import { Navbar, Button, Jumbotron, Form, FormGroup, FormControl} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './App.css';
import Header from './components/Header';
import User from './components/User';


class App extends Component {
  componentDidMount() {
    this.setState({ ...this.state, user: this.getUser()});
  }
  
  getUser() {
    let user = new User();
    user.name = "Panmela Ventura - ";
    user.profile = "Admin - ";
    user.address = "545 Sherbourne";
    return user;
  }

  render() {
    return (
      <div className="App" >
          <Navbar>          
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#home">FASTFOOD</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Navbar.Text >
                  <Navbar.Link ><Header user={(this.state && this.state.user) ? this.state.user : ''} /></Navbar.Link>
                </Navbar.Text>
                <Navbar.Text pullRight>
                <Link style={{color: 'black'}} to="restaurants">View Restaurants</Link>
                </Navbar.Text>
              </Navbar.Collapse>
            </Navbar>

            <Jumbotron>
              <img src={logo} className="App-logo-food" alt="logo" />
                <h1>
                  Delivery for any food!
                </h1>
                <Form inline>
                  <FormGroup controlId="formInlineEmail">
                    <FormControl type="email" placeholder="Desired Food"/>
                  </FormGroup>{' '}
                  <Button type="submit">Search</Button>
                </Form>
            </Jumbotron>
          

          
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          
      </div>
    );
  }
}

export default App;
