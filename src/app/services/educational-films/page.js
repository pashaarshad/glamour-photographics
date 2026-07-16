'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Play, X, Film, ArrowRight } from 'lucide-react';

export default function EducationalFilmsServices() {
  const [activeVideoId, setActiveVideoId] = useState(null);

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

  const videos = [
    {
      id: 'doOSgmHHgD4',
      title: 'Campus Showcase Film 1',
      hook: 'Promoting school academic values and campus life.',
      desc: 'Guiding prospective parents and students through campus culture, academic environments, and everyday achievements.'
    },
    {
      id: 'df1A-_FulEs',
      title: 'Campus Showcase Film 2',
      hook: 'Capturing state-of-the-art laboratory and sports facilities.',
      desc: 'Spotlighting modern laboratories, athletic spaces, libraries, and creative classrooms that showcase institutional excellence.'
    },
    {
      id: 'XulH5TjS50k',
      title: 'Campus Showcase Film 3',
      hook: 'Walking through classrooms and learning environments.',
      desc: 'Highlighting collaborative student-teacher interactions, teaching innovations, and technology-enabled learning systems.'
    },
    {
      id: 'cImmLgZo9-Y',
      title: 'Campus Showcase Film 4',
      hook: 'Conforming student perspectives and teacher collaborations.',
      desc: 'Illustrating the true spirit of discovery, creative growth, mentorship, and collective discovery on campus.'
    }
  ];

  return (
    <main className="w-full bg-[var(--dark)] text-[var(--light)] pb-[100px] cursor-none relative overflow-x-hidden">
      
      {/* ─── HERO HEADER ─── */}
      <section className="relative min-h-[50vh] flex items-center px-[5%] md:px-[8%] bg-[#0A0A0A] pt-[120px] md:pt-[100px]">
        <div className="absolute inset-0 z-0">
          <img src="/images/our_portfolio/highlights_SKV00387.jpg" alt="Educational Header" className="w-full h-full object-cover object-[center_20%] opacity-40 select-none pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
        </div>
        <div className="max-w-[1400px] w-full mx-auto z-20 relative">
          <div className="reveal">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block font-bold">
              Capabilities
            </span>
            <h1 className="font-serif text-[clamp(36px,5vw,72px)] font-light leading-[1.1] tracking-[-0.02em] text-white">
              School & <br />
              <span className="italic text-[var(--gold)]">Educational Films.</span>
            </h1>
            <p className="text-[14px] md:text-[15.5px] leading-[1.8] text-white/80 max-w-[620px] mt-[24px] font-light">
              Every campus has a hundred untold stories. We find the ones that make parents say "this is the school for us."
            </p>
          </div>
        </div>
      </section>

      {/* ─── INTRO DETAILS ─── */}
      <section className="py-[100px] px-[5%] md:px-[8%] max-w-[1400px] mx-auto reveal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[100px] items-center">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-[12px] block font-bold">Educational Media</span>
            <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-light text-[var(--light)] mb-[24px] leading-tight">
              Where Learning Looks <br />
              <span className="italic text-[var(--gold)]">as Good as It Feels.</span>
            </h2>
            <p className="text-[14.5px] leading-[1.85] text-[var(--muted)] font-light mb-[32px]">
              A prospectus can list facilities. Only a film can make someone feel what it's like to walk your campus, sit in your classrooms, and belong to your community. We craft school and educational films that go beyond the brochure capturing real classrooms, real students, and the everyday moments that convince parents and students this is where they're meant to be.
            </p>
            <Link href="/portfolio" className="inline-flex items-center gap-[8px] border border-[rgba(10,10,10,0.15)] text-[var(--light)] text-[10px] tracking-[0.2em] uppercase py-[16px] px-[32px] hover:bg-[var(--light)] hover:text-[var(--dark)] transition-all duration-300 cursor-none font-medium">
              See the Portfolio in Action <ArrowRight className="w-[12px] h-[12px]" />
            </Link>
          </div>
          <div className="relative aspect-video w-full rounded-[16px] overflow-hidden border border-[rgba(10,10,10,0.06)] group shadow-md bg-black">
            <img src="/images/our_portfolio/highlights_SKV00387.jpg" alt="Student Active Learning" className="w-full h-full object-cover opacity-100 transition-transform duration-[1200ms] group-hover:scale-103" />
          </div>
        </div>
      </section>

      {/* ─── VIDEO GRID ─── */}
      <section className="py-[100px] bg-[var(--darker)] border-t border-[rgba(10,10,10,0.06)] px-[5%] md:px-[8%]">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-[800px] mx-auto text-center mb-[60px] reveal flex flex-col items-center">
            <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] font-bold mb-[12px] flex items-center gap-[8px]">
              <Film className="w-[12px] h-[12px]" /> CAMPUS FILMING
            </span>
            <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-light text-[var(--light)] mb-[16px]">
              Featured School Films
            </h2>
            <p className="text-[14.5px] leading-[1.8] text-[var(--muted)] font-light">
              School showcase videos that bring campus culture, state-of-the-art labs, and interactive classrooms to life.
            </p>
          </div>

          <div className="flex flex-col gap-[60px] mt-[40px]">
            {videos.map((video, idx) => (
              <div 
                key={video.id}
                className={`flex flex-col lg:flex-row gap-[40px] lg:gap-[60px] items-center reveal ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Video Card Player */}
                <div 
                  onClick={() => setActiveVideoId(video.id)}
                  className="w-full lg:w-1/2 aspect-video rounded-[16px] overflow-hidden border border-[rgba(10,10,10,0.06)] bg-black shadow-md cursor-none relative group"
                >
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-102 transition-transform duration-[800ms]"
                  />
                  <div className="absolute inset-0 bg-black/20 z-10" />
                  
                  {/* Play circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full border border-white/50 bg-black/40 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--gold)] group-hover:border-transparent z-20">
                    <Play className="w-[18px] h-[18px] fill-current ml-[2px]" />
                  </div>
                </div>

                {/* Details */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold)] font-bold mb-[8px]">SCHOOL FILM</span>
                  <h3 className="font-serif text-[24px] text-[var(--light)] font-bold mb-[12px] leading-tight">{video.title}</h3>
                  <div className="w-[40px] h-[1px] bg-[var(--gold)] mb-[16px]"></div>
                  <h4 className="font-sans text-[14px] text-[var(--gold)] italic font-semibold mb-[12px]">"{video.hook}"</h4>
                  <p className="text-[14px] leading-[1.8] text-[var(--muted)] font-light">{video.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-[120px] text-center px-[5%] reveal border-t border-[rgba(10,10,10,0.06)]">
        <h2 className="font-serif text-[clamp(32px,4.5vw,52px)] font-light text-[var(--light)] mb-[40px]">
          Ready to showcase your institution's excellence?
        </h2>
        <Link href="/contact" className="inline-flex items-center gap-[10px] bg-[var(--gold)] text-white text-[11px] tracking-[0.2em] uppercase font-bold py-[18px] px-[44px] hover:bg-[var(--light)] hover:text-[var(--dark)] transition-all duration-300 cursor-none rounded-full shadow-md">
          Work With Us <ArrowRight className="w-[14px] h-[14px]" />
        </Link>
      </section>

      {/* ─── YOUTUBE MODAL OVERLAY ─── */}
      {activeVideoId && (
        <div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-[20px]">
          <button 
            onClick={() => setActiveVideoId(null)}
            className="absolute top-[30px] right-[5%] md:right-[8%] text-white text-[12px] tracking-[0.2em] uppercase flex items-center gap-[8px] cursor-none hover:text-[var(--gold)]"
          >
            Close <X className="w-[16px] h-[16px]" />
          </button>
          <div className="w-full max-w-[1000px] aspect-video rounded-sm overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-2xl">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

    </main>
  );
}
