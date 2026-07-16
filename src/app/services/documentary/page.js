'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Play, X, ArrowRight } from 'lucide-react';

export default function DocumentaryServices() {
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

  const documentaries = [
    {
      id: 'Ygyh433FRjQ',
      title: 'KHPT: A Family-Focused Fight Against HIV',
      hook: "Healing isn't individual. In these families, it's collective.",
      desc: 'This documentary explores how a family-centered approach is transforming HIV care in India. By addressing stigma, closing data gaps, and empowering households with support, it highlights how supporting entire families creates lasting impact in prevention, treatment, and acceptance.'
    },
    {
      id: 'YduPlyKr-10',
      title: 'Bihar Women Empowerment: Nutrition & Independence',
      hook: 'Give a woman the tools, and watch an entire village rise.',
      desc: 'This documentary sheds light on the struggles of rural women in Bihar marked by poor health, malnutrition, and dependence, and showcases how collaborative initiatives in fortified food production are transforming their lives, creating a ripple of empowerment.'
    },
    {
      id: 'e5J2v1UtFW4',
      title: 'Toyota Hejjala: Reviving Rural Education',
      hook: 'One partnership. One school. A whole community reimagined.',
      desc: "Captures the transformation of GHBS Hejjala, a rural government school, through Toyota Kirloskar Motors' partnership with Sparsha Trust. Modern digital learning, infrastructure upgrades, and holistic education show public-private power."
    },
    {
      id: 'av9FhaYzDuA',
      title: 'Pai Book Distribution',
      hook: 'Behind this effort is a powerful story of hope, kindness, and education.',
      desc: 'An inspiring story of an initiative collecting and distributing notebooks to children in need. Helping children continue their studies gives them hope, confidence, and the motivation to dream bigger, reducing families expenses.'
    }
  ];

  const photos = [
    '/images/our_portfolio/documentary/DSC_0149.JPG',
    '/images/our_portfolio/documentary/DSC_0163.JPG',
    '/images/our_portfolio/documentary/DSC_0204 Big.JPG',
    '/images/our_portfolio/documentary/highlights_SKV00290.jpg',
    '/images/our_portfolio/documentary/highlights_SKV00387.jpg',
    '/images/our_portfolio/documentary/NMKL0128.JPG'
  ];

  return (
    <main className="w-full bg-[var(--dark)] text-[var(--light)] pb-[100px] cursor-none relative overflow-x-hidden">
      
      {/* ─── HERO HEADER ─── */}
      <section className="relative min-h-[50vh] flex items-center px-[5%] md:px-[8%] bg-[#0A0A0A] pt-[120px] md:pt-[100px]">
        <div className="absolute inset-0 z-0">
          <img src="/images/our_portfolio/te3.jpg" alt="Documentary Header" className="w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
        </div>
        <div className="max-w-[1400px] w-full mx-auto z-20 relative">
          <div className="reveal">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block font-bold">
              Capabilities
            </span>
            <h1 className="font-serif text-[clamp(36px,5vw,72px)] font-light leading-[1.1] tracking-[-0.02em] text-white">
              Documentaries.
            </h1>
            <p className="text-[14px] md:text-[15.5px] leading-[1.8] text-white/80 max-w-[620px] mt-[24px] font-light">
              Some stories don't need a script. They just need someone willing to listen — and show up.
            </p>
          </div>
        </div>
      </section>

      {/* ─── INTRO DETAILS ─── */}
      <section className="py-[100px] px-[5%] md:px-[8%] max-w-[1400px] mx-auto reveal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[100px] items-center">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-[12px] block font-bold">Documentaries</span>
            <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-light text-[var(--light)] mb-[24px] leading-tight">
              Passion. Emotion. <br />
              Inspiration. <span className="italic text-[var(--gold)]">Upliftment.</span>
            </h2>
            <p className="text-[14.5px] leading-[1.85] text-[var(--muted)] font-light mb-[32px]">
              We've traveled to the far corners of rural India — not to film stories, but to live inside them long enough to tell them right. Our collaboration with Toyota has taken us on an emotional journey through communities rarely seen on camera, capturing truths that don't fade after the credits roll.
            </p>
            <Link href="/portfolio" className="inline-flex items-center gap-[8px] border border-[rgba(10,10,10,0.15)] text-[var(--light)] text-[10px] tracking-[0.2em] uppercase py-[16px] px-[32px] hover:bg-[var(--light)] hover:text-[var(--dark)] transition-all duration-300 cursor-none font-medium">
              See the Portfolio in Action <ArrowRight className="w-[12px] h-[12px]" />
            </Link>
          </div>
          <div className="relative h-[380px] md:h-[480px] w-full rounded-sm overflow-hidden border border-[rgba(10,10,10,0.06)] group shadow-md bg-black">
            <img src="/images/our_portfolio/documentary/DSC_0163.JPG" alt="Documentary Crew" className="w-full h-full object-cover opacity-85 transition-transform duration-[1200ms] group-hover:scale-103" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
          </div>
        </div>
      </section>

      {/* ─── NARRATIVE DOCUMENTARIES LIST ─── */}
      <section className="py-[100px] bg-[var(--darker)] border-y border-[rgba(10,10,10,0.06)] px-[5%] md:px-[8%]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-[60px] reveal">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-[12px] block font-bold">Featured Works</span>
            <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-light text-[var(--light)]">Human Stories & CSR</h2>
          </div>

          <div className="flex flex-col gap-[60px]">
            {documentaries.map((doc, idx) => (
              <div 
                key={doc.id}
                className={`flex flex-col lg:flex-row gap-[40px] lg:gap-[60px] items-center reveal ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Video Card Player */}
                <div 
                  onClick={() => setActiveVideoId(doc.id)}
                  className="w-full lg:w-1/2 aspect-video rounded-[16px] overflow-hidden border border-[rgba(10,10,10,0.06)] bg-black shadow-md cursor-none relative group"
                >
                  <img 
                    src={`https://img.youtube.com/vi/${doc.id}/maxresdefault.jpg`}
                    alt={doc.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-102 transition-transform duration-[800ms]"
                    onError={(e) => { e.target.src = `https://img.youtube.com/vi/${doc.id}/hqdefault.jpg`; }}
                  />
                  <div className="absolute inset-0 bg-black/20 z-10" />
                  
                  {/* Play circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full border border-white/50 bg-black/40 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--gold)] group-hover:border-transparent z-20">
                    <Play className="w-[18px] h-[18px] fill-current ml-[2px]" />
                  </div>
                </div>

                {/* Details */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold)] font-bold mb-[8px]">FEATURED DOCUMENTARY</span>
                  <h3 className="font-serif text-[24px] text-[var(--light)] font-bold mb-[12px] leading-tight">{doc.title}</h3>
                  <div className="w-[40px] h-[1px] bg-[var(--gold)] mb-[16px]"></div>
                  <h4 className="font-sans text-[14px] text-[var(--gold)] italic font-semibold mb-[12px]">"{doc.hook}"</h4>
                  <p className="text-[14px] leading-[1.8] text-[var(--muted)] font-light">{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHOTOS GALLERY ─── */}
      <section className="py-[100px] px-[5%] md:px-[8%] max-w-[1400px] mx-auto">
        <div className="mb-[50px] text-center reveal">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-[12px] block font-bold">Gallery</span>
          <h2 className="font-serif text-[clamp(28px,3vw,40px)] font-light text-[var(--light)]">Documentary Frames</h2>
          <div className="w-[60px] h-[1px] bg-[var(--gold)] mx-auto mt-[16px]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] reveal">
          {photos.map((src, idx) => (
            <div key={idx} className="relative aspect-[3/2] rounded-sm overflow-hidden border border-[rgba(10,10,10,0.06)] group shadow-sm bg-[rgba(10,10,10,0.02)]">
              <img src={src} alt="Documentary Grid Frame" className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-103" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[16px]">
                <span className="text-[8px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[4px] font-bold">Documentary Portfolio</span>
                <h4 className="font-serif text-[14px] text-white">Truth in Frame</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-[120px] text-center px-[5%] reveal bg-[var(--darker)] border-t border-[rgba(10,10,10,0.06)]">
        <h2 className="font-serif text-[clamp(32px,4.5vw,52px)] font-light text-[var(--light)] mb-[40px]">
          Want to bring a community narrative to light?
        </h2>
        <Link href="/contact" className="inline-flex items-center gap-[10px] bg-[var(--gold)] text-white text-[11px] tracking-[0.2em] uppercase font-bold py-[18px] px-[44px] hover:bg-[var(--light)] hover:text-[var(--dark)] transition-all duration-300 cursor-none rounded-full shadow-md">
          Tell Your Story <ArrowRight className="w-[14px] h-[14px]" />
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
