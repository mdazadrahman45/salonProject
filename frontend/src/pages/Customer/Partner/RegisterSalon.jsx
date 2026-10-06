import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  MapPin,
  Scissors,
  Store,
  User,
} from "lucide-react";

const servicesList = [
  "Haircut",
  "Beard Trim",
  "Hair Color",
  "Facial",
  "Massage",
  "Waxing",
  "Nail Care",
  "Makeup",
];

const RegisterSalon = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    partnerType: "SALON_OWNER",

    ownerName: "",
    email: "",
    mobile: "",
    password: "",

    businessName: "",
    businessType: "Unisex Salon",

    address: "",
    city: "Bhopal",
    state: "Madhya Pradesh",
    pincode: "",

    services: [],

    openTime: "09:00",
    closeTime: "21:00",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
  };

  const toggleService = (service) => {
    setForm((current) => ({
      ...current,

      services: current.services.includes(service)
        ? current.services.filter(
            (item) => item !== service
          )
        : [...current.services, service],
    }));
  };

  const nextStep = () => {
    if (step === 1) {
      if (
        !form.ownerName ||
        !form.email ||
        !form.mobile ||
        !form.password
      ) {
        setError(
          "Please complete owner/account details."
        );
        return;
      }
    }

    if (step === 2) {
      if (
        !form.businessName ||
        !form.address ||
        !form.pincode
      ) {
        setError(
          "Please complete your business details."
        );
        return;
      }
    }

    setError("");
    setStep((current) => current + 1);
  };

  const previousStep = () => {
    setError("");
    setStep((current) => current - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.services.length === 0) {
      setError(
        "Please select at least one service."
      );
      return;
    }

    const partner = {
      ...form,
      role: "PARTNER",
      status: "ACTIVE",
    };

    localStorage.setItem(
      "salonwalaPartnerAccount",
      JSON.stringify(partner)
    );

    localStorage.setItem(
      "partnerUser",
      JSON.stringify({
        ownerName: form.ownerName,
        businessName: form.businessName,
        email: form.email,
        mobile: form.mobile,
        partnerType: form.partnerType,
      })
    );

    localStorage.setItem(
      "partnerToken",
      "demo-partner-token"
    );

    navigate("/partner/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#fff9fa]">
      <header className="flex h-[75px] items-center justify-between border-b border-gray-100 bg-white px-8">
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff3d73] text-white">
            <Scissors size={20} />
          </div>

          <h1 className="text-[22px] font-bold">
            Salon
            <span className="text-[#ff3d73]">
              Wala
            </span>
          </h1>
        </Link>

        <div className="flex items-center gap-5">
          <p className="hidden text-[10px] text-gray-400 sm:block">
            Already registered?
          </p>

          <Link
            to="/partner/login"
            className="rounded-xl border border-pink-200 px-4 py-2.5 text-[10px] font-semibold text-[#ff3d73]"
          >
            Partner Login
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[1050px] px-5 py-10">
        <Link
          to="/"
          className="mb-5 inline-flex items-center gap-2 text-[10px] text-gray-500"
        >
          <ArrowLeft size={14} />
          Back to SalonWala
        </Link>

        <div className="text-center">
          <span className="rounded-full bg-[#fff0f4] px-4 py-2 text-[10px] font-semibold text-[#ff3d73]">
            SalonWala Partner
          </span>

          <h1 className="mt-4 text-[31px] font-bold text-gray-900">
            Grow Your Business with SalonWala
          </h1>

          <p className="mt-2 text-[11px] text-gray-400">
            Register your salon or start as an
            independent barber.
          </p>
        </div>

        <div className="mx-auto mt-7 flex max-w-[650px] items-center">
          {[1, 2, 3].map((item) => (
            <React.Fragment key={item}>
              <div
                className={`
                  flex h-9 w-9 shrink-0 items-center justify-center
                  rounded-full text-[11px] font-bold
                  ${
                    step >= item
                      ? "bg-[#ff3d73] text-white"
                      : "bg-gray-100 text-gray-400"
                  }
                `}
              >
                {step > item ? (
                  <Check size={15} />
                ) : (
                  item
                )}
              </div>

              {item !== 3 && (
                <div
                  className={`h-[2px] flex-1 ${
                    step > item
                      ? "bg-[#ff3d73]"
                      : "bg-gray-200"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 max-w-[760px] rounded-[24px] border border-gray-100 bg-white p-7 shadow-sm"
        >
          {step === 1 && (
            <>
              <h2 className="text-[18px] font-bold">
                Owner Account
              </h2>

              <p className="mt-1 text-[10px] text-gray-400">
                Tell us who is registering.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setForm({
                      ...form,
                      partnerType:
                        "SALON_OWNER",
                    })
                  }
                  className={`rounded-2xl border p-5 text-left ${
                    form.partnerType ===
                    "SALON_OWNER"
                      ? "border-[#ff3d73] bg-[#fff6f8]"
                      : "border-gray-200"
                  }`}
                >
                  <Store
                    size={23}
                    className="text-[#ff3d73]"
                  />

                  <h3 className="mt-3 text-[12px] font-bold">
                    Salon Owner
                  </h3>

                  <p className="mt-1 text-[9px] leading-5 text-gray-400">
                    Register a salon with staff
                    and multiple services.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setForm({
                      ...form,
                      partnerType:
                        "INDEPENDENT_BARBER",
                    })
                  }
                  className={`rounded-2xl border p-5 text-left ${
                    form.partnerType ===
                    "INDEPENDENT_BARBER"
                      ? "border-[#ff3d73] bg-[#fff6f8]"
                      : "border-gray-200"
                  }`}
                >
                  <User
                    size={23}
                    className="text-[#ff3d73]"
                  />

                  <h3 className="mt-3 text-[12px] font-bold">
                    Independent Barber
                  </h3>

                  <p className="mt-1 text-[9px] leading-5 text-gray-400">
                    Work independently and manage
                    your own appointments.
                  </p>
                </button>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input
                  label="Full Name"
                  name="ownerName"
                  value={form.ownerName}
                  onChange={handleChange}
                  placeholder="Owner / barber name"
                />

                <Input
                  label="Mobile Number"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="10 digit mobile"
                />

                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Business email"
                />

                <Input
                  label="Create Password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Minimum 6 characters"
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-[18px] font-bold">
                Business Details
              </h2>

              <p className="mt-1 text-[10px] text-gray-400">
                Add your salon/business location.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input
                  label={
                    form.partnerType ===
                    "SALON_OWNER"
                      ? "Salon Name"
                      : "Business / Display Name"
                  }
                  name="businessName"
                  value={form.businessName}
                  onChange={handleChange}
                  placeholder="Enter business name"
                />

                <div>
                  <label className="partner-label">
                    Business Type
                  </label>

                  <select
                    name="businessType"
                    value={form.businessType}
                    onChange={handleChange}
                    className="partner-input"
                  >
                    <option>
                      Unisex Salon
                    </option>
                    <option>
                      Men's Salon
                    </option>
                    <option>
                      Women's Salon
                    </option>
                    <option>
                      Beauty Parlour
                    </option>
                    <option>
                      Independent Barber
                    </option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <Input
                    label="Full Address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Shop / area / street"
                  />
                </div>

                <Input
                  label="City"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                />

                <Input
                  label="State"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                />

                <Input
                  label="Pincode"
                  name="pincode"
                  value={form.pincode}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-[18px] font-bold">
                Services & Working Hours
              </h2>

              <p className="mt-1 text-[10px] text-gray-400">
                Select services you provide.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                {servicesList.map((service) => {
                  const selected =
                    form.services.includes(
                      service
                    );

                  return (
                    <button
                      type="button"
                      key={service}
                      onClick={() =>
                        toggleService(service)
                      }
                      className={`rounded-xl border p-3 text-[10px] font-semibold ${
                        selected
                          ? "border-[#ff3d73] bg-[#fff0f4] text-[#ff3d73]"
                          : "border-gray-200 text-gray-600"
                      }`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <label className="partner-label">
                    Opening Time
                  </label>

                  <div className="relative">
                    <Clock3
                      size={15}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="time"
                      name="openTime"
                      value={form.openTime}
                      onChange={handleChange}
                      className="partner-input pl-11"
                    />
                  </div>
                </div>

                <div>
                  <label className="partner-label">
                    Closing Time
                  </label>

                  <input
                    type="time"
                    name="closeTime"
                    value={form.closeTime}
                    onChange={handleChange}
                    className="partner-input"
                  />
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-[#fff7f9] p-4">
                <div className="flex gap-3">
                  <MapPin
                    size={18}
                    className="text-[#ff3d73]"
                  />

                  <div>
                    <p className="text-[11px] font-semibold">
                      {form.businessName ||
                        "Your Business"}
                    </p>

                    <p className="mt-1 text-[9px] text-gray-500">
                      {form.address},{" "}
                      {form.city},{" "}
                      {form.state}{" "}
                      {form.pincode}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          {error && (
            <div className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-[10px] text-red-500">
              {error}
            </div>
          )}

          <div className="mt-7 flex justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={previousStep}
                className="rounded-xl border border-gray-200 px-5 py-3 text-[10px] font-semibold"
              >
                Back
              </button>
            ) : (
              <span />
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center gap-2 rounded-xl bg-[#ff3d73] px-6 py-3 text-[10px] font-semibold text-white"
              >
                Continue
                <ArrowRight size={14} />
              </button>
            ) : (
              <button
                type="submit"
                className="flex items-center gap-2 rounded-xl bg-[#ff3d73] px-6 py-3 text-[10px] font-semibold text-white"
              >
                Complete Registration
                <ArrowRight size={14} />
              </button>
            )}
          </div>
        </form>
      </main>

      <style>{`
        .partner-label {
          display:block;
          margin-bottom:7px;
          font-size:10px;
          font-weight:600;
          color:#4b5563;
        }

        .partner-input {
          width:100%;
          height:46px;
          border:1px solid #e5e7eb;
          border-radius:12px;
          padding-left:13px;
          padding-right:13px;
          outline:none;
          font-size:11px;
        }

        .partner-input:focus {
          border-color:#ff9ab6;
          box-shadow:0 0 0 4px rgba(255,61,115,.05);
        }
      `}</style>
    </div>
  );
};

const Input = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) => (
  <div>
    <label className="partner-label">
      {label}
    </label>

    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="partner-input"
    />
  </div>
);

export default RegisterSalon;