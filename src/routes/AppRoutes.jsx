import { Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";  // ✅ Ensure correct path
import Dashboard from "../pages/Dashboard/UsersList";  // ✅ Ensure correct path

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
