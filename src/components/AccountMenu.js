import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useUserStore } from "./../store/UserStore";
import { useNavigate } from "react-router-dom";

const AccountMenu = () => {
  const [isHovered, setIsHovered] = useState(false);
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("accessToken");
    await setUser(null);
    navigate("/login");
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="logger"
    >
      <div className="name">
        {" "}
        <p>{user.nom_user}</p>
        <AiOutlineUser size={"1.2em"} color="white" />
      </div>

      {isHovered && (
        <div className={"sub-nave"}>
          <ul>
            <li onClick={handleLogout}>Se déconnecter</li>
            <li>Mon Compte</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountMenu;
