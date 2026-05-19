import { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, Phone, ShoppingCart, Menu as MenuIcon, X, Send } from 'lucide-react';

import logoImg from './assets/images/regenerated_image_1779027659653.png';
import craftImg from './assets/images/regenerated_image_1779027704246.png';
import urduBgImg from './assets/images/regenerated_image_1779027757943.png';

import customizedCakeImg from './assets/images/regenerated_image_1779043685558.png';
import redVelvetCakeImg from './assets/images/regenerated_image_1779043693564.webp';
import pineappleCakeImg from './assets/images/regenerated_image_1779043695327.png';
import rusticPineappleImg from './assets/images/regenerated_image_1779043697117.jpg';
import rusticChocolateImg from './assets/images/regenerated_image_1779043698084.jpg';
import donutImg from './assets/images/regenerated_image_1779043698981.jpg';
import vanillaCakeImg from './assets/images/regenerated_image_1779044248814.jpg';
import fruitCakeImg from './assets/images/regenerated_image_1779044250179.jpg';
import marbleCakeImg from './assets/images/regenerated_image_1779044251243.jpg';
import bornBabyCakeImg from './assets/images/regenerated_image_1779219623568.jpg';
import dollCakeImg from './assets/images/regenerated_image_1779219624996.jpg';
import carCakeImg from './assets/images/regenerated_image_1779219626118.jpg';

const CAKE_COLLECTION = [
  { id: 1, name: "Customized Cake", price: "1400", unit: "/ lb", urdu: "کسٹمائزڈ کیک", image: customizedCakeImg },
  { id: 2, name: "Red Velvet Cake", price: "2000", unit: "/ lb", urdu: "ریڈ وایلویٹ کیک", image: redVelvetCakeImg },
  { id: 3, name: "Pineapple Cake", price: "1200", unit: "/ lb", urdu: "رنگین عید کیک", image: pineappleCakeImg },
  { id: 4, name: "Chocolate Cake", price: "1500", unit: "/ lb", urdu: "کٹھائی میٹھی کیک", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "Nutella Malt Cake", price: "3000", unit: "/ lb", urdu: "نٹیلا مالٹ کیک", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800" },
  { id: 6, name: "Full Fondant Cake", price: "1500", unit: "/ lb", urdu: "فل فونڈنٹ کیک", image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=800" },
  { id: 7, name: "Simple Cupcake", price: "100", unit: "per item", urdu: "سادہ کپ کیک", image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=800" },
  { id: 8, name: "Customized Cupcake", price: "150", unit: "per item", urdu: "کسٹمائزڈ کپ کیک", image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=800" },
  { id: 9, name: "Rustic Sliced tea cake (Pineapple)", price: "750", unit: "/ lb", urdu: "رسٹک سلائسڈ ٹی کیک (پائن ایپل)", image: rusticPineappleImg },
  { id: 10, name: "Rustic Sliced tea cake (Chocolate)", price: "750", unit: "/ lb", urdu: "رسٹک سلائسڈ ٹی کیک (چاکلیٹ)", image: rusticChocolateImg },
  { id: 11, name: "Fresh Donut", price: "150", unit: "per item", urdu: "تازہ ڈونٹس", image: donutImg },
  { id: 12, name: "Vanilla Cake", price: "750", unit: "/ lb", urdu: "ونیلا کیک", image: vanillaCakeImg },
  { id: 13, name: "Fruit Cake", price: "500", unit: "/ lb", urdu: "فروٹ کیک", image: fruitCakeImg },
  { id: 14, name: "Cookies", price: "1000", unit: "/ kg", urdu: "کوکیز", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=800" },
  { id: 15, name: "Marble Cake", price: "800", unit: "/ lb", urdu: "ماربل کیک", image: marbleCakeImg },
  { id: 16, name: "Born Baby Cake", price: "1500", unit: "/ lb", urdu: "بورن بیبی کیک", image: bornBabyCakeImg },
  { id: 17, name: "Doll Cake", price: "1500", unit: "/ lb", urdu: "ڈول کیک", image: dollCakeImg },
  { id: 18, name: "Car Cake", price: "1300", unit: "/ lb", urdu: "کار کیک", image: carCakeImg },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0c0414] text-white font-sans selection:bg-bakery-gold selection:text-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0c0414]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-white/5 rounded-full md:hidden"
            >
              {isMenuOpen ? <X /> : <MenuIcon />}
            </button>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-bakery-gold/20 flex-shrink-0">
              <img src={logoImg} className="w-full h-full object-cover" alt="Cake Sahib Logo" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-serif text-bakery-gold tracking-widest uppercase">Cake Sahib</span>
              <span className="text-[10px] text-white/40 tracking-[0.3em] font-medium uppercase -mt-1 hidden md:block">Established 2020</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-[11px] font-medium tracking-[0.2em] text-white/70 uppercase">
            {["Collections", "Menu", "Our Story", "Boutique", "Journal"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-bakery-gold transition-colors">{item}</a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a href="tel:+923120402140" className="hidden sm:flex items-center gap-2 text-sm text-white/80 hover:text-bakery-gold transition-colors">
              <Phone size={16} />
              <span>03120402140</span>
            </a>
            <div className="relative">
              <ShoppingCart className="w-5 h-5 text-white/80" />
              <span className="absolute -top-2 -right-2 bg-bakery-gold text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">3</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-bakery-gold/10 via-transparent to-transparent opacity-30 pointer-events-none" />
        
        {/* Main Logo Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-48 h-48 md:w-64 md:h-64 mb-12"
        >
          <div className="absolute inset-0 rounded-full border border-bakery-gold/20 animate-pulse" />
          <div className="absolute -inset-4 rounded-full border border-bakery-gold/10 animate-spin-slow" />
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-bakery-gold/40 shadow-[0_0_50px_rgba(197,160,89,0.2)]">
            <img 
              src={logoImg} 
              className="w-full h-full object-cover" 
              alt="Cake Sahib Logo"
            />
          </div>
        </motion.div>

        <div className="text-center px-4 relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-2xl font-serif text-white/90 italic mb-4"
          >
            Welcome to
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif text-bakery-gold mb-8 tracking-tight"
          >
            Cake Sahib
          </motion.h1>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-white/20" />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xs md:text-sm tracking-[0.4em] text-white/60 font-medium uppercase"
            >
              Home Bakers • Since 2020
            </motion.p>
            <div className="h-[1px] w-12 bg-white/20" />
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-[10px] md:text-xs tracking-widest text-[#c5a059] uppercase font-bold italic"
          >
            Please place your order at least 2 days in advance
          </motion.p>
        </div>

        {/* Hero Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 px-4 w-full max-w-2xl">
          <button className="flex-1 min-w-[160px] h-12 rounded-full border border-bakery-gold/30 flex items-center justify-center gap-2 text-[11px] font-bold tracking-widest uppercase hover:bg-bakery-gold/10 transition-colors">
            <Phone size={14} className="text-bakery-gold" />
            Contact
          </button>
          <button className="flex-1 min-w-[160px] h-12 rounded-full border border-bakery-gold/30 flex items-center justify-center gap-2 text-[11px] font-bold tracking-widest uppercase hover:bg-bakery-gold/10 transition-colors">
            <Instagram size={14} className="text-bakery-gold" />
            Instagram
          </button>
          <button className="flex-1 min-w-[200px] h-12 rounded-full border border-bakery-gold/30 flex items-center justify-center gap-2 text-[11px] font-bold tracking-widest uppercase hover:bg-bakery-gold/10 transition-colors">
            <Send size={14} className="text-bakery-gold" />
            Online Class Available
          </button>
        </div>
        
        <button className="mt-8 px-8 py-3 rounded-full bg-bakery-gold/5 border border-bakery-gold/20 text-[12px] font-bold text-bakery-gold tracking-[0.2em] hover:bg-bakery-gold/20 transition-all flex items-center gap-3">
          <Phone size={14} />
          +92 312 0402140
        </button>
      </section>

      {/* Beyond Confectionery Section */}
      <section className="py-24 px-4 bg-[#0a0311] overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-[10px] tracking-[0.5em] text-bakery-gold uppercase font-bold mb-4">The Craft</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              Beyond <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-bakery-gold to-pink-500">Confectionery</span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed max-w-md">
              We bake every layer with passion and precision, creating customized royal cakes for your unique celebrations.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
             <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-4 rounded-full border-2 border-bakery-gold/20" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-bakery-gold/30 to-purple-900/50 blur-3xl opacity-30" />
                <img 
                  src={craftImg} 
                  className="w-full h-full object-cover rounded-full border-4 border-bakery-gold/40 relative z-10" 
                  alt="Craft"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Story Text Section */}
      <section className="py-24 px-4 text-center bg-[#0c0414]">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-serif mb-8">The Heart of <span className="text-bakery-gold italic">Cake Sahib</span></h2>
          <p className="text-lg text-white/50 leading-loose italic">
            "Our journey began over three decades ago with a simple mission: to transform the finest ingredients into royal masterpieces."
          </p>
        </div>
      </section>

      {/* Menu Collection Section */}
      <section id="collections" className="py-24 px-4 bg-[#0a0311] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative">
            <span className="text-[10px] tracking-[0.5em] text-bakery-gold uppercase font-bold mb-4 block">Gourmet Selection</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white relative z-10">
              The <span className="text-bakery-gold italic">Cake Collection</span>
            </h2>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl md:text-[180px] font-black text-white/[0.03] tracking-widest -z-0 pointer-events-none uppercase">COLLECTION</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4 md:gap-8 max-w-[320px] md:max-w-none mx-auto">
            {CAKE_COLLECTION.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="flex flex-col items-center gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-bakery-gold/40 transition-all duration-500 text-center">
                  <div className="relative w-32 h-32 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-bakery-gold transition-colors">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-lg font-serif text-white group-hover:text-bakery-gold transition-colors">{item.name}</h4>
                    <p className="text-[8px] md:text-xs text-white/40 italic">{item.urdu}</p>
                  </div>
                  <div className="text-bakery-gold font-bold text-sm md:text-xl">Rs.{item.price}</div>
                  <p className="text-[5px] md:text-[8px] text-white/20 leading-relaxed px-2 font-light">
                    We offer fresh and delicious cakes, renowned throughout the city for their exceptional taste.
                  </p>
                  <button className="text-[8px] md:text-[10px] tracking-widest text-[#c5a059] uppercase font-bold border-t border-white/10 pt-2 w-full">Order Now</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Urdu Quote Section */}
      <section className="py-8 px-4 relative flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0c0414]/90 z-10" />
        <img 
          src={urduBgImg} 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Bakery BG"
        />
        <div className="relative z-20 text-center max-w-lg px-4">
          <p className="text-[7px] tracking-[0.5em] text-bakery-gold/80 uppercase font-bold mb-3">Order via WhatsApp</p>
          <h2 className="text-2xl md:text-4xl font-urdu mb-4 leading-[1.6] text-white">
            ہماری مٹھاس<br />
            آپ کی خوشیاں
          </h2>
          <button className="px-5 py-2 bg-[#25d366] text-white rounded-full font-bold tracking-widest uppercase flex items-center gap-2 mx-auto hover:scale-105 transition-transform text-[10px]">
            Connect Now
            <Send size={12} />
          </button>
          
          <div className="mt-6 flex items-center justify-center gap-2 py-1 px-3 border border-white/10 bg-black/40 rounded-lg">
             <span className="text-[6px] tracking-widest text-white/60 uppercase">Designed & Developed by</span>
             <span className="text-[6px] font-bold text-bakery-gold uppercase">Muhammad Bin Nadeem</span>
             <Instagram size={7} className="text-white/60" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-24 pb-12 px-4 bg-[#0a0311] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif text-bakery-gold mb-4 uppercase">Cake Sahib</h3>
            <p className="text-[10px] text-white/40 tracking-[0.3em] font-medium uppercase mb-6">Established 2020</p>
            <p className="text-[10px] tracking-widest text-[#c5a059] uppercase font-bold italic mb-6">The Royal Art of Confectionery</p>
            <p className="text-sm text-white/50 leading-relaxed">
              Crafting royal delicacies since 2020. Every creation is a masterpiece designed to elevate your celebrations with timeless taste.
            </p>
          </div>
          
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-white uppercase mb-8">Quick Links</h4>
            <div className="flex flex-col gap-4 text-xs text-white/50">
              {["Home", "Menu", "Privacy Policy", "Terms of Service"].map(link => (
                <a key={link} href="#" className="hover:text-bakery-gold transition-colors">{link}</a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-white uppercase mb-8">Boutique Info</h4>
            <div className="flex flex-col gap-6 text-xs text-white/50">
              <div className="flex items-start gap-4">
                <div className="p-2 border border-bakery-gold/20 rounded-full text-bakery-gold">
                  <Phone size={14} />
                </div>
                <div>
                  <p className="text-white/80 font-medium mb-1">Rahim Yar Khan, Pakistan</p>
                  <p className="text-[10px] tracking-widest">+92 312 0402140</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 border border-bakery-gold/20 rounded-full text-bakery-gold">
                  <Instagram size={14} />
                </div>
                <div>
                  <p className="text-white/80 font-medium mb-1">10:00 AM - 10:00 PM</p>
                  <p className="text-[10px] tracking-widest">Available for delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-12 border-t border-white/5">
          <p className="text-[10px] text-white/30 tracking-[0.3em] uppercase">© 2024 Cake Sahib. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
