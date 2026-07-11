'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-[100px] pb-[40px] px-[60px] border-t border-[rgba(255,255,255,0.08)]">
      <div className="flex flex-col md:flex-row justify-between gap-[60px] md:gap-[20px] mb-[80px]">
        <div className="max-w-[300px]">
          <img
            src="/images/Glamour_Logo.png"
            alt="Glamour Photographics Logo"
            className="h-[55px] md:h-[65px] w-auto object-contain mb-[20px]"
          />
          <p className="text-[13px] text-[rgba(255,255,255,0.6)] leading-relaxed">
            Four decades of visual storytelling from the heart of Bengaluru.
          </p>
        </div>

        <div className="flex flex-col gap-[16px]">
          <h4 className="font-serif text-[18px] text-[var(--gold)] mb-[8px]">Pages</h4>
          <ul className="flex flex-col gap-[12px] list-none">
            <li><Link href="/" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(255,255,255,0.75)] hover:text-[var(--gold)] transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(255,255,255,0.75)] hover:text-[var(--gold)] transition-colors">About</Link></li>
            <li><Link href="/services" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(255,255,255,0.75)] hover:text-[var(--gold)] transition-colors">Studio Services</Link></li>
            <li><Link href="/corporate" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(255,255,255,0.75)] hover:text-[var(--gold)] transition-colors">Corporate</Link></li>
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

        <span className="text-[11px] text-[rgba(255,255,255,0.45)] tracking-[0.05em]">
          Designed & Developed by{" "}
          <a
            href="https://arshadpasha.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C89B4B] font-medium hover:text-[#D8B26A] transition-colors duration-300"
          >
            Arshad Pasha
          </a>
        </span>
      </div>

    </footer>
  );
}
