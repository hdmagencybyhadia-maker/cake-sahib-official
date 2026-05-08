/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Menu, ShoppingBag, Heart, Star, MapPin, Clock, Instagram, Phone, ChevronRight, Crown } from 'lucide-react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

// Cinematic Assets
import mainLogoIcon from './assets/images/regenerated_image_1778269061405.png';
import redVelvetCakeImg from './assets/images/regenerated_image_1778268371906.webp';
import pineappleCakeImg from './assets/images/regenerated_image_1778268730196.jpg';
import rusticPineappleCakeImg from './assets/images/regenerated_image_1778274411431.jpg';
import rusticChocolateCakeImg from './assets/images/regenerated_image_1778271393772.jpg';

const VIDEOS = {
  hero: "https://assets.mixkit.co/videos/preview/mixkit-freshly-baked-bread-in-a-bakery-4100-large.mp4",
  showcase: "https://assets.mixkit.co/videos/preview/mixkit-decorating-a-cake-with-fruit-4099-large.mp4",
  pricing: "https://assets.mixkit.co/videos/preview/mixkit-pouring-chocolate-on-a-cake-4101-large.mp4"
};

const PRICE_LIST = [
  { id: 2, category: "Menu", name: "Customized Cake", price: "1400", unit: "/ lb", urdu: "کسٹمائزڈ کیک", image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&q=80&w=800" },
  { id: 4, category: "Menu", name: "Red Velvet Cake", price: "2000", unit: "/ lb", urdu: "ریڈ وایلویٹ کیک", image: redVelvetCakeImg },
  { id: 5, category: "Menu", name: "Pineapple Cake", price: "1200", unit: "/ lb", urdu: "رنگین عید کیک", image: pineappleCakeImg },
  { id: 6, category: "Menu", name: "Chocolate Cake", price: "1500", unit: "/ lb", urdu: "کٹھائی میٹھی کیک", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800" },
  { id: 11, category: "Menu", name: "Nutella Malt Cake", price: "3000", unit: "/ lb", urdu: "نٹیلا مالٹ کیک", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800" },
  { id: 13, category: "Menu", name: "Full Fondant Cake", price: "1500", unit: "/ lb", urdu: "فل فونڈنٹ کیک", image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=800" },
  { id: 1, category: "Menu", name: "Simple Cupcake", price: "100", unit: "", urdu: "سادہ کپ کیک", image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=800" },
  { id: 12, category: "Menu", name: "Customized Cupcake", price: "150", unit: "", urdu: "کسٹمائزڈ کپ کیک", image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=800" },
  { id: 9, category: "Menu", name: "Rustic Sliced tea cake (Pineapple)", price: "750", unit: "/ lb", urdu: "رسٹک سلائسڈ ٹی کیک (پائن ایپل)", image: rusticPineappleCakeImg },
  { id: 8, category: "Menu", name: "Rustic Sliced tea cake (Chocolate)", price: "750", unit: "/ lb", urdu: "رسٹک سلائسڈ ٹی کیک (چاکلیٹ)", image: rusticChocolateCakeImg },
  { id: 3, category: "Menu", name: "Fresh Donut", price: "150", unit: "", urdu: "تازہ ڈونٹس", image: "https://images.unsplash.com/photo-1551024681-a535daad60b9?auto=format&fit=crop&q=80&w=800" }
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
    <div className="min-h-screen bg-[#1a0033] selection:bg-bakery-gold selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 py-4 flex items-center justify-between ${scrolled ? 'bg-[#1a0033]/90 backdrop-blur-xl shadow-lg border-b border-white/5' : 'bg-transparent text-white'}`}>
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
            {['Collections', 'Atelier', 'Our Story', 'Boutique', 'Journal'].map(item => (
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
              <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
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
                    className="relative z-10 flex flex-col items-center px-4 mt-12 md:mt-20"
                  >
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                      className="mb-4 relative"
                    >
                      <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-bakery-gold/30 p-2 relative group overflow-hidden">
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
                      className="text-4xl sm:text-6xl md:text-9xl font-serif text-white font-bold tracking-tighter mb-6 md:mb-8 drop-shadow-2xl"
                    >
                      <span className="text-white/80 font-light block text-xl sm:text-3xl md:text-6xl mb-2 md:mb-4 italic tracking-[0.2em] sm:tracking-[0.4em]">Welcome to</span>
                      <span className="text-bakery-gold drop-shadow-[0_0_30px_rgba(197,160,89,0.4)]">Cake Sahib</span>
                    </motion.h1>

                    <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-bakery-gold to-transparent mb-6 md:mb-8" />
                    
                    <span className="uppercase tracking-[0.3em] md:tracking-[0.8em] text-sm md:text-2xl font-bold text-bakery-gold mb-4 block drop-shadow-lg relative z-10 opacity-80">Royal Patisserie • Since 2020</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-12 flex flex-wrap items-center justify-center gap-4 lg:gap-6"
                  >
                    <a href="https://wa.me/923120402140" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-6 border border-[#25D366]/40 bg-[#25D366]/5 hover:bg-[#25D366]/10 backdrop-blur-md rounded-full font-bold tracking-widest uppercase text-sm text-[#25D366] transition-all shadow-xl flex items-center justify-center gap-2">
                      <Phone className="w-6 h-6" /> Contact
                    </a>

                    <a href="https://instagram.com/cake_sahib" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-6 border border-white/20 hover:bg-white/5 backdrop-blur-md rounded-full font-bold tracking-widest uppercase text-sm text-white transition-all shadow-xl flex items-center justify-center gap-2">
                       <Instagram className="w-6 h-6" /> Instagram
                    </a>

                    <div className="w-full sm:w-auto px-10 py-6 border border-bakery-gold/20 bg-bakery-gold/5 backdrop-blur-md rounded-full font-bold tracking-widest uppercase text-sm text-bakery-gold shadow-xl flex items-center justify-center gap-2">
                      <Phone className="w-6 h-6 opacity-50" /> +92 312 0402140
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
              <section className="py-32 bg-[#1a0033]">
                <div className="container mx-auto px-6">
                  <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2 space-y-10">
                      <header className="space-y-4">
                        <span className="text-bakery-gold uppercase tracking-[0.5em] text-[10px] font-bold">The Craft</span>
                        <h3 className="text-5xl md:text-7xl font-serif text-white tracking-tight leading-[0.9]">Beyond <br /><span className="italic font-light text-pink-300">Confectionery</span></h3>
                      </header>
                      <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-lg">
                        At Cake Sahib, we believe that a cake is not just a dessert; it is the center of your celebration. Every layer is baked with precision, every frosting applied with passion, and every detail customized to tell your unique story.
                      </p>
                    </div>
                    <div className="lg:w-1/2 relative">
                       <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-bakery-gold/5">
                         {/* Image or Video removed as per request */}
                       </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Visionary Section */}
              <section className="py-32 bg-[#0c001a] relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                  <div className="max-w-3xl mx-auto text-center space-y-8">
                    <span className="text-bakery-gold uppercase tracking-[0.5em] text-[10px] font-bold">Our Legacy</span>
                    <h3 className="text-4xl md:text-6xl font-serif text-white">The Heart of <span className="italic font-light text-bakery-gold text-5xl md:text-7xl">Cake Sahib</span></h3>
                    <p className="text-white/70 text-xl md:text-2xl font-light leading-relaxed">
                      Our journey began over three decades ago with a simple mission: to transform the finest ingredients into royal masterpieces.
                    </p>
                  </div>
                </div>
              </section>

              {/* Menu Section (Re-integrated) */}
              <section id="menu" className="py-24 md:py-40 bg-[#0c001a] relative overflow-hidden">
                <div className="absolute top-1/4 left-0 w-[40rem] h-[40rem] bg-purple-900/10 rounded-full blur-[120px] -translate-x-1/2" />
                <div className="container mx-auto px-6 relative z-10">
                  <div className="max-w-6xl mx-auto">
                    <header className="mb-20 text-center space-y-4">
                      <span className="text-bakery-gold uppercase tracking-[0.6em] text-[10px] font-bold">Menu Collection</span>
                      <h3 className="text-5xl md:text-7xl font-serif text-white tracking-tight">Our <span className="italic text-bakery-gold/80 font-light">Menu</span></h3>
                      <div className="w-20 h-[1px] bg-bakery-gold/30 mx-auto mt-6" />
                    </header>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 max-w-4xl mx-auto px-4">
                      {filteredProducts.map((item, idx) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="flex flex-col items-center text-center group"
                        >
                          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 border border-white/10 group-hover:border-bakery-gold/50 transition-colors bg-white/5">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          </div>
                          <div className="space-y-1">
                            <span className="text-sm font-bold text-white/20 block mb-1">Item {String(idx + 1).padStart(2, '0')}</span>
                            <p className="text-sm text-bakery-gold/50 italic">{item.urdu}</p>
                            <h4 className="text-xl md:text-2xl font-serif text-white group-hover:text-bakery-gold transition-colors">{item.name}</h4>
                          </div>
                          <p className="mt-2 text-bakery-gold font-light tracking-widest text-base md:text-lg">Rs. {item.price}</p>
                          <a 
                            href={`https://wa.me/923120402140?text=${encodeURIComponent(`Hello! I would like to order the ${item.name} (${item.urdu}) from your menu.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 text-xs font-bold text-white uppercase tracking-[0.2em] hover:text-bakery-gold transition-colors"
                          >
                            Order Now
                          </a>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Order Section */}
              <section className="py-32 bg-[#0c001a]">
                <div className="container mx-auto px-6">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative rounded-[4rem] overflow-hidden aspect-[21/9] min-h-[400px] shadow-2xl flex items-center"
                  >
                    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                      <source src={VIDEOS.pricing} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0c001a] via-[#0c001a]/60 to-transparent" />
                    
                    <div className="relative z-10 p-12 md:p-24 max-w-2xl">
                      <span className="text-bakery-gold uppercase tracking-[0.5em] text-[12px] font-bold mb-6 block">Order via WhatsApp</span>
                      <h3 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight italic">
                        "ہماری میٹھاس، <br />آپ کی خوشیاں"
                      </h3>
                      <a 
                        href="https://wa.me/923120402140" 
                        target="_blank" 
                        className="inline-flex items-center gap-4 px-12 py-5 bg-[#25D366] hover:bg-white hover:text-[#25D366] rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-xl group"
                      >
                        Connect Now 
                        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </section>
            </div>
          } />
        </Routes>
      </AnimatePresence>

      {/* Premium Footer */}
      <footer className="py-24 bg-[#080015] text-white border-t border-white/5">
        <div className="container mx-auto px-6">
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
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] tracking-[0.4em] uppercase opacity-30">
            <p>© 2026 Cake Sahib Artisanal Group. All Rights Reserved.</p>
            <div className="flex gap-12 font-bold italic text-bakery-gold text-center text-sm">
              Handcrafted with Love
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

