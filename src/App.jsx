import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import AuthProvider from "./context/AuthContext"; 

import "./styles/globals.css";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter> {/* ✅ Only One Router */}
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
