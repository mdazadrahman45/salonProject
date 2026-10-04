import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  Bell,
  CalendarDays,
  ChevronDown,
  CircleHelp,
  Heart,
  LogOut,
  MapPin,
  Search,
  Settings,
  User,
  Wallet,
} from "lucide-react";


const locations = [
  "Bhopal, MP",
  "Indore, MP",
  "Jabalpur, MP",
  "Gwalior, MP",
];


const CustomerTopbar = () => {
  const navigate = useNavigate();

  const [profileOpen, setProfileOpen] =
    useState(false);

  const [locationOpen, setLocationOpen] =
    useState(false);

  const [selectedLocation, setSelectedLocation] =
    useState("Bhopal, MP");

  const [searchText, setSearchText] =
    useState("");

  const [user, setUser] =
    useState(null);

  const profileRef = useRef(null);
  const locationRef = useRef(null);


  /* ============================
     LOAD LOGIN USER
  ============================ */

  useEffect(() => {
    const savedUser =
      localStorage.getItem("user");

    if (savedUser) {
      try {
        setUser(
          JSON.parse(savedUser)
        );
      } catch {
        setUser(null);
      }
    }
  }, []);


  /* ============================
     OUTSIDE CLICK
  ============================ */

  useEffect(() => {
    const closeDropdowns = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(
          event.target
        )
      ) {
        setProfileOpen(false);
      }

      if (
        locationRef.current &&
        !locationRef.current.contains(
          event.target
        )
      ) {
        setLocationOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      closeDropdowns
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        closeDropdowns
      );
    };
  }, []);


  /* ============================
     SEARCH
  ============================ */

  const handleSearch = (e) => {
    e.preventDefault();

    const value =
      searchText.trim();

    if (!value) {
      navigate(
        "/customer/search"
      );

      return;
    }

    navigate(
      `/customer/search?q=${encodeURIComponent(
        value
      )}&location=${encodeURIComponent(
        selectedLocation
      )}`
    );
  };


  /* ============================
     LOGOUT
  ============================ */

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
    setProfileOpen(false);

    navigate("/");
  };


  /* ============================
     USER DETAILS
  ============================ */

  const userName =
    user?.fullName ||
    user?.name ||
    "Customer";

  const firstLetter =
    userName
      .trim()
      .charAt(0)
      .toUpperCase();

  const userEmail =
    user?.email || "";


  return (
    <header
      className="
        fixed
        left-[250px]
        right-0
        top-0
        z-40
        flex
        h-[78px]
        items-center
        border-b
        border-gray-100
        bg-white
        px-7
      "
    >
      <div className="flex w-full items-center gap-5">

        {/* ========================
            LOCATION
        ======================== */}

        <div
          ref={locationRef}
          className="relative"
        >
          <button
            type="button"
            onClick={() =>
              setLocationOpen(
                !locationOpen
              )
            }
            className="
              flex
              h-11
              min-w-[155px]
              items-center
              gap-2
              rounded-xl
              border
              border-gray-200
              bg-white
              px-3
              text-left
              hover:border-pink-200
            "
          >
            <MapPin
              size={18}
              className="text-[#ff3d73]"
            />

            <div className="min-w-0 flex-1">
              <p className="text-[9px] text-gray-400">
                Your Location
              </p>

              <p className="truncate text-[11px] font-semibold text-gray-700">
                {selectedLocation}
              </p>
            </div>

            <ChevronDown
              size={14}
              className="text-gray-400"
            />
          </button>


          {locationOpen && (
            <div
              className="
                absolute
                left-0
                top-[54px]
                w-[210px]
                rounded-2xl
                border
                border-gray-100
                bg-white
                p-2
                shadow-xl
              "
            >
              {locations.map(
                (location) => (
                  <button
                    key={location}
                    type="button"
                    onClick={() => {
                      setSelectedLocation(
                        location
                      );

                      setLocationOpen(
                        false
                      );
                    }}
                    className={`
                      flex
                      w-full
                      items-center
                      gap-2
                      rounded-xl
                      px-3
                      py-2.5
                      text-[11px]

                      ${
                        selectedLocation ===
                        location
                          ? "bg-[#fff0f4] font-semibold text-[#ff3d73]"
                          : "text-gray-600 hover:bg-gray-50"
                      }
                    `}
                  >
                    <MapPin size={14} />

                    {location}
                  </button>
                )
              )}
            </div>
          )}
        </div>


        {/* ========================
            SEARCH
        ======================== */}

        <form
          onSubmit={handleSearch}
          className="
            mx-auto
            flex
            h-11
            w-full
            max-w-[680px]
            items-center
            rounded-full
            border
            border-gray-200
            bg-[#fafafa]
          "
        >
          <Search
            size={18}
            className="ml-5 text-gray-400"
          />

          <input
            type="text"
            value={searchText}
            onChange={(e) =>
              setSearchText(
                e.target.value
              )
            }
            placeholder="Search salons, services or barbers..."
            className="
              h-full
              w-full
              bg-transparent
              px-3
              text-[12px]
              outline-none
            "
          />

          <button
            type="submit"
            className="
              mr-1
              rounded-full
              bg-[#ff3d73]
              px-5
              py-2.5
              text-[10px]
              font-semibold
              text-white
            "
          >
            Search
          </button>
        </form>


        {/* ========================
            NOT LOGGED IN
        ======================== */}

        {!user ? (
          <div
            className="
              ml-auto
              flex
              shrink-0
              items-center
              gap-2
            "
          >
            <Link
              to="/login"
              className="
                rounded-xl
                border
                border-gray-200
                px-5
                py-2.5
                text-[11px]
                font-semibold
                text-gray-700
                transition
                hover:border-pink-200
                hover:text-[#ff3d73]
              "
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="
                rounded-xl
                bg-[#ff3d73]
                px-5
                py-2.5
                text-[11px]
                font-semibold
                text-white
                transition
                hover:bg-[#ed2f63]
              "
            >
              Sign Up
            </Link>
          </div>
        ) : (

          /* ========================
              LOGGED IN
          ======================== */

          <div
            className="
              ml-auto
              flex
              shrink-0
              items-center
              gap-3
            "
          >

            {/* NOTIFICATION */}

            <button
              type="button"
              onClick={() =>
                navigate(
                  "/customer/notifications"
                )
              }
              className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                text-gray-600
                hover:bg-[#fff0f4]
                hover:text-[#ff3d73]
              "
            >
              <Bell size={20} />

              <span
                className="
                  absolute
                  right-[8px]
                  top-[7px]
                  h-2
                  w-2
                  rounded-full
                  border-2
                  border-white
                  bg-[#ff3d73]
                "
              />
            </button>


            {/* PROFILE */}

            <div
              ref={profileRef}
              className="relative"
            >
              <button
                type="button"
                onClick={() =>
                  setProfileOpen(
                    !profileOpen
                  )
                }
                className="
                  flex
                  items-center
                  gap-2.5
                  rounded-xl
                  px-2
                  py-1.5
                  hover:bg-gray-50
                "
              >

                {/* FIRST LETTER AVATAR */}

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#ff3d73]
                    text-[15px]
                    font-bold
                    text-white
                  "
                >
                  {firstLetter}
                </div>


                <div className="text-left">
                  <p className="max-w-[120px] truncate text-[11px] font-semibold text-gray-800">
                    Hi, {userName}
                  </p>

                  <p className="text-[9px] text-gray-400">
                    Customer
                  </p>
                </div>

                <ChevronDown
                  size={15}
                  className="text-gray-400"
                />
              </button>


              {/* DROPDOWN */}

              {profileOpen && (
                <div
                  className="
                    absolute
                    right-0
                    top-[56px]
                    w-[250px]
                    rounded-2xl
                    border
                    border-gray-100
                    bg-white
                    p-2
                    shadow-xl
                  "
                >

                  {/* USER */}

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      px-3
                      py-3
                    "
                  >
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#ff3d73]
                        text-[16px]
                        font-bold
                        text-white
                      "
                    >
                      {firstLetter}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-[11px] font-semibold text-gray-800">
                        {userName}
                      </p>

                      <p className="truncate text-[9px] text-gray-400">
                        {userEmail}
                      </p>
                    </div>
                  </div>


                  <div className="my-1 h-px bg-gray-100" />


                  <MenuLink
                    to="/customer/profile"
                    icon={User}
                    label="My Profile"
                    close={() =>
                      setProfileOpen(false)
                    }
                  />

                  <MenuLink
                    to="/customer/bookings"
                    icon={CalendarDays}
                    label="My Bookings"
                    close={() =>
                      setProfileOpen(false)
                    }
                  />

                  <MenuLink
                    to="/customer/favourites"
                    icon={Heart}
                    label="Favourites"
                    close={() =>
                      setProfileOpen(false)
                    }
                  />

                  <MenuLink
                    to="/customer/wallet"
                    icon={Wallet}
                    label="Wallet"
                    close={() =>
                      setProfileOpen(false)
                    }
                  />

                  <MenuLink
                    to="/customer/settings"
                    icon={Settings}
                    label="Settings"
                    close={() =>
                      setProfileOpen(false)
                    }
                  />

                  <MenuLink
                    to="/customer/support"
                    icon={CircleHelp}
                    label="Help & Support"
                    close={() =>
                      setProfileOpen(false)
                    }
                  />


                  <div className="my-1 h-px bg-gray-100" />


                  <button
                    type="button"
                    onClick={handleLogout}
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-xl
                      px-3
                      py-2.5
                      text-[11px]
                      font-medium
                      text-red-500
                      hover:bg-red-50
                    "
                  >
                    <LogOut size={16} />

                    Logout
                  </button>

                </div>
              )}
            </div>

          </div>
        )}
      </div>
    </header>
  );
};


const MenuLink = ({
  to,
  icon: Icon,
  label,
  close,
}) => {
  return (
    <Link
      to={to}
      onClick={close}
      className="
        flex
        items-center
        gap-3
        rounded-xl
        px-3
        py-2.5
        text-[11px]
        font-medium
        text-gray-600
        transition
        hover:bg-[#fff0f4]
        hover:text-[#ff3d73]
      "
    >
      <Icon size={16} />

      {label}
    </Link>
  );
};


export default CustomerTopbar;