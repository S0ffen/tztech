import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="container-main flex-1 py-14">
        <h1 className="text-4xl font-semibold">Kontakt</h1>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-semibold">Dane kontaktowe</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Dawid Tetlak: 506 195 968
              <br />
              Jaroslaw Zolnierczyk: 506 197 848
              <br />
              e-mail: biuro@tztech.pl
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-semibold">Lokalizacja i godziny</h2>
            <p className="mt-4 leading-7 text-slate-700">
              ul. Gorska 15, 34-324 Twardorzeczka
              <br />
              poniedzialek - piatek, 8:00-16:00
            </p>
          </section>
        </div>

        <section className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <iframe
            title="Mapa dojazdu TZTECH"
            src="https://www.google.com/maps?q=ul.%20Gorska%2015,%2034-324%20Twardorzeczka&output=embed"
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
