'use client';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/p/Glamour-Photographics-100064007321571/',
    color: '#1877F2',
    svg: (
      <svg className="w-[28px] h-[28px]" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
        <path fill="currentColor" d='M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z' />
      </svg>
    )
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/glamourphotographics.corporate?igsh=MTIzdjAzMW5tYW44cw',
    color: '#E4405F',
    svg: (
      <svg className="w-[28px] h-[28px]" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
        <path fill="currentColor" d='M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z' />
      </svg>
    )
  },
  {
    name: 'Linkedin',
    url: 'https://in.linkedin.com/company/glamour-photographics%20',
    color: '#0A66C2',
    svg: (
      <svg className="w-[28px] h-[28px]" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
        <path fill="currentColor" d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5-38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
      </svg>
    )
  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/@ashrafhussain136',
    color: '#FF0000',
    svg: (
      <svg className="w-[28px] h-[28px]" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
        <path fill="currentColor" d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z' />
      </svg>
    )
  }
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-[100px] pb-[40px] px-[60px] border-t border-[rgba(255,255,255,0.08)]">
      <div className="flex flex-col md:flex-row justify-between gap-[60px] md:gap-[20px] mb-[80px]">
        <div className="max-w-[300px] flex flex-col gap-[28px]">
          <div>
            <img
              src="/images/Glamour_Logo.png"
              alt="Glamour Photographics Logo"
              className="h-[80px] md:h-[100px] w-auto object-contain mb-[20px]"
            />
            <p className="text-[13px] text-[rgba(255,255,255,0.6)] leading-relaxed">
              Four decades of visual storytelling from the heart of Bengaluru.
            </p>
          </div>
          
          <div className="flex flex-col gap-[14px]">
            <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--gold)] font-medium">Follow Us</span>
            <div className="flex gap-[20px] items-center">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.name}
                  style={{ color: social.color }}
                  className="opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <h4 className="font-serif text-[18px] text-[var(--gold)] mb-[8px]">Pages</h4>
          <ul className="flex flex-col gap-[12px] list-none">
            <li><Link href="/" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(255,255,255,0.75)] hover:text-[var(--gold)] transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(255,255,255,0.75)] hover:text-[var(--gold)] transition-colors">About Us</Link></li>
            <li><Link href="/studio-services" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(255,255,255,0.75)] hover:text-[var(--gold)] transition-colors">Studio Services</Link></li>
            <li><Link href="/portfolio" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(255,255,255,0.75)] hover:text-[var(--gold)] transition-colors">Portfolio</Link></li>
            <li><Link href="/clients" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(255,255,255,0.75)] hover:text-[var(--gold)] transition-colors">Clients</Link></li>
            <li><Link href="/contact" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(255,255,255,0.75)] hover:text-[var(--gold)] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-[16px]">
          <h4 className="font-serif text-[18px] text-[var(--gold)] mb-[8px]">Services</h4>
          <ul className="flex flex-col gap-[12px] list-none">
            <li><Link href="#" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(255,255,255,0.75)] hover:text-[var(--gold)] transition-colors">Passport Photos</Link></li>
            <li><Link href="#" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(255,255,255,0.75)] hover:text-[var(--gold)] transition-colors">Studio Headshots</Link></li>
            <li><Link href="#" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(255,255,255,0.75)] hover:text-[var(--gold)] transition-colors">Photo Restoration</Link></li>
            <li><Link href="#" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(255,255,255,0.75)] hover:text-[var(--gold)] transition-colors">Album Design</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-[16px]">
          <h4 className="font-serif text-[18px] text-[var(--gold)] mb-[8px]">Contact</h4>
          <ul className="flex flex-col gap-[12px] list-none">
            <li><a href="tel:+919845003786" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(255,255,255,0.75)] hover:text-[var(--gold)] transition-colors">+91 984 5003 786</a></li>
            <li><a href="mailto:info@glamourphotographics.com" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(255,255,255,0.75)] hover:text-[var(--gold)] transition-colors">Email Us</a></li>
            <li><a href="https://wa.me/918971168868" target="_blank" rel="noopener" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(255,255,255,0.75)] hover:text-[var(--gold)] transition-colors">WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[rgba(255,255,255,0.08)] pt-[24px] text-center">
        <span className="text-[11px] text-[rgba(255,255,255,0.45)] tracking-[0.05em]">© 2026 Glamour Photographics. All Rights Reserved.</span>


      </div>

    </footer>
  );
}
