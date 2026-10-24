type SectionLabelProps = {
  children: React.ReactNode;
  light?: boolean;
};

export default function SectionLabel({
  children,
  light = false,
}: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${
        light ? "text-white/80" : "text-[#079E9A]"
      }`}
    >
      <span className="h-2 w-2 rounded-full bg-[#FF765D]" />
      {children}
    </span>
  );
}