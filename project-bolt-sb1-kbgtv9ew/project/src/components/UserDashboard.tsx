import React, { useState } from 'react';
import { User, Calendar, MapPin, Star, Plus, Edit, Trash2, MessageCircle } from 'lucide-react';

interface UserDashboardProps {
  userType: string;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ userType }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const renterTabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'bookings', label: 'My Bookings', icon: Calendar },
    { id: 'favorites', label: 'Favorites', icon: Star },
    { id: 'messages', label: 'Messages', icon: MessageCircle }
  ];

  const ownerTabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'listings', label: 'My Listings', icon: MapPin },
    { id: 'bookings', label: 'Reservations', icon: Calendar },
    { id: 'messages', label: 'Messages', icon: MessageCircle }
  ];

  const tabs = userType === 'owner' ? ownerTabs : renterTabs;

  const mockBookings = [
    {
      id: 1,
      title: 'Luxury Mountain Explorer',
      type: 'RV Rental',
      dates: 'June 15-22, 2024',
      location: 'Colorado Springs, CO',
      status: 'confirmed',
      price: '$1,050',
      image: 'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg'
    },
    {
      id: 2,
      title: 'Mystic Pine Forest Retreat',
      type: 'Campsite',
      dates: 'July 4-7, 2024',
      location: 'Mount Hood, Oregon',
      status: 'pending',
      price: '$180',
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg'
    }
  ];

  const mockListings = [
    {
      id: 1,
      title: 'Family Adventure Palace',
      type: 'RV',
      price: '$200/night',
      bookings: 12,
      rating: 4.9,
      status: 'active',
      image: 'https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg'
    },
    {
      id: 2,
      title: 'Forest Camping Paradise',
      type: 'Land Plot',
      price: '$45/night',
      bookings: 8,
      rating: 4.7,
      status: 'active',
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg'
    }
  ];

  return (
    <div className="pt-20 pb-16 px-4 min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-2 pixel-text">
            🎯 Your Adventure Dashboard 🎯
          </h1>
          <p className="text-xl text-gray-700">
            {userType === 'owner' ? 'Manage your listings and reservations' : 'Track your bookings and adventures'}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden border-4 border-purple-600 pixel-border">
          <div className="flex flex-wrap border-b border-purple-200">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-purple-500 text-white'
                      : 'text-purple-700 hover:bg-purple-50'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-lg">
                    <div className="text-3xl font-bold mb-2">
                      {userType === 'owner' ? '24' : '7'}
                    </div>
                    <div className="text-green-100">
                      {userType === 'owner' ? 'Total Bookings' : 'Adventures Completed'}
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6 rounded-lg">
                    <div className="text-3xl font-bold mb-2">
                      {userType === 'owner' ? '$3,200' : '$1,800'}
                    </div>
                    <div className="text-blue-100">
                      {userType === 'owner' ? 'Monthly Earnings' : 'Total Spent'}
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white p-6 rounded-lg">
                    <div className="text-3xl font-bold mb-2">4.8</div>
                    <div className="text-orange-100">Average Rating</div>
                  </div>
                </div>

                <div className="bg-purple-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-purple-800 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {userType === 'owner' ? (
                      <>
                        <button className="bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-lg font-semibold transition-all duration-300">
                          <Plus className="w-5 h-5 inline mr-2" />
                          Add New Listing
                        </button>
                        <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg font-semibold transition-all duration-300">
                          <Calendar className="w-5 h-5 inline mr-2" />
                          Manage Calendar
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-lg font-semibold transition-all duration-300">
                          <MapPin className="w-5 h-5 inline mr-2" />
                          Find New Adventures
                        </button>
                        <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg font-semibold transition-all duration-300">
                          <Star className="w-5 h-5 inline mr-2" />
                          Leave Reviews
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'bookings' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-purple-800">
                    {userType === 'owner' ? 'Incoming Reservations' : 'My Bookings'}
                  </h3>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {mockBookings.length} {userType === 'owner' ? 'reservations' : 'bookings'}
                  </span>
                </div>

                <div className="space-y-4">
                  {mockBookings.map((booking) => (
                    <div key={booking.id} className="bg-white border-2 border-purple-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex flex-col md:flex-row gap-4">
                        <img
                          src={booking.image}
                          alt={booking.title}
                          className="w-full md:w-32 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="text-lg font-bold text-purple-800">{booking.title}</h4>
                              <p className="text-gray-600">{booking.type} • {booking.location}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              booking.status === 'confirmed' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {booking.status}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">{booking.dates}</span>
                            <span className="text-2xl font-bold text-purple-600">{booking.price}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded font-semibold transition-all duration-300">
                          View Details
                        </button>
                        <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded font-semibold transition-all duration-300">
                          <MessageCircle className="w-4 h-4 inline mr-1" />
                          Message
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'listings' && userType === 'owner' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-purple-800">My Listings</h3>
                  <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded font-semibold transition-all duration-300">
                    <Plus className="w-4 h-4 inline mr-2" />
                    Add New Listing
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockListings.map((listing) => (
                    <div key={listing.id} className="bg-white border-2 border-purple-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-bold text-purple-800">{listing.title}</h4>
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            listing.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {listing.status}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{listing.type}</p>
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-xl font-bold text-purple-600">{listing.price}</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm">{listing.rating} ({listing.bookings} bookings)</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-2 rounded font-semibold transition-all duration-300">
                            <Edit className="w-4 h-4 inline mr-1" />
                            Edit
                          </button>
                          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-2 rounded transition-all duration-300">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'favorites' && userType === 'renter' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-purple-800">Saved Favorites</h3>
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">💜</div>
                  <h4 className="text-xl font-bold text-gray-700 mb-2">No favorites yet!</h4>
                  <p className="text-gray-600 mb-4">Start exploring and save your dream RVs and campsites.</p>
                  <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded font-bold transition-all duration-300">
                    Explore Adventures
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-purple-800">Messages</h3>
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">💬</div>
                  <h4 className="text-xl font-bold text-gray-700 mb-2">No messages yet!</h4>
                  <p className="text-gray-600">Connect with other adventurers and start the conversation.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Feedback Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-4 border-purple-600 pixel-border">
          <h3 className="text-2xl font-bold text-purple-800 mb-4">Help Us Improve PixelCamp!</h3>
          <p className="text-gray-700 mb-4">
            Your feedback helps us create better camping experiences for everyone in our community.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded font-bold transition-all duration-300">
              💡 Suggest Feature
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-bold transition-all duration-300">
              🐛 Report Issue
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-bold transition-all duration-300">
              ⭐ Leave Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;