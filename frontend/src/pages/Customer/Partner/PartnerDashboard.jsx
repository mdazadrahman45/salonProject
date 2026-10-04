import React from "react";
import {
  CalendarDays,
  Clock3,
  Scissors,
  Star,
  Users,
  Wallet,
} from "lucide-react";

const stats = [
  {
    title: "Today's Bookings",
    value: "12",
    icon: CalendarDays,
  },
  {
    title: "Today's Revenue",
    value: "₹6,450",
    icon: Wallet,
  },
  {
    title: "Total Customers",
    value: "284",
    icon: Users,
  },
  {
    title: "Average Rating",
    value: "4.8",
    icon: Star,
  },
];

const appointments = [
  {
    id: 1,
    customer: "Priya Sharma",
    service: "Haircut + Beard",
    time: "10:00 AM",
    status: "Confirmed",
  },
  {
    id: 2,
    customer: "Aman Verma",
    service: "Haircut",
    time: "11:00 AM",
    status: "Confirmed",
  },
  {
    id: 3,
    customer: "Neha Singh",
    service: "Facial",
    time: "12:30 PM",
    status: "Pending",
  },
];

const PartnerDashboard = () => {
  return (
    <div className="mx-auto max-w-[1500px]">
      <div>
        <h1 className="text-[25px] font-bold">
          Partner Dashboard
        </h1>

        <p className="mt-1 text-[10px] text-gray-400">
          Here's what's happening with
          your business today.
        </p>
      </div>

      <section className="mt-5 grid grid-cols-2 gap-4 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-[18px] border border-gray-100 bg-white p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0f4] text-[#ff3d73]">
                <Icon size={19} />
              </div>

              <p className="mt-4 text-[21px] font-bold">
                {stat.value}
              </p>

              <p className="mt-1 text-[9px] text-gray-400">
                {stat.title}
              </p>
            </div>
          );
        })}
      </section>

      <section className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[1.4fr_.8fr]">
        <div className="rounded-[20px] border border-gray-100 bg-white p-5">
          <h2 className="text-[15px] font-bold">
            Today's Appointments
          </h2>

          <div className="mt-4 space-y-3">
            {appointments.map(
              (appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center gap-4 rounded-xl bg-gray-50 p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff3d73] text-[12px] font-bold text-white">
                    {appointment.customer.charAt(
                      0
                    )}
                  </div>

                  <div className="flex-1">
                    <p className="text-[11px] font-semibold">
                      {appointment.customer}
                    </p>

                    <p className="mt-1 flex items-center gap-1 text-[9px] text-gray-400">
                      <Scissors size={11} />

                      {appointment.service}
                    </p>
                  </div>

                  <div>
                    <p className="flex items-center gap-1 text-[9px] font-semibold">
                      <Clock3 size={11} />

                      {appointment.time}
                    </p>

                    <span className="mt-1 block text-[8px] text-emerald-600">
                      {appointment.status}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="rounded-[20px] bg-gradient-to-br from-[#30222a] to-[#653149] p-6 text-white">
          <p className="text-[10px] text-white/50">
            This Month
          </p>

          <h2 className="mt-2 text-[29px] font-bold">
            ₹84,500
          </h2>

          <p className="mt-1 text-[9px] text-emerald-300">
            ↑ 12.5% from last month
          </p>

          <div className="mt-7 border-t border-white/10 pt-5">
            <p className="text-[10px] text-white/50">
              Completed Bookings
            </p>

            <p className="mt-1 text-[18px] font-bold">
              186
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerDashboard;