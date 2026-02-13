import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import ServicesGrid from "@/components/services-grid";

export default function UslugiPage() {
  return (
    <div>
      <SiteNav />
      <main className="container-main py-14">
        <div className="text-center">
          <div className="mx-auto mb-4 h-1 w-20 bg-[#223a82]" />
          <h1 className="text-4xl font-semibold md:text-5xl">Uslugi</h1>
        </div>
        <ServicesGrid className="mt-10" />
      </main>
      <SiteFooter />
    </div>
  );
}
