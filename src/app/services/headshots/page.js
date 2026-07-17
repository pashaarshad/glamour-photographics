'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, User } from 'lucide-react';

export default function HeadshotsServices() {
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
    setTimeout(checkReveals, 300);
    return () => window.removeEventListener('scroll', checkReveals);
  }, []);

  const photos = [
    '/images/our_portfolio/headshots/6ba3a857-c93e-4299-8740-45da7ff9e3f2.jpg',
    '/images/our_portfolio/headshots/NMKL2060.jpg',
    '/images/our_portfolio/headshots/NMKL2078.jpg',
    '/images/our_portfolio/headshots/NMKL2079.jpg',
    '/images/our_portfolio/headshots/NMKL5344-2.jpg',
    '/images/our_portfolio/headshots/NMKL5462-2.jpg',
    '/images/our_portfolio/headshots/NMKL5713.jpg',
    '/images/our_portfolio/headshots/NMK_0236.JPG',
    '/images/our_portfolio/headshots/Untitled design(1) (1).jpg'
  ];

  return (
    <main className="w-full bg-[var(--dark)] text-[var(--light)] pb-[100px] cursor-none relative overflow-x-hidden">
      
      {/* ─── HERO HEADER ─── */}
      <section className="relative min-h-[50vh] flex items-center px-[5%] md:px-[8%] bg-[#0A0A0A] pt-[120px] md:pt-[100px]">
        <div className="absolute inset-0 z-0">
          <img src="/images/headshot_studio.png" alt="Headshot Studio Header" className="w-full h-full object-cover object-top opacity-40 select-none pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
        </div>
        <div className="max-w-[1400px] w-full mx-auto z-20 relative">
          <div className="reveal">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block font-bold">
              Capabilities
            </span>
            <h1 className="font-serif text-[clamp(36px,5vw,72px)] font-light leading-[1.1] tracking-[-0.02em] text-white">
              Executive <span className="italic text-[var(--gold)]">Headshots.</span>
            </h1>
            <p className="text-[14px] md:text-[15.5px] leading-[1.8] text-white/80 max-w-[620px] mt-[24px] font-light">
              First impressions aren't made in person anymore — they're made in pixels. Make yours count.
            </p>
          </div>
        </div>
      </section>

      {/* ─── INTRO DETAILS ─── */}
      <section className="py-[100px] px-[5%] md:px-[8%] max-w-[1400px] mx-auto reveal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[100px] items-center">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-[12px] block font-bold">Headshots Portfolio</span>
            <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-light text-[var(--light)] mb-[24px] leading-tight">
              The Photo That Speaks <br />
              <span className="italic text-[var(--gold)]">Before You Do.</span>
            </h2>
            <p className="text-[14.5px] leading-[1.85] text-[var(--muted)] font-light mb-[32px]">
              Your headshot is the handshake nobody sees you give. Whether it's for a LinkedIn profile, a company website, a press kit, or your team page, we make sure the first thing people notice about you is exactly what you want them to notice. Sharp lighting, natural posing, and a finish that feels professional — not staged.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[16px] gap-x-[32px] border-t border-[rgba(10,10,10,0.06)] pt-[24px] mb-[32px]">
              {['LinkedIn Profiles', 'Press & PR Kits', 'Company Websites', 'Leadership Team Portals'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-[10px]">
                  <span className="w-[14px] h-[14px] rounded-full bg-[rgba(212,175,55,0.1)] flex items-center justify-center text-[var(--gold)]">
                    <Check className="w-[9px] h-[9px]" />
                  </span>
                  <span className="text-[13px] text-[var(--light)] font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/portfolio" className="inline-flex items-center gap-[8px] border border-[rgba(10,10,10,0.15)] text-[var(--light)] text-[10px] tracking-[0.2em] uppercase py-[16px] px-[32px] hover:bg-[var(--light)] hover:text-[var(--dark)] transition-all duration-300 cursor-none font-medium">
              See the Portfolio in Action <ArrowRight className="w-[12px] h-[12px]" />
            </Link>
          </div>
          <div className="relative aspect-video w-full rounded-[16px] overflow-hidden border border-[rgba(10,10,10,0.06)] group shadow-md bg-black">
            <img src="/images/our_portfolio/headshots/_01A0630.JPG" alt="Executive Headshot Setup" className="w-full h-full object-cover object-top opacity-100 transition-transform duration-[1200ms] group-hover:scale-103" />
          </div>
        </div>
      </section>

      {/* ─── OUR SPECIALITY / MOBILE STUDIO ─── */}
      <section className="py-[100px] bg-[var(--darker)] border-t border-[rgba(10,10,10,0.06)] px-[5%] md:px-[8%]">
        <div className="max-w-[1000px] mx-auto text-center reveal">
          <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] font-bold mb-[12px] flex items-center justify-center gap-[8px]">
            <User className="w-[12px] h-[12px]" /> OUR SPECIALITY
          </span>
          <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-light text-[var(--light)] mb-[24px]">
            Mobile Studio Setup & Posing Guidance
          </h2>
          <p className="text-[14.5px] leading-[1.8] text-[var(--muted)] font-light max-w-[750px] mx-auto mb-[20px]">
            <span className="block text-[16px] text-[var(--gold)] italic font-medium mb-[12px]">First impressions aren't made in person anymore — they're made in pixels. Make yours count.</span>
            We offer custom studio setup at your corporate office, ensuring a seamless, consistent lighting look across all your team members without disrupting your workday. We guide each individual through posing and expression to deliver headshots that look commanding yet approachable.
          </p>
        </div>
      </section>

      {/* ─── PHOTOS GALLERY ─── */}
      <section className="py-[100px] border-t border-[rgba(10,10,10,0.06)] px-[5%] md:px-[8%]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-[50px] text-center reveal">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-[12px] block font-bold">Gallery</span>
            <h2 className="font-serif text-[clamp(28px,3vw,40px)] font-light text-[var(--light)]">Professional Headshots</h2>
            <div className="w-[60px] h-[1px] bg-[var(--gold)] mx-auto mt-[16px]"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] reveal">
            {photos.map((src, idx) => (
              <div key={idx} className="relative aspect-[3/4] rounded-lg overflow-hidden border border-[rgba(10,10,10,0.06)] group shadow-sm bg-[rgba(10,10,10,0.02)] max-w-[340px] mx-auto w-full">
                <img src={src} alt="Executive Headshot Grid" className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-103" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[20px]">
                  <span className="text-[8px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[4px] font-bold">Headshot Portfolio</span>
                  <h4 className="font-serif text-[14px] text-white">Corporate Identity</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-[120px] text-center px-[5%] reveal bg-[var(--darker)] border-t border-[rgba(10,10,10,0.06)]">
        <h2 className="font-serif text-[clamp(32px,4.5vw,52px)] font-light text-[var(--light)] mb-[40px]">
          Need professional headshots for your leadership?
        </h2>
        <Link href="/contact" className="inline-flex items-center gap-[10px] bg-[var(--gold)] text-white text-[11px] tracking-[0.2em] uppercase font-bold py-[18px] px-[44px] hover:bg-[var(--light)] hover:text-[var(--dark)] transition-all duration-300 cursor-none rounded-full shadow-md">
          Book a Session <ArrowRight className="w-[14px] h-[14px]" />
        </Link>
      </section>

    </main>
  );
}
