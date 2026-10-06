import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AdminLayout from "./AdminLayout";
import AdminDashboard from "./AdminDashboard";
import AdminSalons from "./AdminSalons";
import AdminCustomers from "./AdminCustomers";
import AdminBookings from "./AdminBookings";
import AdminServices from "./AdminServices";
import AdminOffers from "./AdminOffers";
import AdminReviews from "./AdminReviews";
import AdminPayments from "./AdminPayments";
import AdminReports from "./AdminReports";
import AdminNotifications from "./AdminNotifications";
import AdminSupport from "./AdminSupport";
import AdminSettings from "./AdminSettings";

import AdminLogin from "./AdminLogin";
import AdminForgotPassword from "./AdminForgotPassword";
import AdminResetPassword from "./AdminResetPassword";

const AdminProtected = ({ children }) => {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    return (
      <Navigate
        to="/admin/login"
        replace
      />
    );
  }

  return children;
};

const AdminRoutes = () => {
  const token = localStorage.getItem("adminToken");

  return (
    <Routes>
      {/* ADMIN AUTH */}
      <Route
        path="login"
        element={
          token ? (
            <Navigate
              to="/admin/dashboard"
              replace
            />
          ) : (
            <AdminLogin />
          )
        }
      />

      <Route
        path="forgot-password"
        element={<AdminForgotPassword />}
      />

      <Route
        path="reset-password"
        element={<AdminResetPassword />}
      />

      {/* /admin */}
      <Route
        index
        element={
          <Navigate
            to={
              token
                ? "dashboard"
                : "login"
            }
            replace
          />
        }
      />

      {/* PROTECTED ADMIN PANEL */}
      <Route
        element={
          <AdminProtected>
            <AdminLayout />
          </AdminProtected>
        }
      >
        <Route
          path="dashboard"
          element={<AdminDashboard />}
        />

        <Route
          path="salons"
          element={<AdminSalons />}
        />

        <Route
          path="customers"
          element={<AdminCustomers />}
        />

        <Route
          path="bookings"
          element={<AdminBookings />}
        />

        <Route
          path="services"
          element={<AdminServices />}
        />

        <Route
          path="offers"
          element={<AdminOffers />}
        />

        <Route
          path="reviews"
          element={<AdminReviews />}
        />

        <Route
          path="payments"
          element={<AdminPayments />}
        />

        <Route
          path="reports"
          element={<AdminReports />}
        />

        <Route
          path="notifications"
          element={<AdminNotifications />}
        />

        <Route
          path="support"
          element={<AdminSupport />}
        />

        <Route
          path="settings"
          element={<AdminSettings />}
        />
      </Route>

      <Route
        path="*"
        element={
          <Navigate
            to={
              token
                ? "dashboard"
                : "login"
            }
            replace
          />
        }
      />
    </Routes>
  );
};

export default AdminRoutes;