import React, { useState } from 'react';
import { Star, Users, Bed, Wifi, ParkingCircle, Filter, MapPin } from 'lucide-react';

const RVListings: React.FC = () => {
  const [priceRange, setPriceRange] = useState([50, 300]);
  const [selectedType, setSelectedType] = useState('all');
  const [guestCount, setGuestCount] = useState(2);

  const rvListings = [
    {
      id: 1,
      title: 'Luxury Mountain Explorer',
      type: 'Class A',
      price: 150,
      rating: 4.9,
      reviews: 47,
      guests: 6,
      beds: 3,
      location: 'Colorado Springs, CO',
      image: 'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg',
      amenities: ['WiFi', 'Kitchen', 'Bathroom', 'Generator'],
      owner: 'Mountain Mike',
      description: 'Perfect for family adventures with stunning mountain views.'
    },
    {
      id: 2,
      title: 'Cozy Forest Cruiser',
      type: 'Class C',
      price: 95,
      rating: 4.7,
      reviews: 23,
      guests: 4,
      beds: 2,
      location: 'Portland, OR',
      image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg',
      amenities: ['Kitchen', 'Bathroom', 'Solar Power'],
      owner: 'Forest Friends',
      description: 'Eco-friendly RV perfect for Pacific Northwest adventures.'
    },
    {
      id: 3,
      title: 'Desert Adventure Wagon',
      type: 'Travel Trailer',
      price: 75,
      rating: 4.8,
      reviews: 34,
      guests: 3,
      beds: 1,
      location: 'Phoenix, AZ',
      image: 'https://images.pexels.com/photos/2317711/pexels-photo-2317711.jpeg',
      amenities: ['AC', 'Kitchen', 'Solar Panel'],
      owner: 'Desert Dan',
      description: 'Lightweight and perfect for desert camping experiences.'
    },
    {
      id: 4,
      title: 'Coastal Comfort Van',
      type: 'Camper Van',
      price: 120,
      rating: 4.6,
      reviews: 18,
      guests: 2,
      beds: 1,
      location: 'San Diego, CA',
      image: 'https://images.pexels.com/photos/2827374/pexels-photo-2827374.jpeg',
      amenities: ['Surf Rack', 'Kitchen', 'WiFi'],
      owner: 'Beach Bum Bob',
      description: 'Perfect van for coastal adventures and surf trips.'
    },
    {
      id: 5,
      title: 'Family Adventure Palace',
      type: 'Class A',
      price: 200,
      rating: 5.0,
      reviews: 12,
      guests: 8,
      beds: 4,
      location: 'Nashville, TN',
      image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg',
      amenities: ['WiFi', 'Kitchen', 'Bathroom', 'Entertainment System'],
      owner: 'Country Roads RV',
      description: 'Spacious luxury RV perfect for large family getaways.'
    },
    {
      id: 6,
      title: 'Retro Pixel Cruiser',
      type: 'Vintage',
      price: 85,
      rating: 4.4,
      reviews: 29,
      guests: 4,
      beds: 2,
      location: 'Austin, TX',
      image: 'https://images.pexels.com/photos/2317711/pexels-photo-2317711.jpeg',
      amenities: ['Retro Interior', 'Kitchen', 'Bluetooth'],
      owner: 'Pixel Pete',
      description: 'A unique vintage experience with modern pixel-art styling.'
    }
  ];

  const rvTypes = ['all', 'Class A', 'Class C', 'Travel Trailer', 'Camper Van', 'Vintage'];

  const filteredRVs = rvListings.filter(rv => {
    return (
      (selectedType === 'all' || rv.type === selectedType) &&
      rv.price >= priceRange[0] &&
      rv.price <= priceRange[1] &&
      rv.guests >= guestCount
    );
  });

  return (
    <div className="pt-20 pb-16 px-4 min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-800 mb-4 pixel-text">
            🚐 Find Your Perfect RV 🚐
          </h1>
          <p className="text-xl text-gray-700">
            Discover amazing RVs for your next outdoor adventure
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-4 border-green-600 pixel-border">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-green-600" />
            <span className="font-bold text-green-800">Filter Your Adventure</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">RV Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {rvTypes.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Guests</label>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {[1,2,3,4,5,6,7,8].map(num => (
                  <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Min Price</label>
              <input
                type="range"
                min="25"
                max="300"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-full"
              />
              <span className="text-sm text-gray-600">${priceRange[0]}/night</span>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Max Price</label>
              <input
                type="range"
                min="25"
                max="300"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-full"
              />
              <span className="text-sm text-gray-600">${priceRange[1]}/night</span>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-700">
            Found <span className="font-bold text-green-600">{filteredRVs.length}</span> amazing RVs for your adventure!
          </p>
        </div>

        {/* RV Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRVs.map((rv) => (
            <div key={rv.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-green-600 pixel-border">
              <div className="relative h-48">
                <img
                  src={rv.image}
                  alt={rv.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-sm font-bold">
                  {rv.type}
                </div>
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-bold">{rv.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-2">{rv.title}</h3>
                <div className="flex items-center gap-1 text-gray-600 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{rv.location}</span>
                </div>
                
                <p className="text-gray-700 text-sm mb-4">{rv.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{rv.guests}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{rv.beds}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">${rv.price}</div>
                    <div className="text-sm text-gray-600">per night</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {rv.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    by <span className="font-semibold">{rv.owner}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{rv.reviews} reviews</span>
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded font-bold transition-all duration-300 transform hover:scale-105">
                  Book This RV! 🎯
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredRVs.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No RVs Found</h3>
            <p className="text-gray-600">Try adjusting your filters to find more options!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RVListings;