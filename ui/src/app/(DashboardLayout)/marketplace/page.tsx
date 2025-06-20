"use client";
import React, { useState } from 'react';
import { 
  IconChevronLeft, 
  IconChevronRight, 
  IconMapPin, 
  IconStar, 
  IconTrendingUp, 
  IconGavel, 
  IconX, 
  IconPhone, 
  IconWorld 
} from '@tabler/icons-react';
import PageContainer from '@/app/components/container/PageContainer';

// Mock data for model contracts
const modelContracts = [
  {
    id: 1,
    name: "Alexandra Rose",
    age: 24,
    location: "Los Angeles, CA",
    phoneType: "iPhone",
    country: "USA",
    contractType: "Exclusive Content",
    last30DayEarnings: "$24,500",
    photos: [
      "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=600&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&crop=face"
    ],
    rating: 4.9,
    totalReviews: 127,
    currentBid: 12000,
    startingPrice: 8000,
    bio: "Top-performing content creator specializing in lifestyle and fashion content. Proven track record of high engagement rates.",
    specialties: ["Fashion", "Lifestyle", "Beauty"],
    metrics: {
      avgViews: "2.3M",
      engagement: "8.5%",
      followers: "450K"
    }
  },
  {
    id: 2,
    name: "Sofia Martinez",
    age: 22,
    location: "Miami, FL",
    phoneType: "iPhone",
    country: "USA",
    contractType: "Brand Partnership",
    last30DayEarnings: "$18,200",
    photos: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1509909756405-be0199881695?w=400&h=600&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop&crop=face"
    ],
    rating: 4.7,
    totalReviews: 89,
    currentBid: 9500,
    startingPrice: 6000,
    bio: "Bilingual content creator with strong presence in Latin American markets. Expert in travel and wellness content.",
    specialties: ["Travel", "Wellness", "Bilingual Content"],
    metrics: {
      avgViews: "1.8M",
      engagement: "9.2%",
      followers: "320K"
    }
  },
  {
    id: 3,
    name: "Emma Thompson",
    age: 26,
    location: "New York, NY",
    phoneType: "iPhone",
    country: "USA",
    contractType: "Creative Collaboration",
    last30DayEarnings: "$31,800",
    photos: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=600&fit=crop&crop=face"
    ],
    rating: 5.0,
    totalReviews: 203,
    currentBid: 15000,
    startingPrice: 10000,
    bio: "Award-winning content creator and photographer. Specializes in high-end fashion and artistic content.",
    specialties: ["Fashion", "Photography", "Art Direction"],
    metrics: {
      avgViews: "3.1M",
      engagement: "7.8%",
      followers: "680K"
    }
  },
  {
    id: 4,
    name: "Zoe Chen",
    age: 23,
    location: "Seattle, WA",
    phoneType: "iPhone",
    country: "USA",
    contractType: "Tech Reviews",
    last30DayEarnings: "$19,600",
    photos: [
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?w=400&h=600&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=600&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=600&fit=crop&crop=face"
    ],
    rating: 4.8,
    totalReviews: 156,
    currentBid: 11000,
    startingPrice: 7500,
    bio: "Tech-savvy creator with expertise in product reviews and unboxing content. Strong appeal to Gen Z audience.",
    specialties: ["Tech", "Gaming", "Product Reviews"],
    metrics: {
      avgViews: "2.7M",
      engagement: "10.1%",
      followers: "510K"
    }
  }
];

// Photo Gallery Component
const PhotoGallery = ({ photos, modelName }: { photos: string[], modelName: string }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="relative h-72 overflow-hidden rounded-xl">
      <img
        src={photos[currentPhoto]}
        alt={`${modelName} - Photo ${currentPhoto + 1}`}
        className="w-full h-full object-cover"
      />
      
      {photos.length > 1 && (
        <>
          <button
            onClick={prevPhoto}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70 transition-all"
          >
            <IconChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextPhoto}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70 transition-all"
          >
            <IconChevronRight size={20} />
          </button>
          
          {/* Photo indicators */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPhoto(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentPhoto ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// Model Card Component
const ModelCard = ({ model, onViewDetails }: { model: any, onViewDetails: (model: any) => void }) => {
  return (
    <div className="bg-white rounded-2xl border-4 border-pink-400 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg">
      <PhotoGallery photos={model.photos} modelName={model.name} />
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{model.name}</h3>
          <div className="flex items-center gap-1">
            <IconStar className="text-yellow-400 fill-current" size={16} />
            <span className="text-sm text-gray-600">{model.rating}</span>
          </div>
        </div>
        
        <div className="space-y-1 mb-3">
          <div className="flex items-center text-gray-600 text-sm">
            <IconPhone size={14} className="mr-1" />
            <span>{model.phoneType}</span>
          </div>
          
          <div className="flex items-center text-gray-600 text-sm">
            <IconWorld size={14} className="mr-1" />
            <span>{model.country}</span>
          </div>
          
          <div className="text-gray-600 text-sm">{model.contractType}</div>
        </div>
        
        <div className="text-pink-500 font-semibold mb-2">
          Last 30 Day Earnings: {model.last30DayEarnings}
        </div>
        
        <div className="text-gray-800 font-semibold mb-3">
          Current Bid: ${model.currentBid.toLocaleString()}
        </div>
        
        <button
          onClick={() => onViewDetails(model)}
          className="w-full bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

// Model Details Dialog
const ModelDetailsDialog = ({ 
  model, 
  open, 
  onClose, 
  onBid 
}: { 
  model: any, 
  open: boolean, 
  onClose: () => void, 
  onBid: (modelId: number, bidAmount: number) => void 
}) => {
  const [bidAmount, setBidAmount] = useState('');
  const [showBidSuccess, setShowBidSuccess] = useState(false);

  const handleBid = () => {
    if (bidAmount && parseInt(bidAmount) > model.currentBid) {
      onBid(model.id, parseInt(bidAmount));
      setShowBidSuccess(true);
      setBidAmount('');
      setTimeout(() => {
        setShowBidSuccess(false);
        onClose();
      }, 2000);
    }
  };

  if (!model || !open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">{model.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <IconX size={24} />
          </button>
        </div>
        
        <div className="p-6">
          {showBidSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4">
              Bid placed successfully! You are now the highest bidder.
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <PhotoGallery photos={model.photos} modelName={model.name} />
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">{model.name}, {model.age}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <IconStar className="text-yellow-400 fill-current" size={18} />
                  <span>{model.rating} ({model.totalReviews} reviews)</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <IconMapPin size={16} className="mr-1" />
                  <span>{model.location}</span>
                </div>
              </div>

              <hr />

              <div>
                <h4 className="font-semibold mb-2">Contract Details</h4>
                <div className="space-y-1 text-sm">
                  <div><strong>Type:</strong> {model.contractType}</div>
                  <div><strong>Phone:</strong> {model.phoneType}</div>
                  <div><strong>Last 30 Days:</strong> {model.last30DayEarnings}</div>
                </div>
              </div>

              <hr />

              <div>
                <h4 className="font-semibold mb-2">Performance Metrics</h4>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-gray-600">Avg Views</div>
                    <div className="text-lg font-semibold text-pink-500">{model.metrics.avgViews}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Engagement</div>
                    <div className="text-lg font-semibold text-pink-500">{model.metrics.engagement}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Followers</div>
                    <div className="text-lg font-semibold text-pink-500">{model.metrics.followers}</div>
                  </div>
                </div>
              </div>

              <hr />

              <div>
                <h4 className="font-semibold mb-2">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {model.specialties.map((specialty: string, index: number) => (
                    <span
                      key={index}
                      className="bg-pink-400 text-white text-xs px-2 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-gray-600 text-sm">{model.bio}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <h4 className="text-lg font-semibold mb-2">
              Current Highest Bid: ${model.currentBid.toLocaleString()}
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Starting Price: ${model.startingPrice.toLocaleString()}
            </p>
            
            <div className="flex gap-3">
              <div className="flex-1">
                <input
                  type="number"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  placeholder={`Minimum: $${(model.currentBid + 100).toLocaleString()}`}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <button
                onClick={handleBid}
                disabled={!bidAmount || parseInt(bidAmount) <= model.currentBid}
                className="bg-pink-400 hover:bg-pink-500 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                <IconGavel size={16} />
                Place Bid
              </button>
            </div>
            
            {bidAmount && parseInt(bidAmount) <= model.currentBid && (
              <p className="text-red-500 text-sm mt-2">
                Bid must be higher than current bid
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// My Bids Component
const MyBids = ({ userBids }: { userBids: any[] }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-pink-500 mb-6">My Active Bids</h2>
      
      {userBids.length === 0 ? (
        <div className="bg-white rounded-xl p-8 text-center shadow-lg">
          <h3 className="text-xl text-gray-600 mb-2">No active bids</h3>
          <p className="text-gray-500">Browse the marketplace to place your first bid!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userBids.map((bid: any) => (
            <div key={bid.id} className="bg-white rounded-xl border-2 border-pink-400 overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  src={bid.model.photos[0]}
                  alt={bid.model.name}
                  className="w-full h-48 object-cover"
                />
                <span
                  className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold ${
                    bid.status === 'winning'
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                  }`}
                >
                  {bid.status === 'winning' ? 'Winning' : 'Outbid'}
                </span>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{bid.model.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{bid.model.contractType}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Your Bid:</span>
                    <span className="text-sm font-semibold">${bid.amount.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-sm">Current High:</span>
                    <span className="text-sm font-semibold">${bid.currentHighBid.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-sm">Time Left:</span>
                    <span className="text-sm font-semibold">{bid.timeLeft}</span>
                  </div>
                </div>
                
                {bid.status === 'outbid' && (
                  <button className="w-full mt-4 bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                    Increase Bid
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Main Marketplace Component
export default function Marketplace() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedModel, setSelectedModel] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [models, setModels] = useState(modelContracts);
  const [userBids, setUserBids] = useState([
    {
      id: 1,
      model: modelContracts[0],
      amount: 11500,
      currentHighBid: 12000,
      status: 'outbid',
      timeLeft: '2d 14h'
    },
    {
      id: 2,
      model: modelContracts[2],
      amount: 15000,
      currentHighBid: 15000,
      status: 'winning',
      timeLeft: '5d 8h'
    }
  ]);

  const handleViewDetails = (model: any) => {
    setSelectedModel(model);
    setDialogOpen(true);
  };

  const handleBid = (modelId: number, bidAmount: number) => {
    // Update model's current bid
    setModels(prev => prev.map(model => 
      model.id === modelId 
        ? { ...model, currentBid: bidAmount }
        : model
    ));

    // Add or update user's bid
    const existingBidIndex = userBids.findIndex(bid => bid.model.id === modelId);
    const newBid = {
      id: Date.now(),
      model: models.find(m => m.id === modelId)!,
      amount: bidAmount,
      currentHighBid: bidAmount,
      status: 'winning',
      timeLeft: '7d 0h'
    };

    if (existingBidIndex >= 0) {
      setUserBids(prev => prev.map((bid, index) => 
        index === existingBidIndex ? newBid : bid
      ));
    } else {
      setUserBids(prev => [...prev, newBid]);
    }
  };

  return (
    <PageContainer title="Marketplace | CWEATORS" description="Browse and bid on model contracts">
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <h1 className="text-4xl font-bold text-pink-500 mb-8 text-center tracking-wide">
            CWEATOR MARKETPLACE
          </h1>

          {/* Tabs */}
          <div className="mb-8">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab(0)}
                className={`px-6 py-3 font-semibold text-lg transition-colors ${
                  activeTab === 0
                    ? 'text-pink-500 border-b-2 border-pink-500'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Available Contracts
              </button>
              <button
                onClick={() => setActiveTab(1)}
                className={`px-6 py-3 font-semibold text-lg transition-colors relative ${
                  activeTab === 1
                    ? 'text-pink-500 border-b-2 border-pink-500'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                My Bids
                {userBids.length > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {userBids.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {models.map((model) => (
                <ModelCard 
                  key={model.id}
                  model={model} 
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          ) : (
            <MyBids userBids={userBids} />
          )}

          {/* Model Details Dialog */}
          <ModelDetailsDialog
            model={selectedModel}
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
            onBid={handleBid}
          />
        </div>
      </div>
    </PageContainer>
  );
}