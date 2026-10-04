import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Scissors,
} from "lucide-react";

const PartnerLogin = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [error, setError] =
    useState("");

  const [form, setForm] =
    useState({
      email: "",
      password: "",
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    const stored =
      localStorage.getItem(
        "salonwalaPartnerAccount"
      );

    if (!stored) {
      setError(
        "Partner account not found. Please register first."
      );
      return;
    }

    const account =
      JSON.parse(stored);

    if (
      account.email !==
        form.email.trim() ||
      account.password !==
        form.password
    ) {
      setError(
        "Invalid email or password."
      );
      return;
    }

    localStorage.setItem(
      "partnerUser",
      JSON.stringify({
        ownerName:
          account.ownerName,
        businessName:
          account.businessName,
        email: account.email,
        mobile: account.mobile,
        partnerType:
          account.partnerType,
      })
    );

    localStorage.setItem(
      "partnerToken",
      "demo-partner-token"
    );

    navigate(
      "/partner/dashboard"
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fff9fa] px-5">
      <div className="w-full max-w-[430px] rounded-[25px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,.06)]">
        <Link
          to="/business"
          className="flex items-center gap-2 text-[10px] text-gray-500"
        >
          <ArrowLeft size={14} />
          Back
        </Link>

        <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff3d73] text-white">
          <Scissors size={22} />
        </div>

        <h1 className="mt-5 text-[27px] font-bold">
          Partner Login
        </h1>

        <p className="mt-2 text-[10px] leading-5 text-gray-400">
          Login to manage your salon,
          services and appointments.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-7"
        >
          <label className="text-[10px] font-semibold">
            Email
          </label>

          <div className="relative mt-2">
            <Mail
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email:
                    e.target.value,
                })
              }
              className="h-12 w-full rounded-xl border border-gray-200 pl-11 pr-4 text-[11px] outline-none focus:border-pink-300"
              placeholder="Partner email"
            />
          </div>

          <label className="mt-5 block text-[10px] font-semibold">
            Password
          </label>

          <div className="relative mt-2">
            <LockKeyhole
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password:
                    e.target.value,
                })
              }
              className="h-12 w-full rounded-xl border border-gray-200 pl-11 pr-12 text-[11px] outline-none focus:border-pink-300"
              placeholder="Password"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? (
                <EyeOff size={16} />
              ) : (
                <Eye size={16} />
              )}
            </button>
          </div>

          {error && (
            <div className="mt-4 rounded-xl bg-red-50 p-3 text-[10px] text-red-500">
              {error}
            </div>
          )}

          <button className="mt-6 h-12 w-full rounded-xl bg-[#ff3d73] text-[11px] font-semibold text-white">
            Login to Dashboard
          </button>
        </form>

        <p className="mt-6 text-center text-[10px] text-gray-500">
          New partner?{" "}
          <Link
            to="/business"
            className="font-semibold text-[#ff3d73]"
          >
            Register Your Salon
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PartnerLogin;