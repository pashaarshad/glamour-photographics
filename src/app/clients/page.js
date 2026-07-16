'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { X } from 'lucide-react';
import imagesMap from '../../../images_map.json';

import 'swiper/css';

export default function CorporatePortfolio() {
  const [activeCert, setActiveCert] = useState(null);
  const [showOthers, setShowOthers] = useState(false);

  useEffect(() => {
    const checkReveals = () => {
      const vh = window.innerHeight;
      document.querySelectorAll('.reveal, .stagger-children').forEach(el => {
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

  const featuredClients = [
    { name: 'CII', slug: 'cii', desc: 'Four Decades of Industry Leadership', index: '01' },
    { name: 'CGI', slug: 'cgi', desc: 'Global-Local Digital Engine', index: '02' },
    { name: 'Presidency University', slug: 'presidency', desc: 'Framing Learning, Celebrating Legacy', index: '03' },
    { name: 'Tata Elxsi', slug: 'tata-elxsi', desc: 'Design Led Innovation', index: '04' }
  ];

  const otherClients = [
    { name: 'TCS', slug: 'tcs', desc: 'Framing the Future of Technology' },
    { name: 'RTX', slug: 'rtx', desc: 'Spotlighting Aerospace Leadership' },
    { name: 'Toyota Kirloskar', slug: 'toyota', desc: 'Driving Change' },
    { name: 'PAI International', slug: 'pai', desc: 'Showcasing Retail Innovation' }
  ];

  // Helper to extract background poster, thumbnails, and logo for each client card
  const getClientAssets = (slug) => {
    const mapSlug = slug === 'tata-elxsi' ? 'tata_elxsi' : slug;
    const images = imagesMap[mapSlug] || [];
    
    // Logos
    let logo = null;
    if (slug === 'cii') logo = '/logo-clients/cii.png';
    else if (slug === 'cgi') logo = '/logo-clients/cgi.png';
    else if (slug === 'presidency') logo = '/logo-clients/presidency.png';
    else if (slug === 'tata-elxsi') logo = '/logo-clients/tata-elxsi.png';
    else if (slug === 'tcs') logo = '/logo-clients/tcs.png';
    else if (slug === 'rtx') logo = '/logo-clients/rtx.png';
    else if (slug === 'toyota') logo = '/logo-clients/toyota.png';
    else if (slug === 'pai') logo = '/logo-clients/pai.png';
    
    return {
      bg: images[0] || '/images/our_portfolio/cp-7.jpg',
      thumbnails: images.slice(1, 4), // 3 preview images
      logo
    };
  };

  return (
    <main className="w-full bg-[var(--dark)] text-[var(--light)] min-h-screen pt-[160px] pb-[100px] cursor-none">
      <section className="px-[5%] md:px-[8%] max-w-[1400px] mx-auto">
        <div className="reveal mb-[80px]">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">
            Clients Portfolio
          </span>
          <h1 className="font-serif text-[clamp(44px,6vw,80px)] font-light leading-[1.1] tracking-[-0.02em] text-[var(--light)]">
            Enterprise Partnerships
          </h1>
          <p className="text-[14px] md:text-[15px] leading-[1.8] text-[var(--muted)] max-w-[620px] mt-[32px] font-light">
            From highlighting cutting-edge infrastructure and global defense leadership, to capturing the human side of digital transformation—explore our collaborative work with industry titans.
          </p>
        </div>

        {/* Featured Clients */}
        <div className="mb-[120px]">
          <h2 className="font-serif text-[26px] text-[var(--light)] mb-[40px] reveal border-b border-[rgba(10,10,10,0.08)] pb-[20px]">
            Featured Collaborations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] stagger-children">
            {featuredClients.map((client, idx) => {
              const assets = getClientAssets(client.slug);
              return (
                <Link 
                  href={`/clients/${client.slug}`} 
                  key={idx} 
                  className="group relative bg-[var(--darker)] border border-[rgba(10,10,10,0.06)] hover:border-[var(--gold)] rounded-sm overflow-hidden h-[360px] cursor-none block transition-all duration-500"
                >                  {/* Card Background Poster */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-85 group-hover:opacity-100 transition-all duration-[800ms] group-hover:scale-[1.03]" 
                    style={{ backgroundImage: `url('${assets.bg}')` }}
                  />
                  <div className="absolute inset-0 bg-black/10 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:opacity-0 transition-opacity duration-500 z-10" />
                  
                  {/* Card Content wrapper */}
                  <div className="absolute inset-0 p-[40px] flex flex-col justify-between z-20">
                    {/* Top Row: Logo & Index */}
                    <div className="flex justify-between items-start w-full">
                      {assets.logo ? (
                        <img 
                          src={assets.logo} 
                          alt={`${client.name} Logo`} 
                          className="max-h-[36px] max-w-[130px] object-contain transition-opacity duration-300 rounded-sm bg-white/95 p-[3px]"
                        />
                      ) : (
                        <span className="font-serif text-[18px] text-white font-bold">{client.name}</span>
                      )}
                      
                      <div className="font-serif italic text-[44px] text-[rgba(255,255,255,0.15)] leading-none transition-colors duration-[400ms] group-hover:text-[var(--gold)] font-light select-none">
                        {client.index}
                      </div>
                    </div>
 
                    {/* Bottom Row: Text & Thumbnails */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-[24px] w-full">
                      <div className="flex-1">
                        <h3 className="font-serif text-[28px] md:text-[32px] text-white font-bold leading-[1.2] mb-[8px] transition-colors duration-[400ms] group-hover:text-[var(--gold)] drop-shadow-md">
                          {client.name}
                        </h3>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold)] font-semibold drop-shadow-sm">
                          {client.desc}
                        </p>
                      </div>

                      {/* Three Visual Gallery Thumbnails */}
                      {assets.thumbnails.length > 0 && (
                        <div className="flex gap-[8px] shrink-0">
                          {assets.thumbnails.map((thumbSrc, tIdx) => (
                            <div key={tIdx} className="w-[50px] h-[50px] rounded-sm overflow-hidden border border-[rgba(10,10,10,0.08)] group-hover:border-[var(--gold)] bg-[var(--dark)]/40 transition-colors duration-400">
                              <img src={thumbSrc} alt="Preview thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        {/* Other Clients */}
        <div className="reveal mt-[80px]">
          {!showOthers ? (
            <div className="flex flex-col items-center justify-center py-[40px] border-t border-[rgba(10,10,10,0.06)]">
              <p className="text-[14px] text-[var(--muted)] mb-[24px] font-light text-center">
                We partner with industry leaders across automotive, retail, technology, and aerospace.
              </p>
              <button
                suppressHydrationWarning
                onClick={() => {
                  setShowOthers(true);
                  setTimeout(() => {
                    window.dispatchEvent(new Event('scroll'));
                  }, 100);
                }}
                className="border border-[rgba(10,10,10,0.15)] text-[var(--light)] text-[10px] tracking-[0.2em] uppercase py-[16px] px-[40px] hover:bg-[var(--light)] hover:text-[var(--dark)] transition-all duration-300 cursor-none font-bold rounded-full"
              >
                Explore More Partners
              </button>
            </div>
          ) : (
            <div className="transition-all duration-700 ease-out opacity-100 border-t border-[rgba(10,10,10,0.06)] pt-[60px]">
              <div className="flex justify-between items-center mb-[40px]">
                <h2 className="font-serif text-[26px] text-[var(--light)]">
                  More Industry Leaders
                </h2>
                <button
                  suppressHydrationWarning
                  onClick={() => setShowOthers(false)}
                  className="text-[10px] tracking-[0.15em] uppercase text-[var(--gold)] hover:text-[var(--light)] cursor-none transition-colors font-bold"
                >
                  Close Section &uarr;
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] stagger-children">
                {otherClients.map((client, idx) => {
                  const assets = getClientAssets(client.slug);
                  return (
                    <Link 
                      href={`/clients/${client.slug}`} 
                      key={idx} 
                      className="group relative bg-[var(--darker)] border border-[rgba(10,10,10,0.06)] hover:border-[var(--gold)] rounded-sm overflow-hidden min-h-[240px] cursor-none block flex flex-col justify-between p-[30px] transition-all duration-400"
                    >
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-85 group-hover:opacity-100 transition-all duration-500" 
                        style={{ backgroundImage: `url('${assets.bg}')` }}
                      />
                      <div className="absolute inset-0 bg-black/15 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-0 transition-opacity duration-500 z-10" />
     
                      <div className="relative z-20 w-full flex flex-col gap-[16px] h-full justify-between flex-1">
                        <div>
                          {assets.logo ? (
                            <img 
                              src={assets.logo} 
                              alt={`${client.name} Logo`} 
                              className="max-h-[24px] max-w-[100px] object-contain transition-opacity duration-300 rounded-sm mb-[14px] bg-white/95 p-[2.5px]"
                            />
                          ) : (
                            <h3 className="font-serif text-[18px] text-white font-bold mb-[10px] drop-shadow-md">
                              {client.name}
                            </h3>
                          )}
                          <p className="text-[12px] text-white/95 leading-relaxed font-semibold drop-shadow-sm">
                            {client.desc}
                          </p>
                        </div>
     
                        <div className="mt-[20px]">
                          <span className="inline-block text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] border border-[rgba(197,164,109,0.3)] py-[8px] px-[18px] transition-all duration-[400ms] group-hover:bg-[var(--gold)] group-hover:text-[var(--dark)] group-hover:border-transparent">
                            View Project
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─── TESTIMONIALS LOGO CAROUSEL ─── */}
      <section className="py-[120px] px-[8%] md:px-[10%] bg-[var(--darker)] border-t border-[rgba(10,10,10,0.06)]">
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
