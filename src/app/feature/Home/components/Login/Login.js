import Form from '../Form';
import React from 'react';

const Login = ({formValues,handleChangeForm,handleLogin}) => {
  return (
    <div className='login-container'>
      <Form formValues={formValues} handleChangeForm={handleChangeForm} handleLogin={handleLogin}/>
    </div>
  );
};

export default Login;
