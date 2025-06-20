import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControlLabel,
  Switch,
  Box,
  Typography,
  Tab,
  Tabs,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  IconButton,
  Divider,
  Avatar,
  Alert,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  InputLabel,
  Slider
} from '@mui/material';
import {
  IconLink,
  IconShield,
  IconPlus,
  IconX,
  IconCopy,
  IconCheck,
  IconUsers,
  IconBarrierBlock,
  IconGlobe,
  IconDeviceMobile,
  IconDeviceDesktop,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandTelegram,
  IconMail,
  IconPhone,
  IconMapPin,
  IconCalendar,
  IconMusic,
  IconVideo,
  IconPhoto,
  IconFile,
  IconExternalLink
} from '@tabler/icons-react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`create-link-tabpanel-${index}`}
      aria-labelledby={`create-link-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

const CweatorLinksCreateDialog = ({ open, onClose, onSave, editingLink = null }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [linkType, setLinkType] = useState('direct'); // 'direct' or 'landing'
  const [deeplink, setDeeplink] = useState(editingLink?.url?.replace('https://clickallmylinks.com/', '') || '');
  const [destinationUrl, setDestinationUrl] = useState(editingLink?.destinationUrl || '');
  const [shieldProtection, setShieldProtection] = useState(editingLink?.shield || false);
  
  // Landing page specific states
  const [templateType, setTemplateType] = useState('default');
  const [textColor, setTextColor] = useState('light');
  const [buttonStyle, setButtonStyle] = useState('round');
  const [profileName, setProfileName] = useState(editingLink?.profileName || '');
  const [bio, setBio] = useState(editingLink?.bio || '');
  const [backgroundType, setBackgroundType] = useState('dark');
  const [links, setLinks] = useState([
    { id: 1, name: 'Exclusive Content', url: 'https://onlyfans.com/alexandra/c1', icon: 'exclusive' }
  ]);
  const [socialLinks, setSocialLinks] = useState({
    instagram: 'https://www.instagram.com/alexandra',
    twitter: 'https://twitter.com/alexandra',
    telegram: 'https://t.me/alexandra',
    youtube: 'https://www.youtube.com/@alexandra'
  });

  // Advanced settings
  const [responseTime, setResponseTime] = useState('');
  const [promotion, setPromotion] = useState('80% OFF');
  const [geoLocalization, setGeoLocalization] = useState(false);
  const [onlineIndicator, setOnlineIndicator] = useState(true);
  const [googleAnalytics, setGoogleAnalytics] = useState('');
  const [facebookPixel, setFacebookPixel] = useState('');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSave = () => {
    const linkData = {
      id: editingLink?.id || Date.now(),
      url: `https://clickallmylinks.com/${deeplink}`,
      description: linkType === 'landing' ? `Landing Page - ${profileName}` : 'Direct Link',
      type: linkType === 'landing' ? 'Landing Page' : 'Direct Link',
      shield: shieldProtection,
      isActive: true,
      visits: editingLink?.visits || 0,
      color: linkType === 'landing' ? '#9C27B0' : '#4CAF50',
      destinationUrl: linkType === 'direct' ? destinationUrl : null,
      // Landing page data
      ...(linkType === 'landing' && {
        profileName,
        bio,
        templateType,
        textColor,
        buttonStyle,
        backgroundType,
        links,
        socialLinks,
        settings: {
          responseTime,
          promotion,
          geoLocalization,
          onlineIndicator,
          googleAnalytics,
          facebookPixel
        }
      })
    };
    
    onSave(linkData);
    onClose();
  };

  const addLink = () => {
    const newLink = {
      id: Date.now(),
      name: '',
      url: '',
      icon: 'link'
    };
    setLinks([...links, newLink]);
  };

  const updateLink = (id, field, value) => {
    setLinks(links.map(link => 
      link.id === id ? { ...link, [field]: value } : link
    ));
  };

  const removeLink = (id) => {
    setLinks(links.filter(link => link.id !== id));
  };

  const getLinkIcon = (iconType) => {
    const icons = {
      exclusive: <IconUsers size={16} />,
      link: <IconLink size={16} />,
      social: <IconBrandInstagram size={16} />,
      email: <IconMail size={16} />,
      phone: <IconPhone size={16} />,
      location: <IconMapPin size={16} />,
      calendar: <IconCalendar size={16} />,
      music: <IconMusic size={16} />,
      video: <IconVideo size={16} />,
      photo: <IconPhoto size={16} />,
      file: <IconFile size={16} />
    };
    return icons[iconType] || icons.link;
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="lg" 
      fullWidth
      PaperProps={{
        sx: { height: '90vh' }
      }}
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconLink color="#5D87FF" />
          <Typography variant="h6">
            {editingLink ? 'Edit Deeplink' : 'Create New Deeplink'}
          </Typography>
        </Box>
        <IconButton onClick={onClose} size="small">
          <IconX />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 0, overflow: 'hidden' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', px: 3 }}>
          <Tabs value={activeTab} onChange={handleTabChange}>
            <Tab 
              label="Link Type" 
              icon={<IconLink size={20} />} 
              iconPosition="start"
            />
            {linkType === 'landing' && (
              <>
                <Tab 
                  label="Templates" 
                  icon={<IconDeviceMobile size={20} />} 
                  iconPosition="start"
                />
                <Tab 
                  label="Information" 
                  icon={<IconUsers size={20} />} 
                  iconPosition="start"
                />
                <Tab 
                  label="Links" 
                  icon={<IconPlus size={20} />} 
                  iconPosition="start"
                />
                <Tab 
                  label="Socials" 
                  icon={<IconBrandInstagram size={20} />} 
                  iconPosition="start"
                />
                <Tab 
                  label="Advanced" 
                  icon={<IconShield size={20} />} 
                  iconPosition="start"
                />
              </>
            )}
          </Tabs>
        </Box>

        <Box sx={{ height: 'calc(90vh - 200px)', overflow: 'auto', p: 3 }}>
          <TabPanel value={activeTab} index={0}>
            <Stack spacing={3}>
              <Typography variant="h6">Choose Link Type</Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Card 
                    sx={{ 
                      cursor: 'pointer', 
                      border: linkType === 'landing' ? '2px solid #5D87FF' : '2px solid transparent',
                      '&:hover': { transform: 'scale(1.02)' } 
                    }}
                    onClick={() => setLinkType('landing')}
                  >
                    <CardContent sx={{ textAlign: 'center', p: 3 }}>
                      <IconDeviceMobile size={48} color={linkType === 'landing' ? '#5D87FF' : '#666'} />
                      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>Landing Page</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Create a beautiful landing page with all your custom links and socials.
                      </Typography>
                      {linkType === 'landing' && (
                        <Chip label="Selected" color="primary" size="small" sx={{ mt: 2 }} />
                      )}
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card 
                    sx={{ 
                      cursor: 'pointer', 
                      border: linkType === 'direct' ? '2px solid #5D87FF' : '2px solid transparent',
                      '&:hover': { transform: 'scale(1.02)' } 
                    }}
                    onClick={() => setLinkType('direct')}
                  >
                    <CardContent sx={{ textAlign: 'center', p: 3 }}>
                      <IconExternalLink size={48} color={linkType === 'direct' ? '#5D87FF' : '#666'} />
                      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>Direct Link</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Redirect users directly to any website without an intermediary page.
                      </Typography>
                      {linkType === 'direct' && (
                        <Chip label="Selected" color="primary" size="small" sx={{ mt: 2 }} />
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              <Box>
                <Typography variant="subtitle1" fontWeight={600} mb={1}>
                  Deeplink URL
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="body2" color="textSecondary">
                    https://clickallmylinks.com/
                  </Typography>
                  <TextField
                    placeholder="your-slug"
                    value={deeplink}
                    onChange={(e) => setDeeplink(e.target.value)}
                    size="small"
                    sx={{ flex: 1 }}
                  />
                </Stack>
                <Typography variant="caption" color="textSecondary">
                  The deeplink URL you will share on your Instagram bio.
                </Typography>
              </Box>

              {linkType === 'direct' && (
                <Box>
                  <Typography variant="subtitle1" fontWeight={600} mb={1}>
                    Destination URL
                  </Typography>
                  <TextField
                    placeholder="https://onlyfans.com/alexandra/c1"
                    value={destinationUrl}
                    onChange={(e) => setDestinationUrl(e.target.value)}
                    fullWidth
                    size="small"
                  />
                  <Typography variant="caption" color="textSecondary">
                    The website visitors will be redirected to when clicking on your link.
                  </Typography>
                </Box>
              )}

              <Box>
                <FormControlLabel
                  control={
                    <Switch 
                      checked={shieldProtection} 
                      onChange={(e) => setShieldProtection(e.target.checked)}
                    />
                  }
                  label={
                    <Box>
                      <Typography variant="subtitle2">Enable Shield Protection</Typography>
                      <Typography variant="caption" color="textSecondary">
                        To protect your social account, Shield Protection provides an additional layer of security.
                      </Typography>
                    </Box>
                  }
                />
              </Box>
            </Stack>
          </TabPanel>

          {linkType === 'landing' && (
            <>
              <TabPanel value={activeTab} index={1}>
                <Stack spacing={3}>
                  <Typography variant="h6">Choose Template</Typography>
                  
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Card sx={{ textAlign: 'center', cursor: 'pointer' }}>
                        <CardContent>
                          <Typography variant="body2">Default</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>

                  <Typography variant="h6" mt={3}>Text Color</Typography>
                  <RadioGroup
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    row
                  >
                    <FormControlLabel value="light" control={<Radio />} label="Light Texts" />
                  </RadioGroup>

                  <Typography variant="h6">Button Style</Typography>
                  <RadioGroup
                    value={buttonStyle}
                    onChange={(e) => setButtonStyle(e.target.value)}
                    row
                  >
                    <FormControlLabel value="round" control={<Radio />} label="Round Buttons" />
                  </RadioGroup>
                </Stack>
              </TabPanel>

              <TabPanel value={activeTab} index={2}>
                <Stack spacing={3}>
                  <Typography variant="h6">Profile Information</Typography>
                  
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Typography variant="subtitle2" mb={1}>Profile Picture (max 4MB)</Typography>
                      <Button variant="outlined" fullWidth>
                        Choose File - No file chosen
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="subtitle2" mb={1}>Background Image (max 4MB)</Typography>
                      <Button variant="outlined" fullWidth>
                        Choose File - No file chosen
                      </Button>
                    </Grid>
                  </Grid>

                  <Box>
                    <Typography variant="subtitle2" mb={1}>Name</Typography>
                    <TextField
                      placeholder="Alexandra Lancaster"
                      value={profileName}
                      onChange={(e) => setProfileName(e.target.value)}
                      fullWidth
                      size="small"
                    />
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" mb={1}>Bio</Typography>
                    <TextField
                      placeholder="Check my exclusive content! 🔥"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      fullWidth
                      multiline
                      rows={2}
                      size="small"
                    />
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" mb={1}>Background Color</Typography>
                    <FormControl fullWidth size="small">
                      <Select
                        value={backgroundType}
                        onChange={(e) => setBackgroundType(e.target.value)}
                      >
                        <MenuItem value="dark">Dark Background</MenuItem>
                        <MenuItem value="light">Light Background</MenuItem>
                        <MenuItem value="gradient">Gradient</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Stack>
              </TabPanel>

              <TabPanel value={activeTab} index={3}>
                <Stack spacing={3}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6">Links</Typography>
                    <Button 
                      variant="contained" 
                      startIcon={<IconPlus />}
                      onClick={addLink}
                      size="small"
                    >
                      Add a link
                    </Button>
                  </Box>
                  
                  {links.map((link, index) => (
                    <Card key={link.id} variant="outlined">
                      <CardContent>
                        <Stack spacing={2}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="subtitle2">Link {index + 1}</Typography>
                            {links.length > 1 && (
                              <IconButton 
                                size="small" 
                                color="error"
                                onClick={() => removeLink(link.id)}
                              >
                                <IconX size={16} />
                              </IconButton>
                            )}
                          </Box>
                          
                          <TextField
                            label="Link name"
                            placeholder="Exclusive Content"
                            value={link.name}
                            onChange={(e) => updateLink(link.id, 'name', e.target.value)}
                            fullWidth
                            size="small"
                          />
                          
                          <TextField
                            label="Link URL"
                            placeholder="https://onlyfans.com/alexandra/c1"
                            value={link.url}
                            onChange={(e) => updateLink(link.id, 'url', e.target.value)}
                            fullWidth
                            size="small"
                          />
                        </Stack>
                      </CardContent>
                    </Card>
                  ))}
                </Stack>
              </TabPanel>

              <TabPanel value={activeTab} index={4}>
                <Stack spacing={3}>
                  <Typography variant="h6">Social Media Links</Typography>
                  
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        label="Instagram"
                        placeholder="https://www.instagram.com/alexandra"
                        value={socialLinks.instagram}
                        onChange={(e) => setSocialLinks({...socialLinks, instagram: e.target.value})}
                        fullWidth
                        size="small"
                        InputProps={{
                          startAdornment: <IconBrandInstagram size={20} style={{ marginRight: 8 }} />
                        }}
                      />
                    </Grid>
                    
                    <Grid item xs={6}>
                      <TextField
                        label="TikTok"
                        placeholder="https://www.tiktok.com/@alexandra"
                        fullWidth
                        size="small"
                        InputProps={{
                          startAdornment: <IconVideo size={20} style={{ marginRight: 8 }} />
                        }}
                      />
                    </Grid>
                    
                    <Grid item xs={6}>
                      <TextField
                        label="Twitter"
                        placeholder="https://twitter.com/alexandra"
                        value={socialLinks.twitter}
                        onChange={(e) => setSocialLinks({...socialLinks, twitter: e.target.value})}
                        fullWidth
                        size="small"
                        InputProps={{
                          startAdornment: <IconBrandTwitter size={20} style={{ marginRight: 8 }} />
                        }}
                      />
                    </Grid>
                    
                    <Grid item xs={6}>
                      <TextField
                        label="Snapchat"
                        placeholder="https://www.snapchat.com/add/alexandra"
                        fullWidth
                        size="small"
                        InputProps={{
                          startAdornment: <IconPhoto size={20} style={{ marginRight: 8 }} />
                        }}
                      />
                    </Grid>
                    
                    <Grid item xs={6}>
                      <TextField
                        label="Telegram"
                        placeholder="https://t.me/alexandra"
                        value={socialLinks.telegram}
                        onChange={(e) => setSocialLinks({...socialLinks, telegram: e.target.value})}
                        fullWidth
                        size="small"
                        InputProps={{
                          startAdornment: <IconBrandTelegram size={20} style={{ marginRight: 8 }} />
                        }}
                      />
                    </Grid>
                    
                    <Grid item xs={6}>
                      <TextField
                        label="YouTube"
                        placeholder="https://www.youtube.com/@alexandra"
                        value={socialLinks.youtube}
                        onChange={(e) => setSocialLinks({...socialLinks, youtube: e.target.value})}
                        fullWidth
                        size="small"
                        InputProps={{
                          startAdornment: <IconVideo size={20} style={{ marginRight: 8 }} />
                        }}
                      />
                    </Grid>
                  </Grid>
                </Stack>
              </TabPanel>

              <TabPanel value={activeTab} index={5}>
                <Stack spacing={3}>
                  <Typography variant="h6">Advanced Settings</Typography>
                  
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Stack spacing={2}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Box sx={{ 
                            width: 12, 
                            height: 12, 
                            borderRadius: '50%', 
                            bgcolor: onlineIndicator ? '#4CAF50' : '#f44336' 
                          }} />
                          <Typography variant="subtitle2">Online</Typography>
                        </Box>
                        <Typography variant="caption" color="textSecondary">
                          Using an Online indicator can boost clicks on your exclusive content link.
                        </Typography>
                        
                        <FormControlLabel
                          control={
                            <Switch 
                              checked={geoLocalization} 
                              onChange={(e) => setGeoLocalization(e.target.checked)}
                            />
                          }
                          label="🌍 City"
                        />
                        <Typography variant="caption" color="textSecondary">
                          Using a GeoIP localizer makes fans feel closer to you.
                        </Typography>
                      </Stack>
                    </Grid>
                    
                    <Grid item xs={6}>
                      <Stack spacing={2}>
                        <Typography variant="subtitle2">Promotion</Typography>
                        <TextField
                          placeholder="80% OFF"
                          value={promotion}
                          onChange={(e) => setPromotion(e.target.value)}
                          fullWidth
                          size="small"
                        />
                        <Typography variant="caption" color="textSecondary">
                          Highlight a special offer with a countdown to attract more fans.
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>

                  <Box>
                    <Typography variant="subtitle2" mb={1}>Response Time</Typography>
                    <FormControl fullWidth size="small">
                      <Select
                        value={responseTime}
                        onChange={(e) => setResponseTime(e.target.value)}
                        displayEmpty
                      >
                        <MenuItem value="">Nothing selected</MenuItem>
                        <MenuItem value="instant">Instant</MenuItem>
                        <MenuItem value="5min">5 minutes</MenuItem>
                        <MenuItem value="1hour">1 hour</MenuItem>
                        <MenuItem value="1day">1 day</MenuItem>
                      </Select>
                    </FormControl>
                    <Typography variant="caption" color="textSecondary">
                      Add "I reply in less than X minutes" to the first button.
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" mb={1}>Google Analytics (GA4)</Typography>
                    <TextField
                      placeholder="G-XXXXXXX"
                      value={googleAnalytics}
                      onChange={(e) => setGoogleAnalytics(e.target.value)}
                      fullWidth
                      size="small"
                    />
                    <Typography variant="caption" color="textSecondary">
                      Enter your Google Analytics tracking code to analyze your traffic.
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" mb={1}>Facebook Pixel ID</Typography>
                    <TextField
                      placeholder="1234567890123456"
                      value={facebookPixel}
                      onChange={(e) => setFacebookPixel(e.target.value)}
                      fullWidth
                      size="small"
                    />
                    <Typography variant="caption" color="textSecondary">
                      Add your Facebook Pixel to build an audience.
                    </Typography>
                  </Box>

                  <FormControlLabel
                    control={<Switch />}
                    label="Disable Link Logos"
                  />
                  <Typography variant="caption" color="textSecondary">
                    Hide the logos in your link buttons (like the OF logo).
                  </Typography>
                </Stack>
              </TabPanel>
            </>
          )}
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 3, borderTop: 1, borderColor: 'divider' }}>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button 
          onClick={handleSave} 
          variant="contained"
          disabled={!deeplink || (linkType === 'direct' && !destinationUrl)}
          sx={{
            bgcolor: '#5D87FF',
            '&:hover': { bgcolor: '#4570EA' }
          }}
        >
          {editingLink ? 'Update' : 'Create'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CweatorLinksCreateDialog;