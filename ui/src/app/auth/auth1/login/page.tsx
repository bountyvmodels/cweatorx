'use client';

import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Grid from '@mui/material/Grid';
import { Box, Stack, Typography } from '@mui/material';

import PageContainer from '@/app/components/container/PageContainer';
import AuthLogin from '@/app/auth/authForms/AuthLogin';
import AuthContext from '@/app/context/AuthContext';
import GuestGuard from '@/app/guards/authGuard/GuestGaurd';

export default function Login() {
  const { platform } = useContext(AuthContext);

  return (
    <GuestGuard>
      <PageContainer
        title="Login | CWEATORS"
        description="Create. Discover. Earn."
      >
        {/* root grid – full height */}
        <Grid container sx={{ minHeight: '100vh', position: 'relative' }}>
          {/* ─────────── Branding / illustration column ─────────── */}
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

          {/* ─────────── Auth form column ─────────── */}
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
              {/* Woman logo at top of auth form */}
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
              
              <AuthLogin
                title="Welcome to cweators.com"
                subtext={
                  <Typography variant="subtitle1" color="textSecondary" mb={1}>
                    Transform Your <Box component="span" sx={{ color: '#ff9edb' }}>Influencers</Box> — powered by BountyV x Mara
                  </Typography>
                }
                subtitle={
                  <Stack direction="row" spacing={1} mt={3}>
                    <Typography color="textSecondary" variant="body2">
                      New to CWEATORS?
                    </Typography>
                    <Typography
                      component={Link}
                      href="/auth/auth1/register"
                      fontWeight={600}
                      sx={{ textDecoration: 'none', color: '#ff9edb' }}
                    >
                      Create an account
                    </Typography>
                  </Stack>
                }
              />
            </Box>
          </Grid>
        </Grid>
      </PageContainer>
    </GuestGuard>
  );
}