import { useFetchProducts } from "../hooks/useFetchProducts";
import ErrorFallback from "../ui/ErrorFallback";
import Ratings from "../ui/Ratings";
import SkeletonLoading from "../ui/SkeletonLoading";
function Products() {
  const { error, isLoading, products } = useFetchProducts();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(price);
  };

  if (isLoading) {
    return (
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto min-h-screen flex items-center flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {products.map((product) => (
            <div key={product._id}>
              <SkeletonLoading />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error || products.length === 0) {
    return <ErrorFallback errorMessage={error?.message} />;
  }

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto min-h-screen flex items-center flex-col justify-center">
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
    </div>
  );
}

export default Products;
