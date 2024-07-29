import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPages from "../pages/LoginPage";
import RegisterPages from "../pages/RegisterPage";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminComponent from "../components/AdminComponent";
import CustomerComponent from "../components/CustomerComponent";
import SidebarComponent from "../components/Sidebar/SidebarComponent";
import NotFoundComponent from "../components/NotfoundComponent";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPages />} />
      <Route path="/sidebar" element={<SidebarComponent />} />
      <Route path="/login" element={<LoginPages />} />
      {/* Shared page for admin and member */}
      <Route element={<ProtectedRoute allowedRoles={["admin", "member"]} />}>
        <Route path="/admin-dashboard" element={<AdminComponent />} />
      </Route>

      {/* Protected route for customer only */}
      <Route element={<ProtectedRoute allowedRoles={["customer"]} />}>
        <Route path="/customer-dashboard" element={<CustomerComponent />} />
      </Route>
      
      <Route path="/404" element={<NotFoundComponent />} />
      <Route path="*" element={<Navigate to="/404" />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
