'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Play, X, ArrowRight } from 'lucide-react';

export default function DigitalAdsServices() {
  const [activeVideoId, setActiveVideoId] = useState(null);

  useEffect(() => {
    const checkReveals = () => {
      const vh = window.innerHeight;
      document.querySelectorAll('.reveal, .stagger-children').forEach(el => {
        if (el.getBoundingClientRect().top < vh * 0.95) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', checkReveals, { passive: true });
    setTimeout(checkReveals, 300);
    return () => window.removeEventListener('scroll', checkReveals);
  }, []);

  const videos = [
    { id: 'PX5EzmcDqBI', title: 'Creative Brand Spot 1', desc: 'Shattering conventions with bold, scroll-stopping photography.' },
    { id: 'zjxFg4uskmU', title: 'Creative Brand Spot 2', desc: 'Cinematic brand commercial designed for digital engagement.' },
    { id: 'xALGQ-5sr6Y', title: 'Creative Brand Spot 3', desc: 'Narrating product benefits with premium visuals and pacing.' },
    { id: 'C0hzCKpITSE', title: 'Creative Brand Spot 4', desc: 'Visual campaigns built to capture attention immediately.' },
    { id: 'xzKI4XmfFus', title: 'Creative Brand Spot 5', desc: 'Premium commercial styling and message delivery.' }
  ];

  return (
    <main className="w-full bg-[var(--dark)] text-[var(--light)] pb-[100px] cursor-none relative overflow-x-hidden">
      
      {/* ─── HERO HEADER ─── */}
      <section className="relative min-h-[50vh] flex items-center px-[5%] md:px-[8%] bg-[#0A0A0A] pt-[120px] md:pt-[100px]">
        <div className="absolute inset-0 z-0">
          <img src="/images/our_portfolio/22.jpg" alt="Digital Ads Header" className="w-full h-full object-cover object-[center_20%] opacity-40 select-none pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
        </div>
        <div className="max-w-[1400px] w-full mx-auto z-20 relative">
          <div className="reveal">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block font-bold">
              Capabilities
            </span>
            <h1 className="font-serif text-[clamp(36px,5vw,72px)] font-light leading-[1.1] tracking-[-0.02em] text-white">
              Digital <span className="italic text-[var(--gold)]">Ads.</span>
            </h1>
            <p className="text-[14px] md:text-[15.5px] leading-[1.8] text-white/80 max-w-[620px] mt-[24px] font-light">
              Every brand has a story. We make people stop, watch, and remember it.
            </p>
          </div>
        </div>
      </section>

      {/* ─── INTRO DETAILS ─── */}
      <section className="py-[100px] px-[5%] md:px-[8%] max-w-[1400px] mx-auto reveal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[100px] items-center">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-[12px] block font-bold">Digital Ads</span>
            <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-light text-[var(--light)] mb-[24px] leading-tight">
              Visual Campaigns Built <br />
              <span className="italic text-[var(--gold)]">to Break the Scroll.</span>
            </h2>
            <p className="text-[14.5px] leading-[1.85] text-[var(--muted)] font-light mb-[32px]">
              If you're done playing it safe, you're in the right place. We build digital ad content that challenges convention, shatters the usual stereotypes, and holds attention in a feed built to ignore everything. Bold visuals. Sharp storytelling. Campaigns people actually remember.
            </p>
            <Link href="/portfolio" className="inline-flex items-center gap-[8px] border border-[rgba(10,10,10,0.15)] text-[var(--light)] text-[10px] tracking-[0.2em] uppercase py-[16px] px-[32px] hover:bg-[var(--light)] hover:text-[var(--dark)] transition-all duration-300 cursor-none font-medium">
              See the Portfolio in Action <ArrowRight className="w-[12px] h-[12px]" />
            </Link>
          </div>
          <div className="relative aspect-video w-full rounded-[16px] overflow-hidden border border-[rgba(10,10,10,0.06)] group shadow-md bg-black">
            <img src="/images/our_portfolio/22.jpg" alt="Scroll Stopping Concept" className="w-full h-full object-cover opacity-100 transition-transform duration-[1200ms] group-hover:scale-103" />
          </div>
        </div>
      </section>

      {/* ─── VIDEO GRID ─── */}
      <section className="py-[100px] px-[5%] md:px-[8%] max-w-[1400px] mx-auto border-t border-[rgba(10,10,10,0.06)]">
        <div className="mb-[50px] reveal">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-[12px] block font-bold">Campaigns</span>
          <h2 className="font-serif text-[clamp(28px,3vw,40px)] font-light text-[var(--light)]">Ad Spots & Commercials</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] reveal">
          {videos.map((video) => (
            <div 
              key={video.id}
              onClick={() => setActiveVideoId(video.id)}
              className="group relative aspect-video rounded-[16px] overflow-hidden border border-[rgba(10,10,10,0.05)] shadow-md bg-black cursor-none transition-all duration-500 hover:shadow-xl"
            >
              <img 
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-102 transition-transform duration-[800ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-10" />
              
              {/* Play Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[54px] h-[54px] rounded-full border border-white/50 bg-black/35 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--gold)] group-hover:border-transparent z-20">
                <Play className="w-[16px] h-[16px] fill-current ml-[2px]" />
              </div>

              {/* Title & Tag */}
              <div className="absolute bottom-[20px] left-[20px] right-[20px] z-20 pointer-events-none">
                <span className="text-[9px] tracking-[0.2em] font-bold text-[var(--gold)] uppercase block mb-[4px]">Visual Ad</span>
                <h3 className="font-serif text-[18px] text-white font-medium mb-[4px] leading-tight">{video.title}</h3>
                <p className="text-[11px] text-white/60 font-light">{video.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-[120px] text-center px-[5%] reveal bg-[var(--darker)] border-t border-[rgba(10,10,10,0.06)]">
        <h2 className="font-serif text-[clamp(32px,4.5vw,52px)] font-light text-[var(--light)] mb-[40px]">
          Ready to launch a high-impact ad campaign?
        </h2>
        <Link href="/contact" className="inline-flex items-center gap-[10px] bg-[var(--gold)] text-white text-[11px] tracking-[0.2em] uppercase font-bold py-[18px] px-[44px] hover:bg-[var(--light)] hover:text-[var(--dark)] transition-all duration-300 cursor-none rounded-full shadow-md">
          Work With Us <ArrowRight className="w-[14px] h-[14px]" />
        </Link>
      </section>

      {/* ─── YOUTUBE MODAL OVERLAY ─── */}
      {activeVideoId && (
        <div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-[20px]">
          <button 
            onClick={() => setActiveVideoId(null)}
            className="absolute top-[30px] right-[5%] md:right-[8%] text-white text-[12px] tracking-[0.2em] uppercase flex items-center gap-[8px] cursor-none hover:text-[var(--gold)]"
          >
            Close <X className="w-[16px] h-[16px]" />
          </button>
          <div className="w-full max-w-[1000px] aspect-video rounded-sm overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-2xl">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

    </main>
  );
}
