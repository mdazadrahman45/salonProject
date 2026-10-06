import React, { useMemo, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  MapPin,
  Scissors,
  Star,
  UserRound,
} from "lucide-react";

const professionals = [
  {
    id: 1,
    name: "Any Professional",
    role: "Auto assign best available",
    rating: null,
    image: null,
  },
  {
    id: 2,
    name: "Aman Sharma",
    role: "Senior Hair Stylist",
    rating: 4.9,
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Barber & Grooming Expert",
    rating: 4.8,
    image: "https://i.pravatar.cc/100?img=11",
  },
  {
    id: 4,
    name: "Neha Singh",
    role: "Beauty Specialist",
    rating: 4.7,
    image: "https://i.pravatar.cc/100?img=47",
  },
];

const timeSlots = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
];

const unavailableSlots = [
  "10:30 AM",
  "12:00 PM",
  "03:30 PM",
  "06:00 PM",
];

const BookingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { salonId } = useParams();

  const passedSalon = location.state?.salon;
  const passedServices = location.state?.services || [];

  const salon =
    passedSalon || {
      id: Number(salonId),
      name: "Looks Salon",
      location: "Arera Colony, Bhopal",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
    };

  const services =
    passedServices.length > 0
      ? passedServices
      : [
          {
            id: 1,
            name: "Men Haircut",
            duration: "30 min",
            price: 199,
          },
        ];

  const [selectedProfessional, setSelectedProfessional] =
    useState(professionals[0]);

  const [selectedDate, setSelectedDate] =
    useState(new Date());

  const [selectedTime, setSelectedTime] =
    useState("");

  const nextSevenDays = useMemo(() => {
    return Array.from({ length: 7 }).map((_, index) => {
      const date = new Date();
      date.setDate(date.getDate() + index);
      return date;
    });
  }, []);

  const totalPrice = services.reduce(
    (total, service) => total + service.price,
    0
  );

  const totalMinutes = services.reduce((total, service) => {
    const minutes =
      parseInt(service.duration, 10) || 0;

    return total + minutes;
  }, 0);

  const formatDay = (date) =>
    date.toLocaleDateString("en-IN", {
      weekday: "short",
    });

  const formatDateNumber = (date) =>
    date.toLocaleDateString("en-IN", {
      day: "2-digit",
    });

  const formatMonth = (date) =>
    date.toLocaleDateString("en-IN", {
      month: "short",
    });

  const fullDate = selectedDate.toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );

  const handleContinue = () => {
    if (!selectedTime) {
      alert("Please select a time slot.");
      return;
    }

    navigate("/customer/booking/review", {
      state: {
        salon,
        services,
        professional: selectedProfessional,
        date: fullDate,
        time: selectedTime,
        totalPrice,
        totalMinutes,
      },
    });
  };

  return (
    <div className="mx-auto max-w-[1500px]">
      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="
          mb-5
          flex
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
        Back
      </button>

      {/* PAGE HEADING */}
      <div className="mb-6">
        <h1 className="text-[26px] font-bold tracking-[-0.5px] text-gray-900">
          Book Your Appointment
        </h1>

        <p className="mt-1 text-[12px] text-gray-400">
          Select your professional, date and preferred
          time.
        </p>
      </div>

      {/* STEPS */}
      <div
        className="
          mb-6
          flex
          items-center
          rounded-[16px]
          border
          border-gray-100
          bg-white
          px-5
          py-4
          shadow-[0_4px_20px_rgba(0,0,0,0.025)]
        "
      >
        <div className="flex items-center gap-2 text-[#ff3d73]">
          <div
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              bg-[#ff3d73]
              text-[10px]
              font-bold
              text-white
            "
          >
            <Check size={14} />
          </div>

          <span className="text-[11px] font-semibold">
            Service
          </span>
        </div>

        <div className="mx-4 h-px flex-1 bg-[#ffcbd9]" />

        <div className="flex items-center gap-2 text-[#ff3d73]">
          <div
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              bg-[#ff3d73]
              text-[10px]
              font-bold
              text-white
            "
          >
            2
          </div>

          <span className="text-[11px] font-semibold">
            Schedule
          </span>
        </div>

        <div className="mx-4 h-px flex-1 bg-gray-200" />

        <div className="flex items-center gap-2 text-gray-400">
          <div
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              bg-gray-100
              text-[10px]
              font-bold
            "
          >
            3
          </div>

          <span className="text-[11px] font-semibold">
            Review
          </span>
        </div>

        <div className="mx-4 h-px flex-1 bg-gray-200" />

        <div className="flex items-center gap-2 text-gray-400">
          <div
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              bg-gray-100
              text-[10px]
              font-bold
            "
          >
            4
          </div>

          <span className="text-[11px] font-semibold">
            Payment
          </span>
        </div>
      </div>

      <div
        className="
          grid
          grid-cols-1
          gap-5
          xl:grid-cols-[minmax(0,1fr)_350px]
        "
      >
        {/* LEFT SIDE */}
        <div className="space-y-5">
          {/* PROFESSIONAL */}
          <section
            className="
              rounded-[18px]
              border
              border-gray-100
              bg-white
              p-5
              shadow-[0_4px_25px_rgba(0,0,0,0.03)]
            "
          >
            <div className="mb-5">
              <h2 className="text-[17px] font-bold text-gray-900">
                Choose Professional
              </h2>

              <p className="mt-1 text-[11px] text-gray-400">
                Select your preferred barber or stylist.
              </p>
            </div>

            <div
              className="
                grid
                grid-cols-1
                gap-3
                md:grid-cols-2
              "
            >
              {professionals.map((person) => {
                const selected =
                  selectedProfessional.id ===
                  person.id;

                return (
                  <button
                    key={person.id}
                    onClick={() =>
                      setSelectedProfessional(person)
                    }
                    className={`
                      relative
                      flex
                      items-center
                      gap-3
                      rounded-[14px]
                      border
                      p-3
                      text-left
                      transition
                      ${
                        selected
                          ? "border-[#ff3d73] bg-[#fff6f8]"
                          : "border-gray-100 hover:border-pink-200"
                      }
                    `}
                  >
                    {person.image ? (
                      <img
                        src={person.image}
                        alt={person.name}
                        className="
                          h-12
                          w-12
                          rounded-full
                          object-cover
                        "
                      />
                    ) : (
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-full
                          bg-[#fff0f4]
                          text-[#ff3d73]
                        "
                      >
                        <UserRound size={20} />
                      </div>
                    )}

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-[11px] font-bold text-gray-800">
                        {person.name}
                      </h3>

                      <p className="mt-1 truncate text-[9px] text-gray-400">
                        {person.role}
                      </p>

                      {person.rating && (
                        <div className="mt-1.5 flex items-center gap-1">
                          <Star
                            size={11}
                            fill="#ffb020"
                            className="text-[#ffb020]"
                          />

                          <span className="text-[9px] font-semibold text-gray-600">
                            {person.rating}
                          </span>
                        </div>
                      )}
                    </div>

                    {selected && (
                      <div
                        className="
                          flex
                          h-6
                          w-6
                          items-center
                          justify-center
                          rounded-full
                          bg-[#ff3d73]
                          text-white
                        "
                      >
                        <Check size={13} />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          {/* DATE */}
          <section
            className="
              rounded-[18px]
              border
              border-gray-100
              bg-white
              p-5
              shadow-[0_4px_25px_rgba(0,0,0,0.03)]
            "
          >
            <div className="mb-5 flex items-center gap-2">
              <CalendarDays
                size={19}
                className="text-[#ff3d73]"
              />

              <div>
                <h2 className="text-[17px] font-bold text-gray-900">
                  Select Date
                </h2>

                <p className="mt-1 text-[10px] text-gray-400">
                  Choose your appointment date.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 md:grid-cols-7">
              {nextSevenDays.map((date) => {
                const selected =
                  date.toDateString() ===
                  selectedDate.toDateString();

                return (
                  <button
                    key={date.toISOString()}
                    onClick={() => {
                      setSelectedDate(date);
                      setSelectedTime("");
                    }}
                    className={`
                      rounded-[13px]
                      border
                      px-2
                      py-3
                      text-center
                      transition
                      ${
                        selected
                          ? "border-[#ff3d73] bg-[#ff3d73] text-white shadow-md shadow-pink-100"
                          : "border-gray-100 bg-white text-gray-600 hover:border-pink-200 hover:bg-[#fff7f9]"
                      }
                    `}
                  >
                    <p className="text-[9px] font-medium opacity-80">
                      {formatDay(date)}
                    </p>

                    <p className="mt-1 text-[17px] font-bold">
                      {formatDateNumber(date)}
                    </p>

                    <p className="text-[9px] opacity-80">
                      {formatMonth(date)}
                    </p>
                  </button>
                );
              })}
            </div>
          </section>

          {/* TIME */}
          <section
            className="
              rounded-[18px]
              border
              border-gray-100
              bg-white
              p-5
              shadow-[0_4px_25px_rgba(0,0,0,0.03)]
            "
          >
            <div className="mb-5 flex items-center gap-2">
              <Clock3
                size={19}
                className="text-[#ff3d73]"
              />

              <div>
                <h2 className="text-[17px] font-bold text-gray-900">
                  Select Time
                </h2>

                <p className="mt-1 text-[10px] text-gray-400">
                  Available slots for {fullDate}
                </p>
              </div>
            </div>

            <div
              className="
                grid
                grid-cols-3
                gap-2
                sm:grid-cols-4
                md:grid-cols-5
              "
            >
              {timeSlots.map((time) => {
                const unavailable =
                  unavailableSlots.includes(time);

                const selected =
                  selectedTime === time;

                return (
                  <button
                    key={time}
                    disabled={unavailable}
                    onClick={() =>
                      setSelectedTime(time)
                    }
                    className={`
                      rounded-xl
                      border
                      px-2
                      py-3
                      text-[10px]
                      font-semibold
                      transition
                      ${
                        unavailable
                          ? "cursor-not-allowed border-gray-100 bg-gray-50 text-gray-300 line-through"
                          : selected
                            ? "border-[#ff3d73] bg-[#ff3d73] text-white shadow-md shadow-pink-100"
                            : "border-gray-200 bg-white text-gray-600 hover:border-pink-300 hover:bg-[#fff7f9] hover:text-[#ff3d73]"
                      }
                    `}
                  >
                    {time}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex items-center gap-5 text-[9px] text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white ring-1 ring-gray-300" />
                Available
              </span>

              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff3d73]" />
                Selected
              </span>

              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
                Unavailable
              </span>
            </div>
          </section>
        </div>

        {/* RIGHT SUMMARY */}
        <aside>
          <div
            className="
              sticky
              top-[98px]
              overflow-hidden
              rounded-[18px]
              border
              border-gray-100
              bg-white
              shadow-[0_12px_40px_rgba(0,0,0,0.06)]
            "
          >
            {/* SALON */}
            <div className="relative h-[135px]">
              <img
                src={salon.image}
                alt={salon.name}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-3 left-4 right-4 text-white">
                <h3 className="text-[14px] font-bold">
                  {salon.name}
                </h3>

                <p className="mt-1 flex items-center gap-1 text-[9px] text-white/80">
                  <MapPin size={11} />
                  {salon.location}
                </p>
              </div>
            </div>

            <div className="p-5">
              <h2 className="text-[15px] font-bold text-gray-900">
                Booking Summary
              </h2>

              {/* SERVICES */}
              <div className="mt-4 space-y-3">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                      border-b
                      border-gray-100
                      pb-3
                    "
                  >
                    <div>
                      <p className="flex items-center gap-1.5 text-[10px] font-semibold text-gray-700">
                        <Scissors
                          size={11}
                          className="text-[#ff3d73]"
                        />
                        {service.name}
                      </p>

                      <p className="mt-1 text-[8px] text-gray-400">
                        {service.duration}
                      </p>
                    </div>

                    <strong className="text-[10px] text-gray-800">
                      ₹{service.price}
                    </strong>
                  </div>
                ))}
              </div>

              {/* PROFESSIONAL */}
              <div className="mt-4">
                <p className="text-[9px] text-gray-400">
                  Professional
                </p>

                <p className="mt-1 text-[11px] font-semibold text-gray-700">
                  {selectedProfessional.name}
                </p>
              </div>

              {/* DATE */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div
                  className="
                    rounded-xl
                    bg-[#fff7f9]
                    p-3
                  "
                >
                  <p className="text-[8px] text-gray-400">
                    Date
                  </p>

                  <p className="mt-1 text-[10px] font-semibold text-gray-700">
                    {fullDate}
                  </p>
                </div>

                <div
                  className="
                    rounded-xl
                    bg-[#fff7f9]
                    p-3
                  "
                >
                  <p className="text-[8px] text-gray-400">
                    Time
                  </p>

                  <p
                    className={`
                      mt-1
                      text-[10px]
                      font-semibold
                      ${
                        selectedTime
                          ? "text-gray-700"
                          : "text-gray-400"
                      }
                    `}
                  >
                    {selectedTime ||
                      "Not selected"}
                  </p>
                </div>
              </div>

              {/* TOTAL */}
              <div className="mt-5 space-y-2 border-t border-gray-100 pt-4">
                <div className="flex justify-between text-[9px] text-gray-400">
                  <span>
                    Total Duration
                  </span>

                  <span>
                    {totalMinutes} min
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-gray-700">
                    Total Amount
                  </span>

                  <span className="text-[19px] font-bold text-[#ff3d73]">
                    ₹{totalPrice}
                  </span>
                </div>
              </div>

              {/* BUTTON */}
              <button
                onClick={handleContinue}
                disabled={!selectedTime}
                className={`
                  mt-5
                  flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  text-[11px]
                  font-semibold
                  transition
                  ${
                    selectedTime
                      ? "bg-[#ff3d73] text-white shadow-lg shadow-pink-200/60 hover:bg-[#eb2f64]"
                      : "cursor-not-allowed bg-gray-100 text-gray-400"
                  }
                `}
              >
                Review Booking

                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BookingPage;