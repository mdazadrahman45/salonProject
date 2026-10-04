// import React from 'react';
// import { Routes, Route } from 'react-router-dom';

// // Import All Pages from Componets folder
// import Landing from '../Components/landing'; 
// import Services from '../Components/Services';
// import FindSalons from '../Components/FindSalons';
// import About from '../Components/About';
// import RegisterSalon from '../Components/RegisterSalon';
// import Login from '../Components/Login';
// import Signup from '../Components/Signup';

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Landing />} />
//       <Route path="/services" element={<Services />} />
//       <Route path="/find-salons" element={<FindSalons />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/register-salon" element={<RegisterSalon />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
      
//       <Route 
//         path="*" 
//         element={
//           <div className="flex items-center justify-center h-screen text-2xl font-bold text-gray-600">
//             404 - Page Not Found
//           </div>
//         } 
//       />
//     </Routes>
//   );
// };

// export default AppRoutes;

// import React from "react";

// import {
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// import Login from "../Components/Login";
// import Signup from "../Components/Signup";
// import RegisterSalon from "../Components/RegisterSalon";

// import CustomerLayout from "../Components/Customer/CustomerLayout";

// import CustomerDashboard from "../pages/Customer/CustomerDashboard";
// import SearchSalons from "../pages/Customer/SearchSalons";
// import SalonDetails from "../pages/Customer/SalonDetails";
// import BookingPage from "../pages/Customer/BookingPage";
// import CustomerProfile from "../pages/Customer/CustomerProfile";


// const isLoggedIn = () => {
//   return !!localStorage.getItem("token");
// };


// /* LOGIN REQUIRED PAGE */

// const ProtectedPage = ({ children }) => {
//   if (!isLoggedIn()) {
//     return (
//       <Navigate
//         to="/login"
//         replace
//       />
//     );
//   }

//   return children;
// };


// const TempPage = ({
//   title,
//   description,
// }) => {
//   return (
//     <div className="mx-auto max-w-[1500px]">
//       <div className="rounded-[20px] border border-gray-100 bg-white p-8 shadow-sm">
//         <h1 className="text-[26px] font-bold text-gray-900">
//           {title}
//         </h1>

//         <p className="mt-2 text-[13px] text-gray-400">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// };


// const AppRoutes = () => {
//   return (
//     <Routes>

//       {/* =============================
//           PUBLIC CUSTOMER AREA
//       ============================= */}

//       <Route
//         path="/"
//         element={<CustomerLayout />}
//       >

//         {/* LANDING PAGE */}

//         <Route
//           index
//           element={<CustomerDashboard />}
//         />

//         {/* SEARCH */}

//         <Route
//           path="customer/search"
//           element={<SearchSalons />}
//         />

//         {/* SALON DETAILS */}

//         <Route
//           path="customer/salon/:id"
//           element={<SalonDetails />}
//         />


//         {/* =============================
//             LOGIN REQUIRED CUSTOMER PAGES
//         ============================= */}

//         <Route
//           path="customer/booking/:salonId"
//           element={
//             <ProtectedPage>
//               <BookingPage />
//             </ProtectedPage>
//           }
//         />

//         <Route
//           path="customer/profile"
//           element={
//             <ProtectedPage>
//               <CustomerProfile />
//             </ProtectedPage>
//           }
//         />

//         <Route
//           path="customer/bookings"
//           element={
//             <ProtectedPage>
//               <TempPage
//                 title="My Bookings"
//                 description="Your upcoming, completed and cancelled bookings will appear here."
//               />
//             </ProtectedPage>
//           }
//         />

//         <Route
//           path="customer/favourites"
//           element={
//             <ProtectedPage>
//               <TempPage
//                 title="Favourites"
//                 description="Your favourite salons will appear here."
//               />
//             </ProtectedPage>
//           }
//         />

//         <Route
//           path="customer/wallet"
//           element={
//             <ProtectedPage>
//               <TempPage
//                 title="My Wallet"
//                 description="Your wallet balance and transactions will appear here."
//               />
//             </ProtectedPage>
//           }
//         />

//         <Route
//           path="customer/offers"
//           element={
//             <TempPage
//               title="Offers & Coupons"
//               description="Available SalonWala offers and coupons will appear here."
//             />
//           }
//         />

//         <Route
//           path="customer/notifications"
//           element={
//             <ProtectedPage>
//               <TempPage
//                 title="Notifications"
//                 description="Your booking alerts and updates will appear here."
//               />
//             </ProtectedPage>
//           }
//         />

//         <Route
//           path="customer/settings"
//           element={
//             <ProtectedPage>
//               <TempPage
//                 title="Settings"
//                 description="Manage your account preferences."
//               />
//             </ProtectedPage>
//           }
//         />

//         <Route
//           path="customer/support"
//           element={
//             <TempPage
//               title="Help & Support"
//               description="Get help with SalonWala."
//             />
//           }
//         />

//       </Route>


//       {/* =============================
//           LOGIN / SIGNUP
//       ============================= */}

//       <Route
//         path="/login"
//         element={<Login />}
//       />

//       <Route
//         path="/signup"
//         element={<Signup />}
//       />


//       {/* =============================
//           BARBER / SALON OWNER
//       ============================= */}

//       <Route
//         path="/business"
//         element={<RegisterSalon />}
//       />


//       {/* OLD DASHBOARD URL */}

//       <Route
//         path="/customer/dashboard"
//         element={
//           <Navigate
//             to="/"
//             replace
//           />
//         }
//       />


//       {/* WRONG URL */}

//       <Route
//         path="*"
//         element={
//           <Navigate
//             to="/"
//             replace
//           />
//         }
//       />

//     </Routes>
//   );
// };

// export default AppRoutes;
import React from "react";

import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

/* =========================
   CUSTOMER AUTH
========================= */

import Login from "../Components/Login";
import Signup from "../Components/Signup";
import RegisterSalon from "../Components/RegisterSalon";

/* =========================
   CUSTOMER LAYOUT
========================= */

import CustomerLayout from "../Components/Customer/CustomerLayout";

/* =========================
   CUSTOMER PAGES
========================= */

import CustomerDashboard from "../pages/Customer/CustomerDashboard";
import SearchSalons from "../pages/Customer/SearchSalons";
import SalonDetails from "../pages/Customer/SalonDetails";
import BookingPage from "../pages/Customer/BookingPage";
import CustomerProfile from "../pages/Customer/CustomerProfile";

/* =========================
   PARTNER PAGES
========================= */

import PartnerLogin from "../pages/Customer/Partner/PartnerLogin";
import PartnerLayout from "../pages/Customer/Partner/PartnerLayout";
import PartnerDashboard from "../pages/Customer/Partner/PartnerDashboard";
import PartnerBookings from "../pages/Customer/Partner/PartnerBookings";
import PartnerServices from "../pages/Customer/Partner/PartnerServices";
import PartnerProfile from "../pages/Customer/Partner/PartnerProfile";


/* =========================
   LOGIN CHECK
========================= */

const customerLoggedIn = () => {
  return Boolean(
    localStorage.getItem("token")
  );
};

const partnerLoggedIn = () => {
  return Boolean(
    localStorage.getItem("partnerToken")
  );
};


/* =========================
   CUSTOMER PROTECTION
========================= */

const CustomerProtected = ({
  children,
}) => {
  if (!customerLoggedIn()) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return children;
};


/* =========================
   PARTNER PROTECTION
========================= */

const PartnerProtected = ({
  children,
}) => {
  if (!partnerLoggedIn()) {
    return (
      <Navigate
        to="/partner/login"
        replace
      />
    );
  }

  return children;
};


/* =========================
   TEMP PAGE
========================= */

const TempPage = ({
  title,
  description,
}) => {
  return (
    <div className="mx-auto max-w-[1450px]">
      <div className="rounded-[20px] border border-gray-100 bg-white p-7 shadow-sm">
        <h1 className="text-[25px] font-bold text-gray-900">
          {title}
        </h1>

        <p className="mt-2 text-[11px] text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};


/* =========================
   ROUTES
========================= */

const AppRoutes = () => {
  return (
    <Routes>

      {/* =================================
          CUSTOMER WEBSITE
      ================================= */}

      <Route
        path="/"
        element={<CustomerLayout />}
      >

        {/* MAIN LANDING PAGE */}

        <Route
          index
          element={<CustomerDashboard />}
        />


        {/* SEARCH */}

        <Route
          path="customer/search"
          element={<SearchSalons />}
        />


        {/* SALON DETAILS */}

        <Route
          path="customer/salon/:id"
          element={<SalonDetails />}
        />


        {/* BOOKING */}

        <Route
          path="customer/booking/:salonId"
          element={
            <CustomerProtected>
              <BookingPage />
            </CustomerProtected>
          }
        />


        {/* BOOKING REVIEW */}

        <Route
          path="customer/booking/review"
          element={
            <CustomerProtected>
              <TempPage
                title="Review Booking"
                description="Review your salon, services, professional, date and time."
              />
            </CustomerProtected>
          }
        />


        {/* PROFILE */}

        <Route
          path="customer/profile"
          element={
            <CustomerProtected>
              <CustomerProfile />
            </CustomerProtected>
          }
        />


        {/* BOOKINGS */}

        <Route
          path="customer/bookings"
          element={
            <CustomerProtected>
              <TempPage
                title="My Bookings"
                description="Upcoming, completed and cancelled bookings will appear here."
              />
            </CustomerProtected>
          }
        />


        {/* FAVOURITES */}

        <Route
          path="customer/favourites"
          element={
            <CustomerProtected>
              <TempPage
                title="Favourites"
                description="Your favourite salons will appear here."
              />
            </CustomerProtected>
          }
        />


        {/* WALLET */}

        <Route
          path="customer/wallet"
          element={
            <CustomerProtected>
              <TempPage
                title="My Wallet"
                description="Wallet balance, refunds and transaction history will appear here."
              />
            </CustomerProtected>
          }
        />


        {/* OFFERS */}

        <Route
          path="customer/offers"
          element={
            <TempPage
              title="Offers & Coupons"
              description="SalonWala offers, coupons and referral rewards will appear here."
            />
          }
        />


        {/* NOTIFICATIONS */}

        <Route
          path="customer/notifications"
          element={
            <CustomerProtected>
              <TempPage
                title="Notifications"
                description="Booking reminders and notifications will appear here."
              />
            </CustomerProtected>
          }
        />


        {/* SETTINGS */}

        <Route
          path="customer/settings"
          element={
            <CustomerProtected>
              <TempPage
                title="Settings"
                description="Manage your customer account settings."
              />
            </CustomerProtected>
          }
        />


        {/* SUPPORT */}

        <Route
          path="customer/support"
          element={
            <TempPage
              title="Help & Support"
              description="Get help with your SalonWala account."
            />
          }
        />

      </Route>


      {/* =================================
          CUSTOMER AUTH
      ================================= */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />


      {/* OLD CUSTOMER URL */}

      <Route
        path="/customer"
        element={
          <Navigate
            to="/"
            replace
          />
        }
      />

      <Route
        path="/customer/dashboard"
        element={
          <Navigate
            to="/"
            replace
          />
        }
      />


      {/* =================================
          SALON / BARBER REGISTRATION
      ================================= */}

      <Route
        path="/business"
        element={<RegisterSalon />}
      />


      {/* =================================
          PARTNER LOGIN
      ================================= */}

      <Route
        path="/partner/login"
        element={
          partnerLoggedIn() ? (
            <Navigate
              to="/partner/dashboard"
              replace
            />
          ) : (
            <PartnerLogin />
          )
        }
      />


      {/* =================================
          PARTNER PANEL
      ================================= */}

      <Route
        path="/partner"
        element={
          <PartnerProtected>
            <PartnerLayout />
          </PartnerProtected>
        }
      >

        <Route
          index
          element={
            <Navigate
              to="/partner/dashboard"
              replace
            />
          }
        />


        {/* DASHBOARD */}

        <Route
          path="dashboard"
          element={<PartnerDashboard />}
        />


        {/* BOOKINGS */}

        <Route
          path="bookings"
          element={<PartnerBookings />}
        />


        {/* SERVICES */}

        <Route
          path="services"
          element={<PartnerServices />}
        />


        {/* PROFILE */}

        <Route
          path="profile"
          element={<PartnerProfile />}
        />


        {/* CALENDAR */}

        <Route
          path="calendar"
          element={
            <TempPage
              title="Appointment Calendar"
              description="Manage your appointments by date and time."
            />
          }
        />


        {/* STAFF */}

        <Route
          path="staff"
          element={
            <TempPage
              title="Staff & Barbers"
              description="Manage your salon staff and barbers."
            />
          }
        />


        {/* CUSTOMERS */}

        <Route
          path="customers"
          element={
            <TempPage
              title="Customers"
              description="Your salon customers will appear here."
            />
          }
        />


        {/* OFFERS */}

        <Route
          path="offers"
          element={
            <TempPage
              title="Offers & Discounts"
              description="Create salon offers, discounts and coupons."
            />
          }
        />


        {/* REVIEWS */}

        <Route
          path="reviews"
          element={
            <TempPage
              title="Reviews"
              description="Customer reviews and ratings will appear here."
            />
          }
        />


        {/* EARNINGS */}

        <Route
          path="earnings"
          element={
            <TempPage
              title="Earnings"
              description="Track your salon earnings and revenue."
            />
          }
        />


        {/* WALLET */}

        <Route
          path="wallet"
          element={
            <TempPage
              title="Wallet & Payouts"
              description="View partner balance, payouts and transactions."
            />
          }
        />


        {/* SETTINGS */}

        <Route
          path="settings"
          element={
            <TempPage
              title="Business Settings"
              description="Manage salon and partner settings."
            />
          }
        />


        {/* SUPPORT */}

        <Route
          path="support"
          element={
            <TempPage
              title="Partner Help & Support"
              description="Get help with bookings, payments and your partner account."
            />
          }
        />

      </Route>


      {/* =================================
          FOOTER LINKS
      ================================= */}

      <Route
        path="/about"
        element={
          <TempPage
            title="About SalonWala"
            description="Learn more about SalonWala."
          />
        }
      />

      <Route
        path="/contact"
        element={
          <TempPage
            title="Contact Us"
            description="Contact SalonWala support."
          />
        }
      />

      <Route
        path="/privacy-policy"
        element={
          <TempPage
            title="Privacy Policy"
            description="SalonWala privacy policy."
          />
        }
      />

      <Route
        path="/terms"
        element={
          <TempPage
            title="Terms & Conditions"
            description="SalonWala terms and conditions."
          />
        }
      />

      <Route
        path="/cancellation-policy"
        element={
          <TempPage
            title="Cancellation Policy"
            description="SalonWala booking cancellation policy."
          />
        }
      />

      <Route
        path="/refund-policy"
        element={
          <TempPage
            title="Refund Policy"
            description="SalonWala refund policy."
          />
        }
      />


      {/* =================================
          WRONG URL
      ================================= */}

      <Route
        path="*"
        element={
          <Navigate
            to="/"
            replace
          />
        }
      />

    </Routes>
  );
};

export default AppRoutes;