import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import realizationsData from "@/data/realizations.json";

type Realization = {
  id: string;
  order: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  image: string;
  heroImage: string;
  link: string;
  contentParagraphs: string[];
  contentBullets: string[];
};

const realizations = [...(realizationsData as Realization[])].sort((a, b) => a.order - b.order);

export default function RealizacjePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="container-main flex-1 py-14">
        <h1 className="text-4xl font-semibold">Realizacje</h1>
        <p className="mt-3 text-slate-600">Lista realizacji jest edytowalna w pliku JSON (kolejnosc, data, tytul, tekst, link).</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {realizations.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <Image src={item.image} alt={item.title} width={768} height={420} className="h-52 w-full object-cover" />
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.15em] text-slate-500">{item.category}</p>
                <h2 className="mt-2 text-lg font-semibold leading-tight">{item.title}</h2>
                <p className="mt-2 text-sm text-slate-500">{item.date}</p>
                <p className="mt-3 text-sm leading-6 text-slate-700">{item.excerpt}</p>
                <Link href={item.link} className="mt-4 inline-flex text-sm font-semibold text-cyan-700 hover:text-cyan-900">
                  Czytaj wiecej
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
