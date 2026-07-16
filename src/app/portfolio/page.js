'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Play, X } from 'lucide-react';

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [showAllImages, setShowAllImages] = useState(false);

  useEffect(() => {
    setShowAllImages(false);
  }, [activeTab]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab');
      if (tabParam) {
        setActiveTab(tabParam.toUpperCase());
      }
    }
  }, []);

  useEffect(() => {
    const checkReveals = () => {
      const vh = window.innerHeight;
      document.querySelectorAll('.reveal, .reveal-scale, .stagger-children').forEach(el => {
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
  }, [activeTab]);

  const videos = [
    {
      id: "doOSgmHHgD4",
      client: "PRESIDENCY PU COLLEGE, YELAHANKA",
      title: "Creating Versatile & Capable Individuals",
      desc: "A cinematic admission teaser that captures the spirit of PSPU — built to inspire the next generation of students to walk through these doors."
    },
    {
      id: "df1A-_FulEs",
      client: "PRESIDENCY SCHOOL BANGALORE",
      title: "Indian Dance — Campus Ad Shoot",
      desc: "A vibrant showcase of culture and movement — shot on campus to highlight the school's commitment to holistic, arts-driven education."
    },
    {
      id: "t07kSRBHPfg",
      client: "CGI BANGALORE",
      title: "CGI - Office Walkthrough",
      desc: "A cinematic walkthrough showcasing CGI's state-of-the-art office infrastructure, collaborative workspace, and vibrant team environment in Bangalore."
    },
    {
      id: "e5J2v1UtFW4",
      client: "TOYOTA KIRLOSKAR MOTOR",
      title: "Toyota Kirloskar - CSR",
      desc: "A heartwarming documentary showing the school transformation at GHBS Hejala under Toyota Kirloskar's CSR initiative."
    },
    {
      id: "SpD8AeoLTXw",
      client: "TATA ELXSI",
      title: "Tata Elxsi - UAV Journey",
      desc: "An in-depth look at Tata Elxsi's pioneering work in AI-driven autonomous UAV design, engineering excellence, and future mobility."
    },
    {
      id: "jlR54SuB_Rc",
      client: "CONFEDERATION OF INDIAN INDUSTRY",
      title: "CII - Space Expo 2022",
      desc: "Capturing the scale, leadership, and innovations at the 7th Bangalore Space Expo 2022 hosted by CII."
    },
    {
      id: "C0hzCKpITSE",
      client: "PAI INTERNATIONAL ELECTRONICS",
      title: "PAI - Brand Documentary",
      desc: "A compelling brand documentary outlining the 20-year retail journey, growth, and customer-first focus of PAI International Electronics."
    },
    {
      id: "XulH5TjS50k",
      client: "PRESIDENCY UNIVERSITY",
      title: "Presidency University Event Highlight",
      desc: "Visual highlights of major student festivals, academic ceremonies, and campus life at Presidency University."
    },
    {
      id: "cImmLgZo9-Y",
      client: "PRESIDENCY GROUP OF SCHOOLS",
      title: "Presidency Schools Annual Day",
      desc: "Visual highlights capturing the creativity, talent, and celebratory performances of the Presidency annual gathering."
    },
    {
      id: "xzKI4XmfFus",
      client: "PAI INTERNATIONAL MOBILE CARNIVAL",
      title: "PAI International Mobile Festival",
      desc: "A high-energy commercial showcasing PAI's mobile carnival offers, customer rush, and massive electronics giveaways."
    },
    {
      id: "av9FhaYzDuA",
      client: "PAI INTERNATIONAL CELEBRATIONS",
      title: "PAI International Lucky Draw Celebration",
      desc: "Capturing the excitement and transparency of PAI's quarterly genuine lucky coupon draw event with live customer interactions."
    }
  ];

    const portfolioImages = {
    'ALL': [
      '/images/our_portfolio/event/NMK_0002.jpg',
      '/images/our_portfolio/event/NMK_0018.jpg',
      '/images/our_portfolio/event/NMK_0047.JPG',
      '/images/our_portfolio/event/NMK_0130.JPG',
      '/images/our_portfolio/event/NMK_0209.JPG',
      '/images/our_portfolio/event/NMK_0315.JPG',
      '/images/our_portfolio/event/WhatsApp Image 2026-02-09 at 8.29.33 PM (1).jpg',
      '/images/our_portfolio/event/_NMK2325.jpg',
      '/images/our_portfolio/event/_NMK2368.jpg',
      '/images/our_portfolio/event/_NMK2441.jpg',
      '/images/our_portfolio/event/_NMK2857.jpg',
      '/images/our_portfolio/event/_NMK3555.jpg',
      '/images/our_portfolio/event/cp-12.jpg',
      '/images/our_portfolio/event/highlights_NMKL0031.jpg',
      '/images/our_portfolio/event/highlights_SKV00387.jpg',
      '/images/our_portfolio/corporate/101A0087.jpg',
      '/images/our_portfolio/corporate/NMKL5612.jpg',
      '/images/our_portfolio/corporate/NMKL7219.jpg',
      '/images/our_portfolio/corporate/NMKL7605.jpg',
      '/images/our_portfolio/corporate/NMKL7670.jpg',
      '/images/our_portfolio/corporate/NMKL7837.jpg',
      '/images/our_portfolio/corporate/NMKL7905.jpg',
      '/images/our_portfolio/corporate/NMKL7925.jpg',
      '/images/our_portfolio/corporate/NMK_0013.JPG',
      '/images/our_portfolio/corporate/NMK_0127.JPG',
      '/images/our_portfolio/corporate/NMK_0129.JPG',
      '/images/our_portfolio/corporate/NMK_0219.JPG',
      '/images/our_portfolio/corporate/NMK_0290.JPG',
      '/images/our_portfolio/corporate/NMK_0315.JPG',
      '/images/our_portfolio/corporate/NMK_0457.JPG',
      '/images/our_portfolio/corporate/PRS02780.jpg',
      '/images/our_portfolio/corporate/SKV00446.jpg',
      '/images/our_portfolio/corporate/_01A0411.jpg',
      '/images/our_portfolio/corporate/_01A0476.jpg',
      '/images/our_portfolio/corporate/_01A0705.jpg',
      '/images/our_portfolio/corporate/_01A0712.jpg',
      '/images/our_portfolio/corporate/_01A0748.jpg',
      '/images/our_portfolio/corporate/_01A0760.jpg',
      '/images/our_portfolio/corporate/_01A0809.jpg',
      '/images/our_portfolio/corporate/_01A0871.jpg',
      '/images/our_portfolio/corporate/_01A0924.jpg',
      '/images/our_portfolio/corporate/_01A0956.jpg',
      '/images/our_portfolio/corporate/_01A1008.jpg',
      '/images/our_portfolio/corporate/_01A1070.jpg',
      '/images/our_portfolio/corporate/_01A1126.jpg',
      '/images/our_portfolio/corporate/_AMZ0023.JPG',
      '/images/our_portfolio/corporate/iqvia.jpg',
      '/images/our_portfolio/corporate/rtx-1.jpg',
      '/images/our_portfolio/celebrity/3C1A0782.jpg',
      '/images/our_portfolio/celebrity/3C1A0823.jpg',
      '/images/our_portfolio/celebrity/DSC_0204.JPG',
      '/images/our_portfolio/celebrity/IMG0_0186.JPG',
      '/images/our_portfolio/celebrity/IMG_0006.JPG',
      '/images/our_portfolio/celebrity/IMG_00122.JPG',
      '/images/our_portfolio/celebrity/IMG_0029.JPG',
      '/images/our_portfolio/celebrity/IMG_0037.jpg',
      '/images/our_portfolio/celebrity/IMG_0060.JPG',
      '/images/our_portfolio/celebrity/IMG_0131.JPG',
      '/images/our_portfolio/celebrity/IMG_0207.JPG',
      '/images/our_portfolio/celebrity/IMG_0212.JPG',
      '/images/our_portfolio/celebrity/IMG_0464.JPG',
      '/images/our_portfolio/celebrity/NMK_0117.JPG',
      '/images/our_portfolio/celebrity/NMK_0118.JPG',
      '/images/our_portfolio/celebrity/NMK_0502.jpg',
      '/images/our_portfolio/celebrity/NMK_0655.jpg',
      '/images/our_portfolio/celebrity/NMK_0684.jpg',
      '/images/our_portfolio/celebrity/NMK_0685.jpg',
      '/images/our_portfolio/celebrity/NMK_0925.JPG',
      '/images/our_portfolio/celebrity/NMK_0982.JPG',
      '/images/our_portfolio/celebrity/NMK_0989.JPG',
      '/images/our_portfolio/celebrity/NMK_1005.JPG',
      '/images/our_portfolio/celebrity/Srk.jpg',
      '/images/our_portfolio/celebrity/VED02715.jpg',
      '/images/our_portfolio/celebrity/VED02718.jpg',
      '/images/our_portfolio/celebrity/VED03109.jpg',
      '/images/our_portfolio/celebrity/VED03305.jpg',
      '/images/our_portfolio/celebrity/VED03320.jpg',
      '/images/our_portfolio/celebrity/VED03339.jpg',
      '/images/our_portfolio/celebrity/celeb.jpg',
      '/images/our_portfolio/celebrity/dilquar.jpg',
      '/images/our_portfolio/celebrity/highlights_3C1A0761.jpg',
      '/images/our_portfolio/celebrity/highlights_3C1A0775.jpg',
      '/images/our_portfolio/celebrity/highlights_3C1A0841.jpg',
      '/images/our_portfolio/celebrity/highlights_DSC_0038.jpg',
      '/images/our_portfolio/documentary/DSC_0149.JPG',
      '/images/our_portfolio/documentary/DSC_0163.JPG',
      '/images/our_portfolio/documentary/DSC_0204 Big.JPG',
      '/images/our_portfolio/documentary/NMKL0128.JPG',
      '/images/our_portfolio/documentary/highlights_SKV00290.jpg',
      '/images/our_portfolio/documentary/highlights_SKV00387.jpg',
      '/images/our_portfolio/political/11.jpg',
      '/images/our_portfolio/political/22.jpg',
      '/images/our_portfolio/political/Bill clinton.jpg',
      '/images/our_portfolio/political/Cameroon.jpg',
      '/images/our_portfolio/political/IMG_0008.JPG',
      '/images/our_portfolio/political/IMG_0029.JPG',
      '/images/our_portfolio/political/NMK_0047.JPG',
      '/images/our_portfolio/political/NMK_0199.JPG',
      '/images/our_portfolio/political/NMK_0203.JPG',
      '/images/our_portfolio/political/NMK_0337.JPG',
      '/images/our_portfolio/political/NMK_0402.JPG',
      '/images/our_portfolio/political/NMK_0463.JPG',
      '/images/our_portfolio/political/highlights_IMG_0069.jpg',
      '/images/our_portfolio/political/highlights_IMG_0098.jpg',
      '/images/our_portfolio/headshots/6ba3a857-c93e-4299-8740-45da7ff9e3f2.jpg',
      '/images/our_portfolio/headshots/NMKL2060.jpg',
      '/images/our_portfolio/headshots/NMKL2078.jpg',
      '/images/our_portfolio/headshots/NMKL2079.jpg',
      '/images/our_portfolio/headshots/NMKL5344-2.jpg',
      '/images/our_portfolio/headshots/NMKL5462-2.jpg',
      '/images/our_portfolio/headshots/NMKL5713.jpg',
      '/images/our_portfolio/headshots/NMKL7605.jpg',
      '/images/our_portfolio/headshots/NMK_0236.JPG',
      '/images/our_portfolio/headshots/NMK_0481.JPG',
      '/images/our_portfolio/headshots/Untitled design(1) (1).jpg',
      '/images/our_portfolio/headshots/_01A0630.JPG',
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.18.19 PM.jpg',
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.18.38 PM.jpg',
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.18.49 PM.jpg',
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.18.56 PM.jpg',
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.19.31 PM.jpg',
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.19.43 PM.jpg',
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.20.10 PM.jpg',
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.20.45 PM.jpg',
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.20.51 PM.jpg',
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.21.09 PM.jpg',
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.21.32 PM.jpg',
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.21.43 PM.jpg',
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.22.01 PM.jpg',
    ],
    'EVENT': [
      '/images/our_portfolio/event/NMK_0002.jpg',
      '/images/our_portfolio/event/NMK_0018.jpg',
      '/images/our_portfolio/event/NMK_0047.JPG',
      '/images/our_portfolio/event/NMK_0130.JPG',
      '/images/our_portfolio/event/NMK_0209.JPG',
      '/images/our_portfolio/event/NMK_0315.JPG',
      '/images/our_portfolio/event/WhatsApp Image 2026-02-09 at 8.29.33 PM (1).jpg',
      '/images/our_portfolio/event/_NMK2325.jpg',
      '/images/our_portfolio/event/_NMK2368.jpg',
      '/images/our_portfolio/event/_NMK2441.jpg',
      '/images/our_portfolio/event/_NMK2857.jpg',
      '/images/our_portfolio/event/_NMK3555.jpg',
      '/images/our_portfolio/event/cp-12.jpg',
      '/images/our_portfolio/event/highlights_NMKL0031.jpg',
      '/images/our_portfolio/event/highlights_SKV00387.jpg',
    ],
    'CORPORATE': [
      '/images/our_portfolio/corporate/101A0087.jpg',
      '/images/our_portfolio/corporate/NMKL5612.jpg',
      '/images/our_portfolio/corporate/NMKL7219.jpg',
      '/images/our_portfolio/corporate/NMKL7605.jpg',
      '/images/our_portfolio/corporate/NMKL7670.jpg',
      '/images/our_portfolio/corporate/NMKL7837.jpg',
      '/images/our_portfolio/corporate/NMKL7905.jpg',
      '/images/our_portfolio/corporate/NMKL7925.jpg',
      '/images/our_portfolio/corporate/NMK_0013.JPG',
      '/images/our_portfolio/corporate/NMK_0127.JPG',
      '/images/our_portfolio/corporate/NMK_0129.JPG',
      '/images/our_portfolio/corporate/NMK_0219.JPG',
      '/images/our_portfolio/corporate/NMK_0290.JPG',
      '/images/our_portfolio/corporate/NMK_0315.JPG',
      '/images/our_portfolio/corporate/NMK_0457.JPG',
      '/images/our_portfolio/corporate/PRS02780.jpg',
      '/images/our_portfolio/corporate/SKV00446.jpg',
      '/images/our_portfolio/corporate/_01A0411.jpg',
      '/images/our_portfolio/corporate/_01A0476.jpg',
      '/images/our_portfolio/corporate/_01A0705.jpg',
      '/images/our_portfolio/corporate/_01A0712.jpg',
      '/images/our_portfolio/corporate/_01A0748.jpg',
      '/images/our_portfolio/corporate/_01A0760.jpg',
      '/images/our_portfolio/corporate/_01A0809.jpg',
      '/images/our_portfolio/corporate/_01A0871.jpg',
      '/images/our_portfolio/corporate/_01A0924.jpg',
      '/images/our_portfolio/corporate/_01A0956.jpg',
      '/images/our_portfolio/corporate/_01A1008.jpg',
      '/images/our_portfolio/corporate/_01A1070.jpg',
      '/images/our_portfolio/corporate/_01A1126.jpg',
      '/images/our_portfolio/corporate/_AMZ0023.JPG',
      '/images/our_portfolio/corporate/iqvia.jpg',
      '/images/our_portfolio/corporate/rtx-1.jpg',
    ],
    'CELEBRITY': [
      '/images/our_portfolio/celebrity/3C1A0782.jpg',
      '/images/our_portfolio/celebrity/3C1A0823.jpg',
      '/images/our_portfolio/celebrity/DSC_0204.JPG',
      '/images/our_portfolio/celebrity/IMG0_0186.JPG',
      '/images/our_portfolio/celebrity/IMG_0006.JPG',
      '/images/our_portfolio/celebrity/IMG_00122.JPG',
      '/images/our_portfolio/celebrity/IMG_0029.JPG',
      '/images/our_portfolio/celebrity/IMG_0037.jpg',
      '/images/our_portfolio/celebrity/IMG_0060.JPG',
      '/images/our_portfolio/celebrity/IMG_0131.JPG',
      '/images/our_portfolio/celebrity/IMG_0207.JPG',
      '/images/our_portfolio/celebrity/IMG_0212.JPG',
      '/images/our_portfolio/celebrity/IMG_0464.JPG',
      '/images/our_portfolio/celebrity/NMK_0117.JPG',
      '/images/our_portfolio/celebrity/NMK_0118.JPG',
      '/images/our_portfolio/celebrity/NMK_0502.jpg',
      '/images/our_portfolio/celebrity/NMK_0655.jpg',
      '/images/our_portfolio/celebrity/NMK_0684.jpg',
      '/images/our_portfolio/celebrity/NMK_0685.jpg',
      '/images/our_portfolio/celebrity/NMK_0925.JPG',
      '/images/our_portfolio/celebrity/NMK_0982.JPG',
      '/images/our_portfolio/celebrity/NMK_0989.JPG',
      '/images/our_portfolio/celebrity/NMK_1005.JPG',
      '/images/our_portfolio/celebrity/Srk.jpg',
      '/images/our_portfolio/celebrity/VED02715.jpg',
      '/images/our_portfolio/celebrity/VED02718.jpg',
      '/images/our_portfolio/celebrity/VED03109.jpg',
      '/images/our_portfolio/celebrity/VED03305.jpg',
      '/images/our_portfolio/celebrity/VED03320.jpg',
      '/images/our_portfolio/celebrity/VED03339.jpg',
      '/images/our_portfolio/celebrity/celeb.jpg',
      '/images/our_portfolio/celebrity/dilquar.jpg',
      '/images/our_portfolio/celebrity/highlights_3C1A0761.jpg',
      '/images/our_portfolio/celebrity/highlights_3C1A0775.jpg',
      '/images/our_portfolio/celebrity/highlights_3C1A0841.jpg',
      '/images/our_portfolio/celebrity/highlights_DSC_0038.jpg',
    ],
    'DOCUMENTARY': [
      '/images/our_portfolio/documentary/DSC_0149.JPG',
      '/images/our_portfolio/documentary/DSC_0163.JPG',
      '/images/our_portfolio/documentary/DSC_0204 Big.JPG',
      '/images/our_portfolio/documentary/NMKL0128.JPG',
      '/images/our_portfolio/documentary/highlights_SKV00290.jpg',
      '/images/our_portfolio/documentary/highlights_SKV00387.jpg',
    ],
    'POLITICAL': [
      '/images/our_portfolio/political/11.jpg',
      '/images/our_portfolio/political/22.jpg',
      '/images/our_portfolio/political/Bill clinton.jpg',
      '/images/our_portfolio/political/Cameroon.jpg',
      '/images/our_portfolio/political/IMG_0008.JPG',
      '/images/our_portfolio/political/IMG_0029.JPG',
      '/images/our_portfolio/political/NMK_0047.JPG',
      '/images/our_portfolio/political/NMK_0199.JPG',
      '/images/our_portfolio/political/NMK_0203.JPG',
      '/images/our_portfolio/political/NMK_0337.JPG',
      '/images/our_portfolio/political/NMK_0402.JPG',
      '/images/our_portfolio/political/NMK_0463.JPG',
      '/images/our_portfolio/political/highlights_IMG_0069.jpg',
      '/images/our_portfolio/political/highlights_IMG_0098.jpg',
    ],
    'HEADSHOTS': [
      '/images/our_portfolio/headshots/6ba3a857-c93e-4299-8740-45da7ff9e3f2.jpg',
      '/images/our_portfolio/headshots/NMKL2060.jpg',
      '/images/our_portfolio/headshots/NMKL2078.jpg',
      '/images/our_portfolio/headshots/NMKL2079.jpg',
      '/images/our_portfolio/headshots/NMKL5344-2.jpg',
      '/images/our_portfolio/headshots/NMKL5462-2.jpg',
      '/images/our_portfolio/headshots/NMKL5713.jpg',
      '/images/our_portfolio/headshots/NMKL7605.jpg',
      '/images/our_portfolio/headshots/NMK_0236.JPG',
      '/images/our_portfolio/headshots/NMK_0481.JPG',
      '/images/our_portfolio/headshots/Untitled design(1) (1).jpg',
      '/images/our_portfolio/headshots/_01A0630.JPG',
    ],
    'OUTDOOR': [
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.18.19 PM.jpg',
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.18.38 PM.jpg',
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.18.49 PM.jpg',
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.18.56 PM.jpg',
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.19.31 PM.jpg',
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.19.43 PM.jpg',
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.20.10 PM.jpg',
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.20.45 PM.jpg',
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.20.51 PM.jpg',
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.21.09 PM.jpg',
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.21.32 PM.jpg',
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.21.43 PM.jpg',
      '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.22.01 PM.jpg',
    ],
  };

  const activeImages = portfolioImages[activeTab] || portfolioImages['ALL'];

  return (
    <main className="w-full bg-[var(--dark)] text-[var(--light)] min-h-screen pt-[160px] pb-[100px] cursor-none relative">
      
      {/* ─── HERO SECTION ─── */}
      <section className="px-[5%] md:px-[8%] max-w-[1400px] mx-auto mb-[100px]">
        <div className="reveal">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">
            Visual Highlights
          </span>
          <h1 className="font-serif text-[clamp(44px,6vw,80px)] font-light leading-[1.1] tracking-[-0.02em] text-[var(--light)]">
            Selected Works Portfolio <br />
            <span className="italic text-[var(--gold)]">Across Decades.</span>
          </h1>
          <p className="text-[14px] leading-[1.8] text-[var(--muted)] max-w-[600px] mt-[32px] font-light">
            Explore our visual archives spanning corporate walkthroughs, high-profile events, drone industrial shoots, and brand documentary films.
          </p>
        </div>
      </section>

      {/* ─── FILTER TABS ─── */}
      <section className="px-[5%] md:px-[8%] max-w-[1400px] mx-auto mb-[60px]">
        <div className="flex flex-wrap gap-[30px] border-b border-[rgba(10,10,10,0.08)] pb-[15px] mb-[40px] reveal opacity-0 anim-fade-up">
          {          [
            { id: 'ALL', label: 'ALL' },
            { id: 'EVENT', label: 'EVENT' },
            { id: 'CORPORATE', label: 'CORPORATE & OFFICES' },
            { id: 'CELEBRITY', label: 'CELEBRITY' },
            { id: 'DOCUMENTARY', label: 'DOCUMENTARY' },
            { id: 'POLITICAL', label: 'POLITICAL ICON' },
            { id: 'HEADSHOTS', label: 'HEADSHOTS' },
            { id: 'OUTDOOR', label: 'OUTDOOR' }
          ].map((tab) => (
            <button 
              suppressHydrationWarning
              key={tab.id} 
              onClick={() => setActiveTab(tab.id)} 
              className={`text-[10px] tracking-[0.2em] uppercase pb-[15px] relative cursor-none transition-colors ${
                activeTab === tab.id ? 'text-[var(--gold)] font-medium' : 'text-[var(--muted)] hover:text-[var(--light)]'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && <div className="absolute bottom-[-16px] left-0 w-full h-[2px] bg-[var(--gold)]" />}
            </button>
          ))}
        </div>

        {/* ─── VIDEOS GRID ─── */}
        {
          /* ─── 5-IMAGE SECTION BLOCKS ─── */
          (() => {
              const VERTICAL_IMAGES = [
                '/images/our_portfolio/corporate/NMKL5612.jpg',
                '/images/our_portfolio/celebrity/IMG0_0186.JPG',
                '/images/our_portfolio/celebrity/IMG_0006.JPG',
                '/images/our_portfolio/celebrity/IMG_0029.JPG',
                '/images/our_portfolio/celebrity/IMG_0207.JPG',
                '/images/our_portfolio/celebrity/IMG_0212.JPG',
                '/images/our_portfolio/celebrity/IMG_0464.JPG',
                '/images/our_portfolio/celebrity/NMK_0925.JPG',
                '/images/our_portfolio/celebrity/Srk.jpg',
                '/images/our_portfolio/celebrity/VED03109.jpg',
                '/images/our_portfolio/celebrity/highlights_3C1A0775.jpg',
                '/images/our_portfolio/documentary/highlights_SKV00290.jpg',
                '/images/our_portfolio/political/Cameroon.jpg',
                '/images/our_portfolio/political/IMG_0029.JPG',
                '/images/our_portfolio/headshots/6ba3a857-c93e-4299-8740-45da7ff9e3f2.jpg',
                '/images/our_portfolio/headshots/NMKL2060.jpg',
                '/images/our_portfolio/headshots/NMKL2078.jpg',
                '/images/our_portfolio/headshots/NMKL2079.jpg',
                '/images/our_portfolio/headshots/NMKL5344-2.jpg',
                '/images/our_portfolio/headshots/NMKL5462-2.jpg',
                '/images/our_portfolio/headshots/NMKL5713.jpg',
                '/images/our_portfolio/headshots/NMK_0236.JPG',
                '/images/our_portfolio/headshots/Untitled design(1) (1).jpg',
                '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.18.19 PM.jpg',
                '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.18.38 PM.jpg',
                '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.18.49 PM.jpg',
                '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.18.56 PM.jpg',
                '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.19.31 PM.jpg',
                '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.20.10 PM.jpg',
                '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.20.45 PM.jpg',
                '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.20.51 PM.jpg',
                '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.21.09 PM.jpg',
                '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.21.32 PM.jpg',
                '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.21.43 PM.jpg',
                '/images/our_portfolio/outdoor/highlights_Screenshot 2024-11-30 at 1.22.01 PM.jpg',
              ];

            const verticals = activeImages.filter(src => VERTICAL_IMAGES.includes(src));
            const horizontals = activeImages.filter(src => !VERTICAL_IMAGES.includes(src));

            const blocks = [];
            let vertIdx = 0;
            let horizIdx = 0;

            while (vertIdx < verticals.length && horizIdx + 4 <= horizontals.length) {
              blocks.push({
                vertical: verticals[vertIdx],
                horizontals: [
                  horizontals[horizIdx],
                  horizontals[horizIdx + 1],
                  horizontals[horizIdx + 2],
                  horizontals[horizIdx + 3]
                ]
              });
              vertIdx += 1;
              horizIdx += 4;
            }

            const remainingVerticals = verticals.slice(vertIdx);
            const remainingHorizontals = horizontals.slice(horizIdx);
            const remaining = [...remainingVerticals, ...remainingHorizontals];

            if (blocks.length === 0) {
              return (
                <div className="w-full flex flex-col gap-[24px]">
                  {verticals.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
                      {verticals.map((src, idx) => (
                        <div key={idx} className="relative aspect-[2/3] group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] shadow-[0_4px_20px_rgba(0,0,0,0.02)] reveal opacity-0 anim-fade-up" style={{ animationDelay: `${idx * 50}ms` }}>
                          <img src={src} alt="Portfolio Work" className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-105" />
                        </div>
                      ))}
                    </div>
                  )}
                  {horizontals.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
                      {horizontals.map((src, idx) => (
                        <div key={idx} className="relative aspect-[3/2] group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] shadow-[0_4px_20px_rgba(0,0,0,0.02)] reveal opacity-0 anim-fade-up" style={{ animationDelay: `${idx * 50}ms` }}>
                          <img src={src} alt="Portfolio Work" className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-105" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            const visibleBlocks = showAllImages ? blocks : blocks.slice(0, 4);
            const hasMore = blocks.length > 4 || remainingVerticals.length > 0 || remainingHorizontals.length > 0;

            return (
              <div className="w-full flex flex-col gap-[24px]">
                {visibleBlocks.map((block, bIdx) => (
                  <div key={bIdx} className="flex flex-col md:flex-row gap-[24px] items-stretch w-full">
                    {/* Left: 1 Vertical */}
                    <div className="w-full md:w-1/3 relative group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] min-h-[350px] md:min-h-0 shadow-[0_4px_20px_rgba(0,0,0,0.02)] reveal opacity-0 anim-fade-up">
                      <img src={block.vertical} alt="Portfolio Work" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]" />
                    </div>
                    {/* Right: 4 Horizontal */}
                    <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
                      {block.horizontals.map((src, idx) => (
                        <div key={idx} className="relative aspect-[3/2] group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] shadow-[0_4px_20px_rgba(0,0,0,0.02)] reveal opacity-0 anim-fade-up" style={{ animationDelay: `${idx * 50}ms` }}>
                          <img src={src} alt="Portfolio Work" className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Show remaining items only if showAllImages is true */}
                {showAllImages && (
                  <>
                    {/* REMAINING VERTICALS */}
                    {remainingVerticals.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
                        {remainingVerticals.map((src, idx) => (
                          <div key={idx} className="relative aspect-[2/3] group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] shadow-[0_4px_20px_rgba(0,0,0,0.02)] reveal opacity-0 anim-fade-up" style={{ animationDelay: `${idx * 50}ms` }}>
                            <img src={src} alt="Portfolio Work" className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]" />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* REMAINING HORIZONTALS */}
                    {remainingHorizontals.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
                        {remainingHorizontals.map((src, idx) => (
                          <div key={idx} className="relative aspect-[3/2] group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] shadow-[0_4px_20px_rgba(0,0,0,0.02)] reveal opacity-0 anim-fade-up" style={{ animationDelay: `${idx * 50}ms` }}>
                            <img src={src} alt="Portfolio Work" className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]" />
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {/* Show More Button */}
                {!showAllImages && hasMore && (
                  <div className="flex justify-center mt-[40px] reveal opacity-0 anim-fade-up">
                    <button
                      suppressHydrationWarning
                      onClick={() => {
                        setShowAllImages(true);
                        setTimeout(() => {
                          window.dispatchEvent(new Event('scroll'));
                        }, 100);
                      }}
                      className="border border-[rgba(10,10,10,0.15)] text-[var(--light)] text-[10px] tracking-[0.2em] uppercase py-[14px] px-[36px] hover:bg-[var(--light)] hover:text-[var(--dark)] transition-all duration-300 cursor-none font-bold rounded-full"
                    >
                      Show More
                    </button>
                  </div>
                )}
              </div>
            );
          })()}
      </section>

      {/* ─── CONTACT SECTION ─── */}
      <section className="mt-[140px] py-[100px] px-[5%] md:px-[8%] bg-[var(--darker)] text-center reveal border-t border-[rgba(10,10,10,0.06)]">
        <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-light text-[var(--light)] leading-[1.1] mb-[40px]">
          Want to see more project work?
        </h2>
        <Link href="/contact" className="inline-block border border-[rgba(10,10,10,0.15)] text-[var(--light)] uppercase tracking-[0.2em] text-[11px] font-semibold px-[36px] py-[18px] transition-all duration-400 hover:bg-[var(--light)] hover:text-[var(--dark)] hover:border-transparent cursor-none">
          Get In Touch
        </Link>
      </section>

      {/* ─── YOUTUBE LIGHTBOX OVERLAY ─── */}
      {activeVideoId && (
        <div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-[20px] transition-all">
          <button 
            suppressHydrationWarning
            onClick={() => setActiveVideoId(null)} 
            className="absolute top-[30px] right-[5%] md:right-[8%] text-white text-[12px] tracking-[0.2em] uppercase flex items-center gap-[8px] cursor-none hover:text-[var(--gold)]"
          >
            Close <X className="w-[16px] h-[16px]" />
          </button>
          <div className="w-full max-w-[960px] aspect-video rounded-sm overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-2xl relative">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

    </main>
  );
}
