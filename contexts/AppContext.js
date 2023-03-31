// AppContext.js
import React, { createContext, useState, useEffect } from 'react';
import { getShiftAssignments } from '../utils/api';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const date = new Date();
  const userId = 5;
  const [aggShiftData, setAggShiftData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getShiftAssignments(date, null);
        setAggShiftData(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const contextValues = {
    aggShiftData,
    isLoading,
    error,
    userId,
    date,
  };

  return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};
