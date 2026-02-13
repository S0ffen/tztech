import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Start" },
  { href: "/o-nas", label: "O nas" },
  { href: "/uslugi", label: "Uslugi" },
  { href: "/realizacje", label: "Realizacje" },
  { href: "/kontakt", label: "Kontakt" },
];

const serviceLinks = [
  { href: "/uslugi/pompy-ciepla", label: "Pompy ciepla" },
  { href: "/uslugi/plaszczyznowe-systemy-grzewcze", label: "Plaszczyznowe systemy grzewcze" },
  { href: "/uslugi/uzdatnianie-wody", label: "Uzdatnianie wody" },
  { href: "/uslugi/instalacje-technologiczne", label: "Instalacje technologiczne" },
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
          {links.map((item) =>
            item.href === "/uslugi" ? (
              <div key={item.href} className="group relative">
                <Link href={item.href} className="inline-flex items-center gap-1 transition hover:text-slate-950">
                  {item.label}
                  <span className="text-xs">▼</span>
                </Link>
                <div className="invisible absolute left-0 top-full z-30 mt-3 w-72 rounded-sm border border-slate-200 bg-white p-3 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="space-y-1">
                    {serviceLinks.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className="block rounded px-3 py-2 text-[15px] text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="transition hover:text-slate-950">
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
