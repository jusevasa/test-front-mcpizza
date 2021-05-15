import { GiPadlock } from 'react-icons/gi';
import React from 'react';

const Header = ({ removeAuth }) => {
  return (
    <div className='header-container'>
      <div className='exit-container' onClick={removeAuth}>
        <GiPadlock />
        <span>Salir</span>
      </div>
    </div>
  );
};

export default Header;
