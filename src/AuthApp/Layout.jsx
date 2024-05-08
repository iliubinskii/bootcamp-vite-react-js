import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { AppContext } from "./app-context";
import React from "react";

export default function AuthApp() {
  const { user, logout } = React.useContext(AppContext);

  return (
    <>
      <div className="auth-app-header">
        <Link className="auth-app-header-link" to="/">
          Home
        </Link>
        {user ? (
          <>
            <Link className="auth-app-header-link" to="/profile">
              Profile
            </Link>
            <a className="auth-app-header-link" onClick={logout}>
              Logout
            </a>
          </>
        ) : (
          <Link className="auth-app-header-link" to="/login">
            Login
          </Link>
        )}
      </div>
      <div className="auth-app-contents">
        <Outlet />
      </div>
    </>
  );
}
