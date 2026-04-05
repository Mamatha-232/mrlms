import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const initial = {
  isAuthenticated: false,
  user: null,
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initial);

  useEffect(() => {
    const stored = localStorage.getItem('mrms-auth');
    if (stored) {
      setAuth(JSON.parse(stored));
    }
  }, []);

  const login = (credentials) => {
    const user = {
      id: Date.now(),
      name: credentials.name || 'John Doe',
      role: credentials.role,
      email: credentials.email || 'user@example.com',
      progress: { completed: 32, total: 100 },
    };
    const state = { isAuthenticated: true, user };
    setAuth(state);
    localStorage.setItem('mrms-auth', JSON.stringify(state));
    return user;
  };

  const logout = () => {
    setAuth(initial);
    localStorage.removeItem('mrms-auth');
  };

  const updateProfile = (profile) => {
    const newUser = { ...auth.user, ...profile };
    const next = { ...auth, user: newUser };
    setAuth(next);
    localStorage.setItem('mrms-auth', JSON.stringify(next));
  };

  return <AuthContext.Provider value={{ ...auth, login, logout, updateProfile }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
