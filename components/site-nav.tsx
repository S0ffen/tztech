import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Start" },
  { href: "/o-nas", label: "O nas" },
  { href: "/realizacje", label: "Realizacje" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-main flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo-tztech.png" alt="TZTech" width={148} height={65} className="h-9 w-auto" />
          <span className="text-sm font-semibold tracking-wide text-slate-700">TZTECH</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-slate-700">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}