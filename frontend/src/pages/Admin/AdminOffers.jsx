import React, { useMemo, useState } from "react";
import {
  BadgePercent,
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  X,
  CalendarDays,
  IndianRupee,
  Users,
  ToggleLeft,
  ToggleRight,
  CheckCircle2,
  Clock3,
  Ban,
} from "lucide-react";

const AdminOffers = () => {
  const [search, setSearch] = useState("");
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const [offers, setOffers] = useState([
    {
      id: "OF001",
      code: "WELCOME20",
      title: "Welcome Offer",
      type: "Percentage",
      discount: 20,
      maxDiscount: 200,
      minOrder: 499,
      usage: 124,
      limit: 500,
      validFrom: "01 Oct 2026",
      validTill: "31 Oct 2026",
      status: "Active",
    },
    {
      id: "OF002",
      code: "SALON100",
      title: "₹100 Off",
      type: "Flat",
      discount: 100,
      maxDiscount: 100,
      minOrder: 599,
      usage: 89,
      limit: 300,
      validFrom: "05 Oct 2026",
      validTill: "25 Oct 2026",
      status: "Active",
    },
    {
      id: "OF003",
      code: "GLOW25",
      title: "Beauty Special",
      type: "Percentage",
      discount: 25,
      maxDiscount: 300,
      minOrder: 999,
      usage: 42,
      limit: 150,
      validFrom: "10 Oct 2026",
      validTill: "20 Oct 2026",
      status: "Active",
    },
    {
      id: "OF004",
      code: "FESTIVE30",
      title: "Festive Offer",
      type: "Percentage",
      discount: 30,
      maxDiscount: 500,
      minOrder: 1499,
      usage: 210,
      limit: 250,
      validFrom: "20 Sep 2026",
      validTill: "05 Oct 2026",
      status: "Expired",
    },
    {
      id: "OF005",
      code: "SAVE150",
      title: "Flat Saving",
      type: "Flat",
      discount: 150,
      maxDiscount: 150,
      minOrder: 799,
      usage: 0,
      limit: 200,
      validFrom: "20 Oct 2026",
      validTill: "15 Nov 2026",
      status: "Scheduled",
    },
  ]);

  const [newOffer, setNewOffer] = useState({
    code: "",
    title: "",
    type: "Percentage",
    discount: "",
    maxDiscount: "",
    minOrder: "",
    limit: "",
    validFrom: "",
    validTill: "",
  });

  const filteredOffers = useMemo(() => {
    const q = search.toLowerCase();

    return offers.filter(
      (offer) =>
        offer.code.toLowerCase().includes(q) ||
        offer.title.toLowerCase().includes(q) ||
        offer.id.toLowerCase().includes(q)
    );
  }, [offers, search]);

  const activeCount = offers.filter(
    (offer) => offer.status === "Active"
  ).length;

  const scheduledCount = offers.filter(
    (offer) => offer.status === "Scheduled"
  ).length;

  const expiredCount = offers.filter(
    (offer) => offer.status === "Expired"
  ).length;

  const toggleOffer = (id) => {
    setOffers((prev) =>
      prev.map((offer) =>
        offer.id === id
          ? {
              ...offer,
              status:
                offer.status === "Active"
                  ? "Inactive"
                  : "Active",
            }
          : offer
      )
    );
  };

  const deleteOffer = (id) => {
    setOffers((prev) =>
      prev.filter((offer) => offer.id !== id)
    );

    if (selectedOffer?.id === id) {
      setSelectedOffer(null);
    }
  };

  const addOffer = () => {
    if (
      !newOffer.code ||
      !newOffer.title ||
      !newOffer.discount ||
      !newOffer.validFrom ||
      !newOffer.validTill
    ) {
      return;
    }

    const offer = {
      id: `OF${String(offers.length + 1).padStart(3, "0")}`,
      code: newOffer.code.toUpperCase(),
      title: newOffer.title,
      type: newOffer.type,
      discount: Number(newOffer.discount),
      maxDiscount: Number(newOffer.maxDiscount || 0),
      minOrder: Number(newOffer.minOrder || 0),
      usage: 0,
      limit: Number(newOffer.limit || 100),
      validFrom: newOffer.validFrom,
      validTill: newOffer.validTill,
      status: "Active",
    };

    setOffers((prev) => [offer, ...prev]);

    setNewOffer({
      code: "",
      title: "",
      type: "Percentage",
      discount: "",
      maxDiscount: "",
      minOrder: "",
      limit: "",
      validFrom: "",
      validTill: "",
    });

    setShowAddModal(false);
  };

  const statusClass = (status) => {
    if (status === "Active") {
      return "bg-emerald-50 text-emerald-600";
    }

    if (status === "Expired") {
      return "bg-rose-50 text-rose-600";
    }

    if (status === "Scheduled") {
      return "bg-blue-50 text-blue-600";
    }

    return "bg-slate-100 text-slate-500";
  };

  const discountText = (offer) => {
    if (offer.type === "Percentage") {
      return `${offer.discount}%`;
    }

    return `₹${offer.discount}`;
  };

  return (
    <>
      <div className="space-y-6">
        {/* Heading */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-medium text-violet-600">
              Marketing Management
            </p>

            <h1 className="mt-1 text-2xl font-bold text-slate-900">
              Offers & Coupons
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Create and manage promotional offers for SalonWala customers.
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700"
          >
            <Plus size={18} />
            Create Offer
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Offers"
            value={offers.length}
            subtitle="All coupons"
            icon={BadgePercent}
            color="bg-violet-50 text-violet-600"
          />

          <StatCard
            title="Active Offers"
            value={activeCount}
            subtitle="Currently available"
            icon={CheckCircle2}
            color="bg-emerald-50 text-emerald-600"
          />

          <StatCard
            title="Scheduled"
            value={scheduledCount}
            subtitle="Upcoming offers"
            icon={Clock3}
            color="bg-blue-50 text-blue-600"
          />

          <StatCard
            title="Expired"
            value={expiredCount}
            subtitle="Past offers"
            icon={Ban}
            color="bg-rose-50 text-rose-600"
          />
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Coupon List
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Track coupon usage, validity and offer status.
              </p>
            </div>

            <div className="flex min-w-[300px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4">
              <Search size={18} className="text-slate-400" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search coupon or offer..."
                className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1200px]">
              <thead>
                <tr className="bg-[#f8f7ff]">
                  <TableHead>ID</TableHead>
                  <TableHead>Coupon</TableHead>
                  <TableHead>Discount</TableHead>
                  <TableHead>Min Order</TableHead>
                  <TableHead>Max Discount</TableHead>
                  <TableHead>Usage</TableHead>
                  <TableHead>Validity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredOffers.map((offer) => (
                  <tr
                    key={offer.id}
                    className="transition hover:bg-slate-50"
                  >
                    <td className="px-5 py-4 text-sm font-semibold text-violet-600">
                      #{offer.id}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                          <BadgePercent size={19} />
                        </div>

                        <div>
                          <p className="text-sm font-bold text-slate-900">
                            {offer.code}
                          </p>

                          <p className="mt-0.5 text-xs text-slate-400">
                            {offer.title}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <span className="text-sm font-bold text-emerald-600">
                        {discountText(offer)}
                      </span>

                      <p className="mt-1 text-xs text-slate-400">
                        {offer.type}
                      </p>
                    </td>

                    <td className="px-5 py-4 text-sm font-semibold text-slate-700">
                      ₹{offer.minOrder}
                    </td>

                    <td className="px-5 py-4 text-sm font-semibold text-slate-700">
                      ₹{offer.maxDiscount}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <Users
                          size={15}
                          className="text-violet-500"
                        />

                        <span className="text-sm font-semibold text-slate-700">
                          {offer.usage}/{offer.limit}
                        </span>
                      </div>

                      <div className="mt-2 h-1.5 w-[100px] overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-violet-500"
                          style={{
                            width: `${Math.min(
                              (offer.usage / offer.limit) * 100,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-start gap-2">
                        <CalendarDays
                          size={15}
                          className="mt-0.5 text-violet-500"
                        />

                        <div>
                          <p className="text-sm text-slate-600">
                            {offer.validFrom}
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            to {offer.validTill}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      {offer.status === "Active" ||
                      offer.status === "Inactive" ? (
                        <button
                          onClick={() => toggleOffer(offer.id)}
                          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${statusClass(
                            offer.status
                          )}`}
                        >
                          {offer.status === "Active" ? (
                            <ToggleRight size={18} />
                          ) : (
                            <ToggleLeft size={18} />
                          )}

                          {offer.status}
                        </button>
                      ) : (
                        <span
                          className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${statusClass(
                            offer.status
                          )}`}
                        >
                          {offer.status}
                        </span>
                      )}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            setSelectedOffer(offer)
                          }
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
                          title="View Offer"
                        >
                          <Eye size={17} />
                        </button>

                        <button
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-100"
                          title="Edit Offer"
                        >
                          <Pencil size={17} />
                        </button>

                        <button
                          onClick={() => deleteOffer(offer.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100"
                          title="Delete Offer"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredOffers.length === 0 && (
                  <tr>
                    <td
                      colSpan="9"
                      className="px-5 py-16 text-center"
                    >
                      <BadgePercent
                        size={42}
                        className="mx-auto text-slate-300"
                      />

                      <h3 className="mt-3 font-semibold text-slate-700">
                        No offers found
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        Try another search.
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
              <strong>{filteredOffers.length}</strong> of{" "}
              <strong>{offers.length}</strong> offers
            </p>
          </div>
        </div>
      </div>

      {/* View Modal */}
      {selectedOffer && (
        <div
          onClick={() => setSelectedOffer(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[620px] overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-100 bg-[#f8f7ff] px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 text-white">
                  <BadgePercent size={22} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase text-violet-600">
                    Coupon Details
                  </p>

                  <h2 className="text-xl font-bold text-slate-900">
                    {selectedOffer.code}
                  </h2>
                </div>
              </div>

              <button
                onClick={() => setSelectedOffer(null)}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6">
              <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-purple-500 p-6 text-white">
                <p className="text-sm text-violet-100">
                  {selectedOffer.title}
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  {discountText(selectedOffer)} OFF
                </h3>

                <p className="mt-2 text-sm text-violet-100">
                  Use code:{" "}
                  <span className="font-bold text-white">
                    {selectedOffer.code}
                  </span>
                </p>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <InfoBox
                  title="Offer Type"
                  value={selectedOffer.type}
                />

                <InfoBox
                  title="Minimum Order"
                  value={`₹${selectedOffer.minOrder}`}
                />

                <InfoBox
                  title="Maximum Discount"
                  value={`₹${selectedOffer.maxDiscount}`}
                />

                <InfoBox
                  title="Usage"
                  value={`${selectedOffer.usage} / ${selectedOffer.limit}`}
                />

                <InfoBox
                  title="Valid From"
                  value={selectedOffer.validFrom}
                />

                <InfoBox
                  title="Valid Till"
                  value={selectedOffer.validTill}
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4">
              <button
                onClick={() => setSelectedOffer(null)}
                className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600"
              >
                Close
              </button>

              <button className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white">
                <Pencil size={16} />
                Edit Offer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Modal */}
      {showAddModal && (
        <div
          onClick={() => setShowAddModal(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white shadow-2xl"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-[#f8f7ff] px-6 py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">
                  New Promotion
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  Create Offer
                </h2>
              </div>

              <button
                onClick={() => setShowAddModal(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-2">
              <InputBox
                label="Coupon Code"
                value={newOffer.code}
                onChange={(value) =>
                  setNewOffer({
                    ...newOffer,
                    code: value,
                  })
                }
                placeholder="WELCOME20"
              />

              <InputBox
                label="Offer Title"
                value={newOffer.title}
                onChange={(value) =>
                  setNewOffer({
                    ...newOffer,
                    title: value,
                  })
                }
                placeholder="Welcome Offer"
              />

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Discount Type
                </label>

                <select
                  value={newOffer.type}
                  onChange={(e) =>
                    setNewOffer({
                      ...newOffer,
                      type: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-violet-400"
                >
                  <option value="Percentage">
                    Percentage
                  </option>

                  <option value="Flat">
                    Flat Amount
                  </option>
                </select>
              </div>

              <InputBox
                label="Discount"
                type="number"
                value={newOffer.discount}
                onChange={(value) =>
                  setNewOffer({
                    ...newOffer,
                    discount: value,
                  })
                }
                placeholder={
                  newOffer.type === "Percentage"
                    ? "20"
                    : "100"
                }
              />

              <InputBox
                label="Minimum Order"
                type="number"
                value={newOffer.minOrder}
                onChange={(value) =>
                  setNewOffer({
                    ...newOffer,
                    minOrder: value,
                  })
                }
                placeholder="499"
              />

              <InputBox
                label="Maximum Discount"
                type="number"
                value={newOffer.maxDiscount}
                onChange={(value) =>
                  setNewOffer({
                    ...newOffer,
                    maxDiscount: value,
                  })
                }
                placeholder="200"
              />

              <InputBox
                label="Usage Limit"
                type="number"
                value={newOffer.limit}
                onChange={(value) =>
                  setNewOffer({
                    ...newOffer,
                    limit: value,
                  })
                }
                placeholder="500"
              />

              <InputBox
                label="Valid From"
                type="date"
                value={newOffer.validFrom}
                onChange={(value) =>
                  setNewOffer({
                    ...newOffer,
                    validFrom: value,
                  })
                }
              />

              <InputBox
                label="Valid Till"
                type="date"
                value={newOffer.validTill}
                onChange={(value) =>
                  setNewOffer({
                    ...newOffer,
                    validTill: value,
                  })
                }
              />
            </div>

            <div className="sticky bottom-0 flex justify-end gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4">
              <button
                onClick={() => setShowAddModal(false)}
                className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600"
              >
                Cancel
              </button>

              <button
                onClick={addOffer}
                className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white"
              >
                <Plus size={17} />
                Create Offer
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
  type = "text",
}) => (
  <div>
    <label className="mb-2 block text-sm font-semibold text-slate-700">
      {label}
    </label>

    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-violet-400"
    />
  </div>
);

export default AdminOffers;