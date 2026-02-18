import Link from "next/link";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import servicesData from "@/data/services.json";

type Service = {
  id: string;
  order: number;
  slug: string;
  title: string;
  pageParagraphs: string[];
  pageBullets: string[];
};

export default function ServicePageContent({ slug }: { slug: string }) {
  const allServices = [...(servicesData as Service[])].sort((a, b) => a.order - b.order);
  // "slug" to URL-friendly id uslugi (np. "pompy-ciepla"), uzywany do znalezienia rekordu w services.json.
  const service = allServices.find((item) => item.slug === slug);

  if (!service) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="container-main flex-1 py-14">
        <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-14">
          <aside className="pt-2">
            <nav className="border-t border-[#223a82]">
              <ul>
                {allServices.map((item) => {
                  const active = item.slug === service.slug;
                  return (
                    <li key={item.id} className="border-b border-[#223a82]">
                      <Link
                        href={`/uslugi/${item.slug}`}
                        className={`block px-6 py-5 text-center text-lg transition md:text-2xl ${
                          active ? "font-medium text-slate-900" : "text-[#2f4e95] hover:text-[#1f3770]"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          <article>
            <h1 className="text-4xl font-semibold text-slate-900 md:text-6xl">{service.title}</h1>
            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-800 md:text-2xl md:leading-[1.6]">
              {service.pageParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {service.pageBullets.length > 0 ? (
              <ul className="mt-8 list-disc space-y-3 pl-8 text-lg leading-8 text-slate-800 md:text-2xl md:leading-[1.55]">
                {service.pageBullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
