import React from "react";
import { AppContext } from "../app-context";
import { useNavigate } from "react-router";

export default function AuthGuard({ children, pageName }) {
  const navigate = useNavigate();

  const { user } = React.useContext(AppContext);

  if (user) return <>{children}</>;

  navigate("/login", {
    state: { error: `You need to login to access ${pageName} page` },
  });
}
