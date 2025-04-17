import React, { createContext, useContext, useState, ReactNode } from 'react';

type Event = {
  id: string;
  name: string;
  image: string;
};

type User = {
  id: string;
  name: string;
  email: string;
};

type AppContextType = {
  events: Event[];
  user: User | null;
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<Event[]>([
    // Example events
    { id: '1', name: 'Toxus Event', image: '/assets/toxus/page1.jpeg' },
    { id: '2', name: 'WildMed Event', image: '/assets/wildmed/wildmed placeholder.png' },
    { id: '3', name: 'Critical Care Event', image: '/assets/criticalcare/Critical Care Placeholder.png' },
  ]);

  const [user, setUser] = useState<User | null>(null);

  return (
    <AppContext.Provider value={{ events, user, setEvents, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};