import Register from "./components/register";
import Navbar from "./components/navbar";
import Users from "./components/users";
import User from "./components/user";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import React from "react";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-3 ">
        <Routes>
          <Route exact path={"/users/:id"} element={<User />} />
          <Route exact path={"/users"} element={<Users />} />
          <Route exact path={"/login"} element={<Login />} />
          <Route exact path={"/register"} element={<Register />} />
          <Route exact path={"/"} element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
