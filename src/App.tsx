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
  { id: 1, name: "Simple Cupcake", price: "Rs. 100", urdu: "سادہ کپ کیک", image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=400" },
  { id: 2, name: "Customized Cupcake", price: "Rs. 150", urdu: "کسٹمائزڈ کپ کیک", image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=400" },
  { id: 3, name: "Fresh Donut", price: "Rs. 100", urdu: "تازہ ڈونٹس", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=400" },
  { id: 4, name: "Velvet Cake", price: "Rs. 1500 / lb", urdu: "وایلویٹ کیک", image: "https://images.unsplash.com/photo-1586788680434-30d324671ff6?auto=format&fit=crop&q=80&w=400" },
  { id: 5, name: "Pineapple Cake", price: "Rs. 1000 / lb", urdu: "پائن ایپل کیک", image: "https://images.unsplash.com/photo-1464347744102-11db6282f854?auto=format&fit=crop&q=80&w=400" },
  { id: 6, name: "Chocolate Cake", price: "Rs. 1000 / lb", urdu: "چاکلیٹ کیک", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400" },
  { id: 7, name: "Artisanal Pastry", price: "Rs. 100", urdu: "پیسٹری (چاکلیٹ یا پلین)", image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=400" }
];

const CATEGORIES = [
  { id: 'wedding', name: 'Wedding Cake', desc: 'Elegant tiered masterpieces', price: 'Rs. 3500 (2 lb)', image: 'https://images.unsplash.com/photo-1535254973040-607b474cb8c2?auto=format&fit=crop&q=80&w=600' },
  { id: 'graduation', name: 'Graduation Cake', desc: 'Celebrate your achievement', price: 'Rs. 3200 (2 lb)', image: 'https://images.unsplash.com/photo-1546173159-3197463194e8?auto=format&fit=crop&q=80&w=600' },
  { id: 'him', name: 'Cake for Him', desc: 'Bold and stylish designs', price: 'Rs. 3000 (2 lb)', image: 'https://images.unsplash.com/photo-1530631673369-bc20fdb3228d?auto=format&fit=crop&q=80&w=600' },
  { id: 'her', name: 'Cake for Her', desc: 'Chic and beautiful creations', price: 'Rs. 3000 (2 lb)', image: 'https://images.unsplash.com/photo-1562233237-1065544a415a?auto=format&fit=crop&q=80&w=600' },
  { id: 'bridal', name: 'Bridal Shower', desc: 'Premium themed cakes', price: 'Rs. 3200 (2 lb)', image: 'https://images.unsplash.com/photo-1525129415307-e836e6761048?auto=format&fit=crop&q=80&w=600' },
  { id: 'baby-shower', name: 'Baby Shower', desc: 'Sweet surprises for parents', price: 'Rs. 3200 (2 lb)', image: 'https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&q=80&w=600' },
  { id: 'welcome', name: 'Welcome Cake', desc: 'Warm greetings in every bite', price: 'Rs. 3000 (2 lb)', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=600' },
  { id: 'baby-girl', name: 'Baby Girl', desc: 'Delicate pink perfections', price: 'Rs. 3500 (2 lb)', image: 'https://images.unsplash.com/photo-1501746739755-b44c38243621?auto=format&fit=crop&q=80&w=600' },
  { id: 'baby-boy', name: 'Baby Boy', desc: 'Classic blue celebrations', price: 'Rs. 3500 (2 lb)', image: 'https://images.unsplash.com/photo-1510076857177-74701761fe4d?auto=format&fit=crop&q=80&w=600' }
];

export default function App() {
  const [isMuted, setIsMuted] = useState(true);
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const subtitles = [
    "Welcome to Cake Sahib, where we craft the finest artisanal cakes with love...",
    "Velvet Cake for 1500, Pineapple & Chocolate for 1000 per pound, and our special pastries for only 100!"
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentSubtitle(1), 2000);
    const timer2 = setTimeout(() => setCurrentSubtitle(2), 6000);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-bakery-warm selection:bg-bakery-gold selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 py-4 flex items-center justify-between ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm' : 'bg-transparent text-white'}`}>
        <div className="flex items-center gap-8">
          <Menu className="w-6 h-6 cursor-pointer hover:text-bakery-gold transition-colors" />
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <img src="input_file_0.png" alt="Cake Sahib Logo" className="h-10 w-10 object-contain" />
            <h1 className="text-xl font-serif font-bold tracking-tight">
              CAKE <span className="text-bakery-gold italic font-medium">Sahib</span>
            </h1>
          </motion.div>
          <div className="hidden lg:flex gap-8 font-medium text-[10px] tracking-[0.2em] uppercase opacity-80">
            {['Collections', 'Atelier', 'Our Story', 'Boutique', 'Journal'].map(item => (
              <a key={item} href="#" className="hover:text-bakery-gold transition-all relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-bakery-gold transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:03120402140" className="hidden md:flex items-center gap-2 text-xs font-bold tracking-widest hover:text-bakery-gold transition-colors">
            <Phone className="w-4 h-4" /> 03120402140
          </a>
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 transition-all ${isMuted ? 'hover:bg-white/10' : 'bg-bakery-gold/20 border-bakery-gold text-bakery-gold'}`}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse" />}
          </button>
          <div className="relative">
            <ShoppingBag className="w-6 h-6 cursor-pointer hover:text-bakery-gold transition-colors" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-bakery-gold text-white text-[10px] flex items-center justify-center rounded-full border border-white shadow-lg">3</span>
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
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 cinematic-vignette" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl bg-[#9716f9]/60 backdrop-blur-md p-12 rounded-[3rem] border border-white/20 shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-8xl md:text-[14rem] font-serif font-black mb-4 tracking-tighter opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">WELCOME</h1>
            <span className="uppercase tracking-[0.5em] text-xs font-bold text-bakery-gold mb-6 block drop-shadow-lg relative z-10">Cake Sahib • Est. 1994</span>
            <h2 className="text-6xl md:text-[10rem] font-serif font-light mb-8 leading-[0.8] drop-shadow-2xl relative z-10">
              Freshly <br />
              <span className="italic font-normal text-bakery-gold/90">Crafted Dreams</span>
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
                className="mt-12 relative z-10"
              >
                <div className="inline-block px-10 py-6 bg-[#ff00d5]/80 backdrop-blur-md rounded-3xl max-w-2xl mx-auto shadow-2xl">
                   <p className="text-xl md:text-2xl text-white font-medium tracking-wide drop-shadow-lg text-center">
                    {subtitles[currentSubtitle - 1]}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <button className="px-12 py-5 bg-bakery-gold hover:bg-white hover:text-bakery-dark rounded-full font-bold tracking-widest uppercase text-xs transition-all shadow-2xl hover:scale-105 active:scale-95 group">
              Start Your Order
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>
            <a href="https://instagram.com/cake_sahib" target="_blank" rel="noopener noreferrer" className="px-12 py-5 border border-white/30 hover:bg-white/10 backdrop-blur-md rounded-full font-bold tracking-widest uppercase text-xs transition-all shadow-xl flex items-center gap-2">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-[10px] tracking-[0.3em] font-bold text-white/40 uppercase">Discover More</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent opacity-40"></div>
        </motion.div>
      </section>

      {/* Categories Folders Section */}
      <section className="py-32 px-6 md:px-24 bg-[#c660ff]">
        <div className="text-center mb-24">
          <span className="text-bakery-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Our Specialties</span>
          <h2 className="text-5xl md:text-7xl font-serif text-white">Product <span className="italic">Categories</span></h2>
          <div className="w-20 h-[1px] bg-bakery-gold mx-auto mt-8 opacity-30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl mb-6">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                  <h4 className="text-2xl font-serif mb-1">{cat.name}</h4>
                  <p className="text-sm opacity-90 mb-4 tracking-wider uppercase font-bold">{cat.desc}</p>
                  <div className="h-[1px] w-12 bg-bakery-gold group-hover:w-24 transition-all"></div>
                </div>
              </div>
              <div className="flex justify-between items-center px-2">
                <p className="text-sm font-bold tracking-widest uppercase text-white">{cat.price}</p>
                <button className="flex items-center gap-1 text-[10px] font-bold text-bakery-gold uppercase tracking-widest hover:translate-x-1 transition-transform">
                  View Folder <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-32 bg-[#cb03ff] relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="md:w-1/2 space-y-12">
              <header className="space-y-4">
                <span className="text-bakery-gold uppercase tracking-[0.4em] text-[10px] font-bold">Menu & Pricing</span>
                <h3 className="text-5xl md:text-7xl font-serif text-white">Signature <br /><span className="italic">Price List</span></h3>
                <p className="text-xl text-white/70 font-light max-w-md">
                  Our quality and pricing are both unmatched in the artisanal world.
                </p>
              </header>

              <div className="space-y-6">
                {PRICE_LIST.map((item, idx) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center justify-between group border-b border-white/10 pb-6 hover:border-bakery-gold/30 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden border border-white/10 shadow-md">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <h4 className="text-xl font-serif text-white">{item.name}</h4>
                        <p className="text-[10px] uppercase tracking-widest text-bakery-gold font-bold">{item.urdu}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-serif font-medium text-white">{item.price}</p>
                      <span className="text-[9px] uppercase tracking-widest text-white/40 group-hover:text-bakery-gold transition-colors font-bold">Select Item</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 relative">
               <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
              >
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src={VIDEOS.pricing} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-12 left-12 right-12 text-white">
                  <p className="text-xs uppercase tracking-[0.3em] font-bold text-bakery-gold mb-4">Direct Communication</p>
                  <p className="text-3xl font-serif italic mb-6">"ہماری میٹھاس، آپ کی خوشیاں"</p>
                  <a href="https://wa.me/923120402140" target="_blank" className="block text-center w-full py-4 glass-card rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-bakery-dark transition-all">WhatsApp: 03120402140</a>
                </div>
              </motion.div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-bakery-gold/5 blur-[80px] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-32 px-6 bg-[#0a0a0a] text-white">
        <div className="container mx-auto text-center space-y-16">
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-4">
              <img src="input_file_0.png" alt="Cake Sahib Logo" className="h-24 w-24 object-contain mx-auto" />
              <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter">CAKE <span className="text-bakery-gold italic font-medium">Sahib</span></h2>
            </div>
            <div className="flex justify-center flex-wrap gap-8 md:gap-12 font-medium text-[10px] tracking-[0.3em] uppercase opacity-40">
              <span className="flex items-center gap-2"><MapPin className="w-3 h-3 text-bakery-gold" /> Lahore, Pakistan</span>
              <a href="tel:03120402140" className="hover:text-bakery-gold transition-colors flex items-center gap-2"><Phone className="w-3 h-3 text-bakery-gold" /> 03120402140</a>
              <a href="https://instagram.com/cake_sahib" target="_blank" className="hover:text-bakery-gold transition-colors flex items-center gap-2"><Instagram className="w-3 h-3 text-bakery-gold" /> Instagram</a>
            </div>
          </div>
          
          <div className="max-w-xl mx-auto space-y-8">
            <p className="text-white/40 font-light leading-relaxed">
              Experience the ritual of artisanal baking at Cake Sahib. <br />Follow us for daily sweet inspirations.
            </p>
            <div className="flex justify-center gap-4">
               <a href="https://instagram.com/cake_sahib" className="p-3 rounded-full border border-white/10 hover:border-bakery-gold transition-colors group">
                <Instagram className="w-5 h-5 group-hover:text-bakery-gold" />
               </a>
            </div>
          </div>

          <div className="pt-24 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] tracking-[0.4em] uppercase opacity-20">
            <p>© 2026 Cake Sahib Artisanal Group</p>
            <div className="flex gap-12">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
