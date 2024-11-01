// src/UserContext.js
import React, { createContext, useState, useCallback, useEffect, useContext } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUser = useCallback(async () => {
    try {
      const url = `${import.meta.env.VITE_SERVER_URL}/auth/get-token`;
      const { data } = await axios.get(url, { withCredentials: true });
      console.log("Token: ", data);
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
