'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
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
      title: 'Event Photography & Videography',
      desc: 'From big stages to bigger stakes. We cover international summits and conferences, commanding raw event documentation and providing instant on-spot edited teasers in under 2 hours.',
      img: '/images/our_portfolio/33.jpg',
      href: '/services/event'
    },
    {
      id: '02',
      title: 'Corporate Media Services',
      desc: 'High-end boardroom visual narratives, employee spotlight films, and facilities media campaigns. We translate your culture, values, and vision into premium corporate storytelling.',
      img: '/images/our_portfolio/cp-7.jpg',
      href: '/services/corporate'
    },
    {
      id: '03',
      title: 'Digital Ads & Visual Campaigns',
      desc: 'Scroll-stopping campaigns engineered to capture attention, build brand awareness, and break conventions in modern feeds.',
      img: '/images/our_portfolio/22.jpg',
      href: '/services/digital-ads'
    },
    {
      id: '04',
      title: 'Documentary Filmmaking',
      desc: 'Narrative stories of hope, health, and empowerment captured directly from communities across India, bridging brand CSR initiatives with real, lasting impact.',
      img: '/images/our_portfolio/te3.jpg',
      href: '/services/documentary'
    },
    {
      id: '05',
      title: 'School & Educational Films',
      desc: 'Showcasing campus learning, active classrooms, and school values to help parents and students feel what makes your institution stand out.',
      img: '/images/our_portfolio/highlights_SKV00387.jpg',
      href: '/services/educational-films'
    },
    {
      id: '06',
      title: 'Executive Portraits & Headshots',
      desc: 'First impressions are made in pixels. Flattering professional studio lighting, custom poses, and a clean polish for your corporate leadership profiles.',
      img: '/images/studio-shoot.jpg',
      href: '/services/headshots'
    }
  ];

  return (
    <main className="w-full bg-[var(--dark)] text-[var(--light)] min-h-screen pt-0 pb-[100px] cursor-none relative">
      
      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-[60vh] flex items-center px-[5%] md:px-[8%] overflow-hidden bg-[#0A0A0A] mb-[100px] pt-[120px] md:pt-[100px]">
        <div className="absolute inset-0 z-0">
          <img src="/images/servers-hero-section.png" alt="Capabilities Background" className="w-full h-full object-cover opacity-90" />
          {/* Dark Shading Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent z-10" />
        </div>
        <div className="max-w-[1400px] w-full mx-auto z-20 relative">
          <div className="reveal">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block font-semibold">
              Our Capabilities
            </span>
            <h1 className="font-serif text-[clamp(44px,6vw,80px)] font-light leading-[1.1] tracking-[-0.02em] text-white">
              Comprehensive Visual <br />
              <span className="italic text-[var(--gold)]">Solutions.</span>
            </h1>
            <p className="text-[14.5px] leading-[1.8] text-white/80 max-w-[600px] mt-[32px] font-medium">
              We offer end-to-end photography and videography services tailored for the corporate sector. Combining technical mastery with creative vision, we deliver assets that elevate your brand.
            </p>
          </div>
        </div>
      </section>

      {/* ─── WE TELL STORIES THAT STAY SECTION ─── */}
      <section className="py-[100px] px-[5%] md:px-[8%] bg-[var(--dark)] relative overflow-hidden mb-[100px] border-y border-[rgba(10,10,10,0.06)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          <div className="reveal opacity-0 anim-fade-up z-20">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">
              We Don't Just Shoot
            </span>
            <h2 className="font-serif text-[clamp(36px,5vw,70px)] font-light leading-[1.1] tracking-[-0.01em] text-[var(--light)] mb-[32px]">
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
              <button 
                suppressHydrationWarning
                onClick={() => setShowreelOpen(true)} 
                className="flex items-center gap-[12px] bg-[rgba(10,10,10,0.03)] border border-[rgba(10,10,10,0.06)] text-[var(--gold)] text-[10px] tracking-[0.2em] uppercase py-[16px] px-[32px] hover:bg-[var(--gold)] hover:text-white hover:border-transparent transition-all duration-300 cursor-none font-medium"
              >
                <Play className="w-[12px] h-[12px] fill-current" />
                Watch Showreel
              </button>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] w-full rounded-sm overflow-hidden img-mask reveal z-10 group border border-[rgba(10,10,10,0.06)]">
            <img src="/images/about-silhouette.jpg" alt="Photographer Silhouette" className="w-full h-full object-cover grayscale-[30%] opacity-85 transition-transform duration-[1200ms] group-hover:scale-105" />
            {/* No shading overlay */}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ACCORDION/LIST ─── */}
      <section className="px-[5%] md:px-[8%] max-w-[1400px] mx-auto">
        <h2 className="font-serif text-[24px] mb-[40px] reveal border-b border-[rgba(10,10,10,0.08)] pb-[20px] text-[var(--light)]">Capabilities Deep-Dive</h2>
        <div className="flex flex-col gap-[16px]">
          {services.map((service, idx) => (
            <Link 
              href={service.href}
              key={idx} 
              className="group relative flex flex-col md:flex-row justify-between items-start md:items-center p-[40px] md:p-[50px] bg-[var(--darker)] border border-[rgba(10,10,10,0.06)] rounded-sm transition-all duration-500 hover:border-[var(--gold)] reveal overflow-hidden cursor-none"
            >
              
              {/* Background Image - Less transparent, clearly visible */}
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.18] transition-all duration-[800ms] group-hover:opacity-[0.55] group-hover:scale-[1.02] grayscale group-hover:grayscale-0"
                style={{ backgroundImage: `url('${service.img}')` }}
              />
              <div className="absolute inset-0 z-0 bg-[var(--dark)] opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
 
              <div className="relative z-10 flex items-start gap-[40px] md:w-[70%]">
                <span className="font-serif text-[36px] md:text-[48px] text-[var(--gold)] leading-none italic font-light">
                  {service.id}
                </span>
                <div>
                  <h3 className="font-serif text-[26px] md:text-[30px] text-[var(--light)] mb-[16px] group-hover:text-[var(--gold)] transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.8] text-[var(--muted)] group-hover:text-[var(--light)] transition-colors duration-500 font-medium">
                    {service.desc}
                  </p>
                </div>
              </div>
 
              <div className="relative z-10 mt-[30px] md:mt-0 opacity-0 -translate-x-[20px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                <span className="w-[50px] h-[50px] rounded-full border border-[var(--gold)] flex items-center justify-center text-[var(--gold)] text-[20px]">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── CONTACT CALL TO ACTION ─── */}
      <section className="mt-[140px] py-[100px] px-[5%] md:px-[8%] bg-[var(--darker)] text-center reveal border-t border-[rgba(10,10,10,0.06)]">
        <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-light text-[var(--light)] leading-[1.1] mb-[40px]">
          Have a unique project in mind?
        </h2>
        <Link href="/contact" className="inline-block border border-[rgba(10,10,10,0.15)] text-[var(--light)] uppercase tracking-[0.2em] text-[11px] font-semibold px-[36px] py-[18px] transition-all duration-400 hover:bg-[var(--light)] hover:text-[var(--dark)] hover:border-transparent cursor-none">
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
