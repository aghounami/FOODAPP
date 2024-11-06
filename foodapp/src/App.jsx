import { useState } from "react";
import Search from "./component/search.jsx";
function App() {
  const [data, setfooddata] = useState("");

  return (
    <div className="m-6 ">
      <Search setfooddata={setfooddata} data={data} />
      <div className="grid grid-cols-3 gap-4">
        {data &&
          data.map((item) => (
            <div key={item.id} className="">
              <h1>{item.title}</h1>
              <img src={item.image} alt={item.title} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
