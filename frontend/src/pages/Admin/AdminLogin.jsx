import React, { useEffect, useState } from "react";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Scissors,
  ShieldCheck,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("admin@salonwala.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // DEMO ONLY:
  // backend ke baad ye remove ho jayega.
  useEffect(() => {
    const existingAccount = localStorage.getItem(
      "salonwalaAdminAccount"
    );

    if (!existingAccount) {
      localStorage.setItem(
        "salonwalaAdminAccount",
        JSON.stringify({
          name: "Administrator",
          email: "admin@salonwala.com",
          password: "Admin@123",
          role: "SUPER_ADMIN",
          status: "ACTIVE",
        })
      );
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const account = JSON.parse(
      localStorage.getItem("salonwalaAdminAccount")
    );

    if (!account) {
      setError("Admin account not found.");
      return;
    }

    if (
      email.trim().toLowerCase() !==
        account.email.toLowerCase() ||
      password !== account.password
    ) {
      setError("Invalid email or password.");
      return;
    }

    if (account.status !== "ACTIVE") {
      setError("Admin account is inactive.");
      return;
    }

    localStorage.setItem(
      "adminToken",
      "demo-admin-token"
    );

    localStorage.setItem(
      "adminUser",
      JSON.stringify({
        name: account.name,
        email: account.email,
        role: account.role,
      })
    );

    navigate("/admin/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f7ff] p-4">
      <div className="grid w-full max-w-[1000px] overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">
        {/* Left */}
        <div className="hidden bg-gradient-to-br from-violet-700 to-purple-500 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                <Scissors size={24} />
              </div>

              <div>
                <h1 className="text-2xl font-bold">
                  SalonWala
                </h1>

                <p className="text-sm text-violet-100">
                  Admin Panel
                </p>
              </div>
            </div>
          </div>

          <div>
            <ShieldCheck size={45} />

            <h2 className="mt-5 text-3xl font-bold leading-tight">
              Manage your complete
              <br />
              SalonWala platform.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-violet-100">
              Manage salons, customers, bookings,
              payments, services, offers, reviews and
              platform operations from one dashboard.
            </p>
          </div>

          <p className="text-xs text-violet-200">
            SalonWala Admin Portal
          </p>
        </div>

        {/* Right */}
        <div className="p-7 sm:p-10 lg:p-12">
          <div className="mx-auto max-w-[420px]">
            <div className="mb-8">
              <p className="text-sm font-semibold text-violet-600">
                ADMIN ACCESS
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Welcome Back
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Sign in to continue to your admin
                dashboard.
              </p>
            </div>

            {error && (
              <div className="mb-5 rounded-xl border border-rose-100 bg-rose-50 p-3 text-sm font-medium text-rose-600">
                {error}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    placeholder="admin@salonwala.com"
                    className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-violet-500"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-700">
                    Password
                  </label>

                  <Link
                    to="/admin/forgot-password"
                    className="text-xs font-semibold text-violet-600 hover:text-violet-700"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <div className="relative">
                  <LockKeyhole
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    placeholder="Enter password"
                    className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-12 text-sm outline-none transition focus:border-violet-500"
                    required
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-violet-600 py-3.5 text-sm font-bold text-white transition hover:bg-violet-700"
              >
                Sign In to Admin
              </button>
            </form>

            <div className="mt-6 rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-500">
                Frontend Demo Credentials
              </p>

              <p className="mt-2 text-xs text-slate-600">
                Email: admin@salonwala.com
              </p>

              <p className="mt-1 text-xs text-slate-600">
                Password: Admin@123
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;