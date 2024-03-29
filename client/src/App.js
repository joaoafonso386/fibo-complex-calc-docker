import React from "react";
import { BrowserRouter, Route, Link, Routes, Outlet } from "react-router-dom";
import ExtraPage from "./components/ExtraPage";
import Fibonacci from "./components/Fib";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Fib Calculator V2</h1>
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/extrapage">Extra Page</Link>
          <Routes>
          <Route path="/" element={<Fibonacci />} />
          <Route path="/extrapage" element={<ExtraPage />} />
          </Routes>
        </header>
      </div>
      <Outlet />
    </BrowserRouter>
  );
}

export default App;
