'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Services() {
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

  const services = [
    {
      id: '01',
      title: 'Corporate Films & Documentaries',
      desc: 'We produce high-end corporate films, brand documentaries, and CSR videos that tell your company’s story with cinematic brilliance and emotional resonance. From script to screen, we handle every aspect of production.',
      img: '/images/our_portfolio/Corporate and office/DSC03789.JPG'
    },
    {
      id: '02',
      title: 'Industrial & Architectural Photography',
      desc: 'Showcase your infrastructure, manufacturing plants, and architectural marvels. We use specialized lighting and perspective control to capture the true scale, safety, and precision of your facilities.',
      img: '/images/tata_elxsi/_AMZ0246.JPG'
    },
    {
      id: '03',
      title: 'Event Coverage & Live Streaming',
      desc: 'Comprehensive coverage of corporate summits, product launches, and annual days. We provide multi-camera setups, live broadcasting solutions, and rapid-turnaround photo and video edits for press and social media.',
      img: '/images/cii/CII (7th Bangalore Space Expo-2022) On-05-09-2022-Noor/NMK_0028.JPG'
    },
    {
      id: '04',
      title: 'Executive Portraits & Headshots',
      desc: 'Professional, approachable, and commanding portraits for your leadership team. We can set up our mobile studio at your corporate office to ensure consistent, premium lighting across all your brand assets.',
      img: '/images/presidency/PANA9115.jpg'
    }
  ];

  return (
    <main className="w-full bg-[var(--ivory)] min-h-screen pt-[160px] pb-[100px]">
      <section className="px-[60px] max-w-[1400px] mx-auto mb-[120px]">
        <div className="reveal">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">
            Our Capabilities
          </span>
          <h1 className="font-serif text-[clamp(48px,6vw,84px)] font-light leading-[1] tracking-[-0.02em] text-[var(--black)]">
            Comprehensive Visual <br />
            <span className="italic text-[var(--gold)]">Solutions.</span>
          </h1>
          <p className="text-[14px] leading-[1.9] text-[var(--muted)] max-w-[600px] mt-[32px]">
            We offer end-to-end photography and videography services tailored for the corporate sector. Combining technical mastery with creative vision, we deliver assets that elevate your brand.
          </p>
        </div>
      </section>

      <section className="px-[60px] max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-[8px]">
          {services.map((service, idx) => (
            <div key={idx} className="group relative flex flex-col md:flex-row justify-between items-start md:items-center p-[40px] md:p-[60px] bg-[rgba(10,10,10,0.03)] border border-[rgba(10,10,10,0.05)] transition-all duration-500 hover:bg-[var(--black)] reveal overflow-hidden">
              
              {/* Background Image Reveal on Hover */}
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-40"
                style={{ backgroundImage: `url('${service.img}')` }}
              />
              <div className="absolute inset-0 z-0 bg-[var(--black)] opacity-0 transition-opacity duration-500 group-hover:opacity-80" />

              <div className="relative z-10 flex items-start gap-[40px] md:w-[60%]">
                <span className="font-bebas text-[60px] text-[var(--gold)] leading-none pt-[10px]">
                  {service.id}
                </span>
                <div>
                  <h3 className="font-serif text-[32px] text-[var(--black)] mb-[16px] transition-colors duration-500 group-hover:text-[var(--ivory)]">
                    {service.title}
                  </h3>
                  <p className="text-[14px] leading-[1.8] text-[var(--muted)] transition-colors duration-500 group-hover:text-[rgba(250,248,244,0.7)]">
                    {service.desc}
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-[30px] md:mt-0 opacity-0 -translate-x-[20px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                <span className="w-[60px] h-[60px] rounded-full border border-[var(--gold)] flex items-center justify-center text-[var(--gold)] text-[24px]">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-[160px] py-[120px] px-[60px] bg-[var(--beige)] text-center reveal">
        <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-light text-[var(--black)] leading-[1.1] mb-[40px]">
          Have a unique project in mind?
        </h2>
        <Link href="/contact" className="btn-dark">Let's Discuss Your Vision</Link>
      </section>
    </main>
  );
}
