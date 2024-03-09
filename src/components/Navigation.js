import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { useUserStore, getUser } from "./../store/UserStore";
import AccountMenu from "./AccountMenu";

const Navigation = () => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);

  const handleLogin = () => {
    getUser(navigate);
  };

  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div className="navigation">
      <div className="en-tete">
        <h3>Name Application</h3>
        {user ? (
          <AccountMenu />
        ) : (
          <div className="compte">
            <p onClick={handleLogin}>Se Connecter</p>
            <AiOutlineUser size={"1.2em"} color="white" />
          </div>
        )}
      </div>
      <div className="nav-container">
        <ul>
          <NavLink
            to="/home"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/info"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Informations Clients</li>
          </NavLink>
          <NavLink
            to="panier"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Panier</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
