import React, { useEffect, useState } from "react";
import arrow from "../../../assets/icons/right-arrow.png";
import AllCategoriesModal from "../../Modals/AllCategoriesModal";

// import { categories } from "../../../utils/categories";
import { Link } from "react-router-dom";

const Categories = () => {
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/category/show`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div className="lg:col-span-1 cursor-pointer relative">
      <div>
        <div className="bg-primary h-12 w-full flex justify-center items-center text-white">
          <h1 className="font-bold">Browse Categories</h1>
        </div>
        {categories &&
          categories?.slice(0, 7).map((category) => (
            <button key={category._id} className="group w-full relative">
              <Link
                to={`/product-list/${category?.slug}`}
                className=" hover:bg-gray-300 border-b border-x h-12 w-full flex justify-between items-center px-3 text-gray-900"
              >
                <h1 className="font-semibold">{category?.parent}</h1>
                <img className="w-2" src={arrow} alt="" />
              </Link>

              <div className="hidden group-focus:block group-hover:block z-50 absolute -right-10 bg-white w-full border-t-8 border-t-primary border-b border-x max-h-72 overflow-y-auto">
                {category?.children?.map((subCTG, i) => (
                  <Link
                    key={i}
                    to={`/product-list/${category?.slug}/${subCTG
                      ?.toLowerCase()
                      .replaceAll(" ", "-")}`}
                    className="hover:bg-gray-300 border-b border-x h-12 w-full flex items-center px-3 text-gray-900"
                  >
                    <h1 className="font-semibold">{subCTG}</h1>
                  </Link>
                ))}
              </div>
            </button>
          ))}

        <div
          onClick={() => setOpenCategoryModal(true)}
          className="bg-primary hover:bg-darkPrimary duration-300 h-12 w-full flex justify-center items-center text-white"
        >
          <h1 className="font-bold">View all categories</h1>
        </div>

        {openCategoryModal && (
          <AllCategoriesModal
            allCategories={categories}
            isOpen={openCategoryModal}
            close={setOpenCategoryModal}
          />
        )}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:5055/api/category`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

export default Categories;
