import React, { useState } from "react";
import {
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  Scissors,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminResetPassword = () => {
  const navigate = useNavigate();

  const [newPassword, setNewPassword] =
    useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] =
    useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleReset = (e) => {
    e.preventDefault();
    setError("");

    const resetEmail = localStorage.getItem(
      "adminResetEmail"
    );

    const account = JSON.parse(
      localStorage.getItem("salonwalaAdminAccount")
    );

    if (!resetEmail || !account) {
      setError(
        "Password reset session expired. Please try again."
      );
      return;
    }

    if (newPassword.length < 8) {
      setError(
        "Password must contain at least 8 characters."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setError(
        "New password and confirm password do not match."
      );
      return;
    }

    const updatedAccount = {
      ...account,
      password: newPassword,
    };

    localStorage.setItem(
      "salonwalaAdminAccount",
      JSON.stringify(updatedAccount)
    );

    localStorage.removeItem("adminResetEmail");
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");

    setSuccess(true);

    setTimeout(() => {
      navigate("/admin/login");
    }, 1800);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f7ff] p-4">
      <div className="w-full max-w-[500px] rounded-3xl bg-white p-8 shadow-xl sm:p-10">
        <div className="mb-7">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 text-white">
            <Scissors size={22} />
          </div>

          <p className="text-sm font-semibold text-violet-600">
            ADMIN SECURITY
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Create New Password
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Enter a new secure password for your admin
            account.
          </p>
        </div>

        {error && (
          <div className="mb-5 rounded-xl border border-rose-100 bg-rose-50 p-3 text-sm text-rose-600">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-5 flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50 p-4">
            <CheckCircle2
              size={20}
              className="text-emerald-600"
            />

            <div>
              <p className="text-sm font-semibold text-emerald-700">
                Password changed successfully.
              </p>

              <p className="mt-1 text-xs text-emerald-600">
                Redirecting to admin login...
              </p>
            </div>
          </div>
        )}

        {!success && (
          <form
            onSubmit={handleReset}
            className="space-y-5"
          >
            <PasswordBox
              label="New Password"
              value={newPassword}
              setValue={setNewPassword}
              show={showNew}
              setShow={setShowNew}
            />

            <PasswordBox
              label="Confirm New Password"
              value={confirmPassword}
              setValue={setConfirmPassword}
              show={showConfirm}
              setShow={setShowConfirm}
            />

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-500">
                Password must be at least 8
                characters.
              </p>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-violet-600 py-3.5 text-sm font-bold text-white hover:bg-violet-700"
            >
              Reset Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

const PasswordBox = ({
  label,
  value,
  setValue,
  show,
  setShow,
}) => (
  <div>
    <label className="mb-2 block text-sm font-semibold text-slate-700">
      {label}
    </label>

    <div className="relative">
      <LockKeyhole
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={(e) =>
          setValue(e.target.value)
        }
        placeholder={label}
        className="w-full rounded-xl border border-slate-200 py-3.5 pl-11 pr-12 text-sm outline-none focus:border-violet-500"
        required
      />

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
      >
        {show ? (
          <EyeOff size={18} />
        ) : (
          <Eye size={18} />
        )}
      </button>
    </div>
  </div>
);

export default AdminResetPassword;