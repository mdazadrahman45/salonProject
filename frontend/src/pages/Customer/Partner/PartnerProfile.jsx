import React, { useState } from "react";
import {
  Save,
  Store,
} from "lucide-react";

const PartnerProfile = () => {
  const stored =
    JSON.parse(
      localStorage.getItem(
        "salonwalaPartnerAccount"
      ) || "{}"
    );

  const [form, setForm] =
    useState(stored);

  const save = () => {
    localStorage.setItem(
      "salonwalaPartnerAccount",
      JSON.stringify(form)
    );

    localStorage.setItem(
      "partnerUser",
      JSON.stringify({
        ownerName:
          form.ownerName,
        businessName:
          form.businessName,
        email: form.email,
        mobile: form.mobile,
        partnerType:
          form.partnerType,
      })
    );

    alert(
      "Salon profile updated."
    );
  };

  return (
    <div className="mx-auto max-w-[1000px]">
      <h1 className="text-[25px] font-bold">
        Salon Profile
      </h1>

      <p className="mt-1 text-[10px] text-gray-400">
        Manage your public business information.
      </p>

      <div className="mt-5 rounded-[20px] border border-gray-100 bg-white p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff0f4] text-[#ff3d73]">
          <Store size={21} />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            [
              "Owner Name",
              "ownerName",
            ],
            [
              "Business Name",
              "businessName",
            ],
            [
              "Email",
              "email",
            ],
            [
              "Mobile",
              "mobile",
            ],
            [
              "Address",
              "address",
            ],
            ["City", "city"],
            ["State", "state"],
            [
              "Pincode",
              "pincode",
            ],
          ].map(
            ([label, name]) => (
              <div key={name}>
                <label className="text-[10px] font-semibold text-gray-600">
                  {label}
                </label>

                <input
                  value={
                    form[name] || ""
                  }
                  onChange={(e) =>
                    setForm({
                      ...form,
                      [name]:
                        e.target
                          .value,
                    })
                  }
                  className="mt-2 h-11 w-full rounded-xl border border-gray-200 px-3 text-[10px] outline-none focus:border-pink-300"
                />
              </div>
            )
          )}
        </div>

        <button
          onClick={save}
          className="mt-6 flex items-center gap-2 rounded-xl bg-[#ff3d73] px-5 py-3 text-[10px] font-semibold text-white"
        >
          <Save size={14} />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default PartnerProfile;