'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Camera, Video, Calendar, Aperture, Building2, Film, Play, X, Award, User, MapPin } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Custom Count Up Hook for Stats Animation
function useCountUp(endVal, duration = 1800, trigger = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) {
      setCount(0);
      return;
    }
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);
      setCount(Math.floor(progressPercentage * endVal));
      if (progressPercentage < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [endVal, duration, trigger]);
  return count;
}

export default function Home() {
  const [activePortfolioTab, setActivePortfolioTab] = useState('ALL');
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState('oz26LF0gvxg');
  const [activeVideoTab, setActiveVideoTab] = useState('ALL VIDEOS');
  const [showAllHomeVideos, setShowAllHomeVideos] = useState(false);
  const [showAllHomeImages, setShowAllHomeImages] = useState(false);
  const [statsTriggered, setStatsTriggered] = useState(false);
  const [expandedClients, setExpandedClients] = useState(false);
  const [activeCert, setActiveCert] = useState(null);

  const [homeFormData, setHomeFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [homeStatus, setHomeStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleHomeInputChange = (e) => {
    const { name, value } = e.target;
    setHomeFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleHomeFormSubmit = async (e) => {
    e.preventDefault();
    
    setHomeStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null }
    });

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

    const getHomeWhatsAppLink = (data) => {
      const encodedMsg = encodeURIComponent(
        `Hello Glamour Photographics,\n\nI just submitted a contact inquiry from your Home page with the following details:\n\n*Name:* ${data.name}\n*Email:* ${data.email}\n*Phone:* ${data.phone || 'N/A'}\n*Message:* ${data.message}`
      );
      return `https://wa.me/918971168868?text=${encodedMsg}`;
    };

    if (accessKey === "YOUR_ACCESS_KEY_HERE") {
      setTimeout(() => {
        const waLink = getHomeWhatsAppLink(homeFormData);
        window.location.href = waLink;
        setHomeStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: "Demo Mode: Redirecting to WhatsApp..." }
        });
      }, 1000);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: homeFormData.name,
          email: homeFormData.email,
          phone: homeFormData.phone,
          message: homeFormData.message,
          from_name: "Glamour Photographics Website (Home Form)",
          subject: `New Lead from Home Page - ${homeFormData.name}`
        })
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        const waLink = getHomeWhatsAppLink(homeFormData);
        window.location.href = waLink;
        setHomeStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: "Redirecting to WhatsApp..." }
        });
      } else {
        setHomeStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg: result.message || "Something went wrong. Please try again." }
        });
      }
    } catch (error) {
      setHomeStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "Failed to send message. Please check your internet connection." }
      });
    }
  };

  const resetHomeForm = () => {
    setHomeFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setHomeStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    });
  };

  useEffect(() => {
    setShowAllHomeVideos(false);
  }, [activeVideoTab]);

  useEffect(() => {
    setShowAllHomeImages(false);
  }, [activePortfolioTab]);

  const featuredVideos = {
    'ALL VIDEOS': [
      { id: 'jlR54SuB_Rc', title: 'CII Space Expo 2022', desc: 'Capturing corporate excellence and industrial summits.', tag: 'Event Film' },
      { id: 't07kSRBHPfg', title: 'CGI Office Tour', desc: 'Presenting corporate workspace, layout, and values.', tag: 'Corporate Film' },
      { id: 'doOSgmHHgD4', title: 'Presidency Education', desc: 'Institutional values, campus life, and academic success.', tag: 'School Film' },
      { id: 'PX5EzmcDqBI', title: 'Brand Commercial', desc: 'Dynamic digital campaigns establishing visual identity.', tag: 'Digital Ad' },
      { id: 'Ygyh433FRjQ', title: 'Industrial Documentary', desc: 'Narrative storytelling mapping large-scale progress.', tag: 'Documentary' },
    ],
    'EVENT FILMS': [
      { id: 'jlR54SuB_Rc', title: 'CII Space Expo 2022', desc: 'Capturing corporate excellence and industrial summits.', tag: 'Event Film' },
      { id: 'Soc7p3YaTN0', title: 'Ansaan Capital', desc: 'Premium financial leadership storytelling and branding.', tag: 'Event Film' },
      { id: 'df1A-_FulEs', title: 'Milestone Celebrations', desc: 'Honoring achievements in modern motion.', tag: 'Event Film' },
      { id: 'doOSgmHHgD4', title: 'Academic Foundations', desc: 'Commemorating milestones of institutional growth.', tag: 'Event Film' },
    ],
    'CORPORATE FILMS': [
      { id: 't07kSRBHPfg', title: 'CGI Office Tour', desc: 'Presenting corporate workspace, layout, and values.', tag: 'Corporate Film' },
      { id: 'SpD8AeoLTXw', title: 'Tata Elxsi UAV', desc: 'Showcasing high-tech aerospace innovation and hardware.', tag: 'Corporate Film' },
      { id: 'yVtKMpRffws', title: 'GE Bel Summit', desc: 'Highlighting industrial progress and corporate collaboration.', tag: 'Corporate Film' },
      { id: 'CZ6tMXytyM4', title: 'SMK Prakash', desc: 'Documenting state-of-the-art logistics facilities.', tag: 'Corporate Film' },
    ],
    'DOCUMENTARIES': [
      { id: 'Ygyh433FRjQ', title: 'Industrial Documentary', desc: 'Narrative storytelling mapping large-scale progress.', tag: 'Documentary' },
      { id: 'YduPlyKr-10', title: 'Social Impact Film', desc: 'Inspiring narratives focused on community development.', tag: 'Documentary' },
      { id: 'e5J2v1UtFW4', title: 'Toyota CSR Journey', desc: 'Documenting community outreach, education, and care.', tag: 'Documentary' },
      { id: 'av9FhaYzDuA', title: 'Historical Legacy Film', desc: 'Preserving traditions and heritage through cinematic lenses.', tag: 'Documentary' },
    ],
    'SCHOOL FILMS': [
      { id: 'doOSgmHHgD4', title: 'Presidency Education', desc: 'Institutional values, campus life, and academic success.', tag: 'School Film' },
      { id: 'df1A-_FulEs', title: 'Academic Summit', desc: 'Celebrating excellence in higher learning and student growth.', tag: 'School Film' },
      { id: 'XulH5TjS50k', title: 'Student Journey', desc: 'Shaping future leaders through creativity and guidance.', tag: 'School Film' },
      { id: 'cImmLgZo9-Y', title: 'Campus Walkthrough', desc: 'Premium facilities and the modern learning environment.', tag: 'School Film' },
    ],
    'DIGITAL ADS': [
      { id: 'PX5EzmcDqBI', title: 'Brand Commercial', desc: 'Dynamic digital campaigns establishing visual identity.', tag: 'Digital Ad' },
      { id: 'zjxFg4uskmU', title: 'Product Feature', desc: 'Creative showcase of technology and product design.', tag: 'Digital Ad' },
      { id: 'xALGQ-5sr6Y', title: 'Social Media Ad', desc: 'High-energy visual assets engaging modern audiences.', tag: 'Digital Ad' },
      { id: 'C0hzCKpITSE', title: 'Retail Digital Ad', desc: 'Transforming custom digital experiences for retail.', tag: 'Digital Ad' },
      { id: 'xzKI4XmfFus', title: 'Corporate Commercial', desc: 'Narrative commercials driving brand loyalty.', tag: 'Digital Ad' },
    ]
  };

  const statsRef = useRef(null);
  const featuredWorkRef = useRef(null);

  const handleServiceClick = (tabName) => {
    setActiveVideoTab(tabName);
    if (featuredWorkRef.current) {
      featuredWorkRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    // Scroll reveal animation trigger
    const checkReveals = () => {
      const vh = window.innerHeight;
      document.querySelectorAll('.reveal, .reveal-left, .reveal-scale, .stagger-children, .img-mask, .gold-line, .gold-line-short').forEach(el => {
        if (el.getBoundingClientRect().top < vh * 0.95) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', checkReveals, { passive: true });
    setTimeout(checkReveals, 300);

    // Observer for count-up stats
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setStatsTriggered(true);
      }
    }, { threshold: 0.15 });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      window.removeEventListener('scroll', checkReveals);
      observer.disconnect();
    };
  }, []);

  // Stats values using the count-up hook
  const experienceCount = useCountUp(40, 1800, statsTriggered);
  const clientsCount = useCountUp(500, 1800, statsTriggered);
  const projectsCount = useCountUp(1200, 1800, statsTriggered);
  const weddingsCount = useCountUp(300, 1800, statsTriggered);

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

  const activeImages = portfolioImages[activePortfolioTab] || portfolioImages['ALL'];

  return (
    <main className="w-full bg-[var(--dark)] text-[var(--light)] pb-[100px] overflow-x-hidden cursor-none relative">
      
      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative min-h-[100svh] flex flex-col justify-center md:flex-row md:justify-start md:items-center px-[5%] md:px-[8%] pt-[120px] md:pt-[80px] pb-[60px] md:pb-0 overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 z-0 select-none">
          {/* Desktop image */}
          <img 
            src="/images/hero-camera.jpg" 
            alt="Premium Camera Lens" 
            className="hidden md:block w-full h-full object-contain object-[right_center] opacity-80" 
          />
          {/* Mobile image */}
          <img 
            src="/images/hero-camera-mobile.png" 
            alt="Premium Camera Lens Mobile" 
            className="block md:hidden w-full h-full object-cover object-center opacity-75" 
            onError={(e) => {
              // Fallback to desktop image if mobile one is not uploaded yet
              e.target.src = "/images/hero-camera.jpg";
              e.target.className = "block md:hidden w-full h-full object-contain object-[center_bottom] opacity-70";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0A0A0A] via-[rgba(10,10,10,0.85)] md:via-[rgba(10,10,10,0.65)] to-transparent z-10" />
        </div>
        <div className="w-full max-w-[650px] flex-none z-20 relative pt-[40px] md:pt-[60px] text-left">
          <h1 className="font-serif text-left text-[clamp(52px,7vw,100px)] font-bold leading-[1.05] tracking-[-0.02em] mb-[32px] text-white">
            <span className="block overflow-hidden pb-[4px]"><span className="block anim-slide-up delay-100" style={{ transform: 'translateY(100%)' }}>We Capture</span></span>
            <span className="block overflow-hidden pb-[4px]"><span className="block anim-slide-up delay-150" style={{ transform: 'translateY(100%)' }}>Moments.</span></span>
            <span className="block overflow-hidden pb-[4px]"><span className="block anim-slide-up delay-200" style={{ transform: 'translateY(100%)' }}>We Create</span></span>
            <span className="block overflow-hidden pb-[4px]"><span className="block anim-slide-up delay-240 text-[var(--gold)] italic font-bold" style={{ transform: 'translateY(100%)' }}>Legacies.</span></span>
          </h1>
          <p className="text-[15px] md:text-[17px] text-[rgba(250,248,244,0.9)] leading-[1.7] max-w-[420px] opacity-0 anim-fade-up delay-300 mb-[48px] font-semibold">
            40+ Years of Storytelling Through The Lens of Excellence
          </p>
          <div className="opacity-0 anim-fade-up delay-380">
            <Link href="/portfolio" className="inline-flex items-center justify-center border border-[rgba(255,255,255,0.3)] text-white uppercase tracking-[0.2em] text-[11px] font-bold px-[36px] py-[18px] transition-all duration-400 hover:bg-white hover:text-black hover:border-transparent cursor-none">
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 2. EDITORIAL MARQUEE ─── */}
      <div className="marquee-wrapper py-[20px] bg-black border-y border-[rgba(255,255,255,0.05)] overflow-hidden w-full relative z-20">
        <div className="marquee-track flex whitespace-nowrap text-[10px] tracking-[0.25em] uppercase text-[var(--gold)] font-medium">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-[24px] shrink-0">
              <span className="ml-[24px]">Corporate Films</span><span className="text-[6px] text-white select-none">●</span>
              <span>Wedding Photography</span><span className="text-[6px] text-white select-none">●</span>
              <span>Event Coverage</span><span className="text-[6px] text-white select-none">●</span>
              <span>Digital Advertising</span><span className="text-[6px] text-white select-none">●</span>
              <span>Documentary Films</span><span className="text-[6px] text-white select-none">●</span>
              <span>Studio Portraits</span><span className="text-[6px] text-white select-none">●</span>
              <span>Photo Restoration</span><span className="text-[6px] text-white select-none">●</span>
            </span>
          ))}
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-25%); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 25s linear infinite;
          }
        `}</style>
      </div>

      {/* ─── 2.5. EDITORIAL STRIP ─── */}
      <div className="hero-strip">
        <div className="hero-strip-item">
          <div className="strip-img">
            <img src="/images/cii-event-coverage.jpg" alt="CII Event Coverage" className="w-full h-full object-cover block" />
          </div>
          <div className="strip-pip"></div>
          <div className="strip-side-label">Corporate Events</div>
          <div className="strip-overlay">
            <span className="strip-label">Corporate Events</span>
            <span className="strip-title">CII — India @ 75</span>
          </div>
        </div>

        <div className="hero-strip-item">
          <div className="strip-img">
            <img src="/images/celebrity-portrait.jpg" alt="Celebrity Portrait" className="w-full h-full object-cover block" />
          </div>
          <div className="strip-pip"></div>
          <div className="strip-side-label">Celebrity Portrait</div>
          <div className="strip-overlay">
            <span className="strip-label">Celebrity Coverage</span>
            <span className="strip-title">Portrait Session</span>
          </div>
        </div>

        <div className="hero-strip-item">
          <div className="strip-img">
            <img src="/images/outdoor-event.jpg" alt="Outdoor Event" className="w-full h-full object-cover block" />
          </div>
          <div className="strip-pip"></div>
          <div className="strip-side-label">Outdoor Coverage</div>
          <div className="strip-overlay">
            <span className="strip-label">Events & Media</span>
            <span className="strip-title">Outdoor Coverage</span>
          </div>
        </div>

        <div className="hero-strip-item">
          <div className="strip-img">
            <img src="/images/corporate-event.jpg" alt="Corporate Event" className="w-full h-full object-cover block" />
          </div>
          <div className="strip-pip"></div>
          <div className="strip-side-label">Speaker Series</div>
          <div className="strip-overlay">
            <span className="strip-label">Corporate Events</span>
            <span className="strip-title">Speaker Series</span>
          </div>
        </div>
      </div>

      {/* ─── 2.7. EDITORIAL MARQUEE (BOTTOM) ─── */}
      <div className="marquee-wrapper py-[20px] bg-black border-y border-[rgba(255,255,255,0.05)] overflow-hidden w-full relative z-20">
        <div className="marquee-track-reverse flex whitespace-nowrap text-[10px] tracking-[0.25em] uppercase text-[var(--gold)] font-medium">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-[24px] shrink-0">
              <span className="ml-[24px]">Corporate Films</span><span className="text-[6px] text-white select-none">●</span>
              <span>Wedding Photography</span><span className="text-[6px] text-white select-none">●</span>
              <span>Event Coverage</span><span className="text-[6px] text-white select-none">●</span>
              <span>Digital Advertising</span><span className="text-[6px] text-white select-none">●</span>
              <span>Documentary Films</span><span className="text-[6px] text-white select-none">●</span>
              <span>Studio Portraits</span><span className="text-[6px] text-white select-none">●</span>
              <span>Photo Restoration</span><span className="text-[6px] text-white select-none">●</span>
            </span>
          ))}
        </div>
        <style jsx>{`
          @keyframes marquee-reverse {
            0% { transform: translateX(-25%); }
            100% { transform: translateX(0); }
          }
          .marquee-track-reverse {
            display: flex;
            width: max-content;
            animation: marquee-reverse 25s linear infinite;
          }
        `}</style>
      </div>

      {/* ─── 3. WE TELL STORIES THAT STAY (YOUTUBE EMBED) ─── */}
      <section className="py-[120px] px-[8%] md:px-[10%] bg-[var(--dark)] relative overflow-hidden">
        {/* Subtle historical/storytelling background watermark */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.035] mix-blend-luminosity pointer-events-none"
          style={{ backgroundImage: `url('/images/about-hero-double-exposure.png')` }}
        />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          {/* Top Section: Text */}
          <div className="max-w-[800px] mx-auto text-center mb-[60px] reveal opacity-0 anim-fade-up">
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">
              We Don't Just Shoot
            </span>
            <h2 className="font-serif text-[clamp(36px,4.5vw,60px)] font-light leading-[1.1] tracking-[-0.01em] text-[var(--light)] mb-[24px]">
              We Tell Stories <span className="italic text-[var(--gold)] font-medium">That Stay.</span>
            </h2>
            <p className="text-[14px] md:text-[16px] leading-[1.8] text-[var(--muted)] max-w-[650px] mx-auto mb-[32px] font-light">
              From corporate documentaries that build trust, to powerful commercials and premium event storytelling, we capture moments that create long-lasting brand legacies.
            </p>
            <div className="flex justify-center">
              <Link href="/portfolio" className="border border-[rgba(10,10,10,0.15)] text-[var(--light)] text-[10px] tracking-[0.2em] uppercase py-[14px] px-[28px] hover:bg-[var(--light)] hover:text-[var(--dark)] transition-all duration-300 cursor-pointer font-medium rounded-full">
                Explore Our Work
              </Link>
            </div>
          </div>

          {/* Bottom Section: Video Player with large curved design */}
          <div className="w-full max-w-[1100px] mx-auto aspect-video rounded-[24px] md:rounded-[40px] overflow-hidden border border-[rgba(10,10,10,0.08)] shadow-[0_30px_80px_rgba(10,10,10,0.12)] reveal opacity-0 anim-fade-up delay-100 isolate">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/oz26LF0gvxg?rel=0"
              title="Glamour Photographics Corporate Showreel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ─── 4. STATS SECTION (Four Decades of Visual Excellence) ─── */}
      <section ref={statsRef} className="py-[120px] px-[8%] md:px-[10%] bg-[var(--darker)] border-y border-[rgba(10,10,10,0.06)]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">
          
          {/* Left Column */}
          <div className="reveal opacity-0 anim-fade-up">
            <div className="w-[60px] h-[2px] bg-[var(--gold)] mb-[32px]" id="stats-gold-line"></div>
            <h2 className="font-serif text-[clamp(40px,5vw,72px)] font-light leading-[1.1] tracking-[-0.02em] text-[var(--light)] mb-[32px]">
              Four Decades of <br />
              <span className="italic text-[var(--gold)] font-medium">Visual Excellence</span>
            </h2>
            <p className="text-[14px] leading-[1.9] text-[var(--muted)] max-w-[420px] mb-[40px] font-light">
              Glamour Photographics, established by Hameed Hussain in 1982, has built a legacy of capturing the most meaningful moments for corporate clients and families across India.
            </p>
            <Link href="/about" className="inline-flex items-center gap-[12px] text-[10px] tracking-[0.3em] uppercase font-semibold pb-[4px] border-b border-[var(--light)] hover:border-[var(--gold)] hover:text-[var(--gold)] hover:gap-[20px] transition-all duration-300 cursor-none">
              Our Story <span>→</span>
            </Link>
          </div>

          {/* Right Column Grid */}
          <div className="grid grid-cols-2 gap-[2px] bg-[rgba(10,10,10,0.08)] stagger-children border border-[rgba(10,10,10,0.06)]">
            <div className="p-[40px] bg-[var(--dark)] hover:bg-[rgba(10,10,10,0.02)] transition-colors duration-300 relative group">
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--gold)] transition-all duration-300 group-hover:w-full"></div>
              <div className="font-serif text-[64px] md:text-[72px] line-height-[1] text-[var(--light)] font-light flex items-baseline lining-nums">
                <span>{experienceCount}</span><span className="text-[var(--gold)] font-medium text-[40px] ml-[2px]">+</span>
              </div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] mt-[10px] font-medium">Years of Experience</div>
            </div>
            
            <div className="p-[40px] bg-[var(--dark)] hover:bg-[rgba(10,10,10,0.02)] transition-colors duration-300 relative group">
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--gold)] transition-all duration-300 group-hover:w-full"></div>
              <div className="font-serif text-[64px] md:text-[72px] line-height-[1] text-[var(--light)] font-light flex items-baseline lining-nums">
                <span>{clientsCount}</span><span className="text-[var(--gold)] font-medium text-[40px] ml-[2px]">+</span>
              </div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] mt-[10px] font-medium">Clients Served</div>
            </div>
 
            <div className="p-[40px] bg-[var(--dark)] hover:bg-[rgba(10,10,10,0.02)] transition-colors duration-300 relative group">
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--gold)] transition-all duration-300 group-hover:w-full"></div>
              <div className="font-serif text-[64px] md:text-[72px] line-height-[1] text-[var(--light)] font-light flex items-baseline lining-nums">
                <span>{projectsCount}</span><span className="text-[var(--gold)] font-medium text-[40px] ml-[2px]">+</span>
              </div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] mt-[10px] font-medium">Corporate Projects</div>
            </div>
 
            <div className="p-[40px] bg-[var(--dark)] hover:bg-[rgba(10,10,10,0.02)] transition-colors duration-300 relative group">
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--gold)] transition-all duration-300 group-hover:w-full"></div>
              <div className="font-serif text-[64px] md:text-[72px] line-height-[1] text-[var(--light)] font-light flex items-baseline lining-nums">
                <span>{weddingsCount}</span><span className="text-[var(--gold)] font-medium text-[40px] ml-[2px]">+</span>
              </div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-[var(--muted)] mt-[10px] font-medium">Weddings Captured</div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 5. OUR STORY 1982 OVERLAPPING DESIGN ─── */}
      <section className="py-[160px] px-[8%] md:px-[10%] bg-[var(--dark)] relative border-b border-[rgba(10,10,10,0.06)]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[100px] items-center">
          
          {/* Left Column Overlapping Boxes */}
          <div className="relative h-[560px] md:h-[620px] w-full flex items-center justify-center reveal opacity-0 anim-fade-up">
            {/* Box 1 - Founder Portrait & Text Overlay */}
            <div className="absolute top-0 left-0 w-[82%] h-[400px] md:h-[480px] bg-[#0A0A0A] border border-[rgba(10,10,10,0.06)] rounded-sm overflow-hidden z-10 shadow-lg relative group">
              <img 
                src="/logo-clients/founder-ceo.jpg" 
                alt="Hameed Hussain Founder" 
                className="w-full h-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105 select-none pointer-events-none" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/35 to-transparent p-[32px] flex flex-col justify-end">
                <h4 className="font-serif text-[24px] text-white font-medium leading-none mb-[6px]">Hameed Hussain</h4>
                <p className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] font-bold mb-[16px]">Founder & Creative Visionary</p>
                <div className="w-[50px] h-[1px] bg-[var(--gold)] mb-[16px]"></div>
                <img 
                  src="/images/signature.png" 
                  alt="Founder Signature" 
                  className="h-[36px] w-auto select-none pointer-events-none invert opacity-95 self-start" 
                />
              </div>
            </div>

            {/* Box 2 - Overlapping Golden/Ivory Styled Panel */}
            <div className="absolute bottom-[20px] right-0 w-[55%] h-[160px] bg-[#FAF8F4] border border-[rgba(197,164,109,0.3)] rounded-sm p-[24px] flex flex-col justify-between z-20 shadow-xl backdrop-blur-md">
              <div className="w-full">
                <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] font-bold block mb-[4px]">Visual Legacy</span>
                <h5 className="font-serif text-[24px] text-[var(--light)] font-bold leading-none">Est. 1982</h5>
              </div>
              <p className="text-[12px] text-[var(--muted)] leading-relaxed font-light">Pioneering premium corporate imagery in Bangalore.</p>
            </div>
          </div>

          {/* Right Column Story Text */}
          <div className="reveal opacity-0 anim-fade-up delay-100">
            <div className="inline-flex items-center gap-[8px] bg-[rgba(197,164,109,0.08)] border border-[rgba(197,164,109,0.2)] rounded-full px-[14px] py-[6px] mb-[24px]">
              <span className="w-[6px] h-[6px] rounded-full bg-[var(--gold)]"></span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-[var(--gold)] font-bold">1982 — OUR ROOTS</span>
            </div>
            <h3 className="font-serif text-[clamp(36px,4.5vw,56px)] font-light leading-[1.1] text-[var(--light)] mb-[32px] tracking-[-0.01em]">
              Glamour Photographics
            </h3>
            <blockquote className="border-l-2 border-[var(--gold)] bg-[rgba(197,164,109,0.03)] p-[24px] pl-[28px] text-[15px] italic text-[var(--gold)] leading-relaxed mb-[32px] font-serif rounded-r-md">
              "Our goal is not to merely provide media services, but to serve people through the art of storytelling and media creation."
            </blockquote>
            <p className="text-[14.5px] leading-[1.85] text-[var(--muted)] mb-[36px] font-light">
              Established by Hameed Hussain in 1982, we embarked on a journey to introduce vibrant colour media solutions to businesses and consumers in Bengaluru—proudly serving the corporate and wedding industries ever since.
            </p>
            <Link href="/about" className="inline-flex items-center gap-[12px] text-[10px] tracking-[0.25em] uppercase text-[var(--light)] font-semibold hover:text-[var(--gold)] cursor-none transition-colors group pb-[4px] border-b border-[var(--light)] hover:border-[var(--gold)]">
              Read Our Story <span className="transition-transform duration-300 group-hover:translate-x-[4px]">→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ─── 7. FEATURED WORK (TABBED VIDEO PORTFOLIO) ─── */}
      <section ref={featuredWorkRef} className="py-[140px] px-[8%] md:px-[10%] bg-[var(--dark)] relative overflow-hidden">
        {/* Leaf Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat bg-center pointer-events-none opacity-[0.95] z-0 select-none mix-blend-multiply"
          style={{ backgroundImage: `url('/images/bg-Featured Work.png')` }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto">
          {/* Header Title */}
          <div className="text-center mb-[50px] reveal opacity-0 anim-fade-up">
            <div className="flex items-center justify-center gap-[12px] mb-[18px]">
              <div className="w-[12px] h-[1px] bg-[var(--gold)]"></div>
              <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] font-bold">Featured Work</span>
              <div className="w-[12px] h-[1px] bg-[var(--gold)]"></div>
            </div>
            
            <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-[var(--light)] mb-[20px] tracking-[-0.01em]">
              Stories We've <br className="sm:hidden" /> Brought to <span className="italic text-[var(--gold)] font-medium">Life</span>
            </h2>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-[6px] mb-[20px]">
              <div className="w-[20px] h-[1px] bg-[var(--gold)] opacity-50"></div>
              <span className="text-[8px] text-[var(--gold)]">◆</span>
              <div className="w-[20px] h-[1px] bg-[var(--gold)] opacity-50"></div>
            </div>

            <p className="text-[14px] leading-[1.8] text-[var(--muted)] max-w-[600px] mx-auto font-light">
              From corporate milestones to groundbreaking innovations, explore how we turn moments into powerful visual stories.
            </p>
          </div>

          {/* Navigation Category Tabs */}
          <div className="reveal opacity-0 anim-fade-up delay-100 flex flex-wrap items-center justify-center gap-x-[20px] gap-y-[16px] mb-[60px] max-w-[1000px] mx-auto border-b border-[rgba(10,10,10,0.06)] pb-[12px]">
            {Object.keys(featuredVideos).map((tab, idx, arr) => (
              <div key={tab} className="flex items-center gap-[20px]">
                <button 
                  suppressHydrationWarning
                  onClick={() => setActiveVideoTab(tab)}
                  className={`text-[10px] tracking-[0.25em] uppercase font-bold pb-[6px] relative cursor-none transition-colors duration-300 ${
                    activeVideoTab === tab ? 'text-[var(--gold)] font-bold' : 'text-[var(--muted)] font-medium hover:text-[var(--light)]'
                  }`}
                >
                  {tab}
                  {activeVideoTab === tab && <div className="absolute bottom-[-14px] left-0 w-full h-[2px] bg-[var(--gold)]" />}
                </button>
                {idx < arr.length - 1 && (
                  <span className="w-[1px] h-[12px] bg-[rgba(10,10,10,0.12)] hidden md:inline-block"></span>
                )}
              </div>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] max-w-[1200px] mx-auto reveal opacity-0 anim-fade-up delay-200">
            {((featuredVideos[activeVideoTab] || []).slice(0, showAllHomeVideos ? undefined : 2)).map((video, idx) => (
              <div 
                key={video.id}
                onClick={() => {
                  setActiveVideoId(video.id);
                  setShowreelOpen(true);
                }}
                className="group relative aspect-video rounded-[16px] overflow-hidden bg-black shadow-md cursor-none border border-[rgba(10,10,10,0.06)] hover:shadow-2xl transition-all duration-500"
              >
                {/* Thumbnail */}
                <img 
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                  alt={video.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-102 transition-all duration-700 select-none pointer-events-none"
                  onError={(e) => {
                    e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent z-10" />

                {/* Top Category Badge */}
                <div className="absolute top-[28px] left-[28px] z-20">
                  <span className="text-[9px] tracking-[0.25em] uppercase text-[var(--gold)] font-bold bg-black/35 backdrop-blur-md px-[12px] py-[6px] rounded-[4px] border border-[rgba(255,255,255,0.08)]">
                    {video.tag}
                  </span>
                </div>

                {/* Center Play Icon Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-[60px] h-[60px] rounded-full border border-white/90 flex items-center justify-center bg-white/10 backdrop-blur-md group-hover:scale-110 group-hover:bg-[var(--gold)] group-hover:border-transparent transition-all duration-300 shadow-md">
                    <Play className="w-[18px] h-[18px] fill-white text-white ml-[3px]" />
                  </div>
                </div>

                {/* Bottom Left Info Panel */}
                <div className="absolute bottom-[28px] left-[28px] right-[28px] z-20 flex flex-col pointer-events-none">
                  <div className="flex items-center gap-[8px] mb-[6px]">
                    <span className="text-[9px] tracking-[0.2em] font-bold text-[var(--gold)]">0{idx + 1}</span>
                    <div className="w-[16px] h-[1px] bg-[var(--gold)]"></div>
                  </div>
                  <h3 className="font-serif text-[24px] text-white leading-tight font-medium mb-[6px]">
                    {video.title}
                  </h3>
                  <p className="text-[12px] leading-relaxed text-white/70 max-w-[85%] font-light">
                    {video.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {!showAllHomeVideos && (featuredVideos[activeVideoTab] || []).length > 2 && (
            <div className="flex justify-center mt-[40px] reveal opacity-0 anim-fade-up">
              <button
                suppressHydrationWarning
                onClick={() => {
                  setShowAllHomeVideos(true);
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

          {/* Footer View All Link */}
          <div className="relative flex items-center justify-end mt-[80px] max-w-[1200px] mx-auto reveal opacity-0 anim-fade-up">
            <div className="absolute left-0 right-[260px] h-[1px] bg-[var(--gold)] opacity-30"></div>
            <Link 
              href="/portfolio?tab=VIDEOS" 
              className="text-[10px] tracking-[0.25em] uppercase font-bold text-[var(--gold)] hover:text-[var(--light)] cursor-none transition-colors duration-300 flex items-center gap-[12px] group relative pl-[24px]"
            >
              View All Portfolio <span className="transition-transform duration-300 group-hover:translate-x-[4px]">→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ─── 8b. WHAT WE DO (SERVICES CATEGORIES) ─── */}
      <section className="py-[140px] px-[8%] md:px-[10%] bg-[var(--darker)] border-t border-[rgba(10,10,10,0.06)] relative">
        {/* Header Title with Subtext */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-[80px] gap-[30px] max-w-[1200px] mx-auto reveal opacity-0 anim-fade-up">
          <div>
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block font-bold">Services Categories</span>
            <h2 className="font-serif text-[clamp(36px,4.5vw,54px)] font-light leading-[1.1] text-[var(--light)] tracking-[-0.01em]">
              What <span className="italic text-[var(--gold)] font-medium">We</span> Do
            </h2>
          </div>
          <div className="flex gap-[28px] max-w-[500px]">
            <div className="w-[1px] h-[60px] bg-[var(--gold)] opacity-35 hidden md:block"></div>
            <p className="text-[14px] leading-[1.8] text-[var(--muted)] font-light">
              From powerful corporate stories to once-in-a-lifetime celebrations, we create visuals that connect, engage and leave a lasting impact.
            </p>
          </div>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] max-w-[1200px] mx-auto reveal opacity-0 anim-fade-up delay-100">
          {[
            { id: "01", title: "Corporate Photography", icon: Camera, desc: "High-end corporate headshots, facility walkthroughs, products and branding campaigns.", bg: "/images/our_portfolio/cp-7.jpg", href: "/portfolio?tab=CLIENTS" },
            { id: "02", title: "Cinematic Videography", icon: Video, desc: "High-impact brand videos, showreels, office tour media and documentaries.", bg: "/images/our_portfolio/22.jpg", href: "/portfolio?tab=VIDEOS" },
            { id: "03", title: "Event Coverage", icon: Calendar, desc: "Premium documentation of corporate summits, conventions, and milestone ceremonies.", bg: "/images/our_portfolio/33.jpg", href: "/portfolio?tab=EVENTS" },
            { id: "04", title: "Aerial Shoots", icon: Aperture, desc: "Certified industrial drone flights mapping massive campuses and aerial geography.", bg: "/images/our_portfolio/rtx-1.jpg", href: "/portfolio?tab=INDUSTRIAL" },
            { id: "05", title: "Industrial Photography", icon: Building2, desc: "Raw visual documentation for factories, power plants, and technology infrastructure.", bg: "/images/our_portfolio/te3.jpg", href: "/portfolio?tab=INDUSTRIAL" },
            { id: "06", title: "Brand Storytelling", icon: Film, desc: "Custom scripting and visual conceptualization bringing corporate identity to life.", bg: "/images/our_portfolio/cp-12.jpg", href: "/portfolio?tab=DOCUMENTARY" },
          ].map((srv) => (
            <Link 
              href={srv.href}
              key={srv.id} 
              className="group relative p-[32px] md:p-[40px] rounded-[16px] overflow-hidden border border-black hover:border-[var(--gold)] hover:shadow-2xl transition-all duration-[500ms] cursor-none min-h-[340px] flex flex-col justify-between bg-black"
            >
              {/* Card Image Background */}
              <div className="absolute inset-0 z-0">
                <img src={srv.bg} alt={srv.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-65 group-hover:scale-102 transition-all duration-700 pointer-events-none select-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
              </div>

              {/* Flex Content Box (Stacked) */}
              <div className="relative z-10 w-full flex flex-col items-start">
                {/* Number */}
                <span className="font-serif text-[48px] font-light text-white/35 leading-none mb-[16px] block">
                  {srv.id}
                </span>
                
                {/* Icon */}
                <srv.icon className="w-[28px] h-[28px] text-[var(--gold)] mb-[20px] transition-transform duration-300 group-hover:scale-110" />
                
                {/* Title */}
                <h3 className="text-[22px] font-serif text-white mb-[12px] group-hover:text-[var(--gold)] transition-colors font-medium">
                  {srv.title}
                </h3>
                
                {/* Description */}
                <p className="text-[13px] text-white/70 leading-[1.65] font-light max-w-[90%]">
                  {srv.desc}
                </p>
              </div>
              
              {/* Bottom Right Arrow Button */}
              <div className="relative z-10 self-end w-[36px] h-[36px] rounded-full border border-[var(--gold)] flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white transition-all duration-300">
                <span className="text-[16px] leading-none">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── 9. OUR CLIENTS (CLIENTS PORTFOLIO) ─── */}
      <section className="py-[120px] px-[8%] md:px-[10%] bg-[var(--dark)]">
        <div className="text-center mb-[40px] reveal opacity-0 anim-fade-up">
          <h3 className="font-serif text-[24px] tracking-[0.2em] uppercase text-[var(--light)] font-bold mb-[12px]">
            Clients Portfolio
          </h3>
          <div className="w-[60px] h-[2px] bg-[var(--gold)] mx-auto"></div>
        </div>

        <div className="max-w-[1100px] mx-auto bg-white border border-[var(--gold)] border-opacity-70 rounded-[24px] p-[40px] md:p-[60px] py-[30px] md:py-[50px] shadow-[0_12px_40px_rgba(0,0,0,0.03)] reveal opacity-0 anim-fade-up delay-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[40px] gap-y-[40px] md:gap-y-[60px] items-center justify-items-center">
            {[
              { name: "CII", slug: "cii", logo: "/logo-clients/cii.png" },
              { name: "CGI", slug: "cgi", logo: "/logo-clients/cgi.png" },
              { name: "Toyota", slug: "toyota", logo: "/logo-clients/toyota.png" },
              { name: "RTX", slug: "rtx", logo: "/logo-clients/rtx.png" },
              { name: "TCS", slug: "tcs", logo: "/logo-clients/tcs.png" },
              { name: "TATA ELXSI", slug: "tata-elxsi", logo: "/logo-clients/tata-elxsi.png" },
              { name: "Presidency University", slug: "presidency", logo: "/logo-clients/presidency.png" },
              { name: "PAI", slug: "pai", logo: "/logo-clients/pai.png" }
            ].map((client, i) => (
              <Link 
                href={`/clients/${client.slug}`} 
                key={i} 
                className="w-full flex items-center justify-center p-[10px] md:p-[20px] transition-transform duration-300 hover:scale-105 cursor-none relative"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-[55px] md:max-h-[70px] max-w-full object-contain filter hover:brightness-95 transition-all duration-300 pointer-events-none select-none" 
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 10. OUR PORTFOLIO (Uniform Grid) ─── */}
      <section className="py-[120px] px-[8%] md:px-[10%] bg-[var(--darker)] border-y border-[rgba(10,10,10,0.06)]">
        <h3 className="text-[28px] font-serif text-[var(--light)] mb-[40px] reveal opacity-0 anim-fade-up">Our Portfolio</h3>
        <div className="flex flex-wrap gap-[30px] border-b border-[rgba(10,10,10,0.08)] pb-[15px] mb-[40px] reveal opacity-0 anim-fade-up delay-100">
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
              onClick={() => setActivePortfolioTab(tab.id)} 
              className={`text-[10px] tracking-[0.2em] uppercase pb-[15px] relative cursor-none ${activePortfolioTab === tab.id ? 'text-[var(--gold)]' : 'text-[var(--muted)] hover:text-[var(--light)]'}`}
            >
              {tab.label}
              {activePortfolioTab === tab.id && <div className="absolute bottom-[-16px] left-0 w-full h-[2px] bg-[var(--gold)]" />}
            </button>
          ))}
        </div>
        {(() => {
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
                      <div key={idx} className="relative aspect-[2/3] group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                        <img src={src} alt="Portfolio Work" className="w-full h-full transition-transform duration-[800ms] group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[20px]">
                          <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[8px]">Gallery Spotlight</span>
                          <h4 className="font-serif text-[16px] text-white">Visual Artifact</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {horizontals.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
                    {horizontals.map((src, idx) => (
                      <div key={idx} className="relative aspect-[3/2] group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                        <img src={src} alt="Portfolio Work" className="w-full h-full transition-transform duration-[800ms] group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[20px]">
                          <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[8px]">Gallery Spotlight</span>
                          <h4 className="font-serif text-[16px] text-white">Visual Artifact</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          const visibleBlocks = showAllHomeImages ? blocks : blocks.slice(0, 2);
          const hasMore = blocks.length > 2 || remainingVerticals.length > 0 || remainingHorizontals.length > 0;

          return (
            <div className="w-full flex flex-col gap-[24px]">
              {visibleBlocks.map((block, bIdx) => (
                <div key={bIdx} className="flex flex-col md:flex-row gap-[24px] items-stretch w-full">
                  {/* Left: 1 Vertical */}
                  <div className="w-full md:w-1/3 relative group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] min-h-[350px] md:min-h-0 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                    <img src={block.vertical} alt="Portfolio Work" className="absolute inset-0 w-full h-full transition-transform duration-[800ms] group-hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[30px]">
                      <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[8px]">Gallery Spotlight</span>
                      <h4 className="font-serif text-[18px] text-white">Visual Artifact</h4>
                    </div>
                  </div>
                  {/* Right: 4 Horizontal */}
                  <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
                    {block.horizontals.map((src, idx) => (
                      <div key={idx} className="relative aspect-[3/2] group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                        <img src={src} alt="Portfolio Work" className="w-full h-full transition-transform duration-[800ms] group-hover:scale-[1.03]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[20px]">
                          <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[8px]">Gallery Spotlight</span>
                          <h4 className="font-serif text-[16px] text-white">Visual Artifact</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Show remaining items only if showAllHomeImages is true */}
              {showAllHomeImages && (
                <>
                  {/* REMAINING VERTICALS */}
                  {remainingVerticals.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
                      {remainingVerticals.map((src, idx) => (
                        <div key={idx} className="relative aspect-[2/3] group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                          <img src={src} alt="Portfolio Work" className="w-full h-full transition-transform duration-[800ms] group-hover:scale-[1.03]" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[20px]">
                            <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[8px]">Gallery Spotlight</span>
                            <h4 className="font-serif text-[16px] text-white">Visual Artifact</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* REMAINING HORIZONTALS */}
                  {remainingHorizontals.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
                      {remainingHorizontals.map((src, idx) => (
                        <div key={idx} className="relative aspect-[3/2] group overflow-hidden rounded-sm border border-[rgba(10,10,10,0.06)] bg-[rgba(10,10,10,0.01)] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                          <img src={src} alt="Portfolio Work" className="w-full h-full transition-transform duration-[800ms] group-hover:scale-[1.03]" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[20px]">
                            <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] mb-[8px]">Gallery Spotlight</span>
                            <h4 className="font-serif text-[16px] text-white">Visual Artifact</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {/* Show More Button */}
              {!showAllHomeImages && hasMore && (
                <div className="flex justify-center mt-[40px] reveal opacity-0 anim-fade-up">
                  <button
                    suppressHydrationWarning
                    onClick={() => {
                      setShowAllHomeImages(true);
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


      {/* ─── 12. OUR TEAM ─── */}
      <section className="py-[120px] px-[8%] md:px-[10%] bg-[var(--darker)] border-y border-[rgba(10,10,10,0.06)]">
        <div className="mb-[60px] reveal opacity-0 anim-fade-up">
          <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">Minds Behind the Lenses</span>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-light leading-[1.2] text-[var(--light)]">Our Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] reveal opacity-0 anim-fade-up delay-100">
          {[
            { name: "Hameed Hussain", role: "Founder & Director", img: "/images/Hameed Hussain.png" },
            { name: "Anzar Hussain", role: "Creative Lead", img: "/images/anzar_hussain.png" },
            { name: "Zia Hussain", role: "Head of Operations", img: "/images/zia_hussain.png" }
          ].map((member, idx) => {
            const isPng = member.img.toLowerCase().endsWith('.png');
            return (
              <div 
                key={idx} 
                className="group relative rounded-[20px] overflow-hidden bg-[#1A1A1A] border border-[rgba(10,10,10,0.08)] transition-all duration-500 cursor-none flex flex-col h-[540px] shadow-lg"
              >
                {/* Image Box */}
                <div className={`absolute inset-0 z-0 transition-colors duration-500 ${isPng ? 'group-hover:bg-[#E50914]' : ''}`}>
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-[700ms] pointer-events-none select-none" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent z-10" />
                </div>

                {/* Top Left Quote Icon (Visible on Hover for PNG cards) */}
                {isPng && (
                  <div className="absolute top-[28px] left-[28px] z-20 font-serif text-[64px] text-[#FAF8F4] opacity-0 group-hover:opacity-20 leading-none select-none pointer-events-none transition-all duration-300">
                    “
                  </div>
                )}

                {/* Text Content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-[28px] pt-[60px] z-20 flex flex-col justify-end pointer-events-none">
                  <h3 className="font-serif text-[20px] text-white font-bold leading-tight mb-[4px] tracking-wide uppercase">
                    {member.name}
                  </h3>
                  <span className="text-[10px] tracking-[0.15em] text-white/70 font-semibold block uppercase">
                    ( {member.role} )
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── 13. WHAT OUR CLIENTS SAY (TESTIMONIALS LOGO CAROUSEL) ─── */}
      <section className="py-[120px] px-[8%] md:px-[10%] bg-[var(--dark)] border-t border-[rgba(10,10,10,0.06)]">
        <div className="max-w-[1200px] mx-auto reveal opacity-0 anim-fade-up">
          <div className="text-center mb-[40px]">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--gold)] mb-[12px] block font-medium">
              Associated Dignitaries —
            </span>
            <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-bold uppercase tracking-wider text-[var(--light)] mb-[16px]">
              Testimonials
            </h2>
            <div className="w-[80px] h-[2px] bg-[var(--gold)] mx-auto"></div>
          </div>
          
          <div className="w-full">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={2}
              loop={true}
              speed={600}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnHover: true
              }}
              breakpoints={{
                600: { slidesPerView: 4, spaceBetween: 24 },
                1024: { slidesPerView: 6, spaceBetween: 24 }
              }}
              className="logo-swiper py-[20px]"
            >
              {[
                { name: "Prince of Wales", logo: "/testimonials/logo-prince-of-wales.png", cert: "/testimonials/cert-prince-of-wales.jpg" },
                { name: "ITC Limited", logo: "/testimonials/logo-itc.jpg", cert: "/testimonials/cert-itc.jpg" },
                { name: "Univ. of Exeter", logo: "/testimonials/logo-exeter.png", cert: "/testimonials/cert-exeter.jpg" },
                { name: "Le Méridien", logo: "/testimonials/logo-le-meridian.png", cert: "/testimonials/cert-le-meridian.jpg" },
                { name: "Essae", logo: "/testimonials/logo-essae.png", cert: "/testimonials/cert-essae.jpg" },
                { name: "Baldwins", logo: "/testimonials/logo-baldwins.jpg", cert: "/testimonials/cert-baldwins.jpg" },
                { name: "BIAL", logo: "/testimonials/logo-bial.png", cert: "/testimonials/cert-bial.jpg" },
                { name: "GE", logo: "/testimonials/logo-ge.png", cert: "/testimonials/cert-ge.jpg" },
                { name: "DNA Networks", logo: "/testimonials/logo-dna-networks.png", cert: "/testimonials/cert-dna-networks.jpg" },
                { name: "Windsor Manor", logo: "/testimonials/logo-windsor-manor.png", cert: "/testimonials/cert-windsor-manor.jpg" }
              ].map((logo, idx) => (
                <SwiperSlide key={idx}>
                  <div 
                    onClick={() => setActiveCert(logo.cert)}
                    className="bg-white border border-[rgba(10,10,10,0.06)] p-[12px] rounded-sm h-[90px] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.01)] transition-all duration-300 hover:scale-105 hover:border-[var(--gold)] cursor-none"
                  >
                    <img 
                      src={logo.logo} 
                      alt={logo.name} 
                      className="max-h-[60px] max-w-[85%] object-contain" 
                      loading="lazy" 
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ─── 14. GET IN TOUCH (FOOTER FORM) ─── */}
      <section id="contact-section" className="py-[120px] px-[8%] md:px-[10%] bg-[var(--darker)] border-t border-[rgba(10,10,10,0.06)] grid grid-cols-1 lg:grid-cols-12 gap-[80px]">
        {/* Left Column: Contact Info */}
        <div className="lg:col-span-5 reveal opacity-0 anim-fade-up flex flex-col gap-[40px]">
          <div>
            <span className="text-[10px] tracking-[0.45em] uppercase text-[var(--gold)] mb-[16px] block">Start a Conversation</span>
            <h2 className="font-serif text-[clamp(32px,4vw,56px)] font-light leading-[1.2] text-[var(--light)]">Let's Create <br />Something Together</h2>
          </div>

          <div className="flex flex-col gap-[36px] mt-[20px]">
            {/* Headquarters */}
            <div className="flex gap-[18px] items-start">
              <span className="p-[12px] rounded-full bg-[rgba(212,175,55,0.08)] text-[var(--gold)] shrink-0">
                <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </span>
              <div>
                <h3 className="font-serif text-[20px] text-[var(--light)] mb-[6px] font-light">Studio Headquarters</h3>
                <p className="text-[13.5px] leading-[1.7] text-[var(--muted)] font-light">
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
                <h3 className="font-serif text-[20px] text-[var(--light)] mb-[12px] font-light">Contact Us</h3>
                <div className="flex flex-col gap-[12px]">
                  <div className="flex items-center gap-[12px] group">
                    <span className="p-[8px] rounded-full bg-[rgba(212,175,55,0.06)] text-[var(--gold)] group-hover:scale-110 transition-transform">
                      <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </span>
                    <a href="mailto:info@glamourphotographics.com" className="text-[13.5px] text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
                      info@glamourphotographics.com
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-[12px] group">
                    <span className="p-[8px] rounded-full bg-[rgba(10,102,194,0.06)] text-[#0A66C2] group-hover:scale-110 transition-transform">
                      <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.56 11.56 0 0 1 8.56 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1C3 13.39 10.61 21 20 21c.55 0 1-.45 1-1v-3.62c0-.55-.45-1-1-1z" />
                      </svg>
                    </span>
                    <a href="tel:+919845003786" className="text-[13.5px] text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
                      +91 98450 03786
                    </a>
                  </div>

                  <div className="flex items-center gap-[12px] group">
                    <span className="p-[8px] rounded-full bg-[rgba(37,211,102,0.06)] text-[#25D366] group-hover:scale-110 transition-transform">
                      <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.004 2C6.48 2 2.001 6.479 2.001 12c0 1.892.527 3.661 1.446 5.178L2 22l4.97-1.393A9.927 9.927 0 0 0 12.004 22c5.522 0 10.002-4.477 10.002-10S17.526 2 12.004 2zm0 18.002c-1.666 0-3.23-.443-4.595-1.217l-.328-.188-3.05.855.87-2.977-.208-.33a7.95 7.95 0 0 1-1.218-4.148c0-4.412 3.59-8.002 8.001-8.002 4.414 0 8.004 3.59 8.004 8.002-.001 4.413-3.591 8.003-8.004 8.003z"/>
                      </svg>
                    </span>
                    <a href="https://wa.me/918971168868" target="_blank" rel="noopener noreferrer" className="text-[13.5px] text-[var(--muted)] hover:text-[var(--gold)] transition-colors">
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
                <h3 className="font-serif text-[20px] text-[var(--light)] mb-[12px] font-light">Follow Us</h3>
                <div className="flex gap-[16px] items-center">
                  {[
                    {
                      name: 'Facebook',
                      url: 'https://www.facebook.com/p/Glamour-Photographics-100064007321571/',
                      color: '#1877F2',
                      svg: (
                        <svg className="w-[20px] h-[20px]" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                          <path fill="currentColor" d='M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z' />
                        </svg>
                      )
                    },
                    {
                      name: 'Instagram',
                      url: 'https://www.instagram.com/glamourphotographics.corporate?igsh=MTIzdjAzMW5tYW44cw',
                      color: '#E4405F',
                      svg: (
                        <svg className="w-[20px] h-[20px]" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                          <path fill="currentColor" d='M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z' />
                        </svg>
                      )
                    },
                    {
                      name: 'LinkedIn',
                      url: 'https://in.linkedin.com/company/glamour-photographics%20',
                      color: '#0A66C2',
                      svg: (
                        <svg className="w-[20px] h-[20px]" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                          <path fill="currentColor" d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
                        </svg>
                      )
                    },
                    {
                      name: 'YouTube',
                      url: 'https://www.youtube.com/@ashrafhussain136',
                      color: '#FF0000',
                      svg: (
                        <svg className="w-[20px] h-[20px]" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
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
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7 reveal opacity-0 anim-fade-up delay-100">
          <div className="bg-[rgba(10,10,10,0.02)] border border-[rgba(10,10,10,0.05)] rounded-lg p-[24px] sm:p-[40px] md:p-[50px] shadow-sm">
            <h3 className="font-serif text-[28px] text-[var(--light)] mb-[30px] font-light">Send us a message</h3>
            
            {homeStatus.submitted ? (
              <div className="flex flex-col items-center text-center py-[20px] reveal">
                <div className="w-[64px] h-[64px] rounded-full bg-[rgba(212,175,55,0.1)] flex items-center justify-center text-[var(--gold)] mb-[24px]">
                  <svg className="w-[32px] h-[32px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h4 className="font-serif text-[24px] text-[var(--light)] mb-[12px]">Inquiry Received!</h4>
                <p className="text-[14px] text-[var(--muted)] leading-relaxed max-w-[340px] mb-[32px]">
                  {homeStatus.info.msg || "Your message has been sent. Redirecting to WhatsApp to start a conversation..."}
                </p>
                <div className="flex flex-col sm:flex-row gap-[16px] w-full justify-center">
                  <a 
                    href={`https://wa.me/918971168868?text=${encodeURIComponent(
                      `Hello Glamour Photographics,\n\nI just submitted a contact inquiry from your Home page with the following details:\n\n*Name:* ${homeFormData.name}\n*Email:* ${homeFormData.email}\n*Phone:* ${homeFormData.phone || 'N/A'}\n*Message:* ${homeFormData.message}`
                    )}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-[10px] bg-[#25D366] text-white text-[11px] uppercase tracking-[0.2em] font-bold py-[16px] px-[28px] hover:bg-[#20ba59] transition-all duration-300 rounded-full shadow-sm"
                  >
                    Open WhatsApp Manually
                  </a>
                  <button 
                    onClick={resetHomeForm}
                    className="inline-flex items-center justify-center border-2 border-[var(--gold)] bg-transparent text-[var(--light)] hover:bg-[var(--gold)] hover:text-white transition-all duration-300 text-[11px] uppercase tracking-[0.2em] font-bold py-[14px] px-[28px] rounded-full"
                  >
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleHomeFormSubmit} className="flex flex-col gap-[24px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                  <div className="flex flex-col gap-[8px]">
                    <label className="text-[10px] tracking-[0.25em] uppercase text-[var(--light)] font-semibold">Your Name *</label>
                    <input 
                      suppressHydrationWarning
                      type="text" 
                      name="name"
                      value={homeFormData.name}
                      onChange={handleHomeInputChange}
                      className="bg-white border border-[rgba(10,10,10,0.08)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] rounded-md outline-none px-[16px] py-[12px] text-[14px] text-[var(--light)] transition-all duration-300 font-light" 
                      required 
                    />
                  </div>
                  <div className="flex flex-col gap-[8px]">
                    <label className="text-[10px] tracking-[0.25em] uppercase text-[var(--light)] font-semibold">Your Email *</label>
                    <input 
                      suppressHydrationWarning
                      type="email" 
                      name="email"
                      value={homeFormData.email}
                      onChange={handleHomeInputChange}
                      className="bg-white border border-[rgba(10,10,10,0.08)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] rounded-md outline-none px-[16px] py-[12px] text-[14px] text-[var(--light)] transition-all duration-300 font-light" 
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-[8px]">
                  <label className="text-[10px] tracking-[0.25em] uppercase text-[var(--light)] font-semibold">Phone Number</label>
                  <input 
                    suppressHydrationWarning
                    type="tel" 
                    name="phone"
                    value={homeFormData.phone}
                    onChange={handleHomeInputChange}
                    className="bg-white border border-[rgba(10,10,10,0.08)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] rounded-md outline-none px-[16px] py-[12px] text-[14px] text-[var(--light)] transition-all duration-300 font-light" 
                  />
                </div>

                <div className="flex flex-col gap-[8px]">
                  <label className="text-[10px] tracking-[0.25em] uppercase text-[var(--light)] font-semibold">Your Message *</label>
                  <textarea 
                    suppressHydrationWarning
                    rows="4" 
                    name="message"
                    value={homeFormData.message}
                    onChange={handleHomeInputChange}
                    className="bg-white border border-[rgba(10,10,10,0.08)] focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] rounded-md outline-none px-[16px] py-[12px] text-[14px] text-[var(--light)] transition-all duration-300 resize-none font-light" 
                    required
                  ></textarea>
                </div>

                {homeStatus.info.msg && homeStatus.info.error && (
                  <div className="text-red-500 text-[13px] font-medium transition-all">
                    {homeStatus.info.msg}
                  </div>
                )}

                <div className="mt-[10px]">
                  <button 
                    suppressHydrationWarning
                    type="submit" 
                    disabled={homeStatus.submitting}
                    className={`w-full md:w-auto text-center justify-center border-2 border-[var(--gold)] bg-transparent text-[var(--light)] hover:bg-[var(--gold)] hover:text-white transition-all duration-300 px-[40px] py-[14px] rounded-full uppercase tracking-[0.25em] text-[11px] font-semibold cursor-pointer shadow-sm hover:shadow-md ${
                      homeStatus.submitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {homeStatus.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ─── 15. SHOWREEL VIDEO MODAL OVERLAY ─── */}
      {showreelOpen && (
        <div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-[20px] transition-all">
          <button 
            suppressHydrationWarning
            onClick={() => setShowreelOpen(false)} 
            className="absolute top-[30px] right-[5%] md:right-[8%] text-white text-[12px] tracking-[0.2em] uppercase flex items-center gap-[8px] cursor-none hover:text-[var(--gold)]"
          >
            Close <X className="w-[16px] h-[16px]" />
          </button>
          <div className="w-full max-w-[1000px] aspect-video rounded-sm overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-2xl relative">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* ─── 16. TESTIMONIAL CERTIFICATE LIGHTBOX OVERLAY ─── */}
      {activeCert && (
        <div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-[20px] transition-all">
          <button 
            suppressHydrationWarning
            onClick={() => setActiveCert(null)} 
            className="absolute top-[30px] right-[5%] md:right-[8%] text-white text-[12px] tracking-[0.2em] uppercase flex items-center gap-[8px] cursor-none hover:text-[var(--gold)]"
          >
            Close <X className="w-[16px] h-[16px]" />
          </button>
          <div className="w-full max-w-[640px] max-h-[85vh] overflow-y-auto rounded-sm bg-white p-[8px] shadow-2xl relative flex items-center justify-center">
            <img 
              src={activeCert} 
              alt="Testimonial Certificate Form" 
              className="max-w-full max-h-[80vh] object-contain rounded-sm" 
              loading="lazy"
            />
          </div>
        </div>
      )}

    </main>
  );
}
