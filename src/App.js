import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterDropDownSection, FooterLinkList} from 'react-mdl';
import { Link } from 'react-router-dom';
import './App.css';
/*import Header from './components/Header';*/
import User from './business/vo/User';
import Rotas from './components/Rotas';




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
      <div className="demo-big-content">
        <Layout className="App-layout">
          <Header transparent title="FastFood" style={{color: '#FFCC00'}} scroll>
                <Navigation>
                    <Link to="/">Landing Page</Link>  
                    <Link to="about">About</Link>
                    <Link to="restaurants">View Restaurants</Link>  
                </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                    <Link to="/">Landing Page</Link> 
                    <Link to="about">About</Link>   
                    <Link to="restaurants">View Restaurants</Link>          
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content">
                <Rotas/>
                
              </div>
          </Content>
          <Footer size="mega">
    <FooterSection type="middle">
        <FooterDropDownSection title="Features">
            <FooterLinkList>
                <a href="#">About</a>
                <a href="#">Terms</a>
                <a href="#">Partners</a>
                <a href="#">Updates</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Details">
            <FooterLinkList>
                <a href="#">Specs</a>
                <a href="#">Tools</a>
                <a href="#">Resources</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Technology">
            <FooterLinkList>
                <a href="#">How it works</a>
                <a href="#">Patterns</a>
                <a href="#">Usage</a>
                <a href="#">Products</a>
                <a href="#">Contracts</a>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="FAQ">
            <FooterLinkList>
                <a href="#">Questions</a>
                <a href="#">Answers</a>
                <a href="#">Contact Us</a>
            </FooterLinkList>
        </FooterDropDownSection>
    </FooterSection>
    <FooterSection type="bottom" logo="Title">
        <FooterLinkList>
            <a href="#">Help</a>
            <a href="#">Privacy & Terms</a>
        </FooterLinkList>
    </FooterSection>
</Footer>
          
      </Layout>
      
  </div>





      /*<div className="demo-big-content">
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
                <Link style={{color: 'black', paddingRight:'20px'}} to="restaurants">About</Link>
                <Link style={{color: 'black', paddingRight:'20px'}} to="restaurants">Register your restaurant</Link>
                <Link style={{color: 'black'}} to="restaurants">View Restaurants</Link>
                </Navbar.Text>
              </Navbar.Collapse>
            </Navbar>

            <Jumbotron>
            <Header user={(this.state && this.state.user) ? this.state.user : ''} />
              <img src={logo} className="App-logo-food" alt="logo" />
                <h1> Delivery for any food!</h1>
                <Form inline>
                  <FormGroup controlId="formInlineEmail">
                    <FormControl type="email" placeholder="Find a restaurant"/>
                  </FormGroup>{' '}
                  <Button type="submit">Search</Button>
                </Form>
            </Jumbotron>
          

          
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

          <Restaurants/>
          
    </div>*/

    
    );
  }
}

export default App;
