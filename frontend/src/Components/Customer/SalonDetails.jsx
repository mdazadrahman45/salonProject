import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Heart,
  MapPin,
  Scissors,
  Share2,
  Star,
  Users,
  Wifi,
  Car,
  Sparkles,
} from "lucide-react";

const salons = [
  {
    id: 1,
    name: "Looks Salon",
    location: "Arera Colony, Bhopal",
    fullAddress:
      "E-3, Arera Colony, Near 10 No. Market, Bhopal, Madhya Pradesh",
    rating: 4.8,
    reviews: 512,
    distance: "2.1 km",
    type: "Unisex Salon",
    openTime: "09:00 AM",
    closeTime: "09:00 PM",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=80",
    about:
      "Looks Salon offers professional hair, beauty and grooming services with experienced stylists and a comfortable salon experience.",
  },
  {
    id: 2,
    name: "The Barber Club",
    location: "MP Nagar, Bhopal",
    fullAddress:
      "Zone-II, MP Nagar, Bhopal, Madhya Pradesh",
    rating: 4.6,
    reviews: 431,
    distance: "3.4 km",
    type: "Men's Salon",
    openTime: "10:00 AM",
    closeTime: "09:30 PM",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1400&q=80",
    about:
      "The Barber Club provides modern haircuts, beard styling and premium grooming services for men.",
  },
  {
    id: 3,
    name: "Natura's Salon",
    location: "Kolar Road, Bhopal",
    fullAddress:
      "Kolar Main Road, Bhopal, Madhya Pradesh",
    rating: 4.7,
    reviews: 320,
    distance: "3.2 km",
    type: "Unisex Salon",
    openTime: "09:30 AM",
    closeTime: "08:30 PM",
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=80",
    about:
      "Natura's Salon offers hair, skin, spa and beauty services with trained beauty professionals.",
  },
];

const services = [
  {
    id: 1,
    name: "Men Haircut",
    description: "Professional haircut with styling",
    duration: "30 min",
    price: 199,
    category: "Hair",
  },
  {
    id: 2,
    name: "Haircut + Beard Trim",
    description: "Haircut with beard trimming & styling",
    duration: "50 min",
    price: 349,
    category: "Combo",
  },
  {
    id: 3,
    name: "Beard Styling",
    description: "Trim, shape and professional beard styling",
    duration: "25 min",
    price: 149,
    category: "Beard",
  },
  {
    id: 4,
    name: "Hair Color",
    description: "Professional hair colouring service",
    duration: "60 min",
    price: 999,
    category: "Hair",
  },
  {
    id: 5,
    name: "Facial",
    description: "Deep cleansing and refreshing facial",
    duration: "45 min",
    price: 499,
    category: "Beauty",
  },
  {
    id: 6,
    name: "Head Massage",
    description: "Relaxing head massage treatment",
    duration: "30 min",
    price: 299,
    category: "Massage",
  },
];

const SalonDetails = () => {
  const { id } = useParams();

  const salon = useMemo(() => {
    return (
      salons.find((item) => item.id === Number(id)) ||
      salons[0]
    );
  }, [id]);

  const [selectedServices, setSelectedServices] =
    useState([]);
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleService = (service) => {
    setSelectedServices((current) => {
      const exists = current.some(
        (item) => item.id === service.id
      );

      if (exists) {
        return current.filter(
          (item) => item.id !== service.id
        );
      }

      return [...current, service];
    });
  };

  const totalPrice = selectedServices.reduce(
    (total, item) => total + item.price,
    0
  );

  const totalMinutes = selectedServices.reduce(
    (total, item) =>
      total + Number(item.duration.split(" ")[0]),
    0
  );

  return (
    <div className="mx-auto max-w-[1600px]">
      {/* BACK */}
      <Link
        to="/customer/search"
        className="
          mb-4
          inline-flex
          items-center
          gap-2
          text-[12px]
          font-medium
          text-gray-500
          transition
          hover:text-[#ff3d73]
        "
      >
        <ArrowLeft size={16} />
        Back to Salons
      </Link>

      {/* COVER IMAGE */}
      <section
        className="
          relative
          h-[330px]
          overflow-hidden
          rounded-[22px]
          bg-gray-200
        "
      >
        <img
          src={salon.image}
          alt={salon.name}
          className="h-full w-full object-cover"
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/65
            via-black/10
            to-transparent
          "
        />

        {/* TOP ACTIONS */}
        <div className="absolute right-5 top-5 flex gap-2">
          <button
            onClick={() =>
              setIsFavourite(!isFavourite)
            }
            className={`
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white
              shadow-lg
              transition
              ${
                isFavourite
                  ? "text-[#ff3d73]"
                  : "text-gray-600 hover:text-[#ff3d73]"
              }
            `}
          >
            <Heart
              size={20}
              fill={
                isFavourite
                  ? "currentColor"
                  : "none"
              }
            />
          </button>

          <button
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white
              text-gray-600
              shadow-lg
              transition
              hover:text-[#ff3d73]
            "
          >
            <Share2 size={19} />
          </button>
        </div>

        {/* SALON INFO ON IMAGE */}
        <div className="absolute bottom-6 left-7 right-7 text-white">
          <div className="mb-2 flex items-center gap-2">
            <span
              className="
                rounded-full
                bg-[#ff3d73]
                px-3
                py-1
                text-[10px]
                font-semibold
              "
            >
              {salon.type}
            </span>

            <span
              className="
                rounded-full
                bg-white/20
                px-3
                py-1
                text-[10px]
                backdrop-blur
              "
            >
              {salon.distance} away
            </span>
          </div>

          <h1 className="text-[30px] font-bold">
            {salon.name}
          </h1>

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1">
              <Star
                size={16}
                fill="#ffb020"
                className="text-[#ffb020]"
              />

              <span className="text-[12px] font-semibold">
                {salon.rating}
              </span>

              <span className="text-[11px] text-white/80">
                ({salon.reviews} reviews)
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[11px]">
              <MapPin size={14} />
              {salon.location}
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section
        className="
          mt-5
          grid
          grid-cols-1
          gap-5
          xl:grid-cols-[minmax(0,1fr)_350px]
        "
      >
        {/* LEFT */}
        <div className="space-y-5">
          {/* ABOUT */}
          <div
            className="
              rounded-[18px]
              border
              border-gray-100
              bg-white
              p-5
              shadow-[0_5px_25px_rgba(0,0,0,0.03)]
            "
          >
            <h2 className="text-[17px] font-bold text-gray-900">
              About {salon.name}
            </h2>

            <p className="mt-3 text-[12px] leading-6 text-gray-500">
              {salon.about}
            </p>

            <div
              className="
                mt-5
                grid
                grid-cols-1
                gap-3
                border-t
                border-gray-100
                pt-5
                sm:grid-cols-2
              "
            >
              <div className="flex items-start gap-3">
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
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-[11px] font-semibold text-gray-800">
                    Address
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-gray-400">
                    {salon.fullAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
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
                  <Clock3 size={18} />
                </div>

                <div>
                  <p className="text-[11px] font-semibold text-gray-800">
                    Opening Hours
                  </p>

                  <p className="mt-1 text-[10px] text-gray-400">
                    Today: {salon.openTime} -{" "}
                    {salon.closeTime}
                  </p>

                  <span className="mt-1 inline-block text-[9px] font-semibold text-emerald-600">
                    ● Open Now
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div
            className="
              rounded-[18px]
              border
              border-gray-100
              bg-white
              p-5
              shadow-[0_5px_25px_rgba(0,0,0,0.03)]
            "
          >
            <div className="mb-5">
              <h2 className="text-[17px] font-bold text-gray-900">
                Select Services
              </h2>

              <p className="mt-1 text-[11px] text-gray-400">
                You can select one or multiple services.
              </p>
            </div>

            <div className="space-y-3">
              {services.map((service) => {
                const selected =
                  selectedServices.some(
                    (item) =>
                      item.id === service.id
                  );

                return (
                  <button
                    key={service.id}
                    onClick={() =>
                      toggleService(service)
                    }
                    className={`
                      flex
                      w-full
                      items-center
                      gap-4
                      rounded-[14px]
                      border
                      p-4
                      text-left
                      transition-all
                      ${
                        selected
                          ? "border-[#ff3d73] bg-[#fff7f9]"
                          : "border-gray-100 bg-white hover:border-pink-200"
                      }
                    `}
                  >
                    <div
                      className={`
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        ${
                          selected
                            ? "bg-[#ff3d73] text-white"
                            : "bg-[#fff0f4] text-[#ff3d73]"
                        }
                      `}
                    >
                      {selected ? (
                        <Check size={18} />
                      ) : (
                        <Scissors size={18} />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-[12px] font-bold text-gray-800">
                          {service.name}
                        </h3>

                        <span
                          className="
                            rounded-md
                            bg-gray-50
                            px-2
                            py-1
                            text-[8px]
                            text-gray-400
                          "
                        >
                          {service.category}
                        </span>
                      </div>

                      <p className="mt-1 text-[10px] text-gray-400">
                        {service.description}
                      </p>

                      <div className="mt-2 flex items-center gap-1 text-[9px] text-gray-400">
                        <Clock3 size={11} />
                        {service.duration}
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-[14px] font-bold text-gray-900">
                        ₹{service.price}
                      </p>

                      <span
                        className={`
                          mt-2
                          inline-block
                          rounded-lg
                          px-3
                          py-1.5
                          text-[9px]
                          font-semibold
                          ${
                            selected
                              ? "bg-[#ff3d73] text-white"
                              : "bg-[#fff0f4] text-[#ff3d73]"
                          }
                        `}
                      >
                        {selected ? "Selected" : "Add"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* AMENITIES */}
          <div
            className="
              rounded-[18px]
              border
              border-gray-100
              bg-white
              p-5
              shadow-[0_5px_25px_rgba(0,0,0,0.03)]
            "
          >
            <h2 className="text-[17px] font-bold text-gray-900">
              Amenities
            </h2>

            <div
              className="
                mt-4
                grid
                grid-cols-2
                gap-3
                sm:grid-cols-4
              "
            >
              {[
                {
                  icon: Wifi,
                  label: "Free Wi-Fi",
                },
                {
                  icon: Car,
                  label: "Parking",
                },
                {
                  icon: Sparkles,
                  label: "Premium Products",
                },
                {
                  icon: Users,
                  label: "Expert Staff",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="
                      flex
                      flex-col
                      items-center
                      justify-center
                      rounded-xl
                      bg-gray-50
                      px-3
                      py-4
                      text-center
                    "
                  >
                    <Icon
                      size={20}
                      className="text-[#ff3d73]"
                    />

                    <span className="mt-2 text-[9px] font-medium text-gray-600">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT BOOKING SUMMARY */}
        <aside>
          <div
            className="
              sticky
              top-[98px]
              rounded-[18px]
              border
              border-gray-100
              bg-white
              p-5
              shadow-[0_12px_40px_rgba(0,0,0,0.06)]
            "
          >
            <h2 className="text-[17px] font-bold text-gray-900">
              Your Booking
            </h2>

            <p className="mt-1 text-[10px] text-gray-400">
              Select your services to continue.
            </p>

            {selectedServices.length === 0 ? (
              <div
                className="
                  my-6
                  rounded-xl
                  bg-[#fff8fa]
                  px-4
                  py-8
                  text-center
                "
              >
                <Scissors
                  size={30}
                  className="mx-auto text-pink-200"
                />

                <p className="mt-3 text-[11px] font-medium text-gray-500">
                  No services selected
                </p>

                <p className="mt-1 text-[9px] text-gray-400">
                  Choose a service from the list.
                </p>
              </div>
            ) : (
              <div className="my-5 space-y-3">
                {selectedServices.map((service) => (
                  <div
                    key={service.id}
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3
                      border-b
                      border-gray-100
                      pb-3
                    "
                  >
                    <div>
                      <p className="text-[10px] font-semibold text-gray-700">
                        {service.name}
                      </p>

                      <p className="mt-1 text-[8px] text-gray-400">
                        {service.duration}
                      </p>
                    </div>

                    <span className="text-[10px] font-bold text-gray-800">
                      ₹{service.price}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-3 border-t border-gray-100 pt-4">
              <div className="flex justify-between text-[10px] text-gray-500">
                <span>Services</span>
                <span>
                  {selectedServices.length}
                </span>
              </div>

              <div className="flex justify-between text-[10px] text-gray-500">
                <span>Duration</span>
                <span>
                  {totalMinutes} min
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                <span className="text-[12px] font-semibold text-gray-700">
                  Total
                </span>

                <span className="text-[18px] font-bold text-[#ff3d73]">
                  ₹{totalPrice}
                </span>
              </div>
            </div>

            {selectedServices.length > 0 ? (
              <Link
                to={`/customer/booking/${salon.id}`}
                state={{
                  salon,
                  services: selectedServices,
                }}
                className="
                  mt-5
                  flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#ff3d73]
                  text-[11px]
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-pink-200/60
                  transition
                  hover:bg-[#ec2f65]
                "
              >
                Continue Booking
                <ChevronRight size={16} />
              </Link>
            ) : (
              <button
                disabled
                className="
                  mt-5
                  flex
                  h-12
                  w-full
                  cursor-not-allowed
                  items-center
                  justify-center
                  rounded-xl
                  bg-gray-100
                  text-[11px]
                  font-semibold
                  text-gray-400
                "
              >
                Select Service First
              </button>
            )}

            <div
              className="
                mt-4
                flex
                items-center
                justify-center
                gap-2
                text-[9px]
                text-gray-400
              "
            >
              <CalendarDays size={12} />
              Choose date & time in next step
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default SalonDetails;