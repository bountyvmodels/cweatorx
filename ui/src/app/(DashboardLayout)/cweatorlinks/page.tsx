// Replace these Grid components in the file:

// Around line 277, replace:
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
      {/* Card content */}
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
      {/* Card content */}
    </Card>
  </Grid>
</Grid>

// With this corrected version:
<Grid container spacing={3}>
  <Grid size={{ xs: 12, md: 6 }}>
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

  <Grid size={{ xs: 12, md: 6 }}>
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

// Also find and replace any other instances of:
// <Grid item xs={X} md={Y}> 
// with:
// <Grid size={{ xs: X, md: Y }}>

// For example, around line 365:
<Grid container spacing={3}>
  <Grid size={{ xs: 6 }}>
    <Typography variant="subtitle2" mb={1}>Profile Picture (max 4MB)</Typography>
    <Button variant="outlined" fullWidth>
      Choose File - No file chosen
    </Button>
  </Grid>
  <Grid size={{ xs: 6 }}>
    <Typography variant="subtitle2" mb={1}>Background Image (max 4MB)</Typography>
    <Button variant="outlined" fullWidth>
      Choose File - No file chosen
    </Button>
  </Grid>
</Grid>

// And around line 465:
<Grid container spacing={2}>
  <Grid size={{ xs: 6 }}>
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
  
  <Grid size={{ xs: 6 }}>
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
  
  <Grid size={{ xs: 6 }}>
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
  
  <Grid size={{ xs: 6 }}>
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
  
  <Grid size={{ xs: 6 }}>
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
  
  <Grid size={{ xs: 6 }}>
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

// And around line 555:
<Grid container spacing={3}>
  <Grid size={{ xs: 6 }}>
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
  
  <Grid size={{ xs: 6 }}>
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