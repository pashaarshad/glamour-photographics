'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Camera, Video, Calendar, Aperture, Building2, Film, Play, X, User, MapPin } from 'lucide-react';

import 'swiper/css';

// Custom Count Up Hook for Stats Animation
function useCountUp(endVal, duration = 1800, trigger = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) {
      setCount(0);
      return;
    }
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);
      setCount(Math.floor(progressPercentage * endVal));
      if (progressPercentage < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [endVal, duration, trigger]);
  return count;
}

export default function Home() {
  const [activePortfolioTab, setActivePortfolioTab] = useState('ALL');
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [statsTriggered, setStatsTriggered] = useState(false);
  const [activeCert, setActiveCert] = useState(null);
  
  const statsRef = useRef(null);

  useEffect(() => {
    const checkReveals = () => {
      const vh = window.innerHeight;
      document.querySelectorAll('.reveal, .reveal-left, .reveal-scale, .stagger-children, .img-mask').forEach(el => {
        if (el.getBoundingClientRect().top < vh * 0.95) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', checkReveals, { passive: true });
    const initialCheck = setTimeout(checkReveals, 300);

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setStatsTriggered(true);
      }
    }, { threshold: 0.15 });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      window.removeEventListener('scroll', checkReveals);
      observer.disconnect();
      clearTimeout(initialCheck);
    };
  }, []);

  const experienceCount = useCountUp(40, 1800, statsTriggered);
  const clientsCount = useCountUp(500, 1800, statsTriggered);
  const projectsCount = useCountUp(1200, 1800, statsTriggered);
  const weddingsCount = useCountUp(300, 1800, statsTriggered);

  const portfolioImages = {
    ALL: [
      "/images/our_portfolio/highlights_3C1A0761.jpg",
      "/images/our_portfolio/highlights_3C1A0775.jpg",
      "/images/our_portfolio/11.jpg",
      "/images/our_portfolio/highlights_3C1A0782.jpg",
      "/images/our_portfolio/22.jpg",
      "/images/our_portfolio/highlights_3C1A0841.jpg",
      "/images/our_portfolio/33.jpg",
      "/images/our_portfolio/rtx-1.jpg",
      "/images/our_portfolio/te3.jpg",
      "/images/our_portfolio/dilquar.jpg",
      "/images/our_portfolio/Srk.jpg",
      "/images/our_portfolio/Bill clinton.jpeg",
      "/images/our_portfolio/cp-7.jpg",
      "/images/our_portfolio/cp-10.jpg"
    ],
    CORPORATE: [
      "/images/our_portfolio/cp-7.jpg",
      "/images/our_portfolio/cp-10.jpg",
      "/images/our_portfolio/Bill clinton.jpeg",
      "/images/our_portfolio/dilquar.jpg"
    ],
    EVENTS: [
      "/images/our_portfolio/33.jpg",
      "/images/our_portfolio/Srk.jpg",
      "/images/our_portfolio/highlights_3C1A0761.jpg",
      "/images/our_portfolio/highlights_3C1A0775.jpg",
      "/images/our_portfolio/highlights_3C1A0782.jpg"
    ],
    INDUSTRIAL: [
      "/images/our_portfolio/rtx-1.jpg",
      "/images/our_portfolio/te3.jpg"
    ],
    DOCUMENTARY: [
      "/images/our_portfolio/11.jpg",
      "/images/our_portfolio/22.jpg",
      "/images/our_portfolio/highlights_3C1A0841.jpg"
    ]
  };

  const activeImages = portfolioImages[activePortfolioTab] || portfolioImages['ALL'];

  return (
    <main className="w-full bg-[var(--dark)] text-[var(--light)] min-h-screen pt-0 pb-[100px] cursor-none relative">
      
      {/* ─── 1. HERO SECTION ─── */}
      <section className="px-[4%] md:px-[5%] max-w-[1600px] mx-auto pt-[150px] pb-[80px] relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] items-center">
          
          {/* Left Column: Heading and Info */}
          <div className="lg:col-span-5 reveal z-20">
            <h1 className="font-serif text-[clamp(44px,5.5vw,76px)] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--light)] mb-[24px]">
              We Capture <br />
              <span className="text-[var(--gold)] italic font-light">Moments.</span> <br />
              We Create <br />
              <span className="text-[var(--gold)] italic font-light">Legacies.</span>
            </h1>
            
            <p className="text-[14.5px] text-[var(--muted)] leading-relaxed font-semibold mb-[32px] max-w-[420px]">
              40+ Years of Storytelling <br />
              Through The Lens of Excellence
            </p>
            
            {/* Watch Showreel Link */}
            <button 
              suppressHydrationWarning
              onClick={() => setShowreelOpen(true)}
              className="flex items-center gap-[12px] text-[11px] tracking-[0.2em] uppercase text-[var(--light)] font-bold mb-[48px] hover:text-[var(--gold)] cursor-none transition-colors"
            >
              <span className="w-[38px] h-[38px] rounded-full bg-[var(--gold)] flex items-center justify-center text-white shrink-0 shadow-sm shadow-[var(--gold)]/20">
                <Play className="w-[12px] h-[12px] fill-current translate-x-[1.5px]" />
              </span>
              Watch Our Showreel
            </button>
            
            {/* Categories Grid (2 rows, 4 columns) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-[8px]">
              {[
                { title: "Corporate Films", icon: Video },
                { title: "Wedding Photography", icon: Camera },
                { title: "Event Coverage", icon: Calendar },
                { title: "Digital Advertising", icon: Aperture },
                { title: "Documentary Films", icon: Film },
                { title: "Studio Portraits", icon: User },
                { title: "Photo Restoration", icon: Camera }
              ].map((cat, idx) => (
                <div key={idx} className="bg-white border border-[rgba(10,10,10,0.06)] rounded-[3px] p-[12px] flex flex-col items-center text-center justify-center hover:border-[var(--gold)] transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.01)] min-h-[75px]">
                  <cat.icon className="w-[18px] h-[18px] text-[var(--gold)] mb-[6px]" />
                  <span className="text-[9px] tracking-[0.05em] uppercase font-extrabold text-[var(--light)] leading-tight">{cat.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Middle Column: Large Camera Rig */}
          <div className="lg:col-span-5 relative reveal flex items-center justify-center z-10 px-[10px]">
            <img 
              src="/images/hero-camera.png" 
              alt="Professional Cinema Camera Rig" 
              className="w-full h-auto max-h-[600px] object-contain" 
              onError={(e) => {
                e.target.src = "/images/about-hero-double-exposure.png";
              }}
            />
          </div>
          
          {/* Right Column: Narrow Film Reel Marquee */}
          <div className="lg:col-span-2 reveal flex justify-center lg:justify-end items-center h-[520px]">
            <div className="w-[140px] h-[520px] overflow-hidden relative bg-[#E2D8C9] border border-[rgba(10,10,10,0.08)] rounded-[4px] py-[15px] px-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.03)] flex flex-col justify-between">
              {/* White Square Sprocket Holes */}
              <div className="absolute left-[4px] top-0 bottom-0 flex flex-col justify-between py-[12px] select-none pointer-events-none z-20">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div key={i} className="w-[8px] h-[8px] bg-white rounded-[1px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.08)]" />
                ))}
              </div>
              <div className="absolute right-[4px] top-0 bottom-0 flex flex-col justify-between py-[12px] select-none pointer-events-none z-20">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div key={i} className="w-[8px] h-[8px] bg-white rounded-[1px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.08)]" />
                ))}
              </div>
              
              {/* Vertical Loop */}
              <div className="h-full overflow-hidden relative z-10 select-none">
                <div className="flex flex-col gap-[15px] animate-marquee-vertical">
                  {[
                    { type: 'img', src: "/images/our_portfolio/highlights_3C1A0761.jpg" },
                    { type: 'img', src: "/images/our_portfolio/highlights_3C1A0775.jpg" },
                    { type: 'img', src: "/images/our_portfolio/11.jpg" },
                    { type: 'img', src: "/images/our_portfolio/highlights_3C1A0782.jpg" },
                    { type: 'badge' },
                    { type: 'img', src: "/images/our_portfolio/22.jpg" },
                    { type: 'img', src: "/images/our_portfolio/highlights_3C1A0841.jpg" },
                    { type: 'img', src: "/images/our_portfolio/33.jpg" },
                    { type: 'img', src: "/images/our_portfolio/rtx-1.jpg" },
                    { type: 'badge' }
                  ].map((item, idx) => {
                    if (item.type === 'img') {
                      return (
                        <div key={idx} className="w-full aspect-[4/3] bg-black overflow-hidden relative border border-[rgba(10,10,10,0.12)] rounded-[3px] shrink-0">
                          <img 
                            src={item.src} 
                            alt={`Film Strip Frame ${idx + 1}`} 
                            className="w-full h-full object-cover opacity-100" 
                          />
                        </div>
                      );
                    } else {
                      return (
                        <div key={idx} className="w-full bg-[#D6CBBF] border border-[rgba(10,10,10,0.06)] rounded-[3px] py-[14px] px-[8px] text-center shrink-0 flex flex-col justify-center items-center">
                          <span className="font-serif text-[24px] font-bold text-[#1A1A1A] leading-none mb-[2px]">40+</span>
                          <span className="text-[8px] tracking-[0.1em] uppercase text-[#3A3530] font-bold leading-tight">Years Of</span>
                          <span className="text-[8px] tracking-[0.1em] uppercase text-[#3A3530] font-bold leading-tight">Storytelling</span>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
            
            <style suppressHydrationWarning>{`
              @keyframes marquee-vertical {
                0% { transform: translateY(0); }
                100% { transform: translateY(-50%); }
              }
              .animate-marquee-vertical {
                animation: marquee-vertical 28s linear infinite;
              }
              .animate-marquee-vertical:hover {
                animation-play-state: paused;
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* ─── 2. THREE-COLUMN STATS & FOUNDER SECTION ─── */}
      <section ref={statsRef} className="py-[100px] px-[4%] md:px-[5%] max-w-[1600px] mx-auto border-t border-[rgba(10,10,10,0.06)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] items-start">
          
          {/* Column 1: We Don't Just Shoot */}
          <div className="lg:col-span-4 reveal">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block font-semibold">
              We Don't Just Shoot
            </span>
            <h2 className="font-serif text-[38px] font-bold leading-[1.1] tracking-[-0.01em] text-[var(--light)] mb-[24px]">
              We Tell Stories <br />
              <span className="italic text-[var(--gold)] font-light">That Stay.</span>
            </h2>
            <p className="text-[13.5px] leading-[1.8] text-[var(--muted)] mb-[32px] font-semibold max-w-[340px]">
              From corporate documentaries that build trust, to powerful commercials and premium event storytelling, we capture moments that create long-lasting brand legacies.
            </p>
            <Link href="/portfolio" className="inline-flex items-center justify-center border border-[rgba(10,10,10,0.15)] text-[var(--light)] text-[10px] tracking-[0.2em] uppercase py-[14px] px-[28px] hover:bg-[var(--light)] hover:text-[var(--dark)] transition-all duration-300 cursor-none font-bold">
              Explore Our Work &rarr;
            </Link>
          </div>
          
          {/* Column 2: Four Decades of Visual Excellence */}
          <div className="lg:col-span-5 reveal">
            <h3 className="font-serif text-[30px] font-bold leading-[1.2] text-[var(--light)] mb-[24px]">
              Four Decades of <br />
              <span className="italic text-[var(--gold)] font-light">Visual Excellence</span>
            </h3>
            <p className="text-[13px] leading-[1.8] text-[var(--muted)] mb-[30px] font-semibold">
              Glamour Photographics, established by Hameed Hussain in 1982, has built a legacy of capturing the most meaningful moments for corporate clients and families across India.
            </p>
            
            {/* Stats Counters Grid (2x2) */}
            <div className="grid grid-cols-2 gap-[16px] mb-[30px]">
              <div className="bg-white border border-[rgba(10,10,10,0.06)] p-[20px] rounded-sm">
                <span className="font-serif text-[32px] text-[var(--light)] font-bold block leading-none">{experienceCount}+</span>
                <span className="text-[9px] tracking-[0.15em] uppercase text-gray-400 block mt-[4px]">Years of Experience</span>
              </div>
              <div className="bg-white border border-[rgba(10,10,10,0.06)] p-[20px] rounded-sm">
                <span className="font-serif text-[32px] text-[var(--light)] font-bold block leading-none">{clientsCount}+</span>
                <span className="text-[9px] tracking-[0.15em] uppercase text-gray-400 block mt-[4px]">Clients Served</span>
              </div>
              <div className="bg-white border border-[rgba(10,10,10,0.06)] p-[20px] rounded-sm">
                <span className="font-serif text-[32px] text-[var(--light)] font-bold block leading-none">{projectsCount}+</span>
                <span className="text-[9px] tracking-[0.15em] uppercase text-gray-400 block mt-[4px]">Corporate Projects</span>
              </div>
              <div className="bg-white border border-[rgba(10,10,10,0.06)] p-[20px] rounded-sm">
                <span className="font-serif text-[32px] text-[var(--light)] font-bold block leading-none">{weddingsCount}+</span>
                <span className="text-[9px] tracking-[0.15em] uppercase text-gray-400 block mt-[4px]">Weddings Captured</span>
              </div>
            </div>
            
            <Link href="/about" className="inline-flex items-center justify-center border border-[rgba(10,10,10,0.15)] text-[var(--light)] text-[10px] tracking-[0.2em] uppercase py-[14px] px-[28px] hover:bg-[var(--light)] hover:text-[var(--dark)] transition-all duration-300 cursor-none font-bold">
              Our Story &rarr;
            </Link>
          </div>
          
          {/* Column 3: Founder Card with Signature & Portrait */}
          <div className="lg:col-span-3 reveal">
            <div className="bg-white border border-[rgba(10,10,10,0.06)] rounded-[4px] p-[24px] flex items-center justify-between shadow-[0_4px_24px_rgba(0,0,0,0.015)] hover:border-[var(--gold)] transition-all duration-300 h-[280px] relative overflow-hidden group">
              {/* Left inner side: Info and Signature */}
              <div className="flex flex-col justify-between h-full z-10 w-[55%]">
                <div>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-gray-400 block mb-[4px]">Founder</span>
                  <h4 className="font-serif text-[18px] text-[var(--light)] font-bold leading-tight mb-[2px]">Hameed Hussain</h4>
                  <p className="text-[9px] tracking-[0.1em] uppercase text-[var(--gold)] font-bold mb-[10px]">Creative Visionary</p>
                  <p className="text-[11px] text-[var(--muted)] leading-relaxed font-semibold">Est. 1982 Bangalore</p>
                </div>
                <img 
                  src="/images/signature.png" 
                  alt="Founder Signature" 
                  className="h-[36px] w-auto object-contain select-none pointer-events-none mt-[10px] block" 
                />
              </div>
              
              {/* Right inner side: Floating Portrait */}
              <div className="w-[42%] h-full relative overflow-hidden rounded-[2px] border border-[rgba(10,10,10,0.06)] bg-gray-50 shrink-0">
                <img 
                  src="/logo-clients/founder-ceo.jpg" 
                  alt="Hameed Hussain CEO Portrait" 
                  className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* ─── 3. FEATURED WORK (LIGHT THEMED ACCORDION/SLIDER) ─── */}
      <section className="py-[100px] px-[4%] md:px-[5%] max-w-[1600px] mx-auto border-t border-[rgba(10,10,10,0.06)]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[60px] gap-[20px]">
          <div className="reveal">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block font-semibold">
              Featured Work
            </span>
            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-bold leading-[1.2] text-[var(--light)]">
              Stories We've Brought to Life
            </h2>
          </div>
          <div className="reveal">
            <Link href="/corporate" className="text-[10px] tracking-[0.25em] uppercase font-bold py-[12px] px-[24px] border border-[rgba(10,10,10,0.15)] text-[var(--light)] hover:bg-[var(--light)] hover:text-[var(--dark)] cursor-none transition-all">
              View All Projects
            </Link>
          </div>
        </div>

        <div className="reveal">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="featured-swiper"
          >
            {[
              { title: "CII - Space Expo 2022", slug: "cii", vidId: "jlR54SuB_Rc", type: "Event Coverage" },
              { title: "CGI - Office Walkthrough", slug: "cgi", vidId: "t07kSRBHPfg", type: "Corporate Tour" },
              { title: "Toyota Kirloskar - CSR", slug: "toyota", vidId: "e5J2v1UtFW4", type: "Documentary Film" },
              { title: "Tata Elxsi - UAV Journey", slug: "tata-elxsi", vidId: "SpD8AeoLTXw", type: "UAV Innovation" },
              { title: "PAI - Brand Documentary", slug: "pai", vidId: "C0hzCKpITSE", type: "Retail Journey" },
            ].map((project, idx) => (
              <SwiperSlide key={idx}>
                <div className="group relative bg-white border border-[rgba(10,10,10,0.06)] rounded-sm overflow-hidden flex flex-col h-[380px] shadow-[0_4px_24px_rgba(0,0,0,0.01)] hover:border-[var(--gold)] transition-colors duration-450">
                  {/* Video Player */}
                  <div className="h-[210px] w-full relative overflow-hidden bg-black">
                    <iframe
                      className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      src={`https://www.youtube.com/embed/${project.vidId}?controls=0&modestbranding=1&rel=0`}
                      title={project.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  
                  {/* Card Info */}
                  <div className="p-[28px] flex-1 flex flex-col justify-between bg-white">
                    <div>
                      <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[8px] block font-bold">
                        {project.type}
                      </span>
                      <h3 className="font-serif text-[20px] text-[var(--light)] leading-[1.3] group-hover:text-[var(--gold)] transition-colors font-bold">
                        {project.title}
                      </h3>
                    </div>
                    <Link href={`/corporate/${project.slug}`} className="text-[10px] tracking-[0.2em] uppercase text-[var(--light)] font-bold inline-flex items-center gap-[8px] cursor-none border-b border-transparent hover:border-[var(--light)] w-fit">
                      Read Project details <span>→</span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ─── 4. SERVICES CATEGORIES (WHAT WE DO) ─── */}
      <section className="py-[100px] px-[4%] md:px-[5%] max-w-[1600px] mx-auto border-t border-[rgba(10,10,10,0.06)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[60px] items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 reveal">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block font-semibold">Services</span>
            <h2 className="font-serif text-[42px] font-bold leading-[1.2] text-[var(--light)] mb-[24px]">Categories</h2>
            <h3 className="font-serif text-[22px] italic text-[var(--gold)] leading-none font-light mb-[32px]">What We Do</h3>
          </div>
          
          {/* Right Column: Services Grid Row (8 items) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-[30px] reveal">
            {[
              { title: "Corporate Photography", icon: Camera, desc: "High-end corporate headshots, facility walkthroughs, products and branding campaigns." },
              { title: "Cinematic Videography", icon: Video, desc: "High-impact brand videos, showreels, office tour media and documentaries." },
              { title: "Event Coverage", icon: Calendar, desc: "Premium documentation of corporate summits, conventions, and milestone ceremonies." },
              { title: "Aerial Shoots", icon: Aperture, desc: "Certified industrial drone flights mapping massive campuses and aerial geography." },
              { title: "Industrial Photography", icon: Building2, desc: "Raw visual documentation for factories, power plants, and technology infrastructure." },
              { title: "Brand Storytelling", icon: Film, desc: "Custom scriptwriting and visual conceptualization bringing corporate identity to life." },
              { title: "Photo Restoration", icon: Camera, desc: "Expert restoration of old photographs and legacy film rolls with care." },
              { title: "Studio Portraits", icon: User, desc: "Executive portraits, fashion shoots, and professional branding sessions." }
            ].map((srv, idx) => (
              <div key={idx} className="flex gap-[20px] items-start group p-[20px] bg-white border border-[rgba(10,10,10,0.06)] rounded-sm hover:border-[var(--gold)] transition-colors duration-450 shadow-[0_4px_24px_rgba(0,0,0,0.01)]">
                <div className="w-[45px] h-[45px] rounded-full bg-[rgba(197,164,109,0.1)] flex items-center justify-center text-[var(--gold)] shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <srv.icon className="w-[20px] h-[20px]" />
                </div>
                <div>
                  <h4 className="text-[17px] font-serif text-[var(--light)] mb-[8px] font-bold group-hover:text-[var(--gold)] transition-colors">{srv.title}</h4>
                  <p className="text-[12.5px] text-[var(--muted)] leading-relaxed font-semibold">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. OUR TRUSTED CLIENTS (MARQUEE SLIDER) ─── */}
      <section className="py-[80px] bg-white border-y border-[rgba(10,10,10,0.06)] relative z-25">
        <div className="max-w-[1600px] mx-auto px-[4%] md:px-[5%] flex flex-col md:flex-row items-center gap-[40px]">
          <span className="text-[10px] tracking-[0.25em] uppercase text-gray-400 font-bold shrink-0">Our Trusted Clients —</span>
          <div className="flex-1 overflow-hidden relative">
            <div className="flex gap-[60px] items-center animate-marquee-clients">
              {[
                { name: "CII", logo: "/logo-clients/cii.jpg" },
                { name: "CGI", logo: "/logo-clients/CGI_Inc.-Logo.wine.png" },
                { name: "Toyota", logo: "" },
                { name: "RTX", logo: "/logo-clients/RTX.webp" },
                { name: "TCS", logo: "/logo-clients/TCS_NewLogo_Final_RGB.png" },
                { name: "TATA ELXSI", logo: "/logo-clients/tata-elxsi-moves-focus-away-from-driverless-tech.avif" },
                { name: "Presidency University", logo: "/logo-clients/presidency-university-yelahanka-bangalore-universities-si0nhgmmkz.jpg" },
                { name: "PAI", logo: "" },
                // duplicate
                { name: "CII", logo: "/logo-clients/cii.jpg" },
                { name: "CGI", logo: "/logo-clients/CGI_Inc.-Logo.wine.png" },
                { name: "Toyota", logo: "" },
                { name: "RTX", logo: "/logo-clients/RTX.webp" },
                { name: "TCS", logo: "/logo-clients/TCS_NewLogo_Final_RGB.png" },
                { name: "TATA ELXSI", logo: "/logo-clients/tata-elxsi-moves-focus-away-from-driverless-tech.avif" },
                { name: "Presidency University", logo: "/logo-clients/presidency-university-yelahanka-bangalore-universities-si0nhgmmkz.jpg" },
                { name: "PAI", logo: "" }
              ].map((client, i) => (
                <div key={i} className="h-[75px] shrink-0 flex items-center justify-center">
                  {client.logo ? (
                    <img src={client.logo} alt={client.name} className="max-h-[58px] max-w-[160px] object-contain transition-all duration-300 hover:scale-105" />
                  ) : (
                    <span className="font-serif text-[18px] font-bold text-gray-400 uppercase tracking-widest">{client.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <style suppressHydrationWarning>{`
          @keyframes marquee-clients {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-clients {
            display: flex;
            width: max-content;
            animation: marquee-clients 20s linear infinite;
          }
          .animate-marquee-clients:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* ─── 6. OUR PORTFOLIO (UNIFORM GRID FILTER) ─── */}
      <section className="py-[100px] px-[4%] md:px-[5%] max-w-[1600px] mx-auto border-t border-[rgba(10,10,10,0.06)]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[40px] gap-[20px]">
          <h3 className="text-[28px] font-serif text-[var(--light)] font-bold reveal">Our Portfolio</h3>
          <div className="flex flex-wrap gap-[20px] border-b border-[rgba(10,10,10,0.08)] pb-[10px] reveal">
            {['ALL', 'CORPORATE', 'EVENTS', 'INDUSTRIAL', 'DOCUMENTARY'].map((tab) => (
              <button 
                suppressHydrationWarning
                key={tab} 
                onClick={() => setActivePortfolioTab(tab)} 
                className={`text-[9px] tracking-[0.2em] uppercase pb-[10px] relative cursor-none font-bold ${activePortfolioTab === tab ? 'text-[var(--gold)]' : 'text-[var(--muted)] hover:text-[var(--light)]'}`}
              >
                {tab}
                {activePortfolioTab === tab && <div className="absolute bottom-[-11px] left-0 w-full h-[2px] bg-[var(--gold)]" />}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-[16px] w-full">
          {activeImages.slice(0, 14).map((src, idx) => (
            <div key={idx} className="relative aspect-[3/4] group overflow-hidden rounded-[2px] border border-[rgba(10,10,10,0.06)] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
              <img src={src} alt={`Portfolio Image ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[15px]">
                <span className="text-[8px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[4px] font-bold">Focus Spotlight</span>
                <h4 className="font-serif text-[14px] text-white font-medium leading-none">Visual Capture</h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-[48px] reveal">
          <Link href="/portfolio" className="inline-flex items-center justify-center bg-[var(--gold)] text-white uppercase tracking-[0.2em] text-[11px] font-bold px-[36px] py-[16px] transition-all duration-400 hover:bg-black hover:text-white cursor-none">
            Explore More Work &rarr;
          </Link>
        </div>
      </section>

      {/* ─── 7. OUR TEAM (SEPARATED SECTION) ─── */}
      <section className="py-[100px] px-[4%] md:px-[5%] max-w-[1600px] mx-auto border-t border-[rgba(10,10,10,0.06)] bg-[var(--darker)] rounded-sm">
        <div className="mb-[60px] reveal">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block font-semibold">Minds Behind the Lenses</span>
          <h2 className="font-serif text-[38px] font-bold leading-[1.2] text-[var(--light)]">Our Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {[
            { name: "Hameed Hussain", role: "Founder & Director", img: "/logo-clients/founder-ceo.jpg" },
            { name: "Ansar Hussain", role: "Creative Lead", img: "/logo-clients/founder-ceo.jpg" },
            { name: "Zia Hussain", role: "Head of Operations", img: "/logo-clients/founder-ceo.jpg" }
          ].map((member, idx) => (
            <div key={idx} className="group relative rounded-sm overflow-hidden bg-white border border-[rgba(10,10,10,0.06)] hover:border-[var(--gold)] transition-all duration-500 cursor-none flex flex-col">
              <div className="h-[340px] w-full overflow-hidden relative">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--darker)] via-transparent to-transparent opacity-75" />
              </div>
              <div className="p-[24px]">
                <span className="text-[9px] tracking-[0.25em] uppercase text-[var(--gold)] mb-[8px] block font-bold">{member.role}</span>
                <h3 className="font-serif text-[22px] text-[var(--light)] group-hover:text-[var(--gold)] transition-colors leading-[1.2] font-bold">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 8. TESTIMONIALS LOGO SLIDER (SEPARATED SECTION) ─── */}
      <section className="py-[100px] px-[4%] md:px-[5%] bg-[var(--dark)] border-t border-[rgba(10,10,10,0.06)]">
        <div className="max-w-[1600px] mx-auto reveal">
          <div className="text-center mb-[40px]">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--gold)] mb-[12px] block font-semibold">
              Associated Dignitaries —
            </span>
            <h2 className="font-serif text-[38px] font-bold uppercase tracking-wider text-[var(--light)] mb-[16px]">
              Testimonials
            </h2>
            <div className="w-[80px] h-[2px] bg-[var(--gold)] mx-auto"></div>
          </div>
          
          <div className="w-full">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={2}
              loop={true}
              speed={600}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnHover: true
              }}
              breakpoints={{
                600: { slidesPerView: 4, spaceBetween: 24 },
                1024: { slidesPerView: 6, spaceBetween: 24 }
              }}
              className="logo-swiper py-[20px]"
            >
              {[
                { name: "Prince of Wales", logo: "/testimonials/logo-prince-of-wales.png", cert: "/testimonials/cert-prince-of-wales.jpg" },
                { name: "ITC Limited", logo: "/testimonials/logo-itc.jpg", cert: "/testimonials/cert-itc.jpg" },
                { name: "Univ. of Exeter", logo: "/testimonials/logo-exeter.png", cert: "/testimonials/cert-exeter.jpg" },
                { name: "Le Méridien", logo: "/testimonials/logo-le-meridian.png", cert: "/testimonials/cert-le-meridian.jpg" },
                { name: "Essae", logo: "/testimonials/logo-essae.png", cert: "/testimonials/cert-essae.jpg" },
                { name: "Baldwins", logo: "/testimonials/logo-baldwins.jpg", cert: "/testimonials/cert-baldwins.jpg" },
                { name: "BIAL", logo: "/testimonials/logo-bial.png", cert: "/testimonials/cert-bial.jpg" },
                { name: "GE", logo: "/testimonials/logo-ge.png", cert: "/testimonials/cert-ge.jpg" },
                { name: "DNA Networks", logo: "/testimonials/logo-dna-networks.png", cert: "/testimonials/cert-dna-networks.jpg" },
                { name: "Windsor Manor", logo: "/testimonials/logo-windsor-manor.png", cert: "/testimonials/cert-windsor-manor.jpg" }
              ].map((logo, idx) => (
                <SwiperSlide key={idx}>
                  <div 
                    onClick={() => setActiveCert(logo.cert)}
                    className="bg-white border border-[rgba(10,10,10,0.06)] p-[12px] rounded-sm h-[90px] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.01)] transition-all duration-300 hover:scale-105 hover:border-[var(--gold)] cursor-none"
                  >
                    <img 
                      src={logo.logo} 
                      alt={logo.name} 
                      className="max-h-[60px] max-w-[85%] object-contain" 
                      loading="lazy" 
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ─── 9. GET IN TOUCH (FOOTER FORM) ─── */}
      <section id="contact-section" className="py-[120px] px-[4%] md:px-[5%] max-w-[1600px] mx-auto border-t border-[rgba(10,10,10,0.06)] grid grid-cols-1 lg:grid-cols-2 gap-[80px]">
        <div className="reveal">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block font-semibold">Start a Conversation</span>
          <h2 className="font-serif text-[clamp(32px,4vw,56px)] font-bold leading-[1.2] text-[var(--light)] mb-[32px]">Let's Create <br />Something Together</h2>
          <div className="flex flex-col gap-[20px] text-[13px] text-[var(--muted)] font-semibold mt-[40px]">
            <p className="flex items-center gap-[12px]"><MapPin className="w-[16px] h-[16px] text-[var(--gold)]" /> Bangalore, India</p>
            <p className="flex items-center gap-[12px]"><Building2 className="w-[16px] h-[16px] text-[var(--gold)]" /> Glamour House, Infantry Road</p>
          </div>
        </div>
        <div className="reveal">
          <form className="flex flex-col gap-[30px]" onSubmit={(e) => e.preventDefault()}>
            <input suppressHydrationWarning type="text" placeholder="Your Name" className="bg-transparent border-b border-[rgba(10,10,10,0.1)] pb-[16px] text-[var(--light)] text-[14px] focus:outline-none focus:border-[var(--gold)] transition-colors w-full placeholder:text-[var(--muted)] font-semibold" />
            <input suppressHydrationWarning type="email" placeholder="Your Email" className="bg-transparent border-b border-[rgba(10,10,10,0.1)] pb-[16px] text-[var(--light)] text-[14px] focus:outline-none focus:border-[var(--gold)] transition-colors w-full placeholder:text-[var(--muted)] font-semibold" />
            <input suppressHydrationWarning type="tel" placeholder="Phone Number" className="bg-transparent border-b border-[rgba(10,10,10,0.1)] pb-[16px] text-[var(--light)] text-[14px] focus:outline-none focus:border-[var(--gold)] transition-colors w-full placeholder:text-[var(--muted)] font-semibold" />
            <textarea placeholder="Your Message" rows={4} className="bg-transparent border-b border-[rgba(10,10,10,0.1)] pb-[16px] text-[var(--light)] text-[14px] focus:outline-none focus:border-[var(--gold)] transition-colors w-full resize-none placeholder:text-[var(--muted)] font-semibold" />
            <button suppressHydrationWarning type="submit" className="bg-[var(--gold)] text-white font-bold text-[11px] tracking-[0.2em] uppercase py-[20px] w-full mt-[20px] hover:bg-black transition-colors cursor-none">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ─── 10. SHOWREEL VIDEO MODAL OVERLAY ─── */}
      {showreelOpen && (
        <div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-[20px] transition-all">
          <button 
            suppressHydrationWarning
            onClick={() => setShowreelOpen(false)} 
            className="absolute top-[30px] right-[5%] md:right-[8%] text-white text-[12px] tracking-[0.2em] uppercase flex items-center gap-[8px] cursor-none hover:text-[var(--gold)]"
          >
            Close <X className="w-[16px] h-[16px]" />
          </button>
          <div className="w-full max-w-[1000px] aspect-video rounded-sm overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-2xl relative">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/oz26LF0gvxg?autoplay=1"
              title="Glamour Photographics Corporate Showreel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* ─── 11. TESTIMONIAL CERTIFICATE LIGHTBOX OVERLAY ─── */}
      {activeCert && (
        <div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-[20px] transition-all">
          <button 
            suppressHydrationWarning
            onClick={() => setActiveCert(null)} 
            className="absolute top-[30px] right-[5%] md:right-[8%] text-white text-[12px] tracking-[0.2em] uppercase flex items-center gap-[8px] cursor-none hover:text-[var(--gold)]"
          >
            Close <X className="w-[16px] h-[16px]" />
          </button>
          <div className="w-full max-w-[640px] max-h-[85vh] overflow-y-auto rounded-sm bg-white p-[8px] shadow-2xl relative flex items-center justify-center">
            <img 
              src={activeCert} 
              alt="Testimonial Certificate Form" 
              className="max-w-full max-h-[80vh] object-contain rounded-sm" 
              loading="lazy"
            />
          </div>
        </div>
      )}

    </main>
  );
}
