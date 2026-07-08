'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function About() {
  useEffect(() => {
    const checkReveals = () => {
      const vh = window.innerHeight;
      document.querySelectorAll('.reveal, .stagger-children, .img-mask').forEach(el => {
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

  return (
    <main className="w-full bg-[var(--ivory)] min-h-screen pt-[160px] pb-[100px]">
      <section className="px-[60px] max-w-[1400px] mx-auto mb-[120px]">
        <div className="reveal">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">
            Our Journey
          </span>
          <h1 className="font-serif text-[clamp(48px,6vw,84px)] font-light leading-[1] tracking-[-0.02em] text-[var(--black)]">
            Defining Visual Excellence <br />
            <span className="italic text-[var(--gold)]">Since 1982.</span>
          </h1>
        </div>
      </section>

      {/* History Section */}
      <section className="px-[60px] max-w-[1400px] mx-auto mb-[160px] grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">
        <div className="h-[700px] relative img-mask bg-cover bg-center" style={{ backgroundImage: "url('/images/our_portfolio/Corporate and office/DSC03794.JPG')" }}>
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="reveal">
          <h2 className="font-serif text-[36px] text-[var(--black)] mb-[32px]">
            Four Decades of Storytelling
          </h2>
          <p className="text-[14px] leading-[1.9] text-[var(--muted)] mb-[24px]">
            Established in 1982, Glamour Photographics was founded on the belief that a photograph is more than just an image—it is a powerful tool for communication, a record of history, and a piece of art. For over 40 years, we have pushed the boundaries of visual media in Bengaluru and across India.
          </p>
          <p className="text-[14px] leading-[1.9] text-[var(--muted)] mb-[40px]">
            Our journey began in a modest studio with analog film and darkrooms. Today, we are a multidisciplinary creative house equipped with cutting-edge digital technology, drones, and state-of-the-art production gear. What hasn't changed is our unwavering commitment to quality and our ability to capture the authentic essence of every subject.
          </p>
          
          <div className="grid grid-cols-2 gap-[40px] pt-[40px] border-t border-[rgba(10,10,10,0.1)] stagger-children">
            <div>
              <div className="font-bebas text-[48px] text-[var(--gold)] leading-none mb-[8px]">40+</div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--black)]">Years Experience</p>
            </div>
            <div>
              <div className="font-bebas text-[48px] text-[var(--gold)] leading-none mb-[8px]">1M+</div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--black)]">Frames Captured</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-[120px] px-[60px] bg-[var(--black)] text-center">
        <div className="max-w-[800px] mx-auto reveal">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[24px] block">
            Our Vision
          </span>
          <blockquote className="font-serif text-[clamp(28px,4vw,48px)] font-light leading-[1.3] text-[var(--ivory)] italic">
            "To be the undisputed leader in visual storytelling, partnering with the world's most innovative brands to craft narratives that inspire, engage, and endure."
          </blockquote>
        </div>
      </section>

      {/* Studio/Infrastructure */}
      <section className="px-[60px] max-w-[1400px] mx-auto mt-[160px] grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">
        <div className="reveal order-2 lg:order-1">
          <h2 className="font-serif text-[36px] text-[var(--black)] mb-[32px]">
            State-of-the-Art Infrastructure
          </h2>
          <p className="text-[14px] leading-[1.9] text-[var(--muted)] mb-[24px]">
            Our Bengaluru studio is a hub of creativity and technology. We house an extensive inventory of high-end camera bodies, premium cinema lenses, professional lighting rigs, and specialized grip equipment. 
          </p>
          <p className="text-[14px] leading-[1.9] text-[var(--muted)]">
            Beyond the shoot, our dedicated post-production suites ensure flawless color grading, precise editing, and impeccable retouching. We maintain rigorous data redundancy and security protocols to ensure your valuable intellectual property is always protected.
          </p>
        </div>
        <div className="h-[600px] relative img-mask order-1 lg:order-2 bg-cover bg-center" style={{ backgroundImage: "url('/images/our_portfolio/Corporate and office/DSC03789.JPG')" }}>
        </div>
      </section>

    </main>
  );
}
