import { useState } from "react";
import Search from "./component/search.jsx";
import Item from "./component/item.jsx";
import Nav from "./component/nav.jsx";

function App() {
  const [data, setfooddata] = useState([]); // Initialize data as an empty array

  return (
    <div className="relative w-full h-[100vh] bg-black flex flex-col items-center">
      <Nav key={10} />
      <Search key={15} setfooddata={setfooddata} data={data} />
      <div className="grid grid-cols-3 gap-4">
        {data && data.map((item) => <Item key={item.id} item={item} />)}
      </div>
    </div>
  );
}

export default App;
