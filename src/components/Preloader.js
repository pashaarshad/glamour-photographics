'use client';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [out, setOut] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Start fading out after 2.6s, wait 800ms for animation to finish then hide.
    const timerOut = setTimeout(() => {
      setOut(true);
      setTimeout(() => setHide(true), 800);
    }, 2600);

    return () => clearTimeout(timerOut);
  }, []);

  if (hide) return null;

  return (
    <div
      id="loader"
      className={`fixed inset-0 bg-black z-[8000] flex flex-col items-center justify-center p-0 m-0 ${
        out ? 'loader-out' : ''
      }`}
    >
      <div id="loader-logo-placeholder" className="mb-[18px] loader-fade flex justify-center items-center">
        <img 
          src="/images/Glamour_Logo.png" 
          alt="Glamour Photographics Logo" 
          className="w-[200px] h-auto object-contain"
        />
      </div>
      <div id="loader-line" className="h-[1px] bg-[var(--gold)] mb-[14px] loader-line-anim"></div>
      <div id="loader-text" className="font-sans text-[clamp(13px,2vw,17px)] text-[rgba(250,248,244,0.88)] tracking-[0.52em] uppercase font-light loader-text-anim">
        Glamour Photographics
      </div>
      <div id="loader-sub" className="font-sans text-[10px] tracking-[0.38em] uppercase text-[rgba(250,248,244,0.28)] mt-[10px] loader-sub-anim">
        Visual Storytelling since 1982
      </div>
    </div>
  );
}
