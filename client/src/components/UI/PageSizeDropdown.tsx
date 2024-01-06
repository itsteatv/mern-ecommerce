import React from "react";

import { PAGE_SIZES } from "../utils/PageSize";

type PageSizeDropdownProps = {
  value: number;
  onChange: (value: number) => void;
};

function PageSizeDropdown({ value, onChange }: PageSizeDropdownProps) {
  return (
    <div className="flex items-center my-1">
      <label htmlFor="pageSize" className="italic text-gray-500 mr-2 text-sm">
        Page Size:
      </label>
      <select
        id="pageSize"
        className="border p-1 rounded-lg"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {PAGE_SIZES.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PageSizeDropdown;
