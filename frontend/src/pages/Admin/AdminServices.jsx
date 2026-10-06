import React, { useMemo, useState } from "react";
import {
  Scissors,
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  X,
  Store,
  IndianRupee,
  Clock3,
  ToggleLeft,
  ToggleRight,
  CheckCircle2,
  Ban,
} from "lucide-react";

const AdminServices = () => {
  const [search, setSearch] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const [services, setServices] = useState([
    {
      id: "SV001",
      name: "Haircut",
      category: "Hair",
      salon: "Looks Salon",
      price: 499,
      duration: "30 min",
      status: "Active",
    },
    {
      id: "SV002",
      name: "Beard Styling",
      category: "Grooming",
      salon: "The Barber Club",
      price: 299,
      duration: "20 min",
      status: "Active",
    },
    {
      id: "SV003",
      name: "Hair Spa",
      category: "Hair",
      salon: "Natura's Salon",
      price: 799,
      duration: "45 min",
      status: "Active",
    },
    {
      id: "SV004",
      name: "Facial",
      category: "Skin",
      salon: "Glam Hub",
      price: 999,
      duration: "60 min",
      status: "Inactive",
    },
    {
      id: "SV005",
      name: "Hair Colour",
      category: "Hair",
      salon: "Style Studio",
      price: 1499,
      duration: "90 min",
      status: "Active",
    },
    {
      id: "SV006",
      name: "Manicure",
      category: "Nails",
      salon: "Beauty Lounge",
      price: 699,
      duration: "40 min",
      status: "Active",
    },
  ]);

  const [newService, setNewService] = useState({
    name: "",
    category: "",
    salon: "",
    price: "",
    duration: "",
  });

  const filteredServices = useMemo(() => {
    const q = search.toLowerCase();

    return services.filter(
      (service) =>
        service.name.toLowerCase().includes(q) ||
        service.category.toLowerCase().includes(q) ||
        service.salon.toLowerCase().includes(q) ||
        service.id.toLowerCase().includes(q)
    );
  }, [services, search]);

  const activeCount = services.filter(
    (service) => service.status === "Active"
  ).length;

  const inactiveCount = services.filter(
    (service) => service.status === "Inactive"
  ).length;

  const toggleStatus = (id) => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === id
          ? {
              ...service,
              status:
                service.status === "Active"
                  ? "Inactive"
                  : "Active",
            }
          : service
      )
    );
  };

  const deleteService = (id) => {
    setServices((prev) =>
      prev.filter((service) => service.id !== id)
    );

    if (selectedService?.id === id) {
      setSelectedService(null);
    }
  };

  const addService = () => {
    if (
      !newService.name ||
      !newService.category ||
      !newService.salon ||
      !newService.price
    ) {
      return;
    }

    const service = {
      id: `SV${String(services.length + 1).padStart(3, "0")}`,
      name: newService.name,
      category: newService.category,
      salon: newService.salon,
      price: Number(newService.price),
      duration: newService.duration || "30 min",
      status: "Active",
    };

    setServices((prev) => [service, ...prev]);

    setNewService({
      name: "",
      category: "",
      salon: "",
      price: "",
      duration: "",
    });

    setShowAddModal(false);
  };

  const formatMoney = (amount) =>
    `₹${Number(amount).toLocaleString("en-IN")}`;

  return (
    <>
      <div className="space-y-6">
        {/* Heading */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-medium text-violet-600">
              Service Management
            </p>

            <h1 className="mt-1 text-2xl font-bold text-slate-900">
              Services
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage all salon services available on SalonWala.
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700"
          >
            <Plus size={18} />
            Add Service
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard
            title="Total Services"
            value={services.length}
            subtitle="All salon services"
            icon={Scissors}
            color="bg-violet-50 text-violet-600"
          />

          <StatCard
            title="Active Services"
            value={activeCount}
            subtitle="Visible to customers"
            icon={CheckCircle2}
            color="bg-emerald-50 text-emerald-600"
          />

          <StatCard
            title="Inactive Services"
            value={inactiveCount}
            subtitle="Hidden from customers"
            icon={Ban}
            color="bg-rose-50 text-rose-600"
          />
        </div>

        {/* Service Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Service List
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Services added by salons and platform admin.
              </p>
            </div>

            <div className="flex min-w-[320px] items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4">
              <Search size={18} className="text-slate-400" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search service, salon, category..."
                className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead>
                <tr className="bg-[#f8f7ff]">
                  <TableHead>ID</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Salon</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredServices.map((service) => (
                  <tr
                    key={service.id}
                    className="transition hover:bg-slate-50"
                  >
                    <td className="px-5 py-4 text-sm font-semibold text-violet-600">
                      #{service.id}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                          <Scissors size={18} />
                        </div>

                        <p className="text-sm font-semibold text-slate-900">
                          {service.name}
                        </p>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                        {service.category}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Store
                          size={15}
                          className="text-violet-500"
                        />
                        {service.salon}
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1 text-sm font-bold text-slate-800">
                        <IndianRupee size={14} />
                        {service.price}
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Clock3
                          size={15}
                          className="text-slate-400"
                        />
                        {service.duration}
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <button
                        onClick={() =>
                          toggleStatus(service.id)
                        }
                        className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${
                          service.status === "Active"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {service.status === "Active" ? (
                          <ToggleRight size={18} />
                        ) : (
                          <ToggleLeft size={18} />
                        )}

                        {service.status}
                      </button>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            setSelectedService(service)
                          }
                          title="View Service"
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"
                        >
                          <Eye size={17} />
                        </button>

                        <button
                          title="Edit Service"
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-600 hover:bg-amber-100"
                        >
                          <Pencil size={17} />
                        </button>

                        <button
                          onClick={() =>
                            deleteService(service.id)
                          }
                          title="Delete Service"
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredServices.length === 0 && (
                  <tr>
                    <td
                      colSpan="8"
                      className="px-5 py-16 text-center"
                    >
                      <Scissors
                        size={42}
                        className="mx-auto text-slate-300"
                      />

                      <h3 className="mt-3 font-semibold text-slate-700">
                        No services found
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

          <div className="flex items-center justify-between border-t border-slate-100 px-5 py-4">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <strong>{filteredServices.length}</strong>{" "}
              of <strong>{services.length}</strong>{" "}
              services
            </p>
          </div>
        </div>
      </div>

      {/* View Service Modal */}
      {selectedService && (
        <div
          onClick={() => setSelectedService(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[560px] overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-100 bg-[#f8f7ff] px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 text-white">
                  <Scissors size={22} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase text-violet-600">
                    Service Details
                  </p>

                  <h2 className="text-lg font-bold text-slate-900">
                    {selectedService.name}
                  </h2>
                </div>
              </div>

              <button
                onClick={() =>
                  setSelectedService(null)
                }
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <Info
                  title="Service ID"
                  value={`#${selectedService.id}`}
                />

                <Info
                  title="Category"
                  value={selectedService.category}
                />

                <Info
                  title="Salon"
                  value={selectedService.salon}
                />

                <Info
                  title="Price"
                  value={formatMoney(
                    selectedService.price
                  )}
                />

                <Info
                  title="Duration"
                  value={selectedService.duration}
                />

                <Info
                  title="Status"
                  value={selectedService.status}
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4">
              <button
                onClick={() =>
                  setSelectedService(null)
                }
                className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600"
              >
                Close
              </button>

              <button className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white">
                <Pencil size={16} />
                Edit Service
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Service Modal */}
      {showAddModal && (
        <div
          onClick={() => setShowAddModal(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[620px] overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-100 bg-[#f8f7ff] px-6 py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">
                  Add New
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  Add Service
                </h2>
              </div>

              <button
                onClick={() =>
                  setShowAddModal(false)
                }
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid gap-4 p-6 sm:grid-cols-2">
              <InputBox
                label="Service Name"
                value={newService.name}
                onChange={(value) =>
                  setNewService({
                    ...newService,
                    name: value,
                  })
                }
                placeholder="Haircut"
              />

              <InputBox
                label="Category"
                value={newService.category}
                onChange={(value) =>
                  setNewService({
                    ...newService,
                    category: value,
                  })
                }
                placeholder="Hair"
              />

              <InputBox
                label="Salon Name"
                value={newService.salon}
                onChange={(value) =>
                  setNewService({
                    ...newService,
                    salon: value,
                  })
                }
                placeholder="Looks Salon"
              />

              <InputBox
                label="Price"
                type="number"
                value={newService.price}
                onChange={(value) =>
                  setNewService({
                    ...newService,
                    price: value,
                  })
                }
                placeholder="499"
              />

              <InputBox
                label="Duration"
                value={newService.duration}
                onChange={(value) =>
                  setNewService({
                    ...newService,
                    duration: value,
                  })
                }
                placeholder="30 min"
              />
            </div>

            <div className="flex justify-end gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4">
              <button
                onClick={() =>
                  setShowAddModal(false)
                }
                className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600"
              >
                Cancel
              </button>

              <button
                onClick={addService}
                className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white"
              >
                <Plus size={17} />
                Add Service
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

const Info = ({ title, value }) => (
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

export default AdminServices;