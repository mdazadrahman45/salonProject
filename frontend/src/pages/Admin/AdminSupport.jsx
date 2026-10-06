import React, { useMemo, useState } from "react";
import {
  Headphones,
  Search,
  Eye,
  MessageSquare,
  Clock3,
  CheckCircle2,
  AlertTriangle,
  X,
  User,
  Store,
  Send,
  ChevronDown,
  Mail,
  Phone,
  CalendarDays,
} from "lucide-react";

const AdminSupport = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [replyText, setReplyText] = useState("");

  const [tickets, setTickets] = useState([
    {
      id: "TK001",
      subject: "Booking refund not received",
      userName: "Rahul Sharma",
      userType: "Customer",
      email: "rahul@gmail.com",
      mobile: "9876543210",
      category: "Payment",
      priority: "High",
      status: "Open",
      createdAt: "12 Oct 2026",
      message:
        "My booking was cancelled but the refund has not been credited yet. Please check the transaction.",
      replies: [],
    },
    {
      id: "TK002",
      subject: "Salon profile approval pending",
      userName: "Aman Khan",
      userType: "Partner",
      email: "aman@royalsalon.com",
      mobile: "9823456710",
      category: "Partner Approval",
      priority: "Medium",
      status: "In Progress",
      createdAt: "12 Oct 2026",
      message:
        "I submitted my salon registration but approval is still pending. Please review my profile.",
      replies: [
        {
          by: "Admin",
          message:
            "Your salon documents are currently under verification.",
          time: "12 Oct 2026, 11:10 AM",
        },
      ],
    },
    {
      id: "TK003",
      subject: "Unable to book service",
      userName: "Priya Verma",
      userType: "Customer",
      email: "priya@gmail.com",
      mobile: "9898989898",
      category: "Booking",
      priority: "Medium",
      status: "Open",
      createdAt: "11 Oct 2026",
      message:
        "I am unable to select a time slot for a salon booking.",
      replies: [],
    },
    {
      id: "TK004",
      subject: "Service not visible to customers",
      userName: "Vikas Patel",
      userType: "Partner",
      email: "vikas@urbanscissors.com",
      mobile: "9765432100",
      category: "Service",
      priority: "High",
      status: "In Progress",
      createdAt: "11 Oct 2026",
      message:
        "I added a new service from my partner panel but it is not visible on the customer side.",
      replies: [],
    },
    {
      id: "TK005",
      subject: "Account login issue",
      userName: "Neha Jain",
      userType: "Customer",
      email: "neha@gmail.com",
      mobile: "9998877665",
      category: "Account",
      priority: "Low",
      status: "Resolved",
      createdAt: "10 Oct 2026",
      message:
        "I was unable to login to my account using my registered email.",
      replies: [
        {
          by: "Admin",
          message:
            "Please reset your password and try logging in again.",
          time: "10 Oct 2026, 05:30 PM",
        },
      ],
    },
  ]);

  const filteredTickets = useMemo(() => {
    const q = search.toLowerCase();

    return tickets.filter((ticket) => {
      const searchMatch =
        ticket.id.toLowerCase().includes(q) ||
        ticket.subject.toLowerCase().includes(q) ||
        ticket.userName.toLowerCase().includes(q) ||
        ticket.category.toLowerCase().includes(q);

      const statusMatch =
        statusFilter === "All" ||
        ticket.status === statusFilter;

      return searchMatch && statusMatch;
    });
  }, [tickets, search, statusFilter]);

  const openCount = tickets.filter(
    (ticket) => ticket.status === "Open"
  ).length;

  const progressCount = tickets.filter(
    (ticket) => ticket.status === "In Progress"
  ).length;

  const resolvedCount = tickets.filter(
    (ticket) => ticket.status === "Resolved"
  ).length;

  const highPriorityCount = tickets.filter(
    (ticket) => ticket.priority === "High"
  ).length;

  const updateTicketStatus = (id, status) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === id ? { ...ticket, status } : ticket
      )
    );

    if (selectedTicket?.id === id) {
      setSelectedTicket((prev) => ({
        ...prev,
        status,
      }));
    }
  };

  const sendReply = () => {
    if (!replyText.trim() || !selectedTicket) return;

    const reply = {
      by: "Admin",
      message: replyText,
      time: "Just now",
    };

    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === selectedTicket.id
          ? {
              ...ticket,
              status:
                ticket.status === "Resolved"
                  ? "Resolved"
                  : "In Progress",
              replies: [...ticket.replies, reply],
            }
          : ticket
      )
    );

    setSelectedTicket((prev) => ({
      ...prev,
      status:
        prev.status === "Resolved"
          ? "Resolved"
          : "In Progress",
      replies: [...prev.replies, reply],
    }));

    setReplyText("");
  };

  const statusClass = (status) => {
    if (status === "Resolved") {
      return "bg-emerald-50 text-emerald-600";
    }

    if (status === "In Progress") {
      return "bg-blue-50 text-blue-600";
    }

    return "bg-amber-50 text-amber-600";
  };

  const priorityClass = (priority) => {
    if (priority === "High") {
      return "bg-rose-50 text-rose-600";
    }

    if (priority === "Medium") {
      return "bg-amber-50 text-amber-600";
    }

    return "bg-slate-100 text-slate-500";
  };

  return (
    <>
      <div className="space-y-6">
        {/* Heading */}
        <div>
          <p className="text-sm font-medium text-violet-600">
            Help Desk
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900">
            Support & Complaints
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage customer and partner support tickets.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Open Tickets"
            value={openCount}
            subtitle="Awaiting response"
            icon={Headphones}
            color="bg-amber-50 text-amber-600"
          />

          <StatCard
            title="In Progress"
            value={progressCount}
            subtitle="Currently handling"
            icon={Clock3}
            color="bg-blue-50 text-blue-600"
          />

          <StatCard
            title="Resolved"
            value={resolvedCount}
            subtitle="Closed tickets"
            icon={CheckCircle2}
            color="bg-emerald-50 text-emerald-600"
          />

          <StatCard
            title="High Priority"
            value={highPriorityCount}
            subtitle="Needs quick action"
            icon={AlertTriangle}
            color="bg-rose-50 text-rose-600"
          />
        </div>

        {/* Tickets */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Support Tickets
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  View complaints and respond to users.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="flex min-w-[310px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4">
                  <Search size={18} className="text-slate-400" />

                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search ticket, user, category..."
                    className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-slate-400"
                  />
                </div>

                <div className="relative">
                  <Headphones
                    size={17}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-violet-500"
                  />

                  <select
                    value={statusFilter}
                    onChange={(e) =>
                      setStatusFilter(e.target.value)
                    }
                    className="min-h-[46px] appearance-none rounded-xl border border-slate-200 bg-white py-2 pl-10 pr-10 text-sm font-medium text-slate-600 outline-none"
                  >
                    <option value="All">All Status</option>
                    <option value="Open">Open</option>
                    <option value="In Progress">
                      In Progress
                    </option>
                    <option value="Resolved">Resolved</option>
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
            <table className="w-full min-w-[1100px]">
              <thead>
                <tr className="bg-[#f8f7ff]">
                  <TableHead>Ticket</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Action</TableHead>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredTickets.map((ticket) => (
                  <tr
                    key={ticket.id}
                    className="transition hover:bg-slate-50"
                  >
                    <td className="px-5 py-4 text-sm font-bold text-violet-600">
                      #{ticket.id}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 font-bold text-violet-700">
                          {ticket.userName.charAt(0)}
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-slate-800">
                            {ticket.userName}
                          </p>

                          <p className="mt-0.5 text-xs text-slate-400">
                            {ticket.userType}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="max-w-[300px] px-5 py-4">
                      <p className="line-clamp-2 text-sm font-semibold text-slate-700">
                        {ticket.subject}
                      </p>
                    </td>

                    <td className="px-5 py-4">
                      <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-600">
                        {ticket.category}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityClass(
                          ticket.priority
                        )}`}
                      >
                        {ticket.priority}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass(
                          ticket.status
                        )}`}
                      >
                        {ticket.status}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-500">
                      {ticket.createdAt}
                    </td>

                    <td className="px-5 py-4">
                      <button
                        onClick={() => setSelectedTicket(ticket)}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
                        title="View Ticket"
                      >
                        <Eye size={17} />
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredTickets.length === 0 && (
                  <tr>
                    <td
                      colSpan="8"
                      className="px-5 py-16 text-center"
                    >
                      <Headphones
                        size={44}
                        className="mx-auto text-slate-300"
                      />

                      <h3 className="mt-3 font-semibold text-slate-700">
                        No tickets found
                      </h3>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="border-t border-slate-100 px-5 py-4">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <strong>{filteredTickets.length}</strong> of{" "}
              <strong>{tickets.length}</strong> tickets
            </p>
          </div>
        </div>
      </div>

      {/* Ticket Modal */}
      {selectedTicket && (
        <div
          onClick={() => setSelectedTicket(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] w-full max-w-[760px] overflow-y-auto rounded-3xl bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-100 bg-[#f8f7ff] px-6 py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">
                  Support Ticket
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  #{selectedTicket.id}
                </h2>
              </div>

              <button
                onClick={() => setSelectedTicket(null)}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6">
              {/* Subject */}
              <div className="rounded-2xl border border-violet-100 bg-violet-50/50 p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase text-violet-600">
                      Subject
                    </p>

                    <h3 className="mt-2 text-lg font-bold text-slate-900">
                      {selectedTicket.subject}
                    </h3>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityClass(
                      selectedTicket.priority
                    )}`}
                  >
                    {selectedTicket.priority} Priority
                  </span>
                </div>
              </div>

              {/* User Data */}
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <InfoBox
                  icon={
                    selectedTicket.userType === "Partner"
                      ? Store
                      : User
                  }
                  title={selectedTicket.userType}
                  value={selectedTicket.userName}
                />

                <InfoBox
                  icon={Mail}
                  title="Email"
                  value={selectedTicket.email}
                />

                <InfoBox
                  icon={Phone}
                  title="Mobile"
                  value={selectedTicket.mobile}
                />

                <InfoBox
                  icon={CalendarDays}
                  title="Created At"
                  value={selectedTicket.createdAt}
                />
              </div>

              {/* Original Message */}
              <div className="mt-5">
                <p className="text-sm font-bold text-slate-800">
                  User Message
                </p>

                <div className="mt-3 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <p className="text-sm leading-7 text-slate-700">
                    {selectedTicket.message}
                  </p>
                </div>
              </div>

              {/* Replies */}
              <div className="mt-6">
                <div className="flex items-center gap-2">
                  <MessageSquare
                    size={18}
                    className="text-violet-600"
                  />

                  <h3 className="font-bold text-slate-800">
                    Conversation
                  </h3>
                </div>

                <div className="mt-4 space-y-3">
                  {selectedTicket.replies.length === 0 ? (
                    <div className="rounded-xl border border-dashed border-slate-200 p-5 text-center text-sm text-slate-400">
                      No replies yet.
                    </div>
                  ) : (
                    selectedTicket.replies.map(
                      (reply, index) => (
                        <div
                          key={index}
                          className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-violet-600 p-4 text-white"
                        >
                          <div className="flex items-center justify-between gap-4">
                            <p className="text-xs font-bold text-violet-100">
                              {reply.by}
                            </p>

                            <span className="text-[10px] text-violet-200">
                              {reply.time}
                            </span>
                          </div>

                          <p className="mt-2 text-sm leading-6">
                            {reply.message}
                          </p>
                        </div>
                      )
                    )
                  )}
                </div>
              </div>

              {/* Reply */}
              {selectedTicket.status !== "Resolved" && (
                <div className="mt-6">
                  <label className="mb-2 block text-sm font-bold text-slate-800">
                    Reply to User
                  </label>

                  <textarea
                    rows="4"
                    value={replyText}
                    onChange={(e) =>
                      setReplyText(e.target.value)
                    }
                    placeholder="Write your response..."
                    className="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-violet-400"
                  />

                  <div className="mt-3 flex justify-end">
                    <button
                      onClick={sendReply}
                      className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white"
                    >
                      <Send size={16} />
                      Send Reply
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="sticky bottom-0 flex flex-col gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4 sm:flex-row sm:justify-end">
              <button
                onClick={() => setSelectedTicket(null)}
                className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600"
              >
                Close
              </button>

              {selectedTicket.status === "Open" && (
                <button
                  onClick={() =>
                    updateTicketStatus(
                      selectedTicket.id,
                      "In Progress"
                    )
                  }
                  className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Mark In Progress
                </button>
              )}

              {selectedTicket.status !== "Resolved" && (
                <button
                  onClick={() =>
                    updateTicketStatus(
                      selectedTicket.id,
                      "Resolved"
                    )
                  }
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white"
                >
                  <CheckCircle2 size={17} />
                  Resolve Ticket
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
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${color}`}
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

export default AdminSupport;