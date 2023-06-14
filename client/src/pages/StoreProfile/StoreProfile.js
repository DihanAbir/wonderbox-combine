import { Avatar, Button, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import StoreHome from "../../components/storeProfileComponents/StoreHome";
import TopRankingProducts from "../../components/storeProfileComponents/TopRankingProducts";
import StoreAbout from "../../components/storeProfileComponents/StoreAbout";
import StoerPopularProducts from "../../components/storeProfileComponents/StoerPopularProducts";
const tabs = [
  { id: "1", title: "", name: "Home" },
  { id: "2", title: "Popular Products", name: "Popular" },
  { id: "3", title: "Top Ranking Products", name: "Top Ranking" },
  { id: "4", title: "", name: "About" },
];

const StoreProfile = () => {
  const data = useLoaderData();
  const [selectedTab, setSelectedTab] = useState({
    id: "1",
    title: "",
    name: "Home",
  });

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/product/store/show-products/${data?._id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [data?._id]);

  return (
    <div className="max-w-primary px-4 mx-auto min-h-screen">
      <div className="relative">
        <img
          className="w-full h-36 md:h-72 object-fill"
          src="https://t3.ftcdn.net/jpg/02/62/18/46/360_F_262184611_bXhmboL9oE6k2ILu4qXxNWFhNJCEbTn2.jpg"
          alt=""
        />

        <div className="flex items-end gap-2 md:gap-6 absolute -bottom-12 md:-bottom-20 left-6 md:left-12 z-30">
          <Avatar
            className="w-20 h-20 md:w-32 md:h-32 bg-white border border-black"
            src={data?.logo}
          />
          <div className="md:mb-4">
            <Typography className="md:text-xl font-bold">
              {data?.name}
            </Typography>
            <Typography variant="small">
              https://www.wonderbox/{data?.username}
            </Typography>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-20 md:mt-32 overflow-x-auto border-b">
        {tabs.map((item) => (
          <Button
            key={item?.id}
            onClick={() => setSelectedTab(item)}
            className={`w-fit rounded-none shadow-none hover:shadow-none bg-transparent h-10 md:h-12 duration-300 px-2 md:px-6
                        ${
                          selectedTab?.id === item?.id
                            ? "border-b border-primary text-primary"
                            : "text-black"
                        }`}
          >
            {item.name}
          </Button>
        ))}
      </div>

      <div className="mt-6">
        <Typography className="h2">{selectedTab?.title}</Typography>
        <div className="mt-6">
          {selectedTab?.id === "1" && <StoreHome products={products} />}
          {selectedTab?.id === "2" && (
            <StoerPopularProducts storeId={data?._id} />
          )}
          {selectedTab?.id === "3" && (
            <TopRankingProducts storeId={data?._id} />
          )}
          {selectedTab?.id === "4" && <StoreAbout store={data} />}
        </div>
      </div>
    </div>
  );
};

export default StoreProfile;
