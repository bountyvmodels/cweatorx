import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import NavListing from './NavListing/NavListing';
import Logo from '../../shared/logo/Logo';

import SidebarItems from '../../vertical/sidebar/SidebarItems';
import { CustomizerContext } from '@/app/context/customizerContext';
import { useContext } from 'react';
import config from '@/app/context/config';

const Navigation = () => {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const { activeMode, isLayout, isMobileSidebar, setIsMobileSidebar } = useContext(CustomizerContext);

  const SidebarWidth = config.sidebarWidth;

  if (lgUp) {
    return (
      <Box sx={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }} py={2}>
        <Container
          sx={{
            maxWidth: isLayout === 'boxed' ? 'lg' : '100%!important',
          }}
        >
          <NavListing />
        </Container>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebar}
      onClose={() => setIsMobileSidebar(false)}
      variant="temporary"
      PaperProps={{
        sx: {
          width: SidebarWidth,
          border: '0 !important',
          boxShadow: (theme: Theme) => theme.shadows[8],
        },
      }}
    >
      <Box px={2}>
        <Logo />
      </Box>
      <SidebarItems />
    </Drawer>
  );
};

export default Navigation;
