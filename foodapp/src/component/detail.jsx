import { useEffect, useState } from "react";

export default function Fooddetail({ id }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://dummyjson.com/recipes/${id}`);
      const result = await res.json();
      setData(result);
    }
    fetchData();
  }, [id]);

  return (
    <div
      className="bg-white rounded-3xl flex flex-col
        fixed right-[5%] w-[40%] h-[70rem]"
    >
      <div className="bg-[blue] text-center rounded-t-3xl">
        <h1 className="text-[2rem] font-black  text-[#ffffffc3]">
          FOOD DETAILS
        </h1>
      </div>
      <div className="flex flex-col gap-20 ">
        {data && id ? (
          <div className="flex flex-col gap-2 p-4">
            <h2 className="text-[2rem] font-extrabold text-center">{data.name}</h2>
            <img className="rounded-[2rem]" src={data.image} alt={data.name} />
            <p className="font-bold">caloriesPerServing : {data.caloriesPerServing}</p>
            <p className="font-bold">cookTimeMinutes : {data.cookTimeMinutes}</p>
            <p className="font-bold">cuisine : {data.cuisine}</p>
            <p className="font-bold">cuisine : {data.cuisine}</p>
            <p className="font-bold">prepTimeMinutes : {data.prepTimeMinutes}</p>
            <p className="font-bold">rating : {data.rating}</p>
            <p className="font-bold">reviewCount : {data.reviewCount}</p>
            <p className="font-bold">servings : {data.servings}</p>
          </div>
        ) : (
          <p className="absolute text-center text-[2rem] left-[40%] top-[40%] font-bold">Loading...</p>
        )}
      </div>
    </div>
  );
}
