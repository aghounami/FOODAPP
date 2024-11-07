import { useState } from "react";
import Search from "./component/search.jsx";
import Foodlist from "./component/list.jsx";
import Fooddetail from "./component/detail.jsx";
import Container from "./component/container.jsx";
import Nav from "./component/nav.jsx";

function App() {
  const [data, setfooddata] = useState([]);
  const [id, setid] = useState(0);

  return (
    <div className=" relative w-full bg-[#57696a] h-[100vh] flex flex-col overflow-scroll">
      <Nav key={10} />
      <Search key={15} setfooddata={setfooddata} data={data} />
      <Container key={25}>
        <Foodlist key={20} data={data} setid={setid} />
        <Fooddetail key={30} id={id} />
      </Container>
    </div>
  );
}

export default App;
