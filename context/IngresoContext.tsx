"use client";

import { createContext, useState } from "react";

export const IngresoContext = createContext<IIngresoContextProps>({
  ingreso: 0,
  setIngreso: () => 0,
});

const IngresoProvider = ({ children }: { children: React.ReactNode }) => {
  const [ingreso, setIngreso] = useState<number>(0);
  return (
    <IngresoContext.Provider value={{ ingreso, setIngreso }}>
      {children}
    </IngresoContext.Provider>
  );
};

export default IngresoProvider;
