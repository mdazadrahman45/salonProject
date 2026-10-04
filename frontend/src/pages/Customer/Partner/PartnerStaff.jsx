import React, { useState } from "react";
import {
  Plus,
  Star,
  Trash2,
} from "lucide-react";

const PartnerStaff = () => {
  const [staff, setStaff] =
    useState([
      {
        id: 1,
        name: "Aman Sharma",
        role: "Senior Hair Stylist",
        rating: "4.9",
      },
      {
        id: 2,
        name: "Rahul Verma",
        role: "Barber",
        rating: "4.8",
      },
    ]);

  const addStaff = () => {
    const name =
      window.prompt(
        "Staff name?"
      );

    if (!name) return;

    setStaff((current) => [
      ...current,
      {
        id: Date.now(),
        name,
        role: "Stylist",
        rating: "New",
      },
    ]);
  };

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-[25px] font-bold">
            Staff & Barbers
          </h1>

          <p className="mt-1 text-[10px] text-gray-400">
            Manage your team.
          </p>
        </div>

        <button
          onClick={addStaff}
          className="flex items-center gap-2 rounded-xl bg-[#ff3d73] px-5 text-[10px] font-semibold text-white"
        >
          <Plus size={15} />
          Add Staff
        </button>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
        {staff.map((person) => (
          <div
            key={person.id}
            className="rounded-[18px] border border-gray-100 bg-white p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff3d73] text-[15px] font-bold text-white">
              {person.name.charAt(0)}
            </div>

            <h3 className="mt-4 text-[13px] font-bold">
              {person.name}
            </h3>

            <p className="mt-1 text-[9px] text-gray-400">
              {person.role}
            </p>

            <p className="mt-3 flex items-center gap-1 text-[10px]">
              <Star
                size={12}
                fill="#ffb020"
                className="text-[#ffb020]"
              />
              {person.rating}
            </p>

            <button
              onClick={() =>
                setStaff((current) =>
                  current.filter(
                    (x) =>
                      x.id !==
                      person.id
                  )
                )
              }
              className="mt-4 flex items-center gap-2 text-[9px] text-red-500"
            >
              <Trash2 size={13} />
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerStaff;