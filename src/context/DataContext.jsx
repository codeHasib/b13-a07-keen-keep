"use client";

import { createContext, useContext } from "react";
import data from "../data/friends_data.json";

const DataContext = createContext({
  friendsData: data,
});

export const DataProvider = ({ children }) => {

  return (
    <DataContext.Provider value={{ personalData, skillsData }}>
      {children}
    </DataContext.Provider>
  );
};

export const usePortfolioData = () => {
  return useContext(DataContext);
};