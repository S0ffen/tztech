import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import CertificateGallery from "@/components/certificate-gallery";
import aboutContent from "@/data/about-content.json";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="container-main flex-1 py-14">
        <div className="text-center">
          <div className="mx-auto mb-4 h-1 w-20 bg-[#223a82]" />
          <h1 className="text-4xl font-semibold md:text-5xl">{aboutContent.title}</h1>
        </div>

        <article className="mx-auto mt-10 max-w-5xl rounded-sm border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          {aboutContent.paragraphs.map((paragraph, index) => (
            <p key={paragraph} className={`text-lg leading-8 text-slate-700 md:text-xl md:leading-9 ${index > 0 ? "mt-6" : ""}`}>
              {paragraph}
            </p>
          ))}
          <p className="mt-8 text-lg leading-8 text-slate-700 md:text-xl md:leading-9">{aboutContent.materialsLead}</p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg leading-8 text-slate-700 md:text-xl md:leading-9">
            {aboutContent.materials.map((material) => (
              <li key={material}>{material}</li>
            ))}
          </ul>
        </article>

        <section className="mx-auto mt-12 max-w-5xl">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">{aboutContent.certificatesHeading}</h2>
          <CertificateGallery certificates={aboutContent.certificates} />
        </section>

        <div className="mx-auto mt-12 max-w-5xl rounded-sm border border-slate-200 bg-slate-50 p-7">
          <p className="text-sm uppercase tracking-[0.16em] text-slate-500">{aboutContent.companyDataHeading}</p>
          <p className="mt-3 text-slate-700">
            {aboutContent.company.name}
            <br />
            {aboutContent.company.addressLines[0]}
            <br />
            {aboutContent.company.addressLines[1]}
          </p>
          <p className="mt-4 text-slate-700">
            {aboutContent.company.contactLines[0]}
            <br />
            {aboutContent.company.contactLines[1]}
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
