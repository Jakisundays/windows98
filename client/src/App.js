// import { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import TaskBar from "./components/TaskBar";
import "./App.css";
import Logged from "./pages/Logged";

function App() {
  return (
    <>
      <TaskBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Logged />} />
      </Routes>
    </>
  );
}

export default App;
