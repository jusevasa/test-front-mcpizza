import React from 'react';

const CardStore = ({ logo, name, address, handleClick }) => {
  const URL_LOGO = require(`../../../../../assets/img/${logo}`).default;

  return (
    <div className='card-container' onClick={handleClick}>
      <img className='card-logo' src={URL_LOGO} alt={name} />
      <p className='card-name'>{name}</p>
      <p className='card-address'>{address}</p>
    </div>
  );
};

export default CardStore;
