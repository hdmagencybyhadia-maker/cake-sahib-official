/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Menu, ShoppingBag, Heart, Star, MapPin, Clock, Instagram, Phone, ChevronRight, Crown, Video } from 'lucide-react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

// Cinematic Assets
import mainLogoIcon from './assets/images/regenerated_image_1778269061405.png';
import redVelvetCakeImg from './assets/images/regenerated_image_1778268371906.webp';
import pineappleCakeImg from './assets/images/regenerated_image_1778268730196.jpg';
import rusticPineappleCakeImg from './assets/images/regenerated_image_1778274411431.jpg';
import rusticChocolateCakeImg from './assets/images/regenerated_image_1778271393772.jpg';
import freshDonutImg from './assets/images/regenerated_image_1778274801132.jpg';
import experienceImg from './assets/images/regenerated_image_1778421341085.png';
import vanillaCakeImg from './assets/images/regenerated_image_1778436603076.jpg';
import fruitCakeImg from './assets/images/regenerated_image_1778437001047.jpg';
import marbleCakeImg from './assets/images/regenerated_image_1778676112884.jpg';
import customizedCakeImg from './assets/images/regenerated_image_1778684733597.png';

const VIDEOS = {
  hero: "https://assets.mixkit.co/videos/preview/mixkit-freshly-baked-bread-in-a-bakery-4100-large.mp4",
  showcase: "https://assets.mixkit.co/videos/preview/mixkit-decorating-a-cake-with-fruit-4099-large.mp4",
  pricing: "https://assets.mixkit.co/videos/preview/mixkit-pouring-chocolate-on-a-cake-4101-large.mp4"
};

const PRICE_LIST = [
  { id: 2, category: "Menu", name: "Customized Cake", price: "1400", unit: "/ lb", urdu: "کسٹمائزڈ کیک", image: customizedCakeImg },
  { id: 4, category: "Menu", name: "Red Velvet Cake", price: "2000", unit: "/ lb", urdu: "ریڈ وایلویٹ کیک", image: redVelvetCakeImg },
  { id: 5, category: "Menu", name: "Pineapple Cake", price: "1200", unit: "/ lb", urdu: "رنگین عید کیک", image: pineappleCakeImg },
  { id: 6, category: "Menu", name: "Chocolate Cake", price: "1500", unit: "/ lb", urdu: "کٹھائی میٹھی کیک", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800" },
  { id: 11, category: "Menu", name: "Nutella Malt Cake", price: "3000", unit: "/ lb", urdu: "نٹیلا مالٹ کیک", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800" },
  { id: 13, category: "Menu", name: "Full Fondant Cake", price: "1500", unit: "/ lb", urdu: "فل فونڈنٹ کیک", image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=800" },
  { id: 1, category: "Menu", name: "Simple Cupcake", price: "100", unit: "", urdu: "سادہ کپ کیک", image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=800" },
  { id: 12, category: "Menu", name: "Customized Cupcake", price: "150", unit: "", urdu: "کسٹمائزڈ کپ کیک", image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=800" },
  { id: 9, category: "Menu", name: "Rustic Sliced tea cake (Pineapple)", price: "750", unit: "/ lb", urdu: "رسٹک سلائسڈ ٹی کیک (پائن ایپل)", image: rusticPineappleCakeImg },
  { id: 8, category: "Menu", name: "Rustic Sliced tea cake (Chocolate)", price: "750", unit: "/ lb", urdu: "رسٹک سلائسڈ ٹی کیک (چاکلیٹ)", image: rusticChocolateCakeImg },
  { id: 3, category: "Menu", name: "Fresh Donut", price: "150", unit: "", urdu: "تازہ ڈونٹس", image: freshDonutImg },
  { id: 15, category: "Menu", name: "Vanilla Cake", price: "750", unit: "/ lb", urdu: "ونیلا کیک", image: vanillaCakeImg },
  { id: 16, category: "Menu", name: "Fruit Cake", price: "500", unit: "/ lb", urdu: "فروٹ کیک", image: fruitCakeImg },
  { id: 14, category: "Menu", name: "Cookies", price: "1000", unit: "/ kg", urdu: "کوکیز", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=800" },
  { id: 17, category: "Menu", name: "Marble Cake", price: "800", unit: "/ lb", urdu: "ماربل کیک", image: marbleCakeImg },
  { id: 18, category: "Menu", name: "Doll Cake", price: "1200", unit: "/ lb", urdu: "ڈول کیک", image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&q=80&w=800" }
];

const ADDONS = [
  { name: "Custom Message", price: "Free", urdu: "اپنی تحریر لکھوائیں", image: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&q=80&w=400" },
  { name: "Premium Topper", price: "Rs. 200", urdu: "پریمیم ٹاپر", image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=400" },
  { name: "Gift Wrapping", price: "Rs. 150", urdu: "گفٹ پیکنگ", image: "https://images.unsplash.com/photo-1549465220-1d8c9ded9584?auto=format&fit=crop&q=80&w=400" },
  { name: "Sparkle Candles", price: "Rs. 100", urdu: "جادوئی موم بتی", image: "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?auto=format&fit=crop&q=80&w=400" }
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <MainApp />
    </HashRouter>
  );
}

function MainApp() {
  const [isMuted, setIsMuted] = useState(true);
  const [currentSubtitle, setCurrentSubtitle] = useState(1);
  const [scrolled, setScrolled] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const filteredProducts = PRICE_LIST;
  const location = useLocation();

  const subtitles = [
    "Taste the Future: Where Every Bite is a Masterpiece."
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full m-0 p-0 overflow-x-hidden min-h-screen bg-[#1a0033] selection:bg-bakery-gold selection:text-white flex flex-col items-center">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-4 md:px-6 py-4 flex items-center justify-between ${scrolled ? 'bg-[#1a0033]/90 backdrop-blur-xl shadow-lg border-b border-white/5' : 'bg-transparent text-white'}`}>
        <div className="flex items-center gap-8">
          <Menu className="w-6 h-6 cursor-pointer hover:text-bakery-gold transition-colors" />
          <Link 
            to="/"
            className="flex items-center gap-4 cursor-pointer group/nav-logo text-white"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-bakery-gold/30 p-1 overflow-hidden bg-bakery-gold/5 flex-shrink-0">
               <div className="w-full h-full rounded-full overflow-hidden border border-bakery-gold/10">
                 <img 
                  src={mainLogoIcon} 
                  alt="Logo Icon" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/nav-logo:scale-110"
                  referrerPolicy="no-referrer"
                />
               </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-serif text-bakery-gold font-bold tracking-tight uppercase group-hover:text-white transition-all leading-none">Cake Sahib</span>
              <span className="text-xs text-white/40 font-bold tracking-[0.3em] uppercase mt-1">Established 2020</span>
            </div>
          </Link>
          <div className="hidden lg:flex gap-8 font-bold text-base tracking-[0.2em] uppercase text-white/60">
            {['Collections', 'Menu', 'Our Story', 'Boutique', 'Journal'].map(item => (
              <a key={item} href="#" className="hover:text-bakery-gold transition-all relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-bakery-gold transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:03120402140" className="hidden md:flex items-center gap-2 text-sm font-bold tracking-widest text-white hover:text-bakery-gold transition-colors">
            <Phone className="w-4 h-4" /> 03120402140
          </a>

          <div className="relative text-white">
            <ShoppingBag className="w-6 h-6 cursor-pointer hover:text-bakery-gold transition-colors" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-bakery-gold text-[#1a0033] text-[11px] flex items-center justify-center rounded-full border border-white/20 shadow-lg font-bold">3</span>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <Routes location={location}>
          <Route path="/" element={
            <div className="page-wrapper">
              {/* Hero Section */}
              <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-24">
                <div className="absolute inset-0 z-0">
                  <video 
                    autoPlay 
                    loop 
                    muted={isMuted}
                    playsInline
                    onLoadedData={() => setIsVideoLoaded(true)}
                    className={`w-full h-full object-cover transition-opacity duration-2000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <source src={VIDEOS.hero} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-[#0c001a]/50" />
                  <div className="absolute inset-0 cinematic-vignette" />
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-5xl">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                    className="relative z-10 flex flex-col items-center px-4 mt-8 md:mt-20"
                  >
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                      className="mb-4 relative"
                    >
                      <div className="w-28 h-28 md:w-48 md:h-48 rounded-full border-2 border-bakery-gold/30 p-2 relative group overflow-hidden">
                        <div className="w-full h-full rounded-full border border-bakery-gold/20 overflow-hidden bg-bakery-gold/5 backdrop-blur-sm">
                           <img 
                            src={mainLogoIcon} 
                            alt="Signature Cake" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-transparent to-bakery-gold/20 mix-blend-overlay pointer-events-none" />
                      </div>
                    </motion.div>

                    <motion.h1 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                      className="text-3xl sm:text-6xl md:text-9xl font-serif text-white font-bold tracking-tighter mb-4 md:mb-8 drop-shadow-2xl"
                    >
                      <span className="text-white/80 font-light block text-lg sm:text-3xl md:text-6xl mb-1 md:mb-4 italic tracking-[0.2em] sm:tracking-[0.4em]">Welcome to</span>
                      <span className="text-bakery-gold drop-shadow-[0_0_30px_rgba(197,160,89,0.4)]">Cake Sahib</span>
                    </motion.h1>

                    <div className="w-12 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-bakery-gold to-transparent mb-6 md:mb-8" />
                    
                    <span className="uppercase tracking-[0.2em] md:tracking-[0.8em] text-[10px] md:text-2xl font-bold text-bakery-gold mb-2 md:mb-4 block drop-shadow-lg relative z-10 opacity-80">HOME BAKERS • Since 2020</span>
                    <span className="text-white/60 text-[7px] md:text-xs tracking-widest uppercase block relative z-10 italic">Please place your order at least 2 days in advance</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-3 lg:gap-6"
                  >
                    <a href="https://wa.me/923120402140" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-4 md:px-10 md:py-6 border border-[#25D366]/40 bg-[#25D366]/5 hover:bg-[#25D366]/10 backdrop-blur-md rounded-full font-bold tracking-widest uppercase text-[10px] md:text-sm text-[#25D366] transition-all shadow-xl flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4 md:w-6 md:h-6" /> Contact
                    </a>

                    <a href="https://instagram.com/cake_sahib" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-4 md:px-10 md:py-6 border border-white/20 hover:bg-white/5 backdrop-blur-md rounded-full font-bold tracking-widest uppercase text-[10px] md:text-sm text-white transition-all shadow-xl flex items-center justify-center gap-2">
                       <Instagram className="w-4 h-4 md:w-6 md:h-6" /> Instagram
                    </a>

                    <a 
                      href={`https://wa.me/923120402140?text=${encodeURIComponent("Hello! I am interested in your online baking classes. Please provide more details.")}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full sm:w-auto px-6 py-4 md:px-10 md:py-6 border border-bakery-gold/40 bg-bakery-gold/10 hover:bg-bakery-gold/20 backdrop-blur-md rounded-full font-bold tracking-widest uppercase text-[10px] md:text-sm text-bakery-gold transition-all shadow-xl flex items-center justify-center gap-2 group/btn"
                    >
                       <Video className="w-4 h-4 md:w-6 md:h-6 group-hover/btn:scale-110 transition-transform" /> Online Class Available
                    </a>

                    <div className="w-full sm:w-auto px-6 py-4 md:px-10 md:py-6 border border-bakery-gold/20 bg-bakery-gold/5 backdrop-blur-md rounded-full font-bold tracking-widest uppercase text-[10px] md:text-sm text-bakery-gold shadow-xl flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4 md:w-6 md:h-6 opacity-50" /> +92 312 0402140
                    </div>
                  </motion.div>


                </div>

                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute bottom-8 right-8 z-20 p-4 border border-white/10 rounded-full bg-white/5 backdrop-blur-md text-white/60 hover:text-white hover:bg-white/10 transition-all group"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </section>

              {/* Experience Section */}
              <section className="py-20 md:py-32 bg-[#1a0033] w-full">
                <div className="w-full px-5 md:px-10 lg:px-20 flex flex-col items-center">
                  <div className="w-full max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2 space-y-8 flex flex-col items-center lg:items-start">
                      <header className="space-y-4 flex flex-col items-center lg:items-start">
                        <span className="text-bakery-gold uppercase tracking-[0.5em] text-[9px] font-bold">The Craft</span>
                        <h3 className="text-4xl md:text-6xl font-serif text-white tracking-tight leading-[0.9] text-center lg:text-left">Beyond <br /><span className="italic font-light text-pink-300">Confectionery</span></h3>
                      </header>
                      <p className="text-[12px] md:text-lg text-white/70 font-light leading-relaxed max-w-md text-center lg:text-left">
                        We bake every layer with<br /> passion and precision,<br /> creating customized royal cakes<br /> for your unique celebrations.
                      </p>
                    </div>
                    <div className="lg:w-1/2 relative max-w-[300px] sm:max-w-md lg:max-w-none mx-auto lg:mx-0">
                       <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl bg-bakery-gold/5 group border-4 border-white/5">
                         <img 
                           src={experienceImg} 
                           alt="Experience the Craft" 
                           className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                           referrerPolicy="no-referrer"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-[#1a0033]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                       </div>
                    </div>
                  </div>
                </div>
              </div>
              </section>

              {/* Visionary Section */}
              <section className="py-32 bg-[#0c001a] relative overflow-hidden w-full">
                <div className="w-full px-5 md:px-10 lg:px-20 relative z-10 flex flex-col items-center">
                  <div className="max-w-3xl text-center space-y-6">
                    <span className="text-bakery-gold uppercase tracking-[0.5em] text-[8px] md:text-[10px] font-bold">Our Legacy</span>
                    <h3 className="text-2xl md:text-5xl font-serif text-white">The Heart of <span className="italic font-light text-bakery-gold text-3xl md:text-6xl">Cake Sahib</span></h3>
                    <p className="text-white/70 text-[13px] md:text-2xl font-light leading-relaxed px-4 mx-auto max-w-2xl">
                      Our journey began over<br /> three decades ago with<br /> a simple mission: to transform<br /> the finest ingredients<br /> into royal masterpieces.
                    </p>
                  </div>
                </div>
              </section>

              {/* Menu Section (Re-integrated) */}
              {/* Menu Section - Reimagined with Luxury Grid */}
              <section id="menu" className="py-24 md:py-48 bg-[#0c001a] relative overflow-hidden w-full">
                {/* Modern Background Accents - Scaled for Mobile */}
                <div className="absolute -top-12 -right-12 md:-top-24 md:-right-24 w-[20rem] h-[20rem] md:w-[50rem] md:h-[50rem] bg-pink-900/10 rounded-full blur-[80px] md:blur-[140px] opacity-30" />
                <div className="absolute -bottom-24 -left-24 md:-bottom-48 md:-left-48 w-[15rem] h-[15rem] md:w-[40rem] md:h-[40rem] bg-bakery-gold/10 rounded-full blur-[60px] md:blur-[120px] opacity-20" />
                
                <div className="w-full px-4 md:px-10 lg:px-20 relative z-10 flex flex-col items-center">
                  <div className="w-full max-w-7xl">
                    <header className="mb-20 md:mb-32 text-center relative">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                      >
                        <span className="text-bakery-gold uppercase tracking-[0.8em] text-[10px] md:text-xs font-bold mb-4 block">Gourmet Selection</span>
                        <h3 className="text-3xl md:text-7xl font-serif text-white tracking-tighter relative z-10">
                          The <span className="italic text-bakery-gold font-light">Cake Collection</span>
                        </h3>
                        <div className="w-24 h-[1px] bg-bakery-gold/30 mx-auto mt-8 flex items-center justify-center">
                          <Crown className="w-3 h-3 text-bakery-gold -mt-[1.5px]" />
                        </div>
                      </motion.div>
                      
                      {/* Decorative text scaled to fit mobile */}
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] sm:text-[10rem] md:text-[20rem] font-serif text-white/[0.02] select-none pointer-events-none uppercase tracking-widest whitespace-nowrap">
                        Excellence
                      </span>
                    </header>

                    <div className="w-full max-w-6xl mx-auto">
                      {/* Stylized Outer Container "Box" */}
                      <div className="bg-white/[0.02] border border-white/10 rounded-[1.5rem] md:rounded-[3rem] p-3 md:p-10 backdrop-blur-xl relative shadow-2xl overflow-hidden mb-12 w-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-bakery-gold/5 via-transparent to-purple-900/5 pointer-events-none" />
                        
                        <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4 md:gap-8 w-full max-w-[320px] md:max-w-none mx-auto place-items-center">
                          {filteredProducts.map((item, idx) => (
                            <motion.div
                              key={item.id}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.05, duration: 0.6 }}
                              className="group relative w-full flex justify-center"
                            >
                              <a 
                                href={`https://wa.me/923120402140?text=${encodeURIComponent(`Hello! I would like to order the ${item.name} (${item.urdu}) from your menu.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center gap-2 md:gap-4 bg-white/[0.03] border border-white/5 hover:border-bakery-gold/40 rounded-[1rem] md:rounded-[2rem] p-2 md:p-6 transition-all duration-500 w-full md:w-full max-w-[150px] md:max-w-none text-center relative backdrop-blur-sm group-hover:bg-bakery-gold/[0.05] overflow-hidden"
                              >
                                {/* Glow effect inside individual item box */}
                                <div className="absolute inset-0 bg-gradient-to-b from-bakery-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                
                                {/* Product Image - Centered on top */}
                                <div className="relative w-14 h-14 md:w-28 md:h-28 rounded-full md:rounded-[1.5rem] overflow-hidden shadow-2xl border border-white/10 group-hover:border-bakery-gold/30 transition-all duration-700">
                                  <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                                  />
                                </div>

                                {/* Product Content - Below image */}
                                <div className="flex flex-col items-center space-y-1 md:space-y-3 relative z-10 w-full">
                                  <div className="flex flex-col items-center justify-center w-full">
                                    <h4 className="text-[11px] md:text-xl font-serif text-white group-hover:text-bakery-gold transition-colors leading-tight">
                                      {item.name}
                                    </h4>
                                    <p className="text-[7px] md:text-sm text-white/40 italic font-medium tracking-wide mt-0.5">
                                      {item.urdu}
                                    </p>
                                  </div>
                                  
                                  <div className="h-[1px] w-8 md:w-24 bg-gradient-to-r from-transparent via-bakery-gold/30 to-transparent" />
                                  
                                  <div className="flex flex-col items-center gap-0.5">
                                    <div className="text-bakery-gold font-bold text-sm md:text-2xl tracking-tighter">
                                      Rs.{item.price}
                                    </div>
                                    <div className="text-[6px] md:text-xs text-white/20 uppercase tracking-[0.2em] font-light">
                                      per {item.unit || "item"}
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-center gap-1.5 md:gap-4 text-[6px] md:text-[10px] text-white/40 font-medium pt-0.5">
                                    <span className="flex items-center gap-1.5">
                                      <div className="w-1 h-1 rounded-full bg-bakery-gold" />
                                      Fresh
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                      <div className="w-1 h-1 rounded-full bg-bakery-gold" />
                                      Premium
                                    </span>
                                  </div>
                                </div>

                                {/* Action Icon */}
                                <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 hidden md:block">
                                  <ChevronRight className="w-6 h-6 text-bakery-gold/50" />
                                </div>
                              </a>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Order Section */}
              <section className="py-32 bg-[#0c001a] w-full">
                <div className="w-full px-5 md:px-10 lg:px-20 flex flex-col items-center">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative rounded-[2rem] md:rounded-[4rem] overflow-hidden aspect-video md:aspect-[21/9] min-h-[300px] md:min-h-[400px] shadow-2xl flex items-center"
                  >
                    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                      <source src={VIDEOS.pricing} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-[#0c001a]/40 backdrop-blur-[2px]" />
                    
                    <div className="relative z-10 p-6 md:p-24 max-w-2xl mx-auto text-center flex flex-col items-center">
                      <span className="text-bakery-gold uppercase tracking-[0.4em] md:tracking-[0.5em] text-[9px] md:text-[12px] font-bold mb-3 md:mb-6 block">Order via WhatsApp</span>
                      <h3 className="text-2xl md:text-6xl font-serif text-white mb-6 md:mb-8 leading-tight italic">
                        "ہماری میٹھاس، <br />آپ کی خوشیاں"
                      </h3>
                      <a 
                        href="https://wa.me/923120402140" 
                        target="_blank" 
                        className="inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-12 md:py-5 bg-[#25D366] hover:bg-white hover:text-[#25D366] rounded-full text-[9px] md:text-xs font-bold uppercase tracking-widest transition-all shadow-xl group mb-6"
                      >
                        Connect Now 
                        <ChevronRight className="w-3.5 h-3.5 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                      </a>

                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex flex-col items-center gap-2"
                      >
                        <div className="flex flex-col sm:flex-row items-center gap-2 bg-black/40 border border-white/10 rounded-xl px-4 py-2 backdrop-blur-sm">
                          <div className="text-[7px] md:text-[9px] font-bold tracking-[0.2em] uppercase">
                            Designed & Developed by <span className="text-bakery-gold">Muhammad Bin Nadeem</span>
                          </div>
                          <a 
                            href="https://www.instagram.com/c.h_m.u.h.a.m.m.a.d?igsh=Y3Bra2o4ZW5icTgy" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-pink-400 hover:text-pink-300 transition-colors text-[7px] md:text-[9px] font-bold uppercase tracking-tight"
                          >
                            <Instagram className="w-3 h-3" /> Instagram
                          </a>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </section>
            </div>
          } />
        </Routes>
      </AnimatePresence>

      {/* Premium Footer */}
      <footer className="py-24 bg-[#080015] text-white border-t border-white/5 w-full">
        <div className="w-full px-5 md:px-10 lg:px-20 flex flex-col items-center">
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="md:col-span-2 space-y-8">
              <div className="flex flex-col">
                <span className="text-4xl font-serif text-bakery-gold font-bold tracking-tight mb-2">Cake Sahib</span>
                <span className="text-[12px] text-bakery-gold tracking-[0.5em] font-bold uppercase mb-1">Established 2020</span>
                <div className="h-[1px] w-12 bg-bakery-gold/40 mb-3" />
                <p className="text-white/60 text-sm font-light tracking-widest uppercase">The Royal Art of Confectionery</p>
              </div>
              <p className="text-white/40 font-light leading-relaxed max-w-sm text-base">
                Crafting royal delicacies since 2020. Every creation is a masterpiece designed to elevate your celebrations with timeless taste.
              </p>
              <div className="flex gap-4">
                 <a href="https://instagram.com/cake_sahib" className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-bakery-gold transition-colors group">
                  <Instagram className="w-5 h-5 group-hover:text-bakery-gold" />
                 </a>
              </div>
            </div>

            <div className="space-y-6">
              <h5 className="text-[13px] font-bold uppercase tracking-widest text-bakery-gold">Quick Links</h5>
              <ul className="space-y-4 text-base text-white/50 font-light">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h5 className="text-[13px] font-bold uppercase tracking-widest text-bakery-gold">Boutique Info</h5>
              <ul className="space-y-4 text-base text-white/50 font-light">
                <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-bakery-gold" /> Rahim Yar Khan, Pakistan</li>
                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-bakery-gold" /> 03120402140</li>
                <li className="flex items-center gap-3"><Clock className="w-4 h-4 text-bakery-gold" /> 10:00 AM - 10:00 PM</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] tracking-[0.4em] uppercase">
            <div className="opacity-30">
              <p>© 2026 Cake Sahib Artisanal Group. All Rights Reserved.</p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-end gap-3"
            >
              <div className="flex flex-col sm:flex-row items-center gap-3 bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-3 backdrop-blur-sm group hover:bg-white/[0.06] transition-all">
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-[8px] text-white/30 tracking-[0.4em] uppercase font-bold mb-0.5">Project Architect</span>
                  <span className="text-white text-[10px] font-bold tracking-widest uppercase">Designed & Developed by <span className="text-bakery-gold">Muhammad Bin Nadeem</span></span>
                </div>
                <a 
                  href="https://www.instagram.com/c.h_m.u.h.a.m.m.a.d?igsh=Y3Bra2o4ZW5icTgy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-600/10 text-pink-300 border border-pink-600/20 hover:bg-pink-600/20 hover:scale-105 transition-all text-[9px] font-bold uppercase tracking-widest"
                >
                  <Instagram className="w-3.5 h-3.5" /> Follow Developer
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      </footer>
    </div>
  );
}

