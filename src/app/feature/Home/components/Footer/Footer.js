import { AiFillFacebook } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import LogoPizzaWhite from '../../../../../assets/img/Best Pizza.png'
import React from 'react';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='media-container'>
        <AiFillFacebook/>
        <FiInstagram/>
      </div>
      <img src={LogoPizzaWhite} alt='Pizza White' />
    </div>
  );
};

export default Footer;
