import React from 'react';

const Navbar = (props) => {
  return (
    props.user ? <div className="navbar">
      <h3>Ola {(props.user) ? props.user.name : ''}</h3>
      <h2> Profile: {(props.user) ? props.user.profile : ''}</h2>
      <h4> Endereco: {(props.user) ? props.user.address : ''}</h4>
    </div> : <div></div>);
}
  export default Navbar;