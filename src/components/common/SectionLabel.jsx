export default function SectionLabel({ children, className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="block w-10 h-px bg-current shrink-0" />
      <span
        className="text-[11px] font-medium uppercase font-sans tracking-[0.25em]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {children}
      </span>
    </div>
  );
}
