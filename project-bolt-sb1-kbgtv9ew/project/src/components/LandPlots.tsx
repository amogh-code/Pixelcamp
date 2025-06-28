import React, { useState } from 'react';
import { Star, MapPin, Trees, Wifi, Car, Zap, Filter, Users } from 'lucide-react';

const LandPlots: React.FC = () => {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([20, 100]);
  const [selectedRegion, setSelectedRegion] = useState('all');

  const landPlots = [
    {
      id: 1,
      title: 'Mystic Pine Forest Retreat',
      region: 'Pacific Northwest',
      price: 45,
      rating: 4.9,
      reviews: 34,
      capacity: 8,
      acres: 5,
      location: 'Mount Hood, Oregon',
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg',
      features: ['Hiking Trails', 'Fire Pit', 'Stream Access', 'Wildlife Viewing'],
      amenities: ['Water Hookup', 'Electrical', 'Waste Disposal'],
      owner: 'Forest Guardian Sarah',
      description: 'Secluded forest paradise with towering pines and crystal-clear stream.'
    },
    {
      id: 2,
      title: 'Desert Sunset Sanctuary',
      region: 'Southwest',
      price: 35,
      rating: 4.7,
      reviews: 28,
      capacity: 6,
      acres: 10,
      location: 'Sedona, Arizona',
      image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
      features: ['Stargazing', 'Red Rock Views', 'Cactus Garden', 'Sunrise Point'],
      amenities: ['Solar Power', 'Composting Toilet', 'Fire Ring'],
      owner: 'Desert Dave',
      description: 'Experience magical desert sunsets with breathtaking red rock formations.'
    },
    {
      id: 3,
      title: 'Lakeside Meadow Haven',
      region: 'Great Lakes',
      price: 55,
      rating: 4.8,
      reviews: 42,
      capacity: 10,
      acres: 3,
      location: 'Lake Michigan, Wisconsin',
      image: 'https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg',
      features: ['Lake Access', 'Swimming', 'Fishing', 'Kayak Rentals'],
      amenities: ['Water Hookup', 'Electrical', 'Picnic Tables', 'WiFi'],
      owner: 'Lakeside Lisa',
      description: 'Perfect lakeside camping with swimming and water sports opportunities.'
    },
    {
      id: 4,
      title: 'Mountain Peak Adventure Base',
      region: 'Rocky Mountains',
      price: 60,
      rating: 4.6,
      reviews: 19,
      capacity: 4,
      acres: 15,
      location: 'Glacier National Park, Montana',
      image: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg',
      features: ['Mountain Views', 'Hiking Trails', 'Rock Climbing', 'Alpine Lakes'],
      amenities: ['Generator OK', 'Fire Pit', 'Bear Box'],
      owner: 'Mountain Mike',
      description: 'High-altitude adventure base camp with stunning mountain vistas.'
    },
    {
      id: 5,
      title: 'Coastal Dune Hideaway',
      region: 'Atlantic Coast',
      price: 70,
      rating: 4.9,
      reviews: 31,
      capacity: 6,
      acres: 2,
      location: 'Outer Banks, North Carolina',
      image: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg',
      features: ['Beach Access', 'Dune Views', 'Surfing', 'Shell Collecting'],
      amenities: ['Water Hookup', 'Electrical', 'Outdoor Shower'],
      owner: 'Coastal Kate',
      description: 'Private beach access with rolling dunes and endless ocean views.'
    },
    {
      id: 6,
      title: 'Pixel Prairie Paradise',
      region: 'Great Plains',
      price: 25,
      rating: 4.4,
      reviews: 16,
      capacity: 12,
      acres: 20,
      location: 'Kansas Prairie Reserve',
      image: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg',
      features: ['Wildflower Fields', 'Prairie Dogs', 'Stargazing', 'Wide Open Spaces'],
      amenities: ['Solar Power', 'Composting Facilities', 'Fire Ring'],
      owner: 'Prairie Paul',
      description: 'Experience the vastness of the prairie under endless starry skies.'
    }
  ];

  const regions = ['all', 'Pacific Northwest', 'Southwest', 'Great Lakes', 'Rocky Mountains', 'Atlantic Coast', 'Great Plains'];
  const commonFeatures = ['Hiking Trails', 'Fire Pit', 'Water Access', 'Wildlife Viewing', 'Stargazing', 'Mountain Views'];

  const filteredPlots = landPlots.filter(plot => {
    const matchesRegion = selectedRegion === 'all' || plot.region === selectedRegion;
    const matchesPrice = plot.price >= priceRange[0] && plot.price <= priceRange[1];
    const matchesFeatures = selectedFeatures.length === 0 || 
      selectedFeatures.some(feature => plot.features.includes(feature));
    
    return matchesRegion && matchesPrice && matchesFeatures;
  });

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  return (
    <div className="pt-20 pb-16 px-4 min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-800 mb-4 pixel-text">
            🏕️ Discover Hidden Campsites 🏕️
          </h1>
          <p className="text-xl text-gray-700">
            Find the perfect plot of land for your camping adventure
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-4 border-blue-600 pixel-border">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-blue-600" />
            <span className="font-bold text-blue-800">Find Your Perfect Spot</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Region</label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {regions.map(region => (
                  <option key={region} value={region}>
                    {region === 'all' ? 'All Regions' : region}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Price Range: ${priceRange[0]} - ${priceRange[1]} per night
              </label>
              <div className="flex gap-4">
                <div className="flex-1">
                  <input
                    type="range"
                    min="20"
                    max="100"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-full"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="range"
                    min="20"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Desired Features</label>
              <div className="flex flex-wrap gap-2">
                {commonFeatures.map(feature => (
                  <button
                    key={feature}
                    onClick={() => toggleFeature(feature)}
                    className={`px-3 py-1 text-sm rounded transition-all duration-300 ${
                      selectedFeatures.includes(feature)
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {feature}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-700">
            Found <span className="font-bold text-blue-600">{filteredPlots.length}</span> perfect camping spots!
          </p>
        </div>

        {/* Land Plot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlots.map((plot) => (
            <div key={plot.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-blue-600 pixel-border">
              <div className="relative h-48">
                <img
                  src={plot.image}
                  alt={plot.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-sm font-bold">
                  {plot.acres} acres
                </div>
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-bold">{plot.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-2">{plot.title}</h3>
                <div className="flex items-center gap-1 text-gray-600 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{plot.location}</span>
                </div>
                
                <p className="text-gray-700 text-sm mb-4">{plot.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{plot.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Trees className="w-4 h-4" />
                      <span>{plot.acres} acres</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">${plot.price}</div>
                    <div className="text-sm text-gray-600">per night</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Features:</div>
                  <div className="flex flex-wrap gap-1">
                    {plot.features.slice(0, 4).map((feature, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Amenities:</div>
                  <div className="flex flex-wrap gap-1">
                    {plot.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-600">
                    by <span className="font-semibold">{plot.owner}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{plot.reviews} reviews</span>
                  </div>
                </div>
                
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded font-bold transition-all duration-300 transform hover:scale-105">
                  Book This Spot! 🎯
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPlots.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No Campsites Found</h3>
            <p className="text-gray-600">Try adjusting your filters to discover more amazing spots!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandPlots;