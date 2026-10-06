import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Phone,
  Scissors,
  User,
} from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [error, setError] =
    useState("");

  const [formData, setFormData] =
    useState({
      fullName: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    });


  const handleChange = (e) => {
    const {
      name,
      value,
    } = e.target;

    let finalValue = value;

    if (name === "mobile") {
      finalValue = value
        .replace(/\D/g, "")
        .slice(0, 10);
    }

    setFormData((current) => ({
      ...current,
      [name]: finalValue,
    }));

    setError("");
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const fullName =
      formData.fullName.trim();

    const email =
      formData.email
        .trim()
        .toLowerCase();

    const mobile =
      formData.mobile.trim();

    const password =
      formData.password;

    const confirmPassword =
      formData.confirmPassword;


    if (!fullName) {
      setError(
        "Please enter your full name."
      );

      return;
    }


    if (!email) {
      setError(
        "Please enter your email address."
      );

      return;
    }


    if (mobile.length !== 10) {
      setError(
        "Please enter a valid 10 digit mobile number."
      );

      return;
    }


    if (password.length < 6) {
      setError(
        "Password must be at least 6 characters."
      );

      return;
    }


    if (
      password !==
      confirmPassword
    ) {
      setError(
        "Password and confirm password do not match."
      );

      return;
    }


    /*
      TEMP FRONTEND ACCOUNT

      Backend me baad me:
      POST /api/auth/register
      karenge.
    */

    const account = {
      fullName,
      email,
      mobile,
      password,
      role: "CUSTOMER",
    };


    /*
      Login ke liye temporary
      registered account save
    */

    localStorage.setItem(
      "salonwalaRegisteredUser",
      JSON.stringify(account)
    );


    /*
      Logged-in user data
    */

    const loggedInUser = {
      fullName,
      email,
      mobile,
      role: "CUSTOMER",
    };

    localStorage.setItem(
      "user",
      JSON.stringify(
        loggedInUser
      )
    );


    /*
      DEMO TOKEN
    */

    localStorage.setItem(
      "token",
      "demo-customer-token"
    );


    /*
      SAME DATA PROFILE ME
    */

    localStorage.setItem(
      "customerProfile",
      JSON.stringify({
        fullName,
        email,
        mobile,

        gender: "",
        dob: "",

        address: "",
        city: "",
        state: "",
        pincode: "",
      })
    );


    /*
      LANDING PAGE
    */

    navigate("/");
  };


  return (
    <div className="min-h-screen bg-[#fff9fa]">

      {/* =================================
          TOP HEADER
      ================================= */}

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
            hover:text-[#ff3d73]
          "
        >
          <ArrowLeft size={15} />

          Back to Home
        </Link>

      </header>


      {/* =================================
          PAGE
      ================================= */}

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
          lg:grid-cols-[0.9fr_1.1fr]
          lg:px-8
        "
      >

        {/* =================================
            LEFT INFO
        ================================= */}

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
            Join SalonWala
          </span>


          <h1
            className="
              mt-5
              max-w-[500px]
              text-[43px]
              font-bold
              leading-[1.1]
              tracking-[-1px]
              text-gray-900
            "
          >
            Create your account and book your{" "}

            <span className="text-[#ff3d73]">
              favourite salons.
            </span>
          </h1>


          <p
            className="
              mt-5
              max-w-[460px]
              text-[13px]
              leading-7
              text-gray-500
            "
          >
            One account gives you access to
            salon discovery, bookings,
            favourites, wallet, offers and
            your personal customer profile.
          </p>


          <div
            className="
              mt-8
              space-y-3
            "
          >
            {[
              "Discover salons near you",
              "Book your preferred services",
              "Save favourite salons",
              "Manage all your bookings",
              "Get personalised offers",
            ].map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-3
                  text-[11px]
                  font-medium
                  text-gray-600
                "
              >
                <span
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    bg-[#fff0f4]
                    text-[10px]
                    font-bold
                    text-[#ff3d73]
                  "
                >
                  ✓
                </span>

                {item}
              </div>
            ))}
          </div>

        </section>


        {/* =================================
            SIGNUP CARD
        ================================= */}

        <section
          className="
            mx-auto
            w-full
            max-w-[520px]
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
              Create Account
            </h2>

            <p
              className="
                mt-2
                text-[11px]
                leading-5
                text-gray-400
              "
            >
              Enter your details to create
              your SalonWala customer account.
            </p>
          </div>


          <form
            onSubmit={handleSubmit}
            className="mt-7"
          >

            {/* FULL NAME */}

            <div>
              <label className="signup-label">
                Full Name
              </label>

              <div className="relative">

                <User
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
                  type="text"
                  name="fullName"
                  value={
                    formData.fullName
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Enter your full name"
                  className="signup-input pl-11"
                />

              </div>
            </div>


            {/* EMAIL */}

            <div className="mt-4">

              <label className="signup-label">
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
                  value={
                    formData.email
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Enter your email"
                  className="signup-input pl-11"
                />

              </div>
            </div>


            {/* MOBILE */}

            <div className="mt-4">

              <label className="signup-label">
                Mobile Number
              </label>

              <div className="relative">

                <Phone
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
                  type="tel"
                  name="mobile"
                  value={
                    formData.mobile
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="10 digit mobile number"
                  className="signup-input pl-11"
                />

              </div>
            </div>


            {/* PASSWORD */}

            <div className="mt-4">

              <label className="signup-label">
                Password
              </label>

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
                  onChange={
                    handleChange
                  }
                  placeholder="Minimum 6 characters"
                  className="signup-input pl-11 pr-12"
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


            {/* CONFIRM PASSWORD */}

            <div className="mt-4">

              <label className="signup-label">
                Confirm Password
              </label>

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
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  value={
                    formData.confirmPassword
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Re-enter your password"
                  className="signup-input pl-11 pr-12"
                />


                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
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
                  {showConfirmPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>

              </div>
            </div>


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


            {/* TERMS */}

            <p
              className="
                mt-4
                text-[9px]
                leading-5
                text-gray-400
              "
            >
              By creating an account you agree
              to SalonWala's{" "}

              <Link
                to="/terms"
                className="
                  font-medium
                  text-[#ff3d73]
                "
              >
                Terms & Conditions
              </Link>

              {" "}and{" "}

              <Link
                to="/privacy-policy"
                className="
                  font-medium
                  text-[#ff3d73]
                "
              >
                Privacy Policy
              </Link>
              .
            </p>


            {/* CREATE ACCOUNT */}

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
              Create Account

              <ArrowRight size={15} />
            </button>

          </form>


          {/* LOGIN */}

          <p
            className="
              mt-7
              text-center
              text-[10px]
              text-gray-500
            "
          >
            Already have an account?{" "}

            <Link
              to="/login"
              className="
                font-semibold
                text-[#ff3d73]
              "
            >
              Login
            </Link>
          </p>

        </section>

      </main>


      <style>{`
        .signup-label {
          display: block;
          margin-bottom: 7px;
          font-size: 10px;
          font-weight: 600;
          color: #374151;
        }

        .signup-input {
          width: 100%;
          height: 46px;
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

        .signup-input::placeholder {
          color: #c2c5ca;
        }

        .signup-input:focus {
          border-color: #ff9ab6;
          box-shadow: 0 0 0 4px rgba(255,61,115,0.06);
        }
      `}</style>

    </div>
  );
};

export default Signup;