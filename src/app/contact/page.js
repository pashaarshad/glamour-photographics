'use client';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    const checkReveals = () => {
      const vh = window.innerHeight;
      document.querySelectorAll('.reveal, .stagger-children').forEach(el => {
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
      <section className="px-[60px] max-w-[1400px] mx-auto">
        <div className="reveal mb-[80px]">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">
            Let's Talk
          </span>
          <h1 className="font-serif text-[clamp(48px,6vw,84px)] font-light leading-[1] tracking-[-0.02em] text-[var(--black)]">
            Start Your <span className="italic text-[var(--gold)]">Project.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-[100px]">
          {/* Contact Info */}
          <div className="stagger-children">
            <div className="mb-[60px]">
              <h3 className="font-serif text-[24px] text-[var(--black)] mb-[16px]">Studio Headquarters</h3>
              <p className="text-[14px] leading-[1.8] text-[var(--muted)]">
                #45, Visual Arts Avenue<br />
                Indiranagar, 100 Feet Road<br />
                Bengaluru, Karnataka 560038<br />
                India
              </p>
            </div>
            
            <div className="mb-[60px]">
              <h3 className="font-serif text-[24px] text-[var(--black)] mb-[16px]">Contact Us</h3>
              <div className="flex flex-col gap-[8px]">
                <a href="mailto:hello@glamourphotographics.com" className="text-[14px] text-[var(--muted)] hover:text-[var(--gold)] transition-colors inline-block w-fit">
                  hello@glamourphotographics.com
                </a>
                <a href="tel:+919876543210" className="text-[14px] text-[var(--muted)] hover:text-[var(--gold)] transition-colors inline-block w-fit">
                  +91 98765 43210
                </a>
                <a href="tel:+918012345678" className="text-[14px] text-[var(--muted)] hover:text-[var(--gold)] transition-colors inline-block w-fit">
                  080 1234 5678
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-[24px] text-[var(--black)] mb-[16px]">Follow Us</h3>
              <div className="flex gap-[24px]">
                {['Instagram', 'LinkedIn', 'Vimeo'].map((social, idx) => (
                  <a key={idx} href="#" className="text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors pb-[4px] border-b border-transparent hover:border-[var(--gold)]">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal">
            <div className="bg-[rgba(10,10,10,0.03)] border border-[rgba(10,10,10,0.05)] p-[40px] md:p-[60px]">
              <h3 className="font-serif text-[28px] text-[var(--black)] mb-[40px]">Send us a message</h3>
              
              <form className="flex flex-col gap-[30px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                  <div className="flex flex-col gap-[8px]">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[var(--black)]">Name *</label>
                    <input type="text" className="bg-transparent border-b border-[rgba(10,10,10,0.2)] focus:border-[var(--gold)] outline-none py-[12px] text-[14px] text-[var(--black)] transition-colors" required />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[var(--black)]">Company</label>
                    <input type="text" className="bg-transparent border-b border-[rgba(10,10,10,0.2)] focus:border-[var(--gold)] outline-none py-[12px] text-[14px] text-[var(--black)] transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                  <div className="flex flex-col gap-[8px]">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[var(--black)]">Email *</label>
                    <input type="email" className="bg-transparent border-b border-[rgba(10,10,10,0.2)] focus:border-[var(--gold)] outline-none py-[12px] text-[14px] text-[var(--black)] transition-colors" required />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label className="text-[10px] tracking-[0.2em] uppercase text-[var(--black)]">Phone</label>
                    <input type="tel" className="bg-transparent border-b border-[rgba(10,10,10,0.2)] focus:border-[var(--gold)] outline-none py-[12px] text-[14px] text-[var(--black)] transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col gap-[8px] mt-[10px]">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-[var(--black)]">Project Details *</label>
                  <textarea rows="4" className="bg-transparent border-b border-[rgba(10,10,10,0.2)] focus:border-[var(--gold)] outline-none py-[12px] text-[14px] text-[var(--black)] transition-colors resize-none" required></textarea>
                </div>

                <div className="mt-[20px]">
                  <button type="submit" className="btn-dark w-full md:w-auto text-center justify-center cursor-none">
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
