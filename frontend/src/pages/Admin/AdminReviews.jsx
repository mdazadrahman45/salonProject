import React, { useMemo, useState } from "react";
import {
  Star,
  Search,
  Eye,
  Trash2,
  X,
  User,
  Store,
  MessageSquare,
  CheckCircle2,
  AlertTriangle,
  Flag,
  ShieldCheck,
} from "lucide-react";

const AdminReviews = () => {
  const [search, setSearch] = useState("");
  const [selectedReview, setSelectedReview] = useState(null);

  const [reviews, setReviews] = useState([
    {
      id: "RV001",
      customer: "Rahul Sharma",
      salon: "Looks Salon",
      rating: 5,
      comment:
        "Great service and very professional staff. Really happy with the haircut.",
      date: "12 Oct 2026",
      status: "Published",
      reported: false,
    },
    {
      id: "RV002",
      customer: "Priya Verma",
      salon: "Natura's Salon",
      rating: 4,
      comment:
        "Good overall experience. The service was nice but waiting time was slightly high.",
      date: "11 Oct 2026",
      status: "Published",
      reported: false,
    },
    {
      id: "RV003",
      customer: "Aman Khan",
      salon: "The Barber Club",
      rating: 2,
      comment:
        "I was not satisfied with the service quality and appointment timing.",
      date: "10 Oct 2026",
      status: "Under Review",
      reported: true,
    },
    {
      id: "RV004",
      customer: "Neha Jain",
      salon: "Glam Hub",
      rating: 5,
      comment:
        "Amazing facial service. Staff was polite and the salon was clean.",
      date: "09 Oct 2026",
      status: "Published",
      reported: false,
    },
    {
      id: "RV005",
      customer: "Vikas Patel",
      salon: "Urban Scissors",
      rating: 1,
      comment:
        "Booking was confirmed but I had to wait for a long time.",
      date: "08 Oct 2026",
      status: "Under Review",
      reported: true,
    },
    {
      id: "RV006",
      customer: "Sneha Singh",
      salon: "Style Studio",
      rating: 4,
      comment:
        "Nice experience and good service. Would visit again.",
      date: "07 Oct 2026",
      status: "Published",
      reported: false,
    },
  ]);

  const filteredReviews = useMemo(() => {
    const q = search.toLowerCase();

    return reviews.filter(
      (review) =>
        review.customer.toLowerCase().includes(q) ||
        review.salon.toLowerCase().includes(q) ||
        review.comment.toLowerCase().includes(q) ||
        review.id.toLowerCase().includes(q)
    );
  }, [reviews, search]);

  const totalReviews = reviews.length;

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, item) => sum + item.rating, 0) /
          reviews.length
        ).toFixed(1)
      : "0.0";

  const reportedReviews = reviews.filter(
    (item) => item.reported
  ).length;

  const publishedReviews = reviews.filter(
    (item) => item.status === "Published"
  ).length;

  const deleteReview = (id) => {
    setReviews((prev) =>
      prev.filter((review) => review.id !== id)
    );

    if (selectedReview?.id === id) {
      setSelectedReview(null);
    }
  };

  const approveReview = (id) => {
    setReviews((prev) =>
      prev.map((review) =>
        review.id === id
          ? {
              ...review,
              status: "Published",
              reported: false,
            }
          : review
      )
    );

    if (selectedReview?.id === id) {
      setSelectedReview((prev) => ({
        ...prev,
        status: "Published",
        reported: false,
      }));
    }
  };

  return (
    <>
      <div className="space-y-6">
        {/* Heading */}
        <div>
          <p className="text-sm font-medium text-violet-600">
            Review Management
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900">
            Reviews & Ratings
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Monitor customer feedback and moderate reported reviews.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Reviews"
            value={totalReviews}
            subtitle="All customer reviews"
            icon={MessageSquare}
            color="bg-violet-50 text-violet-600"
          />

          <StatCard
            title="Average Rating"
            value={`${averageRating} ★`}
            subtitle="Overall platform rating"
            icon={Star}
            color="bg-amber-50 text-amber-600"
          />

          <StatCard
            title="Published"
            value={publishedReviews}
            subtitle="Visible reviews"
            icon={CheckCircle2}
            color="bg-emerald-50 text-emerald-600"
          />

          <StatCard
            title="Reported"
            value={reportedReviews}
            subtitle="Needs moderation"
            icon={AlertTriangle}
            color="bg-rose-50 text-rose-600"
          />
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Customer Reviews
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                View, moderate and manage customer feedback.
              </p>
            </div>

            <div className="flex min-w-[320px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4">
              <Search size={18} className="text-slate-400" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search customer, salon, review..."
                className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px]">
              <thead>
                <tr className="bg-[#f8f7ff]">
                  <TableHead>ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Salon</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Review</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredReviews.map((review) => (
                  <tr
                    key={review.id}
                    className="transition hover:bg-slate-50"
                  >
                    <td className="px-5 py-4 text-sm font-semibold text-violet-600">
                      #{review.id}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 font-bold text-violet-700">
                          {review.customer
                            .charAt(0)
                            .toUpperCase()}
                        </div>

                        <p className="text-sm font-semibold text-slate-900">
                          {review.customer}
                        </p>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Store
                          size={15}
                          className="text-violet-500"
                        />

                        {review.salon}
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={15}
                            className={
                              star <= review.rating
                                ? "fill-amber-400 text-amber-400"
                                : "text-slate-200"
                            }
                          />
                        ))}
                      </div>

                      <p className="mt-1 text-xs text-slate-400">
                        {review.rating}/5
                      </p>
                    </td>

                    <td className="max-w-[300px] px-5 py-4">
                      <p className="line-clamp-2 text-sm leading-6 text-slate-600">
                        {review.comment}
                      </p>

                      {review.reported && (
                        <div className="mt-2 flex items-center gap-1 text-xs font-semibold text-rose-500">
                          <Flag size={13} />
                          Reported
                        </div>
                      )}
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-500">
                      {review.date}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          review.status === "Published"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-amber-50 text-amber-600"
                        }`}
                      >
                        {review.status}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            setSelectedReview(review)
                          }
                          title="View Review"
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
                        >
                          <Eye size={17} />
                        </button>

                        {review.status ===
                          "Under Review" && (
                          <button
                            onClick={() =>
                              approveReview(review.id)
                            }
                            title="Approve Review"
                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                          >
                            <CheckCircle2 size={17} />
                          </button>
                        )}

                        <button
                          onClick={() =>
                            deleteReview(review.id)
                          }
                          title="Delete Review"
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredReviews.length === 0 && (
                  <tr>
                    <td
                      colSpan="8"
                      className="px-5 py-16 text-center"
                    >
                      <MessageSquare
                        size={42}
                        className="mx-auto text-slate-300"
                      />

                      <h3 className="mt-3 font-semibold text-slate-700">
                        No reviews found
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        Try changing the search.
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
              <strong>{filteredReviews.length}</strong>{" "}
              of <strong>{reviews.length}</strong>{" "}
              reviews
            </p>
          </div>
        </div>
      </div>

      {/* Review Modal */}
      {selectedReview && (
        <div
          onClick={() => setSelectedReview(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[650px] overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-100 bg-[#f8f7ff] px-6 py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">
                  Review Details
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  #{selectedReview.id}
                </h2>
              </div>

              <button
                onClick={() => setSelectedReview(null)}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6">
              {/* Rating */}
              <div className="rounded-2xl border border-amber-100 bg-amber-50/60 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Customer Rating
                    </p>

                    <div className="mt-2 flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={21}
                          className={
                            star <= selectedReview.rating
                              ? "fill-amber-400 text-amber-400"
                              : "text-slate-300"
                          }
                        />
                      ))}
                    </div>
                  </div>

                  <span className="text-3xl font-bold text-slate-900">
                    {selectedReview.rating}.0
                  </span>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <InfoBox
                  icon={User}
                  title="Customer"
                  value={selectedReview.customer}
                />

                <InfoBox
                  icon={Store}
                  title="Salon"
                  value={selectedReview.salon}
                />

                <InfoBox
                  icon={MessageSquare}
                  title="Status"
                  value={selectedReview.status}
                />

                <InfoBox
                  icon={Star}
                  title="Rating"
                  value={`${selectedReview.rating}/5`}
                />
              </div>

              <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Customer Review
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {selectedReview.comment}
                </p>
              </div>

              {selectedReview.reported && (
                <div className="mt-5 flex gap-3 rounded-2xl border border-rose-100 bg-rose-50 p-4">
                  <AlertTriangle
                    size={20}
                    className="shrink-0 text-rose-500"
                  />

                  <div>
                    <p className="text-sm font-semibold text-rose-700">
                      This review has been reported
                    </p>

                    <p className="mt-1 text-xs leading-5 text-rose-500">
                      Admin moderation is required before this
                      review remains visible to customers.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4 sm:flex-row sm:justify-end">
              <button
                onClick={() => setSelectedReview(null)}
                className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600"
              >
                Close
              </button>

              {selectedReview.status ===
                "Under Review" && (
                <button
                  onClick={() =>
                    approveReview(selectedReview.id)
                  }
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white"
                >
                  <ShieldCheck size={17} />
                  Approve Review
                </button>
              )}

              <button
                onClick={() =>
                  deleteReview(selectedReview.id)
                }
                className="flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white"
              >
                <Trash2 size={17} />
                Delete Review
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

const InfoBox = ({
  icon: Icon,
  title,
  value,
}) => (
  <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
    <div className="flex items-start gap-3">
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

export default AdminReviews;