import Link from "next/link";
import Image from "next/image";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import realizationsData from "@/data/realizations.json";

type Realization = {
  id: string;
  order: number;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  image: string;
  link: string;
};

const realizations = [...(realizationsData as Realization[])].sort((a, b) => a.order - b.order);

export default function Home() {
  return (
    <div>
      <SiteNav />
      <main>
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.3),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.28),_transparent_50%)]" />
          <div className="container-main relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-white/25 px-4 py-1 text-xs uppercase tracking-[0.2em]">Inzynieria instalacji</p>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Systemy grzewcze, pompy ciepla i uzdatnianie wody</h1>
              <p className="mt-5 max-w-xl text-slate-200">Kopia strony TZTech z odtworzonymi podstronami i realizacjami. Sekcja realizacji jest edytowalna z pliku JSON.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/realizacje" className="rounded-md bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300">Zobacz realizacje</Link>
                <Link href="/kontakt" className="rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Kontakt</Link>
              </div>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
              <p className="text-sm text-slate-200">Zakres uslug</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-100">
                <li>Pompy ciepla</li>
                <li>Plaszczyznowe systemy grzewcze</li>
                <li>Uzdatnianie wody</li>
                <li>Instalacje technologiczne</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="container-main py-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold">Wybrane realizacje</h2>
            <Link href="/realizacje" className="text-sm font-semibold text-cyan-700 hover:text-cyan-900">Wszystkie realizacje</Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {realizations.slice(0, 6).map((item) => (
              <article key={item.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <Image src={item.image} alt={item.title} width={768} height={420} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">{item.category}</p>
                  <h3 className="mt-2 text-lg font-semibold leading-tight">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{item.date}</p>
                  <p className="mt-3 text-sm text-slate-700">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}