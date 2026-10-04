import React, { useState } from "react";
import {
  Pencil,
  Plus,
  Scissors,
  Trash2,
} from "lucide-react";

const PartnerServices = () => {
  const [services, setServices] =
    useState([
      {
        id: 1,
        name: "Men Haircut",
        duration: 30,
        price: 199,
      },
      {
        id: 2,
        name: "Beard Styling",
        duration: 20,
        price: 149,
      },
      {
        id: 3,
        name: "Facial",
        duration: 45,
        price: 499,
      },
    ]);

  const addService = () => {
    const name =
      window.prompt(
        "Service name?"
      );

    if (!name) return;

    const price =
      window.prompt("Price?");

    if (!price) return;

    setServices((current) => [
      ...current,
      {
        id: Date.now(),
        name,
        price:
          Number(price) || 0,
        duration: 30,
      },
    ]);
  };

  const removeService = (id) => {
    if (
      !window.confirm(
        "Delete this service?"
      )
    )
      return;

    setServices((current) =>
      current.filter(
        (service) =>
          service.id !== id
      )
    );
  };

  return (
    <div className="mx-auto max-w-[1400px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[25px] font-bold">
            Services
          </h1>

          <p className="mt-1 text-[10px] text-gray-400">
            Manage prices and services.
          </p>
        </div>

        <button
          onClick={addService}
          className="flex items-center gap-2 rounded-xl bg-[#ff3d73] px-5 py-3 text-[10px] font-semibold text-white"
        >
          <Plus size={15} />
          Add Service
        </button>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-[18px] border border-gray-100 bg-white p-5 shadow-sm"
          >
            <div className="flex justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0f4] text-[#ff3d73]">
                <Scissors size={18} />
              </div>

              <div className="flex gap-1">
                <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 text-gray-500">
                  <Pencil size={13} />
                </button>

                <button
                  onClick={() =>
                    removeService(
                      service.id
                    )
                  }
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-500"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </div>

            <h3 className="mt-4 text-[13px] font-bold">
              {service.name}
            </h3>

            <p className="mt-2 text-[9px] text-gray-400">
              {service.duration} minutes
            </p>

            <p className="mt-4 text-[20px] font-bold text-[#ff3d73]">
              ₹{service.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerServices;