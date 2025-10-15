"use client"
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 relative overflow-hidden">
   
      
      <div className="   max-w-4xl md:max-w-6xl  xl:max-w-7xl  container mx-auto px-4 sm:px-6  md:px-8 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-700">
          {/* Brand Column */}
          <div className="space-y-6">
            <img 
              src="/images/logo.webp" 
              alt="Elite Trekking Adventures" 
              className="w-44 h-auto"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Elevating adventure travel with bespoke trekking experiences in the world's most breathtaking landscapes.
            </p>
            <div className="space-y-3">
              <h4 className="text-white font-medium">Join Our Adventure Community</h4>
              <form className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-2 bg-gray-700 bg-opacity-50 text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400"
                />
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-orange-500 text-gray-900 font-semibold rounded hover:bg-orange-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          {/* Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 col-span-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-orange-500">
                Explore
              </h3>
              <ul className="space-y-2">
                {['Home', 'Treks', 'Destinations', 'Expeditions', 'Our Story'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-orange-500 text-sm transition-colors duration-300 hover:translate-x-1 block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-orange-500">
                Support
              </h3>
              <ul className="space-y-2">
                {['FAQ', 'Travel Blog', 'Safety', 'Terms', 'Privacy'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-orange-500 text-sm transition-colors duration-300 hover:translate-x-1 block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-orange-500">
                Company
              </h3>
              <ul className="space-y-2">
                {['About Us', 'Our Guides', 'Sustainability', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-orange-500 text-sm transition-colors duration-300 hover:translate-x-1 block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Contact Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-orange-500">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">123 Mountain View, Delhi, India</span>
              </li>
              <li className="flex items-start">
                <FaPhone className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (234) 567-890</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-orange-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">contact@elitetreks.com</span>
              </li>
            </ul>
            
            <div className="space-y-3">
              <h4 className="text-white font-medium">Follow Our Journeys</h4>
              <div className="flex gap-4">
                {[
                  { icon: <FaFacebook />, label: 'Facebook' },
                  { icon: <FaInstagram />, label: 'Instagram' },
                  { icon: <FaTwitter />, label: 'Twitter' },
                  { icon: <FaLinkedin />, label: 'LinkedIn' }
                ].map((social) => (
                  <a 
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="text-gray-300 hover:text-orange-500 text-lg transition-colors duration-300 hover:-translate-y-1"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Partners & Payments */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-700">
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-gray-400">Trusted By</h4>
            <div className="flex flex-wrap gap-4 items-center">
              {['incredible', 'partner-2', 'triangle', 'iata', 'adventure-travel'].map((img) => (
                <img 
                  key={img}
                  src={`/images/${img}.webp`}
                  alt="Partner logo"
                  className="h-8 object-contain"
                />
              ))}
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-gray-400">We Accept</h4>
            <div className="flex gap-3 items-center">
              {['visa', 'mastercard', 'paypal', 'american-express'].map((img) => (
                <img 
                  key={img}
                  src={`/images/${img}.webp`}
                  alt="Payment method"
                  className="h-6 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="py-6 flex flex-col sm:flex-row justify-center items-center gap-4 text-center">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} TrekkinginIndia. All rights reserved.
          </p>
          <div className="flex gap-4 text-gray-400 text-xs">
            <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-orange-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;