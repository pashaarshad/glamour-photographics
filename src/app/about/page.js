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
    <main className="w-full bg-[var(--dark)] text-white min-h-screen pt-[160px] pb-[100px] cursor-none">
      
      {/* ─── HERO SECTION ─── */}
      <section className="px-[5%] md:px-[8%] max-w-[1400px] mx-auto mb-[100px]">
        <div className="reveal">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">
            Our Journey
          </span>
          <h1 className="font-serif text-[clamp(44px,6vw,80px)] font-light leading-[1.1] tracking-[-0.02em]">
            Defining Visual Excellence <br />
            <span className="italic text-[var(--gold)]">Since 1982.</span>
          </h1>
        </div>
      </section>

      {/* ─── HISTORY SECTION ─── */}
      <section className="px-[5%] md:px-[8%] max-w-[1400px] mx-auto mb-[140px] grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">
        <div className="h-[550px] md:h-[650px] relative img-mask bg-cover bg-center rounded-sm overflow-hidden border border-[rgba(255,255,255,0.05)]" style={{ backgroundImage: "url('/images/our_portfolio/Corporate and office/NMKL7605.jpg')" }}>
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="reveal">
          <h2 className="font-serif text-[32px] text-white mb-[24px]">
            Four Decades of Storytelling
          </h2>
          <p className="text-[14px] leading-[1.8] text-[var(--muted)] mb-[20px] font-light">
            Established in 1982, Glamour Photographics was founded on the belief that a photograph is more than just an image—it is a powerful tool for communication, a record of history, and a piece of art. For over 40 years, we have pushed the boundaries of visual media in Bengaluru and across India.
          </p>
          <p className="text-[14px] leading-[1.8] text-[var(--muted)] mb-[36px] font-light">
            Our journey began in a modest studio with analog film and darkrooms. Today, we are a multidisciplinary creative house equipped with cutting-edge digital technology, drones, and state-of-the-art production gear. What hasn't changed is our unwavering commitment to quality and our ability to capture the authentic essence of every subject.
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

      {/* ─── VISION SECTION ─── */}
      <section className="py-[120px] px-[5%] md:px-[8%] bg-black text-center border-y border-[rgba(255,255,255,0.05)]">
        <div className="max-w-[900px] mx-auto reveal">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[24px] block">
            Our Vision
          </span>
          <blockquote className="font-serif text-[clamp(24px,3.5vw,42px)] font-light leading-[1.3] text-white italic mb-[24px]">
            "To be the undisputed leader in visual storytelling, partnering with the world's most innovative brands to craft narratives that inspire, engage, and endure."
          </blockquote>
          <div className="w-[50px] h-[1px] bg-[var(--gold)] mx-auto mt-[30px]" />
        </div>
      </section>

      {/* ─── INFRASTRUCTURE SECTION ─── */}
      <section className="px-[5%] md:px-[8%] max-w-[1400px] mx-auto mt-[140px] grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">
        <div className="reveal order-2 lg:order-1">
          <h2 className="font-serif text-[32px] text-white mb-[24px]">
            State-of-the-Art Infrastructure
          </h2>
          <p className="text-[14px] leading-[1.8] text-[var(--muted)] mb-[20px] font-light">
            Our Bengaluru studio is a hub of creativity and technology. We house an extensive inventory of high-end camera bodies, premium cinema lenses, professional lighting rigs, and specialized drone flight equipment. 
          </p>
          <p className="text-[14px] leading-[1.8] text-[var(--muted)] font-light">
            Beyond the shoot, our dedicated post-production suites ensure flawless color grading, precise editing, and impeccable retouching. We maintain rigorous data redundancy and security protocols to ensure your valuable intellectual property is always protected.
          </p>
        </div>
        <div className="h-[500px] md:h-[600px] relative img-mask order-1 lg:order-2 bg-cover bg-center rounded-sm overflow-hidden border border-[rgba(255,255,255,0.05)]" style={{ backgroundImage: "url('/images/our_portfolio/Corporate and office/NMKL7837.jpg')" }}>
          <div className="absolute inset-0 bg-black/35" />
        </div>
      </section>

    </main>
  );
}
