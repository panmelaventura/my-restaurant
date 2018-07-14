import React from 'react';

const Header = (props) => {
  return (
    props.user ? <div className="header">
      <p>Hi {(props.user) ? props.user.name : ''}
      Profile: {(props.user) ? props.user.profile : ''}
      Endereco: {(props.user) ? props.user.address : ''}</p>
    </div> : <div></div>);
}
  export default Header;