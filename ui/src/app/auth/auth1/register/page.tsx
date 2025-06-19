/* app/(auth)/register/page.tsx */
'use client';

import Link from 'next/link';
import Image from 'next/image';

import Grid from '@mui/material/Unstable_Grid2';
import { Box, Stack, Typography } from '@mui/material';

import GuestGuard     from '@/app/guards/authGuard/GuestGaurd';
import PageContainer  from '@/app/components/container/PageContainer';
import AuthRegister   from '@/app/components/authForms/AuthRegister';

export default function Register() {
  return (
    <GuestGuard>
      <PageContainer title="Register | CWEATORS" description="Join the community">
        <Grid container sx={{ height: '100vh' }}>
          {/* left hero – identical to login */}
          <Grid
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
              <Image src="/images/cweatorlogo.png" alt="CWEATORS" width={180} height={60} priority />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
              }}
            >
              <Box sx={{ display: 'flex', gap: 3 }}>
                <Image src="/images/iphone-subs.png"  alt="Increase Subs" width={130} height={260} />
                <Image src="/images/iphone-learn.png" alt="Learn"         width={130} height={260} />
                <Image src="/images/iphone-tasks.png" alt="Tasks"         width={130} height={260} />
              </Box>

              <Typography variant="h2" sx={{ fontWeight: 600, textAlign: 'center' }}>
                <Box component="span" sx={{ color: '#ff9edb' }}>Create.</Box>{' '}
                Discover.{` `}
                <Box component="span" sx={{ color: '#ff9edb' }}>Earn.</Box>
              </Typography>
            </Box>
          </Grid>

          {/* right sign-up form */}
          <Grid
            xs={12}
            lg={5}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ bgcolor: 'background.paper' }}
          >
            <Box p={4} width="100%" maxWidth={420}>
              <AuthRegister
                title="Create your account"
                subtitle={
                  <Stack direction="row" spacing={1} mt={3}>
                    <Typography color="textSecondary" variant="body2">
                      Already on CWEATORS?
                    </Typography>
                    <Typography
                      component={Link}
                      href="/auth/login"
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
