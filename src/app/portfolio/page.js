'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('ALL');

  useEffect(() => {
    const checkReveals = () => {
      const vh = window.innerHeight;
      document.querySelectorAll('.reveal, .reveal-scale, .stagger-children').forEach(el => {
        if (el.getBoundingClientRect().top < vh * 0.95) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', checkReveals, { passive: true });
    const initialCheck = setTimeout(checkReveals, 300);

    return () => {
      window.removeEventListener('scroll', checkReveals);
      clearTimeout(initialCheck);
    };
  }, []);

  const portfolioImages = {
    ALL: [
      "/images/our_portfolio/Srk.jpg",
      "/images/our_portfolio/Bill clinton.jpeg",
      "/images/our_portfolio/highlights_3C1A0761.jpg",
      "/images/our_portfolio/highlights_3C1A0775.jpg",
      "/images/our_portfolio/highlights_3C1A0782.jpg",
      "/images/our_portfolio/highlights_3C1A0841.jpg",
      "/images/our_portfolio/cp-7.jpg",
      "/images/our_portfolio/cp-10.jpg",
      "/images/our_portfolio/cp-12.jpg",
      "/images/our_portfolio/rtx-1.jpg",
      "/images/our_portfolio/rtx-4.jpg",
      "/images/our_portfolio/rtx-9.jpg",
      "/images/our_portfolio/te3.jpg",
      "/images/our_portfolio/tcs3.jpg",
      "/images/our_portfolio/tcs4.jpg",
      "/images/our_portfolio/dilquar.jpg",
      "/images/our_portfolio/kareeshma.jpg",
      "/images/our_portfolio/11.jpg",
      "/images/our_portfolio/22.jpg",
      "/images/our_portfolio/33.jpg",
      "/images/our_portfolio/highlights_DSC_0038.jpg",
      "/images/our_portfolio/highlights_IMG_0037.jpg",
      "/images/our_portfolio/highlights_IMG_0069.jpg",
      "/images/our_portfolio/highlights_IMG_0098.jpg",
      "/images/our_portfolio/highlights_NMKL0031.jpg",
      "/images/our_portfolio/highlights_SKV00290.jpg",
      "/images/our_portfolio/highlights_SKV00387.jpg",
    ],
    CORPORATE: [
      "/images/our_portfolio/cp-7.jpg",
      "/images/our_portfolio/cp-10.jpg",
      "/images/our_portfolio/cp-12.jpg",
      "/images/our_portfolio/Bill clinton.jpeg",
      "/images/our_portfolio/dilquar.jpg",
      "/images/our_portfolio/kareeshma.jpg",
      "/images/tcs/TCS -27 - 03 - 2023 - Anzar/DSC01003.JPG",
      "/images/tata_elxsi/_AMZ0246.JPG",
    ],
    EVENTS: [
      "/images/our_portfolio/33.jpg",
      "/images/our_portfolio/Srk.jpg",
      "/images/our_portfolio/highlights_3C1A0761.jpg",
      "/images/our_portfolio/highlights_3C1A0775.jpg",
      "/images/our_portfolio/highlights_3C1A0782.jpg",
      "/images/our_portfolio/highlights_3C1A0841.jpg",
      "/images/cii/CII (7th Bangalore Space Expo-2022) On-05-09-2022-Noor/NMK_0028.JPG",
      "/images/presidency/PANA9115.jpg",
    ],
    INDUSTRIAL: [
      "/images/our_portfolio/rtx-1.jpg",
      "/images/our_portfolio/rtx-4.jpg",
      "/images/our_portfolio/rtx-9.jpg",
      "/images/our_portfolio/te3.jpg",
      "/images/our_portfolio/tcs3.jpg",
      "/images/our_portfolio/tcs4.jpg",
    ],
    DOCUMENTARY: [
      "/images/our_portfolio/11.jpg",
      "/images/our_portfolio/22.jpg",
      "/images/our_portfolio/highlights_DSC_0038.jpg",
      "/images/our_portfolio/highlights_IMG_0037.jpg",
      "/images/our_portfolio/highlights_IMG_0069.jpg",
      "/images/our_portfolio/highlights_IMG_0098.jpg",
      "/images/our_portfolio/highlights_NMKL0031.jpg",
      "/images/our_portfolio/highlights_SKV00290.jpg",
      "/images/our_portfolio/highlights_SKV00387.jpg",
    ]
  };

  const activeImages = portfolioImages[activeTab] || portfolioImages['ALL'];

  return (
    <main className="w-full bg-[var(--dark)] text-white min-h-screen pt-[160px] pb-[100px] cursor-none relative">
      
      {/* ─── HERO SECTION ─── */}
      <section className="px-[5%] md:px-[8%] max-w-[1400px] mx-auto mb-[100px]">
        <div className="reveal">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">
            Visual Highlights
          </span>
          <h1 className="font-serif text-[clamp(44px,6vw,80px)] font-light leading-[1.1] tracking-[-0.02em]">
            Selected Works Portfolio <br />
            <span className="italic text-[var(--gold)]">Across Decades.</span>
          </h1>
          <p className="text-[14px] leading-[1.8] text-[var(--muted)] max-w-[600px] mt-[32px] font-light">
            Explore our visual archives spanning corporate walkthroughs, high-profile events, drone industrial shoots, and brand documentary films.
          </p>
        </div>
      </section>

      {/* ─── FILTER TABS ─── */}
      <section className="px-[5%] md:px-[8%] max-w-[1400px] mx-auto mb-[60px]">
        <div className="flex flex-wrap gap-[30px] border-b border-[rgba(255,255,255,0.08)] pb-[15px] mb-[40px] reveal opacity-0 anim-fade-up">
          {['ALL', 'CORPORATE', 'EVENTS', 'INDUSTRIAL', 'DOCUMENTARY'].map((tab) => (
            <button 
              suppressHydrationWarning
              key={tab} 
              onClick={() => setActiveTab(tab)} 
              className={`text-[10px] tracking-[0.2em] uppercase pb-[15px] relative cursor-none transition-colors ${
                activeTab === tab ? 'text-[var(--gold)] font-medium' : 'text-[var(--muted)] hover:text-white'
              }`}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-[-16px] left-0 w-full h-[2px] bg-[var(--gold)]" />}
            </button>
          ))}
        </div>

        {/* ─── MASONRY IMAGE GRID ─── */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-[24px] [column-fill:_balance] w-full">
          {activeImages.map((src, idx) => (
            <div 
              key={`${activeTab}-${idx}`} 
              className="break-inside-avoid mb-[24px] relative group overflow-hidden rounded-sm border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] reveal-scale opacity-0"
              style={{ transitionDelay: `${idx * 40}ms` }}
            >
              <img 
                src={src} 
                alt={`Portfolio Work ${idx + 1}`} 
                className="w-full h-auto object-cover transition-transform duration-[800ms] group-hover:scale-105" 
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[30px]">
                <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[8px]">Project Gallery</span>
                <h4 className="font-serif text-[18px] text-white">Visual Artifact</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CONTACT SECTION ─── */}
      <section className="mt-[140px] py-[100px] px-[5%] md:px-[8%] bg-black text-center reveal border-t border-[rgba(255,255,255,0.05)]">
        <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-light text-white leading-[1.1] mb-[40px]">
          Want to see more project work?
        </h2>
        <Link href="/contact" className="inline-block border border-[rgba(197,164,109,0.5)] text-white uppercase tracking-[0.2em] text-[11px] font-semibold px-[36px] py-[18px] transition-all duration-400 hover:bg-[var(--gold)] hover:text-black hover:border-transparent cursor-none">
          Get In Touch
        </Link>
      </section>

    </main>
  );
}
