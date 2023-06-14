import React, { useEffect, useState } from "react";
import StoreCard from "../../components/cards/StoreCards/StoreCard";

const Stores = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/store`)
      .then((res) => res.json())
      .then((data) => {
        setStores(data);
      });
  }, []);
  return (
    <div className="max-w-primary mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8">
        {stores &&
          stores?.map((store, i) => <StoreCard key={i} store={store} />)}
      </div>
    </div>
  );
};

export default Stores;
