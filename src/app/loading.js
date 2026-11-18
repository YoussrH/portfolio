export default function Loading() {
  return (
    <div className="min-h-screen bg-[#030014] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-12 h-12 rounded-full border-2 border-accent/20 border-t-accent animate-spin"
        />
        <p className="font-dm text-foreground/40 text-xs tracking-widest uppercase animate-pulse">
          Loading…
        </p>
      </div>
    </div>
  );
}
