'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { MapPin, ChevronRight, Check } from 'lucide-react';

export default function StudioServices() {
  useEffect(() => {
    const checkReveals = () => {
      const vh = window.innerHeight;
      document.querySelectorAll('.reveal, .img-mask').forEach(el => {
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

  const studioServices = [
    {
      id: '01',
      tag: 'Passport Photo Studio | Walk-in Available',
      title: 'Passport & Visa Photos',
      subtitle: 'Accurate. Instant. Globally Accepted.',
      desc: 'Need a passport or visa photo that meets international standards? We deliver high-resolution, professionally lit photos compliant with all major embassy and government requirements. Walk in and walk out in minutes — digital and printed formats available, with a 100% acceptance guarantee.',
      highlights: [
        'High-resolution digital files',
        'Printed in multiple sizes',
        'Embassy-compliant backgrounds',
        '100% acceptance guarantee'
      ],
      img: '/images/passport_studio.png'
    },
    {
      id: '02',
      tag: 'Studio Headshot Setup | Individual & Corporate',
      title: 'Studio Head Shots',
      subtitle: 'First Impressions that Last.',
      desc: 'Whether it\'s for LinkedIn, corporate websites, resumes, or press kits, our studio headshots are crafted to highlight your best, most confident self. With flattering lighting, clean backdrops, and expert guidance, we create portraits that elevate your personal or professional brand.',
      highlights: [
        'Flattering studio lighting',
        'Multiple backdrop options',
        'Expert posing guidance',
        'Available for corporate team shoots'
      ],
      img: '/images/headshot_studio.png'
    },
    {
      id: '03',
      tag: 'Photo Restoration | Digital & Print',
      title: 'Photo Restoration',
      subtitle: 'Give Your Memories New Life.',
      desc: 'We expertly restore damaged, faded, or torn photographs as well as video cassettes and DVD conversion with editing — fixing creases, removing stains, and enhancing clarity. Whether it\'s a cherished family portrait or a vintage memory, we bring back the original charm with modern digital techniques.',
      highlights: [
        'Damaged photo restoration',
        'Video cassette digitisation',
        'DVD conversion & editing',
        'High-quality reprinting available'
      ],
      img: '/images/photo_restoration.png'
    },
    {
      id: '04',
      tag: 'Album Design Studio | Custom Design',
      title: 'Album Design',
      subtitle: 'Stories Bound in Beautiful Albums.',
      desc: 'We design and produce premium photo albums that serve as lasting keepsakes of your most important moments. Every layout is carefully crafted to complement your photos, tell a cohesive story, and reflect your personal aesthetic — printed on archival-quality materials.',
      highlights: [
        'Custom layout design',
        'Premium archival printing',
        'Wedding & corporate albums',
        'Multiple cover options'
      ],
      img: '/images/album_design.png',
      hasCTA: true
    }
  ];

  return (
    <main className="w-full bg-[var(--dark)] text-[var(--light)] min-h-screen pt-0 pb-0 cursor-none relative">
      
      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-[55vh] flex items-center px-[5%] md:px-[8%] overflow-hidden bg-[#0A0A0A] mb-[80px] pt-[120px] md:pt-[100px]">
        <div className="absolute inset-0 z-0">
          <img src="/images/passport_studio.png" alt="Capabilities Background" className="w-full h-full opacity-50 blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
        </div>
        <div className="max-w-[1400px] w-full mx-auto z-20 relative">
          <div className="reveal">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block font-semibold">
              Studio Services
            </span>
            <h1 className="font-serif text-[clamp(44px,6vw,80px)] font-light leading-[1.1] tracking-[-0.02em] text-white">
              Crafted for <br />
              <span className="italic text-[var(--gold)] font-medium">Every Need.</span>
            </h1>
            <p className="text-[14.5px] leading-[1.8] text-white/80 max-w-[620px] mt-[32px] font-medium">
              From passport photos to professional headshots, photo restoration to album design — our studio offers a comprehensive range of precision services, all delivered with the quality Glamour Photographics is known for across four decades of service in Bengaluru.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SERVICES STORY SECTION ─── */}
      <section className="px-[5%] md:px-[8%] py-[80px] max-w-[1400px] mx-auto flex flex-col gap-[140px]">
        {studioServices.map((service, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <div 
              key={service.id} 
              className={`flex flex-col lg:flex-row items-center gap-[60px] lg:gap-[100px] ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* IMAGE COLUMN */}
              <div className="w-full lg:w-1/2 relative h-[350px] md:h-[480px] rounded-sm overflow-hidden img-mask reveal z-10 group border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full transition-transform duration-[1200ms] group-hover:scale-105" 
                />
              </div>

              {/* CONTENT COLUMN */}
              <div className="w-full lg:w-1/2 reveal opacity-0 anim-fade-up z-20">
                <div className="flex items-center gap-[16px] mb-[20px]">
                  <span className="font-serif text-[42px] md:text-[54px] text-[var(--gold)] leading-none italic font-light">
                    {service.id}
                  </span>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] font-semibold border-l border-[rgba(10,10,10,0.15)] pl-[16px]">
                    {service.tag}
                  </span>
                </div>
                
                <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-light leading-[1.2] text-[var(--light)] mb-[10px]">
                  {service.title}
                </h2>
                
                <p className="text-[14px] md:text-[15px] italic text-[var(--gold)] mb-[24px] font-medium">
                  {service.subtitle}
                </p>

                <p className="text-[14px] md:text-[14.5px] leading-[1.8] text-[var(--muted)] mb-[32px] font-light">
                  {service.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[30px] gap-y-[16px] mb-[40px]">
                  {service.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-[10px]">
                      <span className="flex-none w-[16px] h-[16px] rounded-full bg-[rgba(212,175,55,0.1)] flex items-center justify-center text-[var(--gold)]">
                        <Check className="w-[10px] h-[10px]" />
                      </span>
                      <span className="text-[13.5px] text-[var(--light)] font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {service.hasCTA && (
                  <Link 
                    href="/portfolio" 
                    className="inline-flex items-center gap-[12px] bg-[var(--light)] text-[var(--dark)] text-[10px] tracking-[0.2em] uppercase font-bold py-[16px] px-[32px] hover:bg-[var(--gold)] hover:text-white transition-all duration-350 cursor-none rounded-sm shadow-md"
                  >
                    View Album Services <ChevronRight className="w-[12px] h-[12px]" />
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </section>

      {/* ─── LOCATION & CALL TO ACTION ─── */}
      <section className="py-[120px] px-[5%] md:px-[8%] bg-[var(--darker)] border-t border-[rgba(10,10,10,0.06)] text-center relative overflow-hidden">
        <div className="max-w-[700px] mx-auto reveal">
          <span className="flex items-center justify-center gap-[8px] text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-[24px] font-bold">
            <MapPin className="w-[14px] h-[14px] text-[var(--gold)]" /> Ashok Nagar, Bengaluru
          </span>
          <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-light text-[var(--light)] leading-[1.15] mb-[32px]">
            Visit our studio in <br />
            <span className="italic text-[var(--gold)]">Ashok Nagar, Bengaluru.</span>
          </h2>
          <p className="text-[14px] md:text-[15px] leading-[1.8] text-[var(--muted)] mb-[48px] font-medium max-w-[500px] mx-auto">
            Experience four decades of visual storytelling and photography expertise in person. Walk-ins are always welcome for passport photos.
          </p>
          <a 
            href="https://maps.google.com/?q=Glamour+Photographics+Ashok+Nagar+Bengaluru" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[10px] border border-[rgba(10,10,10,0.2)] text-[var(--light)] uppercase tracking-[0.2em] text-[11px] font-bold px-[40px] py-[20px] transition-all duration-400 hover:bg-[var(--light)] hover:text-[var(--dark)] hover:border-transparent cursor-none rounded-sm"
          >
            Find Us <ChevronRight className="w-[12px] h-[12px]" />
          </a>
        </div>
      </section>

    </main>
  );
}
