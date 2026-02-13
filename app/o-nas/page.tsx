import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

export default function AboutPage() {
  return (
    <div>
      <SiteNav />
      <main className="container-main py-14">
        <h1 className="text-4xl font-semibold">O nas</h1>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="leading-7 text-slate-700">
              Firma TZTECH Sp. z o.o. to doswiadczony wykonawca nowoczesnych instalacji grzewczych i technologicznych.
              Specjalizujemy sie w doborze i montazu pomp ciepla, systemow uzdatniania wody oraz instalacji dla klientow
              indywidualnych i inwestycyjnych.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Na podstawie tresci ze strony firmowej odtworzono sekcje informacyjne i strukture podstron.
              Wersja developerska zostala przygotowana tak, aby dalsza edycja tresci byla prosta i szybka.
            </p>
          </article>

          <aside className="rounded-xl border border-slate-200 bg-slate-50 p-7">
            <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Dane firmy</p>
            <p className="mt-3 text-slate-700">
              TZTECH Sp. z o.o.
              <br />
              ul. Gorska 15
              <br />
              34-324 Twardorzeczka
            </p>
            <p className="mt-4 text-slate-700">
              Tel: 506 195 968
              <br />
              Email: biuro@tztech.pl
            </p>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}