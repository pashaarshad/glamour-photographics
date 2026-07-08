'use client';
import { useEffect, useState, use } from 'react';
import Link from 'next/link';
import { clientsData } from '@/data/clients';
import ClientGallery from '@/components/ClientGallery';

export default function ClientPage({ params }) {
  const resolvedParams = use(params);
  const clientSlug = resolvedParams.client;
  const client = clientsData[clientSlug];

  useEffect(() => {
    const checkReveals = () => {
      const vh = window.innerHeight;
      document.querySelectorAll('.reveal, .stagger-children').forEach(el => {
        if (el.getBoundingClientRect().top < vh * 0.9) el.classList.add('visible');
      });
    };

    window.addEventListener('scroll', checkReveals, { passive: true });
    const initialCheck = setTimeout(checkReveals, 500);

    return () => {
      window.removeEventListener('scroll', checkReveals);
      clearTimeout(initialCheck);
    };
  }, []);

  if (!client) {
    return (
      <main className="w-full bg-[var(--ivory)] min-h-[70vh] pt-[160px] pb-[100px] flex flex-col items-center justify-center text-center">
        <h1 className="font-serif text-[40px] text-[var(--black)] mb-4">Client Not Found</h1>
        <Link href="/corporate" className="btn-primary">Return to Portfolio</Link>
      </main>
    );
  }

  return (
    <main className="w-full bg-[var(--ivory)] min-h-screen pt-[160px] pb-[100px]">
      <section className="px-[60px] max-w-[1400px] mx-auto">
        <Link href="/corporate" className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors mb-[60px] reveal">
          ← Back to Portfolio
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] mb-[120px] items-start">
          <div className="reveal">
            <h1 className="font-serif text-[clamp(40px,5vw,72px)] font-light leading-[1.1] tracking-[-0.02em] text-[var(--black)] mb-[32px]">
              {client.name}
            </h1>
            {client.quote && (
              <blockquote className="border-l-2 border-[var(--gold)] pl-[24px] mb-[40px]">
                <p className="font-serif text-[24px] italic text-[var(--muted)] leading-[1.4]">
                  "{client.quote}"
                </p>
              </blockquote>
            )}
            <div className="mb-[40px]">
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-[var(--black)] mb-[16px] font-medium border-b border-[rgba(10,10,10,0.1)] pb-[8px]">
                About the Company
              </h3>
              <p className="text-[14px] leading-[1.9] text-[var(--muted)]">
                {client.about}
              </p>
            </div>
            <div>
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-[var(--black)] mb-[16px] font-medium border-b border-[rgba(10,10,10,0.1)] pb-[8px]">
                Our Work
              </h3>
              <p className="text-[14px] leading-[1.9] text-[var(--muted)]">
                {client.ourWork}
              </p>
            </div>
          </div>

          <div className="reveal">
            {client.videos && client.videos.length > 0 ? (
              <div className="flex flex-col gap-[24px]">
                {client.videos.map((video, idx) => (
                  <div key={idx} className="relative w-full aspect-video bg-[var(--black)] shadow-2xl">
                    <iframe 
                      className="absolute inset-0 w-full h-full"
                      src={video}
                      title={`${client.name} Video ${idx + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full aspect-video bg-[rgba(10,10,10,0.03)] border border-[rgba(10,10,10,0.08)] flex items-center justify-center">
                 <span className="text-[11px] tracking-[0.2em] uppercase text-[var(--muted)]">No Video Featured</span>
              </div>
            )}
          </div>
        </div>

        <div className="reveal">
          <div className="mb-[40px] flex items-end justify-between">
            <h2 className="font-serif text-[36px] text-[var(--black)]">
              Visual Gallery
            </h2>
          </div>
          
          <ClientGallery images={client.images} />
        </div>
      </section>
    </main>
  );
}
