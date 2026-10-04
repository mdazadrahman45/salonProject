import React, { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Search,
  MapPin,
  Star,
  Heart,
  SlidersHorizontal,
  ChevronDown,
  X,
} from "lucide-react";

const salons = [
  {
    id: 1,
    name: "Looks Salon",
    location: "Arera Colony, Bhopal",
    distance: "2.1 km",
    rating: 4.8,
    reviews: 512,
    price: 199,
    gender: "Unisex",
    services: ["Haircut", "Hair Color", "Facial", "Nail Care"],
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "The Barber Club",
    location: "MP Nagar, Bhopal",
    distance: "3.4 km",
    rating: 4.6,
    reviews: 431,
    price: 149,
    gender: "Men",
    services: ["Haircut", "Beard Trim", "Grooming"],
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Natura's Salon",
    location: "Kolar Road, Bhopal",
    distance: "3.2 km",
    rating: 4.7,
    reviews: 320,
    price: 299,
    gender: "Unisex",
    services: ["Hair Color", "Facial", "Massage", "Nail Care"],
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Enrich Salon",
    location: "New Market, Bhopal",
    distance: "4.5 km",
    rating: 4.5,
    reviews: 290,
    price: 249,
    gender: "Unisex",
    services: ["Haircut", "Facial", "Waxing", "Massage"],
    image:
      "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Style Studio",
    location: "Habibganj, Bhopal",
    distance: "5.2 km",
    rating: 4.4,
    reviews: 218,
    price: 179,
    gender: "Unisex",
    services: ["Haircut", "Hair Color", "Facial"],
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Royal Barber Shop",
    location: "10 No. Market, Bhopal",
    distance: "2.8 km",
    rating: 4.7,
    reviews: 382,
    price: 129,
    gender: "Men",
    services: ["Haircut", "Beard Trim", "Massage"],
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=80",
  },
];

const serviceOptions = [
  "All",
  "Haircut",
  "Hair Color",
  "Beard Trim",
  "Facial",
  "Massage",
  "Nail Care",
  "Waxing",
];

const SearchSalons = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialService = searchParams.get("service") || "All";

  const [searchText, setSearchText] = useState("");
  const [selectedService, setSelectedService] =
    useState(initialService);
  const [sortBy, setSortBy] = useState("Recommended");
  const [showFilters, setShowFilters] = useState(false);
  const [minimumRating, setMinimumRating] = useState(0);
  const [gender, setGender] = useState("All");

  const selectService = (service) => {
    setSelectedService(service);

    if (service === "All") {
      setSearchParams({});
    } else {
      setSearchParams({
        service,
      });
    }
  };

  const filteredSalons = useMemo(() => {
    let result = salons.filter((salon) => {
      const query = searchText.toLowerCase().trim();

      const matchesSearch =
        !query ||
        salon.name.toLowerCase().includes(query) ||
        salon.location.toLowerCase().includes(query) ||
        salon.services.some((service) =>
          service.toLowerCase().includes(query)
        );

      const matchesService =
        selectedService === "All" ||
        salon.services.some(
          (service) =>
            service.toLowerCase() ===
            selectedService.toLowerCase()
        );

      const matchesRating =
        salon.rating >= minimumRating;

      const matchesGender =
        gender === "All" ||
        salon.gender === gender ||
        salon.gender === "Unisex";

      return (
        matchesSearch &&
        matchesService &&
        matchesRating &&
        matchesGender
      );
    });

    if (sortBy === "Rating High to Low") {
      result = [...result].sort(
        (a, b) => b.rating - a.rating
      );
    }

    if (sortBy === "Price Low to High") {
      result = [...result].sort(
        (a, b) => a.price - b.price
      );
    }

    if (sortBy === "Nearest") {
      result = [...result].sort(
        (a, b) =>
          parseFloat(a.distance) -
          parseFloat(b.distance)
      );
    }

    return result;
  }, [
    searchText,
    selectedService,
    minimumRating,
    gender,
    sortBy,
  ]);

  const clearFilters = () => {
    setSearchText("");
    setSelectedService("All");
    setMinimumRating(0);
    setGender("All");
    setSortBy("Recommended");
    setSearchParams({});
  };

  return (
    <div className="mx-auto max-w-[1600px]">
      {/* PAGE HEADING */}
      <div className="mb-6">
        <h1 className="text-[26px] font-bold tracking-[-0.5px] text-gray-900">
          Find Salons Near You
        </h1>

        <p className="mt-1 text-[13px] text-gray-500">
          Discover trusted salons and beauty
          professionals near your location.
        </p>
      </div>

      {/* SEARCH AREA */}
      <div
        className="
          rounded-[18px]
          border
          border-gray-100
          bg-white
          p-4
          shadow-[0_5px_25px_rgba(0,0,0,0.035)]
        "
      >
        <div className="flex flex-col gap-3 lg:flex-row">
          {/* SEARCH */}
          <div
            className="
              flex
              h-[48px]
              flex-1
              items-center
              gap-3
              rounded-xl
              border
              border-gray-200
              bg-[#fafafa]
              px-4
              focus-within:border-pink-300
              focus-within:bg-white
            "
          >
            <Search
              size={19}
              className="text-gray-400"
            />

            <input
              type="text"
              value={searchText}
              onChange={(e) =>
                setSearchText(e.target.value)
              }
              placeholder="Search salon, service or location..."
              className="
                w-full
                bg-transparent
                text-[13px]
                text-gray-700
                outline-none
                placeholder:text-gray-400
              "
            />

            {searchText && (
              <button
                onClick={() => setSearchText("")}
                className="text-gray-400 hover:text-gray-700"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* LOCATION */}
          <button
            className="
              flex
              h-[48px]
              min-w-[190px]
              items-center
              gap-2
              rounded-xl
              border
              border-gray-200
              bg-white
              px-4
              text-[12px]
              font-medium
              text-gray-600
              transition
              hover:border-pink-200
            "
          >
            <MapPin
              size={17}
              className="text-[#ff3d73]"
            />

            Bhopal, Madhya Pradesh

            <ChevronDown
              size={15}
              className="ml-auto text-gray-400"
            />
          </button>

          {/* FILTER BUTTON */}
          <button
            onClick={() =>
              setShowFilters(!showFilters)
            }
            className={`
              flex
              h-[48px]
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              px-5
              text-[12px]
              font-semibold
              transition
              ${
                showFilters
                  ? "border-[#ff3d73] bg-[#fff0f4] text-[#ff3d73]"
                  : "border-gray-200 bg-white text-gray-600 hover:border-pink-200"
              }
            `}
          >
            <SlidersHorizontal size={17} />
            Filters
          </button>
        </div>

        {/* EXPANDED FILTERS */}
        {showFilters && (
          <div
            className="
              mt-4
              grid
              grid-cols-1
              gap-5
              border-t
              border-gray-100
              pt-4
              md:grid-cols-3
            "
          >
            <div>
              <label className="mb-2 block text-[11px] font-semibold text-gray-700">
                Minimum Rating
              </label>

              <select
                value={minimumRating}
                onChange={(e) =>
                  setMinimumRating(
                    Number(e.target.value)
                  )
                }
                className="
                  h-11
                  w-full
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-3
                  text-[12px]
                  text-gray-600
                  outline-none
                  focus:border-pink-300
                "
              >
                <option value={0}>
                  Any Rating
                </option>
                <option value={4}>
                  4.0 & Above
                </option>
                <option value={4.5}>
                  4.5 & Above
                </option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-[11px] font-semibold text-gray-700">
                Salon Type
              </label>

              <select
                value={gender}
                onChange={(e) =>
                  setGender(e.target.value)
                }
                className="
                  h-11
                  w-full
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-3
                  text-[12px]
                  text-gray-600
                  outline-none
                  focus:border-pink-300
                "
              >
                <option value="All">
                  All
                </option>
                <option value="Men">
                  Men
                </option>
                <option value="Women">
                  Women
                </option>
                <option value="Unisex">
                  Unisex
                </option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={clearFilters}
                className="
                  h-11
                  rounded-xl
                  border
                  border-red-100
                  bg-red-50
                  px-5
                  text-[12px]
                  font-semibold
                  text-red-500
                  transition
                  hover:bg-red-100
                "
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* SERVICE CATEGORIES */}
      <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
        {serviceOptions.map((service) => (
          <button
            key={service}
            onClick={() =>
              selectService(service)
            }
            className={`
              whitespace-nowrap
              rounded-full
              border
              px-4
              py-2
              text-[11px]
              font-medium
              transition
              ${
                selectedService === service
                  ? "border-[#ff3d73] bg-[#ff3d73] text-white"
                  : "border-gray-200 bg-white text-gray-600 hover:border-pink-200 hover:text-[#ff3d73]"
              }
            `}
          >
            {service}
          </button>
        ))}
      </div>

      {/* RESULT HEADER */}
      <div className="mt-6 flex items-center justify-between">
        <div>
          <h2 className="text-[17px] font-bold text-gray-900">
            {selectedService === "All"
              ? "Salons Near You"
              : `${selectedService} Salons`}
          </h2>

          <p className="mt-1 text-[11px] text-gray-400">
            {filteredSalons.length} salons found
          </p>
        </div>

        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
            className="
              h-10
              appearance-none
              rounded-xl
              border
              border-gray-200
              bg-white
              pl-4
              pr-9
              text-[11px]
              font-medium
              text-gray-600
              outline-none
              focus:border-pink-300
            "
          >
            <option>Recommended</option>
            <option>Rating High to Low</option>
            <option>Price Low to High</option>
            <option>Nearest</option>
          </select>

          <ChevronDown
            size={14}
            className="
              pointer-events-none
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              text-gray-400
            "
          />
        </div>
      </div>

      {/* SALON CARDS */}
      {filteredSalons.length > 0 ? (
        <div
          className="
            mt-4
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            xl:grid-cols-3
            2xl:grid-cols-4
          "
        >
          {filteredSalons.map((salon) => (
            <article
              key={salon.id}
              className="
                group
                overflow-hidden
                rounded-[17px]
                border
                border-gray-100
                bg-white
                shadow-[0_5px_25px_rgba(0,0,0,0.035)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_14px_35px_rgba(0,0,0,0.08)]
              "
            >
              {/* IMAGE */}
              <div className="relative h-[190px] overflow-hidden">
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
                <div
                  className="
                    absolute
                    left-3
                    top-3
                    flex
                    items-center
                    gap-1
                    rounded-full
                    bg-[#ff3d73]
                    px-2.5
                    py-1.5
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
                </div>

                {/* FAV */}
                <button
                  className="
                    absolute
                    right-3
                    top-3
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-gray-500
                    shadow
                    transition
                    hover:text-[#ff3d73]
                  "
                >
                  <Heart size={17} />
                </button>

                {/* DISTANCE */}
                <span
                  className="
                    absolute
                    bottom-3
                    right-3
                    flex
                    items-center
                    gap-1
                    rounded-full
                    bg-black/65
                    px-2.5
                    py-1.5
                    text-[9px]
                    text-white
                    backdrop-blur-sm
                  "
                >
                  <MapPin size={10} />

                  {salon.distance}
                </span>
              </div>

              {/* BODY */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-[14px] font-bold text-gray-900">
                      {salon.name}
                    </h3>

                    <p className="mt-1 flex items-center gap-1 text-[10px] text-gray-400">
                      <MapPin size={11} />

                      {salon.location}
                    </p>
                  </div>

                  <span
                    className="
                      rounded-lg
                      bg-[#fff0f4]
                      px-2
                      py-1
                      text-[9px]
                      font-medium
                      text-[#ff3d73]
                    "
                  >
                    {salon.gender}
                  </span>
                </div>

                {/* RATING */}
                <div className="mt-3 flex items-center gap-1">
                  <Star
                    size={13}
                    fill="#ffb020"
                    className="text-[#ffb020]"
                  />

                  <span className="text-[10px] font-semibold text-gray-700">
                    {salon.rating}
                  </span>

                  <span className="text-[9px] text-gray-400">
                    ({salon.reviews} reviews)
                  </span>
                </div>

                {/* SERVICES */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {salon.services.map(
                    (service) => (
                      <span
                        key={service}
                        className="
                          rounded-md
                          bg-gray-50
                          px-2
                          py-1
                          text-[9px]
                          text-gray-500
                        "
                      >
                        {service}
                      </span>
                    )
                  )}
                </div>

                {/* PRICE */}
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                  <div>
                    <p className="text-[9px] text-gray-400">
                      Services starting from
                    </p>

                    <p className="text-[15px] font-bold text-gray-900">
                      ₹{salon.price}
                    </p>
                  </div>

                  <Link
                    to={`/customer/salon/${salon.id}`}
                    className="
                      rounded-xl
                      bg-[#ff3d73]
                      px-4
                      py-2.5
                      text-[10px]
                      font-semibold
                      text-white
                      transition
                      hover:bg-[#eb2e63]
                    "
                  >
                    View Salon
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        /* EMPTY STATE */
        <div
          className="
            mt-8
            rounded-[18px]
            border
            border-gray-100
            bg-white
            px-5
            py-20
            text-center
          "
        >
          <Search
            size={42}
            className="mx-auto text-gray-300"
          />

          <h3 className="mt-4 text-[16px] font-bold text-gray-800">
            No salons found
          </h3>

          <p className="mt-2 text-[12px] text-gray-400">
            Try changing your search or filters.
          </p>

          <button
            onClick={clearFilters}
            className="
              mt-5
              rounded-xl
              bg-[#ff3d73]
              px-5
              py-2.5
              text-[11px]
              font-semibold
              text-white
            "
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchSalons;