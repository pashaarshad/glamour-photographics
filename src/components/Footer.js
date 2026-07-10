'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--darker)] text-[var(--light)] pt-[100px] pb-[40px] px-[60px] border-t border-[rgba(10,10,10,0.06)]">
      <div className="flex flex-col md:flex-row justify-between gap-[60px] md:gap-[20px] mb-[80px]">
        <div className="max-w-[300px]">
          <h3 className="font-serif text-[24px] mb-[16px]">Glamour<span className="text-[var(--gold)]">.</span>Photographics</h3>
          <p className="text-[13px] text-[rgba(10,10,10,0.6)] leading-relaxed">
            Four decades of visual storytelling from the heart of Bengaluru.
          </p>
        </div>
        
        <div className="flex flex-col gap-[16px]">
          <h4 className="font-serif text-[18px] text-[var(--gold)] mb-[8px]">Pages</h4>
          <ul className="flex flex-col gap-[12px] list-none">
            <li><Link href="/" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(10,10,10,0.8)] hover:text-[var(--gold)] transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(10,10,10,0.8)] hover:text-[var(--gold)] transition-colors">About</Link></li>
            <li><Link href="/services" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(10,10,10,0.8)] hover:text-[var(--gold)] transition-colors">Studio Services</Link></li>
            <li><Link href="/corporate" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(10,10,10,0.8)] hover:text-[var(--gold)] transition-colors">Corporate</Link></li>
            <li><Link href="/contact" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(10,10,10,0.8)] hover:text-[var(--gold)] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-[16px]">
          <h4 className="font-serif text-[18px] text-[var(--gold)] mb-[8px]">Services</h4>
          <ul className="flex flex-col gap-[12px] list-none">
            <li><Link href="#" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(10,10,10,0.8)] hover:text-[var(--gold)] transition-colors">Passport Photos</Link></li>
            <li><Link href="#" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(10,10,10,0.8)] hover:text-[var(--gold)] transition-colors">Studio Headshots</Link></li>
            <li><Link href="#" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(10,10,10,0.8)] hover:text-[var(--gold)] transition-colors">Photo Restoration</Link></li>
            <li><Link href="#" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(10,10,10,0.8)] hover:text-[var(--gold)] transition-colors">Album Design</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-[16px]">
          <h4 className="font-serif text-[18px] text-[var(--gold)] mb-[8px]">Contact</h4>
          <ul className="flex flex-col gap-[12px] list-none">
            <li><a href="tel:+919845003786" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(10,10,10,0.8)] hover:text-[var(--gold)] transition-colors">+91 984 5003 786</a></li>
            <li><a href="mailto:info@glamourphotographics.com" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(10,10,10,0.8)] hover:text-[var(--gold)] transition-colors">Email Us</a></li>
            <li><a href="https://wa.me/918971168868" target="_blank" rel="noopener" className="text-[12px] uppercase tracking-[0.1em] text-[rgba(10,10,10,0.8)] hover:text-[var(--gold)] transition-colors">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-[rgba(10,10,10,0.06)] pt-[24px] text-center">
        <span className="text-[11px] text-[rgba(10,10,10,0.45)] tracking-[0.05em]">© 2026 Glamour Photographics. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
