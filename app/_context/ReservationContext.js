"use client";

import { useState, useContext, createContext } from "react";

const ReservationContext = createContext();

const initialState = { from: undefined, to: undefined };

const ReservationProvider = ({ children }) => {
  const [range, setRange] = useState(initialState);
  const resetRange = () => {
    setRange(initialState);
  };

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
};

const useReservation = () => {
  const context = useContext(ReservationContext);

  if (context === undefined)
    throw new Error("context was use outside provider");
  return context;
};

export { ReservationProvider, useReservation };
