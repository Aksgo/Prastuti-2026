import React, { useState, createContext, useContext } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Events } from "./components/Events";
import { Schedule } from "./components/Schedule";
import { OverallTeam } from "./components/OverallTeam";
import { Footer } from "./components/Footer";
import { Login } from "./components/Auth";
import { Registration } from "./components/Registration";
import { Analytics } from "@vercel/analytics/react";
import Sponsors from "./components/Sponsors";
import { About } from './components/About';
interface User {
  name: string;
  email: string;
  college: string;
}

interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Router>
        <div className="flex flex-col min-h-screen bg-slate-950">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/events" element={<Events />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/team" element={<OverallTeam />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/about" element={<About />} />
              <Route path="/sponsors" element={<Sponsors />} />
            </Routes >
          </main >
          <Footer />
          <Analytics />
        </div >
      </Router >
    </AuthContext.Provider >
  );
};

export default App;
