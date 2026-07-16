'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Play, X, Check, Globe, Film, ArrowRight } from 'lucide-react';

export default function EventServices() {
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [activeTab, setActiveTab] = useState('ALL'); // ALL, FILMS, LIVESTREAMS

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
    { id: 'jlR54SuB_Rc', title: 'CII Space Expo 2022', category: 'FILMS', desc: 'Capturing corporate excellence and industrial summits.' },
    { id: 'Soc7p3YaTN0', title: 'Ansaan Capital Event', category: 'FILMS', desc: 'Premium financial leadership storytelling and branding.' },
    { id: 'df1A-_FulEs', title: 'Milestone Celebrations', category: 'FILMS', desc: 'Honoring achievements in modern motion.' },
    { id: 'doOSgmHHgD4', title: 'Academic Foundation Summit', category: 'FILMS', desc: 'Commemorating milestones of institutional growth.' },
    { id: '2Af51PlUGSg', title: 'Live Stream Broadcast 1', category: 'LIVESTREAMS', desc: 'Broadcast-grade multi-camera live stream.', isLive: true },
    { id: 'RoEbiML-xn0', title: 'Live Stream Broadcast 2', category: 'LIVESTREAMS', desc: 'Seamless, high-reliability live broadcast.', isLive: true }
  ];

  const photos = [
    '/images/our_portfolio/event/NMK_0002.jpg',
    '/images/our_portfolio/event/NMK_0018.jpg',
    '/images/our_portfolio/event/NMK_0047.JPG',
    '/images/our_portfolio/event/NMK_0130.JPG',
    '/images/our_portfolio/event/NMK_0209.JPG',
    '/images/our_portfolio/event/NMK_0315.JPG',
    '/images/our_portfolio/event/cp-12.jpg',
    '/images/our_portfolio/event/highlights_NMKL0031.jpg'
  ];

  const filteredVideos = activeTab === 'ALL' ? videos : videos.filter(v => v.category === activeTab);

  return (
    <main className="w-full bg-[var(--dark)] text-[var(--light)] pb-[100px] cursor-none relative overflow-x-hidden">
      
      {/* ─── HERO HEADER ─── */}
      <section className="relative min-h-[50vh] flex items-center px-[5%] md:px-[8%] bg-[#0A0A0A] pt-[120px] md:pt-[100px]">
        <div className="absolute inset-0 z-0">
          <img src="/images/our_portfolio/event/NMK_0047.JPG" alt="Event Header" className="w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
        </div>
        <div className="max-w-[1400px] w-full mx-auto z-20 relative">
          <div className="reveal">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block font-bold">
              Capabilities
            </span>
            <h1 className="font-serif text-[clamp(36px,5vw,72px)] font-light leading-[1.1] tracking-[-0.02em] text-white">
              Event Media <span className="italic text-[var(--gold)]">Services.</span>
            </h1>
            <p className="text-[14px] md:text-[15.5px] leading-[1.8] text-white/80 max-w-[620px] mt-[24px] font-light">
              Big stage. Bigger stakes. We show up prepared and we deliver before the buzz even settles.
            </p>
          </div>
        </div>
      </section>

      {/* ─── INTRO DETAILS ─── */}
      <section className="py-[100px] px-[5%] md:px-[8%] max-w-[1400px] mx-auto reveal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] lg:gap-[100px] items-center">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-[12px] block font-bold">Event Media Services</span>
            <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-light text-[var(--light)] mb-[24px] leading-tight">
              Precision Meets Passion <br />
              <span className="italic text-[var(--gold)]">At Any Scale.</span>
            </h2>
            <p className="text-[14.5px] leading-[1.85] text-[var(--muted)] font-light mb-[32px]">
              We don't just cover events, we command them. From international summits to national conferences, our crew is trained to move fast, think faster, and stay three steps ahead of the crowd. While others react, we've already planned for it. That's the edge that keeps our clients coming back, year after year, upgrade after upgrade.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[16px] gap-x-[32px] border-t border-[rgba(10,10,10,0.06)] pt-[24px]">
              {['Summit & Convention Media', 'On-Spot Teaser Film Edits', 'Live Broadcast Streaming', 'Multi-camera Setup Coverage'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-[10px]">
                  <span className="w-[14px] h-[14px] rounded-full bg-[rgba(212,175,55,0.1)] flex items-center justify-center text-[var(--gold)]">
                    <Check className="w-[9px] h-[9px]" />
                  </span>
                  <span className="text-[13px] text-[var(--light)] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[380px] md:h-[480px] w-full rounded-sm overflow-hidden border border-[rgba(10,10,10,0.06)] group shadow-md">
            <img src="/images/our_portfolio/event/NMK_0130.JPG" alt="Camera Operator" className="w-full h-full object-cover opacity-85 transition-transform duration-[1200ms] group-hover:scale-103" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
          </div>
        </div>
      </section>

      {/* ─── FILMS & LIVESTREAMING SUBSECTIONS ─── */}
      <section className="py-[80px] bg-[var(--darker)] border-y border-[rgba(10,10,10,0.06)]">
        <div className="max-w-[1400px] mx-auto px-[5%] md:px-[8%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-start">
            {/* Films Feature */}
            <div className="reveal">
              <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] font-bold mb-[12px] flex items-center gap-[8px]">
                <Film className="w-[12px] h-[12px]" /> EVENT FILMING
              </span>
              <h3 className="font-serif text-[26px] text-[var(--light)] mb-[16px] font-light">
                From "Lights, Camera" to "It's Live" — <span className="italic text-[var(--gold)]">in under 2 hours.</span>
              </h3>
              <p className="text-[14px] leading-[1.8] text-[var(--muted)] font-light">
                Your event deserves more than a highlight reel days later — it deserves buzz while it's still happening. Our on-spot editing team turns raw footage into a polished teaser or promo film in just two hours, without cutting corners. The secret? We script and design the graphics before the event even starts, so when the moment happens, we're ready to ship it.
              </p>
            </div>
            {/* Livestreaming Feature */}
            <div className="reveal">
              <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] font-bold mb-[12px] flex items-center gap-[8px]">
                <Globe className="w-[12px] h-[12px]" /> LIVESTREAMING
              </span>
              <h3 className="font-serif text-[26px] text-[var(--light)] mb-[16px] font-light">
                Zero buffering. Zero excuses. <span className="italic text-[var(--gold)]">Seamless broadcast.</span>
              </h3>
              <p className="text-[14px] leading-[1.8] text-[var(--muted)] font-light">
                Our livestreaming setup isn't off-the-shelf; it's engineered for reliability. We run a custom bonding router that fuses the internet speeds of seven dongles into one rock-solid connection. Pair that with our ATEM Blackmagic 4K production mixer and wireless transmitters, and you get broadcast-grade streaming that never drops the ball even when the Wi-Fi does.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VIDEO COLLECTION ─── */}
      <section className="py-[100px] px-[5%] md:px-[8%] max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-[24px] mb-[50px] reveal">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-[12px] block font-bold">Videos</span>
            <h2 className="font-serif text-[clamp(28px,3vw,40px)] font-light text-[var(--light)]">Cinematic Showcase</h2>
          </div>
          {/* Tab Filters */}
          <div className="flex gap-[20px] border-b border-[rgba(10,10,10,0.06)] pb-[8px]">
            {['ALL', 'FILMS', 'LIVESTREAMS'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[10px] tracking-[0.2em] uppercase pb-[8px] relative ${activeTab === tab ? 'text-[var(--gold)] font-bold' : 'text-[var(--muted)]'}`}
              >
                {tab}
                {activeTab === tab && <div className="absolute bottom-[-10px] left-0 w-full h-[1.5px] bg-[var(--gold)]" />}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] reveal">
          {filteredVideos.map((video) => (
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
                <span className="text-[9px] tracking-[0.2em] font-bold text-[var(--gold)] uppercase block mb-[6px]">{video.isLive ? 'Live Stream' : 'Highlight Film'}</span>
                <h3 className="font-serif text-[20px] text-white font-medium mb-[4px]">{video.title}</h3>
                <p className="text-[11.5px] text-white/60 font-light">{video.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PHOTOS GALLERY ─── */}
      <section className="py-[80px] bg-[var(--darker)] border-y border-[rgba(10,10,10,0.06)] px-[5%] md:px-[8%]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-[50px] text-center reveal">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-[12px] block font-bold">Gallery</span>
            <h2 className="font-serif text-[clamp(28px,3vw,40px)] font-light text-[var(--light)]">Captured Moments</h2>
            <div className="w-[60px] h-[1px] bg-[var(--gold)] mx-auto mt-[16px]"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] reveal">
            {photos.map((src, idx) => (
              <div key={idx} className="relative aspect-[3/2] rounded-sm overflow-hidden border border-[rgba(10,10,10,0.06)] group shadow-sm bg-[rgba(10,10,10,0.02)]">
                <img src={src} alt="Event Photo Grid" className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-103" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[16px]">
                  <span className="text-[8px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[4px] font-bold">Event Portfolio</span>
                  <h4 className="font-serif text-[14px] text-white">Milestone Shot</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-[120px] text-center px-[5%] reveal">
        <h2 className="font-serif text-[clamp(32px,4.5vw,52px)] font-light text-[var(--light)] mb-[40px]">
          Have a summit or conference coming up?
        </h2>
        <Link href="/contact" className="inline-flex items-center gap-[10px] bg-[var(--gold)] text-white text-[11px] tracking-[0.2em] uppercase font-bold py-[18px] px-[44px] hover:bg-[var(--light)] hover:text-[var(--dark)] transition-all duration-300 cursor-none rounded-full shadow-md">
          Book Our Event Crew <ArrowRight className="w-[14px] h-[14px]" />
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
