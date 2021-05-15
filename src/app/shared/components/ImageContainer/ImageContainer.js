import React from 'react';
import pizzaImage from '../../../../assets/img/Pizza.png';

const ImageContainer = () => {
  return (
    <div className='image-container'>
      <img src={pizzaImage} alt='piza' />
    </div>
  );
};

export default ImageContainer;
