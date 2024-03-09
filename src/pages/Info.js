import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { useUserStore } from "./../store/UserStore";

const Info = () => {
  const [dataLoad, setDataLoad] = useState(false);
  const user = useUserStore((state) => state.user);

  return (
    <div>
      <Navigation />
      <h2>Dashboard</h2>
      {user && (
        <div>
          <p>Welcome, {user.nom_user}!</p>
          {/* Affichez d'autres informations de l'utilisateur ici */}
        </div>
      )}
    </div>
  );
};

export default Info;
