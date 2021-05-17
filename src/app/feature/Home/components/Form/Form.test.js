import '@testing-library/jest-dom/extend-expect';

import { fireEvent, render, waitFor } from '@testing-library/react';

import Form from './Form';
import React from 'react';

describe('<Form/>', () => {
  let component, componentProps;

  beforeEach(() => {
    componentProps = {
      formValues: {
        username: '',
        password: '',
      },
      handleLogin: jest.fn((e) => e.preventDefault()),
      handleChangeForm: jest.fn(),
    };
    component = render(<Form {...componentProps} />);
  });

  it('should render component', () => {
    expect(component.container).toHaveTextContent(
      'A las mejores pizzas del país'
    );
  });

  it('should handleLogin', async () => {
    const elem = component.container;
    const submitButton = elem.querySelector('button[type="submit"]');

    await waitFor(() => {
      submitButton && fireEvent.click(submitButton);
    });

    expect(componentProps.handleLogin).toHaveBeenCalledTimes(1);
  });
});
