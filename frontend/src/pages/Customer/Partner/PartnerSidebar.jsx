import React from "react";

import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import {
  CalendarDays,
  CircleHelp,
  Home,
  LogOut,
  Scissors,
  Settings,
  Star,
  Store,
  Tag,
  User,
  Users,
  Wallet,
} from "lucide-react";

const PartnerSidebar = () => {
  const navigate = useNavigate();

  let partner = {};

  try {
    partner =
      JSON.parse(
        localStorage.getItem(
          "partnerUser"
        )
      ) || {};
  } catch {
    partner = {};
  }

  const isIndependentBarber =
    partner?.partnerType ===
    "INDEPENDENT_BARBER";

  const menuItems = [
    {
      label: "Dashboard",
      path: "/partner/dashboard",
      icon: Home,
    },

    {
      label: "Bookings",
      path: "/partner/bookings",
      icon: CalendarDays,
    },

    {
      label: "Calendar",
      path: "/partner/calendar",
      icon: CalendarDays,
    },

    {
      label: "Services",
      path: "/partner/services",
      icon: Scissors,
    },

    ...(!isIndependentBarber
      ? [
          {
            label: "Staff / Barbers",
            path: "/partner/staff",
            icon: Users,
          },
        ]
      : []),

    {
      label: "Customers",
      path: "/partner/customers",
      icon: User,
    },

    {
      label: "Offers",
      path: "/partner/offers",
      icon: Tag,
    },

    {
      label: "Reviews",
      path: "/partner/reviews",
      icon: Star,
    },

    {
      label: "Earnings",
      path: "/partner/earnings",
      icon: Wallet,
    },

    {
      label: "Wallet / Payouts",
      path: "/partner/wallet",
      icon: Wallet,
    },

    {
      label: "Salon Profile",
      path: "/partner/profile",
      icon: Store,
    },

    {
      label: "Settings",
      path: "/partner/settings",
      icon: Settings,
    },

    {
      label: "Help & Support",
      path: "/partner/support",
      icon: CircleHelp,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem(
      "partnerToken"
    );

    localStorage.removeItem(
      "partnerUser"
    );

    navigate("/partner/login");
  };

  return (
    <aside
      className="
        fixed
        left-0
        top-0
        z-50
        flex
        h-[100dvh]
        w-[250px]
        flex-col
        overflow-hidden
        border-r
        border-gray-100
        bg-white
        px-4
        py-4
        shadow-[4px_0_25px_rgba(0,0,0,0.03)]
      "
    >
      {/* LOGO */}

      <button
        type="button"
        onClick={() =>
          navigate(
            "/partner/dashboard"
          )
        }
        className="
          flex
          shrink-0
          items-center
          gap-3
          px-2
          pb-4
          text-left
        "
      >
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-[#ff3d73]
            text-white
            shadow-md
            shadow-pink-100
          "
        >
          <Scissors size={21} />
        </div>

        <div>
          <h1 className="text-[20px] font-bold leading-none text-gray-900">
            Salon
            <span className="text-[#ff3d73]">
              Wala
            </span>
          </h1>

          <p className="mt-1 text-[9px] text-gray-400">
            Partner Panel
          </p>
        </div>
      </button>

      {/* MENU */}

      <nav
        className="
          min-h-0
          flex-1
          overflow-y-auto
          pr-1
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        <div className="space-y-1">
          {menuItems.map(
            (item) => {
              const Icon =
                item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({
                    isActive,
                  }) => `
                    flex
                    h-[42px]
                    items-center
                    gap-3
                    rounded-xl
                    px-3
                    text-[11px]
                    font-medium
                    transition-all

                    ${
                      isActive
                        ? "bg-[#fff0f4] text-[#ff3d73]"
                        : "text-gray-600 hover:bg-[#fff7f9] hover:text-[#ff3d73]"
                    }
                  `}
                >
                  <Icon
                    size={17}
                  />

                  <span>
                    {item.label}
                  </span>
                </NavLink>
              );
            }
          )}
        </div>
      </nav>

      {/* BOTTOM */}

      <div
        className="
          shrink-0
          border-t
          border-gray-100
          pt-3
        "
      >
        <button
          type="button"
          onClick={handleLogout}
          className="
            flex
            h-11
            w-full
            items-center
            gap-3
            rounded-xl
            px-3
            text-[11px]
            font-medium
            text-red-500
            transition
            hover:bg-red-50
          "
        >
          <LogOut size={17} />

          Logout
        </button>
      </div>
    </aside>
  );
};

export default PartnerSidebar;