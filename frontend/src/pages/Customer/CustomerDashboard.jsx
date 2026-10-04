import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  Gift,
  Heart,
  MapPin,
  Scissors,
  Sparkles,
  Star,
  Tags,
  UserRoundCheck,
} from "lucide-react";

import HomeExtraSections from "../../Components/Customer/HomeExtraSections";
import Footer from "../../Components/Customer/Footer";


/* =========================================
   SERVICE CATEGORIES
========================================= */

const categories = [
  {
    id: 1,
    title: "Haircut",
    emoji: "✂️",
  },
  {
    id: 2,
    title: "Hair Color",
    emoji: "💇‍♀️",
  },
  {
    id: 3,
    title: "Beard Trim",
    emoji: "🧔",
  },
  {
    id: 4,
    title: "Facial",
    emoji: "🧖‍♀️",
  },
  {
    id: 5,
    title: "Massage",
    emoji: "💆",
  },
  {
    id: 6,
    title: "Nail Care",
    emoji: "💅",
  },
  {
    id: 7,
    title: "Waxing",
    emoji: "✨",
  },
  {
    id: 8,
    title: "More",
    emoji: "•••",
  },
];


/* =========================================
   TOP SALONS
========================================= */

const salons = [
  {
    id: 1,
    name: "Looks Salon",
    rating: "4.8",
    reviews: "512",
    distance: "2.1 km",
    location: "Arera Colony, Bhopal",

    services: [
      "Haircut",
      "Hair Color",
      "Facial",
      "Nail Care",
    ],

    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 2,
    name: "The Barber Club",
    rating: "4.6",
    reviews: "431",
    distance: "3.4 km",
    location: "MP Nagar, Bhopal",

    services: [
      "Haircut",
      "Beard Trim",
      "Grooming",
    ],

    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 3,
    name: "Natura's Salon",
    rating: "4.7",
    reviews: "320",
    distance: "3.2 km",
    location: "Kolar Road, Bhopal",

    services: [
      "Hair Color",
      "Facial",
      "Massage",
      "Nail Care",
    ],

    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
  },
];


/* =========================================
   POPULAR SERVICES
========================================= */

const popularServices = [
  {
    id: 1,
    title: "Men Haircut",
    searchService: "Haircut",
    price: "199",

    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 2,
    title: "Beard Styling",
    searchService: "Beard Trim",
    price: "149",

    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 3,
    title: "Facial",
    searchService: "Facial",
    price: "499",

    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 4,
    title: "Hair Color",
    searchService: "Hair Color",
    price: "999",

    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
  },
];


/* =========================================
   RECOMMENDED
========================================= */

const recommended = [
  {
    id: 2,
    name: "The Barber Club",
    rating: "4.6",
    reviews: "431",
    location: "MP Nagar, Bhopal",

    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 3,
    name: "Natura's Salon",
    rating: "4.7",
    reviews: "320",
    location: "Kolar Road, Bhopal",

    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=500&q=80",
  },

  {
    id: 4,
    name: "Enrich Salon",
    rating: "4.5",
    reviews: "290",
    location: "New Market, Bhopal",

    image:
      "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=500&q=80",
  },
];


const CustomerDashboard = () => {
  const navigate = useNavigate();

  const [favourites, setFavourites] = useState([]);

  const [bookingStatus, setBookingStatus] =
    useState("Confirmed");


  /* =========================================
     EXPLORE NOW
  ========================================= */

  const handleExplore = () => {
    navigate("/customer/search");
  };


  /* =========================================
     CATEGORY CLICK
  ========================================= */

  const handleCategory = (category) => {
    if (category.title === "More") {
      navigate("/customer/search");
      return;
    }

    navigate(
      `/customer/search?service=${encodeURIComponent(
        category.title
      )}`
    );
  };


  /* =========================================
     FAVOURITE
  ========================================= */

  const toggleFavourite = (salonId) => {
    setFavourites((current) => {
      if (current.includes(salonId)) {
        return current.filter(
          (id) => id !== salonId
        );
      }

      return [...current, salonId];
    });
  };


  /* =========================================
     OPEN SALON
  ========================================= */

  const openSalon = (salonId) => {
    navigate(`/customer/salon/${salonId}`);
  };


  /* =========================================
     RESCHEDULE
  ========================================= */

  const handleReschedule = () => {
    navigate("/customer/booking/1", {
      state: {
        salon: {
          id: 1,
          name: "Looks Salon",
          location: "Arera Colony, Bhopal",
          image: salons[0].image,
        },

        services: [
          {
            id: 1,
            name: "Haircut + Beard Trim",
            duration: "50 min",
            price: 349,
          },
        ],

        mode: "reschedule",
      },
    });
  };


  /* =========================================
     CANCEL BOOKING
  ========================================= */

  const handleCancelBooking = () => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmed) {
      return;
    }

    setBookingStatus("Cancelled");
  };


  return (
    <>
      <div className="mx-auto max-w-[1600px]">

        {/* =====================================
            HERO SECTION
        ===================================== */}

        <section
          className="
            relative
            min-h-[245px]
            overflow-hidden
            rounded-[22px]
            bg-gradient-to-r
            from-[#ffe9ef]
            via-[#fff2f5]
            to-[#ffdce7]
            px-8
            py-7
            shadow-[0_8px_35px_rgba(255,61,115,0.06)]
          "
        >

          {/* BACKGROUND EFFECT */}

          <div
            className="
              absolute
              -right-16
              -top-24
              h-[320px]
              w-[320px]
              rounded-full
              bg-[#ffcddd]/40
              blur-3xl
            "
          />


          <div
            className="
              relative
              z-10
              flex
              min-h-[190px]
              items-center
              justify-between
              gap-10
            "
          >

            {/* =========================
                HERO LEFT
            ========================= */}

            <div className="max-w-[540px]">

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-pink-100
                  bg-white/70
                  px-3
                  py-1.5
                  text-[11px]
                  font-medium
                  text-[#e63869]
                "
              >
                <Sparkles size={14} />

                Self Care • Better You
              </div>


              <h1
                className="
                  mt-4
                  text-[44px]
                  font-bold
                  leading-[0.98]
                  tracking-[-1.4px]
                  text-[#25242a]
                "
              >
                Look Good

                <br />

                <span className="text-[#ff3d73]">
                  Feel Great
                </span>
              </h1>


              <p
                className="
                  mt-4
                  text-[13px]
                  leading-6
                  text-gray-500
                "
              >
                Book the best salons & barbers near you.

                <br />

                Premium services, trusted professionals.
              </p>


              {/* EXPLORE NOW */}

              <button
                type="button"
                onClick={handleExplore}
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#ff3d73]
                  px-5
                  py-3
                  text-[12px]
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-pink-200/60
                  transition
                  hover:-translate-y-0.5
                  hover:bg-[#ee2e65]
                "
              >
                Explore Now

                <ArrowRight size={16} />
              </button>

            </div>


            {/* =========================
                HERO RIGHT
            ========================= */}

            <div
              className="
                hidden
                w-[260px]
                rounded-[18px]
                border
                border-white/70
                bg-white/75
                p-4
                shadow-lg
                xl:block
              "
            >

              {/* TRUSTED */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  border-b
                  border-gray-100
                  py-3
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#ffeaf0]
                    text-[#ff3d73]
                  "
                >
                  <UserRoundCheck size={18} />
                </div>

                <div>
                  <p className="text-[12px] font-semibold">
                    Trusted Salons
                  </p>

                  <p className="text-[10px] text-gray-400">
                    Verified & rated salons
                  </p>
                </div>
              </div>


              {/* EASY BOOKING */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  border-b
                  border-gray-100
                  py-3
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#ffeaf0]
                    text-[#ff3d73]
                  "
                >
                  <CalendarDays size={18} />
                </div>

                <div>
                  <p className="text-[12px] font-semibold">
                    Easy Booking
                  </p>

                  <p className="text-[10px] text-gray-400">
                    Instant confirmation
                  </p>
                </div>
              </div>


              {/* OFFERS */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  py-3
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#ffeaf0]
                    text-[#ff3d73]
                  "
                >
                  <Tags size={18} />
                </div>

                <div>
                  <p className="text-[12px] font-semibold">
                    Great Offers
                  </p>

                  <p className="text-[10px] text-gray-400">
                    Best deals near you
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =====================================
            8 CATEGORIES
        ===================================== */}

        <section
          className="
            mt-4
            grid
            grid-cols-4
            gap-3
            xl:grid-cols-8
          "
        >
          {categories.map((category) => (
            <button
              type="button"
              key={category.id}
              onClick={() =>
                handleCategory(category)
              }
              className="
                group
                flex
                min-h-[82px]
                flex-col
                items-center
                justify-center
                rounded-[14px]
                border
                border-[#ffe5ec]
                bg-[#fff2f5]
                px-2
                text-center
                transition-all
                duration-200
                hover:-translate-y-1
                hover:bg-white
                hover:shadow-lg
              "
            >
              <span
                className="
                  text-[25px]
                  transition-transform
                  group-hover:scale-110
                "
              >
                {category.emoji}
              </span>

              <span
                className="
                  mt-2
                  text-[11px]
                  font-medium
                  text-gray-700
                "
              >
                {category.title}
              </span>
            </button>
          ))}
        </section>


        {/* =====================================
            MAIN DASHBOARD GRID
        ===================================== */}

        <section
          className="
            mt-6
            grid
            grid-cols-1
            gap-6
            xl:grid-cols-[minmax(0,1.65fr)_minmax(310px,0.8fr)]
          "
        >

          {/* =================================
              LEFT COLUMN
          ================================= */}

          <div>

            {/* TOP RATED HEADING */}

            <div
              className="
                mb-3
                flex
                items-center
                justify-between
              "
            >
              <div className="flex items-center gap-2">

                <Star
                  size={18}
                  fill="#ffb020"
                  className="text-[#ffb020]"
                />

                <h2 className="text-[17px] font-bold text-gray-900">
                  Top Rated Salons Near You
                </h2>

              </div>


              <Link
                to="/customer/search"
                className="
                  flex
                  items-center
                  gap-1
                  text-[11px]
                  font-medium
                  text-blue-500
                  hover:text-blue-600
                "
              >
                View All

                <ChevronRight size={14} />
              </Link>
            </div>


            {/* =================================
                SALON CARDS
            ================================= */}

            <div
              className="
                grid
                grid-cols-1
                gap-4
                md:grid-cols-3
              "
            >
              {salons.map((salon) => {
                const isFavourite =
                  favourites.includes(salon.id);

                return (
                  <article
                    key={salon.id}
                    className="
                      group
                      overflow-hidden
                      rounded-[15px]
                      border
                      border-gray-100
                      bg-white
                      shadow-sm
                      transition
                      hover:-translate-y-1
                      hover:shadow-lg
                    "
                  >

                    {/* IMAGE */}

                    <div
                      className="
                        relative
                        h-[145px]
                        overflow-hidden
                      "
                    >
                      <img
                        src={salon.image}
                        alt={salon.name}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition
                          duration-500
                          group-hover:scale-105
                        "
                      />


                      {/* RATING */}

                      <span
                        className="
                          absolute
                          left-2.5
                          top-2.5
                          flex
                          items-center
                          gap-1
                          rounded-full
                          bg-[#ff476f]
                          px-2
                          py-1
                          text-[10px]
                          font-semibold
                          text-white
                        "
                      >
                        <Star
                          size={11}
                          fill="currentColor"
                        />

                        {salon.rating}
                      </span>


                      {/* FAVOURITE */}

                      <button
                        type="button"
                        onClick={() =>
                          toggleFavourite(
                            salon.id
                          )
                        }
                        className={`
                          absolute
                          right-2.5
                          top-2.5
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          bg-white
                          shadow-sm
                          transition

                          ${
                            isFavourite
                              ? "text-[#ff3d73]"
                              : "text-gray-500 hover:text-[#ff3d73]"
                          }
                        `}
                      >
                        <Heart
                          size={16}
                          fill={
                            isFavourite
                              ? "currentColor"
                              : "none"
                          }
                        />
                      </button>


                      {/* DISTANCE */}

                      <span
                        className="
                          absolute
                          bottom-2.5
                          right-2.5
                          flex
                          items-center
                          gap-1
                          rounded-full
                          bg-black/65
                          px-2
                          py-1
                          text-[9px]
                          text-white
                        "
                      >
                        <MapPin size={10} />

                        {salon.distance}
                      </span>

                    </div>


                    {/* CARD CONTENT */}

                    <div className="p-3">

                      <h3 className="text-[13px] font-bold">
                        {salon.name}
                      </h3>


                      <div
                        className="
                          mt-2
                          flex
                          items-center
                          gap-1
                        "
                      >
                        <Star
                          size={13}
                          fill="#ffb020"
                          className="text-[#ffb020]"
                        />

                        <span
                          className="
                            text-[10px]
                            font-semibold
                          "
                        >
                          {salon.rating}
                        </span>

                        <span
                          className="
                            text-[9px]
                            text-gray-400
                          "
                        >
                          ({salon.reviews})
                        </span>
                      </div>


                      <p
                        className="
                          mt-2
                          flex
                          items-center
                          gap-1
                          text-[9px]
                          text-gray-400
                        "
                      >
                        <MapPin size={11} />

                        {salon.location}
                      </p>


                      {/* SERVICES */}

                      <div
                        className="
                          mt-2
                          flex
                          flex-wrap
                          gap-1
                        "
                      >
                        {salon.services.map(
                          (service) => (
                            <span
                              key={service}
                              className="
                                rounded-md
                                bg-gray-50
                                px-2
                                py-1
                                text-[8px]
                                text-gray-500
                              "
                            >
                              {service}
                            </span>
                          )
                        )}
                      </div>


                      {/* VIEW SALON */}

                      <button
                        type="button"
                        onClick={() =>
                          openSalon(salon.id)
                        }
                        className="
                          mt-3
                          w-full
                          rounded-lg
                          bg-[#fff0f4]
                          py-2
                          text-[10px]
                          font-semibold
                          text-[#ff3d73]
                          transition
                          hover:bg-[#ff3d73]
                          hover:text-white
                        "
                      >
                        View Salon
                      </button>

                    </div>
                  </article>
                );
              })}
            </div>


            {/* =================================
                UPCOMING BOOKING
            ================================= */}

            <section className="mt-7">

              <div
                className="
                  mb-3
                  flex
                  items-center
                  justify-between
                "
              >
                <div className="flex items-center gap-2">

                  <CalendarDays
                    size={18}
                    className="text-[#ff3d73]"
                  />

                  <h2 className="text-[17px] font-bold">
                    Your Upcoming Booking
                  </h2>

                </div>


                <Link
                  to="/customer/bookings"
                  className="
                    flex
                    items-center
                    gap-1
                    text-[11px]
                    font-medium
                    text-blue-500
                  "
                >
                  View All

                  <ChevronRight size={14} />
                </Link>
              </div>


              {bookingStatus === "Cancelled" ? (

                /* CANCELLED */

                <div
                  className="
                    rounded-[16px]
                    border
                    border-red-100
                    bg-white
                    p-6
                    text-center
                  "
                >
                  <CalendarDays
                    size={30}
                    className="mx-auto text-red-300"
                  />

                  <h3
                    className="
                      mt-3
                      text-[13px]
                      font-semibold
                      text-gray-800
                    "
                  >
                    Booking Cancelled
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[10px]
                      text-gray-400
                    "
                  >
                    Your Looks Salon booking has been cancelled.
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      navigate(
                        "/customer/search"
                      )
                    }
                    className="
                      mt-4
                      rounded-lg
                      bg-[#ff3d73]
                      px-4
                      py-2
                      text-[10px]
                      font-semibold
                      text-white
                    "
                  >
                    Book Another Salon
                  </button>
                </div>

              ) : (

                /* ACTIVE BOOKING */

                <div
                  className="
                    flex
                    gap-4
                    rounded-[16px]
                    border
                    border-gray-100
                    bg-white
                    p-3
                    shadow-sm
                  "
                >

                  <img
                    src={salons[0].image}
                    alt="Looks Salon"
                    className="
                      h-[105px]
                      w-[125px]
                      rounded-xl
                      object-cover
                    "
                  />


                  <div
                    className="
                      flex
                      flex-1
                      flex-col
                      justify-center
                    "
                  >
                    <h3 className="text-[14px] font-bold">
                      Looks Salon
                    </h3>

                    <p
                      className="
                        mt-1.5
                        flex
                        items-center
                        gap-1
                        text-[10px]
                        text-gray-400
                      "
                    >
                      <MapPin size={12} />

                      Arera Colony, Bhopal
                    </p>


                    <p
                      className="
                        mt-1.5
                        flex
                        items-center
                        gap-1
                        text-[10px]
                        text-gray-500
                      "
                    >
                      <Scissors size={12} />

                      Haircut + Beard Trim
                    </p>


                    <div
                      className="
                        mt-1.5
                        flex
                        gap-4
                      "
                    >

                      <p
                        className="
                          flex
                          items-center
                          gap-1
                          text-[10px]
                          text-gray-500
                        "
                      >
                        <CalendarDays size={12} />

                        12 Oct 2026
                      </p>


                      <p
                        className="
                          flex
                          items-center
                          gap-1
                          text-[10px]
                          text-gray-500
                        "
                      >
                        <Clock3 size={12} />

                        11:00 AM
                      </p>

                    </div>
                  </div>


                  {/* ACTIONS */}

                  <div
                    className="
                      flex
                      min-w-[210px]
                      flex-col
                      items-end
                      justify-between
                    "
                  >

                    <span
                      className="
                        rounded-lg
                        bg-emerald-50
                        px-3
                        py-1.5
                        text-[10px]
                        font-semibold
                        text-emerald-600
                      "
                    >
                      ✓ Confirmed
                    </span>


                    <div className="flex gap-2">

                      {/* RESCHEDULE */}

                      <button
                        type="button"
                        onClick={
                          handleReschedule
                        }
                        className="
                          rounded-lg
                          border
                          border-gray-200
                          px-3
                          py-2
                          text-[10px]
                          font-medium
                          text-gray-600
                          hover:bg-gray-50
                        "
                      >
                        Reschedule
                      </button>


                      {/* CANCEL */}

                      <button
                        type="button"
                        onClick={
                          handleCancelBooking
                        }
                        className="
                          rounded-lg
                          border
                          border-red-100
                          bg-red-50
                          px-3
                          py-2
                          text-[10px]
                          font-medium
                          text-red-500
                          hover:bg-red-100
                        "
                      >
                        Cancel
                      </button>

                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>


          {/* =================================
              RIGHT COLUMN
          ================================= */}

          <aside>

            {/* POPULAR SERVICES */}

            <section>

              <div
                className="
                  mb-3
                  flex
                  items-center
                  justify-between
                "
              >
                <h2 className="text-[17px] font-bold">
                  🔥 Popular Services
                </h2>

                <Link
                  to="/customer/search"
                  className="
                    text-[11px]
                    font-medium
                    text-blue-500
                  "
                >
                  View All
                </Link>
              </div>


              <div className="grid grid-cols-2 gap-3">

                {popularServices.map(
                  (service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() =>
                        navigate(
                          `/customer/search?service=${encodeURIComponent(
                            service.searchService
                          )}`
                        )
                      }
                      className="
                        overflow-hidden
                        rounded-[13px]
                        border
                        border-gray-100
                        bg-white
                        text-left
                        transition
                        hover:-translate-y-1
                        hover:shadow-md
                      "
                    >

                      <img
                        src={service.image}
                        alt={service.title}
                        className="
                          h-[105px]
                          w-full
                          object-cover
                        "
                      />


                      <div className="p-2.5">

                        <h3
                          className="
                            text-[11px]
                            font-semibold
                          "
                        >
                          {service.title}
                        </h3>

                        <p
                          className="
                            mt-1
                            text-[9px]
                            text-gray-400
                          "
                        >
                          From{" "}

                          <span
                            className="
                              font-semibold
                              text-[#ff3d73]
                            "
                          >
                            ₹{service.price}
                          </span>
                        </p>

                      </div>
                    </button>
                  )
                )}

              </div>
            </section>


            {/* =================================
                RECOMMENDED
            ================================= */}

            <section className="mt-7">

              <h2
                className="
                  mb-3
                  text-[17px]
                  font-bold
                "
              >
                👍 Recommended for You
              </h2>


              <div className="space-y-3">

                {recommended.map((salon) => (
                  <button
                    type="button"
                    key={salon.id}
                    onClick={() =>
                      openSalon(salon.id)
                    }
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-[14px]
                      border
                      border-gray-100
                      bg-white
                      p-2.5
                      text-left
                      transition
                      hover:shadow-md
                    "
                  >

                    <img
                      src={salon.image}
                      alt={salon.name}
                      className="
                        h-[68px]
                        w-[78px]
                        rounded-[10px]
                        object-cover
                      "
                    />


                    <div
                      className="
                        min-w-0
                        flex-1
                      "
                    >

                      <h3
                        className="
                          text-[11px]
                          font-bold
                        "
                      >
                        {salon.name}
                      </h3>


                      <p
                        className="
                          mt-1
                          flex
                          items-center
                          gap-1
                          text-[9px]
                        "
                      >
                        <Star
                          size={11}
                          fill="#ffb020"
                          className="text-[#ffb020]"
                        />

                        {salon.rating}

                        <span className="text-gray-400">
                          ({salon.reviews})
                        </span>
                      </p>


                      <p
                        className="
                          mt-1
                          text-[8px]
                          text-gray-400
                        "
                      >
                        {salon.location}
                      </p>

                    </div>


                    <ChevronRight
                      size={15}
                      className="text-gray-300"
                    />

                  </button>
                ))}

              </div>
            </section>


            {/* =================================
                REFER & EARN
            ================================= */}

            <button
              type="button"
              onClick={() =>
                navigate(
                  "/customer/offers?tab=referral"
                )
              }
              className="
                mt-5
                flex
                w-full
                items-center
                gap-3
                rounded-[15px]
                bg-gradient-to-r
                from-[#fff1f5]
                to-[#ffe2eb]
                p-4
                text-left
                transition
                hover:shadow-md
              "
            >

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#ff3d73]
                "
              >
                <Gift size={20} />
              </div>


              <div>

                <h3 className="text-[11px] font-bold">
                  Invite Friends & Earn
                </h3>

                <p
                  className="
                    mt-1
                    text-[9px]
                    text-gray-500
                  "
                >
                  Get ₹100 wallet credit on every referral.
                </p>

              </div>

            </button>

          </aside>

        </section>


        {/* =====================================
            EXTRA LANDING PAGE SECTIONS
        ===================================== */}

        <HomeExtraSections />

      </div>


      {/* =====================================
          FOOTER
      ===================================== */}

      <Footer />
    </>
  );
};

export default CustomerDashboard;