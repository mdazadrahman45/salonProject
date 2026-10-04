import React from "react";

import {
  Bell,
  ChevronDown,
  Store,
} from "lucide-react";

const PartnerTopbar = () => {
  let partner = {};

  try {
    partner =
      JSON.parse(
        localStorage.getItem(
          "partnerUser"
        )
      ) || {};
  } catch {
    partner = {};
  }

  const name =
    partner?.ownerName ||
    "Partner";

  const businessName =
    partner?.businessName ||
    "My Salon";

  const firstLetter =
    name
      .trim()
      .charAt(0)
      .toUpperCase() || "P";

  const role =
    partner?.partnerType ===
    "INDEPENDENT_BARBER"
      ? "Independent Barber"
      : "Salon Owner";

  return (
    <header
      className="
        fixed
        left-[250px]
        right-0
        top-0
        z-40
        flex
        h-[76px]
        items-center
        justify-between
        border-b
        border-gray-100
        bg-white
        px-7
      "
    >
      {/* LEFT */}

      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-xl
            bg-[#fff0f4]
            text-[#ff3d73]
          "
        >
          <Store size={17} />
        </div>

        <div>
          <p className="text-[8px] uppercase tracking-[1px] text-gray-400">
            Managing
          </p>

          <h2 className="mt-0.5 text-[12px] font-bold text-gray-800">
            {businessName}
          </h2>
        </div>
      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-3">
        {/* NOTIFICATION */}

        <button
          type="button"
          className="
            relative
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            text-gray-600
            transition
            hover:bg-[#fff0f4]
            hover:text-[#ff3d73]
          "
        >
          <Bell size={19} />

          <span
            className="
              absolute
              right-[8px]
              top-[7px]
              h-2
              w-2
              rounded-full
              border-2
              border-white
              bg-[#ff3d73]
            "
          />
        </button>

        <div className="h-8 w-px bg-gray-200" />

        {/* USER */}

        <button
          type="button"
          className="
            flex
            items-center
            gap-3
            rounded-xl
            px-2
            py-1.5
            transition
            hover:bg-gray-50
          "
        >
          {/* FIRST LETTER - NO IMAGE */}

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-[#ff3d73]
              text-[14px]
              font-bold
              text-white
            "
          >
            {firstLetter}
          </div>

          <div className="text-left">
            <p className="max-w-[140px] truncate text-[11px] font-semibold text-gray-800">
              {name}
            </p>

            <p className="mt-0.5 text-[8px] text-gray-400">
              {role}
            </p>
          </div>

          <ChevronDown
            size={14}
            className="text-gray-400"
          />
        </button>
      </div>
    </header>
  );
};

export default PartnerTopbar;