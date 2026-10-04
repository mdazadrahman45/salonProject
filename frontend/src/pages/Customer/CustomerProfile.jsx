import React, { useEffect, useState } from "react";

import {
  Bell,
  CalendarDays,
  Camera,
  CheckCircle2,
  Heart,
  Mail,
  MapPin,
  Pencil,
  Phone,
  Save,
  ShieldCheck,
  User,
  Wallet,
} from "lucide-react";

const defaultProfile = {
  fullName: "Priya Sharma",
  email: "priya@email.com",
  mobile: "9876543210",
  gender: "Female",
  dob: "1998-08-15",
  address: "Arera Colony",
  city: "Bhopal",
  state: "Madhya Pradesh",
  pincode: "462016",
};

const CustomerProfile = () => {
  const [isEditing, setIsEditing] =
    useState(false);

  const [saved, setSaved] =
    useState(false);

  const [profile, setProfile] =
    useState(defaultProfile);

  useEffect(() => {
    const stored =
      localStorage.getItem(
        "customerProfile"
      );

    if (stored) {
      try {
        setProfile(JSON.parse(stored));
      } catch {
        setProfile(defaultProfile);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((current) => ({
      ...current,
      [name]: value,
    }));

    setSaved(false);
  };

  const handleSave = () => {
    localStorage.setItem(
      "customerProfile",
      JSON.stringify(profile)
    );

    setIsEditing(false);
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <div className="mx-auto max-w-[1450px]">

      {/* HEADER */}

      <div className="mb-5">
        <h1 className="text-[25px] font-bold text-gray-900">
          My Profile
        </h1>

        <p className="mt-1 text-[11px] text-gray-400">
          Manage your personal information
          and account details.
        </p>
      </div>


      {/* PROFILE TOP CARD */}

      <section
        className="
          relative
          overflow-hidden
          rounded-[22px]
          bg-gradient-to-r
          from-[#fff0f4]
          via-[#fff7f9]
          to-white
          p-6
          shadow-sm
        "
      >
        <div
          className="
            absolute
            -right-16
            -top-24
            h-[260px]
            w-[260px]
            rounded-full
            bg-pink-200/30
            blur-[60px]
          "
        />

        <div
          className="
            relative
            z-10
            flex
            flex-col
            gap-5
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div className="flex items-center gap-5">

            {/* AVATAR */}

            <div className="relative">

              <img
                src="https://i.pravatar.cc/200?img=47"
                alt={profile.fullName}
                className="
                  h-[100px]
                  w-[100px]
                  rounded-full
                  border-4
                  border-white
                  object-cover
                  shadow-md
                "
              />

              <button
                type="button"
                className="
                  absolute
                  bottom-1
                  right-1
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#ff3d73]
                  text-white
                  shadow-md
                "
              >
                <Camera size={14} />
              </button>
            </div>


            <div>

              <div className="flex items-center gap-2">

                <h2 className="text-[22px] font-bold text-gray-900">
                  {profile.fullName}
                </h2>

                <CheckCircle2
                  size={17}
                  className="text-emerald-500"
                />

              </div>


              <p className="mt-1 flex items-center gap-2 text-[11px] text-gray-500">
                <Mail size={13} />

                {profile.email}
              </p>


              <p className="mt-1 flex items-center gap-2 text-[11px] text-gray-500">
                <MapPin size={13} />

                {profile.city},{" "}
                {profile.state}
              </p>


              <span
                className="
                  mt-3
                  inline-flex
                  rounded-full
                  bg-white
                  px-3
                  py-1.5
                  text-[9px]
                  font-semibold
                  text-[#ff3d73]
                  shadow-sm
                "
              >
                SalonWala Customer
              </span>

            </div>
          </div>


          {/* EDIT BUTTON */}

          {!isEditing ? (
            <button
              type="button"
              onClick={() =>
                setIsEditing(true)
              }
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-pink-200
                bg-white
                px-5
                py-3
                text-[11px]
                font-semibold
                text-[#ff3d73]
                transition
                hover:bg-[#fff0f4]
              "
            >
              <Pencil size={15} />

              Edit Profile
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSave}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#ff3d73]
                px-5
                py-3
                text-[11px]
                font-semibold
                text-white
                shadow-lg
                shadow-pink-100
              "
            >
              <Save size={15} />

              Save Changes
            </button>
          )}

        </div>
      </section>


      {/* SAVED MESSAGE */}

      {saved && (
        <div
          className="
            mt-4
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-emerald-100
            bg-emerald-50
            px-4
            py-3
            text-[10px]
            font-medium
            text-emerald-700
          "
        >
          <CheckCircle2 size={15} />

          Profile updated successfully.
        </div>
      )}


      {/* QUICK STATS */}

      <section
        className="
          mt-5
          grid
          grid-cols-2
          gap-4
          lg:grid-cols-4
        "
      >

        <div className="profile-stat">
          <CalendarDays
            size={20}
            className="text-[#ff3d73]"
          />

          <div>
            <p className="text-[18px] font-bold">
              12
            </p>

            <p className="text-[9px] text-gray-400">
              Total Bookings
            </p>
          </div>
        </div>


        <div className="profile-stat">
          <Heart
            size={20}
            className="text-[#ff3d73]"
          />

          <div>
            <p className="text-[18px] font-bold">
              5
            </p>

            <p className="text-[9px] text-gray-400">
              Favourite Salons
            </p>
          </div>
        </div>


        <div className="profile-stat">
          <Wallet
            size={20}
            className="text-[#ff3d73]"
          />

          <div>
            <p className="text-[18px] font-bold">
              ₹450
            </p>

            <p className="text-[9px] text-gray-400">
              Wallet Balance
            </p>
          </div>
        </div>


        <div className="profile-stat">
          <ShieldCheck
            size={20}
            className="text-[#ff3d73]"
          />

          <div>
            <p className="text-[18px] font-bold">
              Verified
            </p>

            <p className="text-[9px] text-gray-400">
              Account Status
            </p>
          </div>
        </div>

      </section>


      {/* CONTENT GRID */}

      <section
        className="
          mt-5
          grid
          grid-cols-1
          gap-5
          xl:grid-cols-[minmax(0,1fr)_330px]
        "
      >

        {/* PERSONAL INFO */}

        <div
          className="
            rounded-[20px]
            border
            border-gray-100
            bg-white
            p-6
            shadow-sm
          "
        >

          <div className="mb-6 flex items-center gap-3">

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-[#fff0f4]
                text-[#ff3d73]
              "
            >
              <User size={18} />
            </div>

            <div>
              <h3 className="text-[15px] font-bold">
                Personal Information
              </h3>

              <p className="mt-0.5 text-[9px] text-gray-400">
                Update your profile details
              </p>
            </div>

          </div>


          <div
            className="
              grid
              grid-cols-1
              gap-4
              md:grid-cols-2
            "
          >

            <ProfileField
              label="Full Name"
              name="fullName"
              value={profile.fullName}
              onChange={handleChange}
              disabled={!isEditing}
            />


            <ProfileField
              label="Email Address"
              name="email"
              type="email"
              value={profile.email}
              onChange={handleChange}
              disabled={!isEditing}
            />


            <ProfileField
              label="Mobile Number"
              name="mobile"
              value={profile.mobile}
              onChange={handleChange}
              disabled={!isEditing}
            />


            <div>
              <label className="profile-label">
                Gender
              </label>

              <select
                name="gender"
                value={profile.gender}
                onChange={handleChange}
                disabled={!isEditing}
                className="profile-input"
              >
                <option>
                  Female
                </option>

                <option>
                  Male
                </option>

                <option>
                  Other
                </option>
              </select>
            </div>


            <ProfileField
              label="Date of Birth"
              name="dob"
              type="date"
              value={profile.dob}
              onChange={handleChange}
              disabled={!isEditing}
            />


            <ProfileField
              label="Address"
              name="address"
              value={profile.address}
              onChange={handleChange}
              disabled={!isEditing}
            />


            <ProfileField
              label="City"
              name="city"
              value={profile.city}
              onChange={handleChange}
              disabled={!isEditing}
            />


            <ProfileField
              label="State"
              name="state"
              value={profile.state}
              onChange={handleChange}
              disabled={!isEditing}
            />


            <ProfileField
              label="Pincode"
              name="pincode"
              value={profile.pincode}
              onChange={handleChange}
              disabled={!isEditing}
            />

          </div>


          {isEditing && (
            <div
              className="
                mt-6
                flex
                justify-end
                gap-3
                border-t
                border-gray-100
                pt-5
              "
            >
              <button
                type="button"
                onClick={() =>
                  setIsEditing(false)
                }
                className="
                  rounded-xl
                  border
                  border-gray-200
                  px-5
                  py-2.5
                  text-[10px]
                  font-semibold
                  text-gray-600
                "
              >
                Cancel
              </button>


              <button
                type="button"
                onClick={handleSave}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#ff3d73]
                  px-5
                  py-2.5
                  text-[10px]
                  font-semibold
                  text-white
                "
              >
                <Save size={14} />

                Save Changes
              </button>
            </div>
          )}

        </div>


        {/* RIGHT */}

        <aside className="space-y-5">

          {/* ACCOUNT SECURITY */}

          <div
            className="
              rounded-[20px]
              border
              border-gray-100
              bg-white
              p-5
              shadow-sm
            "
          >

            <h3 className="text-[14px] font-bold">
              Account Security
            </h3>

            <p className="mt-1 text-[9px] text-gray-400">
              Manage your account security
            </p>


            <button
              type="button"
              className="
                mt-4
                flex
                w-full
                items-center
                justify-between
                rounded-xl
                bg-gray-50
                p-3
                text-left
              "
            >
              <div className="flex items-center gap-3">

                <ShieldCheck
                  size={17}
                  className="text-[#ff3d73]"
                />

                <div>
                  <p className="text-[10px] font-semibold">
                    Change Password
                  </p>

                  <p className="mt-0.5 text-[8px] text-gray-400">
                    Update login password
                  </p>
                </div>

              </div>

              <span>›</span>
            </button>

          </div>


          {/* PREFERENCES */}

          <div
            className="
              rounded-[20px]
              border
              border-gray-100
              bg-white
              p-5
              shadow-sm
            "
          >

            <h3 className="text-[14px] font-bold">
              Preferences
            </h3>

            <div className="mt-4 space-y-3">

              <PreferenceRow
                icon={Bell}
                title="Booking Notifications"
              />

              <PreferenceRow
                icon={Mail}
                title="Email Updates"
              />

              <PreferenceRow
                icon={Phone}
                title="SMS Notifications"
              />

            </div>
          </div>


          {/* VERIFIED */}

          <div
            className="
              rounded-[20px]
              bg-gradient-to-br
              from-[#fff0f4]
              to-[#fff8fa]
              p-5
            "
          >
            <ShieldCheck
              size={26}
              className="text-[#ff3d73]"
            />

            <h3 className="mt-3 text-[13px] font-bold">
              Verified Account
            </h3>

            <p className="mt-1 text-[9px] leading-5 text-gray-500">
              Your customer profile is verified
              and ready for salon bookings.
            </p>
          </div>

        </aside>
      </section>


      <style>{`
        .profile-label {
          display: block;
          margin-bottom: 7px;
          font-size: 10px;
          font-weight: 600;
          color: #555b66;
        }

        .profile-input {
          width: 100%;
          height: 44px;
          border: 1px solid #eceef2;
          border-radius: 11px;
          padding: 0 13px;
          outline: none;
          font-size: 11px;
          color: #34363d;
          background: #ffffff;
          transition: 0.2s;
        }

        .profile-input:focus {
          border-color: #ff9ab6;
          box-shadow: 0 0 0 3px rgba(255,61,115,0.06);
        }

        .profile-input:disabled {
          background: #fafafa;
          color: #777b84;
        }

        .profile-stat {
          display: flex;
          align-items: center;
          gap: 14px;
          border: 1px solid #f0f0f0;
          background: white;
          border-radius: 16px;
          padding: 17px;
          box-shadow: 0 3px 15px rgba(0,0,0,0.025);
        }
      `}</style>

    </div>
  );
};


const ProfileField = ({
  label,
  name,
  value,
  onChange,
  disabled,
  type = "text",
}) => {
  return (
    <div>
      <label className="profile-label">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="profile-input"
      />
    </div>
  );
};


const PreferenceRow = ({
  icon: Icon,
  title,
}) => {
  const [enabled, setEnabled] =
    useState(true);

  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-xl
        bg-gray-50
        p-3
      "
    >
      <div className="flex items-center gap-3">

        <Icon
          size={16}
          className="text-[#ff3d73]"
        />

        <span className="text-[9px] font-medium text-gray-600">
          {title}
        </span>

      </div>


      <button
        type="button"
        onClick={() =>
          setEnabled(!enabled)
        }
        className={`
          relative
          h-5
          w-9
          rounded-full
          transition

          ${
            enabled
              ? "bg-[#ff3d73]"
              : "bg-gray-300"
          }
        `}
      >
        <span
          className={`
            absolute
            top-[2px]
            h-4
            w-4
            rounded-full
            bg-white
            transition-all

            ${
              enabled
                ? "left-[18px]"
                : "left-[2px]"
            }
          `}
        />
      </button>
    </div>
  );
};

export default CustomerProfile;