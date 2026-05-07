/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Menu, ShoppingBag, Heart, Star, MapPin, Clock, Instagram, Phone, ChevronRight } from 'lucide-react';

// Cinematic Assets
const VIDEOS = {
  hero: "https://assets.mixkit.co/videos/preview/mixkit-freshly-baked-bread-in-a-bakery-4100-large.mp4",
  showcase: "https://assets.mixkit.co/videos/preview/mixkit-decorating-a-cake-with-fruit-4099-large.mp4",
  pricing: "https://assets.mixkit.co/videos/preview/mixkit-pouring-chocolate-on-a-cake-4101-large.mp4"
};

const PRICE_LIST = [
  { id: 2, category: "Menu", name: "Customized Cake", price: "1400", unit: "/ lb", urdu: "کسٹمائزڈ کیک", image: "https://images.unsplash.com/photo-1535254844612-9c176709841b?auto=format&fit=crop&q=80&w=800" },
  { id: 4, category: "Menu", name: "Red Velvet Cake", price: "2000", unit: "/ lb", urdu: "ریڈ وایلویٹ کیک", image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&q=80&w=800" },
  { id: 5, category: "Menu", name: "Pineapple Cake", price: "1200", unit: "/ lb", urdu: "پائن ایپل کیک", image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=800" },
  { id: 6, category: "Menu", name: "Chocolate Cake", price: "1500", unit: "/ lb", urdu: "چاکلیٹ کیک", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800" },
  { id: 11, category: "Menu", name: "Nutella Malt Cake", price: "3000", unit: "/ lb", urdu: "نٹیلا مالٹ کیک", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800" },
  { id: 13, category: "Menu", name: "Full Fondant Cake", price: "1500", unit: "/ lb", urdu: "فل فونڈنٹ کیک", image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=800" },
  { id: 1, category: "Menu", name: "Simple Cupcake", price: "100", unit: "", urdu: "سادہ کپ کیک", image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=800" },
  { id: 12, category: "Menu", name: "Customized Cupcake", price: "150", unit: "", urdu: "کسٹمائزڈ کپ کیک", image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=800" },
  { id: 3, category: "Menu", name: "Fresh Donut", price: "150", unit: "", urdu: "تازہ ڈونٹس", image: "https://images.unsplash.com/photo-1551024681-a535daad60b9?auto=format&fit=crop&q=80&w=800" },
  { id: 8, category: "Menu", name: "Rustic Sliced tea cake (Chocolate)", price: "750", unit: "/ lb", urdu: "رسٹک سلائسڈ ٹی کیک (چاکلیٹ)", image: "https://images.unsplash.com/photo-1601662528567-526cd06f6582?auto=format&fit=crop&q=80&w=800" },
  { id: 9, category: "Menu", name: "Rustic Sliced tea cake (Pineapple)", price: "750", unit: "/ lb", urdu: "رسٹک سلائسڈ ٹی کیک (پائن ایپل)", image: "https://images.unsplash.com/photo-1549440386-880c1032df38?auto=format&fit=crop&q=80&w=800" }

];

const ADDONS = [
  { name: "Custom Message", price: "Free", urdu: "اپنی تحریر لکھوائیں", image: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&q=80&w=400" },
  { name: "Premium Topper", price: "Rs. 200", urdu: "پریمیم ٹاپر", image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=400" },
  { name: "Gift Wrapping", price: "Rs. 150", urdu: "گفٹ پیکنگ", image: "https://images.unsplash.com/photo-1549465220-1d8c9ded9584?auto=format&fit=crop&q=80&w=400" },
  { name: "Sparkle Candles", price: "Rs. 100", urdu: "جادوئی موم بتی", image: "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?auto=format&fit=crop&q=80&w=400" }
];

export default function App() {
  const [isMuted, setIsMuted] = useState(true);
  const [currentSubtitle, setCurrentSubtitle] = useState(1);
  const [scrolled, setScrolled] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const filteredProducts = PRICE_LIST;

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
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <img src="input_file_9.png" alt="Cake Sahib Logo" className="h-10 w-10 object-contain" />
            <h1 className="text-xl font-serif font-bold tracking-tight text-white">
              CAKE <span className="text-bakery-gold italic font-medium">Sahib</span>
            </h1>
          </motion.div>
          <div className="hidden lg:flex gap-8 font-medium text-[10px] tracking-[0.2em] uppercase text-white/60">
            {['Collections', 'Atelier', 'Our Story', 'Boutique', 'Journal'].map(item => (
              <a key={item} href="#" className="hover:text-bakery-gold transition-all relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-bakery-gold transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:03120402140" className="hidden md:flex items-center gap-2 text-xs font-bold tracking-widest text-white hover:text-bakery-gold transition-colors">
            <Phone className="w-4 h-4" /> 03120402140
          </a>

          <div className="relative text-white">
            <ShoppingBag className="w-6 h-6 cursor-pointer hover:text-bakery-gold transition-colors" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-bakery-gold text-white text-[10px] flex items-center justify-center rounded-full border border-white/20 shadow-lg font-bold">3</span>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Video Experience */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Cinematic Backdrop Video */}
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
          {!isVideoLoaded && (
            <img src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-[#0c001a]/50" />
          <div className="absolute inset-0 cinematic-vignette" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl bg-[#1a0033]/40 backdrop-blur-[10px] p-8 md:p-16 rounded-[4rem] border border-white/10 shadow-2xl overflow-hidden">
          {/* Visible Logo Backdrop */}
          <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
            <img src="input_file_9.png" alt="" className="w-full h-full object-contain scale-125 md:scale-150 rotate-6" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center"
          >
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              src="input_file_9.png" 
              alt="Cake Sahib Logo" 
              className="w-24 h-24 md:w-36 md:h-36 object-contain mb-6 drop-shadow-2xl" 
            />

            <span className="uppercase tracking-[0.5em] text-[10px] font-bold text-bakery-gold mb-4 block drop-shadow-lg relative z-10">Cake Sahib • Est. 1994</span>
            <h2 className="text-5xl md:text-[8rem] font-serif font-light mb-6 leading-[0.9] drop-shadow-2xl relative z-10">
              <span className="text-white/90">Welcome to</span> <br />
              <span className="italic font-normal text-bakery-gold">Cake Sahib</span>
            </h2>
          </motion.div>

          <AnimatePresence mode="wait">
            {currentSubtitle > 0 && currentSubtitle <= subtitles.length && (
              <motion.div
                key={currentSubtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="mt-8 relative z-10"
              >
                 <p className="text-lg md:text-xl text-white/80 font-light tracking-wide max-w-xl mx-auto leading-relaxed">
                  {subtitles[currentSubtitle - 1]}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
          >
            <button className="w-full md:w-auto px-10 py-4 bg-bakery-gold text-white rounded-full font-bold tracking-widest uppercase text-[10px] transition-all shadow-2xl hover:bg-white hover:text-bakery-gold hover:scale-105 active:scale-95 group">
              View Collection
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>
            <a href="https://instagram.com/cake_sahib" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto px-10 py-4 border border-white/20 hover:bg-white/5 backdrop-blur-md rounded-full font-bold tracking-widest uppercase text-[10px] text-white transition-all shadow-xl flex items-center justify-center gap-2">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-[9px] tracking-[0.4em] font-bold text-white/30 uppercase leading-none">Scroll to Explore</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent opacity-20"></div>
        </motion.div>

        {/* Volume Control */}
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-8 right-8 z-20 p-4 border border-white/10 rounded-full bg-white/5 backdrop-blur-md text-white/60 hover:text-white hover:bg-white/10 transition-all group"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </section>

      {/* Rebuilt Menu Section */}
      <section id="menu" className="py-24 md:py-40 bg-[#0c001a] relative overflow-hidden">
        {/* Artistic Background blobs */}
        <div className="absolute top-1/4 left-0 w-[40rem] h-[40rem] bg-purple-900/10 rounded-full blur-[120px] -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-[40rem] h-[40rem] bg-bakery-gold/5 rounded-full blur-[120px] translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <header className="mb-20 text-center space-y-4">
              <span className="text-bakery-gold uppercase tracking-[0.6em] text-[10px] font-bold">Selected Delicacies</span>
              <h3 className="text-5xl md:text-7xl font-serif text-white tracking-tight">Our <span className="italic text-bakery-gold/80 font-light">Menu</span></h3>
              <div className="w-20 h-[1px] bg-bakery-gold/30 mx-auto mt-6" />
            </header>

            {/* Product Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="group"
                  >
                    <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-[#0c001a] border border-white/10 shadow-2xl transition-all duration-700 hover:shadow-bakery-gold/20 hover:-translate-y-2">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      
                      {/* Price Tag Overlay */}
                      <div className="absolute top-6 right-6 px-5 py-2 bg-black/60 backdrop-blur-xl border border-white/20 rounded-full">
                        <p className="text-white text-sm font-bold tracking-tighter">
                          Rs. <span className="text-lg">{item.price}</span>
                          <span className="text-[10px] text-white/50 ml-1 font-medium">{item.unit}</span>
                        </p>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c001a] via-transparent to-transparent flex flex-col justify-end p-8">
                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <p className="text-[10px] font-urdu text-bakery-gold/80 font-bold mb-1 tracking-widest uppercase">{item.urdu}</p>
                          <h4 className="text-2xl font-serif text-white mb-4 leading-none">{item.name}</h4>
                          
                          <button className="w-full py-4 bg-white/10 hover:bg-bakery-gold border border-white/10 hover:border-bakery-gold text-white rounded-2xl text-[9px] uppercase tracking-[0.3em] font-bold transition-all flex items-center justify-center gap-2 backdrop-blur-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-500 delay-75">
                            <ShoppingBag className="w-3 h-3" /> Add to Order
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialized Content Section: Experience */}
      <section className="py-32 bg-[#1a0033]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-10">
              <header className="space-y-4">
                <span className="text-bakery-gold uppercase tracking-[0.5em] text-[10px] font-bold">The Craft</span>
                <h3 className="text-5xl md:text-7xl font-serif text-white tracking-tight leading-[0.9]">Beyond <br /><span className="italic font-light text-pink-300">Confectionery</span></h3>
              </header>
              <p className="text-lg text-white/60 font-light leading-relaxed max-w-lg">
                At Cake Sahib, we believe that a cake is not just a dessert; it is the center of your celebration. Every layer is baked with precision, every frosting applied with passion, and every detail customized to tell your unique story.
              </p>
              <div className="flex gap-12 pt-6">
                <div>
                  <p className="text-3xl font-serif text-white mb-2">100%</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Natural Ingredients</p>
                </div>
                <div className="w-[1px] h-12 bg-white/10" />
                <div>
                  <p className="text-3xl font-serif text-white mb-2">24h</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Freshly Baked</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
               <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                 <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                   <source src={VIDEOS.showcase} type="video/mp4" />
                 </video>
                 <div className="absolute inset-0 bg-purple-900/20" />
               </div>
               {/* Floating Badge */}
               <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-bakery-gold rounded-full flex items-center justify-center p-8 text-center text-white border-8 border-[#1a0033] shadow-2xl">
                 <p className="text-sm font-serif italic font-medium leading-tight">"A legacy of sweetness since 1994"</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Re-imagined Contact Section */}
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
              <span className="text-bakery-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Order via WhatsApp</span>
              <h3 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight italic">
                "ہماری میٹھاس، <br />آپ کی خوشیاں"
              </h3>
              <a 
                href="https://wa.me/923120402140" 
                target="_blank" 
                className="inline-flex items-center gap-4 px-12 py-5 bg-[#25D366] hover:bg-white hover:text-[#25D366] rounded-full text-[10px] font-bold uppercase tracking-widest transition-all shadow-xl group"
              >
                Connect Now 
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="py-24 bg-[#080015] text-white border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="md:col-span-2 space-y-8">
              <div className="flex items-center gap-4">
                <img src="input_file_9.png" alt="Cake Sahib Logo" className="h-16 w-16 object-contain" />
                <h2 className="text-3xl font-serif font-bold tracking-tighter uppercase">CAKE <span className="text-bakery-gold italic font-medium">Sahib</span></h2>
              </div>
              <p className="text-white/40 font-light leading-relaxed max-w-sm text-sm">
                Crafting royal delicacies since 1994. Every creation is a masterpiece designed to elevate your celebrations with timeless taste.
              </p>
              <div className="flex gap-4">
                 <a href="https://instagram.com/cake_sahib" className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-bakery-gold transition-colors group">
                  <Instagram className="w-5 h-5 group-hover:text-bakery-gold" />
                 </a>
              </div>
            </div>

            <div className="space-y-6">
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-bakery-gold">Quick Links</h5>
              <ul className="space-y-4 text-sm text-white/50 font-light">
                <li><a href="#" className="hover:text-white transition-colors">Our Boutique</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Artisan Profile</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-bakery-gold">Boutique Info</h5>
              <ul className="space-y-4 text-sm text-white/50 font-light">
                <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-bakery-gold" /> Lahore, Pakistan</li>
                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-bakery-gold" /> 03120402140</li>
                <li className="flex items-center gap-3"><Clock className="w-4 h-4 text-bakery-gold" /> 10:00 AM - 10:00 PM</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] tracking-[0.4em] uppercase opacity-30">
            <p>© 2026 Cake Sahib Artisanal Group. All Rights Reserved.</p>
            <div className="flex gap-12 font-bold italic text-bakery-gold">
              Handcrafted with Love
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
