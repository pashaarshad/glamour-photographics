'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Play, X } from 'lucide-react';

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [activeVideoId, setActiveVideoId] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab');
      if (tabParam) {
        setActiveTab(tabParam.toUpperCase());
      }
    }
  }, []);

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
  }, [activeTab]);

  const videos = [
    {
      id: "doOSgmHHgD4",
      client: "PRESIDENCY PU COLLEGE, YELAHANKA",
      title: "Creating Versatile & Capable Individuals",
      desc: "A cinematic admission teaser that captures the spirit of PSPU — built to inspire the next generation of students to walk through these doors."
    },
    {
      id: "df1A-_FulEs",
      client: "PRESIDENCY SCHOOL BANGALORE",
      title: "Indian Dance — Campus Ad Shoot",
      desc: "A vibrant showcase of culture and movement — shot on campus to highlight the school's commitment to holistic, arts-driven education."
    },
    {
      id: "t07kSRBHPfg",
      client: "CGI BANGALORE",
      title: "CGI - Office Walkthrough",
      desc: "A cinematic walkthrough showcasing CGI's state-of-the-art office infrastructure, collaborative workspace, and vibrant team environment in Bangalore."
    },
    {
      id: "e5J2v1UtFW4",
      client: "TOYOTA KIRLOSKAR MOTOR",
      title: "Toyota Kirloskar - CSR",
      desc: "A heartwarming documentary showing the school transformation at GHBS Hejala under Toyota Kirloskar's CSR initiative."
    },
    {
      id: "SpD8AeoLTXw",
      client: "TATA ELXSI",
      title: "Tata Elxsi - UAV Journey",
      desc: "An in-depth look at Tata Elxsi's pioneering work in AI-driven autonomous UAV design, engineering excellence, and future mobility."
    },
    {
      id: "jlR54SuB_Rc",
      client: "CONFEDERATION OF INDIAN INDUSTRY",
      title: "CII - Space Expo 2022",
      desc: "Capturing the scale, leadership, and innovations at the 7th Bangalore Space Expo 2022 hosted by CII."
    },
    {
      id: "C0hzCKpITSE",
      client: "PAI INTERNATIONAL ELECTRONICS",
      title: "PAI - Brand Documentary",
      desc: "A compelling brand documentary outlining the 20-year retail journey, growth, and customer-first focus of PAI International Electronics."
    },
    {
      id: "XulH5TjS50k",
      client: "PRESIDENCY UNIVERSITY",
      title: "Presidency University Event Highlight",
      desc: "Visual highlights of major student festivals, academic ceremonies, and campus life at Presidency University."
    },
    {
      id: "cImmLgZo9-Y",
      client: "PRESIDENCY GROUP OF SCHOOLS",
      title: "Presidency Schools Annual Day",
      desc: "Visual highlights capturing the creativity, talent, and celebratory performances of the Presidency annual gathering."
    },
    {
      id: "xzKI4XmfFus",
      client: "PAI INTERNATIONAL MOBILE CARNIVAL",
      title: "PAI International Mobile Festival",
      desc: "A high-energy commercial showcasing PAI's mobile carnival offers, customer rush, and massive electronics giveaways."
    },
    {
      id: "av9FhaYzDuA",
      client: "PAI INTERNATIONAL CELEBRATIONS",
      title: "PAI International Lucky Draw Celebration",
      desc: "Capturing the excitement and transparency of PAI's quarterly genuine lucky coupon draw event with live customer interactions."
    }
  ];

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
    <main className="w-full bg-[var(--dark)] text-[var(--light)] min-h-screen pt-[160px] pb-[100px] cursor-none relative">
      
      {/* ─── HERO SECTION ─── */}
      <section className="px-[5%] md:px-[8%] max-w-[1400px] mx-auto mb-[100px]">
        <div className="reveal">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">
            Visual Highlights
          </span>
          <h1 className="font-serif text-[clamp(44px,6vw,80px)] font-light leading-[1.1] tracking-[-0.02em] text-[var(--light)]">
            {activeTab === 'VIDEOS' ? (
              <>
                See the Stories <br />
                <span className="italic text-[var(--gold)]">We've Told.</span>
              </>
            ) : (
              <>
                Selected Works Portfolio <br />
                <span className="italic text-[var(--gold)]">Across Decades.</span>
              </>
            )}
          </h1>
          <p className="text-[14px] leading-[1.8] text-[var(--muted)] max-w-[600px] mt-[32px] font-light">
            {activeTab === 'VIDEOS' ? (
              "A curated selection of films produced for our brand partners — each one crafted to capture the spirit of the institution and connect with audiences."
            ) : (
              "Explore our visual archives spanning corporate walkthroughs, high-profile events, drone industrial shoots, and brand documentary films."
            )}
          </p>
        </div>
      </section>

      {/* ─── FILTER TABS ─── */}
      <section className="px-[5%] md:px-[8%] max-w-[1400px] mx-auto mb-[60px]">
        <div className="flex flex-wrap gap-[30px] border-b border-[rgba(10,10,10,0.08)] pb-[15px] mb-[40px] reveal opacity-0 anim-fade-up">
          {['ALL', 'VIDEOS', 'CORPORATE', 'EVENTS', 'INDUSTRIAL', 'DOCUMENTARY'].map((tab) => (
            <button 
              suppressHydrationWarning
              key={tab} 
              onClick={() => setActiveTab(tab)} 
              className={`text-[10px] tracking-[0.2em] uppercase pb-[15px] relative cursor-none transition-colors ${
                activeTab === tab ? 'text-[var(--gold)] font-medium' : 'text-[var(--muted)] hover:text-[var(--light)]'
              }`}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-[-16px] left-0 w-full h-[2px] bg-[var(--gold)]" />}
            </button>
          ))}
        </div>

        {/* ─── VIDEOS GRID ─── */}
        {activeTab === 'VIDEOS' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] lg:gap-[60px] w-full">
            {videos.map((vid, idx) => (
              <div 
                key={idx} 
                className="group cursor-none flex flex-col reveal opacity-0 anim-fade-up"
                style={{ animationDelay: `${idx * 75}ms` }}
                onClick={() => setActiveVideoId(vid.id)}
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-video rounded-sm overflow-hidden border border-[rgba(10,10,10,0.06)] bg-black shadow-[0_12px_32px_rgba(0,0,0,0.03)]">
                  <img 
                    src={`https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`} 
                    alt={vid.title} 
                    className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.03] opacity-85 group-hover:opacity-100"
                    loading="lazy"
                  />
                  {/* YouTube Tag Overlay */}
                  <div className="absolute top-[16px] right-[16px] bg-black/60 backdrop-blur-sm text-[8px] tracking-[0.25em] font-bold text-white px-[12px] py-[5px] rounded-sm uppercase z-10">
                    YOUTUBE
                  </div>
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/35 transition-colors duration-300">
                    <div className="w-[54px] h-[54px] rounded-full border border-[var(--gold)] flex items-center justify-center bg-black/40 text-[var(--gold)] transition-transform duration-300 group-hover:scale-110 shadow-lg">
                      <Play className="w-[18px] h-[18px] fill-current translate-x-[2px]" />
                    </div>
                  </div>
                </div>

                {/* Info block */}
                <div className="pt-[20px] flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--gold)] font-semibold block">
                      {vid.client}
                    </span>
                    <h3 className="font-serif text-[22px] md:text-[24px] font-bold text-[var(--light)] mt-[8px] leading-[1.3] group-hover:text-[var(--gold)] transition-colors duration-300">
                      {vid.title}
                    </h3>
                    <p className="text-[13.5px] leading-[1.7] text-[var(--muted)] mt-[10px] font-light max-w-[90%]">
                      {vid.desc}
                    </p>
                  </div>
                  <button className="text-[10px] tracking-[0.2em] uppercase font-bold text-[var(--light)] hover:text-[var(--gold)] mt-[20px] flex items-center gap-[8px] transition-colors cursor-none w-fit">
                    <Play className="w-[10px] h-[10px] fill-current" /> Watch On YouTube
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ─── 5-IMAGE SECTION BLOCKS ─── */
          (() => {
            if (activeImages.length < 5) {
              return (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
                  {activeImages.map((src, idx) => (
                    <div key={idx} className="relative aspect-[1.4] group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] shadow-[0_4px_20px_rgba(0,0,0,0.02)] reveal opacity-0 anim-fade-up" style={{ animationDelay: `${idx * 50}ms` }}>
                      <img src={src} alt="Portfolio Work" className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-105" />
                    </div>
                  ))}
                </div>
              );
            }

            const block1 = activeImages.slice(0, 5);
            const hasBlock2 = activeImages.length >= 10;
            const block2 = hasBlock2 ? activeImages.slice(5, 10) : [];
            const remaining = activeImages.slice(hasBlock2 ? 10 : 5);

            return (
              <div className="w-full flex flex-col gap-[24px]">
                {/* BLOCK 1 (5 Images: 1 Vertical, 4 Horizontal) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] items-stretch w-full">
                  {/* Left: 1 Vertical (Image 0) */}
                  <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] h-full min-h-[320px] md:min-h-0 shadow-[0_4px_20px_rgba(0,0,0,0.02)] reveal opacity-0 anim-fade-up">
                    <img src={block1[0]} alt="Portfolio Work" className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]" />
                  </div>
                  {/* Right: 4 Horizontal (Images 1, 2, 3, 4) */}
                  {block1.slice(1).map((src, idx) => (
                    <div key={idx} className="relative aspect-[1.4] group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] shadow-[0_4px_20px_rgba(0,0,0,0.02)] reveal opacity-0 anim-fade-up" style={{ animationDelay: `${idx * 50}ms` }}>
                      <img src={src} alt="Portfolio Work" className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]" />
                    </div>
                  ))}
                </div>

                {/* BLOCK 2 (5 Images: 1 Vertical, 4 Horizontal) */}
                {hasBlock2 && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] items-stretch w-full">
                    {/* Left: 1 Vertical (Image 5) */}
                    <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] h-full min-h-[320px] md:min-h-0 shadow-[0_4px_20px_rgba(0,0,0,0.02)] reveal opacity-0 anim-fade-up" style={{ animationDelay: '50ms' }}>
                      <img src={block2[0]} alt="Portfolio Work" className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]" />
                    </div>
                    {/* Right: 4 Horizontal (Images 6, 7, 8, 9) */}
                    {block2.slice(1).map((src, idx) => (
                      <div key={idx} className="relative aspect-[1.4] group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] shadow-[0_4px_20px_rgba(0,0,0,0.02)] reveal opacity-0 anim-fade-up" style={{ animationDelay: `${(idx + 1) * 50}ms` }}>
                        <img src={src} alt="Portfolio Work" className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]" />
                      </div>
                    ))}
                  </div>
                )}

                {/* REMAINING IMAGES (Standard 3-Column Grid) */}
                {remaining.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
                    {remaining.map((src, idx) => (
                      <div key={idx} className="relative aspect-[1.4] group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] shadow-[0_4px_20px_rgba(0,0,0,0.02)] reveal opacity-0 anim-fade-up" style={{ animationDelay: `${idx * 50}ms` }}>
                        <img src={src} alt="Portfolio Work" className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })()
        )}
      </section>

      {/* ─── CONTACT SECTION ─── */}
      <section className="mt-[140px] py-[100px] px-[5%] md:px-[8%] bg-[var(--darker)] text-center reveal border-t border-[rgba(10,10,10,0.06)]">
        <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-light text-[var(--light)] leading-[1.1] mb-[40px]">
          Want to see more project work?
        </h2>
        <Link href="/contact" className="inline-block border border-[rgba(10,10,10,0.15)] text-[var(--light)] uppercase tracking-[0.2em] text-[11px] font-semibold px-[36px] py-[18px] transition-all duration-400 hover:bg-[var(--light)] hover:text-[var(--dark)] hover:border-transparent cursor-none">
          Get In Touch
        </Link>
      </section>

      {/* ─── YOUTUBE LIGHTBOX OVERLAY ─── */}
      {activeVideoId && (
        <div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-[20px] transition-all">
          <button 
            suppressHydrationWarning
            onClick={() => setActiveVideoId(null)} 
            className="absolute top-[30px] right-[5%] md:right-[8%] text-white text-[12px] tracking-[0.2em] uppercase flex items-center gap-[8px] cursor-none hover:text-[var(--gold)]"
          >
            Close <X className="w-[16px] h-[16px]" />
          </button>
          <div className="w-full max-w-[960px] aspect-video rounded-sm overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-2xl relative">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
              title="YouTube video player"
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
