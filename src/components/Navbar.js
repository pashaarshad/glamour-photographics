'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        id="navbar" 
        className={`fixed top-0 left-0 right-0 z-[1000] px-[60px] h-[80px] flex items-center justify-between transition-all duration-400 ease-in-out ${
          scrolled ? 'bg-[rgba(250,248,244,0.96)] backdrop-blur-[16px] border-b border-[rgba(10,10,10,0.07)]' : ''
        }`}
      >
        <Link href="/" className="font-serif text-[20px] font-semibold tracking-[0.05em] text-[var(--black)] transition-colors duration-400">
          Glamour<span className="text-[var(--gold)]">.</span>Photographics
        </Link>
        <ul className="hidden md:flex gap-[40px] list-none">
          <li>
            <Link href="/" className="text-[11px] tracking-[0.2em] uppercase font-normal text-[rgba(10,10,10,0.5)] relative pb-[4px] transition-colors duration-300 hover:text-[var(--black)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[var(--gold)] after:transition-all after:duration-350 hover:after:w-full">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-[11px] tracking-[0.2em] uppercase font-normal text-[rgba(10,10,10,0.5)] relative pb-[4px] transition-colors duration-300 hover:text-[var(--black)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[var(--gold)] after:transition-all after:duration-350 hover:after:w-full">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-[11px] tracking-[0.2em] uppercase font-normal text-[rgba(10,10,10,0.5)] relative pb-[4px] transition-colors duration-300 hover:text-[var(--black)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[var(--gold)] after:transition-all after:duration-350 hover:after:w-full">
              Services
            </Link>
          </li>
          <li>
            <Link href="/corporate" className="text-[11px] tracking-[0.2em] uppercase font-normal text-[rgba(10,10,10,0.5)] relative pb-[4px] transition-colors duration-300 hover:text-[var(--black)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[var(--gold)] after:transition-all after:duration-350 hover:after:w-full">
              Corporate
            </Link>
          </li>
        </ul>
        <Link 
          href="/contact" 
          className="hidden md:inline-block text-[10px] tracking-[0.25em] uppercase font-normal py-[10px] px-[24px] border border-[rgba(197,164,109,0.6)] text-[var(--black)] transition-all duration-300 hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-[var(--black)]"
        >
          Let's Talk
        </Link>
        <div className="flex md:hidden flex-col gap-[5px] cursor-none" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className="block w-[24px] h-[1px] bg-[var(--black)] transition-all duration-300"></span>
          <span className="block w-[24px] h-[1px] bg-[var(--black)] transition-all duration-300"></span>
          <span className="block w-[24px] h-[1px] bg-[var(--black)] transition-all duration-300"></span>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div 
        className={`fixed inset-0 bg-[var(--black)] z-[700] flex flex-col items-center justify-center gap-[40px] transition-transform duration-600 ease-[var(--ease)] ${mobileOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <Link href="/" className="font-serif text-[48px] font-light text-[var(--ivory)] tracking-[-0.01em] opacity-0 translate-y-[20px] transition-all duration-500 hover:text-[var(--gold)] delay-100 mobile-link" onClick={() => setMobileOpen(false)}>Home</Link>
        <Link href="/about" className="font-serif text-[48px] font-light text-[var(--ivory)] tracking-[-0.01em] opacity-0 translate-y-[20px] transition-all duration-500 hover:text-[var(--gold)] delay-150 mobile-link" onClick={() => setMobileOpen(false)}>About</Link>
        <Link href="/services" className="font-serif text-[48px] font-light text-[var(--ivory)] tracking-[-0.01em] opacity-0 translate-y-[20px] transition-all duration-500 hover:text-[var(--gold)] delay-200 mobile-link" onClick={() => setMobileOpen(false)}>Services</Link>
        <Link href="/corporate" className="font-serif text-[48px] font-light text-[var(--ivory)] tracking-[-0.01em] opacity-0 translate-y-[20px] transition-all duration-500 hover:text-[var(--gold)] delay-250 mobile-link" onClick={() => setMobileOpen(false)}>Corporate</Link>
        <Link href="/contact" className="font-serif text-[48px] font-light text-[var(--ivory)] tracking-[-0.01em] opacity-0 translate-y-[20px] transition-all duration-500 hover:text-[var(--gold)] delay-300 mobile-link" onClick={() => setMobileOpen(false)}>Contact</Link>
      </div>

      <style jsx>{`
        .mobile-link {
          opacity: ${mobileOpen ? 1 : 0};
          transform: translateY(${mobileOpen ? '0' : '20px'});
        }
      `}</style>
    </>
  );
}
