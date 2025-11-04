export default function Hero({ children, className = "" }) {
  return (
    <div
      className={`max-w-[1440px] h-auto    ${className}`}
    >
      {children}
    </div>
  );
}