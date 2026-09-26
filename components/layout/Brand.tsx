import Image from "next/image";
import Link from "next/link";

export default function Brand() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-2"
      aria-label="FitLog home"
    >
      <Image
        src="/images/navbar/logo.png"
        alt="FitLog"
        width={28}
        height={28}
        priority
      />

      <span className="text-base font-black tracking-tight text-white sm:text-lg">
        FITLOG
      </span>
    </Link>
  );
}