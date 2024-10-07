import { createContext, useContext, useState } from 'react';

//create context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser,] = useState(null);

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
  };

  const updateAuthn = (user, isLoggedIn, token) => {
    setUser(user)
    setIsAuthenticated(isLoggedIn);
    setToken(token);
  };

  //context provider
  return (
    <AuthContext.Provider value={{ user, logout, isAuthenticated, setIsAuthenticated, updateAuthn, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

//consume the context
export const useAuthContext = () => useContext(AuthContext);
