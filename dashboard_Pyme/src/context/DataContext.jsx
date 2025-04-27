import { createContext, useState } from "react";

export const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState("Marzo 2025");

  return (
    <DateContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </DateContext.Provider>
  );
};
