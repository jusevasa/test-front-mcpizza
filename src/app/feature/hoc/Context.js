import React, { createContext, useState } from 'react';

const ContextAuth = createContext();

const ContextAuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return localStorage.getItem('loggedUser');
  });

  console.log(isAuth);
  const value = {
    isAuth,
    activateAuth: (isUser) => {
      setIsAuth(true);
      localStorage.setItem('loggedUser', JSON.stringify(isUser));
    },
    removeAuth: () => {
      setIsAuth(false);
      localStorage.removeItem('loggedUser');
    },
  };
  return <ContextAuth.Provider value={value}>{children}</ContextAuth.Provider>;
};

export { ContextAuth, ContextAuthProvider };
