export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/8 blur-[140px]" />
      <div className="absolute top-[35%] -left-32 h-[280px] w-[280px] rounded-full bg-accent-2/10 blur-[130px]" />
      <div className="absolute bottom-[12%] right-[-80px] h-[320px] w-[320px] rounded-full bg-accent/6 blur-[150px]" />
      <div className="noise-overlay" />
    </div>
  );
}
