"use client";

import * as React from "react";

const MyContext = React.createContext<string>("default string");

interface MyProviderProps {
  children: React.ReactNode;
}

function MyProvider({ children }: MyProviderProps) {
  const staticString = "Hello, World!";

  return (
    <MyContext.Provider value={staticString}>{children}</MyContext.Provider>
  );
}

function useMyContext() {
  const context = React.useContext(MyContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
}

export { MyProvider, MyContext, useMyContext };
