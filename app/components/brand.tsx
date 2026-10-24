
import Image from "next/image";

type BrandProps = {
  light?: boolean;
  className?: string;
};

export default function Brand({
  light = false,
  className = "",
}: BrandProps) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center ${className}`}
      aria-label="Noor Technologies"
    >
      <Image
        src="/Noor Technologies Signature.png"
        alt="Noor Technologies"
        width={410}
        height={137}
        priority
        className={`h-auto w-[150px] object-contain sm:w-[175px] lg:w-[200px] ${
          light ? "brightness-0 invert" : ""
        }`}
        sizes="(max-width: 640px) 150px, (max-width: 1024px) 175px, 200px"
      />
    </span>
  );
}
