import Image from "next/image";

export function Logo({
  src = "/logo.png",
  className = "h-8",
  mono = false,
}: {
  src?: string;
  className?: string;
  mono?: boolean; // true = force white, for dark logos on the dark theme
}) {
  return (
    <Image
      src={src}
      alt="Rounak Computers LLC"
      width={180}
      height={48}
      priority
      className={`w-auto ${className} ${mono ? "brightness-0 invert" : ""}`}
    />
  );
}