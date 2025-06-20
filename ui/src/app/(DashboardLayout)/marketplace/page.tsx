"use client";
import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  Chip, 
  Grid, 
  Stack,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Tab,
  Tabs,
  Badge,
  Paper,
  Avatar,
  Divider
} from '@mui/material';
import { 
  IconChevronLeft, 
  IconChevronRight, 
  IconMapPin, 
  IconStar, 
  IconX, 
  IconPhone, 
  IconWorld,
  IconGavel,
  IconTrendingUp
} from '@tabler/icons-react';
import PageContainer from '@/app/components/container/PageContainer';
import DashboardCard from '@/app/components/shared/DashboardCard';

// Mock data for model contracts - matching your interface
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
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face"
    ],
    rating: 4.9,
    totalReviews: 127,
    currentBid: 12000,
    startingPrice: 8000,
    bidStatus: "BID [ENTER AMOUNT]",
    status: "active"
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
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop&crop=face"
    ],
    rating: 4.7,
    totalReviews: 89,
    currentBid: 9500,
    startingPrice: 6000,
    bidStatus: "BID PENDING",
    status: "pending"
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
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=face"
    ],
    rating: 5.0,
    totalReviews: 203,
    currentBid: 15000,
    startingPrice: 10000,
    bidStatus: "BID LOST",
    status: "lost"
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
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?w=400&h=600&fit=crop&crop=face"
    ],
    rating: 4.8,
    totalReviews: 156,
    currentBid: 11000,
    startingPrice: 7500,
    bidStatus: "BID [ENTER AMOUNT]",
    status: "active"
  }
];

// Photo Gallery Component using Modernize styling
const PhotoGallery = ({ photos, modelName }: { photos: string[], modelName: string }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <Box sx={{ 
      position: 'relative', 
      height: 280, 
      overflow: 'hidden', 
      borderRadius: 2,
      border: '3px solid #ff9edb'
    }}>
      <Box
        component="img"
        src={photos[currentPhoto]}
        alt={`${modelName} - Photo ${currentPhoto + 1}`}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
      
      {photos.length > 1 && (
        <>
          <IconButton
            onClick={prevPhoto}
            sx={{
              position: 'absolute',
              left: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              width: 32,
              height: 32,
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' }
            }}
          >
            <IconChevronLeft size={20} />
          </IconButton>
          
          <IconButton
            onClick={nextPhoto}
            sx={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              width: 32,
              height: 32,
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' }
            }}
          >
            <IconChevronRight size={20} />
          </IconButton>
          
          <Box sx={{
            position: 'absolute',
            bottom: 8,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 0.5
          }}>
            {photos.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentPhoto(index)}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: index === currentPhoto ? 'white' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer'
                }}
              />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

// Model Card Component using DashboardCard
const ModelCard = ({ model, onViewDetails }: { model: any, onViewDetails: (model: any) => void }) => {
  const getBidButtonColor = () => {
    switch (model.status) {
      case 'active':
        return '#4CAF50'; // Green
      case 'pending':
        return '#FFC107'; // Yellow
      case 'lost':
        return '#f44336'; // Red
      default:
        return '#ff9edb'; // Pink
    }
  };

  return (
    <Card sx={{ 
      borderRadius: 3,
      border: '4px solid #ff9edb',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: '0 8px 32px rgba(255, 158, 219, 0.3)'
      }
    }}>
      <PhotoGallery photos={model.photos} modelName={model.name} />
      
      <CardContent sx={{ p: 3 }}>
        <Stack spacing={2}>
          {/* Header with name and rating */}
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
            <Typography variant="h6" fontWeight={600} color="text.primary">
              {model.name}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <IconStar size={16} style={{ color: '#FFD700', fill: '#FFD700' }} />
              <Typography variant="body2" color="text.secondary">
                {model.rating}
              </Typography>
            </Stack>
          </Stack>
          
          {/* Model details in grid format */}
          <Stack spacing={1}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="body2" fontWeight={600}>Name</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="body2" fontWeight={600}>Phone Type</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="body2" fontWeight={600}>Country</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="body2" fontWeight={600}>Contract</Typography>
            </Stack>
            <Typography variant="body2" fontWeight={600}>Type(salary or % split)</Typography>
            <Typography variant="body2" fontWeight={600}>NSFW or SFW?</Typography>
            <Typography variant="body2" fontWeight={600} color="#ff9edb">
              Last 30 Day Earnings
            </Typography>
          </Stack>
          
          {/* Bid Button */}
          <Button
            fullWidth
            variant="contained"
            onClick={() => onViewDetails(model)}
            sx={{
              backgroundColor: getBidButtonColor(),
              color: 'white',
              fontWeight: 600,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '0.875rem',
              '&:hover': {
                backgroundColor: getBidButtonColor(),
                opacity: 0.9
              }
            }}
          >
            {model.bidStatus}
          </Button>
          
          <Button
            fullWidth
            variant="outlined"
            sx={{
              borderColor: '#ff9edb',
              color: '#ff9edb',
              fontWeight: 600,
              borderRadius: 2,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#ff9edb',
                color: 'white',
                borderColor: '#ff9edb'
              }
            }}
          >
            See Details
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

// Model Details Dialog using Modernize components
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

  const handleBid = () => {
    if (bidAmount && parseInt(bidAmount) > model?.currentBid) {
      onBid(model.id, parseInt(bidAmount));
      setBidAmount('');
      onClose();
    }
  };

  if (!model || !open) return null;

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="md" 
      fullWidth
      PaperProps={{
        sx: { 
          borderRadius: 3,
          border: '3px solid #ff9edb'
        }
      }}
    >
      <DialogTitle sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        backgroundColor: '#ff9edb',
        color: 'white'
      }}>
        <Typography variant="h5" fontWeight={600}>
          {model.name}
        </Typography>
        <IconButton onClick={onClose} sx={{ color: 'white' }}>
          <IconX />
        </IconButton>
      </DialogTitle>
      
      <DialogContent sx={{ p: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <PhotoGallery photos={model.photos} modelName={model.name} />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Box>
                <Typography variant="h6" fontWeight={600} mb={1}>
                  {model.name}, {model.age}
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                  <IconStar size={18} style={{ color: '#FFD700', fill: '#FFD700' }} />
                  <Typography>{model.rating} ({model.totalReviews} reviews)</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconMapPin size={16} />
                  <Typography color="text.secondary">{model.location}</Typography>
                </Stack>
              </Box>

              <Paper sx={{ p: 2, backgroundColor: 'grey.50', borderRadius: 2 }}>
                <Typography variant="subtitle2" fontWeight={600} mb={1}>Contract Details</Typography>
                <Stack spacing={1}>
                  <Typography variant="body2"><strong>Type:</strong> {model.contractType}</Typography>
                  <Typography variant="body2"><strong>Phone:</strong> {model.phoneType}</Typography>
                  <Typography variant="body2"><strong>Last 30 Days:</strong> {model.last30DayEarnings}</Typography>
                </Stack>
              </Paper>

              <Paper sx={{ p: 2, backgroundColor: '#ff9edb', color: 'white', borderRadius: 2 }}>
                <Typography variant="h6" fontWeight={600} mb={1}>
                  Current Highest Bid: ${model.currentBid.toLocaleString()}
                </Typography>
                <Typography variant="body2" mb={2}>
                  Starting Price: ${model.startingPrice.toLocaleString()}
                </Typography>
                
                <Stack direction="row" spacing={2}>
                  <TextField
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    placeholder={`Min: $${(model.currentBid + 100).toLocaleString()}`}
                    type="number"
                    size="small"
                    sx={{
                      flex: 1,
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'white',
                        borderRadius: 1
                      }
                    }}
                  />
                  <Button
                    onClick={handleBid}
                    disabled={!bidAmount || parseInt(bidAmount) <= model.currentBid}
                    variant="contained"
                    startIcon={<IconGavel />}
                    sx={{
                      backgroundColor: 'white',
                      color: '#ff9edb',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: 'grey.100'
                      }
                    }}
                  >
                    Place Bid
                  </Button>
                </Stack>
                
                {bidAmount && parseInt(bidAmount) <= model.currentBid && (
                  <Typography variant="body2" sx={{ color: '#ffcccb', mt: 1 }}>
                    Bid must be higher than current bid
                  </Typography>
                )}
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

// My Bids Component using DashboardCard
const MyBids = ({ userBids }: { userBids: any[] }) => {
  return (
    <DashboardCard title="My Active Bids" subtitle="Track your current marketplace bids">
      {userBids.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <Typography variant="h6" color="text.secondary" mb={2}>
            No active bids
          </Typography>
          <Typography color="text.secondary">
            Browse the marketplace to place your first bid!
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {userBids.map((bid) => (
            <Grid item xs={12} sm={6} lg={4} key={bid.id}>
              <Card sx={{ 
                borderRadius: 3,
                border: '2px solid #ff9edb',
                overflow: 'hidden'
              }}>
                <Box sx={{ position: 'relative' }}>
                  <Box
                    component="img"
                    src={bid.model.photos[0]}
                    alt={bid.model.name}
                    sx={{
                      width: '100%',
                      height: 200,
                      objectFit: 'cover'
                    }}
                  />
                  <Chip
                    label={bid.status === 'winning' ? 'Winning' : 'Outbid'}
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      backgroundColor: bid.status === 'winning' ? 'success.main' : 'error.main',
                      color: 'white',
                      fontWeight: 600
                    }}
                  />
                </Box>
                
                <CardContent>
                  <Typography variant="h6" fontWeight={600} mb={1}>
                    {bid.model.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {bid.model.contractType}
                  </Typography>
                  
                  <Stack spacing={1}>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body2">Your Bid:</Typography>
                      <Typography variant="body2" fontWeight={600}>
                        ${bid.amount.toLocaleString()}
                      </Typography>
                    </Stack>
                    
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body2">Current High:</Typography>
                      <Typography variant="body2" fontWeight={600}>
                        ${bid.currentHighBid.toLocaleString()}
                      </Typography>
                    </Stack>
                    
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body2">Time Left:</Typography>
                      <Typography variant="body2" fontWeight={600}>
                        {bid.timeLeft}
                      </Typography>
                    </Stack>
                  </Stack>
                  
                  {bid.status === 'outbid' && (
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        mt: 2,
                        backgroundColor: '#ff9edb',
                        '&:hover': { backgroundColor: '#ff7dc7' }
                      }}
                    >
                      Increase Bid
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </DashboardCard>
  );
};

// Main Marketplace Component
export default function CweatorMarketplace() {
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
    setModels(prev => prev.map(model => 
      model.id === modelId 
        ? { ...model, currentBid: bidAmount }
        : model
    ));

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
      <Box sx={{ p: 3 }}>
        {/* Header using CWEATOR styling */}
        <Typography 
          variant="h2" 
          align="center"
          sx={{ 
            fontWeight: 700, 
            color: '#ff9edb',
            mb: 4,
            letterSpacing: '0.1em'
          }}
        >
          CWEATOR MARKETPLACE
        </Typography>

        {/* VIEW ACTIVE BIDS Button */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#ff9edb',
              color: 'white',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: 3,
              fontSize: '1.1rem',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#ff7dc7'
              }
            }}
            onClick={() => setActiveTab(activeTab === 0 ? 1 : 0)}
          >
            VIEW ACTIVE BIDS
          </Button>
        </Box>

        {/* Tabs using Material-UI */}
        <Box sx={{ mb: 4 }}>
          <Tabs 
            value={activeTab} 
            onChange={(e, newValue) => setActiveTab(newValue)}
            centered
            sx={{
              '& .MuiTab-root': {
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none',
                color: 'text.secondary',
                '&.Mui-selected': {
                  color: '#ff9edb'
                }
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#ff9edb',
                height: 3
              }
            }}
          >
            <Tab 
              label="Available Contracts" 
            />
            <Tab 
              label={
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography>My Bids</Typography>
                  {userBids.length > 0 && (
                    <Badge 
                      badgeContent={userBids.length} 
                      sx={{
                        '& .MuiBadge-badge': {
                          backgroundColor: '#ff9edb',
                          color: 'white'
                        }
                      }}
                    />
                  )}
                </Stack>
              }
            />
          </Tabs>
        </Box>

        {/* Tab Content */}
        {activeTab === 0 ? (
          <Grid container spacing={3}>
            {models.map((model) => (
              <Grid item xs={12} sm={6} lg={3} key={model.id}>
                <ModelCard 
                  model={model} 
                  onViewDetails={handleViewDetails}
                />
              </Grid>
            ))}
          </Grid>
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
      </Box>
    </PageContainer>
  );
}