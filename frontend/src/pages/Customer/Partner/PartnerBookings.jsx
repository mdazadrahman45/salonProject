import React, { useState } from "react";
import {
  CalendarDays,
  Check,
  Clock3,
  Search,
  X,
} from "lucide-react";

const initialBookings = [
  {
    id: "SW101",
    customer: "Priya Sharma",
    service: "Haircut + Beard",
    date: "04 Oct 2026",
    time: "10:00 AM",
    amount: 349,
    status: "Pending",
  },
  {
    id: "SW102",
    customer: "Rahul Verma",
    service: "Haircut",
    date: "04 Oct 2026",
    time: "11:30 AM",
    amount: 199,
    status: "Confirmed",
  },
  {
    id: "SW103",
    customer: "Neha Singh",
    service: "Facial",
    date: "04 Oct 2026",
    time: "02:00 PM",
    amount: 499,
    status: "Confirmed",
  },
];

const PartnerBookings = () => {
  const [bookings, setBookings] =
    useState(initialBookings);

  const updateStatus = (
    id,
    status
  ) => {
    setBookings((current) =>
      current.map((booking) =>
        booking.id === id
          ? {
              ...booking,
              status,
            }
          : booking
      )
    );
  };

  return (
    <div className="mx-auto max-w-[1500px]">
      <h1 className="text-[25px] font-bold">
        Bookings
      </h1>

      <p className="mt-1 text-[10px] text-gray-400">
        Manage customer appointment requests.
      </p>

      <div className="mt-5 flex h-11 max-w-[420px] items-center rounded-xl border border-gray-200 bg-white px-4">
        <Search
          size={16}
          className="text-gray-400"
        />

        <input
          placeholder="Search booking or customer..."
          className="ml-3 w-full text-[10px] outline-none"
        />
      </div>

      <div className="mt-5 overflow-hidden rounded-[18px] border border-gray-100 bg-white">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="flex items-center gap-5 border-b border-gray-100 p-5 last:border-none"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff0f4] text-[11px] font-bold text-[#ff3d73]">
              {booking.customer.charAt(0)}
            </div>

            <div className="min-w-[170px] flex-1">
              <p className="text-[11px] font-bold">
                {booking.customer}
              </p>

              <p className="mt-1 text-[9px] text-gray-400">
                #{booking.id} •{" "}
                {booking.service}
              </p>
            </div>

            <p className="flex items-center gap-1 text-[9px] text-gray-500">
              <CalendarDays size={12} />
              {booking.date}
            </p>

            <p className="flex items-center gap-1 text-[9px] text-gray-500">
              <Clock3 size={12} />
              {booking.time}
            </p>

            <strong className="text-[11px]">
              ₹{booking.amount}
            </strong>

            <span
              className={`rounded-lg px-3 py-1.5 text-[8px] font-semibold ${
                booking.status ===
                "Confirmed"
                  ? "bg-emerald-50 text-emerald-600"
                  : booking.status ===
                      "Rejected"
                    ? "bg-red-50 text-red-500"
                    : "bg-amber-50 text-amber-600"
              }`}
            >
              {booking.status}
            </span>

            {booking.status ===
              "Pending" && (
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    updateStatus(
                      booking.id,
                      "Confirmed"
                    )
                  }
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600"
                >
                  <Check size={14} />
                </button>

                <button
                  onClick={() =>
                    updateStatus(
                      booking.id,
                      "Rejected"
                    )
                  }
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-500"
                >
                  <X size={14} />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerBookings;