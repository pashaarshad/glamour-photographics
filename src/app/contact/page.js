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
          <div className="stagger-children flex flex-col gap-[40px]">
            {/* Headquarters */}
            <div className="flex gap-[18px] items-start">
              <span className="p-[12px] rounded-full bg-[rgba(212,175,55,0.08)] text-[var(--gold)] shrink-0">
                <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </span>
              <div>
                <h3 className="font-serif text-[24px] text-[var(--black)] mb-[8px]">Studio Headquarters</h3>
                <p className="text-[14px] leading-[1.8] text-[var(--muted)]">
                  No. 33, Castle Street,<br />
                  Ashok Nagar, Near Shoolay Circle,<br />
                  Bengaluru, Karnataka 560025<br />
                  India
                </p>
              </div>
            </div>
            
            {/* Contact Us */}
            <div className="flex gap-[18px] items-start">
              <span className="p-[12px] rounded-full bg-[rgba(212,175,55,0.08)] text-[var(--gold)] shrink-0">
                <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </span>
              <div>
                <h3 className="font-serif text-[24px] text-[var(--black)] mb-[16px]">Contact Us</h3>
                <div className="flex flex-col gap-[16px]">
                  <div className="flex items-center gap-[12px] group">
                    <span className="p-[8px] rounded-full bg-[rgba(212,175,55,0.06)] text-[var(--gold)] group-hover:scale-110 transition-transform">
                      <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </span>
                    <a href="mailto:info@glamourphotographics.com" className="text-[14px] text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
                      info@glamourphotographics.com
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-[12px] group">
                    <span className="p-[8px] rounded-full bg-[rgba(10,102,194,0.06)] text-[#0A66C2] group-hover:scale-110 transition-transform">
                      <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.56 11.56 0 0 1 8.56 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1C3 13.39 10.61 21 20 21c.55 0 1-.45 1-1v-3.62c0-.55-.45-1-1-1z" />
                      </svg>
                    </span>
                    <a href="tel:+919845003786" className="text-[14px] text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
                      +91 98450 03786
                    </a>
                  </div>

                  <div className="flex items-center gap-[12px] group">
                    <span className="p-[8px] rounded-full bg-[rgba(37,211,102,0.06)] text-[#25D366] group-hover:scale-110 transition-transform">
                      <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.004 2C6.48 2 2.001 6.479 2.001 12c0 1.892.527 3.661 1.446 5.178L2 22l4.97-1.393A9.927 9.927 0 0 0 12.004 22c5.522 0 10.002-4.477 10.002-10S17.526 2 12.004 2zm0 18.002c-1.666 0-3.23-.443-4.595-1.217l-.328-.188-3.05.855.87-2.977-.208-.33a7.95 7.95 0 0 1-1.218-4.148c0-4.412 3.59-8.002 8.001-8.002 4.414 0 8.004 3.59 8.004 8.002-.001 4.413-3.591 8.003-8.004 8.003z"/>
                      </svg>
                    </span>
                    <a href="https://wa.me/918971168868" target="_blank" rel="noopener noreferrer" className="text-[14px] text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
                      +91 89711 68868 (WhatsApp)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="flex gap-[18px] items-start">
              <span className="p-[12px] rounded-full bg-[rgba(212,175,55,0.08)] text-[var(--gold)] shrink-0">
                <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </span>
              <div>
                <h3 className="font-serif text-[24px] text-[var(--black)] mb-[16px]">Follow Us</h3>
                <div className="flex gap-[18px] items-center">
                  {[
                    {
                      name: 'Facebook',
                      url: 'https://www.facebook.com/p/Glamour-Photographics-100064007321571/',
                      color: '#1877F2',
                      svg: (
                        <svg className="w-[22px] h-[22px]" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                          <path fill="currentColor" d='M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z' />
                        </svg>
                      )
                    },
                    {
                      name: 'Instagram',
                      url: 'https://www.instagram.com/glamourphotographics.corporate?igsh=MTIzdjAzMW5tYW44cw',
                      color: '#E4405F',
                      svg: (
                        <svg className="w-[22px] h-[22px]" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                          <path fill="currentColor" d='M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z' />
                        </svg>
                      )
                    },
                    {
                      name: 'LinkedIn',
                      url: 'https://in.linkedin.com/company/glamour-photographics%20',
                      color: '#0A66C2',
                      svg: (
                        <svg className="w-[22px] h-[22px]" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                          <path fill="currentColor" d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
                        </svg>
                      )
                    },
                    {
                      name: 'YouTube',
                      url: 'https://www.youtube.com/@ashrafhussain136',
                      color: '#FF0000',
                      svg: (
                        <svg className="w-[22px] h-[22px]" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
                          <path fill="currentColor" d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z' />
                        </svg>
                      )
                    }
                  ].map((social) => (
                    <a 
                      key={social.name} 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: social.color }}
                      className="opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                    >
                      {social.svg}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal">
            <div className="bg-[rgba(10,10,10,0.02)] border border-[rgba(10,10,10,0.05)] rounded-lg p-[40px] md:p-[50px] shadow-sm">
              <h3 className="font-serif text-[28px] text-[var(--black)] mb-[30px] font-light">Send us a message</h3>
              
              <form className="flex flex-col gap-[24px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                  <div className="flex flex-col gap-[8px]">
                    <label className="text-[10px] tracking-[0.25em] uppercase text-[var(--black)] font-semibold">Name *</label>
                    <input 
                      suppressHydrationWarning
                      type="text" 
                      className="bg-white border border-[rgba(10,10,10,0.08)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] rounded-md outline-none px-[16px] py-[12px] text-[14px] text-[var(--black)] transition-all duration-300 font-light" 
                      required 
                    />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label className="text-[10px] tracking-[0.25em] uppercase text-[var(--black)] font-semibold">Company</label>
                    <input 
                      suppressHydrationWarning
                      type="text" 
                      className="bg-white border border-[rgba(10,10,10,0.08)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] rounded-md outline-none px-[16px] py-[12px] text-[14px] text-[var(--black)] transition-all duration-300 font-light" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                  <div className="flex flex-col gap-[8px]">
                    <label className="text-[10px] tracking-[0.25em] uppercase text-[var(--black)] font-semibold">Email *</label>
                    <input 
                      suppressHydrationWarning
                      type="email" 
                      className="bg-white border border-[rgba(10,10,10,0.08)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] rounded-md outline-none px-[16px] py-[12px] text-[14px] text-[var(--black)] transition-all duration-300 font-light" 
                      required 
                    />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label className="text-[10px] tracking-[0.25em] uppercase text-[var(--black)] font-semibold">Phone</label>
                    <input 
                      suppressHydrationWarning
                      type="tel" 
                      className="bg-white border border-[rgba(10,10,10,0.08)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] rounded-md outline-none px-[16px] py-[12px] text-[14px] text-[var(--black)] transition-all duration-300 font-light" 
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-[8px]">
                  <label className="text-[10px] tracking-[0.25em] uppercase text-[var(--black)] font-semibold">Project Details *</label>
                  <textarea 
                    suppressHydrationWarning
                    rows="4" 
                    className="bg-white border border-[rgba(10,10,10,0.08)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] rounded-md outline-none px-[16px] py-[12px] text-[14px] text-[var(--black)] transition-all duration-300 resize-none font-light" 
                    required
                  ></textarea>
                </div>

                <div className="mt-[10px]">
                  <button 
                    suppressHydrationWarning
                    type="submit" 
                    className="w-full md:w-auto text-center justify-center border-2 border-[var(--gold)] bg-transparent text-[var(--black)] hover:bg-[var(--gold)] hover:text-white transition-all duration-300 px-[40px] py-[14px] rounded-full uppercase tracking-[0.25em] text-[11px] font-semibold cursor-pointer shadow-sm hover:shadow-md"
                  >
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
