import React, { useMemo, useState } from "react";
import {
  CreditCard,
  Search,
  Filter,
  Eye,
  IndianRupee,
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  Clock3,
  CheckCircle2,
  XCircle,
  ChevronDown,
  X,
  User,
  Store,
  CalendarDays,
  ReceiptText,
} from "lucide-react";

const AdminPayments = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedPayment, setSelectedPayment] = useState(null);

  const [payments] = useState([
    {
      id: "TXN1001",
      bookingId: "BK001",
      customer: "Rahul Sharma",
      salon: "Looks Salon",
      amount: 499,
      method: "UPI",
      type: "Payment",
      status: "Success",
      date: "12 Oct 2026",
      time: "10:45 AM",
    },
    {
      id: "TXN1002",
      bookingId: "BK002",
      customer: "Priya Verma",
      salon: "Natura's Salon",
      amount: 799,
      method: "Card",
      type: "Payment",
      status: "Success",
      date: "12 Oct 2026",
      time: "09:30 AM",
    },
    {
      id: "TXN1003",
      bookingId: "BK003",
      customer: "Aman Khan",
      salon: "The Barber Club",
      amount: 299,
      method: "Cash",
      type: "Payment",
      status: "Pending",
      date: "12 Oct 2026",
      time: "08:50 AM",
    },
    {
      id: "TXN1004",
      bookingId: "BK004",
      customer: "Neha Jain",
      salon: "Glam Hub",
      amount: 999,
      method: "Wallet",
      type: "Payment",
      status: "Success",
      date: "11 Oct 2026",
      time: "07:25 PM",
    },
    {
      id: "TXN1005",
      bookingId: "BK005",
      customer: "Vikram Joshi",
      salon: "Enrich Salon",
      amount: 499,
      method: "UPI",
      type: "Refund",
      status: "Refunded",
      date: "11 Oct 2026",
      time: "06:20 PM",
    },
    {
      id: "TXN1006",
      bookingId: "BK006",
      customer: "Sneha Singh",
      salon: "Style Studio",
      amount: 1499,
      method: "Card",
      type: "Payment",
      status: "Failed",
      date: "10 Oct 2026",
      time: "04:10 PM",
    },
  ]);

  const filteredPayments = useMemo(() => {
    const q = search.toLowerCase();

    return payments.filter((payment) => {
      const matchesSearch =
        payment.id.toLowerCase().includes(q) ||
        payment.bookingId.toLowerCase().includes(q) ||
        payment.customer.toLowerCase().includes(q) ||
        payment.salon.toLowerCase().includes(q);

      const matchesStatus =
        statusFilter === "All" ||
        payment.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [payments, search, statusFilter]);

  const successPayments = payments.filter(
    (item) => item.status === "Success"
  );

  const totalRevenue = successPayments.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const refundedAmount = payments
    .filter((item) => item.status === "Refunded")
    .reduce((sum, item) => sum + item.amount, 0);

  const pendingAmount = payments
    .filter((item) => item.status === "Pending")
    .reduce((sum, item) => sum + item.amount, 0);

  const platformCommission = Math.round(totalRevenue * 0.1);

  const formatMoney = (amount) =>
    `₹${Number(amount).toLocaleString("en-IN")}`;

  const statusClass = (status) => {
    if (status === "Success") {
      return "bg-emerald-50 text-emerald-600";
    }

    if (status === "Pending") {
      return "bg-amber-50 text-amber-600";
    }

    if (status === "Refunded") {
      return "bg-blue-50 text-blue-600";
    }

    return "bg-rose-50 text-rose-600";
  };

  const typeClass = (type) => {
    return type === "Refund"
      ? "text-rose-500"
      : "text-emerald-600";
  };

  return (
    <>
      <div className="space-y-6">
        {/* Heading */}
        <div>
          <p className="text-sm font-medium text-violet-600">
            Finance Management
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900">
            Payments & Transactions
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Monitor customer payments, refunds and platform earnings.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Revenue"
            value={formatMoney(totalRevenue)}
            subtitle="Successful payments"
            icon={IndianRupee}
            color="bg-emerald-50 text-emerald-600"
          />

          <StatCard
            title="Platform Commission"
            value={formatMoney(platformCommission)}
            subtitle="Demo 10% commission"
            icon={Wallet}
            color="bg-violet-50 text-violet-600"
          />

          <StatCard
            title="Pending Amount"
            value={formatMoney(pendingAmount)}
            subtitle="Awaiting payment"
            icon={Clock3}
            color="bg-amber-50 text-amber-600"
          />

          <StatCard
            title="Refunded"
            value={formatMoney(refundedAmount)}
            subtitle="Total refunds"
            icon={ArrowDownLeft}
            color="bg-blue-50 text-blue-600"
          />
        </div>

        {/* Transactions */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Transaction History
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  All payment and refund activity.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="flex min-w-[320px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4">
                  <Search size={18} className="text-slate-400" />

                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search transaction, booking, customer..."
                    className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-slate-400"
                  />
                </div>

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
                    <option value="Success">Success</option>
                    <option value="Pending">Pending</option>
                    <option value="Refunded">Refunded</option>
                    <option value="Failed">Failed</option>
                  </select>

                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1150px]">
              <thead>
                <tr className="bg-[#f8f7ff]">
                  <TableHead>Transaction</TableHead>
                  <TableHead>Booking</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Salon</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Action</TableHead>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredPayments.map((payment) => (
                  <tr
                    key={payment.id}
                    className="transition hover:bg-slate-50"
                  >
                    <td className="px-5 py-4">
                      <p className="text-sm font-bold text-violet-600">
                        #{payment.id}
                      </p>
                    </td>

                    <td className="px-5 py-4 text-sm font-semibold text-slate-600">
                      #{payment.bookingId}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700">
                          {payment.customer.charAt(0)}
                        </div>

                        <p className="text-sm font-semibold text-slate-800">
                          {payment.customer}
                        </p>
                      </div>
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600">
                      {payment.salon}
                    </td>

                    <td className="px-5 py-4 text-sm font-bold text-slate-900">
                      {formatMoney(payment.amount)}
                    </td>

                    <td className="px-5 py-4">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        {payment.method}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <div
                        className={`flex items-center gap-1.5 text-sm font-semibold ${typeClass(
                          payment.type
                        )}`}
                      >
                        {payment.type === "Refund" ? (
                          <ArrowDownLeft size={16} />
                        ) : (
                          <ArrowUpRight size={16} />
                        )}

                        {payment.type}
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass(
                          payment.status
                        )}`}
                      >
                        {payment.status}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <p className="text-sm text-slate-600">
                        {payment.date}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {payment.time}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      <button
                        onClick={() =>
                          setSelectedPayment(payment)
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
                        title="View Transaction"
                      >
                        <Eye size={17} />
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredPayments.length === 0 && (
                  <tr>
                    <td
                      colSpan="10"
                      className="px-5 py-16 text-center"
                    >
                      <CreditCard
                        size={42}
                        className="mx-auto text-slate-300"
                      />

                      <h3 className="mt-3 font-semibold text-slate-700">
                        No transactions found
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        Try changing search or status filter.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between border-t border-slate-100 px-5 py-4">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <strong>{filteredPayments.length}</strong>{" "}
              of <strong>{payments.length}</strong>{" "}
              transactions
            </p>
          </div>
        </div>
      </div>

      {/* Transaction Details */}
      {selectedPayment && (
        <div
          onClick={() => setSelectedPayment(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[650px] overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-100 bg-[#f8f7ff] px-6 py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">
                  Transaction Details
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  #{selectedPayment.id}
                </h2>
              </div>

              <button
                onClick={() =>
                  setSelectedPayment(null)
                }
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6">
              {/* Amount */}
              <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-purple-500 p-6 text-white">
                <p className="text-sm text-violet-100">
                  Transaction Amount
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  {formatMoney(selectedPayment.amount)}
                </h3>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-violet-100">
                    {selectedPayment.method}
                  </span>

                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                    {selectedPayment.status}
                  </span>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <InfoBox
                  icon={ReceiptText}
                  title="Booking ID"
                  value={`#${selectedPayment.bookingId}`}
                />

                <InfoBox
                  icon={User}
                  title="Customer"
                  value={selectedPayment.customer}
                />

                <InfoBox
                  icon={Store}
                  title="Salon"
                  value={selectedPayment.salon}
                />

                <InfoBox
                  icon={CreditCard}
                  title="Payment Method"
                  value={selectedPayment.method}
                />

                <InfoBox
                  icon={CalendarDays}
                  title="Date"
                  value={selectedPayment.date}
                />

                <InfoBox
                  icon={Clock3}
                  title="Time"
                  value={selectedPayment.time}
                />
              </div>

              <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400">
                      Transaction Type
                    </p>

                    <p
                      className={`mt-1 font-bold ${typeClass(
                        selectedPayment.type
                      )}`}
                    >
                      {selectedPayment.type}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-slate-400">
                      Status
                    </p>

                    <p className="mt-1 font-bold text-slate-700">
                      {selectedPayment.status}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end border-t border-slate-100 bg-slate-50 px-6 py-4">
              <button
                onClick={() =>
                  setSelectedPayment(null)
                }
                className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white"
              >
                Close
              </button>
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
}) => (
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

const TableHead = ({ children }) => (
  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
    {children}
  </th>
);

const InfoBox = ({
  icon: Icon,
  title,
  value,
}) => (
  <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
    <div className="flex gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-violet-600 shadow-sm">
        <Icon size={17} />
      </div>

      <div>
        <p className="text-xs font-medium text-slate-400">
          {title}
        </p>

        <p className="mt-1 text-sm font-semibold text-slate-700">
          {value}
        </p>
      </div>
    </div>
  </div>
);

export default AdminPayments;