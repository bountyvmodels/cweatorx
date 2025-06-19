'use client';

import Link       from 'next/link';
import Image      from 'next/image';

import Grid       from '@mui/material/Grid';          // ✅ v5 Grid
import Box        from '@mui/material/Box';
import Stack      from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import PageContainer from '@/components/container/PageContainer';
import Logo          from '@/app/(DashboardLayout)/layout/shared/logo/Logo';

import AuthRegister  from '@/components/authentication/auth-forms/AuthRegister';
import GuestGuard    from '@/app/guards/authGuard/GuestGaurd';

export default function Register() {
  return (
    <GuestGuard>
      <PageContainer
        title="Register | CWEATORS"
        description="Create. Discover. Earn."
      >
        <Grid container sx={{ height: '100vh' }}>
          {/* left branding pane */}
          <Grid
            item xs={12} lg={7}
            sx={{
              position:       'relative',
              display:        { xs: 'none', lg: 'flex' },
              flexDirection:  'column',
              bgcolor:        '#fdfbfe',
            }}
          >
            <Box px={3} py={2}>
              <Logo />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                src="/images/register-illustration.svg"
                alt="Register"
                width={480}
                height={360}
              />
            </Box>
          </Grid>

          {/* right registration form */}
          <Grid
            item xs={12} lg={5}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ bgcolor: 'background.paper' }}
          >
            <Box p={4} width="100%" maxWidth={420}>
              <AuthRegister
                title="Create your CWEATORS account"
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
