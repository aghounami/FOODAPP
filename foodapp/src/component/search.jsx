import { useEffect, useState } from "react";

export default function Search({ setfooddata, data }) {
  const [query, setquery] = useState("pizza");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
      const data = await res.json();
      console.log(data.recipes);
      setfooddata(data.recipes);
    }
    fetchData();
  }, [query]);

  return (
    <div>
      <input
        className="p-2 rounded-[1rem] border-[0.5rem] w-[20rem] border-[#000]"
        type="text"
        value={query}
        onChange={(e) => setquery(e.target.value)}
      />
    </div>
  );
}
