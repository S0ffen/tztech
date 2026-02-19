import Link from "next/link";
import Image from "next/image";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import ServicesGrid from "@/components/services-grid";
import realizationsData from "@/data/realizations.json";
import homeContent from "@/data/home-content.json";

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

const realizations = [...(realizationsData as Realization[])].sort(
  (a, b) => a.order - b.order,
);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        <section className="container-main pt-6 md:pt-8">
          <div className="relative isolate overflow-hidden rounded-none bg-slate-950 text-white md:rounded-sm">
            <div className="absolute inset-0">
              {homeContent.heroSlides.map((src, index) => (
                <div
                  key={src}
                  className="hero-slide absolute inset-0"
                  style={{ animationDelay: `${index * 5}s` }}
                >
                  <Image
                    src={src}
                    alt="TZTech hero"
                    fill
                    priority={index === 0}
                    className="hero-slide-image object-cover"
                    sizes="100vw"
                  />
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,13,48,0.66),rgba(11,32,93,0.78))]" />
            <div className="relative px-6 pb-28 pt-16 md:px-14 md:pb-32 md:pt-20">
              <h1 className="max-w-4xl text-3xl font-bold leading-tight md:text-6xl">
                {homeContent.heroTitle}
              </h1>
              <p className="mt-5 max-w-3xl text-base text-slate-200 md:text-2xl md:leading-9">
                {homeContent.heroLead}
              </p>
              <div className="mt-8">
                <Link
                  href="/o-nas"
                  className="inline-flex items-center gap-6 text-sm font-semibold uppercase tracking-wider text-slate-100 transition hover:text-white"
                >
                  <span className="h-px w-16 bg-white/80" />
                  Wiecej...
                </Link>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-16 bg-white [clip-path:polygon(0_58%,100%_92%,100%_100%,0_100%)]" />
          </div>

          <div className="relative z-10 mx-auto -mt-12 rounded-sm bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.12)] md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
              <div className="space-y-8">
                <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-6">
                  <p className="text-2xl font-semibold text-slate-800 md:text-4xl">
                    Moc grzewcza zainstalowanych urzadzen:
                  </p>
                  <p className="whitespace-nowrap text-3xl font-bold text-red-700 md:text-5xl">
                    {homeContent.powerKw}
                    {"\u00A0"}kW
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-2xl font-semibold text-slate-800 md:text-4xl">
                    Maksymalny przeplyw filtrowanej wody:
                  </p>
                  <p className="whitespace-nowrap text-3xl font-bold text-blue-500 md:text-5xl">
                    {homeContent.flowM3h}
                    {"\u00A0"}m³/h
                  </p>
                </div>
              </div>

              <div className="border-l-0 border-slate-300 lg:border-l lg:pl-8">
                <h2 className="text-4xl font-semibold text-slate-800">
                  Kontakt
                </h2>
                <ul className="mt-4 space-y-4 text-lg text-slate-700 md:text-xl">
                  {homeContent.contactItems.map((item) => (
                    <li key={item} className="border-b border-slate-200 pb-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="container-main py-12 md:py-14">
          <div className="text-center">
            <div className="mx-auto mb-4 h-1 w-20 bg-[#223a82]" />
            <h2 className="text-4xl font-semibold text-slate-900 md:text-5xl">
              Uslugi
            </h2>
          </div>
          <ServicesGrid className="mt-10" />
        </section>

        <section className="container-main py-14">
          <div className="text-center">
            <div className="mx-auto mb-4 h-1 w-20 bg-[#223a82]" />
            <h2 className="text-4xl font-semibold text-slate-900 md:text-5xl">
              Wybrane realizacje
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {realizations.slice(0, 6).map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={768}
                  height={420}
                  className="h-52 w-full object-cover transition duration-500"
                />
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                    {item.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">{item.date}</p>
                  <p className="mt-3 text-sm text-slate-700">{item.excerpt}</p>
                  <Link
                    href={item.link}
                    className="mt-4 inline-flex text-sm font-semibold text-cyan-700 hover:text-cyan-900"
                  >
                    Czytaj wiecej
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/realizacje"
              className="inline-flex text-base font-semibold text-[#223a82] hover:text-[#182c66]"
            >
              Zobacz wszystkie realizacje
            </Link>
          </div>
        </section>

        <section className="container-main pb-8 md:pb-12">
          <div className="relative h-[260px] overflow-hidden rounded-sm md:h-[360px]">
            <Image
              src="/images/bottom-banner/background.jpg"
              alt="Tlo baneru"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-slate-900/30" />
            <div className="absolute inset-0 flex items-end justify-center">
              <Image
                src="/images/bottom-banner/domito.png"
                alt="Autoryzowany serwis Domito HVAC"
                width={1024}
                height={518}
                className="h-[84%] w-auto object-contain"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
