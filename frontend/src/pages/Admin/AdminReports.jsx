import React, { useMemo, useState } from "react";
import {
  BarChart3,
  Download,
  Printer,
  Search,
  CalendarDays,
  IndianRupee,
  Users,
  Store,
  Scissors,
  TrendingUp,
  ChevronDown,
  FileText,
  CheckCircle2,
} from "lucide-react";

const AdminReports = () => {
  const [search, setSearch] = useState("");
  const [reportType, setReportType] = useState("All");
  const [period, setPeriod] = useState("This Month");

  const reportRows = [
    {
      id: "RP001",
      date: "12 Oct 2026",
      salon: "Looks Salon",
      customer: "Rahul Sharma",
      service: "Haircut",
      booking: "BK001",
      amount: 499,
      commission: 50,
      status: "Completed",
    },
    {
      id: "RP002",
      date: "12 Oct 2026",
      salon: "Natura's Salon",
      customer: "Priya Verma",
      service: "Hair Spa",
      booking: "BK002",
      amount: 799,
      commission: 80,
      status: "Completed",
    },
    {
      id: "RP003",
      date: "11 Oct 2026",
      salon: "The Barber Club",
      customer: "Aman Khan",
      service: "Beard Styling",
      booking: "BK003",
      amount: 299,
      commission: 30,
      status: "Pending",
    },
    {
      id: "RP004",
      date: "11 Oct 2026",
      salon: "Glam Hub",
      customer: "Neha Jain",
      service: "Facial",
      booking: "BK004",
      amount: 999,
      commission: 100,
      status: "Completed",
    },
    {
      id: "RP005",
      date: "10 Oct 2026",
      salon: "Style Studio",
      customer: "Sneha Singh",
      service: "Hair Colour",
      booking: "BK005",
      amount: 1499,
      commission: 150,
      status: "Completed",
    },
    {
      id: "RP006",
      date: "10 Oct 2026",
      salon: "Urban Scissors",
      customer: "Karan Singh",
      service: "Haircut + Beard",
      booking: "BK006",
      amount: 649,
      commission: 65,
      status: "Cancelled",
    },
  ];

  const monthlyRevenue = [
    { month: "May", value: 32000 },
    { month: "Jun", value: 45000 },
    { month: "Jul", value: 39000 },
    { month: "Aug", value: 58000 },
    { month: "Sep", value: 72000 },
    { month: "Oct", value: 88000 },
  ];

  const topSalons = [
    {
      name: "Looks Salon",
      bookings: 186,
      revenue: 84500,
    },
    {
      name: "Natura's Salon",
      bookings: 154,
      revenue: 72300,
    },
    {
      name: "Glam Hub",
      bookings: 141,
      revenue: 68900,
    },
    {
      name: "Style Studio",
      bookings: 128,
      revenue: 59400,
    },
  ];

  const topServices = [
    {
      name: "Haircut",
      bookings: 426,
      revenue: 142500,
    },
    {
      name: "Hair Spa",
      bookings: 218,
      revenue: 128400,
    },
    {
      name: "Facial",
      bookings: 194,
      revenue: 118600,
    },
    {
      name: "Beard Styling",
      bookings: 175,
      revenue: 52400,
    },
  ];

  const filteredRows = useMemo(() => {
    const q = search.toLowerCase();

    return reportRows.filter((item) => {
      const matchSearch =
        item.salon.toLowerCase().includes(q) ||
        item.customer.toLowerCase().includes(q) ||
        item.service.toLowerCase().includes(q) ||
        item.booking.toLowerCase().includes(q);

      const matchType =
        reportType === "All" ||
        item.status === reportType;

      return matchSearch && matchType;
    });
  }, [search, reportType]);

  const totalRevenue = reportRows
    .filter((item) => item.status === "Completed")
    .reduce((sum, item) => sum + item.amount, 0);

  const totalCommission = reportRows
    .filter((item) => item.status === "Completed")
    .reduce((sum, item) => sum + item.commission, 0);

  const totalCompleted = reportRows.filter(
    (item) => item.status === "Completed"
  ).length;

  const formatMoney = (amount) =>
    `₹${Number(amount).toLocaleString("en-IN")}`;

  const maxRevenue = Math.max(
    ...monthlyRevenue.map((item) => item.value)
  );

  const exportCSV = () => {
    const headers = [
      "Report ID",
      "Date",
      "Booking ID",
      "Customer",
      "Salon",
      "Service",
      "Amount",
      "Commission",
      "Status",
    ];

    const rows = filteredRows.map((item) => [
      item.id,
      item.date,
      item.booking,
      item.customer,
      item.salon,
      item.service,
      item.amount,
      item.commission,
      item.status,
    ]);

    const csv = [headers, ...rows]
      .map((row) =>
        row
          .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
          .join(",")
      )
      .join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "salonwala-report.csv";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  const getStatusClass = (status) => {
    if (status === "Completed") {
      return "bg-emerald-50 text-emerald-600";
    }

    if (status === "Pending") {
      return "bg-amber-50 text-amber-600";
    }

    return "bg-rose-50 text-rose-600";
  };

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium text-violet-600">
            Analytics & Reports
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900">
            Reports
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Analyze bookings, revenue, salons and service performance.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            <Printer size={17} />
            Print
          </button>

          <button
            onClick={exportCSV}
            className="flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700"
          >
            <Download size={17} />
            Export CSV
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative">
              <CalendarDays
                size={17}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-violet-500"
              />

              <select
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                className="min-h-[46px] appearance-none rounded-xl border border-slate-200 bg-white py-2 pl-10 pr-10 text-sm font-semibold text-slate-600 outline-none"
              >
                <option>This Week</option>
                <option>This Month</option>
                <option>Last Month</option>
                <option>Last 3 Months</option>
                <option>This Year</option>
              </select>

              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>

            <div className="relative">
              <FileText
                size={17}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-violet-500"
              />

              <select
                value={reportType}
                onChange={(e) =>
                  setReportType(e.target.value)
                }
                className="min-h-[46px] appearance-none rounded-xl border border-slate-200 bg-white py-2 pl-10 pr-10 text-sm font-semibold text-slate-600 outline-none"
              >
                <option value="All">All Status</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
                <option value="Cancelled">Cancelled</option>
              </select>

              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>
          </div>

          <div className="flex min-w-[310px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4">
            <Search size={18} className="text-slate-400" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search report..."
              className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        <p className="mt-4 text-xs text-slate-400">
          Showing report period:{" "}
          <span className="font-semibold text-violet-600">
            {period}
          </span>
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value={formatMoney(totalRevenue)}
          subtitle="Successful bookings"
          icon={IndianRupee}
          color="bg-emerald-50 text-emerald-600"
        />

        <StatCard
          title="Platform Earnings"
          value={formatMoney(totalCommission)}
          subtitle="Commission earned"
          icon={TrendingUp}
          color="bg-violet-50 text-violet-600"
        />

        <StatCard
          title="Completed Bookings"
          value={totalCompleted}
          subtitle="In current report"
          icon={CheckCircle2}
          color="bg-blue-50 text-blue-600"
        />

        <StatCard
          title="Active Salons"
          value="248"
          subtitle="Platform partners"
          icon={Store}
          color="bg-amber-50 text-amber-600"
        />
      </div>

      {/* Revenue + Quick Data */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.45fr_1fr]">
        {/* Revenue Chart */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Revenue Performance
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Monthly gross booking revenue
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <BarChart3 size={20} />
            </div>
          </div>

          <div className="mt-8 flex h-[280px] items-end gap-4">
            {monthlyRevenue.map((item) => {
              const height =
                (item.value / maxRevenue) * 100;

              return (
                <div
                  key={item.month}
                  className="flex h-full flex-1 flex-col items-center justify-end"
                >
                  <div className="group flex h-full w-full items-end justify-center">
                    <div
                      style={{
                        height: `${height}%`,
                      }}
                      className="relative w-[65%] rounded-t-xl bg-violet-500 transition hover:bg-violet-600"
                    >
                      <div className="absolute -top-8 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-2 py-1 text-xs text-white group-hover:block">
                        {formatMoney(item.value)}
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 text-xs font-semibold text-slate-500">
                    {item.month}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Overall Performance */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">
            Platform Performance
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Current platform overview
          </p>

          <div className="mt-6 space-y-4">
            <PerformanceRow
              icon={Users}
              title="Customers"
              value="8,542"
              sub="+18.2%"
              color="bg-violet-50 text-violet-600"
            />

            <PerformanceRow
              icon={Store}
              title="Salons"
              value="248"
              sub="+12.5%"
              color="bg-blue-50 text-blue-600"
            />

            <PerformanceRow
              icon={Scissors}
              title="Services"
              value="1,486"
              sub="+9.4%"
              color="bg-amber-50 text-amber-600"
            />

            <PerformanceRow
              icon={CalendarDays}
              title="Bookings"
              value="12,486"
              sub="+21.7%"
              color="bg-emerald-50 text-emerald-600"
            />
          </div>
        </div>
      </div>

      {/* Top Salons + Services */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5">
            <h2 className="text-lg font-bold text-slate-900">
              Top Performing Salons
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Ranked by booking revenue
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            {topSalons.map((salon, index) => (
              <div
                key={salon.name}
                className="flex items-center justify-between gap-4 p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 font-bold text-violet-600">
                    {index + 1}
                  </div>

                  <div>
                    <p className="font-semibold text-slate-800">
                      {salon.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {salon.bookings} bookings
                    </p>
                  </div>
                </div>

                <p className="font-bold text-emerald-600">
                  {formatMoney(salon.revenue)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5">
            <h2 className="text-lg font-bold text-slate-900">
              Popular Services
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Most frequently booked services
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            {topServices.map((service, index) => (
              <div
                key={service.name}
                className="flex items-center justify-between gap-4 p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Scissors size={18} />
                  </div>

                  <div>
                    <p className="font-semibold text-slate-800">
                      {service.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {service.bookings} bookings
                    </p>
                  </div>
                </div>

                <p className="font-bold text-slate-800">
                  {formatMoney(service.revenue)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Report */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 p-5">
          <h2 className="text-lg font-bold text-slate-900">
            Detailed Report
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Booking-wise revenue and commission details.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px]">
            <thead>
              <tr className="bg-[#f8f7ff]">
                <TableHead>Report ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Booking</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Salon</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Commission</TableHead>
                <TableHead>Status</TableHead>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {filteredRows.map((item) => (
                <tr
                  key={item.id}
                  className="transition hover:bg-slate-50"
                >
                  <td className="px-5 py-4 text-sm font-bold text-violet-600">
                    #{item.id}
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-500">
                    {item.date}
                  </td>

                  <td className="px-5 py-4 text-sm font-semibold text-slate-700">
                    #{item.booking}
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-700">
                    {item.customer}
                  </td>

                  <td className="px-5 py-4 text-sm font-semibold text-slate-700">
                    {item.salon}
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    {item.service}
                  </td>

                  <td className="px-5 py-4 text-sm font-bold text-slate-900">
                    {formatMoney(item.amount)}
                  </td>

                  <td className="px-5 py-4 text-sm font-bold text-violet-600">
                    {formatMoney(item.commission)}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}

              {filteredRows.length === 0 && (
                <tr>
                  <td
                    colSpan="9"
                    className="py-16 text-center"
                  >
                    <BarChart3
                      size={42}
                      className="mx-auto text-slate-300"
                    />

                    <p className="mt-3 font-semibold text-slate-700">
                      No report data found
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="border-t border-slate-100 px-5 py-4">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <strong>{filteredRows.length}</strong> report
            entries
          </p>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  color,
}) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="flex items-center justify-between gap-4">
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

const PerformanceRow = ({
  icon: Icon,
  title,
  value,
  sub,
  color,
}) => (
  <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4">
    <div className="flex items-center gap-3">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${color}`}
      >
        <Icon size={18} />
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-700">
          {title}
        </p>

        <p className="mt-0.5 text-xs font-semibold text-emerald-600">
          {sub}
        </p>
      </div>
    </div>

    <p className="text-lg font-bold text-slate-900">
      {value}
    </p>
  </div>
);

const TableHead = ({ children }) => (
  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
    {children}
  </th>
);

export default AdminReports;