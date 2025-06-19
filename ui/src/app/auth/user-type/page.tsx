'use client';

import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Grid from '@mui/material/Grid';
import { Box, Stack, Typography, Button, Card, CardContent } from '@mui/material';

import PageContainer from '@/app/components/container/PageContainer';
import AuthContext from '@/app/context/AuthContext';
import GuestGuard from '@/app/guards/authGuard/GuestGaurd';

export default function UserType() {
  const { platform } = useContext(AuthContext);

  return (
    <GuestGuard>
      <PageContainer
        title="Choose User Type | CWEATORS"
        description="Create. Discover. Earn."
      >
        <Grid container sx={{ minHeight: '100vh', position: 'relative' }}>
          {/* ─────────── Branding column ─────────── */}
          <Grid
            size={{
              xs: 12,
              lg: 7
            }}
            sx={{
              position: 'relative',
              display: { xs: 'none', lg: 'flex' },
              flexDirection: 'column',
              bgcolor: '#fdfbfe',
              padding: '40px',
              overflow: 'hidden',
            }}
          >
            {/* hero graphics + tagline */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 3,
              }}
            >
              {/* CWEATORS.com text centered above phones */}
              <Typography variant="h2" sx={{ 
                fontWeight: 600, 
                fontSize: '56px',
                letterSpacing: '0.2em',
                display: 'flex',
                alignItems: 'baseline',
                mb: 4,
              }}>
                <Box component="span" sx={{ color: '#ff9edb' }}>CWEATORS</Box>
                <Box component="span" sx={{ color: '#000', fontSize: '36px', letterSpacing: '0.05em' }}>.com</Box>
              </Typography>

              <Box sx={{ 
                display: 'flex', 
                gap: 4,
                justifyContent: 'center',
                width: '100%',
              }}>
                <Box sx={{ position: 'relative' }}>
                  <Image 
                    src="/images/iphone-subs.png" 
                    alt="Increase Subs" 
                    width={220} 
                    height={440} 
                    priority 
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
                <Box sx={{ position: 'relative' }}>
                  <Image 
                    src="/images/iphone-learn.png" 
                    alt="Learn" 
                    width={220} 
                    height={440} 
                    priority 
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
                <Box sx={{ position: 'relative' }}>
                  <Image 
                    src="/images/iphone-tasks.png" 
                    alt="Tasks & Links" 
                    width={220} 
                    height={440} 
                    priority 
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
              </Box>

              <Typography variant="h3" sx={{ 
                textAlign: 'center', 
                fontWeight: 600, 
                fontSize: '48px',
                mt: 4 
              }}>
                <Box component="span" sx={{ color: '#ff9edb' }}>Create.</Box>{' '}
                <Box component="span" sx={{ color: '#000' }}>Discover.</Box>{' '}
                <Box component="span" sx={{ color: '#ff9edb' }}>Earn.</Box>
              </Typography>
            </Box>
          </Grid>

          {/* ─────────── User Type Selection column ─────────── */}
          <Grid
            size={{
              xs: 12,
              lg: 5
            }}
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              bgcolor: 'background.paper',
              position: 'relative',
              minHeight: '100vh',
            }}
          >
            <Box 
              sx={{ 
                p: 4, 
                width: '100%', 
                maxWidth: 420,
                position: 'relative',
              }}
            >
              {/* Woman logo at top */}
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                mb: 3,
              }}>
                <Image
                  src="/images/cweatorlogo.png"
                  alt="Cweators woman logo"
                  width={140}
                  height={140}
                  priority
                  style={{ objectFit: 'contain' }}
                />
              </Box>
              
              <Typography variant="h4" align="center" sx={{ mb: 2, fontWeight: 600 }}>
                CHOOSE YOUR EXPERIENCE
              </Typography>
              
              <Typography variant="subtitle1" align="center" color="textSecondary" sx={{ mb: 4 }}>
                Select how you want to use CWEATORS
              </Typography>

              <Stack spacing={3}>
                {/* Cweator Option */}
                <Card sx={{ cursor: 'pointer', '&:hover': { transform: 'scale(1.02)' } }}>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <Typography variant="h5" sx={{ mb: 1, color: '#ff9edb' }}>
                      Cweator
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                      Share content, build your audience, and earn revenue
                    </Typography>
                    <Button 
                      variant="contained" 
                      fullWidth
                      component={Link}
                      href="/auth/auth1/register"
                      sx={{
                        bgcolor: '#ff9edb',
                        color: 'white',
                        '&:hover': {
                          bgcolor: '#ff7dc7',
                        },
                      }}
                    >
                      Join as Cweator
                    </Button>
                  </CardContent>
                </Card>

                {/* Agency Option */}
                <Card sx={{ cursor: 'pointer', '&:hover': { transform: 'scale(1.02)' } }}>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <Typography variant="h5" sx={{ mb: 1 }}>
                      AGENCY
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                      Manage your Cweators and Business like you&apos;ve never done before
                    </Typography>
                    <Button 
                      variant="outlined" 
                      fullWidth
                      component={Link}
                      href="/auth/auth1/register"
                      sx={{
                        borderColor: '#ff9edb',
                        color: '#ff9edb',
                        '&:hover': {
                          bgcolor: '#ff9edb',
                          color: 'white',
                        },
                      }}
                    >
                      Join as Agency
                    </Button>
                  </CardContent>
                </Card>
              </Stack>

              <Stack direction="row" spacing={1} justifyContent="center" mt={3}>
                <Typography color="textSecondary" variant="body2">
                  Already have an account?
                </Typography>
                <Typography
                  component={Link}
                  href="/auth/auth1/login"
                  fontWeight={600}
                  sx={{ textDecoration: 'none', color: '#ff9edb' }}
                >
                  Sign in
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </PageContainer>
    </GuestGuard>
  );
}