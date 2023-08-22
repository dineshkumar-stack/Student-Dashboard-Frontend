import React, { createContext, useContext } from 'react';

export const ComplicationContext = createContext();

export function useComplicationContext() {
  return useContext(ComplicationContext);
}

export function ComplicationProvider({ children }) {
    const complications = {
        type1: 10,
        type2: 5,
        type3: 3,
        // ...more complication types and their counts
      };

  return (
    <ComplicationContext.Provider value={{ complications }}>
      {children}
    </ComplicationContext.Provider>
  );

}
