'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import imagesMap from '../../../images_map.json';

export default function CorporatePortfolio() {
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
    { name: 'TCS', slug: 'tcs', desc: 'Framing the Future of Technology', index: '02' },
    { name: 'Presidency University', slug: 'presidency', desc: 'Framing Learning, Celebrating Legacy', index: '03' },
    { name: 'Tata Elxsi', slug: 'tata-elxsi', desc: 'Design Led Innovation', index: '04' }
  ];

  const otherClients = [
    { name: 'CGI', slug: 'cgi', desc: 'Global-Local Digital Engine' },
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
    if (slug === 'cii') logo = '/logo-clients/cii.jpg';
    else if (slug === 'cgi') logo = '/logo-clients/CGI_Inc.-Logo.wine.png';
    else if (slug === 'presidency') logo = '/logo-clients/presidency-university-yelahanka-bangalore-universities-si0nhgmmkz.jpg';
    else if (slug === 'tata-elxsi') logo = '/logo-clients/tata-elxsi-moves-focus-away-from-driverless-tech.avif';
    else if (slug === 'tcs') logo = '/logo-clients/TCS_NewLogo_Final_RGB.png';
    else if (slug === 'rtx') logo = '/logo-clients/RTX.webp';
    
    const fallbackBgs = {
      toyota: "/images/our_portfolio/33.jpg",
      pai: "/images/our_portfolio/Highlights_3C1A0761.jpg"
    };

    return {
      bg: images[0] || fallbackBgs[slug] || '/images/our_portfolio/cp-7.jpg',
      thumbnails: images.slice(1, 4), // 3 preview images
      logo
    };
  };

  return (
    <main className="w-full bg-[var(--dark)] text-white min-h-screen pt-[160px] pb-[100px] cursor-none">
      <section className="px-[5%] md:px-[8%] max-w-[1400px] mx-auto">
        <div className="reveal mb-[80px]">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">
            Corporate Portfolio
          </span>
          <h1 className="font-serif text-[clamp(44px,6vw,80px)] font-light leading-[1.1] tracking-[-0.02em]">
            Enterprise Partnerships
          </h1>
          <p className="text-[14px] md:text-[15px] leading-[1.8] text-[var(--muted)] max-w-[620px] mt-[32px] font-light">
            From highlighting cutting-edge infrastructure and global defense leadership, to capturing the human side of digital transformation—explore our collaborative work with industry titans.
          </p>
        </div>

        {/* Featured Clients */}
        <div className="mb-[120px]">
          <h2 className="font-serif text-[26px] text-white mb-[40px] reveal border-b border-[rgba(255,255,255,0.08)] pb-[20px]">
            Featured Collaborations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] stagger-children">
            {featuredClients.map((client, idx) => {
              const assets = getClientAssets(client.slug);
              return (
                <Link 
                  href={`/corporate/${client.slug}`} 
                  key={idx} 
                  className="group relative bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:border-[var(--gold)] rounded-sm overflow-hidden h-[360px] cursor-none block transition-all duration-500"
                >
                  {/* Card Background Poster */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-15 group-hover:opacity-35 transition-all duration-[800ms] group-hover:scale-[1.03]" 
                    style={{ backgroundImage: `url('${assets.bg}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,5,0.92)] via-[rgba(5,5,5,0.6)] to-transparent z-10" />
                  
                  {/* Card Content wrapper */}
                  <div className="absolute inset-0 p-[40px] flex flex-col justify-between z-20">
                    {/* Top Row: Logo & Index */}
                    <div className="flex justify-between items-start w-full">
                      {assets.logo ? (
                        <img 
                          src={assets.logo} 
                          alt={`${client.name} Logo`} 
                          className="max-h-[36px] max-w-[130px] object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"
                        />
                      ) : (
                        <span className="font-serif text-[18px] text-[var(--muted)]">{client.name}</span>
                      )}
                      
                      <div className="font-serif italic text-[44px] text-[rgba(255,255,255,0.08)] leading-none transition-colors duration-[400ms] group-hover:text-[var(--gold)] font-light select-none">
                        {client.index}
                      </div>
                    </div>

                    {/* Bottom Row: Text & Thumbnails */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-[24px] w-full">
                      <div className="flex-1">
                        <h3 className="font-serif text-[28px] md:text-[32px] text-white leading-[1.2] mb-[8px] transition-colors duration-[400ms] group-hover:text-[var(--gold)]">
                          {client.name}
                        </h3>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold)]">
                          {client.desc}
                        </p>
                      </div>

                      {/* Three Visual Gallery Thumbnails */}
                      {assets.thumbnails.length > 0 && (
                        <div className="flex gap-[8px] shrink-0">
                          {assets.thumbnails.map((thumbSrc, tIdx) => (
                            <div key={tIdx} className="w-[50px] h-[50px] rounded-sm overflow-hidden border border-[rgba(255,255,255,0.15)] group-hover:border-[var(--gold)] bg-black/40 transition-colors duration-400">
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
        <div>
          <h2 className="font-serif text-[26px] text-white mb-[40px] reveal border-b border-[rgba(255,255,255,0.08)] pb-[20px]">
            More Industry Leaders
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] stagger-children">
            {otherClients.map((client, idx) => {
              const assets = getClientAssets(client.slug);
              return (
                <Link 
                  href={`/corporate/${client.slug}`} 
                  key={idx} 
                  className="group relative bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:border-[var(--gold)] rounded-sm overflow-hidden min-h-[240px] cursor-none block flex flex-col justify-between p-[30px] transition-all duration-400"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500" 
                    style={{ backgroundImage: `url('${assets.bg}')` }}
                  />
                  <div className="absolute inset-0 bg-black/50 z-10" />

                  <div className="relative z-20 w-full flex flex-col gap-[16px] h-full justify-between flex-1">
                    <div>
                      {assets.logo ? (
                        <img 
                          src={assets.logo} 
                          alt={`${client.name} Logo`} 
                          className="max-h-[24px] max-w-[100px] object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-sm mb-[14px]"
                        />
                      ) : (
                        <h3 className="font-serif text-[18px] text-[rgba(255,255,255,0.9)] mb-[10px]">
                          {client.name}
                        </h3>
                      )}
                      <p className="text-[12px] text-[var(--muted)] leading-relaxed font-light group-hover:text-[rgba(255,255,255,0.85)] transition-colors">
                        {client.desc}
                      </p>
                    </div>

                    <div className="mt-[20px]">
                      <span className="inline-block text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] border border-[rgba(197,164,109,0.3)] py-[8px] px-[18px] transition-all duration-[400ms] group-hover:bg-[var(--gold)] group-hover:text-black group-hover:border-transparent">
                        View Project
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
