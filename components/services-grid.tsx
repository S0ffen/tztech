import Image from "next/image";
import Link from "next/link";
import servicesData from "@/data/services.json";

type Service = {
  id: string;
  order: number;
  slug: string;
  title: string;
  cardTitle: string;
  cardText: string;
  image: string;
};

type ServicesGridProps = {
  className?: string;
};

const services = [...(servicesData as Service[])].sort(
  (a, b) => a.order - b.order,
);

export default function ServicesGrid({ className = "" }: ServicesGridProps) {
  return (
    <div className={`grid gap-6 md:grid-cols-2 ${className}`.trim()}>
      {services.map((service) => (
        <article
          key={service.id}
          className="group relative h-[300px] overflow-hidden rounded-sm border-b-4 border-[#223a82] shadow-[0_10px_30px_rgba(15,23,42,0.28)]"
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/46 transition duration-500 group-hover:bg-black/62" />

          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <h3 className="text-3xl font-medium text-white transition duration-500 md:text-5xl md:group-hover:-translate-y-8">
              {service.cardTitle}
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-100 opacity-100 transition duration-500 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:text-2xl">
              {service.cardText}
            </p>
            <Link
              href={`/uslugi/${service.slug}`}
              className="service-card-link mt-6 inline-flex border border-white px-6 py-2 text-sm font-semibold uppercase tracking-wider opacity-100 transition duration-500 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
            >
              Wiecej
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
