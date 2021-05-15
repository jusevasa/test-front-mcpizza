import React, { useEffect } from 'react';

import API from '../../../core/RH.json';
import ImageContainer from '../../../shared/components/ImageContainer';
import Layout from '../../../shared/components/Layout';
import Store from '../components/Store';
import { useHistory } from 'react-router-dom';

const MainStore = ({ isAuth, removeAuth }) => {
  const history = useHistory();
  const ValidateUser = () => {
    !isAuth && history.push('/');
  };

  useEffect(ValidateUser, [isAuth, history]);

  return (
    <Layout>
      <ImageContainer />
      <Store stores={API.response.stores} removeAuth={removeAuth} />
    </Layout>
  );
};

export default MainStore;
