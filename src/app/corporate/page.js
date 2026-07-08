'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function CorporatePortfolio() {
  useEffect(() => {
    const checkReveals = () => {
      const vh = window.innerHeight;
      document.querySelectorAll('.reveal, .stagger-children').forEach(el => {
        if (el.getBoundingClientRect().top < vh * 0.9) el.classList.add('visible');
      });
    };

    window.addEventListener('scroll', checkReveals, { passive: true });
    const initialCheck = setTimeout(checkReveals, 500);

    return () => {
      window.removeEventListener('scroll', checkReveals);
      clearTimeout(initialCheck);
    };
  }, []);

  const featuredClients = [
    { name: 'CII', slug: 'cii', desc: 'Four Decades of Industry Leadership' },
    { name: 'CGI', slug: 'cgi', desc: 'Global-Local Digital Engine' },
    { name: 'Presidency University', slug: 'presidency', desc: 'Framing Learning, Celebrating Legacy' },
    { name: 'Tata Elxsi', slug: 'tata-elxsi', desc: 'Design Led Innovation' }
  ];

  const otherClients = [
    { name: 'TCS', slug: 'tcs', desc: 'Framing the Future of Technology' },
    { name: 'RTX', slug: 'rtx', desc: 'Spotlighting Aerospace Leadership' },
    { name: 'Toyota Kirloskar', slug: 'toyota', desc: 'Driving Change' },
    { name: 'PAI International', slug: 'pai', desc: 'Showcasing Retail Innovation' }
  ];

  return (
    <main className="w-full bg-[var(--ivory)] min-h-screen pt-[160px] pb-[100px]">
      <section className="px-[60px] max-w-[1400px] mx-auto">
        <div className="reveal mb-[80px]">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">
            Corporate Portfolio
          </span>
          <h1 className="font-serif text-[clamp(48px,6vw,84px)] font-light leading-[1] tracking-[-0.02em] text-[var(--black)]">
            Our Enterprise Partnerships
          </h1>
          <p className="text-[14px] leading-[1.9] text-[var(--muted)] max-w-[600px] mt-[32px]">
            From highlighting cutting-edge infrastructure and global defense leadership, to capturing the human side of digital transformation—explore our collaborative work with industry titans.
          </p>
        </div>

        {/* Featured Clients */}
        <div className="mb-[120px]">
          <h2 className="font-serif text-[28px] text-[var(--black)] mb-[40px] reveal border-b border-[rgba(10,10,10,0.1)] pb-[20px]">
            Featured Collaborations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[4px] stagger-children bg-[rgba(10,10,10,0.05)] border border-[rgba(10,10,10,0.05)]">
            {featuredClients.map((client, idx) => (
              <Link href={`/corporate/${client.slug}`} key={idx} className="group relative bg-[var(--black)] overflow-hidden h-[400px] cursor-none block">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] transition-transform duration-[700ms] group-hover:scale-105" />
                <div className="absolute inset-0 p-[40px] flex flex-col justify-end bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-transparent">
                  <div className="font-bebas text-[100px] text-[rgba(250,248,244,0.05)] absolute top-[20px] right-[30px] leading-none transition-colors duration-[400ms] group-hover:text-[rgba(197,164,109,0.1)]">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-[36px] text-[var(--ivory)] leading-[1.1] mb-[8px] transition-transform duration-[400ms] group-hover:-translate-y-[8px]">
                    {client.name}
                  </h3>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--gold)] opacity-0 -translate-x-[20px] transition-all duration-[400ms] group-hover:opacity-100 group-hover:translate-x-0">
                    {client.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Other Clients */}
        <div>
          <h2 className="font-serif text-[28px] text-[var(--black)] mb-[40px] reveal border-b border-[rgba(10,10,10,0.1)] pb-[20px]">
            More Industry Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] stagger-children bg-[rgba(10,10,10,0.05)] border border-[rgba(10,10,10,0.05)]">
            {otherClients.map((client, idx) => (
              <Link href={`/corporate/${client.slug}`} key={idx} className="group relative bg-[var(--ivory)] overflow-hidden min-h-[240px] cursor-none block flex items-center justify-center p-[40px] text-center transition-all duration-[400ms] hover:bg-[var(--black)]">
                <div className="absolute inset-0 bg-[var(--gold)] scale-y-0 origin-bottom transition-transform duration-[500ms] ease-[var(--ease)] group-hover:scale-y-100 opacity-10" />
                <div className="relative z-[2]">
                  <h3 className="font-serif text-[24px] text-[var(--black)] mb-[12px] transition-colors duration-[400ms] group-hover:text-[var(--ivory)]">
                    {client.name}
                  </h3>
                  <span className="inline-block text-[9px] tracking-[0.2em] uppercase text-[var(--muted)] border border-[rgba(10,10,10,0.1)] py-[6px] px-[12px] transition-all duration-[400ms] group-hover:border-[var(--gold)] group-hover:text-[var(--gold)]">
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
