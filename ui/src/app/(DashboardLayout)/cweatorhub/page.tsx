'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Button, 
  Chip,
  Avatar,
  IconButton,
  Fab,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Switch,
  FormControlLabel,
  Stack,
  Grid,
  Paper,
  Badge,
  Tab,
  Tabs,
  LinearProgress,
  Slider,
  Divider,
  Menu,
  MenuItem
} from '@mui/material';
import { 
  Play, 
  Pause, 
  Heart, 
  MessageCircle, 
  Share2, 
  MoreVertical,
  Upload,
  Video,
  ImageIcon,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Filter,
  Music,
  Scissors,
  Palette,
  Sparkles,
  Users,
  DollarSign,
  TrendingUp,
  Camera,
  Edit,
  Save,
  Settings,
  Crown,
  Zap
} from 'lucide-react';

// Mock data for posts
const mockPosts = [
  {
    id: 1,
    user: {
      name: "Alexandra Rose",
      username: "@alexandra_creative",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      verified: true,
      isPremium: true
    },
    type: "reel",
    content: {
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1611095970649-c199b76a46d1?w=400&h=600&fit=crop",
      duration: "0:15"
    },
    caption: "Creating magic with the new CWEATOR tools! ✨ Who else is loving these features? #CweatorMagic #ContentCreator",
    likes: 2847,
    comments: 156,
    shares: 89,
    timestamp: "2h",
    isLocked: false,
    unlockPrice: 0,
    tags: ["tutorial", "creative", "trending"]
  },
  {
    id: 2,
    user: {
      name: "Sofia Martinez",
      username: "@sofia_vibes",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face",
      verified: false,
      isPremium: false
    },
    type: "image",
    content: {
      imageUrl: "https://images.unsplash.com/photo-1611095970649-c199b76a46d1?w=600&h=800&fit=crop",
      aspectRatio: "4:5"
    },
    caption: "Exclusive behind-the-scenes content! 🔥 Unlock to see the full shoot",
    likes: 1234,
    comments: 67,
    shares: 23,
    timestamp: "4h",
    isLocked: true,
    unlockPrice: 4.99,
    tags: ["exclusive", "bts", "premium"]
  },
  {
    id: 3,
    user: {
      name: "Emma Thompson",
      username: "@emma_creates",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      verified: true,
      isPremium: true
    },
    type: "reel",
    content: {
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      thumbnail: "https://images.unsplash.com/photo-1611095970649-c199b76a46d1?w=400&h=600&fit=crop",
      duration: "0:30"
    },
    caption: "Day in my life as a CWEATOR! From morning coffee to late night editing 💪",
    likes: 5892,
    comments: 341,
    shares: 178,
    timestamp: "1d",
    isLocked: false,
    unlockPrice: 0,
    tags: ["dayinlife", "motivation", "creator"]
  }
];

// Modern Post Component
const PostCard = ({ post, onLike, onComment, onShare, onUnlock }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [liked, setLiked] = useState(false);
  const [showUnlockDialog, setShowUnlockDialog] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (post.isLocked) {
      setShowUnlockDialog(true);
      return;
    }

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleLike = () => {
    setLiked(!liked);
    onLike(post.id);
  };

  const handleUnlock = () => {
    onUnlock(post.id, post.unlockPrice);
    setShowUnlockDialog(false);
  };

  return (
    <Card sx={{ 
      mb: 3, 
      borderRadius: 4,
      overflow: 'hidden',
      background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
      }
    }}>
      {/* Header */}
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
              post.user.isPremium ? (
                <Crown size={16} style={{ color: '#FFD700' }} />
              ) : null
            }
          >
            <Avatar 
              src={post.user.avatar} 
              sx={{ 
                width: 48, 
                height: 48,
                border: post.user.verified ? '3px solid #ff9edb' : 'none'
              }} 
            />
          </Badge>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="h6" fontWeight={600} sx={{ fontSize: '1rem' }}>
                {post.user.name}
              </Typography>
              {post.user.verified && (
                <Zap size={16} style={{ color: '#ff9edb' }} />
              )}
            </Box>
            <Typography variant="body2" color="text.secondary">
              {post.user.username} • {post.timestamp}
            </Typography>
          </Box>
        </Box>
        <IconButton onClick={(e) => setMenuAnchor(e.currentTarget)}>
          <MoreVertical size={20} />
        </IconButton>
      </Box>

      {/* Content */}
      <Box sx={{ position: 'relative' }}>
        {post.type === 'reel' ? (
          <Box 
            sx={{ 
              position: 'relative', 
              aspectRatio: '9/16', 
              maxHeight: '600px',
              backgroundColor: '#000',
              cursor: 'pointer',
              overflow: 'hidden'
            }}
            onClick={handlePlayPause}
          >
            <video
              ref={videoRef}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: post.isLocked ? 'blur(20px)' : 'none'
              }}
              poster={post.content.thumbnail}
              loop
              muted
            >
              <source src={post.content.videoUrl} type="video/mp4" />
            </video>
            
            {/* Play/Pause Overlay */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(0,0,0,0.7)',
                borderRadius: '50%',
                padding: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.3s ease'
              }}
            >
              {post.isLocked ? (
                <Lock size={32} color="white" />
              ) : isPlaying ? (
                <Pause size={32} color="white" />
              ) : (
                <Play size={32} color="white" />
              )}
            </Box>

            {/* Duration Badge */}
            {!post.isLocked && (
              <Chip
                label={post.content.duration}
                sx={{
                  position: 'absolute',
                  bottom: 16,
                  right: 16,
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  fontSize: '0.75rem'
                }}
              />
            )}

            {/* Lock Overlay */}
            {post.isLocked && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  p: 3,
                  color: 'white',
                  textAlign: 'center'
                }}
              >
                <Lock size={24} style={{ marginBottom: 8 }} />
                <Typography variant="h6" fontWeight={600}>
                  Unlock for ${post.unlockPrice}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
                  Exclusive content from {post.user.name}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#ff9edb',
                    '&:hover': { backgroundColor: '#ff7dc7' }
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowUnlockDialog(true);
                  }}
                >
                  Unlock Now
                </Button>
              </Box>
            )}
          </Box>
        ) : (
          <Box sx={{ position: 'relative' }}>
            <img
              src={post.content.imageUrl}
              alt="Post content"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '600px',
                objectFit: 'cover',
                filter: post.isLocked ? 'blur(20px)' : 'none'
              }}
            />
            {post.isLocked && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0,0,0,0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}
              >
                <Lock size={48} style={{ marginBottom: 16 }} />
                <Typography variant="h5" fontWeight={600} mb={1}>
                  Unlock for ${post.unlockPrice}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#ff9edb',
                    '&:hover': { backgroundColor: '#ff7dc7' }
                  }}
                  onClick={() => setShowUnlockDialog(true)}
                >
                  Unlock Content
                </Button>
              </Box>
            )}
          </Box>
        )}
      </Box>

      {/* Actions */}
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton 
              onClick={handleLike}
              sx={{ 
                color: liked ? '#ff9edb' : 'inherit',
                transition: 'all 0.2s ease'
              }}
            >
              <Heart size={24} fill={liked ? '#ff9edb' : 'none'} />
            </IconButton>
            <Typography variant="body2" fontWeight={500}>
              {(post.likes + (liked ? 1 : 0)).toLocaleString()}
            </Typography>
            
            <IconButton onClick={() => onComment(post.id)} sx={{ ml: 2 }}>
              <MessageCircle size={24} />
            </IconButton>
            <Typography variant="body2" fontWeight={500}>
              {post.comments.toLocaleString()}
            </Typography>

            <IconButton onClick={() => onShare(post.id)} sx={{ ml: 2 }}>
              <Share2 size={24} />
            </IconButton>
            <Typography variant="body2" fontWeight={500}>
              {post.shares.toLocaleString()}
            </Typography>
          </Box>

          {/* Tags */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            {post.tags.slice(0, 2).map((tag, index) => (
              <Chip
                key={index}
                label={`#${tag}`}
                size="small"
                sx={{
                  backgroundColor: '#ff9edb',
                  color: 'white',
                  fontSize: '0.7rem',
                  height: 24
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Caption */}
        <Typography variant="body1" sx={{ mb: 1 }}>
          <Typography component="span" fontWeight={600}>
            {post.user.username}
          </Typography>{' '}
          {post.caption}
        </Typography>
      </Box>

      {/* Unlock Dialog */}
      <Dialog open={showUnlockDialog} onClose={() => setShowUnlockDialog(false)}>
        <DialogTitle>Unlock Premium Content</DialogTitle>
        <DialogContent>
          <Box sx={{ textAlign: 'center', p: 2 }}>
            <Avatar 
              src={post.user.avatar} 
              sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }} 
            />
            <Typography variant="h6" mb={1}>
              {post.user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
              Unlock this exclusive content for a one-time payment
            </Typography>
            <Chip
              label={`$${post.unlockPrice}`}
              sx={{
                backgroundColor: '#ff9edb',
                color: 'white',
                fontSize: '1.2rem',
                height: 40,
                mb: 3
              }}
            />
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button
                variant="outlined"
                onClick={() => setShowUnlockDialog(false)}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#ff9edb',
                  '&:hover': { backgroundColor: '#ff7dc7' }
                }}
                onClick={handleUnlock}
              >
                Unlock Content
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>

      {/* Menu */}
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={() => setMenuAnchor(null)}
      >
        <MenuItem>Report</MenuItem>
        <MenuItem>Share</MenuItem>
        <MenuItem>Copy Link</MenuItem>
      </Menu>
    </Card>
  );
};

// Create Content Dialog
const CreateContentDialog = ({ open, onClose, onPost }) => {
  const [contentType, setContentType] = useState('reel');
  const [caption, setCaption] = useState('');
  const [isLocked, setIsLocked] = useState(false);
  const [price, setPrice] = useState(5);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handlePost = () => {
    setIsUploading(true);
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          onPost({
            type: contentType,
            caption,
            isLocked,
            price: isLocked ? price : 0
          });
          onClose();
          return 0;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ 
        backgroundColor: '#ff9edb', 
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
        <Sparkles size={24} />
        Create New Content
      </DialogTitle>
      <DialogContent sx={{ p: 3 }}>
        <Stack spacing={3}>
          {/* Content Type */}
          <Box>
            <Typography variant="h6" mb={2}>Content Type</Typography>
            <Tabs 
              value={contentType} 
              onChange={(e, val) => setContentType(val)}
              sx={{
                '& .MuiTab-root.Mui-selected': {
                  color: '#ff9edb'
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#ff9edb'
                }
              }}
            >
              <Tab 
                value="reel" 
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Video size={20} />
                    Reel
                  </Box>
                } 
              />
              <Tab 
                value="image" 
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <ImageIcon size={20} />
                    Image
                  </Box>
                } 
              />
            </Tabs>
          </Box>

          {/* Upload Area */}
          <Paper
            sx={{
              p: 4,
              textAlign: 'center',
              border: '2px dashed #ff9edb',
              backgroundColor: '#fef7ff',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: '#fdf2ff'
              }
            }}
          >
            <Upload size={48} style={{ color: '#ff9edb', marginBottom: 16 }} />
            <Typography variant="h6" mb={1}>
              Drop your {contentType} here
            </Typography>
            <Typography variant="body2" color="text.secondary">
              or click to browse files
            </Typography>
            {contentType === 'reel' && (
              <Typography variant="caption" display="block" mt={1}>
                Recommended: 1080x1920, max 60 seconds
              </Typography>
            )}
          </Paper>

          {/* Caption */}
          <TextField
            label="Caption"
            multiline
            rows={3}
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Write a compelling caption..."
            fullWidth
          />

          {/* Monetization */}
          <Box>
            <FormControlLabel
              control={
                <Switch 
                  checked={isLocked} 
                  onChange={(e) => setIsLocked(e.target.checked)}
                  sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                      color: '#ff9edb'
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                      backgroundColor: '#ff9edb'
                    }
                  }}
                />
              }
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Lock size={20} />
                  Lock content for premium access
                </Box>
              }
            />
            
            {isLocked && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" mb={1}>
                  Set unlock price: ${price}
                </Typography>
                <Slider
                  value={price}
                  onChange={(e, val) => setPrice(val)}
                  min={1}
                  max={50}
                  step={0.5}
                  valueLabelDisplay="auto"
                  sx={{
                    color: '#ff9edb',
                    '& .MuiSlider-thumb': {
                      backgroundColor: '#ff9edb'
                    },
                    '& .MuiSlider-track': {
                      backgroundColor: '#ff9edb'
                    }
                  }}
                />
              </Box>
            )}
          </Box>

          {/* Upload Progress */}
          {isUploading && (
            <Box>
              <Typography variant="body2" mb={1}>
                Uploading... {uploadProgress}%
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={uploadProgress}
                sx={{
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#ff9edb'
                  }
                }}
              />
            </Box>
          )}

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
            <Button 
              variant="outlined" 
              onClick={onClose}
              disabled={isUploading}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handlePost}
              disabled={isUploading || !caption}
              sx={{
                backgroundColor: '#ff9edb',
                '&:hover': { backgroundColor: '#ff7dc7' }
              }}
            >
              {isUploading ? 'Uploading...' : 'Post Content'}
            </Button>
          </Box>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

// Main CweatorHub Component
const CweatorHub = () => {
  const [posts, setPosts] = useState(mockPosts);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleLike = (postId) => {
    console.log('Liked post:', postId);
  };

  const handleComment = (postId) => {
    console.log('Comment on post:', postId);
  };

  const handleShare = (postId) => {
    console.log('Share post:', postId);
  };

  const handleUnlock = (postId, price) => {
    console.log(`Unlocked post ${postId} for $${price}`);
    // Update post to show as unlocked
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, isLocked: false } : post
    ));
  };

  const handleCreatePost = (postData) => {
    console.log('Created new post:', postData);
    // Add new post logic here
  };

  const tabItems = [
    { label: 'For You', icon: <TrendingUp size={20} /> },
    { label: 'Following', icon: <Users size={20} /> },
    { label: 'Trending', icon: <Sparkles size={20} /> }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      backgroundColor: '#fafafa',
      pb: 8
    }}>
      {/* Header */}
      <Paper
        elevation={2}
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          borderRadius: 0,
          background: 'linear-gradient(135deg, #ff9edb 0%, #ff7dc7 100%)',
          color: 'white'
        }}
      >
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h4" fontWeight={700} sx={{ letterSpacing: '0.1em' }}>
            CWEATORHUB
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton sx={{ color: 'white' }}>
              <Settings size={24} />
            </IconButton>
            <Avatar sx={{ width: 40, height: 40 }} />
          </Box>
        </Box>

        {/* Navigation Tabs */}
        <Box sx={{ px: 2, pb: 1 }}>
          <Tabs 
            value={activeTab} 
            onChange={(e, val) => setActiveTab(val)}
            sx={{
              '& .MuiTab-root': {
                color: 'rgba(255,255,255,0.7)',
                '&.Mui-selected': {
                  color: 'white'
                }
              },
              '& .MuiTabs-indicator': {
                backgroundColor: 'white'
              }
            }}
          >
            {tabItems.map((item, index) => (
              <Tab
                key={index}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {item.icon}
                    {item.label}
                  </Box>
                }
              />
            ))}
          </Tabs>
        </Box>
      </Paper>

      {/* Main Content */}
      <Box sx={{ 
        maxWidth: 600, 
        mx: 'auto', 
        p: 2
      }}>
        {/* Posts Feed */}
        {posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            onLike={handleLike}
            onComment={handleComment}
            onShare={handleShare}
            onUnlock={handleUnlock}
          />
        ))}

        {/* Load More */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#ff9edb',
              color: '#ff9edb',
              '&:hover': {
                backgroundColor: '#ff9edb',
                color: 'white'
              }
            }}
          >
            Load More Posts
          </Button>
        </Box>
      </Box>

      {/* Floating Action Button */}
      <Fab
        onClick={() => setCreateDialogOpen(true)}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          backgroundColor: '#ff9edb',
          '&:hover': { backgroundColor: '#ff7dc7' },
          width: 64,
          height: 64
        }}
      >
        <Camera size={28} />
      </Fab>

      {/* Create Content Dialog */}
      <CreateContentDialog
        open={createDialogOpen}
        onClose={() => setCreateDialogOpen(false)}
        onPost={handleCreatePost}
      />
    </Box>
  );
};

export default CweatorHub;