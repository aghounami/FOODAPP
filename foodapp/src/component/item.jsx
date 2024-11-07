export default function Item({ item, setid }) {
  return (
    <div className="bg-white rounded-[1rem] shadow-[0_0_20px_0_rgba(255,255,255,0.4)]">
      <div>
        <img
          src={item.image}
          alt={item.name}
          className="w-[30rem] object-cover rounded-t-[1rem]"
        />
      </div>
      <button
        className="border-[0.2rem] border-[#11d3ff] 
        rounded-3xl p-2 m-2 text-[1.5rem] font-bold bg-[#19b9ea]"
        onClick={() => setid(item.id)}
      >
        view details
      </button>
    </div>
  );
}
