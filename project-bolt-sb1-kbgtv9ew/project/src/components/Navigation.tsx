import React, { useState } from 'react';
import { Menu, X, User, Tent, MapPin, Wrench, Home } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
  userType: string;
  setUserType: (type: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentSection,
  setCurrentSection,
  isLoggedIn,
  setIsLoggedIn,
  userType,
  setUserType
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'rvs', label: 'RV Rentals', icon: Tent },
    { id: 'land', label: 'Campsites', icon: MapPin },
    { id: 'services', label: 'Services', icon: Wrench },
  ];

  const handleLogin = (type: string) => {
    setUserType(type);
    setIsLoggedIn(true);
    setShowAuthModal(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-green-800/95 backdrop-blur-md z-50 border-b-4 border-green-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setCurrentSection('home')}
            >
              <span className="text-2xl">🚐</span>
              <span className="text-xl font-bold text-white pixel-text">PIXELCAMP</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentSection(item.id)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded transition-all duration-300 ${
                      currentSection === item.id
                        ? 'bg-green-600 text-white'
                        : 'text-green-100 hover:bg-green-700 hover:text-white'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* User Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {isLoggedIn ? (
                <>
                  <button
                    onClick={() => setCurrentSection('dashboard')}
                    className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-all duration-300"
                  >
                    <User className="w-4 h-4" />
                    <span>Dashboard</span>
                  </button>
                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="text-green-100 hover:text-white"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-all duration-300"
                >
                  Login / Sign Up
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-green-900 border-t border-green-600">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center space-x-2 w-full px-3 py-2 rounded transition-all duration-300 ${
                      currentSection === item.id
                        ? 'bg-green-600 text-white'
                        : 'text-green-100 hover:bg-green-700'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              {!isLoggedIn && (
                <button
                  onClick={() => {
                    setShowAuthModal(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded mt-4"
                >
                  Login / Sign Up
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Authentication Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 z-60 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-green-800">
                {authMode === 'login' ? 'Welcome Back!' : 'Join PixelCamp!'}
              </h2>
              <button
                onClick={() => setShowAuthModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex space-x-2">
                <button
                  onClick={() => setAuthMode('login')}
                  className={`flex-1 py-2 rounded ${
                    authMode === 'login'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setAuthMode('signup')}
                  className={`flex-1 py-2 rounded ${
                    authMode === 'signup'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Sign Up
                </button>
              </div>

              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {authMode === 'signup' && (
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-gray-700">I want to:</div>
                  <div className="space-y-2">
                    <button
                      onClick={() => handleLogin('renter')}
                      className="w-full p-3 bg-blue-500 hover:bg-blue-600 text-white rounded transition-all duration-300"
                    >
                      🚐 Rent RVs & Find Campsites
                    </button>
                    <button
                      onClick={() => handleLogin('owner')}
                      className="w-full p-3 bg-green-500 hover:bg-green-600 text-white rounded transition-all duration-300"
                    >
                      🏕️ List My RV or Land
                    </button>
                  </div>
                </div>
              )}

              {authMode === 'login' && (
                <button
                  onClick={() => handleLogin('renter')}
                  className="w-full p-3 bg-green-600 hover:bg-green-700 text-white rounded transition-all duration-300"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;