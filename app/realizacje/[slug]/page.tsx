import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  sourceLink: string;
  contentParagraphs: string[];
  contentBullets: string[];
  galleryImages?: string[];
};

export default async function RealizationDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const realizations = [...(realizationsData as Realization[])].sort((a, b) => a.order - b.order);
  const currentIndex = realizations.findIndex((entry) => entry.slug === slug);
  const item = currentIndex >= 0 ? realizations[currentIndex] : undefined;

  if (!item) {
    notFound();
  }

  const paragraphs = item.contentParagraphs.length > 0 ? item.contentParagraphs : [item.excerpt];
  const heroSrc = item.heroImage || item.image;
  const galleryImages = (item.galleryImages && item.galleryImages.length > 0
    ? item.galleryImages
    : [item.image]
  )
    .filter((src): src is string => Boolean(src) && src !== heroSrc)
    .filter((src, index, all) => all.indexOf(src) === index);
  const previousItem = currentIndex > 0 ? realizations[currentIndex - 1] : null;
  const nextItem = currentIndex < realizations.length - 1 ? realizations[currentIndex + 1] : null;

  const rotatedRealizations = [...realizations.slice(currentIndex + 1), ...realizations.slice(0, currentIndex)];
  const relatedItems = rotatedRealizations.filter((entry) => entry.slug !== item.slug).slice(0, 2);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="container-main flex-1 py-14">
        <article className="mx-auto max-w-5xl overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm">
          <Image
            src={item.heroImage || item.image}
            alt={item.title}
            width={1400}
            height={720}
            className="h-[320px] w-full object-cover md:h-[420px]"
          />

          <div className="p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.15em] text-slate-500">{item.category}</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">{item.title}</h1>
            <p className="mt-3 text-slate-500">{item.date}</p>

            <div className="mt-8 space-y-5 text-base leading-8 text-slate-700 md:text-lg">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {item.contentBullets.length > 0 ? (
              <ul className="mt-6 list-disc space-y-2 pl-6 text-base leading-8 text-slate-700 md:text-lg">
                {item.contentBullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}

            {galleryImages.length > 0 ? (
              <div className="mt-8 border-t border-slate-200 pt-8">
                <div className="grid gap-2 md:grid-cols-2">
                  {galleryImages.map((src) => (
                    <Image
                      key={src}
                      src={src}
                      alt={item.title}
                      width={900}
                      height={1200}
                      quality={100}
                      className="h-auto w-full object-contain"
                    />
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-10">
              <Link href="/realizacje" className="inline-flex text-sm font-semibold text-cyan-700 hover:text-cyan-900">
                Powrot do realizacji
              </Link>
            </div>
          </div>
        </article>

        <section className="mx-auto mt-10 max-w-5xl border-t border-slate-200 pt-8">
          <div className="grid gap-4 md:grid-cols-2 md:divide-x md:divide-slate-200">
            <div className="md:pr-8">
              {previousItem ? (
                <Link href={previousItem.link} className="group block">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#223a82]">Poprzedni</p>
                  <p className="mt-2 flex items-center gap-2 text-xl font-medium text-slate-500 transition-colors group-hover:text-[#223a82]">
                    <span aria-hidden>{`\u2039`}</span>
                    <span>{previousItem.title}</span>
                  </p>
                </Link>
              ) : (
                <div />
              )}
            </div>

            <div className="md:pl-8 md:text-right">
              {nextItem ? (
                <Link href={nextItem.link} className="group block">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#223a82]">Nastepny</p>
                  <p className="mt-2 flex items-center justify-end gap-2 text-xl font-medium text-slate-500 transition-colors group-hover:text-[#223a82]">
                    <span>{nextItem.title}</span>
                    <span aria-hidden>{`\u203A`}</span>
                  </p>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-5xl">
          <h2 className="text-5xl font-semibold tracking-tight text-[#223a82]">Inne realizacje</h2>

          <div className="mt-8 grid gap-7 md:grid-cols-2">
            {relatedItems.map((related) => (
              <article key={related.id} className="overflow-hidden border border-slate-200 bg-white shadow-sm">
                <Link href={related.link} className="block">
                  <Image src={related.image} alt={related.title} width={760} height={420} className="h-64 w-full object-cover" />
                </Link>
                <div className="border-b-[3px] border-[#223a82] p-6">
                  <h3 className="text-4xl font-semibold leading-tight text-slate-900">{related.title}</h3>
                  <p className="mt-3 text-sm text-slate-500">{related.date}</p>
                  <p className="mt-5 line-clamp-2 text-xl leading-8 text-slate-700">{related.excerpt}</p>
                  <Link href={related.link} className="mt-6 inline-flex text-base text-slate-500 hover:text-[#223a82]">
                    Czytaj wiecej...
                  </Link>
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
