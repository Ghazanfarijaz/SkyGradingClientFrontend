import React, { createContext, useContext, useState } from "react";

// Create a context for the cards
const CardsContext = createContext();

// Custom hook to use the CardsContext
export const useCards = () => {
  const context = useContext(CardsContext);
  if (!context) {
    throw new Error("useCards must be used within a CardsProvider");
  }
  return context;
};

// Provider component to wrap your app
export const CardsProvider = ({ children }) => {
  const [cardsArray, setCardsArray] = useState([]);

  return (
    <CardsContext.Provider value={{ cardsArray, setCardsArray }}>
      {children}
    </CardsContext.Provider>
  );
};