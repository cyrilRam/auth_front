import React, { useEffect } from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  //   const { user, setUser } = useUserStore();

  //   useEffect(() => {
  //     console.log(user);
  //   }, [user]);
  return (
    <div>
      <Navigation />
      <h1>HOME</h1>
    </div>
  );
};

export default Home;
