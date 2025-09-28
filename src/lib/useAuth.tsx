// src/lib/useAuth.tsx
import { createContext, useContext, useState, useEffect } from 'react';

type AuthContextType = {
  token: string | null;
  name: string | null;
  isAuthed: boolean;
  ready: boolean;
  signIn: (token: string, name: string, remember?: boolean) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  const isAuthed = !!token;

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedName = localStorage.getItem('name');
    if (storedToken && storedName) {
      setToken(storedToken);
      setName(storedName);
    }
    setReady(true);
  }, []);

  function signIn(newToken: string, newName: string, remember = true) {
    setToken(newToken);
    setName(newName);

    if (remember) {
      localStorage.setItem('token', newToken);
      localStorage.setItem('name', newName);
    }
  }

  function signOut() {
    setToken(null);
    setName(null);
    localStorage.removeItem('token');
    localStorage.removeItem('name');
  }

  return (
    <AuthContext.Provider
      value={{ token, name, isAuthed, ready, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
