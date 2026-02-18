"use client";

import Image from "next/image";
import { useState } from "react";

type Certificate = {
  title: string;
  image: string;
};

type CertificateGalleryProps = {
  certificates: Certificate[];
};

export default function CertificateGallery({ certificates }: CertificateGalleryProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {certificates.map((certificate) => (
          <button
            key={certificate.image}
            type="button"
            onClick={() => setActiveImage(certificate.image)}
            className="group cursor-pointer overflow-hidden rounded-sm border border-slate-200 bg-white text-left shadow-sm transition hover:shadow-md"
          >
            <div className="relative aspect-[4/3] w-full bg-slate-100">
              <Image
                src={certificate.image}
                alt={certificate.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-4">
              <p className="text-base font-medium text-slate-900">{certificate.title}</p>
              <p className="mt-2 text-sm text-slate-600">Kliknij, aby powiekszyc.</p>
            </div>
          </button>
        ))}
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            aria-label="Zamknij podglad certyfikatu"
            className="absolute right-4 top-4 rounded bg-white px-3 py-1 text-sm font-semibold text-slate-900"
            onClick={() => setActiveImage(null)}
          >
            Zamknij
          </button>
          <div className="relative max-h-[92vh] w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <Image
              src={activeImage}
              alt="Powiekszony certyfikat TZTECH"
              width={1800}
              height={1300}
              className="h-auto max-h-[92vh] w-full object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
