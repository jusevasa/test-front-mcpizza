import { MdClose } from 'react-icons/md';
import React from 'react';

const ModalRestaurant = ({ store, onClose }) => {
  const { logo, name, description, address, products } = store;
  const URL_LOGO = require(`../../../../../assets/img/${logo}`).default;

  return (
    <div className='modal-container'>
      <div className='modal-ct'>
        <div className='modal-top'>
          <button className='modal-btn' onClick={onClose}>
            <MdClose size={20} />
          </button>
        </div>
        <div className='main-container'>
          <div className='card-restaurant'>
            <img src={URL_LOGO} alt={name} />
            <h6>{name}</h6>
            <p>{description}</p>
            <p>{address}</p>
          </div>
          <div className='menu-list'>
            {products.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRestaurant;
