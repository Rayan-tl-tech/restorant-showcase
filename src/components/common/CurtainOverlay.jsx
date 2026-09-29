export default function CurtainOverlay({ isTransitioning }) {
  if (!isTransitioning) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-40 flex items-center justify-center bg-[#131413] pointer-events-none select-none curtain-wipe"
    >
      <div className="flex flex-col items-center justify-center gap-3.5 emblem-motion">
        <span
          className="text-3xl md:text-4xl font-light text-[#f4f1ea] tracking-[0.25em] font-serif"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          ME
        </span>
        <div className="w-[1.5px] h-7 bg-[#a85a3a]" />
      </div>
    </div>
  );
}
