import React, { useState } from 'react';
import { Tent, Navigation as NavigationIcon, Users, Wrench, MapPin, Star, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import RVListings from './components/RVListings';
import LandPlots from './components/LandPlots';
import Services from './components/Services';
import UserDashboard from './components/UserDashboard';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(''); // 'renter' or 'owner'

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Navigation 
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        userType={userType}
        setUserType={setUserType}
      />
      
      <main>
        {currentSection === 'home' && (
          <>
            <Hero setCurrentSection={setCurrentSection} />
            <div id="featured" className="py-16 px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-green-800 mb-12 pixel-text">
                  🌲 Featured Adventures 🌲
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <FeatureCard
                    icon={<Tent className="w-8 h-8" />}
                    title="Premium RVs"
                    description="Discover luxury RVs with all amenities for your perfect camping adventure"
                    onClick={() => setCurrentSection('rvs')}
                  />
                  <FeatureCard
                    icon={<MapPin className="w-8 h-8" />}
                    title="Scenic Campsites"
                    description="Find beautiful private land plots in breathtaking natural settings"
                    onClick={() => setCurrentSection('land')}
                  />
                  <FeatureCard
                    icon={<Wrench className="w-8 h-8" />}
                    title="RV Services"
                    description="Professional maintenance, repairs, and RV purchasing assistance"
                    onClick={() => setCurrentSection('services')}
                  />
                </div>
              </div>
            </div>
          </>
        )}
        
        {currentSection === 'rvs' && <RVListings />}
        {currentSection === 'land' && <LandPlots />}
        {currentSection === 'services' && <Services />}
        {currentSection === 'dashboard' && <UserDashboard userType={userType} />}
      </main>
      
      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description, onClick }) {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border-4 border-green-600 pixel-border"
      onClick={onClick}
    >
      <div className="text-green-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold text-green-800 mb-2 text-center">{title}</h3>
      <p className="text-gray-700 text-center leading-relaxed">{description}</p>
    </div>
  );
}

export default App;