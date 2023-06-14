import { useEffect, useRef } from "react";
import arrow from "../../assets/icons/right-arrow.png";
import { Link } from "react-router-dom";

const AllCategoriesModal = ({ allCategories, close }) => {
  let modalRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!modalRef.current.contains(e.target)) {
        close(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="h-screen w-full fixed top-0 left-0 right-0 z-40 flex items-center justify-center bg-modal bg-opacity-80 bg-gray-900">
      <div
        ref={modalRef}
        className="h-full w-full md:h-[600px] md:w-[800px] mx-auto bg-white shadow border border-blue-600 zoom-in"
      >
        <div className="min-h-[300px] max-h-full overflow-y-auto">
          <div className="bg-primary h-12 w-full flex justify-center items-center text-white">
            <h1 className="font-bold">Browse Categories</h1>
          </div>
          {allCategories &&
            allCategories?.map((category) => (
              <Link
                to={`/product-list/${category?.slug}`}
                className="group relative w-full"
              >
                <div className=" hover:bg-gray-300 border-b border-x h-12 w-full flex justify-between items-center px-3 text-gray-900">
                  <h1 className="font-semibold">{category?.parent}</h1>
                  <img className="w-2" src={arrow} alt="" />
                </div>

                <div className="hidden group-focus:block group-hover:block z-50 absolute right-10 bg-white w-72 border-t-8 border-t-primary border-b border-x shadow max-h-72 overflow-y-auto">
                  {category?.children?.map((subCTG) => (
                    <Link
                      to={`/product-list/${category?.slug}/${subCTG
                        ?.toLowerCase()
                        .replaceAll(" ", "-")}`}
                      className="hover:bg-gray-300 border-b border-x h-12 w-full flex items-center px-3 text-gray-900"
                    >
                      <h1 className="font-semibold">{subCTG}</h1>
                    </Link>
                  ))}
                </div>
              </Link>
            ))}
        </div>
        <button
          onClick={() => close(false)}
          className="bg-primary hover:bg-darkPrimary duration-300 h-12 w-full flex justify-center items-center text-white"
        >
          <h1 className="font-bold">Close</h1>
        </button>
      </div>
    </div>
  );
};

export default AllCategoriesModal;
