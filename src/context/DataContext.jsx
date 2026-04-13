"use client";

import { createContext, useContext, useState } from "react";
import data from "../data/friends_data.json";

const DataContext = createContext(undefined);

export const DataProvider = ({ children }) => {
  const [timeLine, setTimeLine] = useState([]);
  const friendsData = data;
  return (
    <DataContext.Provider value={{ friendsData, timeLine, setTimeLine }}>
      {children}
    </DataContext.Provider>
  );
};

export const useFriendsData = () => {
  return useContext(DataContext);
};
