import React, { createContext, useContext } from 'react';

export const ComplicationContext = createContext();

export function useComplicationContext() {
  return useContext(ComplicationContext);
}

export function ComplicationProvider({ children }) {
    const complications = {
        Complete: 10,
        Pending: 5,
        Upcoming: 3,
        // ...more complication types and their counts
      };

  return (
    <ComplicationContext.Provider value={{ complications }}>
      {children}
    </ComplicationContext.Provider>
  );

}
