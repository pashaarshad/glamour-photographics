'use client';
import { useEffect, use } from 'react';
import Link from 'next/link';
import { clientsData } from '@/data/clients';
import ClientGallery from '@/components/ClientGallery';
import imagesMap from '../../../../images_map.json';

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
    const initialCheck = setTimeout(checkReveals, 300);

    return () => {
      window.removeEventListener('scroll', checkReveals);
      clearTimeout(initialCheck);
    };
  }, []);

  if (!client) {
    return (
      <main className="w-full bg-[var(--dark)] text-[var(--light)] min-h-[70vh] pt-[160px] pb-[100px] flex flex-col items-center justify-center text-center cursor-none">
        <h1 className="font-serif text-[40px] text-[var(--light)] mb-4">Client Not Found</h1>
        <Link href="/corporate" className="inline-block border border-[rgba(10,10,10,0.15)] text-[var(--light)] px-6 py-3 uppercase tracking-wider text-[10px] hover:bg-[var(--light)] hover:text-[var(--dark)] transition-all duration-300">Return to Portfolio</Link>
      </main>
    );
  }

  // Normalize slug matching for tata_elxsi underscores vs hyphens
  const mapSlug = clientSlug === 'tata-elxsi' ? 'tata_elxsi' : clientSlug;
  
  // Set fallback images in case client does not have a mapped folder
  const fallbackImages = [
    "/images/our_portfolio/cp-7.jpg",
    "/images/our_portfolio/cp-10.jpg",
    "/images/our_portfolio/cp-12.jpg",
    "/images/our_portfolio/rtx-1.jpg",
    "/images/our_portfolio/te3.jpg"
  ];
  
  const clientImages = imagesMap[mapSlug] || fallbackImages;

  // Split images: First 2 go to the right-hand column, remaining go to the bottom gallery
  const featuredImages = clientImages.slice(0, 2);
  const galleryImages = clientImages.slice(2);

  return (
    <main className="w-full bg-[var(--dark)] text-[var(--light)] min-h-screen pt-[160px] pb-[100px] cursor-none relative">
      <section className="px-[5%] md:px-[8%] max-w-[1400px] mx-auto">
        
        <Link href="/corporate" className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[var(--gold)] hover:text-[var(--light)] transition-colors mb-[60px] reveal">
          ← Back to Portfolio
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] mb-[120px] items-start">
          <div className="reveal">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">
              Case Study
            </span>
            <h1 className="font-serif text-[clamp(36px,5vw,60px)] font-light leading-[1.1] tracking-[-0.02em] text-[var(--light)] mb-[32px]">
              {client.name}
            </h1>
            
            {client.tagline && (
              <blockquote className="border-l-2 border-[var(--gold)] pl-[24px] mb-[40px]">
                <p className="font-serif text-[20px] md:text-[24px] italic text-[var(--gold)] leading-[1.4] font-light">
                  "{client.tagline}"
                </p>
              </blockquote>
            )}

            <div className="mb-[40px]">
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-[var(--light)] mb-[16px] font-medium border-b border-[rgba(10,10,10,0.08)] pb-[8px]">
                About the Company
              </h3>
              <p className="text-[14px] leading-[1.8] text-[var(--muted)] font-light">
                {client.about}
              </p>
            </div>
            
            <div>
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-[var(--light)] mb-[16px] font-medium border-b border-[rgba(10,10,10,0.08)] pb-[8px]">
                Our Partnership
              </h3>
              <p className="text-[14px] leading-[1.8] text-[var(--muted)] font-light">
                {client.ourWork}
              </p>
            </div>
          </div>

          {/* Right Column: Displays two featured images instead of the iframe */}
          <div className="reveal flex flex-col gap-[24px]">
            {featuredImages.map((src, idx) => (
              <div key={idx} className="relative w-full aspect-video bg-[var(--darker)] rounded-sm overflow-hidden border border-[rgba(10,10,10,0.06)] shadow-2xl group">
                <img 
                  src={src} 
                  alt={`${client.name} Featured Work ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-102"
                />
                {/* No shading overlay */}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Displays remaining gallery images */}
        <div className="reveal border-t border-[rgba(10,10,10,0.06)] pt-[80px]">
          <div className="mb-[40px] flex items-end justify-between">
            <h2 className="font-serif text-[28px] md:text-[36px] text-[var(--light)]">
              Visual Gallery
            </h2>
          </div>
          
          <ClientGallery images={galleryImages} />
        </div>
      </section>
    </main>
  );
}
