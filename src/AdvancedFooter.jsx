import React, { useState } from 'react';
import { Mail, Phone, MapPin, Heart, Send, Github, ArrowRight } from 'lucide-react';

const AdvancedFooter = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('https://formspree.io/f/mgvdaqez', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
        setTimeout(() => setIsSubscribed(false), 4000);
      }
    } catch (error) {
      console.error('Subscription failed:', error);
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/tauseefhaider1', name: 'GitHub' },
  ];

  return (
    <footer className="relative bg-white/80 backdrop-blur-xl border-t border-white/30 py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Full-width card */}
        <div className="bg-white/50 backdrop-blur-lg rounded-3xl p-10 shadow-xl border border-white/40 grid md:grid-cols-2 gap-8">
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Contact Me</h2>
            <p className="text-gray-700">Let's build something amazing together! Reach out to me anytime.</p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="w-5 h-5 text-purple-600" /> tauseefhaider119@gmail.com
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="w-5 h-5 text-blue-600" /> +92 340 7400030
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="w-5 h-5 text-green-600" /> Rawalpindi, Pakistan
              </div>
            </div>
            
            {/* Socials */}
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center bg-white/40 border border-white/30 rounded-xl text-gray-700 shadow hover:shadow-lg transition hover:scale-110"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5"/>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Stay Updated</h2>
            <p className="text-gray-700">Subscribe to my newsletter for project updates and insights.</p>
            
            {isSubscribed ? (
              <div className="bg-green-100 border border-green-300 rounded-xl p-4 text-center animate-scale-in">
                <Heart className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-green-700 font-medium">Thank you for subscribing! 🎉</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3"
              >
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-xl font-bold flex justify-center items-center gap-2 hover:from-purple-600 hover:to-blue-600 transition hover:scale-105"
                >
                  Subscribe <Send className="w-4 h-4"/>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Simple Scroll to Top Button - Always visible */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl shadow-lg flex items-center justify-center hover:scale-110 transition"
      >
        <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
      </button>
    </footer>
  );
};

export default AdvancedFooter;