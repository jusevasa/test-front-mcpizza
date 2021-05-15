import IconPass from '../../../../../assets/img/ic_contrasena.png';
import IconUser from '../../../../../assets/img/ic_usuario.png';
import LogoPizzaDark from '../../../../../assets/img/Login-Best-Pizza.png';
import React from 'react';

const Form = ({ formValues, handleChangeForm, handleLogin }) => {
  return (
    <form className='form-container' onSubmit={(e) => handleLogin(e)}>
      <img src={LogoPizzaDark} alt='' />
      <h3>Bienvenido</h3>
      <p>A las mejores pizzas del país</p>
      <div className='input-container'>
        <input
          placeholder='usuario'
          name='username'
          value={formValues.username}
          onChange={(e) => handleChangeForm(e)}
        />
        <img src={IconUser} alt='' />
      </div>
      <div className='input-container'>
        <input
          placeholder='contraseña'
          name='password'
          type='password'
          value={formValues.password}
          onChange={(e) => handleChangeForm(e)}
        />
        <img src={IconPass} alt='' />
      </div>
      <span>¿Olvidaste tu contraseña?</span>
      <button type='submit'>Iniciar sesión</button>
    </form>
  );
};

export default Form;
