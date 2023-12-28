import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <section className="min-h-screen flex items-center justify-center duration-300">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="flex flex-col w-full mb-12 text-center">
            <div className="inline-flex duration-300 items-center justify-center flex-shrink-0 w-20 h-20 mx-auto mb-5 text-emerald-500 rounded-full dark:bg-gray-800 bg-gray-50">
              <MdOutlineLocalGroceryStore size={35} />
            </div>
            <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter dark:text-white text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
              Best E-Commerce service <br className="hidden lg:block" />
              to turn your visitors into users
            </h1>
            <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-center dark:text-white text-gray-500">
              Mern e-commerce, built by, itsteatv & amirhosseinforouhar with
              ReactJs, TypeScript, NodeJs &amp; Tailwind CSS.
            </p>
            <div
              className="mx-auto mt-8 text-sm font-semibold cursor-pointer text-emerald-500 hover:text-emerald-600 duration-300"
              onClick={() => navigate("/products")}
            >
              See all products »
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Dashboard;
