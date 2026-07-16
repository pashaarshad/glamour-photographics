'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Play, X, Check, ArrowRight } from 'lucide-react';

export default function CorporateServices() {
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
    { id: 't07kSRBHPfg', title: 'CGI Corporate Film', desc: 'Narrative storytelling of corporate capability and brand values.' },
    { id: 'SpD8AeoLTXw', title: 'Tata Elxsi UAV Showcase', desc: 'Capturing technological innovation and aerospace engineering.' },
    { id: 'yVtKMpRffws', title: 'GE BEL Summit Highlights', desc: 'Commemorating global industrial collaboration.' },
    { id: 'CZ6tMXytyM4', title: 'SMK Prakash Corporate Overview', desc: 'Visually detailing state-of-the-art infrastructure.' }
  ];

  const photos = [
    '/images/our_portfolio/corporate/NMKL5612.jpg',
    '/images/our_portfolio/corporate/NMKL7219.jpg',
    '/images/our_portfolio/corporate/NMKL7605.jpg',
    '/images/our_portfolio/corporate/NMKL7670.jpg',
    '/images/our_portfolio/corporate/101A0087.jpg',
    '/images/our_portfolio/corporate/iqvia.jpg'
  ];

  return (
    <main className="w-full bg-[var(--dark)] text-[var(--light)] pb-[100px] cursor-none relative overflow-x-hidden">
      
      {/* ─── HERO HEADER ─── */}
      <section className="relative min-h-[50vh] flex items-center px-[5%] md:px-[8%] bg-[#0A0A0A] pt-[120px] md:pt-[100px]">
        <div className="absolute inset-0 z-0">
          <img src="/images/our_portfolio/corporate/NMKL7605.jpg" alt="Corporate Header" className="w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
        </div>
        <div className="max-w-[1400px] w-full mx-auto z-20 relative">
          <div className="reveal">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block font-bold">
              Capabilities
            </span>
            <h1 className="font-serif text-[clamp(36px,5vw,72px)] font-light leading-[1.1] tracking-[-0.02em] text-white">
              Corporate Media <span className="italic text-[var(--gold)]">Services.</span>
            </h1>
            <p className="text-[14px] md:text-[15.5px] leading-[1.8] text-white/80 max-w-[620px] mt-[24px] font-light">
              Great corporate films don't sell, they connect. Translate boardroom vision into visual storytelling that actually resonates.
            </p>
          </div>
        </div>
      </section>

      {/* ─── INTRO DETAILS ─── */}
      <section className="py-[100px] px-[5%] md:px-[8%] max-w-[1400px] mx-auto reveal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[100px] items-center">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-[12px] block font-bold">Corporate Capabilities</span>
            <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-light text-[var(--light)] mb-[24px] leading-tight">
              Films That Turn Employees <br />
              and Clients into <span className="italic text-[var(--gold)]">Believers.</span>
            </h2>
            <p className="text-[14.5px] leading-[1.85] text-[var(--muted)] font-light mb-[32px]">
              With years of experience running large-scale conferences and corporate shoots nationally and internationally, our crew knows how to translate boardroom vision into visual storytelling that actually resonates. We stay ahead of the trends, sharpen our craft every year, and deliver results that are as cost-smart as they are camera-ready.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[16px] gap-x-[32px] border-t border-[rgba(10,10,10,0.06)] pt-[24px]">
              {['Company Culture Narratives', 'Boardroom Profile Videos', 'Industrial Campus Media', 'Marketing Video Campaigns'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-[10px]">
                  <span className="w-[14px] h-[14px] rounded-full bg-[rgba(212,175,55,0.1)] flex items-center justify-center text-[var(--gold)]">
                    <Check className="w-[9px] h-[9px]" />
                  </span>
                  <span className="text-[13px] text-[var(--light)] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[380px] md:h-[480px] w-full rounded-sm overflow-hidden border border-[rgba(10,10,10,0.06)] group shadow-md">
            <img src="/images/our_portfolio/corporate/iqvia.jpg" alt="IQVIA Corporate Boardroom" className="w-full h-full object-cover opacity-85 transition-transform duration-[1200ms] group-hover:scale-103" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
          </div>
        </div>
      </section>

      {/* ─── CORPORATE FILM SUB-SECTION ─── */}
      <section className="py-[80px] bg-[var(--darker)] border-y border-[rgba(10,10,10,0.06)]">
        <div className="max-w-[1000px] mx-auto px-[5%] text-center reveal">
          <span className="text-[9px] tracking-[0.25em] uppercase text-[var(--gold)] font-bold mb-[16px] block">OUR SPECIALITY</span>
          <h3 className="font-serif text-[clamp(24px,3vw,38px)] text-[var(--light)] mb-[24px] font-light leading-tight">
            Culture. Values. Mission. <br />
            <span className="italic text-[var(--gold)]">In 3 minutes, they'll feel all of it.</span>
          </h3>
          <p className="text-[14.5px] leading-[1.8] text-[var(--muted)] font-light max-w-[700px] mx-auto mb-[32px]">
            We don't make corporate videos — we make visual narratives. Every film we craft is built to humanize your organization, spotlight what makes your culture different, and build a genuine emotional bridge with the people who matter most: your employees, your investors, your customers.
          </p>
          <Link href="/portfolio" className="text-[10px] tracking-[0.2em] uppercase font-bold text-[var(--gold)] hover:text-[var(--light)] transition-colors duration-300 flex items-center justify-center gap-[8px] cursor-none">
            Explore Our Collection <ArrowRight className="w-[12px] h-[12px]" />
          </Link>
        </div>
      </section>

      {/* ─── VIDEO GRID ─── */}
      <section className="py-[100px] px-[5%] md:px-[8%] max-w-[1400px] mx-auto">
        <div className="mb-[50px] reveal">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-[12px] block font-bold">Videos</span>
          <h2 className="font-serif text-[clamp(28px,3vw,40px)] font-light text-[var(--light)]">Featured Brand Films</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] reveal">
          {videos.map((video) => (
            <div 
              key={video.id}
              onClick={() => setActiveVideoId(video.id)}
              className="group relative aspect-video rounded-[16px] overflow-hidden border border-[rgba(10,10,10,0.05)] shadow-md bg-black cursor-none transition-all duration-500 hover:shadow-xl"
            >
              <img 
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-102 transition-transform duration-[800ms]"
                onError={(e) => { e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-10" />
              
              {/* Play Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[54px] h-[54px] rounded-full border border-white/50 bg-black/35 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--gold)] group-hover:border-transparent z-20">
                <Play className="w-[16px] h-[16px] fill-current ml-[2px]" />
              </div>

              {/* Title & Tag */}
              <div className="absolute bottom-[24px] left-[24px] right-[24px] z-20 pointer-events-none">
                <span className="text-[9px] tracking-[0.2em] font-bold text-[var(--gold)] uppercase block mb-[6px]">Corporate Film</span>
                <h3 className="font-serif text-[20px] text-white font-medium mb-[4px]">{video.title}</h3>
                <p className="text-[11.5px] text-white/60 font-light">{video.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PHOTOS GALLERY ─── */}
      <section className="py-[80px] bg-[var(--darker)] border-y border-[rgba(10,10,10,0.06)] px-[5%] md:px-[8%]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-[50px] text-center reveal">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-[12px] block font-bold">Gallery</span>
            <h2 className="font-serif text-[clamp(28px,3vw,40px)] font-light text-[var(--light)]">Campus & Office Features</h2>
            <div className="w-[60px] h-[1px] bg-[var(--gold)] mx-auto mt-[16px]"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] reveal">
            {photos.map((src, idx) => (
              <div key={idx} className="relative aspect-[3/2] rounded-sm overflow-hidden border border-[rgba(10,10,10,0.06)] group shadow-sm bg-[rgba(10,10,10,0.02)]">
                <img src={src} alt="Corporate Photo Grid" className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-103" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[16px]">
                  <span className="text-[8px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[4px] font-bold">Corporate Photography</span>
                  <h4 className="font-serif text-[14px] text-white">Office Media</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-[120px] text-center px-[5%] reveal">
        <h2 className="font-serif text-[clamp(32px,4.5vw,52px)] font-light text-[var(--light)] mb-[40px]">
          Ready to tell your brand's true story?
        </h2>
        <Link href="/contact" className="inline-flex items-center gap-[10px] bg-[var(--gold)] text-white text-[11px] tracking-[0.2em] uppercase font-bold py-[18px] px-[44px] hover:bg-[var(--light)] hover:text-[var(--dark)] transition-all duration-300 cursor-none rounded-full shadow-md">
          Collaborate With Us <ArrowRight className="w-[14px] h-[14px]" />
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
