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
  const projectsCount = useCountUp(2000, 1800, statsTriggered);
  const filmsCount = useCountUp(500, 1800, statsTriggered);
  const clientsCount = useCountUp(300, 1800, statsTriggered);
  const countriesCount = useCountUp(25, 1800, statsTriggered);

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
      "/images/our_portfolio/te3.jpg",
      "/images/our_portfolio/dilquar.jpg",
      "/images/our_portfolio/11.jpg",
      "/images/our_portfolio/22.jpg",
      "/images/our_portfolio/33.jpg",
    ],
    CORPORATE: [
      "/images/our_portfolio/cp-7.jpg",
      "/images/our_portfolio/cp-10.jpg",
      "/images/our_portfolio/cp-12.jpg",
      "/images/our_portfolio/Bill clinton.jpeg",
      "/images/our_portfolio/dilquar.jpg",
    ],
    EVENTS: [
      "/images/our_portfolio/33.jpg",
      "/images/our_portfolio/Srk.jpg",
      "/images/our_portfolio/highlights_3C1A0761.jpg",
      "/images/our_portfolio/highlights_3C1A0775.jpg",
      "/images/our_portfolio/highlights_3C1A0782.jpg",
    ],
    INDUSTRIAL: [
      "/images/our_portfolio/rtx-1.jpg",
      "/images/our_portfolio/te3.jpg",
    ],
    DOCUMENTARY: [
      "/images/our_portfolio/11.jpg",
      "/images/our_portfolio/22.jpg",
      "/images/our_portfolio/highlights_3C1A0841.jpg",
    ]
  };

  const activeImages = portfolioImages[activePortfolioTab] || portfolioImages['ALL'];

  return (
    <main className="w-full bg-[var(--dark)] text-[var(--light)] pb-[100px] overflow-x-hidden cursor-none relative">
      
      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative min-h-[100svh] flex flex-col justify-center md:flex-row md:justify-start md:items-center px-[5%] md:px-[8%] pt-[120px] md:pt-[80px] pb-[60px] md:pb-0 overflow-hidden bg-black">
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
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-[rgba(0,0,0,0.85)] md:via-[rgba(0,0,0,0.65)] to-transparent z-10" />
        </div>
        <div className="w-full max-w-[650px] flex-none z-20 relative pt-[40px] md:pt-[60px] text-left">
          <h1 className="font-serif text-left text-[clamp(52px,7vw,100px)] font-light leading-[1.05] tracking-[-0.02em] mb-[32px] text-white">
            <span className="block overflow-hidden pb-[4px]"><span className="block anim-slide-up delay-100" style={{ transform: 'translateY(100%)' }}>We Capture</span></span>
            <span className="block overflow-hidden pb-[4px]"><span className="block anim-slide-up delay-150" style={{ transform: 'translateY(100%)' }}>Moments.</span></span>
            <span className="block overflow-hidden pb-[4px]"><span className="block anim-slide-up delay-200" style={{ transform: 'translateY(100%)' }}>We Create</span></span>
            <span className="block overflow-hidden pb-[4px]"><span className="block anim-slide-up delay-240 text-[var(--gold)] italic font-medium" style={{ transform: 'translateY(100%)' }}>Legacies.</span></span>
          </h1>
          <p className="text-[15px] md:text-[17px] text-[rgba(255,255,255,0.7)] leading-[1.7] max-w-[420px] opacity-0 anim-fade-up delay-300 mb-[48px] font-light">
            40+ Years of Storytelling Through The Lens of Excellence
          </p>
          <div className="opacity-0 anim-fade-up delay-380">
            <Link href="/portfolio" className="inline-flex items-center justify-center border border-[rgba(197,164,109,0.5)] text-[var(--light)] uppercase tracking-[0.2em] text-[11px] font-medium px-[36px] py-[18px] transition-all duration-400 hover:bg-[var(--gold)] hover:text-black hover:border-transparent cursor-none">
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 2. EDITORIAL MARQUEE ─── */}
      <div className="marquee-wrapper py-[20px] bg-[var(--dark-panel)] border-y border-[rgba(255,255,255,0.05)] overflow-hidden w-full relative z-20">
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
      <div className="marquee-wrapper py-[20px] bg-[var(--dark-panel)] border-y border-[rgba(255,255,255,0.05)] overflow-hidden w-full relative z-20">
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

      {/* ─── 3. WE TELL STORIES THAT STAY ─── */}
      <section className="py-[120px] px-[8%] md:px-[10%] bg-black relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          <div className="reveal opacity-0 anim-fade-up z-20">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">
              We Don't Just Shoot
            </span>
            <h2 className="font-serif text-[clamp(36px,5vw,70px)] font-light leading-[1.1] tracking-[-0.01em] text-white mb-[32px]">
              We Tell Stories <br />
              <span className="italic text-[var(--gold)] font-medium">That Stay.</span>
            </h2>
            <p className="text-[14px] md:text-[15px] leading-[1.8] text-[var(--muted)] max-w-[480px] mb-[40px] font-light">
              From corporate documentaries that build trust, to powerful commercials and premium event storytelling, we capture moments that create long-lasting brand legacies.
            </p>
            <div className="flex flex-wrap gap-[16px]">
              <Link href="/portfolio" className="border border-[rgba(255,255,255,0.2)] text-white text-[10px] tracking-[0.2em] uppercase py-[16px] px-[32px] hover:bg-white hover:text-black transition-all duration-300 cursor-none font-medium">
                Explore Our Work
              </Link>
              <button 
                suppressHydrationWarning
                onClick={() => setShowreelOpen(true)} 
                className="flex items-center gap-[12px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] text-[var(--gold)] text-[10px] tracking-[0.2em] uppercase py-[16px] px-[32px] hover:bg-[var(--gold)] hover:text-black hover:border-transparent transition-all duration-300 cursor-none font-medium"
              >
                <Play className="w-[12px] h-[12px] fill-current" />
                Watch Showreel
              </button>
            </div>
          </div>
          <div className="relative h-[480px] md:h-[600px] w-full rounded-sm overflow-hidden img-mask reveal z-10 group">
            <img src="/images/about-silhouette.jpg" alt="Photographer Silhouette" className="w-full h-full object-cover grayscale-[30%] opacity-80 transition-transform duration-[1200ms] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                suppressHydrationWarning
                onClick={() => setShowreelOpen(true)} 
                className="w-[80px] h-[80px] rounded-full border border-[rgba(197,164,109,0.4)] bg-[rgba(5,5,5,0.65)] hover:bg-[var(--gold)] hover:border-transparent text-white hover:text-black flex items-center justify-center transition-all duration-500 scale-90 hover:scale-100 cursor-none group/play"
              >
                <Play className="w-[20px] h-[20px] fill-current ml-[4px] transition-transform duration-300 group-hover/play:scale-110" />
              </button>
              <span className="absolute bottom-[40px] text-[9px] tracking-[0.3em] uppercase text-[var(--gold)] font-medium opacity-80">Play Corporate Showreel</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. CRAFTING VISUAL STORIES SINCE 1980 ─── */}
      <section className="py-[120px] px-[8%] md:px-[10%] bg-[var(--dark-panel)] border-y border-[rgba(255,255,255,0.05)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[60px] items-center">
          
          {/* Left Column Description */}
          <div className="lg:col-span-4 reveal opacity-0 anim-fade-up">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">
              Our Heritage
            </span>
            <h3 className="font-serif text-[32px] leading-[1.2] text-white mb-[24px]">
              Crafting Visual <br />
              Stories Since <span className="italic text-[var(--gold)] font-light">1980</span>
            </h3>
            <p className="text-[14px] leading-[1.8] text-[var(--muted)] mb-[32px] font-light">
              For over four decades, Glamour Photographics has been the trusted visual partner for leading brands, institutions, and visionary creators across India.
            </p>
            <Link href="/about" className="text-[10px] tracking-[0.25em] uppercase text-white pb-[6px] border-b border-white hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors cursor-none">
              Read More Details
            </Link>
          </div>

          {/* Center Column Video */}
          <div className="lg:col-span-5 w-full aspect-video rounded-sm overflow-hidden border border-[rgba(255,255,255,0.05)] reveal opacity-0 anim-fade-up delay-100">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/oz26LF0gvxg"
              title="Glamour Photographics Showreel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Right Column Icons List */}
          <div className="lg:col-span-3 flex flex-col gap-[32px] reveal opacity-0 anim-fade-up delay-200">
            <div className="flex gap-[20px] items-start">
              <div className="p-[10px] bg-[rgba(197,164,109,0.05)] rounded-sm border border-[rgba(197,164,109,0.15)] text-[var(--gold)]">
                <Award className="w-[18px] h-[18px]" />
              </div>
              <div>
                <h4 className="text-[13px] tracking-[0.05em] uppercase font-semibold text-white mb-[6px]">40+ Years of Excellence</h4>
                <p className="text-[12px] text-[var(--muted)] font-light leading-[1.5]">Decades of visual storytelling and corporate legacy.</p>
              </div>
            </div>
            <div className="flex gap-[20px] items-start">
              <div className="p-[10px] bg-[rgba(197,164,109,0.05)] rounded-sm border border-[rgba(197,164,109,0.15)] text-[var(--gold)]">
                <User className="w-[18px] h-[18px]" />
              </div>
              <div>
                <h4 className="text-[13px] tracking-[0.05em] uppercase font-semibold text-white mb-[6px]">Creative Directors</h4>
                <p className="text-[12px] text-[var(--muted)] font-light leading-[1.5]">A passionate team of directors, technicians and editors.</p>
              </div>
            </div>
            <div className="flex gap-[20px] items-start">
              <div className="p-[10px] bg-[rgba(197,164,109,0.05)] rounded-sm border border-[rgba(197,164,109,0.15)] text-[var(--gold)]">
                <Camera className="w-[18px] h-[18px]" />
              </div>
              <div>
                <h4 className="text-[13px] tracking-[0.05em] uppercase font-semibold text-white mb-[6px]">High-End Studio Gear</h4>
                <p className="text-[12px] text-[var(--muted)] font-light leading-[1.5]">Equipped with industry-grade 4K, 8K and drone setups.</p>
              </div>
            </div>
            <div className="flex gap-[20px] items-start">
              <div className="p-[10px] bg-[rgba(197,164,109,0.05)] rounded-sm border border-[rgba(197,164,109,0.15)] text-[var(--gold)]">
                <Film className="w-[18px] h-[18px]" />
              </div>
              <div>
                <h4 className="text-[13px] tracking-[0.05em] uppercase font-semibold text-white mb-[6px]">End-to-End Execution</h4>
                <p className="text-[12px] text-[var(--muted)] font-light leading-[1.5]">From storyboarding and production to final post-edit.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 5. OUR STORY 1982 OVERLAPPING DESIGN ─── */}
      <section className="py-[120px] px-[8%] md:px-[10%] bg-black relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">
          
          {/* Left Column Overlapping Boxes */}
          <div className="relative h-[460px] w-full flex items-center justify-center reveal opacity-0 anim-fade-up">
            {/* Box 1 - Dark Background Panel */}
            <div className="absolute top-[20px] left-[20px] w-[75%] h-[320px] bg-[var(--dark-panel)] border border-[rgba(255,255,255,0.05)] rounded-sm p-[40px] flex flex-col justify-between shadow-2xl z-10">
              <h4 className="font-serif text-[24px] text-white">Hameed Hussain</h4>
              <p className="text-[11px] tracking-[0.25em] uppercase text-[var(--gold)]">Founder & Creative Visionary</p>
              <div className="w-[40px] h-[1px] bg-[var(--gold)]"></div>
            </div>

            {/* Box 2 - Overlapping Golden/Ivory Styled Panel */}
            <div className="absolute bottom-[20px] right-[20px] w-[65%] h-[240px] bg-[rgba(197,164,109,0.08)] border border-[rgba(197,164,109,0.25)] rounded-sm p-[30px] flex flex-col justify-between shadow-lg z-20 backdrop-blur-md">
              <span className="text-[11px] tracking-[0.3em] uppercase text-[var(--gold)] font-medium">Visual Legacy</span>
              <h5 className="font-serif text-[28px] text-white italic font-light">Est. 1982</h5>
              <p className="text-[12px] text-[var(--muted)] leading-relaxed font-light">Pioneering corporate imagery in Bangalore.</p>
            </div>
          </div>

          {/* Right Column Story Text */}
          <div className="reveal opacity-0 anim-fade-up delay-100">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">
              1982 - Our Roots
            </span>
            <h3 className="font-serif text-[clamp(32px,4vw,56px)] font-light leading-[1.2] text-white mb-[28px]">
              Glamour Photographics
            </h3>
            <blockquote className="border-l border-[var(--gold)] pl-[20px] text-[15px] italic text-[var(--gold)] leading-relaxed mb-[28px] font-serif">
              "Our goal is not to merely provide media services, but to serve people through the art of storytelling and media creation."
            </blockquote>
            <p className="text-[14px] leading-[1.8] text-[var(--muted)] mb-[24px] font-light">
              Established by Hameed Hussain in 1982, we embarked on a journey to introduce vibrant colour media solutions to businesses and consumers in Bengaluru—proudly serving the corporate and wedding industries ever since.
            </p>
            <Link href="/about" className="inline-flex items-center gap-[12px] text-[11px] tracking-[0.2em] uppercase text-white font-medium hover:text-[var(--gold)] cursor-none transition-colors group">
              Read Our Story <span className="transition-transform duration-300 group-hover:translate-x-[4px]">→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ─── 6. ANIMATED STATS STRIP ─── */}
      <section ref={statsRef} className="py-[80px] px-[8%] md:px-[10%] bg-[rgba(197,164,109,0.02)] border-y border-[rgba(197,164,109,0.1)] relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[40px] lg:gap-0 justify-items-center">
          <div className="text-center">
            <div className="font-serif text-[48px] md:text-[64px] text-white font-light tracking-tight mb-[8px] flex items-center justify-center">
              <span>{projectsCount}</span><span className="text-[var(--gold)] font-medium">+</span>
            </div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] font-medium">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="font-serif text-[48px] md:text-[64px] text-white font-light tracking-tight mb-[8px] flex items-center justify-center">
              <span>{filmsCount}</span><span className="text-[var(--gold)] font-medium">+</span>
            </div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] font-medium">Corporate Films</p>
          </div>
          <div className="text-center">
            <div className="font-serif text-[48px] md:text-[64px] text-white font-light tracking-tight mb-[8px] flex items-center justify-center">
              <span>{clientsCount}</span><span className="text-[var(--gold)] font-medium">+</span>
            </div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] font-medium">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="font-serif text-[48px] md:text-[64px] text-white font-light tracking-tight mb-[8px] flex items-center justify-center">
              <span>{countriesCount}</span><span className="text-[var(--gold)] font-medium">+</span>
            </div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] font-medium">Countries Served</p>
          </div>
        </div>
      </section>

      {/* ─── 7. FEATURED WORK (CAROUSEL WITH VIDEOS) ─── */}
      <section className="py-[120px] px-[8%] md:px-[10%] bg-black">
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
            <Link href="/corporate" className="text-[10px] tracking-[0.25em] uppercase font-semibold py-[12px] px-[24px] border border-[rgba(255,255,255,0.2)] text-white hover:bg-white hover:text-black cursor-none transition-all">
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
                <div className="group relative bg-[var(--dark-panel)] border border-[rgba(255,255,255,0.05)] rounded-sm overflow-hidden flex flex-col h-[380px]">
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
                    <Link href={`/corporate/${project.slug}`} className="text-[10px] tracking-[0.2em] uppercase text-white font-medium inline-flex items-center gap-[8px] cursor-none border-b border-transparent hover:border-white w-fit">
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
      <section className="py-[120px] px-[8%] md:px-[10%] bg-[var(--dark)] border-t border-[rgba(255,255,255,0.05)]">
        <div className="mb-[60px] reveal opacity-0 anim-fade-up">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">Services Categories</span>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light leading-[1.2] text-white">What We Do</h2>
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
            <div key={idx} className="group relative p-[40px] rounded-sm overflow-hidden border border-[rgba(255,255,255,0.05)] hover:border-[var(--gold)] transition-all duration-[400ms] cursor-none min-h-[280px] flex flex-col justify-end">
              <div className="absolute inset-0 z-0">
                <img src={srv.bg} alt={srv.title} className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-[rgba(5,5,5,0.85)] to-[rgba(5,5,5,0.4)]" />
              </div>
              <div className="relative z-10">
                <srv.icon className="w-[32px] h-[32px] text-[var(--gold)] mb-[24px] transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-[18px] font-serif text-white mb-[12px] group-hover:text-[var(--gold)] transition-colors">{srv.title}</h3>
                <p className="text-[13px] text-[var(--muted)] leading-[1.6] font-light">{srv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 9. OUR CLIENTS ─── */}
      <section className="py-[120px] px-[8%] md:px-[10%] bg-black">
        <h3 className="text-[28px] font-serif text-white mb-[40px] reveal opacity-0 anim-fade-up">Our Clients</h3>
        <p className="text-[12px] text-[var(--gold)] tracking-[0.2em] uppercase mb-[20px] reveal opacity-0 anim-fade-up delay-100">Our Enterprise Partnerships</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[rgba(255,255,255,0.05)]">
          {[
            { name: "TCS", slug: "tcs", logo: "/logo-clients/TCS_NewLogo_Final_RGB.png" },
            { name: "CII", slug: "cii", logo: "/logo-clients/cii.jpg" },
            { name: "CGI", slug: "cgi", logo: "/logo-clients/CGI_Inc.-Logo.wine.png" },
            { name: "Presidency University", slug: "presidency", logo: "/logo-clients/presidency-university-yelahanka-bangalore-universities-si0nhgmmkz.jpg" },
            { name: "TATA ELXSI", slug: "tata-elxsi", logo: "/logo-clients/tata-elxsi-moves-focus-away-from-driverless-tech.avif" },
            { name: "RTX", slug: "rtx", logo: "/logo-clients/RTX.webp" },
            { name: "Toyota", slug: "toyota" },
            { name: "PAI", slug: "pai" }
          ].map((client, i) => (
            <Link href={`/corporate/${client.slug}`} key={i} className="group h-[160px] border border-[rgba(255,255,255,0.05)] flex items-center justify-center p-[20px] hover:border-[var(--gold)] hover:bg-[rgba(197,164,109,0.02)] transition-all cursor-none">
              {client.logo ? (
                <img src={client.logo} alt={client.name} className="max-h-[60px] max-w-[85%] object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
              ) : (
                <span className="font-serif text-[18px] text-[var(--muted)] group-hover:text-white transition-colors text-center">{client.name}</span>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* ─── 10. OUR PORTFOLIO (Masonry Tabs) ─── */}
      <section className="py-[120px] px-[8%] md:px-[10%] bg-[var(--dark-panel)] border-y border-[rgba(255,255,255,0.05)]">
        <h3 className="text-[28px] font-serif text-white mb-[40px] reveal opacity-0 anim-fade-up">Our Portfolio</h3>
        <div className="flex flex-wrap gap-[30px] border-b border-[rgba(255,255,255,0.1)] pb-[15px] mb-[40px] reveal opacity-0 anim-fade-up delay-100">
          {['ALL', 'CORPORATE', 'EVENTS', 'INDUSTRIAL', 'DOCUMENTARY'].map((tab) => (
            <button 
              suppressHydrationWarning
              key={tab} 
              onClick={() => setActivePortfolioTab(tab)} 
              className={`text-[10px] tracking-[0.2em] uppercase pb-[15px] relative cursor-none ${activePortfolioTab === tab ? 'text-[var(--gold)]' : 'text-[var(--muted)] hover:text-white'}`}
            >
              {tab}
              {activePortfolioTab === tab && <div className="absolute bottom-[-16px] left-0 w-full h-[2px] bg-[var(--gold)]" />}
            </button>
          ))}
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-[24px] [column-fill:_balance] w-full">
          {activeImages.map((src, idx) => (
            <div key={idx} className="break-inside-avoid mb-[24px] relative group overflow-hidden rounded-sm border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.01)]">
              <img src={src} alt={`Portfolio Image ${idx + 1}`} className="w-full h-auto object-cover transition-transform duration-[800ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[30px]">
                <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[8px]">Gallery Spotlight</span>
                <h4 className="font-serif text-[18px] text-white">Visual Artifact</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 11. OUR SERVICES (Details List) ─── */}
      <section className="py-[120px] px-[8%] md:px-[10%] bg-black grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-start">
        <div className="reveal opacity-0 anim-fade-up">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">Corporate Capabilities</span>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light leading-[1.2] text-white mb-[40px]">Our Services</h2>
          <div className="flex flex-col gap-[20px]">
            {[
              { id: '01', title: 'Corporate Photography', desc: 'From workspace portraits to high-end infrastructure photography.' },
              { id: '02', title: 'Cinematic Videography', desc: 'Custom walkthroughs, drone films, and leadership interviews.' },
              { id: '03', title: 'Event Coverage', desc: 'High-impact coverage of corporate events and summits.' },
              { id: '04', title: 'Photo Restoration', desc: 'Preserving old legacy film rolls and restoring damaged pictures.' }
            ].map((item) => (
              <div key={item.id} className="py-[24px] border-b border-[rgba(255,255,255,0.08)] flex gap-[30px] items-start group">
                <span className="font-serif text-[18px] text-[var(--gold)] font-light italic mt-[2px]">{item.id}</span>
                <div>
                  <h3 className="text-[16px] font-semibold text-white mb-[8px] group-hover:text-[var(--gold)] transition-colors">{item.title}</h3>
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
      <section className="py-[120px] px-[8%] md:px-[10%] bg-[var(--dark-panel)] border-y border-[rgba(255,255,255,0.05)]">
        <div className="mb-[60px] reveal opacity-0 anim-fade-up">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">Minds Behind the Lenses</span>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light leading-[1.2] text-white">Our Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {[
            { name: "Hameed Hussain", role: "Founder & Director", img: "/logo-clients/founder-ceo.jpg" },
            { name: "Anzar Hussain", role: "Creative Lead", img: "/logo-clients/founder-ceo.jpg" },
            { name: "Zia Hussain", role: "Head of Operations", img: "/logo-clients/founder-ceo.jpg" }
          ].map((member, idx) => (
            <div key={idx} className="group relative rounded-sm overflow-hidden bg-[var(--dark)] border border-[rgba(255,255,255,0.05)] hover:border-[var(--gold)] transition-all duration-500 cursor-none flex flex-col">
              <div className="h-[340px] w-full overflow-hidden relative">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-panel)] via-transparent to-transparent opacity-85" />
              </div>
              <div className="p-[24px]">
                <span className="text-[9px] tracking-[0.25em] uppercase text-[var(--gold)] mb-[8px] block font-medium">{member.role}</span>
                <h3 className="font-serif text-[22px] text-white group-hover:text-[var(--gold)] transition-colors leading-[1.2]">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 13. WHAT OUR CLIENTS SAY (TESTIMONIALS SWIPER) ─── */}
      <section className="py-[120px] px-[8%] md:px-[10%] bg-black">
        <div className="max-w-[800px] mx-auto reveal opacity-0 anim-fade-up">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[24px] block text-center">Testimonials</span>
          
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="testimonial-swiper"
          >
            {[
              {
                quote: "Glamour Photographics captured our annual conference with unmatched professionalism. Every frame told a story.",
                author: "Corporate Client",
                org: "Confederation of Indian Industry"
              },
              {
                quote: "The wedding film they created for us is a treasure we will cherish for generations. Pure artistry.",
                author: "Wedding Client",
                org: "Bengaluru, 2023"
              },
              {
                quote: "Their corporate film elevated our brand narrative. The strategic insight they bring is extraordinary.",
                author: "Marketing Director",
                org: "Tata Elxsi"
              },
              {
                quote: "Over 15 years of partnership. Their consistency in quality and creativity is unparalleled in the industry.",
                author: "Communications Head",
                org: "Toyota India"
              }
            ].map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="text-center pb-[50px] px-[20px]">
                  <p className="font-serif text-[18px] md:text-[24px] leading-relaxed text-white italic mb-[32px] font-light">
                    "{t.quote}"
                  </p>
                  <h4 className="text-[12px] tracking-[0.2em] uppercase font-bold text-[var(--gold)] mb-[4px]">{t.author}</h4>
                  <p className="text-[10px] tracking-[0.1em] uppercase text-[var(--muted)]">{t.org}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ─── 14. GET IN TOUCH (FOOTER FORM) ─── */}
      <section id="contact-section" className="py-[120px] px-[8%] md:px-[10%] bg-[var(--dark)] border-t border-[rgba(255,255,255,0.05)] grid grid-cols-1 lg:grid-cols-2 gap-[80px]">
        <div className="reveal opacity-0 anim-fade-up">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">Start a Conversation</span>
          <h2 className="font-serif text-[clamp(32px,4vw,56px)] font-light leading-[1.2] text-white mb-[32px]">Let's Create <br />Something Together</h2>
          <div className="flex flex-col gap-[20px] text-[13px] text-[var(--muted)] font-light mt-[40px]">
            <p className="flex items-center gap-[12px]"><MapPin className="w-[16px] h-[16px] text-[var(--gold)]" /> Bangalore, India</p>
            <p className="flex items-center gap-[12px]"><Building2 className="w-[16px] h-[16px] text-[var(--gold)]" /> Glamour House, Infantry Road</p>
          </div>
        </div>
        <div className="reveal opacity-0 anim-fade-up delay-100">
          <form className="flex flex-col gap-[30px]" onSubmit={(e) => e.preventDefault()}>
            <input suppressHydrationWarning type="text" placeholder="Your Name" className="bg-transparent border-b border-[rgba(255,255,255,0.1)] pb-[16px] text-white text-[14px] focus:outline-none focus:border-[var(--gold)] transition-colors w-full" />
            <input suppressHydrationWarning type="email" placeholder="Your Email" className="bg-transparent border-b border-[rgba(255,255,255,0.1)] pb-[16px] text-white text-[14px] focus:outline-none focus:border-[var(--gold)] transition-colors w-full" />
            <input suppressHydrationWarning type="tel" placeholder="Phone Number" className="bg-transparent border-b border-[rgba(255,255,255,0.1)] pb-[16px] text-white text-[14px] focus:outline-none focus:border-[var(--gold)] transition-colors w-full" />
            <textarea placeholder="Your Message" rows={4} className="bg-transparent border-b border-[rgba(255,255,255,0.1)] pb-[16px] text-white text-[14px] focus:outline-none focus:border-[var(--gold)] transition-colors w-full resize-none" />
            <button suppressHydrationWarning type="submit" className="bg-[var(--gold)] text-black font-semibold text-[11px] tracking-[0.2em] uppercase py-[20px] w-full mt-[20px] hover:bg-white transition-colors cursor-none">
              Send Message
            </button>
          </form>
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

    </main>
  );
}
