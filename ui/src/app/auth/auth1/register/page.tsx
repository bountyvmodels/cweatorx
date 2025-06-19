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
        <Grid container sx={{ minHeight: '100vh' }}>
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
            }}
          >
            {/* Logo with woman and text */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
              <Image
                src="/images/textlogo.png"
                alt="Cweators logo"
                width={280}
                height={70}
                priority
                style={{ objectFit: 'contain' }}
              />
              <Image
                src="/images/cweatorlogo.png"
                alt="Cweators woman logo"
                width={150}
                height={150}
                priority
                style={{ objectFit: 'contain' }}
              />
            </Box>

            {/* hero graphics + tagline */}
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
                mt: -8,
              }}
            >
              <Box sx={{ display: 'flex', gap: 4 }}>
                <Image 
                  src="/images/iphone-subs.png" 
                  alt="Increase Subs" 
                  width={220} 
                  height={440} 
                  priority 
                  style={{ objectFit: 'contain' }}
                />
                <Image 
                  src="/images/iphone-learn.png" 
                  alt="Learn" 
                  width={220} 
                  height={440} 
                  priority 
                  style={{ objectFit: 'contain' }}
                />
                <Image 
                  src="/images/iphone-tasks.png" 
                  alt="Tasks & Links" 
                  width={220} 
                  height={440} 
                  priority 
                  style={{ objectFit: 'contain' }}
                />
              </Box>

              <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 600, fontSize: '48px' }}>
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
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.paper' }}
          >
            <Box p={4} width="100%" maxWidth={420}>
              <AuthRegister
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