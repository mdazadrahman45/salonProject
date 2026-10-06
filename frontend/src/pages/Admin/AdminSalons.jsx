import React, { useMemo, useState } from "react";
import {
  Search,
  Filter,
  Eye,
  Check,
  X,
  MapPin,
  Store,
  Clock3,
  CheckCircle2,
  XCircle,
  Building2,
  ChevronDown,
  Phone,
  Mail,
  User,
  Scissors,
} from "lucide-react";

const AdminSalons = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedSalon, setSelectedSalon] = useState(null);

  const [salons, setSalons] = useState([
    {
      id: "SR001",
      salonName: "Looks Salon",
      ownerName: "Rahul Sharma",
      mobile: "9876543210",
      email: "rahul@lookssalon.com",
      location: "Bhopal, MP",
      type: "Salon",
      services: 12,
      status: "Pending",
      joined: "12 Oct 2026",
    },
    {
      id: "SR002",
      salonName: "The Barber Club",
      ownerName: "Nitish Singh",
      mobile: "9823456710",
      email: "nitish@barberclub.com",
      location: "Indore, MP",
      type: "Barber Shop",
      services: 8,
      status: "Approved",
      joined: "11 Oct 2026",
    },
    {
      id: "SR003",
      salonName: "Natura's Salon",
      ownerName: "Pooja Malhotra",
      mobile: "9898989898",
      email: "pooja@naturas.com",
      location: "Bhopal, MP",
      type: "Salon",
      services: 15,
      status: "Pending",
      joined: "11 Oct 2026",
    },
    {
      id: "SR004",
      salonName: "Glam Hub",
      ownerName: "Priya Verma",
      mobile: "9765432100",
      email: "priya@glamhub.com",
      location: "Jabalpur, MP",
      type: "Beauty Salon",
      services: 17,
      status: "Approved",
      joined: "10 Oct 2026",
    },
    {
      id: "SR005",
      salonName: "Trendy Cuts",
      ownerName: "Aman Khan",
      mobile: "9998877665",
      email: "aman@trendycuts.com",
      location: "Ujjain, MP",
      type: "Barber Shop",
      services: 9,
      status: "Rejected",
      joined: "09 Oct 2026",
    },
    {
      id: "SR006",
      salonName: "Style Studio",
      ownerName: "Neha Jain",
      mobile: "9123456789",
      email: "neha@stylestudio.com",
      location: "Indore, MP",
      type: "Beauty Salon",
      services: 21,
      status: "Approved",
      joined: "08 Oct 2026",
    },
    {
      id: "SR007",
      salonName: "Urban Scissors",
      ownerName: "Vikas Patel",
      mobile: "9876501234",
      email: "vikas@urbanscissors.com",
      location: "Bhopal, MP",
      type: "Salon",
      services: 11,
      status: "Pending",
      joined: "08 Oct 2026",
    },
  ]);

  const counts = useMemo(() => {
    return {
      total: salons.length,
      pending: salons.filter((item) => item.status === "Pending").length,
      approved: salons.filter((item) => item.status === "Approved").length,
      rejected: salons.filter((item) => item.status === "Rejected").length,
    };
  }, [salons]);

  const filteredSalons = useMemo(() => {
    return salons.filter((salon) => {
      const text = search.toLowerCase();

      const matchesSearch =
        salon.salonName.toLowerCase().includes(text) ||
        salon.ownerName.toLowerCase().includes(text) ||
        salon.location.toLowerCase().includes(text) ||
        salon.id.toLowerCase().includes(text);

      const matchesStatus =
        statusFilter === "All" || salon.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [salons, search, statusFilter]);

  const updateStatus = (id, newStatus) => {
    setSalons((prev) =>
      prev.map((salon) =>
        salon.id === id ? { ...salon, status: newStatus } : salon
      )
    );

    if (selectedSalon?.id === id) {
      setSelectedSalon((prev) => ({
        ...prev,
        status: newStatus,
      }));
    }
  };

  const statusStyle = (status) => {
    if (status === "Approved") {
      return "bg-emerald-50 text-emerald-600 border-emerald-100";
    }

    if (status === "Rejected") {
      return "bg-rose-50 text-rose-600 border-rose-100";
    }

    return "bg-amber-50 text-amber-600 border-amber-100";
  };

  return (
    <>
      <div className="space-y-6">
        {/* Heading */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-medium text-violet-600">
              Partner Management
            </p>

            <h1 className="mt-1 text-2xl font-bold text-slate-900">
              Salons & Partners
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Review, approve and manage salons registered on SalonWala.
            </p>
          </div>

          <button className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700">
            <Store size={18} />
            Add Salon
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Salons"
            value={counts.total}
            subtitle="Registered partners"
            icon={Building2}
            iconClass="bg-violet-50 text-violet-600"
          />

          <StatCard
            title="Pending Approval"
            value={counts.pending}
            subtitle="Waiting for review"
            icon={Clock3}
            iconClass="bg-amber-50 text-amber-600"
          />

          <StatCard
            title="Approved"
            value={counts.approved}
            subtitle="Active salons"
            icon={CheckCircle2}
            iconClass="bg-emerald-50 text-emerald-600"
          />

          <StatCard
            title="Rejected"
            value={counts.rejected}
            subtitle="Rejected applications"
            icon={XCircle}
            iconClass="bg-rose-50 text-rose-600"
          />
        </div>

        {/* Main Table Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* Filters */}
          <div className="border-b border-slate-100 p-5">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Salon Registrations
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Manage all registered salons and partner accounts.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                {/* Search */}
                <div className="flex min-w-[290px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4">
                  <Search size={18} className="text-slate-400" />

                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search salon, owner, location..."
                    className="w-full bg-transparent py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </div>

                {/* Status */}
                <div className="relative">
                  <Filter
                    size={17}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="h-full min-h-[46px] appearance-none rounded-xl border border-slate-200 bg-white py-2 pl-10 pr-10 text-sm font-medium text-slate-600 outline-none"
                  >
                    <option value="All">All Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
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
            <table className="w-full min-w-[1100px]">
              <thead>
                <tr className="bg-[#f8f7ff] text-left">
                  <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    ID
                  </th>

                  <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Salon
                  </th>

                  <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Owner
                  </th>

                  <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Location
                  </th>

                  <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Type
                  </th>

                  <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Services
                  </th>

                  <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Status
                  </th>

                  <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Joined
                  </th>

                  <th className="px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredSalons.map((salon) => (
                  <tr
                    key={salon.id}
                    className="transition hover:bg-slate-50/70"
                  >
                    <td className="px-5 py-4 text-sm font-semibold text-slate-500">
                      #{salon.id}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 font-bold text-violet-700">
                          {salon.salonName.charAt(0)}
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            {salon.salonName}
                          </p>

                          <p className="text-xs text-slate-400">
                            {salon.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <p className="text-sm font-medium text-slate-700">
                        {salon.ownerName}
                      </p>

                      <p className="mt-0.5 text-xs text-slate-400">
                        {salon.mobile}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1.5 text-sm text-slate-600">
                        <MapPin size={15} className="text-violet-500" />
                        {salon.location}
                      </div>
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600">
                      {salon.type}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
                        <Scissors size={15} className="text-violet-500" />
                        {salon.services}
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${statusStyle(
                          salon.status
                        )}`}
                      >
                        {salon.status}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-500">
                      {salon.joined}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        {salon.status === "Pending" && (
                          <button
                            onClick={() =>
                              updateStatus(salon.id, "Approved")
                            }
                            title="Approve Salon"
                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition hover:bg-emerald-100"
                          >
                            <Check size={17} />
                          </button>
                        )}

                        <button
                          onClick={() => setSelectedSalon(salon)}
                          title="View Details"
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition hover:bg-blue-100"
                        >
                          <Eye size={17} />
                        </button>

                        {salon.status !== "Rejected" && (
                          <button
                            onClick={() =>
                              updateStatus(salon.id, "Rejected")
                            }
                            title="Reject Salon"
                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-50 text-rose-600 transition hover:bg-rose-100"
                          >
                            <X size={17} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredSalons.length === 0 && (
                  <tr>
                    <td colSpan="9" className="px-5 py-16 text-center">
                      <Store
                        size={42}
                        className="mx-auto text-slate-300"
                      />

                      <h3 className="mt-3 font-semibold text-slate-700">
                        No salons found
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        Try changing your search or filter.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Bottom */}
          <div className="flex flex-col gap-3 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-700">
                {filteredSalons.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-slate-700">
                {salons.length}
              </span>{" "}
              salons
            </p>

            <div className="flex gap-2">
              <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-500">
                Previous
              </button>

              <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white">
                1
              </button>

              <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* View Salon Modal */}
      {selectedSalon && (
        <div
          onClick={() => setSelectedSalon(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[620px] overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-100 bg-[#f8f7ff] px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 text-xl font-bold text-white">
                  {selectedSalon.salonName.charAt(0)}
                </div>

                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    {selectedSalon.salonName}
                  </h2>

                  <p className="text-sm text-slate-500">
                    #{selectedSalon.id}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedSalon(null)}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="mb-5 flex items-center justify-between rounded-xl bg-slate-50 p-4">
                <span className="text-sm font-medium text-slate-500">
                  Current Status
                </span>

                <span
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyle(
                    selectedSalon.status
                  )}`}
                >
                  {selectedSalon.status}
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <InfoBox
                  icon={User}
                  title="Owner Name"
                  value={selectedSalon.ownerName}
                />

                <InfoBox
                  icon={Phone}
                  title="Mobile Number"
                  value={selectedSalon.mobile}
                />

                <InfoBox
                  icon={Mail}
                  title="Email Address"
                  value={selectedSalon.email}
                />

                <InfoBox
                  icon={MapPin}
                  title="Location"
                  value={selectedSalon.location}
                />

                <InfoBox
                  icon={Store}
                  title="Business Type"
                  value={selectedSalon.type}
                />

                <InfoBox
                  icon={Scissors}
                  title="Services"
                  value={`${selectedSalon.services} Services`}
                />
              </div>

              {/* Verification */}
              <div className="mt-6">
                <h3 className="text-sm font-bold text-slate-800">
                  Verification Details
                </h3>

                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  <Verification label="Owner Details" />
                  <Verification label="Business Details" />
                  <Verification label="Contact Details" />
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4 sm:flex-row sm:justify-end">
              <button
                onClick={() => setSelectedSalon(null)}
                className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600"
              >
                Close
              </button>

              {selectedSalon.status !== "Rejected" && (
                <button
                  onClick={() =>
                    updateStatus(selectedSalon.id, "Rejected")
                  }
                  className="flex items-center justify-center gap-2 rounded-xl bg-rose-50 px-5 py-2.5 text-sm font-semibold text-rose-600"
                >
                  <X size={17} />
                  Reject
                </button>
              )}

              {selectedSalon.status !== "Approved" && (
                <button
                  onClick={() =>
                    updateStatus(selectedSalon.id, "Approved")
                  }
                  className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white"
                >
                  <Check size={17} />
                  Approve Salon
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
  iconClass,
}) => {
  return (
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
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconClass}`}
        >
          <Icon size={23} />
        </div>
      </div>
    </div>
  );
};

const InfoBox = ({ icon: Icon, title, value }) => {
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

const Verification = ({ label }) => {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-3">
      <CheckCircle2 size={17} className="text-emerald-600" />

      <span className="text-xs font-semibold text-emerald-700">
        {label}
      </span>
    </div>
  );
};

export default AdminSalons;