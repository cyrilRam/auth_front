// Login.js (votre composant React pour la page de connexion)

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUserStore } from "./../store/UserStore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      console.log(username);
      console.log(password);
      const response = await axios.post(
        `http://localhost:8000/api/token?username=${username}&password=${password}`
      );
      const accessToken = response.data.access_token;
      const user_obj = response.data.user_object;

      localStorage.setItem("accessToken", accessToken);
      await setUser(user_obj);
      console.log(user);

      //   window.location.href = "/home";
    } catch (error) {
      console.log(error);
      setErrorMessage("Invalid credentials");
    }
  };

  useEffect(() => {
    console.log(user);
    if (user !== null) {
      navigate("/home");
      console.log("cc");
    }
  }, [user]);

  const handleCreateUser = () => {
    window.location.href = "/CreateUser";
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {/* Create User */}
        <button onClick={handleCreateUser}>Create User</button>
      </form>
    </div>
  );
};

export default Login;
