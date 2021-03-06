import React from 'react';
import { Link } from 'react-router-dom';
// it makes the svg logo a react component with the name Logo
import { ReactComponent as Logo} from '../../assets/crown.svg';
import './header.scss';

const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
        <Link className='logo-container' to='/' />
          <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>

      </div>
    </div>
  )
}

export default Header;
