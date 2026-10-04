import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  MapPin,
  Scissors,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  UserRoundCheck,
  WalletCards,
} from "lucide-react";

const steps = [
  {
    id: 1,
    icon: Search,
    number: "01",
    title: "Find a Salon",
    description:
      "Search trusted salons near you by location, service, price and rating.",
  },
  {
    id: 2,
    icon: Scissors,
    number: "02",
    title: "Choose a Service",
    description:
      "Select your preferred service and professional according to your needs.",
  },
  {
    id: 3,
    icon: CalendarCheck,
    number: "03",
    title: "Book Your Slot",
    description:
      "Pick an available date and time and confirm your appointment instantly.",
  },
  {
    id: 4,
    icon: Sparkles,
    number: "04",
    title: "Look & Feel Great",
    description:
      "Visit the salon, enjoy your service and share your experience.",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Verified Salons",
    description:
      "Discover trusted and verified salons with genuine customer reviews.",
  },
  {
    icon: UserRoundCheck,
    title: "Expert Professionals",
    description:
      "Choose experienced barbers, stylists and beauty professionals.",
  },
  {
    icon: CalendarCheck,
    title: "Easy Booking",
    description:
      "Book appointments without calling or waiting at the salon.",
  },
  {
    icon: WalletCards,
    title: "Best Prices & Offers",
    description:
      "Compare services and enjoy exclusive discounts and offers.",
  },
];

const locations = [
  "Bhopal",
  "Indore",
  "Jabalpur",
  "Gwalior",
  "Ujjain",
  "Sagar",
];

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    text:
      "Booking was very easy. I found a nearby salon, selected my service and got an appointment instantly.",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=47",
  },
  {
    id: 2,
    name: "Rahul Verma",
    text:
      "SalonWala makes comparing salons and prices really simple. The booking experience is very smooth.",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 3,
    name: "Sneha Patel",
    text:
      "I loved being able to check ratings, services and available slots before booking.",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=32",
  },
];

const HomeExtraSections = () => {
  return (
    <div className="mt-16">

      {/* =================================
          HOW IT WORKS
      ================================= */}

      <section className="px-2 py-8">
        <div className="text-center">
          <span
            className="
              inline-flex
              rounded-full
              bg-[#fff0f4]
              px-4
              py-2
              text-[11px]
              font-semibold
              text-[#ff3d73]
            "
          >
            Simple & Fast
          </span>

          <h2 className="mt-4 text-[30px] font-bold tracking-[-0.8px] text-gray-900">
            Book Your Salon in
            <span className="text-[#ff3d73]">
              {" "}4 Easy Steps
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-[620px] text-[13px] leading-6 text-gray-500">
            Find the right salon and book your appointment
            without waiting or making multiple calls.
          </p>
        </div>

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="
                  relative
                  rounded-[20px]
                  border
                  border-gray-100
                  bg-white
                  p-6
                  text-center
                  shadow-[0_6px_30px_rgba(0,0,0,0.035)]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_15px_40px_rgba(0,0,0,0.07)]
                "
              >
                <span
                  className="
                    absolute
                    right-4
                    top-3
                    text-[35px]
                    font-black
                    text-[#fff0f4]
                  "
                >
                  {step.number}
                </span>

                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#fff0f4]
                    text-[#ff3d73]
                  "
                >
                  <Icon size={24} />
                </div>

                <h3 className="mt-4 text-[14px] font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-gray-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>


      {/* =================================
          WHY SALONWALA
      ================================= */}

      <section
        className="
          mt-10
          rounded-[28px]
          bg-[#fff7f9]
          px-7
          py-10
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-10
            xl:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* LEFT */}

          <div>
            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#ff3d73]">
              Why SalonWala?
            </span>

            <h2 className="mt-3 text-[32px] font-bold leading-tight tracking-[-1px] text-gray-900">
              Your Trusted Platform for
              <span className="text-[#ff3d73]">
                {" "}Salon & Beauty
              </span>
            </h2>

            <p className="mt-4 max-w-[500px] text-[13px] leading-6 text-gray-500">
              We make salon discovery and booking easier
              by connecting customers with trusted local
              professionals.
            </p>

            <Link
              to="/customer/search"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-[#ff3d73]
                px-5
                py-3
                text-[11px]
                font-semibold
                text-white
                transition
                hover:bg-[#eb2f64]
              "
            >
              Explore Salons
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="
                    rounded-[17px]
                    border
                    border-white
                    bg-white
                    p-5
                    shadow-[0_5px_25px_rgba(0,0,0,0.03)]
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
                      bg-[#fff0f4]
                      text-[#ff3d73]
                    "
                  >
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-4 text-[13px] font-bold text-gray-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-5 text-gray-500">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* =================================
          BARBER / SALON PARTNER CTA
      ================================= */}

      <section
        className="
          relative
          mt-14
          overflow-hidden
          rounded-[28px]
          bg-gradient-to-r
          from-[#211e28]
          via-[#332632]
          to-[#542d3d]
          px-8
          py-11
          text-white
        "
      >
        <div
          className="
            absolute
            -right-20
            -top-28
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#ff3d73]/20
            blur-[70px]
          "
        />

        <div
          className="
            relative
            z-10
            flex
            flex-col
            justify-between
            gap-8
            lg:flex-row
            lg:items-center
          "
        >
          <div className="max-w-[650px]">
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white/10
                px-3
                py-1.5
                text-[10px]
                font-semibold
                text-pink-200
              "
            >
              <Store size={14} />
              For Salon Owners & Barbers
            </div>

            <h2 className="mt-4 text-[32px] font-bold leading-tight">
              Grow Your Salon Business
              <br />
              with
              <span className="text-[#ff7299]">
                {" "}SalonWala
              </span>
            </h2>

            <p className="mt-4 max-w-[600px] text-[12px] leading-6 text-white/65">
              List your salon, receive online bookings,
              manage staff and services, reach new
              customers and grow your business.
            </p>

            <div className="mt-5 flex flex-wrap gap-4">
              {[
                "More Customers",
                "Online Bookings",
                "Manage Services",
                "Business Analytics",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    flex
                    items-center
                    gap-1.5
                    text-[10px]
                    text-white/75
                  "
                >
                  <CheckCircle2
                    size={14}
                    className="text-[#ff7299]"
                  />

                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* REGISTER */}

          <div className="shrink-0">
            <Link
              to="/business"
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-[#ff3d73]
                px-7
                py-3.5
                text-[12px]
                font-bold
                text-white
                shadow-xl
                shadow-black/10
                transition
                hover:-translate-y-0.5
                hover:bg-[#ed2e63]
              "
            >
              Add Your Salon
              <ArrowRight size={17} />
            </Link>

            <p className="mt-2 text-center text-[9px] text-white/45">
              Registration takes only a few minutes
            </p>
          </div>
        </div>
      </section>


      {/* =================================
          POPULAR LOCATIONS
      ================================= */}

      <section className="py-14">
        <div className="text-center">
          <h2 className="text-[27px] font-bold text-gray-900">
            Popular Locations
          </h2>

          <p className="mt-2 text-[12px] text-gray-500">
            Find the best salons in your city.
          </p>
        </div>

        <div
          className="
            mx-auto
            mt-7
            grid
            max-w-[1000px]
            grid-cols-2
            gap-3
            sm:grid-cols-3
            lg:grid-cols-6
          "
        >
          {locations.map((location) => (
            <Link
              key={location}
              to={`/customer/search?location=${encodeURIComponent(
                location
              )}`}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-gray-100
                bg-white
                px-3
                py-4
                text-[11px]
                font-semibold
                text-gray-600
                shadow-sm
                transition
                hover:border-pink-200
                hover:bg-[#fff7f9]
                hover:text-[#ff3d73]
              "
            >
              <MapPin size={15} />
              {location}
            </Link>
          ))}
        </div>
      </section>


      {/* =================================
          REVIEWS
      ================================= */}

      <section className="pb-14">
        <div className="text-center">
          <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#ff3d73]">
            Customer Love
          </span>

          <h2 className="mt-3 text-[27px] font-bold text-gray-900">
            What Our Customers Say
          </h2>
        </div>

        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-5
            md:grid-cols-3
          "
        >
          {reviews.map((review) => (
            <article
              key={review.id}
              className="
                rounded-[18px]
                border
                border-gray-100
                bg-white
                p-5
                shadow-[0_5px_25px_rgba(0,0,0,0.03)]
              "
            >
              <div className="flex gap-1">
                {Array.from({
                  length: review.rating,
                }).map((_, index) => (
                  <Star
                    key={index}
                    size={13}
                    fill="#ffb020"
                    className="text-[#ffb020]"
                  />
                ))}
              </div>

              <p className="mt-4 text-[11px] leading-6 text-gray-500">
                “{review.text}”
              </p>

              <div className="mt-5 flex items-center gap-3">
                <img
                  src={review.image}
                  alt={review.name}
                  className="
                    h-10
                    w-10
                    rounded-full
                    object-cover
                  "
                />

                <div>
                  <h4 className="text-[11px] font-bold text-gray-800">
                    {review.name}
                  </h4>

                  <p className="mt-0.5 text-[9px] text-gray-400">
                    Verified Customer
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeExtraSections;