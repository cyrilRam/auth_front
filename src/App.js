import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Info from "./pages/Info";
import Panier from "./pages/Panier";
import CreateUser from "./pages/CreateUser";
import Home from "./pages/Home";
import { initUserStore } from "./store/UserStore";

const App = () => {
  useEffect(() => {
    initUserStore();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/info" element={<Info />}></Route>
        <Route path="/panier" element={<Panier />}></Route>
        <Route path="/createUser" element={<CreateUser />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
