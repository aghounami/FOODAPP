export default function Container({ children }) {
  return (
    <div className="relative flex gap-5">
      {children}
    </div>
  );
}
