import React from "react";
import { AppContext } from "../app-context";

export default function Profile() {
  const { user } = React.useContext(AppContext);
  return (
    <>
      Welcome, {user.title} {user.name}. Your e-mail is {user.email}.
    </>
  );
}
