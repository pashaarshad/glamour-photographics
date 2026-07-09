'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function About() {
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
    <main className="w-full bg-[var(--dark)] text-white min-h-screen pt-0 pb-[100px] cursor-none relative">
      
      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-[50vh] flex items-center px-[5%] md:px-[8%] overflow-hidden bg-black mb-[100px] pt-[120px] md:pt-[100px]">
        <div className="absolute inset-0 z-0">
          <img src="/images/about-hero-section.png" alt="About Us Background" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)] via-[rgba(5,5,5,0.7)] to-transparent z-10" />
        </div>
        <div className="max-w-[1400px] w-full mx-auto z-20 relative">
          <div className="reveal">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">
              Our Legacy
            </span>
            <h1 className="font-serif text-[clamp(44px,6vw,80px)] font-light leading-[1.1] tracking-[-0.02em]">
              Defining Visual Excellence <br />
              <span className="italic text-[var(--gold)]">Since 1982.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ─── THE CORE LEGACY STORY ─── */}
      <section className="px-[5%] md:px-[8%] max-w-[1400px] mx-auto mb-[140px] grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">
        <div className="h-[550px] md:h-[650px] relative img-mask bg-cover bg-center rounded-sm overflow-hidden border border-[rgba(255,255,255,0.05)]" style={{ backgroundImage: "url('/images/Four Decades of Storytelling.png')" }}>
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="reveal">
          <h2 className="font-serif text-[32px] text-white mb-[24px]">
            Four Decades of Storytelling
          </h2>
          <p className="text-[14px] leading-[1.8] text-[var(--muted)] mb-[20px] font-light">
            Established in 1982 by Hameed Hussain, Glamour Photographics was built on the core philosophy that visual storytelling is a powerful bridge between legacy and innovation. Over the last forty years, we have documented the commercial expansion, technology landmarks, and leadership growth of Bangalore, Karnataka, and across India.
          </p>
          <p className="text-[14px] leading-[1.8] text-[var(--muted)] mb-[36px] font-light">
            From our early foundations in traditional film development, darkrooms, and high-fidelity print solutions, we have continually adapted to lead the digital revolution. Today, our infrastructure features 8K cinema units, industrial drone fleet mapping, and advanced post-production grade rendering systems. What remains unchanged is our commitment to capturing authentic, high-impact stories.
          </p>
          
          <div className="grid grid-cols-2 gap-[40px] pt-[36px] border-t border-[rgba(255,255,255,0.08)] stagger-children">
            <div>
              <div className="font-serif text-[42px] text-[var(--gold)] leading-none mb-[8px] font-light">40+</div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--muted)] font-medium">Years Experience</p>
            </div>
            <div>
              <div className="font-serif text-[42px] text-[var(--gold)] leading-none mb-[8px] font-light">2000+</div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--muted)] font-medium">Projects Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE DIRECTORS & CREATIVES ─── */}
      <section className="py-[120px] px-[5%] md:px-[8%] bg-black border-y border-[rgba(255,255,255,0.05)] mb-[140px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-[60px] reveal">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">Minds Behind the Lenses</span>
            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light leading-[1.2] text-white">Our Leadership</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
            {[
              { 
                name: "Hameed Hussain", 
                role: "Founder & Director", 
                bio: "A pioneer in Bangalore's commercial imaging space, Hameed founded Glamour Photographics in 1982. With an eye for framing and legacy capture, he led visual operations for CII, Toyota, and Presidency Group, converting analog visual media into early digital storytelling systems.",
                img: "/logo-clients/founder-ceo.jpg" 
              },
              { 
                name: "Anzar Hussain", 
                role: "Creative Lead", 
                bio: "Anzar leads creative direction, director of photography (DOP), and editing workflows. He spearheads the CGI Bangalore walkthrough production, Tata Elxsi Orca drone visuals, and TCS leadership event documentation, blending biomimicry drone tech with cinematic visuals.",
                img: "/logo-clients/founder-ceo.jpg" 
              },
              { 
                name: "Zia Hussain", 
                role: "Head of Operations", 
                bio: "Zia manages production schedules, client coordination, technology assets, and logistics. He coordinates on-site operations for high-security environments like the RTX Aero Show 2025 and Presidency University campus campaigns, ensuring zero-latency deliverables.",
                img: "/logo-clients/founder-ceo.jpg" 
              }
            ].map((member, idx) => (
              <div key={idx} className="group relative rounded-sm overflow-hidden bg-[var(--dark-panel)] border border-[rgba(255,255,255,0.05)] hover:border-[var(--gold)] transition-all duration-500 cursor-none flex flex-col">
                <div className="h-[360px] w-full overflow-hidden relative">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-panel)] via-transparent to-transparent opacity-90" />
                </div>
                <div className="p-[30px] flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] tracking-[0.25em] uppercase text-[var(--gold)] mb-[8px] block font-medium">{member.role}</span>
                    <h3 className="font-serif text-[24px] text-white group-hover:text-[var(--gold)] transition-colors leading-[1.2] mb-[16px]">{member.name}</h3>
                    <p className="text-[13px] text-[var(--muted)] leading-relaxed font-light mb-[20px]">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLIENT COLLABORATION MILESTONES ─── */}
      <section className="px-[5%] md:px-[8%] max-w-[1400px] mx-auto mb-[140px]">
        <div className="mb-[60px] reveal">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">Corporate Footprint</span>
          <h2 className="font-serif text-[32px] text-white">Featured Projects We’ve Built</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          {[
            {
              company: "CII",
              detail: "Over 40 years of event documentation, capturing trade milestones, conventions, and policy leadership summits."
            },
            {
              company: "CGI",
              detail: "Corporate campus walkthrough documentation showcasing digital architecture, systems infrastructure, and consulting workspace environment."
            },
            {
              company: "Toyota",
              detail: "CSR documentary storytelling highlighting inclusive educational models and community welfare transitions."
            },
            {
              company: "Tata Elxsi",
              detail: "Drone UAV flight documentation highlighting Orca bio-inspired flight systems and indigenously designed UAV trials."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-[30px] bg-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.05)] rounded-sm hover:border-[var(--gold)] transition-colors duration-450">
              <h3 className="font-serif text-[22px] text-[var(--gold)] mb-[12px]">{item.company}</h3>
              <p className="text-[13px] text-[var(--muted)] leading-relaxed font-light">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── VISION STATEMENT ─── */}
      <section className="py-[120px] px-[5%] md:px-[8%] bg-black text-center border-t border-[rgba(255,255,255,0.05)]">
        <div className="max-w-[900px] mx-auto reveal">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[24px] block">
            Our Promise
          </span>
          <blockquote className="font-serif text-[clamp(24px,3.5vw,42px)] font-light leading-[1.3] text-white italic">
            "To build digital records and visual narratives of high excellence, helping enterprise systems shape and communicate their legacies with absolute precision."
          </blockquote>
          <div className="w-[50px] h-[1px] bg-[var(--gold)] mx-auto mt-[30px]" />
        </div>
      </section>

    </main>
  );
}
