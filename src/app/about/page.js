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
      <section className="px-[5%] md:px-[8%] max-w-[1400px] mx-auto pt-[160px] pb-[80px]">
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
              <span className="font-serif italic text-[24px] text-[var(--gold)] block font-light leading-none mb-[8px]">
                Hameed Hussain
              </span>
              <span className="text-[10px] tracking-[0.1em] uppercase text-gray-400 block">
                Founder, Glamour Photographics
              </span>
            </div>
          </div>
          
          {/* Right Column: Hero Double-Exposure Image */}
          <div className="lg:col-span-7 relative reveal h-[550px] md:h-[650px] rounded-sm overflow-hidden border border-[rgba(10,10,10,0.06)] bg-[#0A0A0A]">
            <img 
              src="/images/about-hero-double-exposure.png" 
              alt="A Legacy in Frames Double Exposure" 
              className="w-full h-full object-cover opacity-85" 
            />
            {/* Badge Overlay */}
            <div className="absolute bottom-[30px] right-[30px] bg-[#FAF8F4] border border-[rgba(197,164,109,0.3)] px-[20px] py-[12px] shadow-[0_4px_12px_rgba(0,0,0,0.04)] z-20">
              <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--light)] font-bold block mb-[2px]">Est. 1982</span>
              <span className="text-[8px] tracking-[0.1em] uppercase text-[var(--gold)] font-medium block">Bengaluru, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOUNDER'S NOTE ─── */}
      <section className="px-[5%] md:px-[8%] max-w-[1400px] mx-auto py-[100px] border-t border-[rgba(10,10,10,0.06)] mb-[40px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[60px] items-start">
          {/* Column 1: Founder Card */}
          <div className="lg:col-span-4 relative rounded-sm overflow-hidden border border-[rgba(10,10,10,0.06)] bg-[#0A0A0A] h-[520px] reveal">
            <img 
              src="/logo-clients/founder-ceo.jpg" 
              alt="Founder Hameed Hussain" 
              className="w-full h-[320px] object-cover opacity-80"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#0A0A0A] p-[30px] border-t border-[rgba(255,255,255,0.08)]">
              <span className="text-[9px] tracking-[0.25em] uppercase text-gray-400 block mb-[4px]">Founder</span>
              <h3 className="font-serif text-[24px] text-white leading-tight font-bold mb-[2px]">Hameed Hussain</h3>
              <span className="text-[11px] text-[var(--gold)] block mb-[20px]">Glamour Photographics, Est. 1982</span>
              <span className="font-serif italic text-[20px] text-[var(--gold)] block font-light leading-none">Hameed Hussain</span>
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
                <p className="text-[11px] uppercase tracking-[0.1em] text-gray-400">With deepest appreciation,</p>
                <p className="font-serif text-[18px] font-bold text-[var(--light)] mt-[4px]">Hameed Hussain</p>
              </div>
            </div>
          </div>
          
          {/* Column 3: Vertical Film Strip Collage */}
          <div className="lg:col-span-3 reveal">
            <div className="flex flex-col gap-[20px] items-center relative py-[20px] px-[15px] bg-[#141414] border border-[rgba(255,255,255,0.06)] rounded-sm">
              {/* Vertical Film Sprocket Holes */}
              <div className="absolute left-[4px] top-0 bottom-0 flex flex-col justify-between py-[10px] select-none pointer-events-none">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div key={i} className="w-[6px] h-[10px] bg-[var(--dark)] rounded-[1px] opacity-15" />
                ))}
              </div>
              <div className="absolute right-[4px] top-0 bottom-0 flex flex-col justify-between py-[10px] select-none pointer-events-none">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div key={i} className="w-[6px] h-[10px] bg-[var(--dark)] rounded-[1px] opacity-15" />
                ))}
              </div>
              
              {/* 4 Black and White Grayscale Images */}
              {[
                "/images/our_portfolio/Highlights_3C1A0761.jpg",
                "/images/our_portfolio/Highlights_3C1A0789.jpg",
                "/images/our_portfolio/Highlights_3C1A0766.jpg",
                "/images/our_portfolio/33.jpg"
              ].map((imgSrc, idx) => (
                <div key={idx} className="w-full aspect-[4/3] bg-black overflow-hidden relative border border-[rgba(255,255,255,0.1)] group">
                  <img 
                    src={imgSrc} 
                    alt={`Film Strip Frame ${idx + 1}`} 
                    className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                  />
                </div>
              ))}

              {/* Gold badge at the bottom of the filmstrip */}
              <div className="w-full bg-[#201D1A] border border-[rgba(197,164,109,0.3)] py-[12px] px-[10px] text-center mt-[10px]">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold)] font-bold">40+ Years of Storytelling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-[120px] px-[5%] md:px-[8%] bg-[var(--dark)] border-t border-[rgba(10,10,10,0.06)]">
        <div className="max-w-[1400px] mx-auto reveal">
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
                  <svg className="w-10 h-10 text-[var(--gold)] mb-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="6" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="2" strokeWidth="1.5" fill="currentColor"/>
                  </svg>
                )
              },
              {
                title: "Client-Centric",
                desc: "We put your satisfaction at the forefront of everything we do. Your success is our success — every decision serves your vision without compromise.",
                icon: (
                  <svg className="w-10 h-10 text-[var(--gold)] mb-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Innovation",
                desc: "We stay updated with the latest trends and technologies in filmmaking, ensuring your corporate film is fresh, modern, and truly impactful.",
                icon: (
                  <svg className="w-10 h-10 text-[var(--gold)] mb-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Proven Results",
                desc: "Our portfolio speaks for itself. Past projects have driven engagement, increased brand awareness, and delivered measurable business results.",
                icon: (
                  <svg className="w-10 h-10 text-[var(--gold)] mb-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3" />
                  </svg>
                )
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-white border border-[rgba(10,10,10,0.06)] rounded-sm p-[40px] text-center shadow-[0_4px_24px_rgba(0,0,0,0.01)] hover:border-[var(--gold)] transition-colors duration-450 flex flex-col items-center">
                {card.icon}
                <h3 className="font-serif text-[22px] text-[var(--light)] mb-[16px]">{card.title}</h3>
                <p className="text-[13px] text-[var(--muted)] leading-relaxed font-light">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW WE WORK (OUR APPROACH) ─── */}
      <section className="py-[120px] px-[5%] md:px-[8%] bg-[var(--darker)] border-t border-[rgba(10,10,10,0.06)]">
        <div className="max-w-[1400px] mx-auto reveal">
          <div className="text-center mb-[80px]">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--gold)] mb-[12px] block font-medium">How We Work</span>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-[var(--light)] mb-[16px]">Our Approach</h2>
            <div className="w-[80px] h-[2px] bg-[var(--gold)] mx-auto relative">
              <div className="w-[6px] h-[6px] bg-[var(--gold)] rotate-45 absolute left-[37px] -top-[2px]"></div>
            </div>
          </div>
          
          {/* Horizontal Timeline Row */}
          <div className="relative">
            {/* Timeline Connecting Line */}
            <div className="hidden lg:block absolute top-[6px] left-[12.5%] right-[12.5%] h-[1.5px] bg-[rgba(197,164,109,0.3)] z-0" />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-[40px] relative z-10">
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
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  {/* Timeline Point */}
                  <div className="flex items-center gap-[12px] mb-[20px]">
                    <div className="w-[12px] h-[12px] rounded-full bg-[var(--gold)] shrink-0 z-10" />
                    <span className="font-serif italic text-[36px] text-[var(--gold)] leading-none font-light">{step.num}</span>
                    <h3 className="font-serif text-[20px] text-[var(--light)] font-bold">{step.title}</h3>
                  </div>
                  
                  <p className="text-[13px] text-[var(--muted)] leading-relaxed font-light mb-[24px] lg:min-h-[72px]">
                    {step.desc}
                  </p>
                  
                  {/* Step Card Image */}
                  <div className="w-full aspect-[4/3] rounded-sm overflow-hidden border border-[rgba(10,10,10,0.06)] shadow-sm bg-white">
                    <img 
                      src={step.img} 
                      alt={step.title} 
                      className="w-full h-full object-cover transition-transform duration-[600ms] hover:scale-105" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
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
      <section className="px-[5%] md:px-[8%] max-w-[1400px] mx-auto mb-[100px] reveal">
        <div className="bg-[rgba(10,10,10,0.02)] border border-[rgba(10,10,10,0.06)] rounded-sm p-[40px] md:p-[60px] flex flex-col lg:flex-row items-center justify-between gap-[40px] relative overflow-hidden">
          {/* Left Side: Film Reel Icon & Text */}
          <div className="flex items-center gap-[24px] z-10 w-full lg:w-auto">
            <svg className="w-16 h-16 text-[var(--gold)] opacity-30 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="12" cy="12" r="6" strokeWidth="2" />
              <circle cx="12" cy="12" r="2" strokeWidth="2" />
            </svg>
            <div>
              <h2 className="font-serif text-[clamp(28px,3.5vw,40px)] text-[var(--light)] leading-tight">
                Let's create something <br />
                extraordinary together.
              </h2>
            </div>
          </div>
          {/* Right Side: Start a Project Button & Illustration */}
          <div className="z-10 flex items-center justify-between lg:justify-end gap-[40px] w-full lg:w-auto shrink-0">
            <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--gold)] text-white uppercase tracking-[0.2em] text-[11px] font-bold px-[36px] py-[18px] transition-all duration-400 hover:bg-black hover:text-white cursor-none">
              Start a Project &rarr;
            </Link>
            <img 
              src="/images/about-cta-chair.png" 
              alt="Director's Chair Illustration" 
              className="h-[130px] w-auto object-contain hidden sm:block lg:ml-[20px]"
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
