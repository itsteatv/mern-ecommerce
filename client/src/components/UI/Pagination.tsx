import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/PageSize";

type PaginationProps = {
  totalResult: number;
};

function Pagination({ totalResult }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
  };

  const pageSize = PAGE_SIZE;
  const totalPages = Math.ceil(totalResult / pageSize);

  const startResult = (currentPage - 1) * pageSize + 1;
  const endResult = Math.min(currentPage * pageSize, totalResult);

  console.log(currentPage);

  return (
    <>
      <nav className="flex items-center gap-x-1 mt-10">
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg
            className="flex-shrink-0 w-3.5 h-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span>Previous</span>
        </button>
        <div className="flex items-center gap-x-1">
          {/* Render page buttons dynamically */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              type="button"
              className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${
                index + 1 === currentPage
                  ? "bg-gray-200 text-gray-800"
                  : "text-gray-800 hover:bg-gray-100"
              } py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10`}
              onClick={() => handlePageChange(index + 1)}
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <span>Next</span>
          <svg
            className="flex-shrink-0 w-3.5 h-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </nav>

      <p className="italic text-gray-500 text-sm mt-2">
        Showing <span className="dark:text-white text-gray-800 font-bold">{startResult}</span> to{" "}
        <span className="dark:text-white text-gray-800 font-bold">{endResult}</span> of{" "}
        <span className="dark:text-white text-gray-800 font-bold">{totalResult}</span> results
      </p>
    </>
  );
}

export default Pagination;
