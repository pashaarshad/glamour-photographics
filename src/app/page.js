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
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] lg:gap-[60px] items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-5 reveal opacity-0 anim-fade-up z-20">
              <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">
                We Don't Just Shoot
              </span>
              <h2 className="font-serif text-[clamp(36px,4.5vw,60px)] font-light leading-[1.1] tracking-[-0.01em] text-[var(--light)] mb-[32px]">
                We Tell Stories <br />
                <span className="italic text-[var(--gold)] font-medium">That Stay.</span>
              </h2>
              <p className="text-[14px] md:text-[15px] leading-[1.8] text-[var(--muted)] max-w-[480px] mb-[40px] font-light">
                From corporate documentaries that build trust, to powerful commercials and premium event storytelling, we capture moments that create long-lasting brand legacies.
              </p>
              <div className="flex flex-wrap gap-[16px]">
                <Link href="/portfolio" className="border border-[rgba(10,10,10,0.15)] text-[var(--light)] text-[10px] tracking-[0.2em] uppercase py-[16px] px-[32px] hover:bg-[var(--light)] hover:text-[var(--dark)] transition-all duration-300 cursor-none font-medium">
                  Explore Our Work
                </Link>
              </div>
            </div>

            {/* Right Column: Video */}
            <div className="lg:col-span-7 w-full aspect-video rounded-sm overflow-hidden border border-[rgba(10,10,10,0.06)] shadow-[0_24px_70px_rgba(10,10,10,0.05)] reveal opacity-0 anim-fade-up delay-100">
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
                  className="h-[32px] w-auto object-contain select-none pointer-events-none invert opacity-95 self-start" 
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
              <Link href={`/corporate/${client.slug}`} key={i} className="group h-[140px] border border-[rgba(10,10,10,0.06)] flex items-center justify-center p-[20px] hover:border-[var(--gold)] hover:z-10 hover:shadow-md hover:bg-[rgba(197,164,109,0.02)] transition-all cursor-none relative">
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
          {['ALL', 'CORPORATE', 'EVENTS', 'INDUSTRIAL', 'DOCUMENTARY'].map((tab) => (
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
          if (activeImages.length < 5) {
            return (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
                {activeImages.map((src, idx) => (
                  <div key={idx} className="relative aspect-[3/2] group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                    <img src={src} alt="Portfolio Work" className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[20px]">
                      <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[8px]">Gallery Spotlight</span>
                      <h4 className="font-serif text-[16px] text-white">Visual Artifact</h4>
                    </div>
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
                <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] h-full min-h-[320px] md:min-h-0 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                  <img src={block1[0]} alt="Portfolio Work" className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[30px]">
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[8px]">Gallery Spotlight</span>
                    <h4 className="font-serif text-[18px] text-white">Visual Artifact</h4>
                  </div>
                </div>
                {/* Right: 4 Horizontal (Images 1, 2, 3, 4) */}
                {block1.slice(1).map((src, idx) => (
                  <div key={idx} className="relative aspect-[3/2] group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                    <img src={src} alt="Portfolio Work" className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[20px]">
                      <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[8px]">Gallery Spotlight</span>
                      <h4 className="font-serif text-[16px] text-white">Visual Artifact</h4>
                    </div>
                  </div>
                ))}
              </div>

              {/* BLOCK 2 (5 Images: 1 Vertical, 4 Horizontal) */}
              {hasBlock2 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] items-stretch w-full">
                  {/* Left: 1 Vertical (Image 5) */}
                  <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] h-full min-h-[320px] md:min-h-0 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                    <img src={block2[0]} alt="Portfolio Work" className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[30px]">
                      <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[8px]">Gallery Spotlight</span>
                      <h4 className="font-serif text-[18px] text-white">Visual Artifact</h4>
                    </div>
                  </div>
                  {/* Right: 4 Horizontal (Images 6, 7, 8, 9) */}
                  {block2.slice(1).map((src, idx) => (
                    <div key={idx} className="relative aspect-[3/2] group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                      <img src={src} alt="Portfolio Work" className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[20px]">
                        <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[8px]">Gallery Spotlight</span>
                        <h4 className="font-serif text-[16px] text-white">Visual Artifact</h4>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* REMAINING IMAGES (Standard 3-Column Grid) */}
              {remaining.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
                  {remaining.map((src, idx) => (
                    <div key={idx} className="relative aspect-[3/2] group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                      <img src={src} alt="Portfolio Work" className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]" />
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
      <section id="contact-section" className="py-[120px] px-[8%] md:px-[10%] bg-[var(--darker)] border-t border-[rgba(10,10,10,0.06)] grid grid-cols-1 lg:grid-cols-2 gap-[80px]">
        <div className="reveal opacity-0 anim-fade-up">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">Start a Conversation</span>
          <h2 className="font-serif text-[clamp(32px,4vw,56px)] font-light leading-[1.2] text-[var(--light)] mb-[32px]">Let's Create <br />Something Together</h2>
          <div className="flex flex-col gap-[20px] text-[13px] text-[var(--muted)] font-light mt-[40px]">
            <p className="flex items-center gap-[12px]"><MapPin className="w-[16px] h-[16px] text-[var(--gold)]" /> Bangalore, India</p>
            <p className="flex items-center gap-[12px]"><Building2 className="w-[16px] h-[16px] text-[var(--gold)]" /> Glamour House, Infantry Road</p>
          </div>
        </div>
        <div className="reveal opacity-0 anim-fade-up delay-100">
          <form className="flex flex-col gap-[30px]" onSubmit={(e) => e.preventDefault()}>
            <input suppressHydrationWarning type="text" placeholder="Your Name" className="bg-transparent border-b border-[rgba(10,10,10,0.1)] pb-[16px] text-[var(--light)] text-[14px] focus:outline-none focus:border-[var(--gold)] transition-colors w-full placeholder:text-[var(--muted)]" />
            <input suppressHydrationWarning type="email" placeholder="Your Email" className="bg-transparent border-b border-[rgba(10,10,10,0.1)] pb-[16px] text-[var(--light)] text-[14px] focus:outline-none focus:border-[var(--gold)] transition-colors w-full placeholder:text-[var(--muted)]" />
            <input suppressHydrationWarning type="tel" placeholder="Phone Number" className="bg-transparent border-b border-[rgba(10,10,10,0.1)] pb-[16px] text-[var(--light)] text-[14px] focus:outline-none focus:border-[var(--gold)] transition-colors w-full placeholder:text-[var(--muted)]" />
            <textarea placeholder="Your Message" rows={4} className="bg-transparent border-b border-[rgba(10,10,10,0.1)] pb-[16px] text-[var(--light)] text-[14px] focus:outline-none focus:border-[var(--gold)] transition-colors w-full resize-none placeholder:text-[var(--muted)]" />
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
