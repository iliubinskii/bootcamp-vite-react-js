import React from "react";
import { AppContext } from "../app-context";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const { state } = useLocation();

  const { login } = React.useContext(AppContext);

  const [error, setError] = React.useState();

  const [username, setUsername] = React.useState("");

  const [password, setPassword] = React.useState("");

  const submit = (event) => {
    event.preventDefault();

    if (login(username, password)) navigate("/profile");
    else setError("Invalid username or password");
  };

  React.useEffect(() => {
    if (state?.error) setError(state.error);
  }, [state?.error]);

  return (
    <form className="auth-app-login" onSubmit={submit}>
      {error ? <div className="auth-app-error">{error}</div> : undefined}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit" disabled={!(username.length && password.length)}>
        Login
      </button>
    </form>
  );
}
