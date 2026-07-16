'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Play, X, ArrowRight } from 'lucide-react';

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
    { id: 'doOSgmHHgD4', title: 'Campus Showcase Film 1', desc: 'Promoting school academic values and campus life.' },
    { id: 'df1A-_FulEs', title: 'Campus Showcase Film 2', desc: 'Capturing state-of-the-art laboratory and sports facilities.' },
    { id: 'XulH5TjS50k', title: 'Campus Showcase Film 3', desc: 'Walking through classrooms and learning environments.' },
    { id: 'cImmLgZo9-Y', title: 'Campus Showcase Film 4', desc: 'Conforming student perspectives and teacher collaborations.' }
  ];

  return (
    <main className="w-full bg-[var(--dark)] text-[var(--light)] pb-[100px] cursor-none relative overflow-x-hidden">
      
      {/* ─── HERO HEADER ─── */}
      <section className="relative min-h-[50vh] flex items-center px-[5%] md:px-[8%] bg-[#0A0A0A] pt-[120px] md:pt-[100px]">
        <div className="absolute inset-0 z-0">
          <img src="/images/our_portfolio/highlights_SKV00387.jpg" alt="Educational Header" className="w-full h-full object-cover opacity-35" />
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
          <div className="relative h-[380px] md:h-[480px] w-full rounded-sm overflow-hidden border border-[rgba(10,10,10,0.06)] group shadow-md bg-black">
            <img src="/images/our_portfolio/highlights_SKV00387.jpg" alt="Student Active Learning" className="w-full h-full object-cover opacity-85 transition-transform duration-[1200ms] group-hover:scale-103" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
          </div>
        </div>
      </section>

      {/* ─── VIDEO GRID ─── */}
      <section className="py-[100px] px-[5%] md:px-[8%] max-w-[1400px] mx-auto border-t border-[rgba(10,10,10,0.06)]">
        <div className="mb-[50px] reveal">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-[12px] block font-bold">Videos</span>
          <h2 className="font-serif text-[clamp(28px,3vw,40px)] font-light text-[var(--light)]">Campus Showreels & Features</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] reveal">
          {videos.map((video) => (
            <div 
              key={video.id}
              onClick={() => setActiveVideoId(video.id)}
              className="group relative aspect-video rounded-[16px] overflow-hidden border border-[rgba(10,10,10,0.05)] shadow-md bg-black cursor-none transition-all duration-500 hover:shadow-xl"
            >
              <img 
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-102 transition-transform duration-[800ms]"
                onError={(e) => { e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-10" />
              
              {/* Play Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[54px] h-[54px] rounded-full border border-white/50 bg-black/35 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--gold)] group-hover:border-transparent z-20">
                <Play className="w-[16px] h-[16px] fill-current ml-[2px]" />
              </div>

              {/* Title & Tag */}
              <div className="absolute bottom-[24px] left-[24px] right-[24px] z-20 pointer-events-none">
                <span className="text-[9px] tracking-[0.2em] font-bold text-[var(--gold)] uppercase block mb-[6px]">Educational Film</span>
                <h3 className="font-serif text-[20px] text-white font-medium mb-[4px]">{video.title}</h3>
                <p className="text-[11.5px] text-white/60 font-light">{video.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-[120px] text-center px-[5%] reveal bg-[var(--darker)] border-t border-[rgba(10,10,10,0.06)]">
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
