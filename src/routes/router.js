import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoute from "../components/ProtectedRoute";
import CustomerComponent from "../components/CustomerComponent";
import NotFoundComponent from "../components/NotfoundComponent.jsx";
import CategoriesPage from "../pages/CategoriesPage.jsx";
import MemberPage from "../pages/MemberPage.jsx";
import DashboardPage from "../pages/DashboardPage.jsx";

const AppRouter = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Shared page for admin */}
      <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Route>

      {/* Shared page for member */}
      <Route element={<ProtectedRoute allowedRoles={["member"]} />}>
        <Route path="/member-dashboard" element={<MemberPage />} />
      </Route>

      {/* Protected route for customer only */}
      <Route element={<ProtectedRoute allowedRoles={["customer"]} />}>
        <Route path="/customer-dashboard" element={<CustomerComponent />} />
      </Route>

      {/* Catch-all for 404 errors */}
      <Route path="/404" element={<NotFoundComponent />} />
      <Route path="*" element={<Navigate to="/404" />} />

      {/* Redirect to login by default */}
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
