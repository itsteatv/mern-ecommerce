type CompanyFilterDropdownProps = {
  options: string[];
  selectedCompany: string;
  onSelectCompany: (selectedValue: string) => void;
};

function CompanyFilterDropdown({
  options,
  selectedCompany,
  onSelectCompany,
}: CompanyFilterDropdownProps) {
  return (
    <div className="dropdown">
      <select
        className="mt-2 z-50 w-full max-h-[300px] p-1 space-y-0.5 border-gray-200 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 rounded-lg overflow-hidden overflow-y-auto"
        id="companyFilter"
        value={selectedCompany}
        onChange={(e) => onSelectCompany(e.target.value)}
      >
        <option value="">All Companies</option>
        {options.map((company) => (
          <option key={company} value={company}>
            {company}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CompanyFilterDropdown;
