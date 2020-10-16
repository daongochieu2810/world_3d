import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";

export default function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}
