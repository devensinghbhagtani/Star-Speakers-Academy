// src/UserContext.js
import React, { createContext, useState, useCallback, useEffect, useContext } from 'react';
import axios from 'axios';

// Create a UserContext
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUser = useCallback(async () => {
    try {
      const url = `http://localhost:8081/auth/get-token`;
      const { data } = await axios.get(url, { withCredentials: true });
      console.log(data);
      setUser(data.userToken);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <UserContext.Provider value={{ user, setUser, getUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};
