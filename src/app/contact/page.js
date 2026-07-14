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
                No. 33, Castle Street,<br />
                Ashok Nagar, Near Shoolay Circle,<br />
                Bengaluru, Karnataka 560025<br />
                India
              </p>
            </div>
            
            <div className="mb-[60px]">
              <h3 className="font-serif text-[24px] text-[var(--black)] mb-[16px]">Contact Us</h3>
              <div className="flex flex-col gap-[8px]">
                <a href="mailto:info@glamourphotographics.com" className="text-[14px] text-[var(--muted)] hover:text-[var(--gold)] transition-colors inline-block w-fit">
                  info@glamourphotographics.com
                </a>
                <a href="tel:+919845003786" className="text-[14px] text-[var(--muted)] hover:text-[var(--gold)] transition-colors inline-block w-fit">
                  +91 98450 03786
                </a>
                <a href="https://wa.me/918971168868" target="_blank" rel="noopener noreferrer" className="text-[14px] text-[var(--muted)] hover:text-[var(--gold)] transition-colors inline-block w-fit">
                  +91 89711 68868 (WhatsApp)
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-[24px] text-[var(--black)] mb-[16px]">Follow Us</h3>
              <div className="flex gap-[24px]">
                {[
                  { label: 'Facebook', url: 'https://www.facebook.com/p/Glamour-Photographics-100064007321571/' },
                  { label: 'Instagram', url: 'https://www.instagram.com/glamourphotographics.corporate?igsh=MTIzdjAzMW5tYW44cw' },
                  { label: 'LinkedIn', url: 'https://in.linkedin.com/company/glamour-photographics%20' },
                  { label: 'YouTube', url: 'https://www.youtube.com/@ashrafhussain136' }
                ].map((social, idx) => (
                  <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors pb-[4px] border-b border-transparent hover:border-[var(--gold)]">
                    {social.label}
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

        {/* Google Map Section */}
        <div className="reveal mt-[100px] w-full h-[450px] border border-[rgba(10,10,10,0.08)] rounded-sm overflow-hidden shadow-md">
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
