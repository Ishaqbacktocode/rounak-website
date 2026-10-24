import Image from "next/image";

export function Logo({
  src = "/logo.png",
  darkSrc = "/logo-white.png",
  className = "h-8",
  mono = false,
}: {
  src?: string;
  darkSrc?: string;
  className?: string;
  mono?: boolean; // true = force white, for dark logos on the dark theme
}) {
  if (mono) {
    return (
      <Image
        src={src}
        alt="Rounak Computers LLC"
        width={180}
        height={48}
        priority
        className={`w-auto brightness-0 invert ${className}`}
      />
    );
  }

  return (
    <>
      <Image
        src={src}
        alt="Rounak Computers LLC"
        width={180}
        height={48}
        priority
        className={`w-auto dark:hidden ${className}`}
      />
      <Image
        src={darkSrc}
        alt="Rounak Computers LLC"
        width={768}
        height={188}
        className={`hidden w-auto dark:block ${className}`}
      />
    </>
  );
}