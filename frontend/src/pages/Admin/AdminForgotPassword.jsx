import React, { useState } from "react";
import {
  ArrowLeft,
  Mail,
  Scissors,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const AdminForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const account = JSON.parse(
      localStorage.getItem("salonwalaAdminAccount")
    );

    if (
      !account ||
      account.email.toLowerCase() !==
        email.trim().toLowerCase()
    ) {
      setError(
        "No admin account found with this email."
      );
      return;
    }

    localStorage.setItem(
      "adminResetEmail",
      account.email
    );

    navigate("/admin/reset-password");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f7ff] p-4">
      <div className="w-full max-w-[480px] rounded-3xl bg-white p-8 shadow-xl sm:p-10">
        <div className="mb-7">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 text-white">
            <Scissors size={22} />
          </div>

          <p className="text-sm font-semibold text-violet-600">
            PASSWORD RECOVERY
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Forgot Password?
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Enter your admin email address to continue
            with password reset.
          </p>
        </div>

        {error && (
          <div className="mb-5 rounded-xl border border-rose-100 bg-rose-50 p-3 text-sm text-rose-600">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Admin Email
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
                className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-4 text-sm outline-none focus:border-violet-500"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-violet-600 py-3.5 text-sm font-bold text-white hover:bg-violet-700"
          >
            Continue
          </button>
        </form>

        <Link
          to="/admin/login"
          className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-slate-500 hover:text-violet-600"
        >
          <ArrowLeft size={16} />
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default AdminForgotPassword;