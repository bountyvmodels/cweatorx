'use client';

import Link from 'next/link';
import Image from 'next/image';

import Grid from '@mui/material/Grid';
import { Box, Stack, Typography } from '@mui/material';

import PageContainer from '@/app/components/container/PageContainer';
import AuthRegister from '@/app/auth/authForms/AuthRegister';
import GuestGuard from '@/app/guards/authGuard/GuestGaurd';

export default function Register() {
  return (
    <GuestGuard>
      <PageContainer
        title="Register | CWEATORS"
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

          {/* ─────────── Register form column ─────────── */}
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
                  width={80}
                  height={80}
                  priority
                  style={{ objectFit: 'contain' }}
                />
              </Box>
              
              <AuthRegister
                title="Welcome to cweators.com"
                subtitle={
                  <Stack direction="row" spacing={1} mt={3}>
                    <Typography color="textSecondary" variant="body2">
                      Already have an account?
                    </Typography>
                    <Typography
                      component={Link}
                      href="/auth/auth1/login"
                      fontWeight={600}
                      sx={{ textDecoration: 'none', color: 'primary.main' }}
                    >
                      Sign in
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