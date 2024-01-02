import { useFetchProducts } from "../hooks/useFetchProducts";
import ErrorFallback from "../ui/ErrorFallback";
import Ratings from "../ui/Ratings";
import SkeletonLoading from "../ui/SkeletonLoading";
import Pagination from "../ui/Pagination";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZES } from "../utils/PageSize";

function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("search") || "";
    setSearchQuery(query);
  }, [searchParams]);

  const { products, totalResult, error, isLoading, refetch } =
    useFetchProducts(searchQuery);

  console.log(products);
  console.log(totalResult);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(price);
  };

  const handleSearchQuerySubmission = () => {
    setSearchParams({
      search: searchQuery,
      page: searchParams.get("page") || "1",
      pageSize: searchParams.get("pageSize") || PAGE_SIZES[0].toString(),
    });
  };

  if (isLoading) {
    return (
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto min-h-screen flex items-center flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index}>
              <SkeletonLoading />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error || products.length === 0) {
    return <ErrorFallback errorMessage={error?.message || "No Data Found"} />;
  }

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto min-h-screen flex items-center flex-col justify-center">
      <div className="flex items-center justify-center w-full">
        {/* SEARCH */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="py-3 px-4 mb-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
          placeholder="Enter the product name"
        />
        <button
          type="button"
          onClick={() => {
            refetch();
            handleSearchQuerySubmission();
          }}
          className="px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:bg-blue-100 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:bg-blue-800/30 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700"
          >
            <div className="p-4 md:p-6 dark:text-white">
              {product.name}
              <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
                <em>
                  " I'm absolutely floored by the level of care and attention to
                  detail the team at HS have put into this theme and for one can
                  guarantee that I will be a return customer. "
                </em>
              </p>
            </div>
            <div className="p-4 rounded-b-xl md:px-6">
              <h3 className=">=445px:flex >=445px:justify-center text-sm font-semibold text-gray-800 sm:text-base dark:text-gray-200">
                {formatPrice(product.price)}
              </h3>
              <div className="dark:text-slate-500 italic text-sx mt-1 >=445px:text-center">
                {product.company} company
              </div>
              <div className="flex text-sm items-center text-gray-500 mt-1 >=445px:justify-center">
                <Ratings ratings={product.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination totalResult={totalResult} />
    </div>
  );
}

export default Products;
