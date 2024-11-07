export default function Item({ item }) {
  return (
    <div className="bg-white rounded-[1rem]">
      <div>
        <img
          src={item.image}
          alt={item.name}
          className="w-full object-cover rounded-t-[1rem]"
        />
      </div>
      <div className="p-4">
        <h1 className="text-xl font-bold">{item.name}</h1>
        <p className="text-sm text-gray-500"> caloriesPerServing : {item.caloriesPerServing}</p>
        <p className="text-sm text-gray-500"> cuisine : {item.cuisine}</p>
        <p className="text-sm text-gray-500"> difficulty : {item.difficulty}</p>
      </div>
    </div>
  );
}
