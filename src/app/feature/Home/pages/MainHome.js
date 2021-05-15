import React, { useEffect, useState } from 'react';

import API from '../../../core/RH.json';
import ImageContainer from '../../../shared/components/ImageContainer';
import Layout from '../../../shared/components/Layout';
import Login from '../components/Login';
import { Toast } from '../../../shared/utils/alerts';
import { useHistory } from 'react-router-dom';

const MainHome = ({ activateAuth, removeAuth }) => {
  const history = useHistory();
  const users = API.response.users;

  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
  });

  const [alertMessage, setAlertMessage] = useState('');

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const checkCurrentSession = () => {
    // check the session at first render
    if (localStorage.getItem('loggedUser')) {
      activateAuth();
    } else {
      removeAuth();
    }
  };

  useEffect(checkCurrentSession, [activateAuth, removeAuth]);

  /*
    trigger alert when the message change
   */
  const triggerMessage = () => {
    alertMessage.length &&
      Toast.fire({
        icon: 'error',
        title: alertMessage,
      });
  };

  useEffect(triggerMessage, [alertMessage]);

  const handleValForm = () => {
    const registeredUserNames = users.map((user) => user.email);
    const currentUserObj = users.filter(
      (user) => user.email === formValues.username
    )[0];

    if (formValues.username === '' || formValues.password.trim() === '') {
      setAlertMessage('No pueden quedar espacios en blanco');
      return false;
    } else if (!registeredUserNames.includes(formValues.username)) {
      //if typed user is not in the json
      setAlertMessage('El usuario no existe');
      return false;
    } else if (formValues.password !== currentUserObj.password) {
      //if typed user password isn't correct
      setAlertMessage('Contraseña incorrecta');
      return false;
    }
    return currentUserObj;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const isUser = handleValForm();
    if (isUser) {
      activateAuth();
      Toast.fire({
        icon: 'success',
        title: `Bienvenido ${isUser.name}`,
      });
      history.push('/pizzerias');
    }
  };

  return (
    <Layout>
      <ImageContainer />
      <Login
        formValues={formValues}
        handleChangeForm={handleChangeForm}
        handleLogin={handleLogin}
      />
    </Layout>
  );
};

export default MainHome;
