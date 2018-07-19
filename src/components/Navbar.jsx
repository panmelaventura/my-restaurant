import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import './App.css';


class Navbar extends Component {
    render(){
        return(
          <Navbar>          
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">FASTFOOD</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Text >
              <Navbar.Link ></Navbar.Link>
            </Navbar.Text>
            <Navbar.Text pullRight>
            <Link style={{color: 'black'}} to="restaurants">View Restaurants</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>

        )
    }
}

export default Navbar;