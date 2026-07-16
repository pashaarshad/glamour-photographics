'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { X } from 'lucide-react';

import 'swiper/css';

export default function About() {
  const [activeCert, setActiveCert] = useState(null);

  useEffect(() => {
    const checkReveals = () => {
      const vh = window.innerHeight;
      document.querySelectorAll('.reveal, .stagger-children, .img-mask').forEach(el => {
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

  return (
    <main className="w-full bg-[var(--dark)] text-[var(--light)] min-h-screen pt-0 pb-[100px] cursor-none relative">
      
      {/* ─── HERO SECTION: OUR STORY ─── */}
      <section className="px-[4%] md:px-[5%] max-w-[1600px] mx-auto pt-[160px] pb-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[60px] items-center">
          {/* Left Column: Heading and Story */}
          <div className="lg:col-span-5 reveal">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block font-medium">
              Our Story
            </span>
            <h1 className="font-serif text-[clamp(44px,5.5vw,72px)] font-light leading-[1.1] tracking-[-0.02em] text-[var(--light)] mb-[32px]">
              A Legacy <br />
              in Frames<span className="text-[var(--gold)]">.</span>
            </h1>
            <p className="text-[14px] leading-[1.8] text-[var(--muted)] mb-[36px] font-light">
              At Glamour Photographics, we believe in the power of storytelling to connect, inspire, and drive change. Our corporate films are carefully crafted to capture the essence of your brand, convey your unique message, and engage your audience on a deeper level. With a blend of artistic creativity and strategic insight, we bring your vision to life on screen.
            </p>
            
            <div className="pt-[24px] border-t border-[rgba(10,10,10,0.06)]">
              <img 
                src="/images/signature.png" 
                alt="Hameed Hussain Signature" 
                className="h-[48px] w-auto object-contain mb-[8px] select-none pointer-events-none"
              />
              <span className="text-[10px] tracking-[0.1em] uppercase text-gray-400 block">
                Founder, Glamour Photographics
              </span>
            </div>
          </div>
          
          {/* Right Column: Hero Double-Exposure Image */}
          <div className="lg:col-span-7 relative reveal flex items-center justify-center">
            <img 
              src="/images/about-hero-double-exposure.png" 
              alt="A Legacy in Frames Double Exposure" 
              className="w-full h-auto max-h-[650px] object-contain z-10" 
            />
            {/* Badge Overlay */}
            <div className="absolute bottom-[35px] right-[8%] bg-[#FAF8F4] border-2 border-[var(--gold)] px-[24px] py-[14px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] rounded-[2px] z-20">
              <span className="font-serif text-[17px] tracking-[0.12em] uppercase text-[var(--gold)] font-bold block mb-[6px] text-center leading-none">Est. 1982</span>
              <span className="text-[9px] tracking-[0.18em] uppercase text-[var(--light)] font-extrabold block text-center leading-none">Bengaluru, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FULL-WIDTH HORIZONTAL GALLERY STRIP ─── */}
      <section className="w-full bg-[var(--dark)] py-[60px] overflow-hidden reveal opacity-0 anim-fade-up">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnHover: true
          }}
          className="w-full"
        >
          {[
            "/images/our_portfolio/11.jpg",
            "/images/our_portfolio/22.jpg",
            "/images/our_portfolio/33.jpg"
          ].map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full px-[4%] md:px-[6%]">
                <div className="relative aspect-[16/9] w-full rounded-[16px] md:rounded-[32px] overflow-hidden border border-[rgba(10,10,10,0.06)] bg-[var(--darker)] group shadow-lg">
                  <img 
                    src={src} 
                    alt={`Gallery Image ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.35)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ─── FOUNDER'S NOTE ─── */}
      <section className="px-[4%] md:px-[5%] max-w-[1600px] mx-auto py-[100px] border-t border-[rgba(10,10,10,0.06)] mb-[40px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[60px] items-start">
          {/* Column 1: Founder Card */}
          <div className="lg:col-span-4 relative rounded-sm overflow-hidden border border-[rgba(10,10,10,0.06)] bg-[#0A0A0A] h-[580px] reveal flex flex-col justify-between">
            <div className="flex-1 w-full relative h-[380px] overflow-hidden">
              <img 
                src="/logo-clients/founder-ceo.jpg" 
                alt="Founder Hameed Hussain" 
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="bg-[#0A0A0A] p-[30px] border-t border-[rgba(255,255,255,0.08)]">
              <span className="text-[9px] tracking-[0.25em] uppercase text-gray-400 block mb-[4px]">Founder</span>
              <h3 className="font-serif text-[24px] text-white leading-tight font-bold mb-[2px]">Hameed Hussain</h3>
              <span className="text-[11px] text-[var(--gold)] block mb-[20px]">Glamour Photographics, Est. 1982</span>
              <img 
                src="/images/signature.png" 
                alt="Hameed Hussain Signature" 
                className="h-[40px] w-auto object-contain select-none pointer-events-none invert opacity-90"
              />
            </div>
          </div>
          
          {/* Column 2: Founder's Note Copy */}
          <div className="lg:col-span-5 reveal">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--muted)] mb-[12px] block">Founder's Note</span>
            <h2 className="font-serif text-[32px] text-[var(--light)] mb-[8px] leading-tight">
              A Pictorial Time Machine
            </h2>
            <p className="text-[12px] text-[var(--gold)] italic tracking-wider mb-[24px]">
              Glamour Photographics' Journey from 1982 to Now
            </p>
            <div className="w-[50px] h-[1.5px] bg-[var(--gold)] mb-[32px]"></div>

            <div className="text-[13px] leading-[1.8] text-[var(--muted)] font-light space-y-[20px]">
              <p className="font-medium text-[var(--light)]">Dear Friends and patrons,</p>
              <p>
                As I reflect upon the journey that has led us to this moment, my heart swells with gratitude and nostalgia. It is with immense pleasure that I share this founder's note, celebrating the remarkable odyssey of Glamour Photographics, a dream turned into a legacy.
              </p>
              <p>
                In 1982, armed with a camera and insatiable passion for capturing beauty in all its forms, I embarked on a venture that would soon become synonymous with elegance, artistry, and the profound connection between lens and subject. Glamour Photographics was born from the belief that every person, every moment, and every emotion is a canvas waiting to be immortalised.
              </p>
              <p>
                Through the decades, we evolved, adapted, and transformed — our lens capturing not merely images, but stories: tales of love, triumph, and the tapestry of life itself. We witnessed countless smiles, shared tears of joy, and stood witness to the quiet moments that often go unnoticed.
              </p>
              <p>
                The heart of Glamour Photographics has always been its people. Your unwavering support and faith have fuelled our artistic pursuit and allowed us to thrive in an ever-evolving industry. As we pen this new chapter, I invite you to join us once again in our pursuit of beauty, authenticity, and unbounded creativity.
              </p>
              <div className="pt-[16px] border-t border-[rgba(10,10,10,0.06)]">
                <p className="text-[11px] uppercase tracking-[0.1em] text-gray-400 mb-[10px]">With deepest appreciation,</p>
                <img 
                  src="/images/signature.png" 
                  alt="Hameed Hussain Signature" 
                  className="h-[44px] w-auto object-contain select-none pointer-events-none"
                />
              </div>
            </div>
          </div>
          
          {/* Column 3: Vertical Film Strip Collage */}
          <div className="lg:col-span-3 reveal flex justify-center items-center h-[580px]">
            {/* Narrow Filmstrip Window */}
            <div className="w-[215px] h-[580px] overflow-hidden relative bg-[#E2D8C9] border border-[rgba(10,10,10,0.08)] rounded-[4px] py-[20px] px-[22px] shadow-[0_8px_32px_rgba(0,0,0,0.03)] flex flex-col justify-between">
              
              {/* Vertical Film Sprocket Holes (White squares) */}
              <div className="absolute left-[6px] top-0 bottom-0 flex flex-col justify-between py-[15px] select-none pointer-events-none z-20">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div key={i} className="w-[10px] h-[10px] bg-white rounded-[1.5px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.08)]" />
                ))}
              </div>
              <div className="absolute right-[6px] top-0 bottom-0 flex flex-col justify-between py-[15px] select-none pointer-events-none z-20">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div key={i} className="w-[10px] h-[10px] bg-white rounded-[1.5px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.08)]" />
                ))}
              </div>
              
              {/* Infinite Scrolling Marquee list */}
              <div className="h-full overflow-hidden relative z-10 select-none">
                <div className="flex flex-col gap-[20px] animate-marquee-vertical">
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
                        <div key={idx} className="w-full aspect-[4/3] bg-black overflow-hidden relative border border-[rgba(10,10,10,0.12)] rounded-[3px] group cursor-none shrink-0">
                          <img 
                            src={item.src} 
                            alt={`Film Strip Frame ${idx + 1}`} 
                            className="w-full h-full object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                          />
                        </div>
                      );
                    } else {
                      return (
                        <div key={idx} className="w-full bg-[#D6CBBF] border border-[rgba(10,10,10,0.06)] rounded-[3px] py-[22px] px-[10px] text-center shrink-0 flex flex-col justify-center items-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)]">
                          <span className="font-serif text-[34px] font-bold text-[#1A1A1A] leading-none mb-[2px]">40+</span>
                          <span className="text-[9px] tracking-[0.15em] uppercase text-[#3A3530] font-bold leading-tight">Years Of</span>
                          <span className="text-[9px] tracking-[0.15em] uppercase text-[#3A3530] font-bold leading-tight">Storytelling</span>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>

            {/* Local CSS stylesheet for vertical marquee animation */}
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

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-[120px] px-[4%] md:px-[5%] bg-[var(--dark)] border-t border-[rgba(10,10,10,0.06)]">
        <div className="max-w-[1600px] mx-auto reveal">
          <div className="text-center mb-[60px]">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--gold)] mb-[12px] block font-medium">Why Choose Us</span>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-[var(--light)] mb-[16px]">What Sets Us Apart</h2>
            <div className="w-[80px] h-[2px] bg-[var(--gold)] mx-auto relative">
              <div className="w-[6px] h-[6px] bg-[var(--gold)] rotate-45 absolute left-[37px] -top-[2px]"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
            {[
              {
                title: "Experience",
                desc: "Our team brings a wealth of experience from various industries, enabling us to tailor our approach to your unique needs with precision and depth.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="8" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="5" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="2" strokeWidth="1.5" fill="currentColor"/>
                  </svg>
                )
              },
              {
                title: "Client-Centric",
                desc: "We put your satisfaction at the forefront of everything we do. Your success is our success — every decision serves your vision without compromise.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 5h12l4 6-10 8-10-8z" />
                  </svg>
                )
              },
              {
                title: "Innovation",
                desc: "We stay updated with the latest trends and technologies in filmmaking, ensuring your corporate film is fresh, modern, and truly impactful.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4a8 8 0 018 8" />
                  </svg>
                )
              },
              {
                title: "Proven Results",
                desc: "Our portfolio speaks for itself. Past projects have driven engagement, increased brand awareness, and delivered measurable business results.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="1" fill="currentColor" strokeWidth={1} />
                  </svg>
                )
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-white border border-[rgba(10,10,10,0.06)] rounded-sm p-[40px] text-center shadow-[0_4px_24px_rgba(0,0,0,0.01)] hover:border-[var(--gold)] transition-colors duration-450 flex flex-col items-center">
                <div className="w-[64px] h-[64px] rounded-full bg-[var(--gold)] flex items-center justify-center mb-[24px] text-white shadow-sm shadow-[var(--gold)]/20 shrink-0">
                  {card.icon}
                </div>
                <h3 className="font-serif text-[22px] text-[var(--light)] mb-[16px] font-bold">{card.title}</h3>
                <p className="text-[13.5px] text-[var(--light)] leading-relaxed font-semibold">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW WE WORK (OUR APPROACH TIMELINE) ─── */}
      <section className="py-[120px] px-[4%] md:px-[5%] bg-[var(--darker)] border-t border-[rgba(10,10,10,0.06)]">
        <div className="max-w-[1600px] mx-auto reveal">
          <div className="text-center mb-[80px]">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--gold)] mb-[12px] block font-medium">How We Work</span>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-[var(--light)] mb-[16px]">Our Approach</h2>
            <div className="w-[80px] h-[2px] bg-[var(--gold)] mx-auto relative">
              <div className="w-[6px] h-[6px] bg-[var(--gold)] rotate-45 absolute left-[37px] -top-[2px]"></div>
            </div>
          </div>
          
          {/* Vertical Alternating Timeline */}
          <div className="relative mt-[60px]">
            {/* Center Vertical Axis Line with glowing gold gradient */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[rgba(197,164,109,0.05)] via-[var(--gold)] to-[rgba(197,164,109,0.05)] z-0" />
            
            <div className="space-y-[80px] relative z-10">
              {[
                {
                  num: "01",
                  title: "Collaboration",
                  desc: "We believe in working closely with our clients to understand their vision, objectives, and target audience. Your input is invaluable in shaping the final product.",
                  img: "/images/corporate-event.jpg"
                },
                {
                  num: "02",
                  title: "Creativity",
                  desc: "Our team combines creative storytelling with the latest cinematic techniques to create visually stunning films that leave a lasting impression on every audience.",
                  img: "/images/cii-event-coverage.jpg"
                },
                {
                  num: "03",
                  title: "Strategic Impact",
                  desc: "Every frame is designed to convey a specific message and evoke emotion. We ensure your film aligns with your broader business goals and drives real results.",
                  img: "/images/outdoor-event.jpg"
                },
                {
                  num: "04",
                  title: "Quality",
                  desc: "We maintain high production standards to deliver films that reflect the quality and professionalism of your brand — without exception or compromise.",
                  img: "/images/hero-camera.jpg"
                }
              ].map((step, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div 
                    key={idx} 
                    className={`flex flex-col md:flex-row items-center justify-between gap-[30px] md:gap-0 relative ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Center Node dot with animated pulsing glow ring */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
                      {/* Pulse ring */}
                      <div className="w-[30px] h-[30px] rounded-full border border-[var(--gold)] opacity-40 animate-ping absolute -left-[9px] -top-[9px]" style={{ animationDuration: '3s' }} />
                      {/* Outer border ring */}
                      <div className="w-[24px] h-[24px] rounded-full border border-[var(--gold)] bg-[var(--darker)] flex items-center justify-center shadow-[0_0_12px_rgba(197,164,109,0.35)]">
                        {/* Core solid dot */}
                        <div className="w-[10px] h-[10px] rounded-full bg-[var(--gold)]" />
                      </div>
                    </div>
                    
                    {/* Content Card (Half Width) */}
                    <div className="w-full md:w-[45%] flex flex-col justify-center">
                      <div className="bg-white border border-[rgba(10,10,10,0.06)] rounded-sm p-[30px] md:p-[40px] shadow-[0_4px_24px_rgba(0,0,0,0.01)] hover:border-[var(--gold)] transition-colors duration-450">
                        <div className="flex items-center gap-[12px] mb-[16px]">
                          <span className="font-serif italic text-[32px] text-[var(--gold)] leading-none font-light">{step.num}</span>
                          <h3 className="font-serif text-[22px] text-[var(--light)] font-bold">{step.title}</h3>
                        </div>
                        <p className="text-[13.5px] text-[var(--muted)] leading-relaxed font-light">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                    
                    {/* Step Card Image (Half Width on opposite side) */}
                    <div className="w-full md:w-[45%]">
                      <div className="w-full aspect-[16/10] rounded-sm overflow-hidden border border-[rgba(10,10,10,0.06)] shadow-sm bg-white group">
                        <img 
                          src={step.img} 
                          alt={step.title} 
                          className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-103" 
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUR TEAM ─── */}
      <section className="py-[120px] px-[8%] md:px-[10%] bg-[var(--dark)] border-t border-[rgba(10,10,10,0.06)]">
        <div className="mb-[60px] reveal opacity-0 anim-fade-up">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">Minds Behind the Lenses</span>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light leading-[1.2] text-[var(--light)]">Our Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] reveal opacity-0 anim-fade-up delay-100">
          {[
            { name: "Hameed Hussain", role: "Founder & Director", img: "/images/Hameed Hussain.png" },
            { name: "Anzar Hussain", role: "Creative Lead", img: "/images/anzar_hussain.png" },
            { name: "Zia Hussain", role: "Head of Operations", img: "/images/zia_hussain.png" }
          ].map((member, idx) => {
            const isPng = member.img.toLowerCase().endsWith('.png');
            return (
              <div 
                key={idx} 
                className="group relative rounded-[20px] overflow-hidden bg-[#1A1A1A] border border-[rgba(10,10,10,0.08)] transition-all duration-500 cursor-none flex flex-col h-[540px] shadow-lg"
              >
                {/* Image Box */}
                <div className={`absolute inset-0 z-0 transition-colors duration-500 ${isPng ? 'group-hover:bg-[#E50914]' : ''}`}>
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-[700ms] pointer-events-none select-none" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent z-10" />
                </div>

                {/* Top Left Quote Icon (Visible on Hover for PNG cards) */}
                {isPng && (
                  <div className="absolute top-[28px] left-[28px] z-20 font-serif text-[64px] text-[#FAF8F4] opacity-0 group-hover:opacity-20 leading-none select-none pointer-events-none transition-all duration-300">
                    “
                  </div>
                )}

                {/* Text Content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-[28px] pt-[60px] z-20 flex flex-col justify-end pointer-events-none">
                  <h3 className="font-serif text-[20px] text-white font-bold leading-tight mb-[4px] tracking-wide uppercase">
                    {member.name}
                  </h3>
                  <span className="text-[10px] tracking-[0.15em] text-white/70 font-semibold block uppercase">
                    ( {member.role} )
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── TESTIMONIALS LOGO CAROUSEL ─── */}
      <section className="py-[120px] px-[8%] md:px-[10%] bg-[var(--dark)] border-t border-[rgba(10,10,10,0.06)] mb-[140px]">
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

      {/* ─── CTA BANNER: LET'S CREATE SOMETHING EXTRAORDINARY ─── */}
      <section className="px-[4%] md:px-[5%] max-w-[1600px] mx-auto mb-[100px] reveal">
        <div className="bg-[rgba(10,10,10,0.015)] border border-[rgba(10,10,10,0.06)] rounded-[2px] py-[30px] px-[40px] md:px-[50px] flex flex-col md:flex-row items-center justify-between gap-[30px] relative overflow-hidden">
          {/* Left Side: Film Reel Icon & Text */}
          <div className="flex items-center gap-[30px] z-10 w-full md:w-auto">
            <img 
              src="/images/left-inabout-let-create-somethin.png" 
              alt="Film Reel Videography Element" 
              className="w-[120px] md:w-[150px] h-auto object-contain shrink-0" 
            />
            <div>
              <h2 className="font-serif text-[clamp(24px,3vw,36px)] text-[var(--light)] leading-tight font-medium">
                Let's create something <br className="hidden md:block" />
                extraordinary together.
              </h2>
            </div>
          </div>
          {/* Right Side: Start a Project Button & Illustration */}
          <div className="z-10 flex items-center justify-between md:justify-end gap-[30px] w-full md:w-auto shrink-0">
            <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--gold)] text-white uppercase tracking-[0.2em] text-[11px] font-bold px-[36px] py-[16px] transition-all duration-400 hover:bg-black hover:text-white cursor-none">
              Start a Project &rarr;
            </Link>
            <img 
              src="/images/about-cta-chair.png" 
              alt="Director's Chair Illustration" 
              className="h-[120px] w-auto object-contain hidden lg:block lg:ml-[20px]"
            />
          </div>
        </div>
      </section>

      {/* ─── VISION STATEMENT ─── */}
      <section className="py-[120px] px-[5%] md:px-[8%] bg-[var(--darker)] text-center border-t border-[rgba(10,10,10,0.06)]">
        <div className="max-w-[900px] mx-auto reveal">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[24px] block">
            Our Promise
          </span>
          <blockquote className="font-serif text-[clamp(24px,3.5vw,42px)] font-light leading-[1.3] text-[var(--light)] italic">
            "To build digital records and visual narratives of high excellence, helping enterprise systems shape and communicate their legacies with absolute precision."
          </blockquote>
          <div className="w-[50px] h-[1px] bg-[var(--gold)] mx-auto mt-[30px]" />
        </div>
      </section>

      {/* ─── TESTIMONIAL CERTIFICATE LIGHTBOX OVERLAY ─── */}
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
