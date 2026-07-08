'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel, Pagination } from 'swiper/modules';
import { Camera, Video, Calendar, Aperture, Building2, Film } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export default function Home() {
  const [activePortfolioTab, setActivePortfolioTab] = useState('ALL');

  useEffect(() => {
    const checkReveals = () => {
      const vh = window.innerHeight;
      document.querySelectorAll('.reveal, .reveal-left, .reveal-scale, .stagger-children, .img-mask, .gold-line, .gold-line-short').forEach(el => {
        if (el.getBoundingClientRect().top < vh * 0.9) el.classList.add('visible');
      });
    };
    window.addEventListener('scroll', checkReveals, { passive: true });
    setTimeout(checkReveals, 300);
    return () => window.removeEventListener('scroll', checkReveals);
  }, []);

  const portfolioImages = {
    ALL: [
      "/images/cii/CII (7th Bangalore Space Expo-2022) On-05-09-2022-Noor/NMK_0028.JPG",
      "/images/tcs/TCS -27 - 03 - 2023 - Anzar/DSC01003.JPG",
      "/images/presidency/PANA9115.jpg",
      "/images/tata_elxsi/_AMZ0246.JPG",
      "/images/our_portfolio/Corporate and office/DSC03794.JPG",
      "/images/our_portfolio/Corporate and office/DSC03789.JPG",
    ],
    CORPORATE: [
      "/images/tcs/TCS -27 - 03 - 2023 - Anzar/DSC01003.JPG",
      "/images/tata_elxsi/_AMZ0246.JPG",
    ],
    EVENTS: [
      "/images/cii/CII (7th Bangalore Space Expo-2022) On-05-09-2022-Noor/NMK_0028.JPG",
      "/images/presidency/PANA9115.jpg",
    ],
  };

  const activeImages = portfolioImages[activePortfolioTab] || portfolioImages['ALL'];

  return (
    <main className="w-full bg-[var(--dark)] text-[var(--light)] pb-[100px]">
      
      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative min-h-[100svh] flex flex-col justify-center md:flex-row md:justify-start md:items-center px-[8%] md:px-[10%] pt-[120px] md:pt-[80px] pb-[60px] md:pb-0 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          {/* On mobile, align image to bottom. On desktop, align image to right. This ensures it scales without cropping and fits with the text layout. */}
          <img src="/images/hero-camera.jpg" alt="Premium Camera Lens" className="w-full h-full object-contain object-[center_bottom] md:object-[right_center]" />
          {/* Gradient protects text legibility across all screen sizes */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-[rgba(0,0,0,0.8)] md:via-[rgba(0,0,0,0.6)] to-transparent z-10" />
        </div>
        <div className="flex-1 w-full max-w-[650px] z-20 relative pt-[40px] md:pt-[60px] text-left">
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
            <Link href="/portfolio" className="inline-flex items-center justify-center border border-[rgba(197,164,109,0.5)] text-[var(--light)] uppercase tracking-[0.2em] text-[11px] font-medium px-[36px] py-[18px] transition-all duration-400 hover:bg-[var(--gold)] hover:text-black hover:border-transparent">
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 2. WELCOME SECTION ─── */}
      <section className="py-[120px] px-[5%] md:px-[8%] border-t border-[rgba(255,255,255,0.05)] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-[60px] items-center bg-[var(--dark-panel)]">
        <div>
          <h2 className="text-[18px] font-serif text-[var(--light)] mb-[24px] reveal">Welcome to<br/><span className="text-[28px]">Glamour Photographics</span></h2>
          <p className="text-[14px] text-[var(--muted)] leading-[1.8] max-w-[500px] reveal delay-100">
            For over four decades, we've been telling stories for brands, institutions, and people who inspire the world. Through powerful visuals and compelling narratives, we transform ideas into lasting impressions.
          </p>
        </div>
        <div className="text-right reveal-left delay-200">
          <div className="text-[var(--gold)] font-serif text-[80px] leading-none mb-[8px]">40+</div>
          <div className="text-[12px] tracking-[0.3em] uppercase text-[var(--muted)]">Years of<br/>Excellence</div>
        </div>
      </section>

      {/* ─── 3. OUR EXPERTISE ─── */}
      <section className="py-[100px] px-[5%] md:px-[8%] bg-[var(--dark)]">
        <h3 className="font-serif text-[28px] text-[var(--light)] mb-[60px] reveal">Our Expertise</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-[40px] stagger-children">
          {[
            { icon: Camera, label: "Corporate\nPhotography" },
            { icon: Video, label: "Cinematic\nVideography" },
            { icon: Calendar, label: "Event\nCoverage" },
            { icon: Aperture, label: "Aerial\nPhotography" },
            { icon: Building2, label: "Commercial\nShoots" },
            { icon: Film, label: "Documentary\nStorytelling" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group cursor-none">
              <div className="w-[60px] h-[60px] flex items-center justify-center border border-[rgba(255,255,255,0.1)] rounded-sm mb-[20px] transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[var(--gold)] group-hover:text-[var(--gold)]">
                <item.icon strokeWidth={1} size={28} />
              </div>
              <span className="text-[11px] tracking-[0.1em] text-[var(--muted)] group-hover:text-[var(--light)] transition-colors whitespace-pre-line leading-[1.4]">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 4. FEATURED WORK (Moving Strips) ─── */}
      <section className="py-[100px] pl-[5%] md:pl-[8%] bg-[var(--dark-panel)] border-y border-[rgba(255,255,255,0.05)] overflow-hidden">
        <div className="flex justify-between items-end pr-[5%] md:pr-[8%] mb-[60px] reveal">
          <h3 className="font-serif text-[32px] text-[var(--light)]">Featured Work</h3>
          <Link href="/portfolio" className="border border-[rgba(255,255,255,0.2)] text-[10px] tracking-[0.2em] uppercase px-[24px] py-[10px] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors">View All</Link>
        </div>
        <div className="reveal delay-100">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{ 768: { slidesPerView: 2.5 }, 1024: { slidesPerView: 3.5 } }}
            freeMode={true}
            modules={[FreeMode]}
            className="w-full h-[450px]"
          >
            {[
              { img: "/images/cii/CII (7th Bangalore Space Expo-2022) On-05-09-2022-Noor/NMK_0076.JPG", client: "CII", title: "Four Decades of Industry Leadership" },
              { img: "/images/cgi/SKV00055.jpg", client: "CGI", title: "Global-Local Digital Engine" },
              { img: "/images/presidency/PANA9024.jpg", client: "PRESIDENCY", title: "Framing Learning & Legacy" },
              { img: "/images/tata_elxsi/_AMZ0016.JPG", client: "TATA ELXSI", title: "Design Led Innovation" },
              { img: "/images/our_portfolio/Corporate and office/DSC03794.JPG", client: "TOYOTA", title: "Corporate Facilities Showcase" }
            ].map((slide, idx) => (
              <SwiperSlide key={idx} className="h-full">
                <div className="group relative w-full h-full overflow-hidden rounded-sm cursor-grab active:cursor-grabbing">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${slide.img}')` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-[rgba(0,0,0,0.2)] to-transparent flex flex-col justify-end p-[30px] opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] tracking-[0.3em] text-[var(--gold)] uppercase mb-[8px]">{slide.client}</span>
                    <h4 className="font-serif text-[20px] text-white leading-[1.2]">{slide.title}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ─── 5. ABOUT US ─── */}
      <section className="py-[120px] px-[5%] md:px-[8%] bg-[var(--dark)] grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center">
        <div>
          <h3 className="text-[14px] text-[var(--muted)] mb-[24px] reveal">About Us</h3>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-light leading-[1.1] text-white mb-[32px] reveal delay-100">
            Crafting Visual<br/>Stories Since <span className="text-[var(--gold)] italic">1980</span>
          </h2>
          <p className="text-[14px] text-[var(--muted)] leading-[1.8] max-w-[480px] mb-[60px] reveal delay-200">
            Founded in 1980, Glamour Photographics has grown into one of India's most trusted names in corporate photography and film production. We blend creativity, technology, and storytelling to deliver visuals that connect and inspire.
          </p>
          <div className="grid grid-cols-4 gap-[20px] stagger-children border-t border-[rgba(255,255,255,0.05)] pt-[40px]">
            {[ { val: "40+", label: "Years in Business" }, { val: "2000+", label: "Projects Delivered" }, { val: "500+", label: "Happy Clients" }, { val: "50+", label: "Awards Won" } ].map((stat, i) => (
              <div key={i}>
                <div className="font-serif text-[28px] text-white mb-[8px]">{stat.val}</div>
                <div className="text-[10px] tracking-[0.05em] text-[var(--muted)] leading-[1.4]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[600px] img-mask">
          <img src="/images/about-silhouette.jpg" alt="Videographer Silhouette" className="absolute inset-0 w-full h-full object-cover mask-bg grayscale-[30%] contrast-[1.2]" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[var(--dark)] opacity-40" />
        </div>
      </section>

      {/* ─── 6. WHAT WE DO ─── */}
      <section className="py-[120px] px-[5%] md:px-[8%] bg-[var(--dark-panel)]">
        <h3 className="text-[28px] font-serif text-white mb-[60px] reveal">What We Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[4px] stagger-children">
          {[
            { title: "Corporate\nPhotography", img: "/images/tcs/TCS -27 - 03 - 2023 - Anzar/DSC01015.JPG" },
            { title: "Cinematic\nFilms", img: "/images/tata_elxsi/_AMZ0018.JPG" },
            { title: "Event\nCoverage", img: "/images/cii/CII (7th Bangalore Space Expo-2022) On-05-09-2022-Noor/NMK_0028.JPG" },
            { title: "Aerial\nShoots", img: "/images/our_portfolio/Corporate and office/DSC03794.JPG" },
            { title: "Industrial\nPhotography", img: "/images/presidency/PANA9415.jpg" },
            { title: "Brand\nStorytelling", img: "/images/our_portfolio/Srk.jpg" },
          ].map((service, i) => (
            <div key={i} className="group relative h-[280px] overflow-hidden bg-[var(--dark)] cursor-none">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-70" style={{ backgroundImage: `url('${service.img}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-[var(--gold)]" />
              <h4 className="absolute bottom-[30px] left-[30px] font-serif text-[20px] text-white whitespace-pre-line leading-[1.2] transition-transform duration-500 group-hover:-translate-y-[10px]">{service.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 7. OUR CLIENTS ─── */}
      <section className="py-[120px] px-[5%] md:px-[8%] bg-[var(--dark)]">
        <h3 className="text-[28px] font-serif text-white mb-[40px] reveal">Our Clients</h3>
        <p className="text-[12px] text-[var(--gold)] tracking-[0.2em] uppercase mb-[20px] reveal delay-100">Featured Clients</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[rgba(255,255,255,0.05)] mb-[40px] stagger-children">
          {["CII", "CGI", "Presidency\nUniversity", "TATA ELXSI"].map((client, i) => (
            <div key={i} className="group h-[160px] border border-[rgba(255,255,255,0.05)] flex items-center justify-center p-[20px] hover:border-[var(--gold)] hover:bg-[rgba(197,164,109,0.02)] transition-all cursor-none">
               <span className="font-serif text-[20px] text-[var(--muted)] group-hover:text-white transition-colors whitespace-pre-line text-center">{client}</span>
            </div>
          ))}
        </div>
        <div className="text-center mb-[40px] reveal">
          <button suppressHydrationWarning className="border border-[rgba(197,164,109,0.4)] text-[var(--light)] text-[10px] tracking-[0.2em] uppercase px-[30px] py-[12px] hover:bg-[var(--gold)] hover:text-[var(--dark)] transition-all">View All Clients</button>
        </div>
        <p className="text-[12px] text-[var(--muted)] tracking-[0.2em] uppercase mb-[20px] reveal">Others</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[rgba(255,255,255,0.05)] stagger-children">
          {["PAI", "Toyota", "TCS", "RTX"].map((client, i) => (
            <div key={i} className="h-[120px] border border-[rgba(255,255,255,0.05)] flex items-center justify-center p-[20px] text-[var(--muted)] hover:text-white transition-colors cursor-none">
               <span className="font-serif text-[16px]">{client}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 8. OUR PORTFOLIO (Masonry Tabs) ─── */}
      <section className="py-[120px] px-[5%] md:px-[8%] bg-[var(--dark-panel)] border-t border-[rgba(255,255,255,0.05)]">
        <h3 className="text-[28px] font-serif text-white mb-[40px] reveal">Our Portfolio</h3>
        <div className="flex flex-wrap gap-[30px] border-b border-[rgba(255,255,255,0.1)] pb-[15px] mb-[40px] reveal delay-100">
          {['ALL', 'CORPORATE', 'EVENTS', 'INDUSTRIAL', 'DOCUMENTARY'].map((tab) => (
            <button suppressHydrationWarning key={tab} onClick={() => setActivePortfolioTab(tab)} className={`text-[10px] tracking-[0.2em] uppercase pb-[15px] relative ${activePortfolioTab === tab ? 'text-[var(--gold)]' : 'text-[var(--muted)] hover:text-white'}`}>
              {tab}
              {activePortfolioTab === tab && <div className="absolute bottom-[-16px] left-0 w-full h-[2px] bg-[var(--gold)]" />}
            </button>
          ))}
        </div>
        <div className="columns-1 md:columns-3 gap-[20px] space-y-[20px] stagger-children">
          {activeImages.map((img, idx) => (
            <div key={`${activePortfolioTab}-${idx}`} className="relative break-inside-avoid overflow-hidden rounded-sm group cursor-none">
              <img src={img} alt={`Portfolio ${idx}`} className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="w-[50px] h-[50px] rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm">+</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 9. OUR SERVICES (List & Sticky Image) ─── */}
      <section className="py-[120px] px-[5%] md:px-[8%] bg-[var(--dark)] grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-[80px]">
        <div>
          <h3 className="text-[28px] font-serif text-white mb-[60px] reveal">Our Services</h3>
          <div className="space-y-[30px] stagger-children">
            {[
              { title: "Corporate Photography", desc: "High-quality photography for corporate profiles, leadership portraits, and workplace culture.", icon: Camera },
              { title: "Cinematic Videography", desc: "Engaging corporate films, brand stories, and promotional videos.", icon: Video },
              { title: "Event Coverage", desc: "End-to-end coverage of conferences, seminars, product launches, and more.", icon: Calendar },
              { title: "Aerial Photography", desc: "Stunning aerial shots for architecture, industries, events, and landscapes.", icon: Aperture },
              { title: "Industrial Photography", desc: "Specialized photography for manufacturing plants, infrastructure, and processes.", icon: Building2 },
              { title: "Documentary Storytelling", desc: "Telling impactful stories that create emotion and drive engagement.", icon: Film }
            ].map((srv, idx) => (
              <div key={idx} className="flex gap-[20px] group border-b border-[rgba(255,255,255,0.05)] pb-[30px]">
                <div className="w-[50px] h-[50px] shrink-0 border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[var(--muted)] group-hover:text-[var(--gold)] group-hover:border-[var(--gold)] transition-colors">
                  <srv.icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[16px] text-white font-medium mb-[8px] group-hover:text-[var(--gold)] transition-colors">{srv.title}</h4>
                  <p className="text-[13px] text-[var(--muted)] leading-[1.6] max-w-[400px]">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="sticky top-[120px] h-[700px] w-full img-mask rounded-sm overflow-hidden">
            <img src="/images/services-camera.jpg" alt="Tripod Camera" className="w-full h-full object-cover mask-bg grayscale-[20%]" />
          </div>
        </div>
      </section>

      {/* ─── 10. OUR TEAM ─── */}
      <section className="py-[120px] px-[5%] md:px-[8%] bg-[var(--dark-panel)] border-t border-[rgba(255,255,255,0.05)]">
        <h3 className="text-[28px] font-serif text-white mb-[16px] reveal">Our Team</h3>
        <p className="text-[14px] text-[var(--muted)] max-w-[500px] mb-[60px] reveal delay-100">A passionate team of photographers, filmmakers, editors, and storytellers dedicated to excellence.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] stagger-children">
          {[
            { name: "Pasha Arshad", role: "Founder & Director", img: "/images/our_portfolio/dilquar.jpg" },
            { name: "John Doe", role: "Creative Head", img: "/images/our_portfolio/kareeshma.jpg" },
            { name: "Alice Smith", role: "Cinematographer", img: "/images/our_portfolio/dilquar.jpg" },
            { name: "Mike Ross", role: "Senior Photographer", img: "/images/our_portfolio/kareeshma.jpg" }
          ].map((member, i) => (
            <div key={i} className="group relative h-[350px] overflow-hidden cursor-none rounded-sm">
              <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${member.img}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-[20px] left-[20px] transform translate-y-[10px] group-hover:translate-y-0 transition-transform">
                <h5 className="text-[16px] text-white font-medium mb-[4px]">{member.name}</h5>
                <p className="text-[11px] text-[var(--gold)] tracking-[0.1em] uppercase">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 11. WHAT OUR CLIENTS SAY ─── */}
      <section className="py-[120px] px-[5%] md:px-[8%] bg-[var(--dark)] border-t border-[rgba(255,255,255,0.05)] grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        <div className="reveal">
          <h3 className="text-[28px] font-serif text-white mb-[40px]">What Our Clients Say</h3>
          <div className="h-[300px]">
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={50}
              slidesPerView={1}
              className="h-full testimonial-swiper"
            >
              {[
                { quote: "Glamour Photographics has been our trusted partner for over four decades. Their professionalism, creativity, and attention to detail are unmatched.", author: "Director General", client: "Confederation of Indian Industry" },
                { quote: "The absolute best in the business when it comes to high-end corporate coverage. The team is invisible yet captures every perfect moment.", author: "Head of Marketing", client: "Top Tech Firm" }
              ].map((test, i) => (
                <SwiperSlide key={i}>
                  <div className="font-serif text-[60px] text-[var(--gold)] leading-none mb-[20px]">“</div>
                  <p className="text-[18px] md:text-[22px] leading-[1.6] text-white italic font-light mb-[40px]">
                    {test.quote}
                  </p>
                  <div>
                    <h5 className="text-[12px] text-white uppercase tracking-[0.1em] mb-[4px]">{test.author}</h5>
                    <p className="text-[12px] text-[var(--muted)]">{test.client}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="relative hidden md:block img-mask">
          <img src="/images/our_portfolio/Corporate and office/DSC03789.JPG" className="w-full h-[500px] object-cover mask-bg grayscale-[40%]" alt="Testimonials" />
        </div>
      </section>

      {/* ─── 12. GET IN TOUCH (Footer) ─── */}
      <section className="py-[120px] px-[5%] md:px-[8%] bg-[var(--dark-panel)] border-t border-[rgba(255,255,255,0.05)] grid grid-cols-1 md:grid-cols-2 gap-[80px]">
        <div className="reveal">
          <h3 className="text-[28px] font-serif text-white mb-[20px]">Get In Touch</h3>
          <h2 className="text-[clamp(32px,4vw,48px)] font-serif font-light text-white leading-[1.1] mb-[60px]">
            Let's Create Something<br/>Extraordinary Together
          </h2>
          <div className="space-y-[20px] text-[14px] text-[var(--muted)]">
            <p className="flex items-center gap-[16px] hover:text-[var(--gold)] transition-colors cursor-none"><span className="w-[8px] h-[8px] bg-[var(--gold)] rounded-full"/> Bangalore, India</p>
            <p className="flex items-center gap-[16px] hover:text-[var(--gold)] transition-colors cursor-none"><span className="w-[8px] h-[8px] bg-[var(--gold)] rounded-full"/> +91 80 1234 5678</p>
            <p className="flex items-center gap-[16px] hover:text-[var(--gold)] transition-colors cursor-none"><span className="w-[8px] h-[8px] bg-[var(--gold)] rounded-full"/> info@glamourphotographics.com</p>
          </div>
          <div className="flex gap-[20px] mt-[40px]">
            {['F','I','L','T'].map((social, i) => (
              <a key={i} href="#" className="w-[40px] h-[40px] rounded-full border border-[rgba(255,255,255,0.2)] flex items-center justify-center text-[12px] hover:bg-[var(--gold)] hover:border-transparent hover:text-black transition-colors cursor-none">
                {social}
              </a>
            ))}
          </div>
        </div>
        <div className="reveal delay-100">
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

      {/* COPYRIGHT */}
      <footer className="py-[30px] text-center border-t border-[rgba(255,255,255,0.05)] bg-[var(--dark-panel)]">
        <p className="text-[11px] text-[var(--muted)] tracking-[0.1em]">© 2026 Glamour Photographics. All Rights Reserved.</p>
      </footer>

    </main>
  );
}
