import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "8252c10dabac460daa306e9bcc4a1c4c";

export default function Search({ setfooddata, data }) {
  const [query, setquery] = useState("pizza");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setfooddata(data.results);
    }
    fetchData();
  }, [query]);

  return (
    <div>
      <input
        className="p-2 rounded-[1rem] border-[0.5rem] border-[#000] w-full"
        type="text"
        value={query}
        onChange={(e) => setquery(e.target.value)}
      />
    </div>
  );
}
