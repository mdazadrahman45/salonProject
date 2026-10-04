import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Scissors,
  Store,
} from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const rememberEmail =
      localStorage.getItem("rememberEmail");

    if (rememberEmail) {
      setFormData((current) => ({
        ...current,
        email: rememberEmail,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = formData.email
      .trim()
      .toLowerCase();

    const password =
      formData.password.trim();

    if (!email) {
      setError(
        "Please enter your email address."
      );
      return;
    }

    if (!password) {
      setError(
        "Please enter your password."
      );
      return;
    }

    /*
      FRONTEND DEMO LOGIN

      Backend banne ke baad:
      POST /api/auth/login
      se replace karenge.
    */

    const savedAccount =
      localStorage.getItem(
        "salonwalaRegisteredUser"
      );

    if (!savedAccount) {
      setError(
        "Account not found. Please create your account first."
      );
      return;
    }

    let account;

    try {
      account = JSON.parse(savedAccount);
    } catch {
      setError(
        "Something went wrong. Please sign up again."
      );
      return;
    }

    if (
      account.email
        ?.toLowerCase() !== email
    ) {
      setError(
        "No account found with this email."
      );
      return;
    }

    if (
      account.password !== password
    ) {
      setError(
        "Incorrect password."
      );
      return;
    }

    const loggedInUser = {
      fullName: account.fullName,
      email: account.email,
      mobile: account.mobile,
      role: "CUSTOMER",
    };

    localStorage.setItem(
      "user",
      JSON.stringify(loggedInUser)
    );

    localStorage.setItem(
      "token",
      "demo-customer-token"
    );

    /*
      Profile page ko bhi same
      registered customer data milega.
    */

    const existingProfile =
      localStorage.getItem(
        "customerProfile"
      );

    if (!existingProfile) {
      localStorage.setItem(
        "customerProfile",
        JSON.stringify({
          fullName:
            account.fullName,
          email: account.email,
          mobile: account.mobile,
          gender: "",
          dob: "",
          address: "",
          city: "",
          state: "",
          pincode: "",
        })
      );
    }

    if (rememberMe) {
      localStorage.setItem(
        "rememberEmail",
        account.email
      );
    } else {
      localStorage.removeItem(
        "rememberEmail"
      );
    }

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#fff9fa]">

      {/* TOP */}

      <header
        className="
          flex
          h-[76px]
          items-center
          justify-between
          border-b
          border-gray-100
          bg-white
          px-6
          md:px-10
        "
      >
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-[#ff3d73]
              text-white
            "
          >
            <Scissors size={20} />
          </div>

          <h1 className="text-[22px] font-bold text-gray-900">
            Salon
            <span className="text-[#ff3d73]">
              Wala
            </span>
          </h1>
        </Link>

        <Link
          to="/"
          className="
            flex
            items-center
            gap-2
            text-[11px]
            font-medium
            text-gray-500
            transition
            hover:text-[#ff3d73]
          "
        >
          <ArrowLeft size={15} />
          Back to Home
        </Link>
      </header>


      {/* PAGE */}

      <main
        className="
          mx-auto
          grid
          min-h-[calc(100vh-76px)]
          max-w-[1200px]
          grid-cols-1
          items-center
          gap-12
          px-5
          py-10
          lg:grid-cols-2
          lg:px-8
        "
      >

        {/* LEFT */}

        <section className="hidden lg:block">
          <span
            className="
              inline-flex
              rounded-full
              bg-[#fff0f4]
              px-4
              py-2
              text-[10px]
              font-semibold
              text-[#ff3d73]
            "
          >
            Welcome Back
          </span>

          <h2
            className="
              mt-5
              max-w-[520px]
              text-[44px]
              font-bold
              leading-[1.1]
              tracking-[-1px]
              text-gray-900
            "
          >
            Your next salon appointment is only{" "}
            <span className="text-[#ff3d73]">
              a few clicks away.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-[470px]
              text-[13px]
              leading-7
              text-gray-500
            "
          >
            Login to manage bookings,
            favourite salons, wallet,
            notifications and your SalonWala
            customer profile.
          </p>

          <div
            className="
              mt-8
              max-w-[470px]
              rounded-[22px]
              bg-gradient-to-br
              from-[#30222a]
              to-[#603045]
              p-6
              text-white
            "
          >
            <Store
              size={24}
              className="text-[#ff779b]"
            />

            <h3 className="mt-4 text-[16px] font-bold">
              Own a Salon or Barber Shop?
            </h3>

            <p className="mt-2 text-[10px] leading-5 text-white/60">
              Register your business and
              start receiving SalonWala bookings.
            </p>

            <Link
              to="/business"
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-[#ff3d73]
                px-5
                py-3
                text-[10px]
                font-semibold
                text-white
              "
            >
              Add Your Salon
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>


        {/* LOGIN CARD */}

        <section
          className="
            mx-auto
            w-full
            max-w-[455px]
            rounded-[24px]
            border
            border-gray-100
            bg-white
            p-6
            shadow-[0_20px_60px_rgba(0,0,0,0.06)]
            sm:p-8
          "
        >
          <div>
            <h2 className="text-[27px] font-bold text-gray-900">
              Login
            </h2>

            <p className="mt-2 text-[11px] leading-5 text-gray-400">
              Enter your registered email and
              password to continue.
            </p>
          </div>


          <form
            onSubmit={handleSubmit}
            className="mt-7"
          >

            {/* EMAIL */}

            <div>
              <label className="auth-label">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={16}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                  "
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="auth-input pl-11"
                />
              </div>
            </div>


            {/* PASSWORD */}

            <div className="mt-5">
              <div
                className="
                  mb-2
                  flex
                  items-center
                  justify-between
                "
              >
                <label className="text-[10px] font-semibold text-gray-700">
                  Password
                </label>

                <button
                  type="button"
                  className="
                    text-[9px]
                    font-semibold
                    text-[#ff3d73]
                  "
                >
                  Forgot Password?
                </button>
              </div>

              <div className="relative">
                <LockKeyhole
                  size={16}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                  "
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  value={
                    formData.password
                  }
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="auth-input pl-11 pr-12"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                    hover:text-[#ff3d73]
                  "
                >
                  {showPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>
              </div>
            </div>


            {/* REMEMBER */}

            <label
              className="
                mt-4
                flex
                w-fit
                cursor-pointer
                items-center
                gap-2
                text-[10px]
                text-gray-500
              "
            >
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) =>
                  setRememberMe(
                    e.target.checked
                  )
                }
                className="accent-[#ff3d73]"
              />

              Remember me
            </label>


            {/* ERROR */}

            {error && (
              <div
                className="
                  mt-4
                  rounded-xl
                  border
                  border-red-100
                  bg-red-50
                  px-4
                  py-3
                  text-[10px]
                  text-red-600
                "
              >
                {error}
              </div>
            )}


            {/* SUBMIT */}

            <button
              type="submit"
              className="
                mt-6
                flex
                h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#ff3d73]
                text-[11px]
                font-semibold
                text-white
                shadow-lg
                shadow-pink-100
                transition
                hover:bg-[#eb2f64]
              "
            >
              Login
              <ArrowRight size={15} />
            </button>

          </form>


          {/* SIGNUP */}

          <p
            className="
              mt-7
              text-center
              text-[10px]
              text-gray-500
            "
          >
            Don't have an account?{" "}

            <Link
              to="/signup"
              className="
                font-semibold
                text-[#ff3d73]
              "
            >
              Sign Up
            </Link>
          </p>
        </section>

      </main>


      <style>{`
        .auth-label {
          display: block;
          margin-bottom: 8px;
          font-size: 10px;
          font-weight: 600;
          color: #374151;
        }

        .auth-input {
          width: 100%;
          height: 48px;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding-top: 0;
          padding-bottom: 0;
          padding-right: 16px;
          background: #ffffff;
          color: #374151;
          font-size: 11px;
          outline: none;
          transition: 0.2s;
        }

        .auth-input::placeholder {
          color: #c2c5ca;
        }

        .auth-input:focus {
          border-color: #ff9ab6;
          box-shadow: 0 0 0 4px rgba(255,61,115,0.06);
        }
      `}</style>
    </div>
  );
};

export default Login;