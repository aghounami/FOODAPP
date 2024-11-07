import Item from "./item.jsx";

export default function Foodlist({ data, setid}) {
  return (
    <div className="flex flex-col gap-5">
      {data && data.map((item) => <Item key={item.id} item={item} setid={setid} />)}
    </div>
  );
}


