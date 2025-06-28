import React from 'react';
import { Heart, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-3xl">🚐</span>
              <span className="text-2xl font-bold pixel-text">PIXELCAMP</span>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              Connecting adventurers with amazing RVs and hidden camping gems since 2025. 
              Your gateway to epic outdoor experiences!
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center cursor-pointer hover:bg-green-500 transition-colors">
                <span className="text-lg">📘</span>
              </div>
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center cursor-pointer hover:bg-green-500 transition-colors">
                <span className="text-lg">📷</span>
              </div>
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center cursor-pointer hover:bg-green-500 transition-colors">
                <span className="text-lg">🐦</span>
              </div>
            </div>
          </div>

          {/* For Adventurers */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-green-200">For Adventurers</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Find RVs</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Discover Campsites</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">RV Services</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Travel Insurance</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Adventure Blog</a></li>
            </ul>
          </div>

          {/* For Hosts */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-green-200">For Property Owners</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">List Your RV</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">List Your Land</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Owner Resources</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Pricing Guide</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Host Community</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-green-200">Support & More</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-green-100">
              © 2025 PixelCamp. All rights reserved. Made with{' '}
              <Heart className="w-4 h-4 inline text-red-400 fill-current" />{' '}
              for outdoor adventurers.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <span className="text-green-100">Open Source on GitHub</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌲</span>
                <span className="text-green-100">Carbon Neutral Platform</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center text-xs text-green-300">
            <p>🎯 Demo Version - This is a showcase of PixelCamp's features and design</p>
            <p className="mt-1">Deployed with ❤️ using GitHub Pages</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;