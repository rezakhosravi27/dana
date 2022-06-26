import React from "react";
import InstallPwa from "./components/installPwa/InstallPwa";
import Signup from "./components/auth/Signup";
import Auth from './components/auth'; 
import Login from "./components/auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <InstallPwa />
        <Routes>
          <Route path="/" element={<Auth />}>
            <Route index element={<Login />} />
            <Route path="auth/signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
