export default function Button({ className, onClick, children }) {
  return (
    <button
      className={`relative flex bg-blue-500 hover:bg-blue-400 hover:shadow-md shadow-blue-300 transition-all duration-200 p-2 rounded-lg font-semibold ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
