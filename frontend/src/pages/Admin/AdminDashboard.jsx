import React from "react";
import {
  Store,
  Users,
  CalendarDays,
  IndianRupee,
  TrendingUp,
  Clock3,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Salons",
      value: "248",
      change: "+12.5%",
      icon: Store,
    },
    {
      title: "Total Customers",
      value: "8,542",
      change: "+18.2%",
      icon: Users,
    },
    {
      title: "Total Bookings",
      value: "12,486",
      change: "+10.4%",
      icon: CalendarDays,
    },
    {
      title: "Total Revenue",
      value: "₹8,45,620",
      change: "+22.8%",
      icon: IndianRupee,
    },
  ];

  const recentBookings = [
    {
      id: "#BK1001",
      customer: "Rahul Sharma",
      salon: "Looks Salon",
      service: "Haircut",
      amount: "₹499",
      status: "Confirmed",
    },
    {
      id: "#BK1002",
      customer: "Priya Verma",
      salon: "Glow Studio",
      service: "Facial",
      amount: "₹899",
      status: "Pending",
    },
    {
      id: "#BK1003",
      customer: "Amit Singh",
      salon: "Urban Cut",
      service: "Beard Styling",
      amount: "₹299",
      status: "Completed",
    },
    {
      id: "#BK1004",
      customer: "Neha Gupta",
      salon: "Beauty Lounge",
      service: "Hair Spa",
      amount: "₹1,299",
      status: "Confirmed",
    },
    {
      id: "#BK1005",
      customer: "Karan Patel",
      salon: "The Barber Club",
      service: "Haircut + Beard",
      amount: "₹649",
      status: "Pending",
    },
  ];

  const pendingSalons = [
    {
      name: "Royal Hair Studio",
      owner: "Aman Khan",
      city: "Indore",
    },
    {
      name: "Style Hub",
      owner: "Rohit Verma",
      city: "Bhopal",
    },
    {
      name: "Glow & Grace",
      owner: "Sneha Jain",
      city: "Delhi",
    },
    {
      name: "Urban Look Salon",
      owner: "Vikas Sharma",
      city: "Noida",
    },
  ];

  const getStatusClass = (status) => {
    if (status === "Confirmed") {
      return "bg-blue-50 text-blue-600";
    }

    if (status === "Completed") {
      return "bg-green-50 text-green-600";
    }

    return "bg-yellow-50 text-yellow-600";
  };

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Dashboard Overview
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Monitor platform activity, bookings, salons and revenue.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-600">
          Last updated: Today
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-gray-900">
                    {item.value}
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-[#e11d48]">
                  <Icon size={23} />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <div className="flex items-center gap-1 text-sm font-semibold text-green-600">
                  <TrendingUp size={15} />
                  {item.change}
                </div>

                <span className="text-xs text-gray-400">
                  from last month
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.5fr_1fr]">
        {/* Revenue Overview */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Revenue Overview
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Monthly platform revenue performance
              </p>
            </div>

            <select className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 outline-none">
              <option>Last 6 Months</option>
              <option>Last 12 Months</option>
              <option>This Year</option>
            </select>
          </div>

          {/* Fake Chart */}
          <div className="mt-8 flex h-[260px] items-end justify-between gap-3">
            {[
              { month: "May", height: "42%" },
              { month: "Jun", height: "55%" },
              { month: "Jul", height: "48%" },
              { month: "Aug", height: "68%" },
              { month: "Sep", height: "75%" },
              { month: "Oct", height: "88%" },
            ].map((item) => (
              <div
                key={item.month}
                className="flex h-full flex-1 flex-col items-center justify-end gap-2"
              >
                <div className="flex h-full w-full items-end justify-center">
                  <div
                    style={{ height: item.height }}
                    className="w-[55%] rounded-t-xl bg-[#e11d48] transition hover:opacity-80"
                  ></div>
                </div>

                <span className="text-xs font-medium text-gray-500">
                  {item.month}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Summary */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Booking Summary
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Today's booking activity
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between rounded-xl bg-green-50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-green-600">
                  <CheckCircle2 size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Completed
                  </p>

                  <p className="text-xs text-gray-500">
                    Finished bookings
                  </p>
                </div>
              </div>

              <span className="text-xl font-bold text-green-600">
                146
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-blue-50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-blue-600">
                  <CalendarDays size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Confirmed
                  </p>

                  <p className="text-xs text-gray-500">
                    Upcoming bookings
                  </p>
                </div>
              </div>

              <span className="text-xl font-bold text-blue-600">
                84
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-yellow-50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-yellow-600">
                  <Clock3 size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Pending
                  </p>

                  <p className="text-xs text-gray-500">
                    Awaiting confirmation
                  </p>
                </div>
              </div>

              <span className="text-xl font-bold text-yellow-600">
                28
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.5fr_1fr]">
        {/* Recent Bookings */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-100 p-5">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Recent Bookings
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Latest customer booking activity
              </p>
            </div>

            <button className="flex items-center gap-1 text-sm font-semibold text-[#e11d48]">
              View All
              <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-500">
                    Booking
                  </th>

                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-500">
                    Customer
                  </th>

                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-500">
                    Salon
                  </th>

                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-500">
                    Service
                  </th>

                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-500">
                    Amount
                  </th>

                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase text-gray-500">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-5 py-4 text-sm font-semibold text-gray-700">
                      {booking.id}
                    </td>

                    <td className="px-5 py-4 text-sm text-gray-600">
                      {booking.customer}
                    </td>

                    <td className="px-5 py-4 text-sm text-gray-600">
                      {booking.salon}
                    </td>

                    <td className="px-5 py-4 text-sm text-gray-600">
                      {booking.service}
                    </td>

                    <td className="px-5 py-4 text-sm font-semibold text-gray-800">
                      {booking.amount}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                          booking.status
                        )}`}
                      >
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pending Salons */}
        <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="border-b border-gray-100 p-5">
            <h2 className="text-lg font-bold text-gray-900">
              Pending Salon Approvals
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              New partner registration requests
            </p>
          </div>

          <div className="divide-y divide-gray-100">
            {pendingSalons.map((salon) => (
              <div
                key={salon.name}
                className="flex items-center justify-between gap-3 p-4"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-50 font-bold text-[#e11d48]">
                    {salon.name.charAt(0)}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-gray-900">
                      {salon.name}
                    </p>

                    <p className="mt-0.5 truncate text-xs text-gray-500">
                      {salon.owner} • {salon.city}
                    </p>
                  </div>
                </div>

                <button className="shrink-0 rounded-lg bg-[#e11d48] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#be123c]">
                  Review
                </button>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 p-4">
            <button className="w-full rounded-xl border border-gray-200 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-50">
              View All Requests
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;