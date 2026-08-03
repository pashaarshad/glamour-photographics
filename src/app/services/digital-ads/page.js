'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Play, X, Film, ArrowRight } from 'lucide-react';

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
    {
      id: 'PX5EzmcDqBI',
      title: 'Zapyle Digital Campaign',
      hook: 'Fashion-forward style and brand identity.',
      desc: 'A fashion-forward digital campaign crafted to showcase premium style, elevate brand identity, and engage modern audiences through bold visuals and dynamic storytelling.'
    },
    {
      id: 'zjxFg4uskmU',
      title: 'C Vitamins Digital Campaign',
      hook: 'Vibrant visuals and everyday wellness stories.',
      desc: 'A vibrant digital campaign crafted to communicate everyday wellness through clean visuals, engaging storytelling, and a fresh, energetic brand identity that connects with modern audiences.'
    },
    {
      id: 'xALGQ-5sr6Y',
      title: 'Priveda Niacinamide Serum',
      hook: 'Refined skincare aesthetics and cinematic framing.',
      desc: 'A premium skincare campaign that combines clean visuals, refined aesthetics, and cinematic storytelling to showcase the brand\'s commitment to modern skincare and everyday confidence.'
    },
    {
      id: 'C0hzCKpITSE',
      title: 'Pai International Digital Campaign',
      hook: 'Vibrant product storytelling for modern electronics.',
      desc: 'A dynamic retail campaign showcasing the latest consumer electronics through vibrant visuals, cinematic storytelling, and engaging product-focused content that reflects the trusted Pai International brand.'
    },
    {
      id: 'xzKI4XmfFus',
      title: 'Pai International – Electronics City',
      hook: 'Premium flagship shopping experience showcase.',
      desc: 'A dynamic retail campaign showcasing the Electronics City flagship store through cinematic visuals that highlight the latest technology, premium shopping experience, and an extensive range of consumer electronics.'
    }
  ];

  const photos = [
    '/images/digital-ads/ad_1.jpg',
    '/images/digital-ads/ad_2.jpg',
    '/images/digital-ads/ad_3.jpg',
    '/images/digital-ads/ad_4.jpg',
    '/images/digital-ads/ad_5.jpg',
    '/images/digital-ads/ad_6.jpg',
    '/images/digital-ads/ad_7.jpg'
  ];

  return (
    <main className="w-full bg-[var(--dark)] text-[var(--light)] pb-[100px] cursor-none relative overflow-x-hidden">
      
      {/* ─── HERO HEADER ─── */}
      <section className="relative min-h-[50vh] flex items-center px-[5%] md:px-[8%] bg-[#0A0A0A] pt-[120px] md:pt-[100px]">
        <div className="absolute inset-0 z-0">
          <img src="/images/services/Digital ads .png" alt="Digital Ads Header" className="w-full h-full object-cover object-center opacity-40 select-none pointer-events-none" />
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
            <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-light text-[var(--light)] mb-[16px] leading-tight">
              Creative Films That Capture <br />
              <span className="italic text-[var(--gold)]">Attention and Drive Impact.</span>
            </h2>
            <p className="text-[14.5px] leading-[1.85] text-[var(--muted)] font-light mb-[32px]">
              In a world of endless scrolling, great visuals make the difference. We produce cinematic digital ads that combine compelling storytelling, striking visuals, and purposeful creativity, helping brands capture attention, communicate their message, and leave a lasting impression.
            </p>
            <Link href="/portfolio" className="inline-flex items-center gap-[8px] border border-[rgba(10,10,10,0.15)] text-[var(--light)] text-[10px] tracking-[0.2em] uppercase py-[16px] px-[32px] hover:bg-[var(--light)] hover:text-[var(--dark)] transition-all duration-300 cursor-none font-medium">
              See the Portfolio in Action <ArrowRight className="w-[12px] h-[12px]" />
            </Link>
          </div>
          <div className="relative aspect-video w-full rounded-[16px] overflow-hidden border border-[rgba(10,10,10,0.06)] group shadow-md bg-black">
            <img src="/images/our-services-img-for-outter/DIGITAL ADS-inside-img.png" alt="Scroll Stopping Concept" className="w-full h-full object-cover opacity-100 transition-transform duration-[1200ms] group-hover:scale-103" />
          </div>
        </div>
      </section>



      {/* ─── VIDEO GRID ─── */}
      <section className="py-[100px] bg-[var(--darker)] border-t border-[rgba(10,10,10,0.06)] px-[5%] md:px-[8%]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-[60px] reveal">
            <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] font-bold mb-[12px] flex items-center gap-[8px]">
              <Film className="w-[12px] h-[12px]" /> AD CAMPAIGNS
            </span>
            <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-light text-[var(--light)] mb-[16px]">
              Featured Campaigns
            </h2>
            <p className="text-[14.5px] leading-[1.8] text-[var(--muted)] font-light max-w-[700px]">
              Ad spots engineered for maximum digital impact, keeping users locked onto your message instead of passing by.
            </p>
          </div>

          <div className="flex flex-col gap-[60px] mt-[40px]">
            {videos.map((video, idx) => (
              <div 
                key={video.id}
                className={`flex flex-col lg:flex-row gap-[40px] lg:gap-[60px] items-center reveal ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Video Card Player */}
                <div 
                  onClick={() => setActiveVideoId(video.id)}
                  className="w-full lg:w-1/2 aspect-video rounded-[16px] overflow-hidden border border-[rgba(10,10,10,0.06)] bg-black shadow-md cursor-none relative group"
                >
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-102 transition-transform duration-[800ms]"
                  />
                  <div className="absolute inset-0 bg-black/20 z-10" />
                  
                  {/* Play circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full border border-white/50 bg-black/40 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--gold)] group-hover:border-transparent z-20">
                    <Play className="w-[18px] h-[18px] fill-current ml-[2px]" />
                  </div>
                </div>

                {/* Details */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold)] font-bold mb-[8px]">AD CAMPAIGN</span>
                  <h3 className="font-serif text-[24px] text-[var(--light)] font-bold mb-[12px] leading-tight">{video.title}</h3>
                  <div className="w-[40px] h-[1px] bg-[var(--gold)] mb-[16px]"></div>
                  <h4 className="font-sans text-[14px] text-[var(--gold)] italic font-semibold mb-[12px]">"{video.hook}"</h4>
                  <p className="text-[14px] leading-[1.8] text-[var(--muted)] font-light">{video.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHOTOS GALLERY ─── */}
      <section className="py-[100px] px-[5%] md:px-[8%] max-w-[1400px] mx-auto">
        <div className="mb-[50px] text-center reveal">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-[12px] block font-bold">Gallery</span>
          <h2 className="font-serif text-[clamp(28px,3vw,40px)] font-light text-[var(--light)]">Ad Campaign Frames</h2>
          <div className="w-[60px] h-[1px] bg-[var(--gold)] mx-auto mt-[16px]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] reveal">
          {photos.map((src, idx) => (
            <div key={idx} className="relative aspect-[16/9] rounded-sm overflow-hidden border border-[rgba(10,10,10,0.06)] group shadow-sm bg-[rgba(10,10,10,0.02)]">
              <img src={src} alt="Ad Campaign Grid Frame" className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-103" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[16px]">
                <span className="text-[8px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[4px] font-bold">Digital Ads Portfolio</span>
                <h4 className="font-serif text-[14px] text-white">Behind the Campaign</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-[120px] text-center px-[5%] reveal border-t border-[rgba(10,10,10,0.06)]">
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
