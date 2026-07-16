'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { MapPin, ChevronRight, Check } from 'lucide-react';

export default function StudioServices() {
  useEffect(() => {
    const checkReveals = () => {
      const vh = window.innerHeight;
      document.querySelectorAll('.reveal, .img-mask').forEach(el => {
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
    <main 
      className="w-full min-h-screen pt-0 pb-0 cursor-none relative text-[var(--light)]"
      style={{
        backgroundImage: "url('/images/bg-Featured Work.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#FAF8F4'
      }}
    >
      
      {/* ─── HERO SECTION WITH BACKGROUND YOUTUBE VIDEO ─── */}
      <section className="relative min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh] flex items-end px-[5%] md:px-[8%] overflow-hidden bg-[#0A0A0A] pt-[160px] md:pt-[180px] lg:pt-[220px] pb-[60px] md:pb-[80px] lg:pb-[100px]">
        {/* Background Video Iframe Container */}
        <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none" style={{ pointerEvents: 'none' }}>
          <div className="absolute top-1/2 left-1/2 w-[177.77777778vh] min-w-full h-full min-h-[56.25vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-[1.15]" style={{ pointerEvents: 'none' }}>
            <iframe
              src="https://www.youtube.com/embed/0ownKeh2tC0?autoplay=1&mute=1&loop=1&playlist=0ownKeh2tC0&start=6&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&disablekb=1&iv_load_policy=3"
              className="w-full h-full border-0 pointer-events-none select-none"
              allow="autoplay; encrypted-media; picture-in-picture"
              tabIndex="-1"
              title="Background Video"
              style={{ pointerEvents: 'none' }}
            />
          </div>
          {/* Solid Touch Shield & Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/60 z-10 pointer-events-auto" style={{ pointerEvents: 'auto' }} />
        </div>

        {/* Foreground Content */}
        <div className="max-w-[1400px] w-full mx-auto z-20 relative">
          <div className="reveal">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block font-bold">
              Studio Services
            </span>
            <h1 className="font-serif text-[clamp(44px,6vw,80px)] font-light leading-[1.1] tracking-[-0.02em] text-white uppercase">
              Crafted for <br />
              <span className="italic text-[var(--gold)] font-medium">Every Need.</span>
            </h1>
            <p className="text-[14.5px] leading-[1.8] text-white/80 max-w-[620px] mt-[32px] font-medium">
              From passport photos to professional headshots, photo restoration to album design — our studio offers a comprehensive range of precision services, all delivered with the quality Glamour Photographics is known for across four decades of service in Bengaluru.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 1: PASSPORT & VISA PHOTOS (STACKED) ─── */}
      <section className="px-[5%] md:px-[8%] py-[80px] max-w-[1400px] mx-auto reveal mt-[40px]">
        <div className="text-center max-w-[900px] mx-auto mb-[40px]">
          <h2 className="font-serif text-[clamp(24px,3.5vw,36px)] text-[#0A0A0A] uppercase tracking-wide font-normal">
            Passport & Visa Photos for different countries
          </h2>
          <div className="w-[80px] h-[1px] bg-[var(--gold)] mx-auto relative my-[18px]">
            <div className="w-[4px] h-[4px] bg-[var(--gold)] rotate-45 absolute left-[38px] -top-[1.5px]"></div>
          </div>
          <h5 className="text-[14px] uppercase tracking-[0.1em] text-[var(--gold)] font-bold mb-[12px]">
            Accurate. Instant. Globally Accepted.
          </h5>
          <p className="text-[14px] md:text-[14.5px] leading-[1.8] text-[var(--muted)] font-light">
            Need a passport or visa photo that meets international standards? We deliver high-resolution, professionally lit photos that are compliant with all major embassy and government requirements. Walk in and walk out in minutes — digital and printed formats available, with a 100% acceptance guarantee.
          </p>
        </div>

        {/* Big Centered Graphic */}
        <div className="max-w-[1000px] mx-auto rounded-sm overflow-hidden border border-[rgba(10,10,10,0.06)] shadow-md bg-white/40 backdrop-blur-[1px] p-[16px] group">
          <img 
            src="/images/passport.jpg" 
            alt="Types of Passport and Visa Photos" 
            className="w-full h-auto object-contain transition-transform duration-[1200ms] group-hover:scale-[1.01]" 
          />
        </div>
      </section>

      {/* ─── SECTION 2: STUDIO HEAD SHOTS (SIDE-BY-SIDE) ─── */}
      <section className="px-[5%] md:px-[8%] py-[80px] max-w-[1400px] mx-auto reveal">
        <div className="flex flex-col lg:flex-row items-center gap-[60px] lg:gap-[100px]">
          
          {/* Content Column */}
          <div className="w-full lg:w-1/2">
            <h2 className="font-serif text-[clamp(24px,3.5vw,36px)] text-[#0A0A0A] uppercase tracking-wide font-normal">
              Studio Head Shots
            </h2>
            <div className="w-[80px] h-[1px] bg-[var(--gold)] relative my-[18px]">
              <div className="w-[4px] h-[4px] bg-[var(--gold)] rotate-45 absolute left-[38px] -top-[1.5px]"></div>
            </div>
            <h5 className="text-[14px] uppercase tracking-[0.1em] text-[var(--gold)] font-bold mb-[16px]">
              First impressions matter — let’s make yours unforgettable.
            </h5>
            <p className="text-[14px] md:text-[14.5px] leading-[1.8] text-[var(--muted)] font-light mb-[28px]">
              Whether it’s for LinkedIn, corporate websites, resumes, or press kits, our studio headshots are crafted to highlight your best, most confident self. With flattering lighting, clean backdrops, and expert guidance, we create portraits that elevate your personal or professional brand. Available for individuals and corporate team shoots.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[30px] gap-y-[16px] border-t border-[rgba(10,10,10,0.06)] pt-[24px]">
              {[
                'Flattering studio lighting',
                'Multiple backdrop options',
                'Expert posing guidance',
                'Available for corporate team shoots'
              ].map((highlight, hIdx) => (
                <div key={hIdx} className="flex items-center gap-[10px]">
                  <span className="flex-none w-[14px] h-[14px] rounded-full bg-[rgba(212,175,55,0.1)] flex items-center justify-center text-[var(--gold)]">
                    <Check className="w-[9px] h-[9px]" />
                  </span>
                  <span className="text-[13px] text-[var(--light)] font-medium">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="w-full lg:w-1/2 rounded-sm overflow-hidden border border-[rgba(10,10,10,0.06)] shadow-md bg-white/40 backdrop-blur-[1px] p-[12px] group">
            <img 
              src="/images/studio-shoot.jpg" 
              alt="Studio Headshots Portfolio" 
              className="w-full h-auto object-cover transition-transform duration-[1200ms] group-hover:scale-102" 
            />
          </div>

        </div>
      </section>

      {/* ─── SECTION 3: PHOTO RESTORATION (SIDE-BY-SIDE ALTERNATING) ─── */}
      <section className="px-[5%] md:px-[8%] py-[80px] max-w-[1400px] mx-auto reveal">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-[60px] lg:gap-[100px]">
          
          {/* Content Column */}
          <div className="w-full lg:w-1/2">
            <h2 className="font-serif text-[clamp(24px,3.5vw,36px)] text-[#0A0A0A] uppercase tracking-wide font-normal">
              Photorestoration
            </h2>
            <div className="w-[80px] h-[1px] bg-[var(--gold)] relative my-[18px]">
              <div className="w-[4px] h-[4px] bg-[var(--gold)] rotate-45 absolute left-[38px] -top-[1.5px]"></div>
            </div>
            <h5 className="text-[14px] uppercase tracking-[0.1em] text-[var(--gold)] font-bold mb-[16px]">
              Give your old memories a new life.
            </h5>
            <p className="text-[14px] md:text-[14.5px] leading-[1.8] text-[var(--muted)] font-light mb-[28px]">
              We expertly restore damaged, faded, or torn photographs as well as video cassettes restoration and DVD conversion with editing — fixing creases, removing stains, and enhancing clarity. Whether it’s a cherished family portrait or a vintage memory, we bring back the original charm with modern digital techniques. Get your restored images and videos in digital format or reprinted on high-quality photo paper.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[30px] gap-y-[16px] border-t border-[rgba(10,10,10,0.06)] pt-[24px]">
              {[
                'Damaged photo restoration',
                'Video cassette digitisation',
                'DVD conversion & editing',
                'High-quality reprinting available'
              ].map((highlight, hIdx) => (
                <div key={hIdx} className="flex items-center gap-[10px]">
                  <span className="flex-none w-[14px] h-[14px] rounded-full bg-[rgba(212,175,55,0.1)] flex items-center justify-center text-[var(--gold)]">
                    <Check className="w-[9px] h-[9px]" />
                  </span>
                  <span className="text-[13px] text-[var(--light)] font-medium">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column (Stacked Restoration Examples) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-[24px]">
            <div className="rounded-sm overflow-hidden border border-[rgba(10,10,10,0.06)] shadow-md bg-white/40 backdrop-blur-[1px] p-[12px] group">
              <img 
                src="/images/Damaged-Photo-Restoration-and-smudge-painting-in-photoshop-1.jpg" 
                alt="Photo Restoration Example 1" 
                className="w-full h-auto object-cover transition-transform duration-[1200ms] group-hover:scale-102" 
              />
            </div>
            <div className="rounded-sm overflow-hidden border border-[rgba(10,10,10,0.06)] shadow-md bg-white/40 backdrop-blur-[1px] p-[12px] group">
              <img 
                src="/images/Damaged-Photo-Restoration-and-smudge-painting-in-photoshop.jpg" 
                alt="Photo Restoration Example 2" 
                className="w-full h-auto object-cover transition-transform duration-[1200ms] group-hover:scale-102" 
              />
            </div>
          </div>

        </div>
      </section>

      {/* ─── SECTION 4: ALBUM DESIGN (STACKED) ─── */}
      <section className="px-[5%] md:px-[8%] py-[80px] max-w-[1400px] mx-auto text-center reveal">
        <div className="max-w-[900px] mx-auto mb-[40px]">
          <h2 className="font-serif text-[clamp(24px,3.5vw,36px)] text-[#0A0A0A] uppercase tracking-wide font-normal">
            album design
          </h2>
          <div className="w-[80px] h-[1px] bg-[var(--gold)] mx-auto relative my-[18px]">
            <div className="w-[4px] h-[4px] bg-[var(--gold)] rotate-45 absolute left-[38px] -top-[1.5px]"></div>
          </div>
          <p className="text-[14px] md:text-[14.5px] leading-[1.8] text-[var(--muted)] font-light max-w-[700px] mx-auto">
            We design and produce premium photo albums that serve as lasting keepsakes of your most important moments. Every layout is carefully crafted to complement your photos, tell a cohesive story, and reflect your personal aesthetic — printed on archival-quality materials.
          </p>
        </div>

        {/* Centered Image */}
        <div className="max-w-[1000px] mx-auto rounded-sm overflow-hidden border border-[rgba(10,10,10,0.06)] shadow-md bg-white/40 backdrop-blur-[1px] p-[16px] mb-[40px] group">
          <img 
            src="/images/album-services.jpg" 
            alt="Custom Premium Album Design Spread" 
            className="w-full h-auto object-contain transition-transform duration-[1200ms] group-hover:scale-[1.01]" 
          />
        </div>

        {/* Large Premium Call-To-Action Button */}
        <div>
          <Link 
            href="/portfolio" 
            className="inline-flex items-center justify-center gap-[10px] bg-[var(--gold)] text-white text-[11px] tracking-[0.2em] uppercase font-bold py-[18px] px-[44px] hover:bg-[var(--light)] hover:text-[var(--dark)] transition-all duration-300 cursor-none rounded-full shadow-md"
          >
            click here for our album services
          </Link>
        </div>
      </section>

      {/* ─── LOCATION & CALL TO ACTION (GLASSY FOOTER SECTION) ─── */}
      <section className="py-[120px] px-[5%] md:px-[8%] border-t border-[rgba(10,10,10,0.06)] text-center relative overflow-hidden bg-[rgba(250,248,244,0.75)] backdrop-blur-[2px]">
        <div className="max-w-[700px] mx-auto reveal relative z-10 mb-[60px]">
          <span className="flex items-center justify-center gap-[8px] text-[10px] tracking-[0.3em] uppercase text-[var(--gold)] mb-[24px] font-bold">
            <MapPin className="w-[14px] h-[14px] text-[var(--gold)]" /> Ashok Nagar, Bengaluru
          </span>
          <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-light text-[var(--light)] leading-[1.15] mb-[32px]">
            Visit our studio in <br />
            <span className="italic text-[var(--gold)]">Ashok Nagar, Bengaluru.</span>
          </h2>
          <p className="text-[14px] md:text-[15px] leading-[1.8] text-[var(--muted)] mb-[48px] font-medium max-w-[500px] mx-auto">
            Experience four decades of visual storytelling and photography expertise in person. Walk-ins are always welcome for passport photos.
          </p>
          <a 
            href="https://maps.google.com/?q=Glamour+Photographics+Ashok+Nagar+Bengaluru" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[10px] border border-[rgba(10,10,10,0.2)] text-[var(--light)] uppercase tracking-[0.2em] text-[11px] font-bold px-[40px] py-[20px] transition-all duration-400 hover:bg-[var(--light)] hover:text-[var(--dark)] hover:border-transparent cursor-none rounded-sm"
          >
            Find Us <ChevronRight className="w-[12px] h-[12px]" />
          </a>
        </div>

        {/* Google Map Embed */}
        <div className="max-w-[1000px] mx-auto reveal h-[350px] md:h-[450px] border border-[rgba(10,10,10,0.08)] rounded-sm overflow-hidden shadow-md relative z-10">
          <iframe
            title="Glamour Photographics Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0253457199147!2d77.6044363!3d12.9680995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167ff3708a43%3A0xe5b95fbe84a5ef0b!2sGlamour%20Photographics!5e0!3m2!1sen!2sin!4v1783568868000"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

    </main>
  );
}
