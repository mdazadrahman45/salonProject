import React, { useEffect, useState } from "react";
import {
  Settings,
  Save,
  Store,
  CalendarDays,
  CreditCard,
  Bell,
  ShieldCheck,
  IndianRupee,
  Clock3,
  Mail,
  Smartphone,
  LockKeyhole,
  Percent,
  CheckCircle2,
  RotateCcw,
} from "lucide-react";

const DEFAULT_SETTINGS = {
  platformName: "SalonWala",
  supportEmail: "support@salonwala.com",
  supportMobile: "9876543210",
  currency: "INR",
  timezone: "Asia/Kolkata",

  commission: 10,
  taxPercentage: 18,
  minimumBookingAmount: 100,
  cancellationHours: 2,

  autoApproveBooking: false,
  allowCancellation: true,
  allowReschedule: true,
  allowCashPayment: true,
  allowOnlinePayment: true,
  allowWalletPayment: true,

  customerNotifications: true,
  partnerNotifications: true,
  emailNotifications: true,
  smsNotifications: false,

  salonAutoApproval: false,
  reviewModeration: true,
  maintenanceMode: false,
};

const AdminSettings = () => {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(
        "salonwalaAdminSettings"
      );

      if (stored) {
        setSettings({
          ...DEFAULT_SETTINGS,
          ...JSON.parse(stored),
        });
      }
    } catch (error) {
      console.error("Unable to load settings", error);
    }
  }, []);

  const updateSetting = (name, value) => {
    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSaved(false);
  };

  const saveSettings = () => {
    localStorage.setItem(
      "salonwalaAdminSettings",
      JSON.stringify(settings)
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);

    localStorage.removeItem("salonwalaAdminSettings");

    setSaved(false);
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Heading */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium text-violet-600">
            System Configuration
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900">
            Settings
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage SalonWala platform preferences and business
            configuration.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={resetSettings}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            <RotateCcw size={17} />
            Reset
          </button>

          <button
            onClick={saveSettings}
            className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700"
          >
            <Save size={17} />
            Save Settings
          </button>
        </div>
      </div>

      {/* Saved Message */}
      {saved && (
        <div className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 px-5 py-4">
          <CheckCircle2
            size={20}
            className="text-emerald-600"
          />

          <div>
            <p className="text-sm font-semibold text-emerald-700">
              Settings saved successfully
            </p>

            <p className="mt-0.5 text-xs text-emerald-600">
              Your frontend configuration has been saved.
            </p>
          </div>
        </div>
      )}

      {/* General Settings */}
      <SettingsCard
        icon={Store}
        title="General Settings"
        description="Basic platform information and support details."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <InputBox
            label="Platform Name"
            value={settings.platformName}
            onChange={(value) =>
              updateSetting("platformName", value)
            }
            placeholder="SalonWala"
          />

          <InputBox
            label="Support Email"
            type="email"
            icon={Mail}
            value={settings.supportEmail}
            onChange={(value) =>
              updateSetting("supportEmail", value)
            }
            placeholder="support@salonwala.com"
          />

          <InputBox
            label="Support Mobile"
            icon={Smartphone}
            value={settings.supportMobile}
            onChange={(value) =>
              updateSetting("supportMobile", value)
            }
            placeholder="9876543210"
          />

          <SelectBox
            label="Currency"
            value={settings.currency}
            onChange={(value) =>
              updateSetting("currency", value)
            }
            options={[
              {
                value: "INR",
                label: "INR - Indian Rupee",
              },
              {
                value: "USD",
                label: "USD - US Dollar",
              },
            ]}
          />

          <SelectBox
            label="Timezone"
            value={settings.timezone}
            onChange={(value) =>
              updateSetting("timezone", value)
            }
            options={[
              {
                value: "Asia/Kolkata",
                label: "Asia/Kolkata (IST)",
              },
              {
                value: "UTC",
                label: "UTC",
              },
            ]}
          />
        </div>
      </SettingsCard>

      {/* Finance Settings */}
      <SettingsCard
        icon={CreditCard}
        title="Payment & Commission"
        description="Configure platform commission, tax and payment options."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <NumberBox
            label="Platform Commission"
            value={settings.commission}
            suffix="%"
            icon={Percent}
            onChange={(value) =>
              updateSetting("commission", value)
            }
          />

          <NumberBox
            label="Tax / GST"
            value={settings.taxPercentage}
            suffix="%"
            icon={Percent}
            onChange={(value) =>
              updateSetting("taxPercentage", value)
            }
          />

          <NumberBox
            label="Minimum Booking"
            value={settings.minimumBookingAmount}
            prefix="₹"
            icon={IndianRupee}
            onChange={(value) =>
              updateSetting(
                "minimumBookingAmount",
                value
              )
            }
          />

          <NumberBox
            label="Cancellation Window"
            value={settings.cancellationHours}
            suffix=" hrs"
            icon={Clock3}
            onChange={(value) =>
              updateSetting(
                "cancellationHours",
                value
              )
            }
          />
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <ToggleRow
            title="Cash Payment"
            description="Allow cash payment at salon."
            checked={settings.allowCashPayment}
            onChange={(value) =>
              updateSetting(
                "allowCashPayment",
                value
              )
            }
          />

          <ToggleRow
            title="Online Payment"
            description="Allow UPI/card payments."
            checked={settings.allowOnlinePayment}
            onChange={(value) =>
              updateSetting(
                "allowOnlinePayment",
                value
              )
            }
          />

          <ToggleRow
            title="Wallet Payment"
            description="Allow SalonWala wallet."
            checked={settings.allowWalletPayment}
            onChange={(value) =>
              updateSetting(
                "allowWalletPayment",
                value
              )
            }
          />
        </div>
      </SettingsCard>

      {/* Booking Settings */}
      <SettingsCard
        icon={CalendarDays}
        title="Booking Settings"
        description="Control how bookings are created, cancelled and rescheduled."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <ToggleRow
            title="Auto Approve Booking"
            description="Automatically confirm new bookings."
            checked={settings.autoApproveBooking}
            onChange={(value) =>
              updateSetting(
                "autoApproveBooking",
                value
              )
            }
          />

          <ToggleRow
            title="Allow Cancellation"
            description="Customers can cancel bookings."
            checked={settings.allowCancellation}
            onChange={(value) =>
              updateSetting(
                "allowCancellation",
                value
              )
            }
          />

          <ToggleRow
            title="Allow Reschedule"
            description="Customers can change booking time."
            checked={settings.allowReschedule}
            onChange={(value) =>
              updateSetting(
                "allowReschedule",
                value
              )
            }
          />
        </div>
      </SettingsCard>

      {/* Notification Settings */}
      <SettingsCard
        icon={Bell}
        title="Notification Settings"
        description="Configure communication preferences across the platform."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <ToggleRow
            title="Customer Notifications"
            description="Send booking, payment and offer alerts to customers."
            checked={
              settings.customerNotifications
            }
            onChange={(value) =>
              updateSetting(
                "customerNotifications",
                value
              )
            }
          />

          <ToggleRow
            title="Partner Notifications"
            description="Send booking and business alerts to salon partners."
            checked={
              settings.partnerNotifications
            }
            onChange={(value) =>
              updateSetting(
                "partnerNotifications",
                value
              )
            }
          />

          <ToggleRow
            title="Email Notifications"
            description="Allow automated email notifications."
            checked={
              settings.emailNotifications
            }
            onChange={(value) =>
              updateSetting(
                "emailNotifications",
                value
              )
            }
          />

          <ToggleRow
            title="SMS Notifications"
            description="Allow SMS alerts for important events."
            checked={settings.smsNotifications}
            onChange={(value) =>
              updateSetting(
                "smsNotifications",
                value
              )
            }
          />
        </div>
      </SettingsCard>

      {/* Security / Moderation */}
      <SettingsCard
        icon={ShieldCheck}
        title="Approval & Moderation"
        description="Control salon approval and platform moderation."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <ToggleRow
            title="Salon Auto Approval"
            description="Automatically activate newly registered salons."
            checked={settings.salonAutoApproval}
            onChange={(value) =>
              updateSetting(
                "salonAutoApproval",
                value
              )
            }
          />

          <ToggleRow
            title="Review Moderation"
            description="Reported reviews require admin review."
            checked={settings.reviewModeration}
            onChange={(value) =>
              updateSetting(
                "reviewModeration",
                value
              )
            }
          />

          <ToggleRow
            title="Maintenance Mode"
            description="Temporarily restrict public platform access."
            checked={settings.maintenanceMode}
            dangerous
            onChange={(value) =>
              updateSetting(
                "maintenanceMode",
                value
              )
            }
          />
        </div>
      </SettingsCard>

      {/* Security Info */}
      <div className="rounded-2xl border border-violet-100 bg-violet-50/50 p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
            <LockKeyhole size={20} />
          </div>

          <div>
            <h3 className="font-bold text-slate-900">
              Backend integration later
            </h3>

            <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-500">
              Abhi ye settings frontend demo ke liye
              browser localStorage me save ho rahi hain.
              Backend connect hone ke baad ye settings
              database se load/save hongi aur actual
              customer, partner, booking aur payment
              behaviour control karengi.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Save */}
      <div className="flex justify-end">
        <button
          onClick={saveSettings}
          className="flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700"
        >
          <Save size={17} />
          Save All Settings
        </button>
      </div>
    </div>
  );
};

const SettingsCard = ({
  icon: Icon,
  title,
  description,
  children,
}) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-4 border-b border-slate-100 px-6 py-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
          <Icon size={20} />
        </div>

        <div>
          <h2 className="font-bold text-slate-900">
            {title}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {description}
          </p>
        </div>
      </div>

      <div className="p-6">{children}</div>
    </div>
  );
};

const InputBox = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  icon: Icon,
}) => (
  <div>
    <label className="mb-2 block text-sm font-semibold text-slate-700">
      {label}
    </label>

    <div className="relative">
      {Icon && (
        <Icon
          size={17}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
        />
      )}

      <input
        type={type}
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
        className={`w-full rounded-xl border border-slate-200 py-3 text-sm text-slate-700 outline-none transition focus:border-violet-400 ${
          Icon ? "pl-11 pr-4" : "px-4"
        }`}
      />
    </div>
  </div>
);

const SelectBox = ({
  label,
  value,
  onChange,
  options,
}) => (
  <div>
    <label className="mb-2 block text-sm font-semibold text-slate-700">
      {label}
    </label>

    <select
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-violet-400"
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const NumberBox = ({
  label,
  value,
  onChange,
  prefix,
  suffix,
  icon: Icon,
}) => (
  <div>
    <label className="mb-2 block text-sm font-semibold text-slate-700">
      {label}
    </label>

    <div className="relative">
      {Icon && (
        <Icon
          size={17}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-violet-500"
        />
      )}

      {prefix && (
        <span className="absolute left-10 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-500">
          {prefix}
        </span>
      )}

      <input
        type="number"
        min="0"
        value={value}
        onChange={(e) =>
          onChange(Number(e.target.value))
        }
        className={`w-full rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-800 outline-none transition focus:border-violet-400 ${
          prefix ? "pl-16 pr-12" : "pl-11 pr-12"
        }`}
      />

      {suffix && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
          {suffix}
        </span>
      )}
    </div>
  </div>
);

const ToggleRow = ({
  title,
  description,
  checked,
  onChange,
  dangerous = false,
}) => (
  <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
    <div>
      <p className="text-sm font-semibold text-slate-800">
        {title}
      </p>

      <p className="mt-1 text-xs leading-5 text-slate-500">
        {description}
      </p>
    </div>

    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative h-7 w-12 shrink-0 rounded-full transition ${
        checked
          ? dangerous
            ? "bg-rose-500"
            : "bg-violet-600"
          : "bg-slate-300"
      }`}
    >
      <span
        className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${
          checked ? "left-6" : "left-1"
        }`}
      />
    </button>
  </div>
);

export default AdminSettings;