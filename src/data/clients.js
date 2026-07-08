// Client Data mapping
const imagesMap = require('../../images_map.json'); // Import the map we created

export const clientsData = {
  'cii': {
    name: 'Confederation of Indian Industry (CII)',
    featured: true,
    about: 'The Confederation of Indian Industry (CII) is India’s leading industry body, shaping the nation’s growth since 1895. With over 9,000 members and a presence across the globe, CII drives policy, innovation, sustainability, and competitiveness—bridging industry, government, and communities to build a stronger future.',
    ourWork: 'For more than 40 years, Glamour Photographics has been a trusted visual partner to CII. From high-impact event coverage to powerful storytelling videos, we’ve helped them showcase their vision of transforming knowledge into innovation, entrepreneurship, and economic growth.',
    quote: 'Four Decades of Capturing Industry Leadership',
    videos: ['https://www.youtube.com/embed/jlR54SuB_Rc'],
    images: imagesMap.cii || []
  },
  'cgi': {
    name: 'CGI',
    featured: true,
    about: 'CGI is one of the world’s largest independent IT and business consulting firms, founded in 1976 and headquartered in Montreal, Canada. With a workforce of 95,000+ professionals across 40+ countries, CGI delivers a comprehensive portfolio of services—from business consulting and systems integration to managed IT, cloud solutions, and cybersecurity. In the Asia-Pacific region, it maintains its largest global delivery presence, with over 15,000 consultants based in India, Malaysia, and the Philippines. The Bangalore office alone is a major hub supporting global clients across industries through deep technical expertise and local proximity.',
    ourWork: 'We collaborated with CGI to bring their Bangalore facility to life—through engaging visual content and corporate storytelling, spotlighting their cutting-edge infrastructure, consultative workplace environment, and the human side of digital transformation. Our visuals underscore CGI’s role as a trusted digital partner, empowering businesses worldwide.',
    quote: 'Capturing CGI’s Global-Local Digital Engine',
    videos: ['https://www.youtube.com/embed/t07kSRBHPfg'],
    images: imagesMap.cgi || []
  },
  'toyota': {
    name: 'Toyota Kirloskar Motor (TKM)',
    featured: false,
    about: 'Toyota Kirloskar Motor (TKM), a joint venture between Toyota Motor Corporation (89%) and the Kirloskar Group (11%), has been a cornerstone of India’s automotive industry since 1997. Headquartered in Bidadi, Karnataka, TKM operates two plants with a combined capacity of over 300,000 vehicles annually—producing favorites like Innova, Fortuner, Camry Hybrid, and Urban Cruiser Hyryder. Renowned for its pioneering role in safety, sustainability, and customer-first innovation, TKM also leads in CSR, skills development, and green manufacturing initiatives.',
    ourWork: 'Glamour Photographics has had the privilege of capturing TKM’s impactful journey—including documentary storytelling on the transformation of GHBS Hejala school. From highlighting TKM’s commitment to inclusive education and infrastructure revival to bringing their CSR narrative to life, our visuals showcase the human and community-centric side of automotive excellence.',
    quote: 'Driving Change—On the Road and in Communities',
    videos: ['https://www.youtube.com/embed/e5J2v1UtFW4'],
    images: imagesMap.our_portfolio.slice(0, 10) // Placeholder since no specific folder
  },
  'tcs': {
    name: 'Tata Consultancy Services (TCS)',
    featured: false,
    about: 'TCS is one of the world’s largest IT services and consulting companies, headquartered in Mumbai and part of the Tata Group. With over 600,000 employees across 55 countries, TCS partners with global enterprises to deliver digital transformation, technology consulting, and innovative solutions. In FY 2024-25, TCS achieved revenues of over US $30 billion, continuing its position as a global IT powerhouse.',
    ourWork: 'At Glamour Photographics, we have partnered with TCS to capture their corporate milestones, leadership events, and brand visuals. Our team has created high-quality videos and photo documentation that reflect TCS’s innovative culture, people-centric approach, and commitment to digital excellence. Whether it’s executive interviews, corporate celebrations, or technology showcases, our visuals bring out the human side of technology—helping TCS share their story with clients, partners, and global teams.',
    quote: 'Framing the Future of Technology with TCS',
    videos: [],
    images: imagesMap.tcs || []
  },
  'rtx': {
    name: 'RTX Corporation',
    featured: false,
    about: 'RTX, formerly Raytheon Technologies, is a global aerospace and defense leader headquartered in Arlington, Virginia. Formed in 2020, RTX brings together renowned names—Collins Aerospace, Pratt & Whitney, and Raytheon—under one roof. In 2024, RTX reported revenues of approximately $80.7 billion, with a workforce of around 186,000 professionals around the world. Through its advanced systems, RTX plays a critical role in aviation, defense, space, and intelligence—supporting nearly 90% of U.S. Department of Defense and commercial space launches, protecting around 50% of the world’s population, and saving over a billion gallons of fuel through its aviation technologies.',
    ourWork: 'At the Aero Show 2025 (held on February 10–12), we captured RTX\'s latest innovations, showcasing their leading-edge aerospace technologies, live demonstrations, and executive interactions. Our photography and videography bring to life the company’s bold narrative of innovation, sustainability, and global defense leadership.',
    quote: 'Spotlighting RTX’s Aerospace Leadership in Flight',
    videos: [],
    images: imagesMap.rtx || []
  },
  'tata-elxsi': {
    name: 'Tata Elxsi',
    featured: true,
    about: 'Tata Elxsi, founded in 1989 in Bangalore, is a global leader in design and technology services, operating across industries like automotive, healthcare, media, telecommunications, and aerospace. With over 13,000 employees spanning 36+ locations, the company empowers businesses with an AI-first, design-led approach—integrating design thinking with emerging technologies like IoT, cloud, AI, and VR to reimagine products and experiences. Tata Elxsi is forging India’s future in aerospace and unmanned systems—recently signing major MoUs with Garuda Aerospace for a Centre of Excellence in indigenous UAV design, and with CSIR-NAL to pioneer urban air mobility and eVTOL innovations.',
    ourWork: 'We had the privilege of visually documenting Tata Elxsi’s cutting-edge UAV journey—highlighting their nature-inspired Orca-designed drones equipped with AI autonomy, rugged engineering, and scalable, manufacturing-ready architecture. Our corporate video and imagery bring their innovation narrative to life—showcasing how they blend biomimicry, AI, and engineering excellence to redefine aerial technology.',
    quote: '',
    videos: ['https://www.youtube.com/embed/SpD8AeoLTXw'],
    images: imagesMap.tata_elxsi || []
  },
  'presidency': {
    name: 'Presidency University & Schools, Bangalore',
    featured: true,
    about: 'Part of the prestigious Presidency Group of Institutions—an educational legacy since 1976—Presidency University is one of Bengaluru’s leading private universities. With modern infrastructure, research-driven learning, and a student base of 21,000+, the University and its schools are known for academic excellence, holistic growth, and global outlook.',
    ourWork: 'As a trusted creative partner, we’ve captured the essence of Presidency University and Schools across multiple touchpoints—covering marquee events, cultural festivals, academic ceremonies, and promotional campaigns. Our videos and compelling visual storytelling reflect the institution’s vibrant spirit, innovative pedagogy, and its community values of excellence, empathy, and empowerment.',
    quote: 'Framing Learning, Celebrating Legacy',
    videos: [
      'https://www.youtube.com/embed/doOSgmHHgD4',
      'https://www.youtube.com/embed/df1A-_FulEs',
      'https://www.youtube.com/embed/XulH5TjS50k',
      'https://www.youtube.com/embed/cImmLgZo9-Y'
    ],
    images: imagesMap.presidency || []
  },
  'pai': {
    name: 'PAI International Electronics Ltd.',
    featured: false,
    about: 'Founded in 2000 and headquartered in Bengaluru, PAI International Electronics Ltd. has emerged as one of South India’s top multi-brand consumer electronics and appliance retailers. Boasting over 200 retail outlets across Andhra Pradesh, Telangana, and Karnataka—including stores for mobiles, electronics, appliances, and furniture—the company is known for delivering seamless omni-channel shopping experiences through both digital platforms and physical showrooms. Renowned global brands like Apple, Samsung, LG, Dell, and HP are part of its extensive product portfolio. PAI also delights customers with unique initiatives like the “Lowest Price Challenge” and quarterly “Pai Genuine Lucky Coupon Draw” promotions.',
    ourWork: 'We’ve worked closely with PAI to create dynamic digital advertisements, powerful corporate visuals, and a compelling documentary centered around their brand journey and customer engagement strategies. Our creative storytelling brings their customer-first vision and retail innovation to life—reinforcing PAI’s position as a trusted and modern electronics retail leader.',
    quote: 'Showcasing Retail Innovation, One Frame at a Time',
    videos: [
      'https://www.youtube.com/embed/C0hzCKpITSE',
      'https://www.youtube.com/embed/xzKI4XmfFus',
      'https://www.youtube.com/embed/av9FhaYzDuA'
    ],
    images: imagesMap.our_portfolio.slice(10, 20) // Placeholder
  }
};
