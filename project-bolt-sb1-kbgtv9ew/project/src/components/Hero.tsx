import React from 'react';
import { Tent, ArrowRight, Users, MapPin } from 'lucide-react';

interface HeroProps {
  setCurrentSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentSection }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-700 to-green-800">
        <div className="absolute inset-0 opacity-20">
          <div className="pixel-trees"></div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element pixel-cloud" style={{ top: '10%', left: '10%', animationDelay: '0s' }}>☁️</div>
        <div className="floating-element pixel-cloud" style={{ top: '20%', right: '15%', animationDelay: '2s' }}>☁️</div>
        <div className="floating-element" style={{ top: '60%', left: '5%', animationDelay: '1s' }}>🌲</div>
        <div className="floating-element" style={{ top: '70%', right: '10%', animationDelay: '3s' }}>🏕️</div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="pixel-logo text-8xl mb-4">🚐</div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 pixel-text drop-shadow-lg">
            PIXELCAMP
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
            Your Gateway to Epic RV Adventures & Hidden Camping Gems
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setCurrentSection('rvs')}
            className="pixel-button bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2"
          >
            <Tent className="w-5 h-5" />
            Rent an RV
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentSection('land')}
            className="pixel-button bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2"
          >
            <MapPin className="w-5 h-5" />
            Find Campsites
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-green-100">RVs Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">1,200+</div>
            <div className="text-green-100">Camping Spots</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">10k+</div>
            <div className="text-green-100">Happy Campers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;