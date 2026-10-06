import React, { useMemo, useState } from "react";
import {
  CalendarDays,
  Search,
  Filter,
  Eye,
  CheckCircle2,
  Clock3,
  XCircle,
  IndianRupee,
  ChevronDown,
  X,
  User,
  Store,
  Scissors,
  Calendar,
  Clock,
  Phone,
  MapPin,
  CircleCheckBig,
  Ban,
} from "lucide-react";

const AdminBookings = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedBooking, setSelectedBooking] = useState(null);

  const [bookings, setBookings] = useState([
    {
      id: "BK001",
      customer: "Rahul Sharma",
      mobile: "9876543210",
      salon: "Looks Salon",
      salonLocation: "Bhopal, MP",
      service: "Haircut",
      staff: "Amit Kumar",
      date: "12 Oct 2026",
      time: "10:30 AM",
      amount: 499,
      payment: "Paid",
      status: "Completed",
    },
    {
      id: "BK002",
      customer: "Priya Singh",
      mobile: "9823456710",
      salon: "Natura's Salon",
      salonLocation: "Indore, MP",
      service: "Hair Spa",
      staff: "Pooja Sharma",
      date: "12 Oct 2026",
      time: "09:15 AM",
      amount: 799,
      payment: "Paid",
      status: "Confirmed",
    },
    {
      id: "BK003",
      customer: "Aman Verma",
      mobile: "9898989898",
      salon: "The Barber Club",
      salonLocation: "Bhopal, MP",
      service: "Beard Styling",
      staff: "Rohit Singh",
      date: "12 Oct 2026",
      time: "08:45 AM",
      amount: 299,
      payment: "Pending",
      status: "Pending",
    },
    {
      id: "BK004",
      customer: "Neha Patel",
      mobile: "9765432100",
      salon: "Glam Hub",
      salonLocation: "Jabalpur, MP",
      service: "Facial",
      staff: "Sneha Jain",
      date: "11 Oct 2026",
      time: "07:20 PM",
      amount: 999,
      payment: "Paid",
      status: "Completed",
    },
    {
      id: "BK005",
      customer: "Vikram Joshi",
      mobile: "9998877665",
      salon: "Enrich Salon",
      salonLocation: "Indore, MP",
      service: "Haircut + Beard",
      staff: "Karan Patel",
      date: "11 Oct 2026",
      time: "06:10 PM",
      amount: 499,
      payment: "Refunded",
      status: "Cancelled",
    },
    {
      id: "BK006",
      customer: "Sneha Jain",
      mobile: "9123456789",
      salon: "Style Studio",
      salonLocation: "Ujjain, MP",
      service: "Hair Colour",
      staff: "Riya Sharma",
      date: "10 Oct 2026",
      time: "04:00 PM",
      amount: 1499,
      payment: "Paid",
      status: "Confirmed",
    },
    {
      id: "BK007",
      customer: "Karan Singh",
      mobile: "9876501234",
      salon: "Urban Scissors",
      salonLocation: "Bhopal, MP",
      service: "Haircut",
      staff: "Arjun Yadav",
      date: "10 Oct 2026",
      time: "02:30 PM",
      amount: 399,
      payment: "Pending",
      status: "Pending",
    },
  ]);

  const stats = useMemo(() => {
    return {
      total: bookings.length,
      completed: bookings.filter(
        (item) => item.status === "Completed"
      ).length,
      pending: bookings.filter(
        (item) => item.status === "Pending"
      ).length,
      cancelled: bookings.filter(
        (item) => item.status === "Cancelled"
      ).length,
      revenue: bookings
        .filter((item) => item.status === "Completed")
        .reduce((sum, item) => sum + item.amount, 0),
    };
  }, [bookings]);

  const filteredBookings = useMemo(() => {
    return bookings.filter((booking) => {
      const query = search.toLowerCase();

      const matchesSearch =
        booking.id.toLowerCase().includes(query) ||
        booking.customer.toLowerCase().includes(query) ||
        booking.salon.toLowerCase().includes(query) ||
        booking.service.toLowerCase().includes(query) ||
        booking.mobile.includes(query);

      const matchesStatus =
        statusFilter === "All" ||
        booking.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [bookings, search, statusFilter]);

  const updateBookingStatus = (id, status) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id
          ? { ...booking, status }
          : booking
      )
    );

    if (selectedBooking?.id === id) {
      setSelectedBooking((prev) => ({
        ...prev,
        status,
      }));
    }
  };

  const statusClass = (status) => {
    if (status === "Completed") {
      return "bg-emerald-50 text-emerald-600 border-emerald-100";
    }

    if (status === "Confirmed") {
      return "bg-blue-50 text-blue-600 border-blue-100";
    }

    if (status === "Cancelled") {
      return "bg-rose-50 text-rose-600 border-rose-100";
    }

    return "bg-amber-50 text-amber-600 border-amber-100";
  };

  const paymentClass = (payment) => {
    if (payment === "Paid") {
      return "text-emerald-600";
    }

    if (payment === "Refunded") {
      return "text-rose-500";
    }

    return "text-amber-600";
  };

  const formatMoney = (amount) => {
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  return (
    <>
      <div className="space-y-6">
        {/* Heading */}
        <div>
          <p className="text-sm font-medium text-violet-600">
            Booking Management
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900">
            All Bookings
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Monitor and manage customer bookings across all salons.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
          <StatCard
            title="Total Bookings"
            value={stats.total}
            subtitle="All bookings"
            icon={CalendarDays}
            color="bg-violet-50 text-violet-600"
          />

          <StatCard
            title="Completed"
            value={stats.completed}
            subtitle="Successfully completed"
            icon={CheckCircle2}
            color="bg-emerald-50 text-emerald-600"
          />

          <StatCard
            title="Pending"
            value={stats.pending}
            subtitle="Awaiting confirmation"
            icon={Clock3}
            color="bg-amber-50 text-amber-600"
          />

          <StatCard
            title="Cancelled"
            value={stats.cancelled}
            subtitle="Cancelled bookings"
            icon={XCircle}
            color="bg-rose-50 text-rose-600"
          />

          <StatCard
            title="Revenue"
            value={formatMoney(stats.revenue)}
            subtitle="Completed bookings"
            icon={IndianRupee}
            color="bg-blue-50 text-blue-600"
          />
        </div>

        {/* Table Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* Filters */}
          <div className="border-b border-slate-100 p-5">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Booking List
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  View booking details, status and payment information.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                {/* Search */}
                <div className="flex min-w-[320px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4">
                  <Search
                    size={18}
                    className="text-slate-400"
                  />

                  <input
                    type="text"
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    placeholder="Search booking, customer, salon..."
                    className="w-full bg-transparent py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </div>

                {/* Filter */}
                <div className="relative">
                  <Filter
                    size={17}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <select
                    value={statusFilter}
                    onChange={(e) =>
                      setStatusFilter(e.target.value)
                    }
                    className="min-h-[46px] appearance-none rounded-xl border border-slate-200 bg-white py-2 pl-10 pr-10 text-sm font-medium text-slate-600 outline-none"
                  >
                    <option value="All">
                      All Status
                    </option>

                    <option value="Pending">
                      Pending
                    </option>

                    <option value="Confirmed">
                      Confirmed
                    </option>

                    <option value="Completed">
                      Completed
                    </option>

                    <option value="Cancelled">
                      Cancelled
                    </option>
                  </select>

                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1200px]">
              <thead>
                <tr className="bg-[#f8f7ff]">
                  <TableHead>Booking ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Salon</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredBookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="transition hover:bg-slate-50"
                  >
                    <td className="px-5 py-4 text-sm font-bold text-violet-600">
                      #{booking.id}
                    </td>

                    {/* Customer */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 font-bold text-violet-700">
                          {booking.customer
                            .charAt(0)
                            .toUpperCase()}
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {booking.customer}
                          </p>

                          <p className="text-xs text-slate-400">
                            {booking.mobile}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Salon */}
                    <td className="px-5 py-4">
                      <p className="text-sm font-semibold text-slate-700">
                        {booking.salon}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {booking.salonLocation}
                      </p>
                    </td>

                    {/* Service */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Scissors
                          size={15}
                          className="text-violet-500"
                        />

                        {booking.service}
                      </div>

                      <p className="mt-1 text-xs text-slate-400">
                        Staff: {booking.staff}
                      </p>
                    </td>

                    {/* Date */}
                    <td className="px-5 py-4">
                      <p className="flex items-center gap-1.5 text-sm text-slate-600">
                        <Calendar
                          size={14}
                          className="text-violet-500"
                        />

                        {booking.date}
                      </p>

                      <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-400">
                        <Clock size={13} />
                        {booking.time}
                      </p>
                    </td>

                    {/* Amount */}
                    <td className="px-5 py-4 text-sm font-bold text-slate-800">
                      {formatMoney(booking.amount)}
                    </td>

                    {/* Payment */}
                    <td className="px-5 py-4">
                      <span
                        className={`text-sm font-semibold ${paymentClass(
                          booking.payment
                        )}`}
                      >
                        {booking.payment}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${statusClass(
                          booking.status
                        )}`}
                      >
                        {booking.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            setSelectedBooking(booking)
                          }
                          title="View Booking"
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition hover:bg-blue-100"
                        >
                          <Eye size={17} />
                        </button>

                        {booking.status === "Pending" && (
                          <button
                            onClick={() =>
                              updateBookingStatus(
                                booking.id,
                                "Confirmed"
                              )
                            }
                            title="Confirm Booking"
                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition hover:bg-emerald-100"
                          >
                            <CircleCheckBig size={17} />
                          </button>
                        )}

                        {booking.status !== "Cancelled" &&
                          booking.status !==
                            "Completed" && (
                            <button
                              onClick={() =>
                                updateBookingStatus(
                                  booking.id,
                                  "Cancelled"
                                )
                              }
                              title="Cancel Booking"
                              className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-50 text-rose-600 transition hover:bg-rose-100"
                            >
                              <Ban size={17} />
                            </button>
                          )}
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredBookings.length === 0 && (
                  <tr>
                    <td
                      colSpan="9"
                      className="px-5 py-16 text-center"
                    >
                      <CalendarDays
                        size={42}
                        className="mx-auto text-slate-300"
                      />

                      <h3 className="mt-3 font-semibold text-slate-700">
                        No bookings found
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        Try changing the search or status filter.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-3 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <strong>
                {filteredBookings.length}
              </strong>{" "}
              of <strong>{bookings.length}</strong>{" "}
              bookings
            </p>

            <div className="flex gap-2">
              <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-500">
                Previous
              </button>

              <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white">
                1
              </button>

              <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-600">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Details Modal */}
      {selectedBooking && (
        <div
          onClick={() => setSelectedBooking(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[680px] overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 bg-[#f8f7ff] px-6 py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">
                  Booking Details
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  #{selectedBooking.id}
                </h2>
              </div>

              <button
                onClick={() =>
                  setSelectedBooking(null)
                }
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              <div className="mb-5 flex items-center justify-between rounded-xl bg-slate-50 p-4">
                <span className="text-sm font-medium text-slate-500">
                  Booking Status
                </span>

                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusClass(
                    selectedBooking.status
                  )}`}
                >
                  {selectedBooking.status}
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <InfoBox
                  icon={User}
                  title="Customer"
                  value={selectedBooking.customer}
                />

                <InfoBox
                  icon={Phone}
                  title="Mobile"
                  value={selectedBooking.mobile}
                />

                <InfoBox
                  icon={Store}
                  title="Salon"
                  value={selectedBooking.salon}
                />

                <InfoBox
                  icon={MapPin}
                  title="Salon Location"
                  value={
                    selectedBooking.salonLocation
                  }
                />

                <InfoBox
                  icon={Scissors}
                  title="Service"
                  value={selectedBooking.service}
                />

                <InfoBox
                  icon={User}
                  title="Professional"
                  value={selectedBooking.staff}
                />

                <InfoBox
                  icon={Calendar}
                  title="Booking Date"
                  value={selectedBooking.date}
                />

                <InfoBox
                  icon={Clock}
                  title="Booking Time"
                  value={selectedBooking.time}
                />
              </div>

              {/* Payment */}
              <div className="mt-5 rounded-2xl border border-violet-100 bg-violet-50/60 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium text-slate-500">
                      Booking Amount
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-slate-900">
                      {formatMoney(
                        selectedBooking.amount
                      )}
                    </h3>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-slate-500">
                      Payment Status
                    </p>

                    <p
                      className={`mt-1 font-bold ${paymentClass(
                        selectedBooking.payment
                      )}`}
                    >
                      {selectedBooking.payment}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4 sm:flex-row sm:justify-end">
              <button
                onClick={() =>
                  setSelectedBooking(null)
                }
                className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600"
              >
                Close
              </button>

              {selectedBooking.status ===
                "Pending" && (
                <button
                  onClick={() =>
                    updateBookingStatus(
                      selectedBooking.id,
                      "Confirmed"
                    )
                  }
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white"
                >
                  <CheckCircle2 size={17} />
                  Confirm Booking
                </button>
              )}

              {selectedBooking.status !==
                "Cancelled" &&
                selectedBooking.status !==
                  "Completed" && (
                  <button
                    onClick={() =>
                      updateBookingStatus(
                        selectedBooking.id,
                        "Cancelled"
                      )
                    }
                    className="flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    <XCircle size={17} />
                    Cancel Booking
                  </button>
                )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const StatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  color,
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            {value}
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            {subtitle}
          </p>
        </div>

        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${color}`}
        >
          <Icon size={22} />
        </div>
      </div>
    </div>
  );
};

const TableHead = ({ children }) => {
  return (
    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
      {children}
    </th>
  );
};

const InfoBox = ({
  icon: Icon,
  title,
  value,
}) => {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-violet-600 shadow-sm">
          <Icon size={17} />
        </div>

        <div className="min-w-0">
          <p className="text-xs font-medium text-slate-400">
            {title}
          </p>

          <p className="mt-1 break-words text-sm font-semibold text-slate-700">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminBookings;