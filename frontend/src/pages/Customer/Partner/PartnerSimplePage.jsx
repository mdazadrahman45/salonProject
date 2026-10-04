import React from "react";

const PartnerSimplePage = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="mx-auto max-w-[1400px]">
      <h1 className="text-[25px] font-bold text-gray-900">
        {title}
      </h1>

      <p className="mt-1 text-[10px] text-gray-400">
        {description}
      </p>

      <div className="mt-5 rounded-[20px] border border-gray-100 bg-white p-6 shadow-sm">
        {children || (
          <p className="text-[11px] text-gray-500">
            {title} data will appear here.
          </p>
        )}
      </div>
    </div>
  );
};

export default PartnerSimplePage;