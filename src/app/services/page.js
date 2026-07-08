'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Play, X, Camera, Video, Calendar, Aperture, Building2, Film } from 'lucide-react';

export default function Services() {
  const [showreelOpen, setShowreelOpen] = useState(false);

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

  const services = [
    {
      id: '01',
      title: 'Corporate Films & Documentaries',
      desc: 'We produce high-end corporate films, brand documentaries, and CSR videos that tell your company’s story with cinematic brilliance and emotional resonance. From script to screen, we handle every aspect of production.',
      img: '/images/our_portfolio/cp-7.jpg'
    },
    {
      id: '02',
      title: 'Industrial & Architectural Photography',
      desc: 'Showcase your infrastructure, manufacturing plants, and architectural marvels. We use specialized lighting and perspective control to capture the true scale, safety, and precision of your facilities.',
      img: '/images/tata_elxsi/_AMZ0246.JPG'
    },
    {
      id: '03',
      title: 'Event Coverage & Live Streaming',
      desc: 'Comprehensive coverage of corporate summits, product launches, and annual days. We provide multi-camera setups, live broadcasting solutions, and rapid-turnaround photo and video edits for press and social media.',
      img: '/images/cii/CII (7th Bangalore Space Expo-2022) On-05-09-2022-Noor/NMK_0028.JPG'
    },
    {
      id: '04',
      title: 'Executive Portraits & Headshots',
      desc: 'Professional, approachable, and commanding portraits for your leadership team. We can set up our mobile studio at your corporate office to ensure consistent, premium lighting across all your brand assets.',
      img: '/images/presidency/PANA9115.jpg'
    }
  ];

  return (
    <main className="w-full bg-[var(--dark)] text-white min-h-screen pt-[160px] pb-[100px] cursor-none relative">
      
      {/* ─── HERO SECTION ─── */}
      <section className="px-[5%] md:px-[8%] max-w-[1400px] mx-auto mb-[100px]">
        <div className="reveal">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">
            Our Capabilities
          </span>
          <h1 className="font-serif text-[clamp(44px,6vw,80px)] font-light leading-[1.1] tracking-[-0.02em]">
            Comprehensive Visual <br />
            <span className="italic text-[var(--gold)]">Solutions.</span>
          </h1>
          <p className="text-[14px] leading-[1.8] text-[var(--muted)] max-w-[600px] mt-[32px] font-light">
            We offer end-to-end photography and videography services tailored for the corporate sector. Combining technical mastery with creative vision, we deliver assets that elevate your brand.
          </p>
        </div>
      </section>

      {/* ─── WE TELL STORIES THAT STAY SECTION ─── */}
      <section className="py-[100px] px-[5%] md:px-[8%] bg-black relative overflow-hidden mb-[100px] border-y border-[rgba(255,255,255,0.05)]">
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
          <div className="relative h-[400px] md:h-[500px] w-full rounded-sm overflow-hidden img-mask reveal z-10 group border border-[rgba(255,255,255,0.05)]">
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

      {/* ─── SERVICES ACCORDION/LIST ─── */}
      <section className="px-[5%] md:px-[8%] max-w-[1400px] mx-auto">
        <h2 className="font-serif text-[24px] mb-[40px] reveal border-b border-[rgba(255,255,255,0.08)] pb-[20px]">Capabilities Deep-Dive</h2>
        <div className="flex flex-col gap-[16px]">
          {services.map((service, idx) => (
            <div key={idx} className="group relative flex flex-col md:flex-row justify-between items-start md:items-center p-[40px] md:p-[50px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-sm transition-all duration-500 hover:border-[var(--gold)] reveal overflow-hidden cursor-none">
              
              {/* Background Image - Subtle preview by default, scales and fades on hover */}
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.07] transition-all duration-[800ms] group-hover:opacity-25 group-hover:scale-[1.02] grayscale group-hover:grayscale-0"
                style={{ backgroundImage: `url('${service.img}')` }}
              />
              <div className="absolute inset-0 z-0 bg-black opacity-30 group-hover:opacity-60 transition-opacity duration-500" />

              <div className="relative z-10 flex items-start gap-[40px] md:w-[70%]">
                <span className="font-serif text-[36px] md:text-[48px] text-[var(--gold)] leading-none italic font-light">
                  {service.id}
                </span>
                <div>
                  <h3 className="font-serif text-[26px] md:text-[30px] text-white mb-[16px] group-hover:text-[var(--gold)] transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-[14px] leading-[1.8] text-[var(--muted)] group-hover:text-[rgba(255,255,255,0.85)] transition-colors duration-500 font-light">
                    {service.desc}
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-[30px] md:mt-0 opacity-0 -translate-x-[20px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                <span className="w-[50px] h-[50px] rounded-full border border-[var(--gold)] flex items-center justify-center text-[var(--gold)] text-[20px]">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CONTACT CALL TO ACTION ─── */}
      <section className="mt-[140px] py-[100px] px-[5%] md:px-[8%] bg-black text-center reveal border-t border-[rgba(255,255,255,0.05)]">
        <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-light text-white leading-[1.1] mb-[40px]">
          Have a unique project in mind?
        </h2>
        <Link href="/contact" className="inline-block border border-[rgba(197,164,109,0.5)] text-white uppercase tracking-[0.2em] text-[11px] font-semibold px-[36px] py-[18px] transition-all duration-400 hover:bg-[var(--gold)] hover:text-black hover:border-transparent cursor-none">
          Let's Discuss Your Vision
        </Link>
      </section>

      {/* ─── SHOWREEL MODAL OVERLAY ─── */}
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
