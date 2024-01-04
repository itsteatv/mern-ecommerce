type SearchInputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function SearchInput({ type, placeholder, value, onChange }: SearchInputProps) {
  return (
    <input
      type={type}
      value={value}
      className="py-3 px-5 mb-4 block w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default SearchInput;
