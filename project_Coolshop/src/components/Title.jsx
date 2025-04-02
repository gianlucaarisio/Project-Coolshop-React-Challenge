export default function Title({ className, children }) {
  return (
    <h1 className={`mt-10 text-4xl md:text-5xl font-semibold ${className}`}>
      {children}
    </h1>
  );
}
