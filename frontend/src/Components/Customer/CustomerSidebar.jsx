// import React from "react";
// import {
//   NavLink,
//   useLocation,
//   useNavigate,
// } from "react-router-dom";

// import {
//   Home,
//   Search,
//   CalendarDays,
//   Heart,
//   Wallet,
//   Tag,
//   Bell,
//   User,
//   CircleHelp,
//   LogOut,
//   Gift,
//   Scissors,
// } from "lucide-react";

// const menuItems = [
//   {
//     label: "Home",
//     icon: Home,
//     path: "/",
//   },
//   {
//     label: "Search Salons",
//     icon: Search,
//     path: "/customer/search",
//   },
//   {
//     label: "My Bookings",
//     icon: CalendarDays,
//     path: "/customer/bookings",
//   },
//   {
//     label: "Favourites",
//     icon: Heart,
//     path: "/customer/favourites",
//   },
//   {
//     label: "Wallet",
//     icon: Wallet,
//     path: "/customer/wallet",
//   },
//   {
//     label: "Offers",
//     icon: Tag,
//     path: "/customer/offers",
//   },
//   {
//     label: "Notifications",
//     icon: Bell,
//     path: "/customer/notifications",
//   },
//   {
//     label: "Profile",
//     icon: User,
//     path: "/customer/profile",
//   },
//   {
//     label: "Help & Support",
//     icon: CircleHelp,
//     path: "/customer/support",
//   },
// ];

// const CustomerSidebar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");

//     navigate("/login");
//   };

//   const handleRefer = () => {
//     navigate("/customer/offers?tab=referral");
//   };

//   return (
//     <aside
//       className="
//         fixed
//         left-0
//         top-0
//         z-50
//         flex
//         h-screen
//         w-[250px]
//         flex-col
//         border-r
//         border-gray-100
//         bg-white
//         px-4
//         py-5
//         shadow-[4px_0_25px_rgba(0,0,0,0.03)]
//       "
//     >
//       {/* =========================
//           LOGO
//       ========================= */}
//       <button
//         type="button"
//         onClick={() => navigate("/")}
//         className="
//           flex
//           items-center
//           gap-3
//           rounded-xl
//           px-2
//           pb-5
//           text-left
//         "
//       >
//         <div
//           className="
//             flex
//             h-11
//             w-11
//             items-center
//             justify-center
//             rounded-xl
//             bg-gradient-to-br
//             from-[#ff3d73]
//             to-[#ff7a9d]
//             text-white
//             shadow-md
//             shadow-pink-100
//           "
//         >
//           <Scissors
//             size={23}
//             strokeWidth={2.2}
//           />
//         </div>

//         <div>
//           <h1 className="text-[22px] font-bold leading-none text-gray-900">
//             Salon
//             <span className="text-[#ff3d73]">
//               Wala
//             </span>
//           </h1>

//           <p className="mt-1 text-[10px] text-gray-400">
//             Salon & Beauty Near You
//           </p>
//         </div>
//       </button>

//       {/* =========================
//           MENU
//       ========================= */}
//       <nav className="mt-2 flex flex-col gap-1.5">
//         {menuItems.map((item) => {
//           const Icon = item.icon;

//           /*
//             Home "/" ke liye exact pathname check
//             kar rahe hain, warna "/" har route par
//             active ho sakta hai.
//           */
//           const isHomeActive =
//             item.path === "/" &&
//             location.pathname === "/";

//           return (
//             <NavLink
//               key={item.label}
//               to={item.path}
//               className={({ isActive }) => {
//                 const active =
//                   item.path === "/"
//                     ? isHomeActive
//                     : isActive;

//                 return `
//                   group
//                   flex
//                   h-11
//                   items-center
//                   gap-3
//                   rounded-xl
//                   px-3.5
//                   text-[14px]
//                   font-medium
//                   transition-all
//                   duration-200
//                   ${
//                     active
//                       ? "bg-[#fff0f4] text-[#ff3d73]"
//                       : "text-gray-600 hover:bg-[#fff7f9] hover:text-[#ff3d73]"
//                   }
//                 `;
//               }}
//             >
//               {({ isActive }) => {
//                 const active =
//                   item.path === "/"
//                     ? isHomeActive
//                     : isActive;

//                 return (
//                   <>
//                     <Icon
//                       size={19}
//                       strokeWidth={
//                         active ? 2.4 : 2
//                       }
//                     />

//                     <span>
//                       {item.label}
//                     </span>

//                     {/* notification badge */}
//                     {item.label ===
//                       "Notifications" && (
//                       <span
//                         className="
//                           ml-auto
//                           flex
//                           h-5
//                           min-w-5
//                           items-center
//                           justify-center
//                           rounded-full
//                           bg-[#ff3d73]
//                           px-1
//                           text-[9px]
//                           font-bold
//                           text-white
//                         "
//                       >
//                         3
//                       </span>
//                     )}
//                   </>
//                 );
//               }}
//             </NavLink>
//           );
//         })}
//       </nav>

//       {/* =========================
//           REFER & EARN
//       ========================= */}
//       <div
//         className="
//           mt-auto
//           rounded-2xl
//           bg-gradient-to-br
//           from-[#fff6f8]
//           to-[#ffe7ee]
//           px-4
//           py-5
//           text-center
//         "
//       >
//         <div
//           className="
//             mx-auto
//             flex
//             h-12
//             w-12
//             items-center
//             justify-center
//             rounded-full
//             bg-white
//             text-[#ff3d73]
//             shadow-sm
//           "
//         >
//           <Gift size={24} />
//         </div>

//         <h3 className="mt-3 text-[15px] font-semibold text-[#ff3d73]">
//           Refer & Earn
//         </h3>

//         <p className="mt-1 text-[11px] leading-5 text-gray-500">
//           Get ₹100 for every friend you invite!
//         </p>

//         <button
//           type="button"
//           onClick={handleRefer}
//           className="
//             mt-3
//             w-full
//             rounded-lg
//             bg-[#ff3d73]
//             px-3
//             py-2.5
//             text-[12px]
//             font-semibold
//             text-white
//             transition
//             hover:bg-[#ed2f63]
//           "
//         >
//           Invite Now →
//         </button>
//       </div>

//       {/* =========================
//           LOGOUT
//       ========================= */}
//       <button
//         type="button"
//         onClick={handleLogout}
//         className="
//           mt-3
//           flex
//           items-center
//           gap-3
//           rounded-xl
//           px-3.5
//           py-3
//           text-[14px]
//           font-medium
//           text-red-500
//           transition
//           hover:bg-red-50
//         "
//       >
//         <LogOut size={19} />

//         <span>
//           Logout
//         </span>
//       </button>
//     </aside>
//   );
// };

// export default CustomerSidebar;

import React from "react";
import {
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  Home,
  Search,
  CalendarDays,
  Heart,
  Wallet,
  Tag,
  Bell,
  User,
  CircleHelp,
  LogOut,
  Gift,
  Scissors,
} from "lucide-react";

const menuItems = [
  {
    label: "Home",
    icon: Home,
    path: "/",
  },
  {
    label: "Search Salons",
    icon: Search,
    path: "/customer/search",
  },
  {
    label: "My Bookings",
    icon: CalendarDays,
    path: "/customer/bookings",
  },
  {
    label: "Favourites",
    icon: Heart,
    path: "/customer/favourites",
  },
  {
    label: "Wallet",
    icon: Wallet,
    path: "/customer/wallet",
  },
  {
    label: "Offers",
    icon: Tag,
    path: "/customer/offers",
  },
  {
    label: "Notifications",
    icon: Bell,
    path: "/customer/notifications",
  },
  {
    label: "Profile",
    icon: User,
    path: "/customer/profile",
  },
  {
    label: "Help & Support",
    icon: CircleHelp,
    path: "/customer/support",
  },
];

const CustomerSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
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
        onClick={() => navigate("/")}
        className="
          flex
          shrink-0
          items-center
          gap-3
          rounded-xl
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
            bg-gradient-to-br
            from-[#ff3d73]
            to-[#ff7a9d]
            text-white
            shadow-md
            shadow-pink-100
          "
        >
          <Scissors size={23} />
        </div>

        <div>
          <h1 className="text-[22px] font-bold leading-none text-gray-900">
            Salon
            <span className="text-[#ff3d73]">
              Wala
            </span>
          </h1>

          <p className="mt-1 text-[9px] text-gray-400">
            Salon & Beauty Near You
          </p>
        </div>
      </button>

      {/* SCROLLABLE MENU */}

      <div
        className="
          min-h-0
          flex-1
          overflow-y-auto
          pr-1
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        <nav className="flex flex-col gap-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const homeActive =
              item.path === "/" &&
              location.pathname === "/";

            return (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) => {
                  const active =
                    item.path === "/"
                      ? homeActive
                      : isActive;

                  return `
                    flex
                    h-[43px]
                    shrink-0
                    items-center
                    gap-3
                    rounded-xl
                    px-3
                    text-[13px]
                    font-medium
                    transition-all

                    ${
                      active
                        ? "bg-[#fff0f4] text-[#ff3d73]"
                        : "text-gray-600 hover:bg-[#fff7f9] hover:text-[#ff3d73]"
                    }
                  `;
                }}
              >
                {({ isActive }) => {
                  const active =
                    item.path === "/"
                      ? homeActive
                      : isActive;

                  return (
                    <>
                      <Icon
                        size={18}
                        strokeWidth={
                          active ? 2.4 : 2
                        }
                      />

                      <span>
                        {item.label}
                      </span>

                      {item.label ===
                        "Notifications" && (
                        <span
                          className="
                            ml-auto
                            flex
                            h-5
                            min-w-5
                            items-center
                            justify-center
                            rounded-full
                            bg-[#ff3d73]
                            px-1
                            text-[9px]
                            font-bold
                            text-white
                          "
                        >
                          3
                        </span>
                      )}
                    </>
                  );
                }}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* FIXED BOTTOM AREA */}

      <div className="shrink-0 border-t border-gray-100 pt-3">
        {/* REFER */}

        <button
          type="button"
          onClick={() =>
            navigate(
              "/customer/offers?tab=referral"
            )
          }
          className="
            flex
            w-full
            items-center
            gap-3
            rounded-xl
            bg-[#fff0f4]
            p-3
            text-left
            transition
            hover:bg-[#ffe5ec]
          "
        >
          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#ff3d73]
              shadow-sm
            "
          >
            <Gift size={18} />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold text-[#ff3d73]">
              Refer & Earn
            </p>

            <p className="mt-0.5 text-[8px] text-gray-500">
              Earn ₹100 per referral
            </p>
          </div>

          <span className="text-[13px] text-[#ff3d73]">
            →
          </span>
        </button>

        {/* LOGOUT */}

        <button
          type="button"
          onClick={handleLogout}
          className="
            mt-2
            flex
            h-10
            w-full
            items-center
            gap-3
            rounded-xl
            px-3
            text-[12px]
            font-medium
            text-red-500
            transition
            hover:bg-red-50
          "
        >
          <LogOut size={18} />

          Logout
        </button>
      </div>
    </aside>
  );
};

export default CustomerSidebar;