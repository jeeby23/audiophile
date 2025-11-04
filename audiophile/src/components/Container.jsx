export default function Container({ children, className = "" }) {
  return (
    <div
      className={`max-w-[1440px]  mx-auto px-6  sm:px-10 lg:px-[121px]   ${className}`}
    >
      {children}
    </div>
  );
}