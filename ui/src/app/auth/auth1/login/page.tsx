'use client';

import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Grid from '@mui/material/Grid';
import { Box, Stack, Typography } from '@mui/material';

import PageContainer from '@/app/components/container/PageContainer';
import Logo from '@/app/(DashboardLayout)/layout/shared/logo/Logo';
import AuthLogin from '../../authForms/AuthLogin';
import AuthContext from '@/app/context/AuthContext';
import GuestGuard from '@/app/guards/authGuard/GuestGaurd';

export default function Login() {
  const { platform } = useContext(AuthContext);

  return (
    <GuestGuard>
      <PageContainer title="Login | CWEATORS" description="Create. Discover. Earn.">
        <Grid container sx={{ height: '100vh' }}>
          <Grid
            item
            xs={12}
            lg={7}
            sx={{
              position: 'relative',
              display: { xs: 'none', lg: 'flex' },
              flexDirection: 'column',
              bgcolor: '#fdfbfe',
            }}
          >
            <Box px={3} py={2}>
              <Logo />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4,
              }}
            >
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Image src="/images/iphone-subs.png" alt="Increase Subs" width={110} height={220} />
                <Image src="/images/iphone-learn.png" alt="Learn" width={110} height={220} />
                <Image src="/images/iphone-tasks.png" alt="Tasks & Links" width={110} height={220} />
              </Box>

              <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 600 }}>
                <Box component="span" sx={{ color: '#ff9edb' }}>Create.</Box>{' '}
                Discover.{' '}
                <Box component="span" sx={{ color: '#ff9edb' }}>Earn.</Box>
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            lg={5}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'background.paper',
            }}
          >
            <Box p={4} width="100%" maxWidth={420}>
              <AuthLogin
                title="Welcome to cweators.com"
                subtext={
                  <Typography variant="subtitle1" color="textSecondary" mb={1}>
                    Transform Your Influencers — powered by {platform}
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
                      sx={{ textDecoration: 'none', color: 'primary.main' }}
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
