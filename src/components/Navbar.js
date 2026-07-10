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
        className={`fixed top-0 left-0 right-0 z-[1000] px-[5%] md:px-[8%] h-[80px] flex items-center justify-between transition-all duration-400 ease-in-out cursor-none ${
          scrolled ? 'bg-[rgba(250,248,244,0.95)] backdrop-blur-[16px] border-b border-[rgba(10,10,10,0.06)]' : 'bg-transparent'
        }`}
      >
        <Link href="/" className="flex items-center gap-[10px] cursor-none">
          <img 
            src="/images/Glamour_Logo.png" 
            alt="Glamour Photographics Logo" 
            className="h-[30px] md:h-[36px] w-auto object-contain"
          />
        </Link>
        <ul className="hidden md:flex gap-[40px] list-none">
          {['Home', 'About Us', 'Services', 'Portfolio', 'Clients', 'Contact'].map((item) => (
            <li key={item}>
              <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-[10px] tracking-[0.2em] uppercase font-medium text-[var(--muted)] relative pb-[4px] transition-colors duration-300 hover:text-[var(--light)] cursor-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[var(--gold)] after:transition-all after:duration-350 hover:after:w-full">
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-[20px]">
          <Link 
            href="/contact" 
            className="text-[10px] tracking-[0.25em] uppercase font-semibold py-[10px] px-[24px] border border-[rgba(10,10,10,0.15)] text-[var(--light)] transition-all duration-300 hover:bg-[var(--light)] hover:text-[var(--dark)] cursor-none"
          >
            Let's Talk
          </Link>
        </div>
        <div className="flex md:hidden flex-col gap-[5px] cursor-none" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className="block w-[24px] h-[1px] bg-[var(--light)] transition-all duration-300"></span>
          <span className="block w-[24px] h-[1px] bg-[var(--light)] transition-all duration-300"></span>
          <span className="block w-[24px] h-[1px] bg-[var(--light)] transition-all duration-300"></span>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div 
        className={`fixed inset-0 bg-[var(--darker)] z-[2000] flex flex-col items-center justify-center gap-[40px] transition-transform duration-600 ease-in-out cursor-none ${mobileOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <button suppressHydrationWarning onClick={() => setMobileOpen(false)} className="absolute top-[30px] right-[5%] md:right-[8%] text-[var(--light)] text-[12px] tracking-[0.2em] uppercase cursor-none">Close ✕</button>
        {['Home', 'About Us', 'Services', 'Portfolio', 'Clients', 'Contact'].map((item, idx) => (
          <Link 
            key={item}
            href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
            className={`font-serif text-[42px] font-light text-[var(--light)] tracking-[-0.01em] transition-all duration-500 hover:text-[var(--gold)] cursor-none ${
              mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
            }`} 
            style={{ transitionDelay: `${idx * 80}ms` }}
            onClick={() => setMobileOpen(false)}
          >
            {item}
          </Link>
        ))}
      </div>
    </>
  );
}
