'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Camera, Video, Calendar, Aperture, Building2, Film, Play, X, Award, User, MapPin } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
  const [expandedClients, setExpandedClients] = useState(false);
  const [activeCert, setActiveCert] = useState(null);
  
  const statsRef = useRef(null);

  useEffect(() => {
    // Scroll reveal animation trigger
    const checkReveals = () => {
      const vh = window.innerHeight;
      document.querySelectorAll('.reveal, .reveal-left, .reveal-scale, .stagger-children, .img-mask, .gold-line, .gold-line-short').forEach(el => {
        if (el.getBoundingClientRect().top < vh * 0.95) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', checkReveals, { passive: true });
    setTimeout(checkReveals, 300);

    // Observer for count-up stats
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
    };
  }, []);

  // Stats values using the count-up hook
  const experienceCount = useCountUp(40, 1800, statsTriggered);
  const clientsCount = useCountUp(500, 1800, statsTriggered);
  const projectsCount = useCountUp(1200, 1800, statsTriggered);
  const weddingsCount = useCountUp(300, 1800, statsTriggered);

  const portfolioImages = {
    ALL: [
      /* V */ "/images/our_portfolio/Srk.jpg",
      /* H */ "/images/our_portfolio/Bill clinton.jpeg",
      /* H */ "/images/our_portfolio/highlights_3C1A0761.jpg",
      /* H */ "/images/our_portfolio/highlights_3C1A0782.jpg",
      /* H */ "/images/our_portfolio/highlights_3C1A0841.jpg",
      /* V */ "/images/our_portfolio/highlights_3C1A0775.jpg",
      /* H */ "/images/our_portfolio/cp-7.jpg",
      /* H */ "/images/our_portfolio/cp-10.jpg",
      /* H */ "/images/our_portfolio/cp-12.jpg",
      /* H */ "/images/our_portfolio/rtx-1.jpg",
      /* V */ "/images/our_portfolio/Cameroon.jpeg",
      /* H */ "/images/our_portfolio/te3.jpg",
      /* H */ "/images/our_portfolio/dilquar.jpg",
      /* H */ "/images/our_portfolio/11.jpg",
      /* H */ "/images/our_portfolio/22.jpg",
      /* V */ "/images/our_portfolio/6ba3a857-c93e-4299-8740-45da7ff9e3f2.jpg",
      /* H */ "/images/our_portfolio/33.jpg",
      /* H */ "/images/our_portfolio/_AMZ0023.JPG",
      /* H */ "/images/our_portfolio/DSC_0204.JPG",
      /* H */ "/images/our_portfolio/kareeshma.jpg",
      /* V */ "/images/our_portfolio/IMG_0029.JPG",
      /* H */ "/images/our_portfolio/highlights_IMG_0037.jpg",
      /* H */ "/images/our_portfolio/highlights_IMG_0069.jpg",
      /* H */ "/images/our_portfolio/highlights_IMG_0098.jpg",
      /* H */ "/images/our_portfolio/highlights_NMKL0031.jpg",
      /* V */ "/images/our_portfolio/Capturing_Cultural_Icons_version_1.png",
      /* H */ "/images/our_portfolio/NMK_0047.JPG",
      /* H */ "/images/our_portfolio/NMK_0203.JPG",
      /* H */ "/images/our_portfolio/NMK_0337.JPG",
      /* H */ "/images/our_portfolio/NMK_0457.JPG",
      /* V */ "/images/our_portfolio/highlights_SKV00290.jpg",
      /* H */ "/images/our_portfolio/NMK_0481.JPG",
      /* H */ "/images/our_portfolio/PRS02780.jpg",
      /* H */ "/images/our_portfolio/highlights_SKV00387.jpg",
      /* H */ "/images/our_portfolio/SKV00446.jpg",
      /* V */ "/images/our_portfolio/highlights_Ms. Amal Mohammed Ahmed, theDivisional  (1).jpg",
      /* H */ "/images/our_portfolio/highlights_DSC_0038.jpg",
      /* H */ "/images/our_portfolio/rtx-4.jpg",
      /* H */ "/images/our_portfolio/rtx-9.jpg",
      /* H */ "/images/our_portfolio/tcs3.jpg",
      /* V */ "/images/our_portfolio/Untitled design(1) (1).png",
      /* H */ "/images/our_portfolio/tcs4.jpg",
      /* H */ "/images/our_portfolio/IMG_0008.JPG",
      /* H */ "/images/our_portfolio/WhatsApp Image 2026-02-09 at 8.29.33 PM (1).jpeg",
      /* H */ "/images/our_portfolio/highlights_Screenshot 2024-11-30 at 1.19.43 PM.jpg",
      /* V */ "/images/our_portfolio/highlights_Screenshot 2024-11-30 at 1.18.19 PM.jpg",
      /* V */ "/images/our_portfolio/highlights_Screenshot 2024-11-30 at 1.18.38 PM.jpg",
      /* V */ "/images/our_portfolio/highlights_Screenshot 2024-11-30 at 1.18.49 PM.jpg",
      /* V */ "/images/our_portfolio/highlights_Ms. Amal Mohammed Ahmed, theDivisional .jpg",
      /* V */ "/images/our_portfolio/highlights_Screenshot 2024-11-30 at 1.18.56 PM.jpg",
      /* V */ "/images/our_portfolio/highlights_Screenshot 2024-11-30 at 1.19.31 PM.jpg",
      /* V */ "/images/our_portfolio/highlights_Screenshot 2024-11-30 at 1.20.10 PM.jpg",
      /* V */ "/images/our_portfolio/highlights_Screenshot 2024-11-30 at 1.20.45 PM.jpg",
      /* V */ "/images/our_portfolio/highlights_Screenshot 2024-11-30 at 1.20.51 PM.jpg",
      /* V */ "/images/our_portfolio/highlights_Screenshot 2024-11-30 at 1.21.09 PM.jpg",
      /* V */ "/images/our_portfolio/highlights_Screenshot 2024-11-30 at 1.21.32 PM.jpg",
      /* V */ "/images/our_portfolio/highlights_Screenshot 2024-11-30 at 1.21.43 PM.jpg",
      /* V */ "/images/our_portfolio/highlights_Screenshot 2024-11-30 at 1.22.01 PM.jpg",
    ],
    CLIENTS: [
      "/images/our_portfolio/cp-7.jpg",
      "/images/our_portfolio/cp-10.jpg",
      "/images/our_portfolio/cp-12.jpg",
      "/images/our_portfolio/Bill clinton.jpeg",
      "/images/our_portfolio/dilquar.jpg",
      "/images/our_portfolio/Srk.jpg",
      "/images/our_portfolio/kareeshma.jpg",
      "/images/our_portfolio/Cameroon.jpeg",
      "/images/our_portfolio/highlights_Ms. Amal Mohammed Ahmed, theDivisional  (1).jpg",
      "/images/our_portfolio/highlights_Ms. Amal Mohammed Ahmed, theDivisional .jpg",
    ],
    EVENTS: [
      "/images/our_portfolio/Srk.jpg",
      "/images/our_portfolio/highlights_3C1A0761.jpg",
      "/images/our_portfolio/highlights_3C1A0775.jpg",
      "/images/our_portfolio/highlights_3C1A0782.jpg",
      "/images/our_portfolio/highlights_3C1A0841.jpg",
      "/images/our_portfolio/highlights_SKV00290.jpg",
      "/images/our_portfolio/NMK_0047.JPG",
      "/images/our_portfolio/NMK_0203.JPG",
      "/images/our_portfolio/NMK_0337.JPG",
      "/images/our_portfolio/NMK_0457.JPG",
      "/images/our_portfolio/NMK_0481.JPG",
      "/images/our_portfolio/PRS02780.jpg",
      "/images/our_portfolio/highlights_SKV00387.jpg",
      "/images/our_portfolio/SKV00446.jpg",
      "/images/our_portfolio/_AMZ0023.JPG",
      "/images/our_portfolio/DSC_0204.JPG",
      "/images/our_portfolio/IMG_0008.JPG",
      "/images/our_portfolio/IMG_0029.JPG",
    ],
    INDUSTRIAL: [
      "/images/our_portfolio/rtx-1.jpg",
      "/images/our_portfolio/rtx-4.jpg",
      "/images/our_portfolio/rtx-9.jpg",
      "/images/our_portfolio/te3.jpg",
      "/images/our_portfolio/tcs3.jpg",
      "/images/our_portfolio/tcs4.jpg",
      "/images/our_portfolio/highlights_DSC_0038.jpg",
    ],
    DOCUMENTARY: [
      "/images/our_portfolio/11.jpg",
      "/images/our_portfolio/22.jpg",
      "/images/our_portfolio/33.jpg",
      "/images/our_portfolio/highlights_3C1A0841.jpg",
      "/images/our_portfolio/highlights_IMG_0037.jpg",
      "/images/our_portfolio/highlights_IMG_0069.jpg",
      "/images/our_portfolio/highlights_IMG_0098.jpg",
      "/images/our_portfolio/highlights_NMKL0031.jpg",
      "/images/our_portfolio/Capturing_Cultural_Icons_version_1.png",
      "/images/our_portfolio/WhatsApp Image 2026-02-09 at 8.29.33 PM (1).jpeg",
    ]
  };

  const activeImages = portfolioImages[activePortfolioTab] || portfolioImages['ALL'];

  return (
    <main className="w-full bg-[var(--dark)] text-[var(--light)] pb-[100px] overflow-x-hidden cursor-none relative">
      
      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative min-h-[100svh] flex flex-col justify-center md:flex-row md:justify-start md:items-center px-[5%] md:px-[8%] pt-[120px] md:pt-[80px] pb-[60px] md:pb-0 overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 z-0 select-none">
          {/* Desktop image */}
          <img 
            src="/images/hero-camera.jpg" 
            alt="Premium Camera Lens" 
            className="hidden md:block w-full h-full object-contain object-[right_center] opacity-80" 
          />
          {/* Mobile image */}
          <img 
            src="/images/hero-camera-mobile.png" 
            alt="Premium Camera Lens Mobile" 
            className="block md:hidden w-full h-full object-cover object-center opacity-75" 
            onError={(e) => {
              // Fallback to desktop image if mobile one is not uploaded yet
              e.target.src = "/images/hero-camera.jpg";
              e.target.className = "block md:hidden w-full h-full object-contain object-[center_bottom] opacity-70";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0A0A0A] via-[rgba(10,10,10,0.85)] md:via-[rgba(10,10,10,0.65)] to-transparent z-10" />
        </div>
        <div className="w-full max-w-[650px] flex-none z-20 relative pt-[40px] md:pt-[60px] text-left">
          <h1 className="font-serif text-left text-[clamp(52px,7vw,100px)] font-bold leading-[1.05] tracking-[-0.02em] mb-[32px] text-white">
            <span className="block overflow-hidden pb-[4px]"><span className="block anim-slide-up delay-100" style={{ transform: 'translateY(100%)' }}>We Capture</span></span>
            <span className="block overflow-hidden pb-[4px]"><span className="block anim-slide-up delay-150" style={{ transform: 'translateY(100%)' }}>Moments.</span></span>
            <span className="block overflow-hidden pb-[4px]"><span className="block anim-slide-up delay-200" style={{ transform: 'translateY(100%)' }}>We Create</span></span>
            <span className="block overflow-hidden pb-[4px]"><span className="block anim-slide-up delay-240 text-[var(--gold)] italic font-bold" style={{ transform: 'translateY(100%)' }}>Legacies.</span></span>
          </h1>
          <p className="text-[15px] md:text-[17px] text-[rgba(250,248,244,0.9)] leading-[1.7] max-w-[420px] opacity-0 anim-fade-up delay-300 mb-[48px] font-semibold">
            40+ Years of Storytelling Through The Lens of Excellence
          </p>
          <div className="opacity-0 anim-fade-up delay-380">
            <Link href="/portfolio" className="inline-flex items-center justify-center border border-[rgba(255,255,255,0.3)] text-white uppercase tracking-[0.2em] text-[11px] font-bold px-[36px] py-[18px] transition-all duration-400 hover:bg-white hover:text-black hover:border-transparent cursor-none">
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 2. EDITORIAL MARQUEE ─── */}
      <div className="marquee-wrapper py-[20px] bg-black border-y border-[rgba(255,255,255,0.05)] overflow-hidden w-full relative z-20">
        <div className="marquee-track flex whitespace-nowrap text-[10px] tracking-[0.25em] uppercase text-[var(--gold)] font-medium">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-[24px] shrink-0">
              <span className="ml-[24px]">Corporate Films</span><span className="text-[6px] text-white select-none">●</span>
              <span>Wedding Photography</span><span className="text-[6px] text-white select-none">●</span>
              <span>Event Coverage</span><span className="text-[6px] text-white select-none">●</span>
              <span>Digital Advertising</span><span className="text-[6px] text-white select-none">●</span>
              <span>Documentary Films</span><span className="text-[6px] text-white select-none">●</span>
              <span>Studio Portraits</span><span className="text-[6px] text-white select-none">●</span>
              <span>Photo Restoration</span><span className="text-[6px] text-white select-none">●</span>
            </span>
          ))}
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-25%); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 25s linear infinite;
          }
        `}</style>
      </div>

      {/* ─── 2.5. EDITORIAL STRIP ─── */}
      <div className="hero-strip">
        <div className="hero-strip-item">
          <div className="strip-img">
            <img src="/images/cii-event-coverage.jpg" alt="CII Event Coverage" className="w-full h-full object-cover block" />
          </div>
          <div className="strip-pip"></div>
          <div className="strip-side-label">Corporate Events</div>
          <div className="strip-overlay">
            <span className="strip-label">Corporate Events</span>
            <span className="strip-title">CII — India @ 75</span>
          </div>
        </div>

        <div className="hero-strip-item">
          <div className="strip-img">
            <img src="/images/celebrity-portrait.jpg" alt="Celebrity Portrait" className="w-full h-full object-cover block" />
          </div>
          <div className="strip-pip"></div>
          <div className="strip-side-label">Celebrity Portrait</div>
          <div className="strip-overlay">
            <span className="strip-label">Celebrity Coverage</span>
            <span className="strip-title">Portrait Session</span>
          </div>
        </div>

        <div className="hero-strip-item">
          <div className="strip-img">
            <img src="/images/outdoor-event.jpg" alt="Outdoor Event" className="w-full h-full object-cover block" />
          </div>
          <div className="strip-pip"></div>
          <div className="strip-side-label">Outdoor Coverage</div>
          <div className="strip-overlay">
            <span className="strip-label">Events & Media</span>
            <span className="strip-title">Outdoor Coverage</span>
          </div>
        </div>

        <div className="hero-strip-item">
          <div className="strip-img">
            <img src="/images/corporate-event.jpg" alt="Corporate Event" className="w-full h-full object-cover block" />
          </div>
          <div className="strip-pip"></div>
          <div className="strip-side-label">Speaker Series</div>
          <div className="strip-overlay">
            <span className="strip-label">Corporate Events</span>
            <span className="strip-title">Speaker Series</span>
          </div>
        </div>
      </div>

      {/* ─── 2.7. EDITORIAL MARQUEE (BOTTOM) ─── */}
      <div className="marquee-wrapper py-[20px] bg-black border-y border-[rgba(255,255,255,0.05)] overflow-hidden w-full relative z-20">
        <div className="marquee-track-reverse flex whitespace-nowrap text-[10px] tracking-[0.25em] uppercase text-[var(--gold)] font-medium">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-[24px] shrink-0">
              <span className="ml-[24px]">Corporate Films</span><span className="text-[6px] text-white select-none">●</span>
              <span>Wedding Photography</span><span className="text-[6px] text-white select-none">●</span>
              <span>Event Coverage</span><span className="text-[6px] text-white select-none">●</span>
              <span>Digital Advertising</span><span className="text-[6px] text-white select-none">●</span>
              <span>Documentary Films</span><span className="text-[6px] text-white select-none">●</span>
              <span>Studio Portraits</span><span className="text-[6px] text-white select-none">●</span>
              <span>Photo Restoration</span><span className="text-[6px] text-white select-none">●</span>
            </span>
          ))}
        </div>
        <style jsx>{`
          @keyframes marquee-reverse {
            0% { transform: translateX(-25%); }
            100% { transform: translateX(0); }
          }
          .marquee-track-reverse {
            display: flex;
            width: max-content;
            animation: marquee-reverse 25s linear infinite;
          }
        `}</style>
      </div>

      {/* ─── 3. WE TELL STORIES THAT STAY (YOUTUBE EMBED) ─── */}
      <section className="py-[120px] px-[8%] md:px-[10%] bg-[var(--dark)] relative overflow-hidden">
        {/* Subtle historical/storytelling background watermark */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.035] mix-blend-luminosity pointer-events-none"
          style={{ backgroundImage: `url('/images/about-hero-double-exposure.png')` }}
        />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          {/* Top Section: Text */}
          <div className="max-w-[800px] mx-auto text-center mb-[60px] reveal opacity-0 anim-fade-up">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">
              We Don't Just Shoot
            </span>
            <h2 className="font-serif text-[clamp(36px,4.5vw,60px)] font-light leading-[1.1] tracking-[-0.01em] text-[var(--light)] mb-[24px]">
              We Tell Stories <span className="italic text-[var(--gold)] font-medium">That Stay.</span>
            </h2>
            <p className="text-[14px] md:text-[16px] leading-[1.8] text-[var(--muted)] max-w-[650px] mx-auto mb-[32px] font-light">
              From corporate documentaries that build trust, to powerful commercials and premium event storytelling, we capture moments that create long-lasting brand legacies.
            </p>
            <div className="flex justify-center">
              <Link href="/portfolio" className="border border-[rgba(10,10,10,0.15)] text-[var(--light)] text-[10px] tracking-[0.2em] uppercase py-[14px] px-[28px] hover:bg-[var(--light)] hover:text-[var(--dark)] transition-all duration-300 cursor-pointer font-medium rounded-full">
                Explore Our Work
              </Link>
            </div>
          </div>

          {/* Bottom Section: Video Player with large curved design */}
          <div className="w-full max-w-[1100px] mx-auto aspect-video rounded-[24px] md:rounded-[40px] overflow-hidden border border-[rgba(10,10,10,0.08)] shadow-[0_30px_80px_rgba(10,10,10,0.12)] reveal opacity-0 anim-fade-up delay-100 isolate">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/oz26LF0gvxg?rel=0"
              title="Glamour Photographics Corporate Showreel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ─── 4. STATS SECTION (Four Decades of Visual Excellence) ─── */}
      <section ref={statsRef} className="py-[120px] px-[8%] md:px-[10%] bg-[var(--darker)] border-y border-[rgba(10,10,10,0.06)]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">
          
          {/* Left Column */}
          <div className="reveal opacity-0 anim-fade-up">
            <div className="w-[60px] h-[2px] bg-[var(--gold)] mb-[32px]" id="stats-gold-line"></div>
            <h2 className="font-serif text-[clamp(40px,5vw,72px)] font-light leading-[1.1] tracking-[-0.02em] text-[var(--light)] mb-[32px]">
              Four Decades of <br />
              <span className="italic text-[var(--gold)] font-medium">Visual Excellence</span>
            </h2>
            <p className="text-[14px] leading-[1.9] text-[var(--muted)] max-w-[420px] mb-[40px] font-light">
              Glamour Photographics, established by Hameed Hussain in 1982, has built a legacy of capturing the most meaningful moments for corporate clients and families across India.
            </p>
            <Link href="/about" className="inline-flex items-center gap-[12px] text-[10px] tracking-[0.3em] uppercase font-semibold pb-[4px] border-b border-[var(--light)] hover:border-[var(--gold)] hover:text-[var(--gold)] hover:gap-[20px] transition-all duration-300 cursor-none">
              Our Story <span>→</span>
            </Link>
          </div>

          {/* Right Column Grid */}
          <div className="grid grid-cols-2 gap-[2px] bg-[rgba(10,10,10,0.08)] stagger-children border border-[rgba(10,10,10,0.06)]">
            <div className="p-[40px] bg-[var(--dark)] hover:bg-[rgba(10,10,10,0.02)] transition-colors duration-300 relative group">
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--gold)] transition-all duration-300 group-hover:w-full"></div>
              <div className="font-serif text-[64px] md:text-[72px] line-height-[1] text-[var(--light)] font-light flex items-baseline">
                <span>{experienceCount}</span><span className="text-[var(--gold)] font-medium text-[40px] ml-[2px]">+</span>
              </div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-[var(--light)] mt-[8px] font-bold">Years of Experience</div>
            </div>
            
            <div className="p-[40px] bg-[var(--dark)] hover:bg-[rgba(10,10,10,0.02)] transition-colors duration-300 relative group">
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--gold)] transition-all duration-300 group-hover:w-full"></div>
              <div className="font-serif text-[64px] md:text-[72px] line-height-[1] text-[var(--light)] font-light flex items-baseline">
                <span>{clientsCount}</span><span className="text-[var(--gold)] font-medium text-[40px] ml-[2px]">+</span>
              </div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-[var(--light)] mt-[8px] font-bold">Clients Served</div>
            </div>
 
            <div className="p-[40px] bg-[var(--dark)] hover:bg-[rgba(10,10,10,0.02)] transition-colors duration-300 relative group">
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--gold)] transition-all duration-300 group-hover:w-full"></div>
              <div className="font-serif text-[64px] md:text-[72px] line-height-[1] text-[var(--light)] font-light flex items-baseline">
                <span>{projectsCount}</span><span className="text-[var(--gold)] font-medium text-[40px] ml-[2px]">+</span>
              </div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-[var(--light)] mt-[8px] font-bold">Corporate Projects</div>
            </div>
 
            <div className="p-[40px] bg-[var(--dark)] hover:bg-[rgba(10,10,10,0.02)] transition-colors duration-300 relative group">
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--gold)] transition-all duration-300 group-hover:w-full"></div>
              <div className="font-serif text-[64px] md:text-[72px] line-height-[1] text-[var(--light)] font-light flex items-baseline">
                <span>{weddingsCount}</span><span className="text-[var(--gold)] font-medium text-[40px] ml-[2px]">+</span>
              </div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-[var(--light)] mt-[8px] font-bold">Weddings Captured</div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 5. OUR STORY 1982 OVERLAPPING DESIGN ─── */}
      <section className="py-[120px] px-[8%] md:px-[10%] bg-[var(--dark)] relative">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">
          
          {/* Left Column Overlapping Boxes */}
          <div className="relative h-[480px] w-full flex items-center justify-center reveal opacity-0 anim-fade-up">
            {/* Box 1 - Founder Portrait & Text Overlay */}
            <div className="absolute top-[20px] left-[20px] w-[75%] h-[320px] bg-[#0A0A0A] border border-[rgba(10,10,10,0.06)] rounded-sm overflow-hidden z-10 shadow-md relative group">
              <img 
                src="/logo-clients/founder-ceo.jpg" 
                alt="Hameed Hussain Founder" 
                className="w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105 select-none pointer-events-none" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent p-[28px] flex flex-col justify-end">
                <h4 className="font-serif text-[22px] text-white font-bold leading-none mb-[4px]">Hameed Hussain</h4>
                <p className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] font-bold mb-[12px]">Founder & Creative Visionary</p>
                <div className="w-[40px] h-[1px] bg-[var(--gold)] mb-[12px]"></div>
                <img 
                  src="/images/signature.png" 
                  alt="Founder Signature" 
                  className="h-[32px] w-auto select-none pointer-events-none invert opacity-95 self-start" 
                />
              </div>
            </div>

            {/* Box 2 - Overlapping Golden/Ivory Styled Panel (Very small, sitting mostly below the image) */}
            <div className="absolute bottom-[5px] right-[15px] w-[58%] h-[135px] bg-[#FAF8F4] border border-[rgba(197,164,109,0.35)] rounded-sm p-[20px] py-[16px] flex flex-col justify-between z-20 shadow-lg backdrop-blur-md">
              <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] font-bold">Visual Legacy</span>
              <h5 className="font-serif text-[22px] text-[var(--light)] font-bold leading-none mb-[2px]">Est. 1982</h5>
              <p className="text-[11.5px] text-[var(--light)] leading-normal font-semibold">Pioneering corporate imagery in Bangalore.</p>
            </div>
          </div>

          {/* Right Column Story Text */}
          <div className="reveal opacity-0 anim-fade-up delay-100">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">
              1982 - Our Roots
            </span>
            <h3 className="font-serif text-[clamp(32px,4vw,56px)] font-light leading-[1.2] text-[var(--light)] mb-[28px]">
              Glamour Photographics
            </h3>
            <blockquote className="border-l border-[var(--gold)] pl-[20px] text-[15px] italic text-[var(--gold)] leading-relaxed mb-[28px] font-serif">
              "Our goal is not to merely provide media services, but to serve people through the art of storytelling and media creation."
            </blockquote>
            <p className="text-[14.5px] leading-[1.8] text-[var(--light)] mb-[24px] font-semibold">
              Established by Hameed Hussain in 1982, we embarked on a journey to introduce vibrant colour media solutions to businesses and consumers in Bengaluru—proudly serving the corporate and wedding industries ever since.
            </p>
            <Link href="/about" className="inline-flex items-center gap-[12px] text-[11px] tracking-[0.2em] uppercase text-[var(--light)] font-semibold hover:text-[var(--gold)] cursor-none transition-colors group">
              Read Our Story <span className="transition-transform duration-300 group-hover:translate-x-[4px]">→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ─── 7. FEATURED WORK (CAROUSEL WITH VIDEOS) ─── */}
      <section className="py-[120px] px-[8%] md:px-[10%] bg-[#0A0A0A]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[60px] gap-[20px]">
          <div className="reveal opacity-0 anim-fade-up">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">
              Featured Work
            </span>
            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light leading-[1.2] text-white">
              Stories We've Brought to Life
            </h2>
          </div>
          <div className="reveal opacity-0 anim-fade-up delay-100">
            <Link href="/portfolio?tab=VIDEOS" className="text-[10px] tracking-[0.25em] uppercase font-semibold py-[12px] px-[24px] border border-[rgba(255,255,255,0.2)] text-white hover:bg-white hover:text-black cursor-none transition-all">
              View All Projects
            </Link>
          </div>
        </div>

        <div className="reveal opacity-0 anim-fade-up delay-200">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, FreeMode]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={true}
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
                <div className="group relative bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-sm overflow-hidden flex flex-col h-[380px]">
                  {/* Thumbnail / Video Iframe */}
                  <div className="h-[210px] w-full relative overflow-hidden bg-black">
                    <iframe
                      className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      src={`https://www.youtube.com/embed/${project.vidId}?controls=0&modestbranding=1&rel=0`}
                      title={project.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  
                  {/* Description Box */}
                  <div className="p-[28px] flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[8px] block font-medium">
                        {project.type}
                      </span>
                      <h3 className="font-serif text-[20px] text-white leading-[1.3] group-hover:text-[var(--gold)] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <Link href={`/clients/${project.slug}`} className="text-[10px] tracking-[0.2em] uppercase text-white font-medium inline-flex items-center gap-[8px] cursor-none border-b border-transparent hover:border-white w-fit">
                      Read Project details <span>→</span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ─── 8. WHAT WE DO (CATEGORY GRID) ─── */}
      <section className="py-[120px] px-[8%] md:px-[10%] bg-[var(--dark)] border-t border-[rgba(10,10,10,0.06)]">
        <div className="mb-[60px] reveal opacity-0 anim-fade-up">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">Services Categories</span>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light leading-[1.2] text-[var(--light)]">What We Do</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {[
            { title: "Corporate Photography", icon: Camera, desc: "High-end corporate headshots, facility walkthroughs, products and branding campaigns.", bg: "/images/our_portfolio/cp-7.jpg" },
            { title: "Cinematic Videography", icon: Video, desc: "High-impact brand videos, showreels, office tour media and documentaries.", bg: "/images/our_portfolio/22.jpg" },
            { title: "Event Coverage", icon: Calendar, desc: "Premium documentation of corporate summits, conventions, and milestone ceremonies.", bg: "/images/our_portfolio/33.jpg" },
            { title: "Aerial Shoots", icon: Aperture, desc: "Certified industrial drone flights mapping massive campuses and aerial geography.", bg: "/images/our_portfolio/rtx-1.jpg" },
            { title: "Industrial Photography", icon: Building2, desc: "Raw visual documentation for factories, power plants, and technology infrastructure.", bg: "/images/our_portfolio/te3.jpg" },
            { title: "Brand Storytelling", icon: Film, desc: "Custom scriptwriting and visual conceptualization bringing corporate identity to life.", bg: "/images/our_portfolio/cp-12.jpg" },
          ].map((srv, idx) => (
            <div key={idx} className="group relative p-[40px] rounded-sm overflow-hidden border border-[rgba(10,10,10,0.06)] hover:border-[var(--gold)] transition-all duration-[400ms] cursor-none min-h-[280px] flex flex-col justify-end">
              <div className="absolute inset-0 z-0">
                <img src={srv.bg} alt={srv.title} className="w-full h-full object-cover opacity-85" />
                <div 
                  className="absolute inset-0" 
                  style={{ 
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.98) 0%, rgba(0, 0, 0, 0.85) 35%, rgba(0, 0, 0, 0) 65%)' 
                  }} 
                />
              </div>
              <div className="relative z-10">
                <srv.icon className="w-[32px] h-[32px] text-[var(--gold)] mb-[24px] transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-[18px] font-serif text-white mb-[12px] group-hover:text-[var(--gold)] transition-colors font-bold">{srv.title}</h3>
                <p className="text-[13.5px] text-[rgba(255,255,255,0.95)] leading-[1.6] font-semibold">{srv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 9. OUR CLIENTS (CLIENTS PORTFOLIO) ─── */}
      <section className="py-[120px] px-[8%] md:px-[10%] bg-[var(--dark)]">
        <div className="text-center mb-[40px] reveal opacity-0 anim-fade-up">
          <h3 className="font-serif text-[24px] tracking-[0.2em] uppercase text-[var(--light)] font-bold mb-[12px]">
            Clients Portfolio
          </h3>
          <div className="w-[60px] h-[2px] bg-[var(--gold)] mx-auto"></div>
        </div>

        <div className="max-w-[1000px] mx-auto bg-white border border-[rgba(10,10,10,0.06)] rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.02)] reveal opacity-0 anim-fade-up delay-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {[
              { name: "CII", slug: "cii", logo: "/logo-clients/cii.jpg" },
              { name: "CGI", slug: "cgi", logo: "/logo-clients/CGI_Inc.-Logo.wine.png" },
              { name: "Toyota", slug: "toyota" },
              { name: "RTX", slug: "rtx", logo: "/logo-clients/RTX.webp" },
              { name: "TCS", slug: "tcs", logo: "/logo-clients/TCS_NewLogo_Final_RGB.png" },
              { name: "TATA ELXSI", slug: "tata-elxsi", logo: "/logo-clients/tata-elxsi-moves-focus-away-from-driverless-tech.avif" },
              { name: "Presidency University", slug: "presidency", logo: "/logo-clients/presidency-university-yelahanka-bangalore-universities-si0nhgmmkz.jpg" },
              { name: "PAI", slug: "pai" }
            ].map((client, i) => (
              <Link href={`/clients/${client.slug}`} key={i} className="group h-[140px] border border-[rgba(10,10,10,0.06)] flex items-center justify-center p-[20px] hover:border-[var(--gold)] hover:z-10 hover:shadow-md hover:bg-[rgba(197,164,109,0.02)] transition-all cursor-none relative">
                {client.logo ? (
                  <img src={client.logo} alt={client.name} className="max-h-[55px] max-w-[85%] object-contain" />
                ) : (
                  <span className="font-serif text-[18px] font-bold text-[var(--muted)] group-hover:text-[var(--light)] transition-colors text-center">{client.name}</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 10. OUR PORTFOLIO (Uniform Grid) ─── */}
      <section className="py-[120px] px-[8%] md:px-[10%] bg-[var(--darker)] border-y border-[rgba(10,10,10,0.06)]">
        <h3 className="text-[28px] font-serif text-[var(--light)] mb-[40px] reveal opacity-0 anim-fade-up">Our Portfolio</h3>
        <div className="flex flex-wrap gap-[30px] border-b border-[rgba(10,10,10,0.08)] pb-[15px] mb-[40px] reveal opacity-0 anim-fade-up delay-100">
          {['ALL', 'CLIENTS', 'EVENTS', 'INDUSTRIAL', 'DOCUMENTARY'].map((tab) => (
            <button 
              suppressHydrationWarning
              key={tab} 
              onClick={() => setActivePortfolioTab(tab)} 
              className={`text-[10px] tracking-[0.2em] uppercase pb-[15px] relative cursor-none ${activePortfolioTab === tab ? 'text-[var(--gold)]' : 'text-[var(--muted)] hover:text-[var(--light)]'}`}
            >
              {tab}
              {activePortfolioTab === tab && <div className="absolute bottom-[-16px] left-0 w-full h-[2px] bg-[var(--gold)]" />}
            </button>
          ))}
        </div>
        {(() => {
          const VERTICAL_IMAGES = [
            "/images/our_portfolio/6ba3a857-c93e-4299-8740-45da7ff9e3f2.jpg",
            "/images/our_portfolio/Cameroon.jpeg",
            "/images/our_portfolio/Capturing_Cultural_Icons_version_1.png",
            "/images/our_portfolio/highlights_3C1A0775.jpg",
            "/images/our_portfolio/highlights_Ms. Amal Mohammed Ahmed, theDivisional  (1).jpg",
            "/images/our_portfolio/highlights_Ms. Amal Mohammed Ahmed, theDivisional .jpg",
            "/images/our_portfolio/highlights_SKV00290.jpg",
            "/images/our_portfolio/IMG_0029.JPG",
            "/images/our_portfolio/Srk.jpg",
            "/images/our_portfolio/Untitled design(1) (1).png",
            "/images/our_portfolio/highlights_Screenshot 2024-11-30 at 1.18.19 PM.jpg",
            "/images/our_portfolio/highlights_Screenshot 2024-11-30 at 1.18.38 PM.jpg",
            "/images/our_portfolio/highlights_Screenshot 2024-11-30 at 1.18.49 PM.jpg",
            "/images/our_portfolio/highlights_Screenshot 2024-11-30 at 1.18.56 PM.jpg",
            "/images/our_portfolio/highlights_Screenshot 2024-11-30 at 1.19.31 PM.jpg",
            "/images/our_portfolio/highlights_Screenshot 2024-11-30 at 1.20.10 PM.jpg",
            "/images/our_portfolio/highlights_Screenshot 2024-11-30 at 1.20.45 PM.jpg",
            "/images/our_portfolio/highlights_Screenshot 2024-11-30 at 1.20.51 PM.jpg",
            "/images/our_portfolio/highlights_Screenshot 2024-11-30 at 1.21.09 PM.jpg",
            "/images/our_portfolio/highlights_Screenshot 2024-11-30 at 1.21.32 PM.jpg",
            "/images/our_portfolio/highlights_Screenshot 2024-11-30 at 1.21.43 PM.jpg",
            "/images/our_portfolio/highlights_Screenshot 2024-11-30 at 1.22.01 PM.jpg"
          ];

          const verticals = activeImages.filter(src => VERTICAL_IMAGES.includes(src));
          const horizontals = activeImages.filter(src => !VERTICAL_IMAGES.includes(src));

          const blocks = [];
          let vertIdx = 0;
          let horizIdx = 0;

          while (vertIdx < verticals.length && horizIdx + 4 <= horizontals.length) {
            blocks.push({
              vertical: verticals[vertIdx],
              horizontals: [
                horizontals[horizIdx],
                horizontals[horizIdx + 1],
                horizontals[horizIdx + 2],
                horizontals[horizIdx + 3]
              ]
            });
            vertIdx += 1;
            horizIdx += 4;
          }

          const remainingVerticals = verticals.slice(vertIdx);
          const remainingHorizontals = horizontals.slice(horizIdx);
          const remaining = [...remainingVerticals, ...remainingHorizontals];

          if (blocks.length === 0) {
            return (
              <div className="w-full flex flex-col gap-[24px]">
                {verticals.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
                    {verticals.map((src, idx) => (
                      <div key={idx} className="relative aspect-[2/3] group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                        <img src={src} alt="Portfolio Work" className="w-full h-full transition-transform duration-[800ms] group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[20px]">
                          <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[8px]">Gallery Spotlight</span>
                          <h4 className="font-serif text-[16px] text-white">Visual Artifact</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {horizontals.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
                    {horizontals.map((src, idx) => (
                      <div key={idx} className="relative aspect-[3/2] group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                        <img src={src} alt="Portfolio Work" className="w-full h-full transition-transform duration-[800ms] group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[20px]">
                          <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[8px]">Gallery Spotlight</span>
                          <h4 className="font-serif text-[16px] text-white">Visual Artifact</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <div className="w-full flex flex-col gap-[24px]">
              {blocks.map((block, bIdx) => (
                <div key={bIdx} className="flex flex-col md:flex-row gap-[24px] items-stretch w-full">
                  {/* Left: 1 Vertical */}
                  <div className="w-full md:w-1/3 relative group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] min-h-[350px] md:min-h-0 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                    <img src={block.vertical} alt="Portfolio Work" className="absolute inset-0 w-full h-full transition-transform duration-[800ms] group-hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[30px]">
                      <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[8px]">Gallery Spotlight</span>
                      <h4 className="font-serif text-[18px] text-white">Visual Artifact</h4>
                    </div>
                  </div>
                  {/* Right: 4 Horizontal */}
                  <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
                    {block.horizontals.map((src, idx) => (
                      <div key={idx} className="relative aspect-[3/2] group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                        <img src={src} alt="Portfolio Work" className="w-full h-full transition-transform duration-[800ms] group-hover:scale-[1.03]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[20px]">
                          <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[8px]">Gallery Spotlight</span>
                          <h4 className="font-serif text-[16px] text-white">Visual Artifact</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* REMAINING VERTICALS */}
              {remainingVerticals.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
                  {remainingVerticals.map((src, idx) => (
                    <div key={idx} className="relative aspect-[2/3] group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                      <img src={src} alt="Portfolio Work" className="w-full h-full transition-transform duration-[800ms] group-hover:scale-[1.03]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[20px]">
                        <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[8px]">Gallery Spotlight</span>
                        <h4 className="font-serif text-[16px] text-white">Visual Artifact</h4>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* REMAINING HORIZONTALS */}
              {remainingHorizontals.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
                  {remainingHorizontals.map((src, idx) => (
                    <div key={idx} className="relative aspect-[3/2] group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                      <img src={src} alt="Portfolio Work" className="w-full h-full transition-transform duration-[800ms] group-hover:scale-[1.03]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[20px]">
                        <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[8px]">Gallery Spotlight</span>
                        <h4 className="font-serif text-[16px] text-white">Visual Artifact</h4>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })()}
      </section>

      {/* ─── 11. OUR SERVICES (Details List) ─── */}
      <section className="py-[120px] px-[8%] md:px-[10%] bg-[var(--dark)] grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-start">
        <div className="reveal opacity-0 anim-fade-up">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">Corporate Capabilities</span>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light leading-[1.2] text-[var(--light)] mb-[40px]">Our Services</h2>
          <div className="flex flex-col gap-[20px]">
            {[
              { id: '01', title: 'Corporate Photography', desc: 'From workspace portraits to high-end infrastructure photography.' },
              { id: '02', title: 'Cinematic Videography', desc: 'Custom walkthroughs, drone films, and leadership interviews.' },
              { id: '03', title: 'Event Coverage', desc: 'High-impact coverage of corporate events and summits.' },
              { id: '04', title: 'Photo Restoration', desc: 'Preserving old legacy film rolls and restoring damaged pictures.' }
            ].map((item) => (
              <div key={item.id} className="py-[24px] border-b border-[rgba(10,10,10,0.08)] flex gap-[30px] items-start group">
                <span className="font-serif text-[18px] text-[var(--gold)] font-light italic mt-[2px]">{item.id}</span>
                <div>
                  <h3 className="text-[16px] font-semibold text-[var(--light)] mb-[8px] group-hover:text-[var(--gold)] transition-colors">{item.title}</h3>
                  <p className="text-[12px] text-[var(--muted)] leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="sticky top-[120px] h-[650px] w-full img-mask rounded-sm overflow-hidden">
            <img src="/images/services-camera.jpg" alt="Tripod Camera" className="w-full h-full object-cover mask-bg grayscale-[20%]" />
          </div>
        </div>
      </section>

      {/* ─── 12. OUR TEAM ─── */}
      <section className="py-[120px] px-[8%] md:px-[10%] bg-[var(--darker)] border-y border-[rgba(10,10,10,0.06)]">
        <div className="mb-[60px] reveal opacity-0 anim-fade-up">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">Minds Behind the Lenses</span>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light leading-[1.2] text-[var(--light)]">Our Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {[
            { name: "Hameed Hussain", role: "Founder & Director", img: "/logo-clients/founder-ceo.jpg" },
            { name: "Anzar Hussain", role: "Creative Lead", img: "/logo-clients/founder-ceo.jpg" },
            { name: "Zia Hussain", role: "Head of Operations", img: "/logo-clients/founder-ceo.jpg" }
          ].map((member, idx) => (
            <div key={idx} className="group relative rounded-sm overflow-hidden bg-[var(--dark)] border border-[rgba(10,10,10,0.06)] hover:border-[var(--gold)] transition-all duration-500 cursor-none flex flex-col">
              <div className="h-[340px] w-full overflow-hidden relative">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-panel)] via-transparent to-transparent opacity-85" />
              </div>
              <div className="p-[24px]">
                <span className="text-[9px] tracking-[0.25em] uppercase text-[var(--gold)] mb-[8px] block font-medium">{member.role}</span>
                <h3 className="font-serif text-[22px] text-[var(--light)] group-hover:text-[var(--gold)] transition-colors leading-[1.2]">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 13. WHAT OUR CLIENTS SAY (TESTIMONIALS LOGO CAROUSEL) ─── */}
      <section className="py-[120px] px-[8%] md:px-[10%] bg-[var(--dark)] border-t border-[rgba(10,10,10,0.06)]">
        <div className="max-w-[1200px] mx-auto reveal opacity-0 anim-fade-up">
          <div className="text-center mb-[40px]">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--gold)] mb-[12px] block font-medium">
              Associated Dignitaries —
            </span>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-bold uppercase tracking-wider text-[var(--light)] mb-[16px]">
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

      {/* ─── 14. GET IN TOUCH (FOOTER FORM) ─── */}
      <section id="contact-section" className="py-[120px] px-[8%] md:px-[10%] bg-[var(--darker)] border-t border-[rgba(10,10,10,0.06)] grid grid-cols-1 lg:grid-cols-12 gap-[80px]">
        {/* Left Column: Contact Info */}
        <div className="lg:col-span-5 reveal opacity-0 anim-fade-up flex flex-col gap-[40px]">
          <div>
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">Start a Conversation</span>
            <h2 className="font-serif text-[clamp(32px,4vw,56px)] font-light leading-[1.2] text-[var(--light)]">Let's Create <br />Something Together</h2>
          </div>

          <div className="flex flex-col gap-[36px] mt-[20px]">
            {/* Headquarters */}
            <div className="flex gap-[18px] items-start">
              <span className="p-[12px] rounded-full bg-[rgba(212,175,55,0.08)] text-[var(--gold)] shrink-0">
                <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </span>
              <div>
                <h3 className="font-serif text-[20px] text-[var(--light)] mb-[6px] font-light">Studio Headquarters</h3>
                <p className="text-[13.5px] leading-[1.7] text-[var(--muted)] font-light">
                  No. 33, Castle Street,<br />
                  Ashok Nagar, Near Shoolay Circle,<br />
                  Bengaluru, Karnataka 560025<br />
                  India
                </p>
              </div>
            </div>
            
            {/* Contact Us */}
            <div className="flex gap-[18px] items-start">
              <span className="p-[12px] rounded-full bg-[rgba(212,175,55,0.08)] text-[var(--gold)] shrink-0">
                <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </span>
              <div>
                <h3 className="font-serif text-[20px] text-[var(--light)] mb-[12px] font-light">Contact Us</h3>
                <div className="flex flex-col gap-[12px]">
                  <div className="flex items-center gap-[12px] group">
                    <span className="p-[8px] rounded-full bg-[rgba(212,175,55,0.06)] text-[var(--gold)] group-hover:scale-110 transition-transform">
                      <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </span>
                    <a href="mailto:info@glamourphotographics.com" className="text-[13.5px] text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
                      info@glamourphotographics.com
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-[12px] group">
                    <span className="p-[8px] rounded-full bg-[rgba(10,102,194,0.06)] text-[#0A66C2] group-hover:scale-110 transition-transform">
                      <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.56 11.56 0 0 1 8.56 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1C3 13.39 10.61 21 20 21c.55 0 1-.45 1-1v-3.62c0-.55-.45-1-1-1z" />
                      </svg>
                    </span>
                    <a href="tel:+919845003786" className="text-[13.5px] text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
                      +91 98450 03786
                    </a>
                  </div>

                  <div className="flex items-center gap-[12px] group">
                    <span className="p-[8px] rounded-full bg-[rgba(37,211,102,0.06)] text-[#25D366] group-hover:scale-110 transition-transform">
                      <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.004 2C6.48 2 2.001 6.479 2.001 12c0 1.892.527 3.661 1.446 5.178L2 22l4.97-1.393A9.927 9.927 0 0 0 12.004 22c5.522 0 10.002-4.477 10.002-10S17.526 2 12.004 2zm0 18.002c-1.666 0-3.23-.443-4.595-1.217l-.328-.188-3.05.855.87-2.977-.208-.33a7.95 7.95 0 0 1-1.218-4.148c0-4.412 3.59-8.002 8.001-8.002 4.414 0 8.004 3.59 8.004 8.002-.001 4.413-3.591 8.003-8.004 8.003z"/>
                      </svg>
                    </span>
                    <a href="https://wa.me/918971168868" target="_blank" rel="noopener noreferrer" className="text-[13.5px] text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
                      +91 89711 68868 (WhatsApp)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="flex gap-[18px] items-start">
              <span className="p-[12px] rounded-full bg-[rgba(212,175,55,0.08)] text-[var(--gold)] shrink-0">
                <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </span>
              <div>
                <h3 className="font-serif text-[20px] text-[var(--light)] mb-[12px] font-light">Follow Us</h3>
                <div className="flex gap-[16px] items-center">
                  {[
                    {
                      name: 'Facebook',
                      url: 'https://www.facebook.com/p/Glamour-Photographics-100064007321571/',
                      color: '#1877F2',
                      svg: (
                        <svg className="w-[20px] h-[20px]" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                          <path fill="currentColor" d='M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z' />
                        </svg>
                      )
                    },
                    {
                      name: 'Instagram',
                      url: 'https://www.instagram.com/glamourphotographics.corporate?igsh=MTIzdjAzMW5tYW44cw',
                      color: '#E4405F',
                      svg: (
                        <svg className="w-[20px] h-[20px]" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                          <path fill="currentColor" d='M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z' />
                        </svg>
                      )
                    },
                    {
                      name: 'LinkedIn',
                      url: 'https://in.linkedin.com/company/glamour-photographics%20',
                      color: '#0A66C2',
                      svg: (
                        <svg className="w-[20px] h-[20px]" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                          <path fill="currentColor" d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
                        </svg>
                      )
                    },
                    {
                      name: 'YouTube',
                      url: 'https://www.youtube.com/@ashrafhussain136',
                      color: '#FF0000',
                      svg: (
                        <svg className="w-[20px] h-[20px]" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
                          <path fill="currentColor" d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z' />
                        </svg>
                      )
                    }
                  ].map((social) => (
                    <a 
                      key={social.name} 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: social.color }}
                      className="opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                    >
                      {social.svg}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7 reveal opacity-0 anim-fade-up delay-100">
          <div className="bg-[rgba(10,10,10,0.02)] border border-[rgba(10,10,10,0.05)] rounded-lg p-[40px] md:p-[50px] shadow-sm">
            <h3 className="font-serif text-[28px] text-[var(--light)] mb-[30px] font-light">Send us a message</h3>
            
            <form className="flex flex-col gap-[24px]" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[10px] tracking-[0.25em] uppercase text-[var(--light)] font-semibold">Your Name *</label>
                  <input 
                    suppressHydrationWarning
                    type="text" 
                    className="bg-white border border-[rgba(10,10,10,0.08)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] rounded-md outline-none px-[16px] py-[12px] text-[14px] text-[var(--light)] transition-all duration-300 font-light" 
                    required 
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[10px] tracking-[0.25em] uppercase text-[var(--light)] font-semibold">Your Email *</label>
                  <input 
                    suppressHydrationWarning
                    type="email" 
                    className="bg-white border border-[rgba(10,10,10,0.08)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] rounded-md outline-none px-[16px] py-[12px] text-[14px] text-[var(--light)] transition-all duration-300 font-light" 
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="text-[10px] tracking-[0.25em] uppercase text-[var(--light)] font-semibold">Phone Number</label>
                <input 
                  suppressHydrationWarning
                  type="tel" 
                  className="bg-white border border-[rgba(10,10,10,0.08)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] rounded-md outline-none px-[16px] py-[12px] text-[14px] text-[var(--light)] transition-all duration-300 font-light" 
                />
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="text-[10px] tracking-[0.25em] uppercase text-[var(--light)] font-semibold">Your Message *</label>
                <textarea 
                  suppressHydrationWarning
                  rows="4" 
                  className="bg-white border border-[rgba(10,10,10,0.08)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] rounded-md outline-none px-[16px] py-[12px] text-[14px] text-[var(--light)] transition-all duration-300 resize-none font-light" 
                  required
                ></textarea>
              </div>

              <div className="mt-[10px]">
                <button 
                  suppressHydrationWarning
                  type="submit" 
                  className="w-full md:w-auto text-center justify-center border-2 border-[var(--gold)] bg-transparent text-[var(--light)] hover:bg-[var(--gold)] hover:text-white transition-all duration-300 px-[40px] py-[14px] rounded-full uppercase tracking-[0.25em] text-[11px] font-semibold cursor-pointer shadow-sm hover:shadow-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ─── 15. SHOWREEL VIDEO MODAL OVERLAY ─── */}
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

      {/* ─── 16. TESTIMONIAL CERTIFICATE LIGHTBOX OVERLAY ─── */}
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
