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
      id: '01.',
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
      img: '/images/passport_studio.png',
      icon: (
        <svg className="w-[26px] h-[26px] text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
        </svg>
      )
    },
    {
      id: '02.',
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
      img: '/images/headshot_studio.png',
      icon: (
        <svg className="w-[26px] h-[26px] text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
          <circle cx="12" cy="8" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18c0-3 3-5 6-5s6 2 6 5" />
          <path strokeLinecap="round" d="M12 1v3m0 16v3m9-11h3M1 12h3" />
        </svg>
      )
    },
    {
      id: '03.',
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
      img: '/images/photo_restoration.png',
      icon: (
        <svg className="w-[26px] h-[26px] text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l5.096-.813 9.814-9.814-4.283-4.283-9.814 9.814zm-4.636-6.07a6 6 0 119.452 7.026m-7.07 0A6.002 6.002 0 013 12c0-2.617 1.675-4.843 4.026-5.658" />
          <path d="M19.5 4.5l2 2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: '04.',
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
      icon: (
        <svg className="w-[26px] h-[26px] text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-16.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-16.25v16.25" />
        </svg>
      ),
      hasCTA: true
    }
  ];

  return (
    <main className="w-full min-h-screen pt-0 pb-0 cursor-none relative"
      style={{
        backgroundImage: "url('/images/bg-Featured Work.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#FAF8F4'
      }}
    >
      
      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-[50vh] md:min-h-[55vh] lg:min-h-[60vh] flex items-end px-[5%] md:px-[8%] overflow-hidden mb-[60px] md:mb-[80px] pt-[160px] md:pt-[180px] lg:pt-[220px] pb-[60px] md:pb-[80px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F4] via-[#FAF8F4]/80 to-transparent z-10" />
        </div>
        <div className="max-w-[1400px] w-full mx-auto z-20 relative">
          <div className="reveal">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block font-bold">
              Studio Services
            </span>
            <h1 className="font-serif text-[clamp(44px,6vw,80px)] font-light leading-[1.1] tracking-[-0.02em] text-[#0A0A0A]">
              Crafted for <br />
              <span className="italic text-[var(--gold)] font-medium">Every Need.</span>
            </h1>
            <div className="w-[80px] h-[1px] bg-[var(--gold)] relative my-[24px]">
              <div className="w-[4px] h-[4px] bg-[var(--gold)] rotate-45 absolute left-[38px] -top-[1.5px]"></div>
            </div>
            <p className="text-[14.5px] leading-[1.8] text-[var(--muted)] max-w-[620px] font-medium">
              From passport photos to professional headshots, photo restoration to album design — our studio offers a comprehensive range of precision services, all delivered with the quality Glamour Photographics is known for across four decades of service in Bengaluru.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID SECTION ─── */}
      <section className="px-[4%] md:px-[5%] pb-[120px] max-w-[1600px] mx-auto reveal relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[0px] divide-y lg:divide-y-0 lg:divide-x divide-[rgba(10,10,10,0.08)] border-y border-[rgba(10,10,10,0.08)]">
          {studioServices.map((service, idx) => (
            <div key={idx} className="relative px-[32px] py-[50px] flex flex-col justify-between group bg-white/10 backdrop-blur-[1px] hover:bg-white/45 transition-all duration-500">
              
              {/* Top: Card Header info & Image */}
              <div>
                <span className="absolute top-[16px] left-[24px] font-serif text-[12px] text-[var(--gold)] font-medium">
                  {service.id}
                </span>
                
                {/* Visual Image Sample */}
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-[28px] border border-[rgba(10,10,10,0.06)] shadow-sm bg-[rgba(10,10,10,0.02)]">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" 
                  />
                </div>

                {/* Circular Gold Icon */}
                <div className="w-[56px] h-[56px] rounded-full border border-[var(--gold)]/35 flex items-center justify-center mb-[20px] bg-transparent group-hover:bg-[var(--gold)]/5 group-hover:border-[var(--gold)] transition-all duration-300 mx-auto shrink-0">
                  {service.icon}
                </div>

                <h3 className="font-serif text-[22px] text-[#0A0A0A] font-medium text-center mb-[8px]">
                  {service.title}
                </h3>
                
                <p className="text-[12.5px] italic text-[var(--gold)] text-center mb-[14px] font-medium">
                  {service.subtitle}
                </p>
                
                <div className="w-[30px] h-[1px] bg-[var(--gold)]/40 mx-auto mb-[18px]"></div>
                
                <p className="text-[13.5px] text-[var(--muted)] leading-relaxed font-light text-center mb-[24px]">
                  {service.desc}
                </p>
              </div>

              {/* Bottom: Bullet points & Optional CTA */}
              <div className="border-t border-[rgba(10,10,10,0.06)] pt-[24px] mt-[10px]">
                <div className="flex flex-col gap-[12px] mb-[28px]">
                  {service.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-[10px]">
                      <span className="flex-none w-[14px] h-[14px] rounded-full bg-[rgba(212,175,55,0.1)] flex items-center justify-center text-[var(--gold)]">
                        <Check className="w-[9px] h-[9px]" />
                      </span>
                      <span className="text-[13px] text-[var(--light)] font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {service.hasCTA && (
                  <Link 
                    href="/portfolio" 
                    className="inline-flex w-full items-center justify-center gap-[8px] bg-[var(--light)] text-[var(--dark)] text-[9px] tracking-[0.2em] uppercase font-bold py-[14px] hover:bg-[var(--gold)] hover:text-white transition-all duration-300 cursor-none rounded-sm shadow-sm"
                  >
                    View Album Services <ChevronRight className="w-[10px] h-[10px]" />
                  </Link>
                )}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ─── LOCATION & CALL TO ACTION ─── */}
      <section className="py-[120px] px-[5%] md:px-[8%] border-t border-[rgba(10,10,10,0.06)] text-center relative overflow-hidden bg-[rgba(250,248,244,0.7)] backdrop-blur-[2px]">
        <div className="max-w-[700px] mx-auto reveal relative z-10">
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
