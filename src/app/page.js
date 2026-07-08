'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    const checkReveals = () => {
      const vh = window.innerHeight;
      
      document.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach(el => {
        if (el.getBoundingClientRect().top < vh * 0.88) el.classList.add('visible');
      });
      document.querySelectorAll('.stagger-children').forEach(el => {
        if (el.getBoundingClientRect().top < vh * 0.88) el.classList.add('visible');
      });
      document.querySelectorAll('.img-mask').forEach(el => {
        if (el.getBoundingClientRect().top < vh * 0.9) el.classList.add('visible');
      });
      document.querySelectorAll('.gold-line, .gold-line-short').forEach(el => {
        if (el.getBoundingClientRect().top < vh * 0.9) el.classList.add('visible');
      });
    };

    window.addEventListener('scroll', checkReveals, { passive: true });
    // Initial check after a slight delay to allow loader to finish
    const initialCheck = setTimeout(checkReveals, 2400);

    return () => {
      window.removeEventListener('scroll', checkReveals);
      clearTimeout(initialCheck);
    };
  }, []);

  return (
    <main className="w-full">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-[140px] px-[60px] pb-[80px] overflow-hidden bg-[var(--ivory)] before:content-[''] before:absolute before:inset-0 before:pointer-events-none before:bg-[url('data:image/svg+xml,%3Csvg_viewBox=%220_0_512_512%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22n%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.75%22_numOctaves=%224%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23n)%22_opacity=%220.03%22/%3E%3C/svg%3E')] before:opacity-40 before:z-0 after:content-[''] after:absolute after:-right-[120px] after:-top-[120px] after:w-[600px] after:h-[600px] after:rounded-full after:border after:border-[rgba(197,164,109,0.12)] after:pointer-events-none after:z-0">
        <div className="relative z-[2] text-center max-w-[960px] mx-auto mb-[60px]">
          <span className="inline-block text-[10px] tracking-[0.48em] uppercase text-[var(--gold)] mb-[28px] opacity-0 anim-fade-up delay-200">
            Bengaluru's Premier Studio
          </span>
          <h1 className="font-serif text-[clamp(56px,9vw,128px)] font-light leading-[0.92] tracking-[-0.025em] text-[var(--black)] mb-[32px]">
            <span className="block overflow-hidden"><span className="block anim-slide-up delay-210" style={{ transform: 'translateY(100%)' }}>Defining Visual</span></span>
            <span className="block overflow-hidden"><span className="block anim-slide-up delay-225" style={{ transform: 'translateY(100%)' }}>Excellence Since</span></span>
            <span className="block overflow-hidden"><span className="block anim-slide-up delay-240 text-[var(--gold)] italic" style={{ transform: 'translateY(100%)' }}>1982.</span></span>
          </h1>
          <p className="text-[14px] tracking-[0.05em] text-[var(--muted)] max-w-[480px] leading-[1.9] mx-auto opacity-0 anim-fade-up delay-280">
            Partnering with industry leaders to capture compelling corporate narratives, industrial milestones, and documentary stories.
          </p>
        </div>

        {/* HERO STRIP */}
        <div className="hero-strip relative z-[2] flex flex-row gap-[8px] w-full max-w-[1200px] mx-auto opacity-0 anim-fade-up delay-300 h-[420px]">
          <div className="hero-strip-item group relative overflow-hidden rounded-[3px] cursor-none flex-[1] transition-all duration-[550ms] ease-[var(--ease)] min-w-0 hover:flex-[4.2] hover:shadow-[0_24px_70px_rgba(10,10,8,0.22),0_4px_20px_rgba(197,164,109,0.1)]">
            <div className="strip-img w-full h-full transition-transform duration-[700ms] ease-[var(--ease)] overflow-hidden absolute inset-0 group-hover:scale-[1.04]">
              <img src="/images/cii/CII (7th Bangalore Space Expo-2022) On-05-09-2022-Noor/NMK_0076.JPG" alt="CII Event" className="w-full h-full object-cover" />
            </div>
            <div className="strip-overlay absolute inset-0 z-[2] bg-gradient-to-t from-[rgba(10,10,8,0.85)] via-[rgba(10,10,8,0.1)] to-transparent flex flex-col justify-end p-[22px_20px] opacity-0 translate-y-[8px] transition-all duration-[400ms] ease-out delay-[100ms] group-hover:opacity-100 group-hover:translate-y-0">
              <span className="strip-label text-[9px] tracking-[0.3em] uppercase text-[var(--gold)] mb-[4px]">CII</span>
              <h3 className="strip-title font-serif text-[17px] text-[var(--ivory)] font-normal leading-[1.2]">Four Decades of Industry Leadership</h3>
            </div>
            <div className="strip-pip absolute top-[14px] left-[14px] z-[3] w-[6px] h-[6px] rounded-full bg-[var(--gold)] opacity-0 scale-0 transition-all duration-[300ms] ease-out delay-[200ms] group-hover:opacity-100 group-hover:scale-100" />
            <div className="strip-side-label absolute bottom-[24px] left-1/2 -translate-x-1/2 text-[9px] tracking-[0.3em] uppercase text-[rgba(250,248,244,0.45)] whitespace-nowrap [writing-mode:vertical-rl] [text-orientation:mixed] transition-opacity duration-[300ms] ease-out z-[2] group-hover:opacity-0">CII</div>
          </div>

          <div className="hero-strip-item group relative overflow-hidden rounded-[3px] cursor-none flex-[1] transition-all duration-[550ms] ease-[var(--ease)] min-w-0 hover:flex-[4.2] hover:shadow-[0_24px_70px_rgba(10,10,8,0.22),0_4px_20px_rgba(197,164,109,0.1)]">
            <div className="strip-img w-full h-full transition-transform duration-[700ms] ease-[var(--ease)] overflow-hidden absolute inset-0 group-hover:scale-[1.04]">
              <img src="/images/cgi/SKV00055.jpg" alt="CGI Office" className="w-full h-full object-cover" />
            </div>
            <div className="strip-overlay absolute inset-0 z-[2] bg-gradient-to-t from-[rgba(10,10,8,0.85)] via-[rgba(10,10,8,0.1)] to-transparent flex flex-col justify-end p-[22px_20px] opacity-0 translate-y-[8px] transition-all duration-[400ms] ease-out delay-[100ms] group-hover:opacity-100 group-hover:translate-y-0">
              <span className="strip-label text-[9px] tracking-[0.3em] uppercase text-[var(--gold)] mb-[4px]">CGI</span>
              <h3 className="strip-title font-serif text-[17px] text-[var(--ivory)] font-normal leading-[1.2]">Global-Local Digital Engine</h3>
            </div>
            <div className="strip-pip absolute top-[14px] left-[14px] z-[3] w-[6px] h-[6px] rounded-full bg-[var(--gold)] opacity-0 scale-0 transition-all duration-[300ms] ease-out delay-[200ms] group-hover:opacity-100 group-hover:scale-100" />
            <div className="strip-side-label absolute bottom-[24px] left-1/2 -translate-x-1/2 text-[9px] tracking-[0.3em] uppercase text-[rgba(250,248,244,0.45)] whitespace-nowrap [writing-mode:vertical-rl] [text-orientation:mixed] transition-opacity duration-[300ms] ease-out z-[2] group-hover:opacity-0">CGI</div>
          </div>

          <div className="hero-strip-item group relative overflow-hidden rounded-[3px] cursor-none flex-[1] transition-all duration-[550ms] ease-[var(--ease)] min-w-0 hover:flex-[4.2] hover:shadow-[0_24px_70px_rgba(10,10,8,0.22),0_4px_20px_rgba(197,164,109,0.1)]">
            <div className="strip-img w-full h-full transition-transform duration-[700ms] ease-[var(--ease)] overflow-hidden absolute inset-0 group-hover:scale-[1.04]">
              <img src="/images/presidency/PANA9024.jpg" alt="Presidency University" className="w-full h-full object-cover" />
            </div>
            <div className="strip-overlay absolute inset-0 z-[2] bg-gradient-to-t from-[rgba(10,10,8,0.85)] via-[rgba(10,10,8,0.1)] to-transparent flex flex-col justify-end p-[22px_20px] opacity-0 translate-y-[8px] transition-all duration-[400ms] ease-out delay-[100ms] group-hover:opacity-100 group-hover:translate-y-0">
              <span className="strip-label text-[9px] tracking-[0.3em] uppercase text-[var(--gold)] mb-[4px]">Presidency</span>
              <h3 className="strip-title font-serif text-[17px] text-[var(--ivory)] font-normal leading-[1.2]">Framing Learning &amp; Legacy</h3>
            </div>
            <div className="strip-pip absolute top-[14px] left-[14px] z-[3] w-[6px] h-[6px] rounded-full bg-[var(--gold)] opacity-0 scale-0 transition-all duration-[300ms] ease-out delay-[200ms] group-hover:opacity-100 group-hover:scale-100" />
            <div className="strip-side-label absolute bottom-[24px] left-1/2 -translate-x-1/2 text-[9px] tracking-[0.3em] uppercase text-[rgba(250,248,244,0.45)] whitespace-nowrap [writing-mode:vertical-rl] [text-orientation:mixed] transition-opacity duration-[300ms] ease-out z-[2] group-hover:opacity-0">PRESIDENCY</div>
          </div>

          <div className="hero-strip-item group relative overflow-hidden rounded-[3px] cursor-none flex-[1] transition-all duration-[550ms] ease-[var(--ease)] min-w-0 hover:flex-[4.2] hover:shadow-[0_24px_70px_rgba(10,10,8,0.22),0_4px_20px_rgba(197,164,109,0.1)]">
            <div className="strip-img w-full h-full transition-transform duration-[700ms] ease-[var(--ease)] overflow-hidden absolute inset-0 group-hover:scale-[1.04]">
              <img src="/images/tata_elxsi/_AMZ0016.JPG" alt="Tata Elxsi" className="w-full h-full object-cover" />
            </div>
            <div className="strip-overlay absolute inset-0 z-[2] bg-gradient-to-t from-[rgba(10,10,8,0.85)] via-[rgba(10,10,8,0.1)] to-transparent flex flex-col justify-end p-[22px_20px] opacity-0 translate-y-[8px] transition-all duration-[400ms] ease-out delay-[100ms] group-hover:opacity-100 group-hover:translate-y-0">
              <span className="strip-label text-[9px] tracking-[0.3em] uppercase text-[var(--gold)] mb-[4px]">Tata Elxsi</span>
              <h3 className="strip-title font-serif text-[17px] text-[var(--ivory)] font-normal leading-[1.2]">Design Led Innovation</h3>
            </div>
            <div className="strip-pip absolute top-[14px] left-[14px] z-[3] w-[6px] h-[6px] rounded-full bg-[var(--gold)] opacity-0 scale-0 transition-all duration-[300ms] ease-out delay-[200ms] group-hover:opacity-100 group-hover:scale-100" />
            <div className="strip-side-label absolute bottom-[24px] left-1/2 -translate-x-1/2 text-[9px] tracking-[0.3em] uppercase text-[rgba(250,248,244,0.45)] whitespace-nowrap [writing-mode:vertical-rl] [text-orientation:mixed] transition-opacity duration-[300ms] ease-out z-[2] group-hover:opacity-0">TATA ELXSI</div>
          </div>
        </div>

        <div className="absolute bottom-[36px] right-[60px] z-[2] flex flex-col items-center gap-[12px] opacity-0 anim-fade-up delay-340">
          <span className="text-[9px] tracking-[0.3em] uppercase text-[rgba(10,10,10,0.28)] [writing-mode:vertical-rl]">Scroll</span>
          <div className="w-[1px] h-[60px] bg-[rgba(10,10,10,0.1)] relative overflow-hidden after:content-[''] after:absolute after:top-[-100%] after:left-0 after:w-full after:h-full after:bg-[var(--gold)] after:anim-scroll delay-380" />
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <section className="bg-[var(--beige)] py-[18px] overflow-hidden border-y border-[rgba(10,10,10,0.06)]">
        <div className="flex gap-[48px] whitespace-nowrap animate-[marquee_28s_linear_infinite]">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="font-bebas text-[18px] tracking-[0.18em] text-[rgba(10,10,10,0.4)]">
              Corporate Films <span className="text-[var(--gold)] mx-[24px]">·</span>
              Event Photography <span className="text-[var(--gold)] mx-[24px]">·</span>
              Documentaries <span className="text-[var(--gold)] mx-[24px]">·</span>
              Digital Ads <span className="text-[var(--gold)] mx-[24px]">·</span>
              Product Shoots <span className="text-[var(--gold)] mx-[24px]">·</span>
            </span>
          ))}
        </div>
      </section>

      {/* ─── ABOUT TEASER ─── */}
      <section className="py-[120px] px-[60px] grid grid-cols-1 md:grid-cols-2 gap-[120px] items-center bg-[var(--ivory)]">
        <div className="h-[600px] relative img-mask">
          <img src="/images/our_portfolio/Corporate and office/DSC03794.JPG" alt="About Us" className="absolute inset-0 w-full h-full object-cover" />
          <div className="w-[75%] h-[80%] absolute top-0 left-0 bg-gradient-to-br from-[#1a1510] to-[#2d2218] flex items-center justify-center font-serif text-[rgba(250,248,244,0.18)] text-[13px] tracking-[0.12em] opacity-40">
            VISUAL ARTS
          </div>
          <div className="w-[55%] h-[50%] absolute bottom-0 right-0 bg-gradient-to-br from-[#e8e2d9] to-[#d5cbbf] border-[4px] border-[var(--ivory)] flex items-center justify-center font-serif text-[rgba(10,10,10,0.25)] text-[12px] tracking-[0.1em] z-10 opacity-90">
            EST. 1982
          </div>
        </div>
        <div>
          <h2 className="font-serif text-[clamp(42px,4.5vw,64px)] font-light leading-[1.1] mb-[28px] text-[var(--black)] reveal">
            Capturing the Essence of Enterprise.
          </h2>
          <div className="inline-flex items-baseline gap-[8px] font-bebas text-[120px] text-[rgba(10,10,10,0.05)] leading-none mb-[24px] reveal">
            40+ <span className="text-[40px] text-[var(--gold)] tracking-[0.1em] font-sans uppercase">Years</span>
          </div>
          <p className="text-[14px] leading-[1.9] text-[var(--muted)] mb-[16px] reveal">
            Since 1982, Glamour Photographics has been a trusted visual partner to India’s most respected brands. We don't just record events; we craft narratives that reflect your corporate ethos, innovation, and legacy.
          </p>
          <div className="reveal mt-[32px]">
            <Link href="/about" className="btn-primary">Discover Our Journey <span className="text-[14px]">→</span></Link>
          </div>
        </div>
      </section>

      {/* ─── CLIENTS ─── */}
      <section className="py-[100px] px-[60px] bg-[var(--beige)]">
        <div className="text-center mb-[70px] reveal">
          <p className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px]">Trusted Partners</p>
          <h2 className="font-serif text-[clamp(36px,4vw,60px)] font-light tracking-[-0.02em] leading-[1.1] text-[var(--black)]">
            A Legacy of Collaboration
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px] stagger-children">
          {['CII', 'CGI', 'Toyota', 'TCS', 'RTX', 'Tata Elxsi', 'Presidency', 'PAI'].map((client, i) => (
            <div key={i} className="group py-[40px] px-[30px] border border-[rgba(10,10,10,0.07)] flex items-center justify-center min-h-[120px] cursor-none transition-all duration-[350ms] relative overflow-hidden bg-[var(--ivory)] hover:border-transparent">
              <div className="absolute inset-0 bg-[var(--gold)] scale-y-0 origin-bottom transition-transform duration-[400ms] ease-[var(--ease)] group-hover:scale-y-100" />
              <span className="font-serif text-[18px] font-medium tracking-[0.05em] text-center relative z-[1] transition-colors duration-[300ms] text-[var(--black)] group-hover:text-[var(--ivory)]">{client}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── RECENT WORKS ─── */}
      <section className="py-[120px] px-[60px] bg-[var(--beige)]">
        <div className="reveal">
          <p className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px]">Selected Projects</p>
          <h2 className="font-serif text-[clamp(36px,4vw,60px)] font-light tracking-[-0.02em] leading-[1.1] text-[var(--black)]">
            Our Recent Work
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px] mt-[70px] stagger-children">
          <div className="work-card relative overflow-hidden cursor-none h-[420px] group">
            <div className="w-full h-full transform transition-transform duration-[700ms] ease-[var(--ease)] group-hover:scale-105 bg-cover bg-center" style={{ backgroundImage: "url('/images/tata_elxsi/_AMZ0246.JPG')" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,8,0.88)] via-[rgba(10,10,8,0.2)] to-transparent flex flex-col justify-end p-[40px]">
              <div className="font-bebas text-[80px] text-[rgba(250,248,244,0.06)] absolute top-[20px] right-[28px] leading-none">01</div>
              <p className="text-[9px] tracking-[0.35em] uppercase text-[var(--gold)] mb-[8px]">Corporate Film</p>
              <h3 className="font-serif text-[32px] text-[var(--ivory)] font-normal leading-[1.2]">Tata Elxsi Innovation Hub</h3>
              <div className="absolute bottom-[40px] right-[40px] w-[40px] h-[40px] border border-[rgba(250,248,244,0.2)] rounded-full flex items-center justify-center text-[var(--ivory)] text-[16px] translate-x-[20px] opacity-0 transition-all duration-[400ms] ease-in-out group-hover:translate-x-0 group-hover:opacity-100">→</div>
            </div>
          </div>
          <div className="work-card relative overflow-hidden cursor-none h-[420px] group">
            <div className="w-full h-full transform transition-transform duration-[700ms] ease-[var(--ease)] group-hover:scale-105 bg-cover bg-center" style={{ backgroundImage: "url('/images/cii/CII (7th Bangalore Space Expo-2022) On-05-09-2022-Noor/NMK_0028.JPG')" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,8,0.88)] via-[rgba(10,10,8,0.2)] to-transparent flex flex-col justify-end p-[40px]">
              <div className="font-bebas text-[80px] text-[rgba(250,248,244,0.06)] absolute top-[20px] right-[28px] leading-none">02</div>
              <p className="text-[9px] tracking-[0.35em] uppercase text-[var(--gold)] mb-[8px]">Event Coverage</p>
              <h3 className="font-serif text-[32px] text-[var(--ivory)] font-normal leading-[1.2]">CII Annual Summit</h3>
              <div className="absolute bottom-[40px] right-[40px] w-[40px] h-[40px] border border-[rgba(250,248,244,0.2)] rounded-full flex items-center justify-center text-[var(--ivory)] text-[16px] translate-x-[20px] opacity-0 transition-all duration-[400ms] ease-in-out group-hover:translate-x-0 group-hover:opacity-100">→</div>
            </div>
          </div>
          <div className="work-card relative overflow-hidden cursor-none h-[420px] group">
            <div className="w-full h-full transform transition-transform duration-[700ms] ease-[var(--ease)] group-hover:scale-105 bg-cover bg-center" style={{ backgroundImage: "url('/images/our_portfolio/Corporate and office/DSC03789.JPG')" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,8,0.88)] via-[rgba(10,10,8,0.2)] to-transparent flex flex-col justify-end p-[40px]">
              <div className="font-bebas text-[80px] text-[rgba(250,248,244,0.06)] absolute top-[20px] right-[28px] leading-none">03</div>
              <p className="text-[9px] tracking-[0.35em] uppercase text-[var(--gold)] mb-[8px]">Documentary</p>
              <h3 className="font-serif text-[32px] text-[var(--ivory)] font-normal leading-[1.2]">Toyota Kirloskar CSR</h3>
              <div className="absolute bottom-[40px] right-[40px] w-[40px] h-[40px] border border-[rgba(250,248,244,0.2)] rounded-full flex items-center justify-center text-[var(--ivory)] text-[16px] translate-x-[20px] opacity-0 transition-all duration-[400ms] ease-in-out group-hover:translate-x-0 group-hover:opacity-100">→</div>
            </div>
          </div>
          <div className="work-card relative overflow-hidden cursor-none h-[420px] group">
            <div className="w-full h-full transform transition-transform duration-[700ms] ease-[var(--ease)] group-hover:scale-105 bg-cover bg-center" style={{ backgroundImage: "url('/images/presidency/PANA9115.jpg')" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,8,0.88)] via-[rgba(10,10,8,0.2)] to-transparent flex flex-col justify-end p-[40px]">
              <div className="font-bebas text-[80px] text-[rgba(250,248,244,0.06)] absolute top-[20px] right-[28px] leading-none">04</div>
              <p className="text-[9px] tracking-[0.35em] uppercase text-[var(--gold)] mb-[8px]">Brand Visuals</p>
              <h3 className="font-serif text-[32px] text-[var(--ivory)] font-normal leading-[1.2]">Presidency University</h3>
              <div className="absolute bottom-[40px] right-[40px] w-[40px] h-[40px] border border-[rgba(250,248,244,0.2)] rounded-full flex items-center justify-center text-[var(--ivory)] text-[16px] translate-x-[20px] opacity-0 transition-all duration-[400ms] ease-in-out group-hover:translate-x-0 group-hover:opacity-100">→</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-[120px] px-[60px] bg-[var(--ivory)]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-[80px] items-start">
          <div className="reveal">
            <p className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px]">Testimonials</p>
            <h2 className="font-serif text-[clamp(36px,3.5vw,54px)] font-light leading-[1.1] tracking-[-0.02em] text-[var(--black)]">
              Words From Our Clients
            </h2>
            <p className="text-[13px] text-[var(--muted)] mt-[20px] leading-[1.8]">
              We value long-term partnerships. Here’s what industry leaders say about working with Glamour Photographics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] stagger-children">
            <div className="p-[36px] border border-[rgba(10,10,10,0.08)] bg-[var(--ivory)] transition-all duration-300 hover:border-[var(--gold)] hover:-translate-y-[4px]">
              <div className="font-serif text-[44px] text-[var(--gold)] leading-none mb-[16px]">"</div>
              <p className="text-[13px] leading-[1.85] text-[var(--muted)] italic mb-[20px]">
                Glamour Photographics has consistently delivered beyond our expectations. Their ability to capture the exact mood and professionalism of our corporate events is unmatched.
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase font-medium text-[var(--black)]">Marketing Director</p>
              <p className="text-[11px] text-[var(--gold)] mt-[4px]">Top IT Firm</p>
            </div>
            <div className="p-[36px] border border-[rgba(10,10,10,0.08)] bg-[var(--ivory)] transition-all duration-300 hover:border-[var(--gold)] hover:-translate-y-[4px]">
              <div className="font-serif text-[44px] text-[var(--gold)] leading-none mb-[16px]">"</div>
              <p className="text-[13px] leading-[1.85] text-[var(--muted)] italic mb-[20px]">
                The documentary they produced for our CSR initiative beautifully highlighted our community work. A highly professional team with a great eye for detail.
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase font-medium text-[var(--black)]">Head of CSR</p>
              <p className="text-[11px] text-[var(--gold)] mt-[4px]">Automotive Leader</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="bg-[var(--gold)] py-[80px] px-[60px] flex flex-col md:flex-row justify-between items-center gap-[60px] reveal">
        <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light text-[var(--black)] leading-[1.1]">
          Ready to tell your <em>story?</em>
        </h2>
        <Link href="/contact" className="btn-dark shrink-0">Contact Us →</Link>
      </section>

    </main>
  );
}
