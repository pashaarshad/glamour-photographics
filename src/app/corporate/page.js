'use client';
import { useEffect } from 'react';
import Link from 'next/link';

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] stagger-children">
            {featuredClients.map((client, idx) => (
              <Link 
                href={`/corporate/${client.slug}`} 
                key={idx} 
                className="group relative bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:border-[var(--gold)] rounded-sm overflow-hidden h-[340px] cursor-none block transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0c0c0c] to-[#040404] transition-transform duration-[700ms] group-hover:scale-105" />
                <div className="absolute inset-0 p-[40px] flex flex-col justify-end bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-[rgba(0,0,0,0.3)] to-transparent">
                  <div className="font-serif italic text-[120px] text-[rgba(255,255,255,0.02)] absolute top-[10px] right-[30px] leading-none transition-colors duration-[400ms] group-hover:text-[rgba(197,164,109,0.04)] font-light select-none">
                    {client.index}
                  </div>
                  <h3 className="font-serif text-[32px] text-white leading-[1.2] mb-[12px] transition-transform duration-[400ms] group-hover:-translate-y-[6px]">
                    {client.name}
                  </h3>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold)] opacity-0 -translate-x-[20px] transition-all duration-[400ms] group-hover:opacity-100 group-hover:translate-x-0">
                    {client.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Other Clients */}
        <div>
          <h2 className="font-serif text-[26px] text-white mb-[40px] reveal border-b border-[rgba(255,255,255,0.08)] pb-[20px]">
            More Industry Leaders
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] stagger-children">
            {otherClients.map((client, idx) => (
              <Link 
                href={`/corporate/${client.slug}`} 
                key={idx} 
                className="group relative bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:border-[var(--gold)] rounded-sm overflow-hidden min-h-[220px] cursor-none block flex flex-col justify-between p-[30px] transition-all duration-400"
              >
                <div className="absolute inset-0 bg-[var(--gold)] scale-y-0 origin-bottom transition-transform duration-[500ms] ease-in-out group-hover:scale-y-100 opacity-[0.02]" />
                <div className="relative z-[2] mt-[10px]">
                  <h3 className="font-serif text-[22px] text-[rgba(255,255,255,0.9)] mb-[8px] transition-colors duration-[400ms] group-hover:text-white leading-[1.3]">
                    {client.name}
                  </h3>
                  <p className="text-[12px] text-[var(--muted)] leading-relaxed font-light group-hover:text-[rgba(255,255,255,0.7)] transition-colors duration-400">
                    {client.desc}
                  </p>
                </div>
                <div className="relative z-[2] mt-[30px]">
                  <span className="inline-block text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] border border-[rgba(197,164,109,0.3)] py-[8px] px-[18px] transition-all duration-[400ms] group-hover:bg-[var(--gold)] group-hover:text-black group-hover:border-transparent">
                    View Project
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
