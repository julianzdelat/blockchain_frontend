import React, { useState, useEffect, useContext, useCallback } from 'react';

import { ADMIN_STORAGE_KEY, EMPLOYEE_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(false);
  const [employee, setEmployee] = useState(false);

  useEffect(() => {
    const lastAdminState = storage.get(ADMIN_STORAGE_KEY);
    const lastEmployeeState = storage.get(EMPLOYEE_STORAGE_KEY);
    const isAdmin = Boolean(lastAdminState);
    const isEmployee = Boolean(lastEmployeeState);

    setAdmin(isAdmin);
    setEmployee(isEmployee);
  }, []);

  const login = useCallback((username, password) => {
    let response = false;
    if ((username && password) === 'admin') {
      setAdmin(true);
      setEmployee(false);
      storage.set(ADMIN_STORAGE_KEY, true);
      response = true;
    } else if ((username && password) === 'employee') {
      setAdmin(false);
      setEmployee(true);
      storage.set(EMPLOYEE_STORAGE_KEY, true);
      response = true;
    }
    return response;
  }, []);

  const logout = useCallback(() => {
    setAdmin(false);
    setEmployee(false);
    storage.set(ADMIN_STORAGE_KEY, false);
    storage.set(EMPLOYEE_STORAGE_KEY, false);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, admin, employee }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
