import React, { useMemo, useState } from "react";
import {
  Bell,
  Search,
  Plus,
  Trash2,
  X,
  CheckCheck,
  User,
  Store,
  CalendarDays,
  AlertTriangle,
  Info,
  BadgePercent,
  Send,
  Users,
  ChevronDown,
  Eye,
} from "lucide-react";

const AdminNotifications = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [showSendModal, setShowSendModal] = useState(false);

  const [notifications, setNotifications] = useState([
    {
      id: "NT001",
      title: "New Salon Registration",
      message:
        "Royal Hair Studio has submitted a new partner registration request.",
      type: "Partner",
      recipient: "Admin",
      date: "12 Oct 2026",
      time: "10:45 AM",
      status: "Unread",
      priority: "Normal",
    },
    {
      id: "NT002",
      title: "Booking Cancelled",
      message:
        "Booking BK005 was cancelled by customer Vikram Joshi.",
      type: "Booking",
      recipient: "Admin",
      date: "12 Oct 2026",
      time: "09:30 AM",
      status: "Read",
      priority: "Normal",
    },
    {
      id: "NT003",
      title: "Payment Failed",
      message:
        "Payment for booking BK006 has failed. Customer may retry the transaction.",
      type: "Payment",
      recipient: "Admin",
      date: "11 Oct 2026",
      time: "07:20 PM",
      status: "Unread",
      priority: "High",
    },
    {
      id: "NT004",
      title: "Review Reported",
      message:
        "A customer review for Urban Scissors has been reported and requires moderation.",
      type: "Review",
      recipient: "Admin",
      date: "11 Oct 2026",
      time: "04:35 PM",
      status: "Unread",
      priority: "High",
    },
    {
      id: "NT005",
      title: "Festive Offer Started",
      message:
        "FESTIVE30 promotional offer is now active for eligible customers.",
      type: "Offer",
      recipient: "Customers",
      date: "10 Oct 2026",
      time: "12:00 PM",
      status: "Read",
      priority: "Normal",
    },
    {
      id: "NT006",
      title: "New Customer Registered",
      message:
        "A new customer account has been created on SalonWala.",
      type: "Customer",
      recipient: "Admin",
      date: "10 Oct 2026",
      time: "09:15 AM",
      status: "Read",
      priority: "Normal",
    },
  ]);

  const [newNotification, setNewNotification] = useState({
    title: "",
    message: "",
    audience: "All Customers",
    type: "General",
    priority: "Normal",
  });

  const filteredNotifications = useMemo(() => {
    const q = search.toLowerCase();

    return notifications.filter((item) => {
      const searchMatch =
        item.title.toLowerCase().includes(q) ||
        item.message.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q);

      const filterMatch =
        filter === "All" ||
        item.status === filter ||
        item.type === filter;

      return searchMatch && filterMatch;
    });
  }, [notifications, search, filter]);

  const unreadCount = notifications.filter(
    (item) => item.status === "Unread"
  ).length;

  const highPriorityCount = notifications.filter(
    (item) => item.priority === "High"
  ).length;

  const readCount = notifications.filter(
    (item) => item.status === "Read"
  ).length;

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: "Read",
            }
          : item
      )
    );

    if (selectedNotification?.id === id) {
      setSelectedNotification((prev) => ({
        ...prev,
        status: "Read",
      }));
    }
  };

  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((item) => ({
        ...item,
        status: "Read",
      }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((item) => item.id !== id)
    );

    if (selectedNotification?.id === id) {
      setSelectedNotification(null);
    }
  };

  const sendNotification = () => {
    if (
      !newNotification.title.trim() ||
      !newNotification.message.trim()
    ) {
      return;
    }

    const item = {
      id: `NT${String(notifications.length + 1).padStart(
        3,
        "0"
      )}`,
      title: newNotification.title,
      message: newNotification.message,
      type: newNotification.type,
      recipient: newNotification.audience,
      date: "Today",
      time: "Just now",
      status: "Read",
      priority: newNotification.priority,
    };

    setNotifications((prev) => [item, ...prev]);

    setNewNotification({
      title: "",
      message: "",
      audience: "All Customers",
      type: "General",
      priority: "Normal",
    });

    setShowSendModal(false);
  };

  const getIcon = (type) => {
    if (type === "Partner") return Store;
    if (type === "Booking") return CalendarDays;
    if (type === "Offer") return BadgePercent;
    if (type === "Customer") return User;
    if (type === "Payment") return AlertTriangle;
    if (type === "Review") return AlertTriangle;

    return Info;
  };

  const getIconStyle = (type) => {
    if (type === "Partner")
      return "bg-violet-50 text-violet-600";

    if (type === "Booking")
      return "bg-blue-50 text-blue-600";

    if (type === "Offer")
      return "bg-emerald-50 text-emerald-600";

    if (type === "Customer")
      return "bg-cyan-50 text-cyan-600";

    if (type === "Payment")
      return "bg-rose-50 text-rose-600";

    if (type === "Review")
      return "bg-amber-50 text-amber-600";

    return "bg-slate-100 text-slate-600";
  };

  return (
    <>
      <div className="space-y-6">
        {/* Heading */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-medium text-violet-600">
              Communication Center
            </p>

            <h1 className="mt-1 text-2xl font-bold text-slate-900">
              Notifications
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              View platform alerts and send notifications to users
              and partners.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={markAllRead}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              <CheckCheck size={18} />
              Mark All Read
            </button>

            <button
              onClick={() => setShowSendModal(true)}
              className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700"
            >
              <Plus size={18} />
              Send Notification
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Notifications"
            value={notifications.length}
            subtitle="All notifications"
            icon={Bell}
            color="bg-violet-50 text-violet-600"
          />

          <StatCard
            title="Unread"
            value={unreadCount}
            subtitle="Needs attention"
            icon={Bell}
            color="bg-blue-50 text-blue-600"
          />

          <StatCard
            title="Read"
            value={readCount}
            subtitle="Already viewed"
            icon={CheckCheck}
            color="bg-emerald-50 text-emerald-600"
          />

          <StatCard
            title="High Priority"
            value={highPriorityCount}
            subtitle="Important alerts"
            icon={AlertTriangle}
            color="bg-rose-50 text-rose-600"
          />
        </div>

        {/* Notification Container */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* Filters */}
          <div className="border-b border-slate-100 p-5">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Notification Center
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Platform events, alerts and announcements.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="flex min-w-[310px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4">
                  <Search
                    size={18}
                    className="text-slate-400"
                  />

                  <input
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    placeholder="Search notification..."
                    className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-slate-400"
                  />
                </div>

                <div className="relative">
                  <Bell
                    size={17}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-violet-500"
                  />

                  <select
                    value={filter}
                    onChange={(e) =>
                      setFilter(e.target.value)
                    }
                    className="min-h-[46px] appearance-none rounded-xl border border-slate-200 bg-white py-2 pl-10 pr-10 text-sm font-medium text-slate-600 outline-none"
                  >
                    <option value="All">All</option>
                    <option value="Unread">Unread</option>
                    <option value="Read">Read</option>
                    <option value="Partner">Partner</option>
                    <option value="Booking">Booking</option>
                    <option value="Payment">Payment</option>
                    <option value="Review">Review</option>
                    <option value="Offer">Offer</option>
                  </select>

                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Notification List */}
          <div className="divide-y divide-slate-100">
            {filteredNotifications.map((item) => {
              const Icon = getIcon(item.type);

              return (
                <div
                  key={item.id}
                  className={`flex flex-col gap-4 p-5 transition hover:bg-slate-50 lg:flex-row lg:items-center lg:justify-between ${
                    item.status === "Unread"
                      ? "bg-violet-50/30"
                      : "bg-white"
                  }`}
                >
                  <div className="flex min-w-0 gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${getIconStyle(
                        item.type
                      )}`}
                    >
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-bold text-slate-900">
                          {item.title}
                        </h3>

                        {item.status === "Unread" && (
                          <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                        )}

                        {item.priority === "High" && (
                          <span className="rounded-full bg-rose-50 px-2 py-1 text-[10px] font-bold uppercase text-rose-600">
                            High Priority
                          </span>
                        )}
                      </div>

                      <p className="mt-1 max-w-[760px] text-sm leading-6 text-slate-500">
                        {item.message}
                      </p>

                      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                        <span>{item.type}</span>

                        <span>•</span>

                        <span>{item.recipient}</span>

                        <span>•</span>

                        <span>
                          {item.date} · {item.time}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      onClick={() => {
                        setSelectedNotification(item);

                        if (item.status === "Unread") {
                          markAsRead(item.id);
                        }
                      }}
                      title="View Notification"
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition hover:bg-blue-100"
                    >
                      <Eye size={17} />
                    </button>

                    {item.status === "Unread" && (
                      <button
                        onClick={() =>
                          markAsRead(item.id)
                        }
                        title="Mark as Read"
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition hover:bg-emerald-100"
                      >
                        <CheckCheck size={17} />
                      </button>
                    )}

                    <button
                      onClick={() =>
                        deleteNotification(item.id)
                      }
                      title="Delete Notification"
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-50 text-rose-600 transition hover:bg-rose-100"
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                </div>
              );
            })}

            {filteredNotifications.length === 0 && (
              <div className="py-16 text-center">
                <Bell
                  size={44}
                  className="mx-auto text-slate-300"
                />

                <h3 className="mt-3 font-semibold text-slate-700">
                  No notifications found
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Try another search or filter.
                </p>
              </div>
            )}
          </div>

          <div className="border-t border-slate-100 px-5 py-4">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <strong>
                {filteredNotifications.length}
              </strong>{" "}
              of <strong>{notifications.length}</strong>{" "}
              notifications
            </p>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {selectedNotification && (
        <div
          onClick={() =>
            setSelectedNotification(null)
          }
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[620px] overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-100 bg-[#f8f7ff] px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 text-white">
                  <Bell size={21} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">
                    Notification Details
                  </p>

                  <h2 className="mt-1 text-lg font-bold text-slate-900">
                    {selectedNotification.title}
                  </h2>
                </div>
              </div>

              <button
                onClick={() =>
                  setSelectedNotification(null)
                }
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6">
              {selectedNotification.priority ===
                "High" && (
                <div className="mb-5 flex gap-3 rounded-xl border border-rose-100 bg-rose-50 p-4">
                  <AlertTriangle
                    size={19}
                    className="shrink-0 text-rose-600"
                  />

                  <div>
                    <p className="text-sm font-semibold text-rose-700">
                      High Priority Notification
                    </p>

                    <p className="mt-1 text-xs text-rose-500">
                      This notification may require admin
                      attention.
                    </p>
                  </div>
                </div>
              )}

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <p className="text-sm leading-7 text-slate-700">
                  {selectedNotification.message}
                </p>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <InfoBox
                  title="Notification ID"
                  value={`#${selectedNotification.id}`}
                />

                <InfoBox
                  title="Category"
                  value={selectedNotification.type}
                />

                <InfoBox
                  title="Recipient"
                  value={selectedNotification.recipient}
                />

                <InfoBox
                  title="Status"
                  value={selectedNotification.status}
                />

                <InfoBox
                  title="Date"
                  value={selectedNotification.date}
                />

                <InfoBox
                  title="Time"
                  value={selectedNotification.time}
                />
              </div>
            </div>

            <div className="flex justify-end border-t border-slate-100 bg-slate-50 px-6 py-4">
              <button
                onClick={() =>
                  setSelectedNotification(null)
                }
                className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Send Notification Modal */}
      {showSendModal && (
        <div
          onClick={() => setShowSendModal(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-[680px] overflow-y-auto rounded-3xl bg-white shadow-2xl"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-[#f8f7ff] px-6 py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">
                  Communication
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  Send Notification
                </h2>
              </div>

              <button
                onClick={() =>
                  setShowSendModal(false)
                }
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-5 p-6">
              <InputBox
                label="Notification Title"
                value={newNotification.title}
                onChange={(value) =>
                  setNewNotification({
                    ...newNotification,
                    title: value,
                  })
                }
                placeholder="Enter notification title"
              />

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Message
                </label>

                <textarea
                  rows="5"
                  value={newNotification.message}
                  onChange={(e) =>
                    setNewNotification({
                      ...newNotification,
                      message: e.target.value,
                    })
                  }
                  placeholder="Write your notification message..."
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-violet-400"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <SelectBox
                  label="Send To"
                  value={newNotification.audience}
                  onChange={(value) =>
                    setNewNotification({
                      ...newNotification,
                      audience: value,
                    })
                  }
                  options={[
                    "All Customers",
                    "All Partners",
                    "All Users",
                    "Selected Customers",
                    "Selected Partners",
                  ]}
                />

                <SelectBox
                  label="Notification Type"
                  value={newNotification.type}
                  onChange={(value) =>
                    setNewNotification({
                      ...newNotification,
                      type: value,
                    })
                  }
                  options={[
                    "General",
                    "Offer",
                    "Booking",
                    "Payment",
                    "Partner",
                  ]}
                />

                <SelectBox
                  label="Priority"
                  value={newNotification.priority}
                  onChange={(value) =>
                    setNewNotification({
                      ...newNotification,
                      priority: value,
                    })
                  }
                  options={["Normal", "High"]}
                />
              </div>

              <div className="rounded-2xl border border-violet-100 bg-violet-50 p-4">
                <div className="flex gap-3">
                  <Users
                    size={19}
                    className="shrink-0 text-violet-600"
                  />

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Audience
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      This frontend version only simulates
                      notification sending. Backend integration
                      will send actual push, in-app or email
                      notifications later.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 flex justify-end gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4">
              <button
                onClick={() =>
                  setShowSendModal(false)
                }
                className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600"
              >
                Cancel
              </button>

              <button
                onClick={sendNotification}
                className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white"
              >
                <Send size={17} />
                Send Notification
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

const InfoBox = ({ title, value }) => (
  <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
    <p className="text-xs font-medium text-slate-400">
      {title}
    </p>

    <p className="mt-1 text-sm font-semibold text-slate-800">
      {value}
    </p>
  </div>
);

const InputBox = ({
  label,
  value,
  onChange,
  placeholder,
}) => (
  <div>
    <label className="mb-2 block text-sm font-semibold text-slate-700">
      {label}
    </label>

    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-violet-400"
    />
  </div>
);

const SelectBox = ({
  label,
  value,
  onChange,
  options,
}) => (
  <div>
    <label className="mb-2 block text-sm font-semibold text-slate-700">
      {label}
    </label>

    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-violet-400"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default AdminNotifications;