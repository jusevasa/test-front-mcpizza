import '@testing-library/jest-dom/extend-expect';

import { fireEvent, render, waitFor } from '@testing-library/react';

import ModalRestaurant from './ModalRestaurant';
import React from 'react';

describe('<ModalRestaurant/>', () => {
  // Arrange
  let component, componentProps;

  beforeEach(() => {
    componentProps = {
      store: {
        id: 1,
        name: 'Pizzeria Capitan America',
        logo: 'Panos_pizza.png',
        address: 'Calle 1 #2-3',
        description: 'Esta pizzeria se especializa en ingredientes salados',
        products: [
          {
            id: 1,
            name: 'Pizza de Pollo',
          },
          {
            id: 2,
            name: 'Piza Pollo y Champiñones',
          },
          {
            id: 3,
            name: 'Pizza Vegetales',
          },
          {
            id: 4,
            name: 'Pizza Vegetales y Atun ',
          },
          {
            id: 5,
            name: 'Pizza 3 Quesos con Champiñones',
          },
          {
            id: 6,
            name: 'Pizza Jamon y Queso',
          },
        ],
      },
      onClose: jest.fn(),
    };
    // Act
    component = render(<ModalRestaurant {...componentProps} />);
  });

  it('should render component', () => {
    // Assert
    expect(component.container).toHaveTextContent('Pizzeria Capitan America');
  });

  it('should close modal', async () => {
    // Assert
    const elem = component.container;
    const button = elem.querySelector('button');
    await waitFor(() => {
      button && fireEvent.click(button);
    });

    expect(componentProps.onClose).toHaveBeenCalledTimes(1);
  });
});
