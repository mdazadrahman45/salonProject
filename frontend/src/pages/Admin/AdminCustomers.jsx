import React, { useMemo, useState } from "react";
import {
  Users,
  Search,
  Filter,
  Eye,
  UserCheck,
  UserX,
  Mail,
  Phone,
  CalendarDays,
  MapPin,
  Wallet,
  ChevronDown,
  X,
  CheckCircle2,
  Clock3,
} from "lucide-react";

const AdminCustomers = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const [customers, setCustomers] = useState([
    {
      id: "CU001",
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      mobile: "9876543210",
      location: "Bhopal, MP",
      bookings: 18,
      spent: 12450,
      status: "Active",
      joined: "02 Oct 2026",
      lastBooking: "12 Oct 2026",
    },
    {
      id: "CU002",
      name: "Priya Verma",
      email: "priya@gmail.com",
      mobile: "9823456710",
      location: "Indore, MP",
      bookings: 12,
      spent: 8750,
      status: "Active",
      joined: "28 Sep 2026",
      lastBooking: "11 Oct 2026",
    },
    {
      id: "CU003",
      name: "Aman Verma",
      email: "aman@gmail.com",
      mobile: "9898989898",
      location: "Ujjain, MP",
      bookings: 7,
      spent: 4500,
      status: "Active",
      joined: "25 Sep 2026",
      lastBooking: "10 Oct 2026",
    },
    {
      id: "CU004",
      name: "Neha Patel",
      email: "neha@gmail.com",
      mobile: "9765432100",
      location: "Jabalpur, MP",
      bookings: 21,
      spent: 17600,
      status: "Blocked",
      joined: "20 Sep 2026",
      lastBooking: "05 Oct 2026",
    },
    {
      id: "CU005",
      name: "Vikram Joshi",
      email: "vikram@gmail.com",
      mobile: "9998877665",
      location: "Bhopal, MP",
      bookings: 9,
      spent: 6900,
      status: "Active",
      joined: "18 Sep 2026",
      lastBooking: "08 Oct 2026",
    },
    {
      id: "CU006",
      name: "Sneha Jain",
      email: "sneha@gmail.com",
      mobile: "9123456789",
      location: "Indore, MP",
      bookings: 4,
      spent: 2800,
      status: "Inactive",
      joined: "14 Sep 2026",
      lastBooking: "25 Sep 2026",
    },
    {
      id: "CU007",
      name: "Karan Singh",
      email: "karan@gmail.com",
      mobile: "9876501234",
      location: "Bhopal, MP",
      bookings: 15,
      spent: 11300,
      status: "Active",
      joined: "10 Sep 2026",
      lastBooking: "07 Oct 2026",
    },
  ]);

  const stats = useMemo(() => {
    return {
      total: customers.length,

      active: customers.filter(
        (customer) => customer.status === "Active"
      ).length,

      inactive: customers.filter(
        (customer) => customer.status === "Inactive"
      ).length,

      blocked: customers.filter(
        (customer) => customer.status === "Blocked"
      ).length,
    };
  }, [customers]);

  const filteredCustomers = useMemo(() => {
    return customers.filter((customer) => {
      const query = search.toLowerCase();

      const searchMatch =
        customer.name.toLowerCase().includes(query) ||
        customer.email.toLowerCase().includes(query) ||
        customer.mobile.includes(query) ||
        customer.location.toLowerCase().includes(query) ||
        customer.id.toLowerCase().includes(query);

      const statusMatch =
        statusFilter === "All" ||
        customer.status === statusFilter;

      return searchMatch && statusMatch;
    });
  }, [customers, search, statusFilter]);

  const changeStatus = (id, status) => {
    setCustomers((prev) =>
      prev.map((customer) =>
        customer.id === id
          ? { ...customer, status }
          : customer
      )
    );

    if (selectedCustomer?.id === id) {
      setSelectedCustomer((prev) => ({
        ...prev,
        status,
      }));
    }
  };

  const statusClass = (status) => {
    if (status === "Active") {
      return "bg-emerald-50 text-emerald-600 border-emerald-100";
    }

    if (status === "Blocked") {
      return "bg-rose-50 text-rose-600 border-rose-100";
    }

    return "bg-amber-50 text-amber-600 border-amber-100";
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
            User Management
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900">
            Customers
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage customer accounts, activity and booking history.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Customers"
            value={stats.total}
            subtitle="Registered users"
            icon={Users}
            className="bg-violet-50 text-violet-600"
          />

          <StatCard
            title="Active Customers"
            value={stats.active}
            subtitle="Currently active"
            icon={UserCheck}
            className="bg-emerald-50 text-emerald-600"
          />

          <StatCard
            title="Inactive"
            value={stats.inactive}
            subtitle="Inactive accounts"
            icon={Clock3}
            className="bg-amber-50 text-amber-600"
          />

          <StatCard
            title="Blocked"
            value={stats.blocked}
            subtitle="Restricted users"
            icon={UserX}
            className="bg-rose-50 text-rose-600"
          />
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* Header */}
          <div className="border-b border-slate-100 p-5">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Customer List
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  View and manage SalonWala customers.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                {/* Search */}
                <div className="flex min-w-[300px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4">
                  <Search
                    size={18}
                    className="text-slate-400"
                  />

                  <input
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    placeholder="Search name, mobile, email..."
                    className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-slate-400"
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
                    <option value="All">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">
                      Inactive
                    </option>
                    <option value="Blocked">
                      Blocked
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

          {/* Customer Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px]">
              <thead>
                <tr className="bg-[#f8f7ff]">
                  <TableHead>ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Bookings</TableHead>
                  <TableHead>Total Spent</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead>Action</TableHead>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredCustomers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="transition hover:bg-slate-50"
                  >
                    <td className="px-5 py-4 text-sm font-semibold text-slate-500">
                      #{customer.id}
                    </td>

                    {/* Name */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 font-bold text-violet-700">
                          {customer.name
                            .charAt(0)
                            .toUpperCase()}
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {customer.name}
                          </p>

                          <p className="text-xs text-slate-400">
                            Customer
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Contact */}
                    <td className="px-5 py-4">
                      <p className="text-sm text-slate-600">
                        {customer.mobile}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {customer.email}
                      </p>
                    </td>

                    {/* Location */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1.5 text-sm text-slate-600">
                        <MapPin
                          size={15}
                          className="text-violet-500"
                        />

                        {customer.location}
                      </div>
                    </td>

                    {/* Bookings */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                        <CalendarDays
                          size={16}
                          className="text-blue-500"
                        />

                        {customer.bookings}
                      </div>
                    </td>

                    {/* Spent */}
                    <td className="px-5 py-4 text-sm font-semibold text-slate-800">
                      {formatMoney(customer.spent)}
                    </td>

                    {/* Status */}
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusClass(
                          customer.status
                        )}`}
                      >
                        {customer.status}
                      </span>
                    </td>

                    {/* Joined */}
                    <td className="px-5 py-4 text-sm text-slate-500">
                      {customer.joined}
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            setSelectedCustomer(customer)
                          }
                          title="View Customer"
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition hover:bg-blue-100"
                        >
                          <Eye size={17} />
                        </button>

                        {customer.status === "Blocked" ? (
                          <button
                            onClick={() =>
                              changeStatus(
                                customer.id,
                                "Active"
                              )
                            }
                            title="Activate Customer"
                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition hover:bg-emerald-100"
                          >
                            <UserCheck size={17} />
                          </button>
                        ) : (
                          <button
                            onClick={() =>
                              changeStatus(
                                customer.id,
                                "Blocked"
                              )
                            }
                            title="Block Customer"
                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-50 text-rose-600 transition hover:bg-rose-100"
                          >
                            <UserX size={17} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredCustomers.length === 0 && (
                  <tr>
                    <td
                      colSpan="9"
                      className="px-5 py-16 text-center"
                    >
                      <Users
                        size={42}
                        className="mx-auto text-slate-300"
                      />

                      <h3 className="mt-3 font-semibold text-slate-700">
                        No customers found
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        Try changing the search or filter.
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
              <strong>{filteredCustomers.length}</strong>{" "}
              of <strong>{customers.length}</strong>{" "}
              customers
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

      {/* Customer Modal */}
      {selectedCustomer && (
        <div
          onClick={() => setSelectedCustomer(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[650px] overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 bg-[#f8f7ff] px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-xl font-bold text-white">
                  {selectedCustomer.name
                    .charAt(0)
                    .toUpperCase()}
                </div>

                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    {selectedCustomer.name}
                  </h2>

                  <p className="text-sm text-slate-500">
                    #{selectedCustomer.id}
                  </p>
                </div>
              </div>

              <button
                onClick={() =>
                  setSelectedCustomer(null)
                }
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              <div className="mb-6 flex items-center justify-between rounded-xl bg-slate-50 p-4">
                <span className="text-sm font-medium text-slate-500">
                  Account Status
                </span>

                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusClass(
                    selectedCustomer.status
                  )}`}
                >
                  {selectedCustomer.status}
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <InfoBox
                  icon={Phone}
                  title="Mobile Number"
                  value={selectedCustomer.mobile}
                />

                <InfoBox
                  icon={Mail}
                  title="Email"
                  value={selectedCustomer.email}
                />

                <InfoBox
                  icon={MapPin}
                  title="Location"
                  value={selectedCustomer.location}
                />

                <InfoBox
                  icon={CalendarDays}
                  title="Total Bookings"
                  value={`${selectedCustomer.bookings} Bookings`}
                />

                <InfoBox
                  icon={Wallet}
                  title="Total Spent"
                  value={formatMoney(
                    selectedCustomer.spent
                  )}
                />

                <InfoBox
                  icon={CalendarDays}
                  title="Last Booking"
                  value={selectedCustomer.lastBooking}
                />
              </div>

              {/* Activity */}
              <div className="mt-6 rounded-2xl border border-violet-100 bg-violet-50/60 p-5">
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={19}
                    className="text-violet-600"
                  />

                  <h3 className="font-semibold text-slate-800">
                    Customer Activity
                  </h3>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <Activity
                    title="Bookings"
                    value={selectedCustomer.bookings}
                  />

                  <Activity
                    title="Total Spent"
                    value={formatMoney(
                      selectedCustomer.spent
                    )}
                  />

                  <Activity
                    title="Joined"
                    value={selectedCustomer.joined}
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4 sm:flex-row sm:justify-end">
              <button
                onClick={() =>
                  setSelectedCustomer(null)
                }
                className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600"
              >
                Close
              </button>

              {selectedCustomer.status ===
              "Blocked" ? (
                <button
                  onClick={() =>
                    changeStatus(
                      selectedCustomer.id,
                      "Active"
                    )
                  }
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white"
                >
                  <UserCheck size={17} />
                  Activate Customer
                </button>
              ) : (
                <button
                  onClick={() =>
                    changeStatus(
                      selectedCustomer.id,
                      "Blocked"
                    )
                  }
                  className="flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white"
                >
                  <UserX size={17} />
                  Block Customer
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
  className,
}) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="flex items-center justify-between">
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
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${className}`}
      >
        <Icon size={23} />
      </div>
    </div>
  </div>
);

const TableHead = ({ children }) => (
  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
    {children}
  </th>
);

const InfoBox = ({ icon: Icon, title, value }) => (
  <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
    <div className="flex gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-violet-600 shadow-sm">
        <Icon size={17} />
      </div>

      <div>
        <p className="text-xs font-medium text-slate-400">
          {title}
        </p>

        <p className="mt-1 break-all text-sm font-semibold text-slate-700">
          {value}
        </p>
      </div>
    </div>
  </div>
);

const Activity = ({ title, value }) => (
  <div>
    <p className="text-xs text-slate-500">
      {title}
    </p>

    <p className="mt-1 text-sm font-bold text-slate-800">
      {value}
    </p>
  </div>
);

export default AdminCustomers;