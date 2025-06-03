import { useState } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return Boolean(localStorage.getItem('token'));
  });

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};
