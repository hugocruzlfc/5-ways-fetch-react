import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import {
  Fetch,
  Home,
  Nav,
  Swr,
  ReactQuery,
  Axios,
  ReactFetchHook,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/swr"
          element={<Swr />}
        />
        <Route
          path="/fetch"
          element={<Fetch />}
        />
        <Route
          path="/react-query"
          element={<ReactQuery />}
        />
        <Route
          path="/axios"
          element={<Axios />}
        />
        <Route
          path="/react-fetch-hook"
          element={<ReactFetchHook />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
