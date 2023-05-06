import { useState } from "react";
import UserContext from "./userContext";

const UserState = (props) => {
  const [inOrOut, setInOrOut] = useState(false);
  const [id, setId] = useState(0);

  const login = async (phoneNo, email) => {
    const response = await fetch("http://192.168.0.100:2000/login-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNo, email }),
    });
    const json = await response.json();
    setInOrOut(json.cred);
    setId(json.id);
  };

  const logOut = async () => {
    const response = await fetch("http://192.168.0.100:2000/delete-user", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const json = await response.json();
    setInOrOut(!json.cred);
    setId(0);
  };

  return (
    <UserContext.Provider value={{ inOrOut, setInOrOut, login, logOut }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;
