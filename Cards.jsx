import React, { useCallback, useEffect, useState } from "react";

const Cards = ({ clicked, searchQuery }) => {
  const [foodData, setFoodData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleFetchData = useCallback(async () => {
    setIsLoading(true);
    setError(false);
    try {
      const response = await fetch("http://localhost:3000/foods");
      if (!response.ok) throw new Error();
      const data = await response.json();
      setFoodData(data);
      setFilteredData(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(true);
    }
  }, []);

  useEffect(() => {
    handleFetchData();
  }, [handleFetchData]);

  useEffect(() => {
    let temp = [...foodData];

    if (clicked !== 'All') {
      temp = temp.filter(item => item.type.toLowerCase() === clicked.toLowerCase());
    }

    if (searchQuery.trim() !== '') {
      temp = temp.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    setFilteredData(temp);
  }, [clicked, searchQuery, foodData]);

  if (isLoading) return <div className="text-center text-white mt-10">Loading...</div>;
  if (error) return <div className="text-center text-white mt-10">Failed to load data.</div>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      {filteredData.length === 0 ? (
        <div className="text-white text-center text-xl">Sorry, no recipe found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((item, index) => (
            <div
              key={item.id}
              className="flex p-4 rounded-xl shadow-lg border border-white/30 backdrop-blur-xl bg-white/10 hover:bg-white/20 transition-all duration-300 ease-in-out"
            >
              <div className="w-24 h-24 mr-4 shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-full border-2 border-white shadow-inner"
                />
              </div>

              <div className="flex flex-col justify-between w-full relative">
                <div>
                  <h1 className="text-white font-bold text-xl">{item.name}</h1>
                  <p className="text-white text-sm mt-1">{item.text}</p>
                </div>

                <span className="absolute bottom-0 right-0 bg-rose-500 text-white px-3 py-1 text-sm rounded-tl-lg shadow-md">
                  ${item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;