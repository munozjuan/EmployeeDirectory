import React from "react";
import "./App.css";
import Header from "./components/Header";
import EmployeesContainer from "./components/container/EmployeesContainer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <EmployeesContainer />
    </>
  );
};

export default App;
