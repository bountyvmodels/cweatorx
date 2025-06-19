/* app/(DashboardLayout)/layout/vertical/header/Navigation.tsx */
import { useState } from 'react';
import Box          from '@mui/material/Box';
import Button       from '@mui/material/Button';
import Divider      from '@mui/material/Divider';
import Grid         from '@mui/material/Unstable_Grid2';   // ← Grid v2
import Menu         from '@mui/material/Menu';
import Typography   from '@mui/material/Typography';
import Link         from 'next/link';
import { IconChevronDown, IconHelp } from '@tabler/icons-react';

import AppLinks   from './AppLinks';
import QuickLinks from './QuickLinks';

const AppDD = () => {
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);

  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl2(event.currentTarget);
  const handleClose2 = () => setAnchorEl2(null);

  return (
    <>
      {/* Apps dropdown button */}
      <Box>
        <Button
          color="inherit"
          variant="text"
          aria-controls="apps-menu"
          aria-haspopup="true"
          onClick={handleClick2}
          sx={{
            bgcolor: anchorEl2 ? 'primary.light' : '',
            color:  anchorEl2 ? 'primary.main'
                              : (theme) => theme.palette.text.secondary,
          }}
          endIcon={<IconChevronDown size={15} sx={{ ml: -0.5, mt: 0.25 }} />}
        >
          Apps
        </Button>

        {/* Dropdown menu */}
        <Menu
          id="apps-menu"
          anchorEl={anchorEl2}
          open={Boolean(anchorEl2)}
          onClose={handleClose2}
          keepMounted
          anchorOrigin={{ horizontal: 'left',  vertical: 'bottom' }}
          transformOrigin={{ horizontal: 'left',  vertical: 'top' }}
          sx={{
            '& .MuiMenu-paper': { width: 850 },
            '& .MuiMenu-paper ul': { p: 0 },
          }}
        >
          <Grid container>
            {/* left column – apps */}
            <Grid xs={12} sm={8} display="flex">
              <Box p={4} pr={0} pb={3}>
                <AppLinks />
                <Divider />
                <Box
                  sx={{ display: { xs: 'none', sm: 'flex' } }}
                  alignItems="center"
                  justifyContent="space-between"
                  pt={2}
                  pr={4}
                >
                  <Link href="/faq">
                    <Typography
                      variant="subtitle2"
                      fontWeight={600}
                      color="textPrimary"
                      display="flex"
                      alignItems="center"
                      gap={1}
                    >
                      <IconHelp width={24} /> Frequently Asked Questions
                    </Typography>
                  </Link>
                  <Button variant="contained" color="primary">
                    Check
                  </Button>
                </Box>
              </Box>
              <Divider orientation="vertical" />
            </Grid>

            {/* right column – quick links */}
            <Grid xs={12} sm={4}>
              <Box p={4}>
                <QuickLinks />
              </Box>
            </Grid>
          </Grid>
        </Menu>
      </Box>

      {/* static buttons */}
      {['Chat', 'Calendar', 'Email'].map((label) => (
        <Button
          key={label}
          color="inherit"
          variant="text"
          component={Link}
          href="/"
          sx={{ color: (theme) => theme.palette.text.secondary }}
        >
          {label}
        </Button>
      ))}
    </>
  );
};

export default AppDD;
