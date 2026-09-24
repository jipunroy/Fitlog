import Image from "next/image";
import Link from "next/link";

export default function Brand() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2"
      aria-label="FitLog home"
    >
      <Image
        src="/images/navbar/logo.png"
        alt="FitLog logo"
        width={30}
        height={30}
        priority
      />

      <span className="text-lg font-extrabold tracking-tight text-white">
        FITLOG
      </span>
    </Link>
  );
}