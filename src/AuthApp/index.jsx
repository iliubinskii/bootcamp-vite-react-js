import "./AuthApp.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { AppContext } from "./app-context";
import React from "react";
import { db } from "./db";
import AuthGuard from "./auth-guard";

export default function AuthApp() {
  const [user, setUser] = React.useState();

  const login = async (username, password) => {
    const candidate = await db.findUser(username);

    if (candidate && candidate.password === password) {
      setUser(candidate);

      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(undefined);
  };

  return (
    <div className="auth-app">
      <AppContext.Provider value={{ user, login, logout }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route element={<Home />} index />
              <Route path="/login" element={<Login />} />
              <Route
                path="/profile"
                element={
                  <AuthGuard pageName="profile">
                    <Profile />
                  </AuthGuard>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}
