import React, { useState } from 'react';
import { Wrench, ShoppingCart, Shield, Zap, Phone, Star } from 'lucide-react';

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      category: 'maintenance',
      title: 'Mobile RV Repair Service',
      provider: 'FixIt Fast RV',
      price: 125,
      rating: 4.9,
      reviews: 156,
      location: 'Nationwide',
      image: 'https://images.pexels.com/photos/1319855/pexels-photo-1319855.jpeg',
      description: 'Professional mobile RV repair service that comes to your location.',
      services: ['Engine Repair', 'Electrical Systems', 'Plumbing', 'Appliance Service'],
      availability: '24/7 Emergency',
      icon: <Wrench className="w-8 h-8" />
    },
    {
      id: 2,
      category: 'purchase',
      title: 'Pre-Owned RV Marketplace',
      provider: 'Pixel RV Sales',
      price: 25000,
      rating: 4.7,
      reviews: 89,
      location: 'Multiple Locations',
      image: 'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg',
      description: 'Certified pre-owned RVs with warranty and financing options.',
      services: ['Financing Available', 'Extended Warranty', 'Trade-In Service', 'Delivery'],
      availability: 'Mon-Sat 9AM-7PM',
      icon: <ShoppingCart className="w-8 h-8" />
    },
    {
      id: 3,
      category: 'insurance',
      title: 'Adventure RV Insurance',
      provider: 'CampSafe Insurance',
      price: 89,
      rating: 4.8,
      reviews: 234,
      location: 'Online',
      image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg',
      description: 'Comprehensive RV insurance for all your camping adventures.',
      services: ['Full Coverage', 'Roadside Assistance', 'Personal Property', 'Vacation Liability'],
      availability: 'Online 24/7',
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: 4,
      category: 'maintenance',
      title: 'Solar Panel Installation',
      provider: 'SunPower RV Solutions',
      price: 1200,
      rating: 4.6,
      reviews: 78,
      location: 'Western US',
      image: 'https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg',
      description: 'Professional solar panel installation for off-grid adventures.',
      services: ['Solar Panels', 'Battery Systems', 'Inverters', 'Monitoring'],
      availability: 'By Appointment',
      icon: <Zap className="w-8 h-8" />
    },
    {
      id: 5,
      category: 'purchase',
      title: 'New RV Dealership',
      provider: 'Adventure RV World',
      price: 75000,
      rating: 4.9,
      reviews: 145,
      location: 'Denver, CO',
      image: 'https://images.pexels.com/photos/2317711/pexels-photo-2317711.jpeg',
      description: 'Premium new RV dealership with latest models and financing.',
      services: ['New RVs', 'Financing', 'Trade-Ins', 'Service Department'],
      availability: 'Daily 9AM-8PM',
      icon: <ShoppingCart className="w-8 h-8" />
    },
    {
      id: 6,
      category: 'maintenance',
      title: 'RV Detailing & Cleaning',
      provider: 'Pixel Clean RV Care',
      price: 150,
      rating: 4.7,
      reviews: 92,
      location: 'Mobile Service',
      image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg',
      description: 'Professional RV detailing and deep cleaning services.',
      services: ['Exterior Wash', 'Interior Detailing', 'Wax & Polish', 'Sanitization'],
      availability: 'Weekdays 8AM-6PM',
      icon: <Wrench className="w-8 h-8" />
    }
  ];

  const categories = [
    { id: 'all', label: 'All Services', icon: '🛠️' },
    { id: 'maintenance', label: 'Maintenance & Repair', icon: '🔧' },
    { id: 'purchase', label: 'Purchase & Sales', icon: '🛒' },
    { id: 'insurance', label: 'Insurance', icon: '🛡️' }
  ];

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const formatPrice = (price: number, category: string) => {
    if (category === 'insurance') return `$${price}/month`;
    if (category === 'purchase') return `From $${price.toLocaleString()}`;
    return `Starting at $${price}`;
  };

  return (
    <div className="pt-20 pb-16 px-4 min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-orange-800 mb-4 pixel-text">
            🛠️ RV Services & Solutions 🛠️
          </h1>
          <p className="text-xl text-gray-700">
            Professional services to keep your RV adventure-ready
          </p>
        </div>

        {/* Service Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-orange-700 hover:bg-orange-100 shadow border-2 border-orange-200'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-orange-600 pixel-border">
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-orange-500 text-white p-2 rounded-full">
                  {service.icon}
                </div>
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-bold">{service.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange-800 mb-2">{service.title}</h3>
                <div className="text-sm text-gray-600 mb-2">
                  by <span className="font-semibold">{service.provider}</span>
                </div>
                
                <p className="text-gray-700 text-sm mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Services Include:</div>
                  <div className="grid grid-cols-2 gap-1">
                    {service.services.map((item, index) => (
                      <div key={index} className="text-xs text-gray-600 flex items-center gap-1">
                        <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    <span>{service.availability}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{service.reviews} reviews</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-600">{service.location}</div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-orange-600">
                      {formatPrice(service.price, service.category)}
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded font-bold transition-all duration-300 transform hover:scale-105">
                  {service.category === 'purchase' ? 'View Inventory 🚐' : 
                   service.category === 'insurance' ? 'Get Quote 📋' : 'Book Service 🔧'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 border-4 border-orange-600 pixel-border">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">Need Help Finding the Right Service?</h2>
            <p className="text-gray-700 mb-6">
              Our PixelCamp experts are here to help you find the perfect service provider for your RV needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-bold transition-all duration-300">
                🎯 Contact Expert
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded font-bold transition-all duration-300">
                💬 Live Chat
              </button>
            </div>
          </div>
        </div>

        {/* User Reviews Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-orange-800 mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Adventure Anna', review: 'PixelCamp services saved our trip! Quick mobile repair got us back on the road.', rating: 5 },
              { name: 'Family Camper Bob', review: 'Found the perfect RV through their marketplace. Great financing options!', rating: 5 },
              { name: 'Solo Traveler Sue', review: 'Insurance was affordable and comprehensive. Peace of mind on every adventure.', rating: 4 }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow border-2 border-orange-200">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-2">"{testimonial.review}"</p>
                <div className="font-semibold text-orange-700">- {testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;