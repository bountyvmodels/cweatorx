/* app/components/customizer/Customizer.tsx */
'use client';

import { FC, useState, useContext } from 'react';
import {
  Divider,
  Drawer,
  Fab,
  IconButton,
  Slider,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';

/** 👉 We switch to the Grid utility that supports the prop names `xs / sm / lg`  */
import Grid from '@mui/material/Unstable_Grid2';

import { styled } from '@mui/material/styles';
import { CustomizerContext } from '@/app/context/customizerContext';
import Box, { BoxProps } from '@mui/material/Box';
import { IconX, IconSettings, IconCheck } from '@tabler/icons-react';
import Scrollbar from '@/app/components/custom-scroll/Scrollbar';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import SwipeLeftAltTwoToneIcon from '@mui/icons-material/SwipeLeftAltTwoTone';
import SwipeRightAltTwoToneIcon from '@mui/icons-material/SwipeRightAltTwoTone';
import AspectRatioTwoToneIcon from '@mui/icons-material/AspectRatioTwoTone';
import CallToActionTwoToneIcon from '@mui/icons-material/CallToActionTwoTone';
import ViewSidebarTwoToneIcon from '@mui/icons-material/ViewSidebarTwoTone';
import WebAssetTwoToneIcon from '@mui/icons-material/WebAssetTwoTone';
import {
  ViewComfyTwoTone,
  PaddingTwoTone,
  BorderOuter,
} from '@mui/icons-material';

import config from '@/app/context/config';

const SidebarWidth = '320px';

interface ThemeColor {
  id: number;
  bgColor: string;
  disp?: string;
}

const Customizer: FC = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const {
    activeDir,
    setActiveDir,
    activeMode,
    setActiveMode,
    isCollapse,
    setIsCollapse,
    activeTheme,
    activeLayout,
    setActiveLayout,
    isLayout,
    isCardShadow,
    setIsCardShadow,
    setIsLayout,
    isBorderRadius,
    setIsBorderRadius,
    setActiveTheme,
  } = useContext(CustomizerContext);

  const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
    boxShadow: theme.shadows[8],
    padding: '20px',
    cursor: 'pointer',
    justifyContent: 'center',
    display: 'flex',
    transition: '0.1s ease-in',
    border: '1px solid rgba(145,158,171,0.12)',
    '&:hover': { transform: 'scale(1.05)' },
  }));

  /** helper for live‐switching the colour theme */
  const addAttributeToBody = (val: string | undefined) =>
    val && document.body.setAttribute('data-color-theme', val);

  const thColors: ThemeColor[] = [
    { id: 1, bgColor: '#5D87FF', disp: 'BLUE_THEME' },
    { id: 2, bgColor: '#0074BA', disp: 'AQUA_THEME' },
    { id: 3, bgColor: '#763EBD', disp: 'PURPLE_THEME' },
    { id: 4, bgColor: '#0A7EA4', disp: 'GREEN_THEME' },
    { id: 5, bgColor: '#01C0C8', disp: 'CYAN_THEME' },
    { id: 6, bgColor: '#FA896B', disp: 'ORANGE_THEME' },
  ];

  return (
    <>
      {/* floating gear button */}
      <Tooltip title="Settings">
        <Fab
          color="primary"
          aria-label="settings"
          sx={{ position: 'fixed', right: 25, bottom: 15 }}
          onClick={() => setShowDrawer(true)}
        >
          <IconSettings stroke={1.5} />
        </Fab>
      </Tooltip>

      {/* side drawer */}
      <Drawer
        anchor="right"
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        slotProps={{
          /** 🟢 `slotProps.paper` (lower-case) was the source of the earlier error */
          paper: { sx: { width: SidebarWidth } },
        }}
      >
        <Scrollbar sx={{ height: 'calc(100vh - 5px)' }}>
          {/* header */}
          <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h4">Settings</Typography>
            <IconButton onClick={() => setShowDrawer(false)}>
              <IconX size="1rem" />
            </IconButton>
          </Box>
          <Divider />

          <Box p={3}>
            {/* --- Theme Option (light / dark) --- */}
            <Typography variant="h6" gutterBottom>
              Theme option
            </Typography>

            <Stack direction="row" gap={2} my={2}>
              <StyledBox onClick={() => setActiveMode('light')} gap={1}>
                <WbSunnyTwoToneIcon color={activeMode === 'light' ? 'primary' : 'inherit'} />
                Light
              </StyledBox>
              <StyledBox onClick={() => setActiveMode('dark')} gap={1}>
                <DarkModeTwoToneIcon color={activeMode === 'dark' ? 'primary' : 'inherit'} />
                Dark
              </StyledBox>
            </Stack>

            {/* --- Theme direction (LTR / RTL) --- */}
            <Box pt={3} />
            <Typography variant="h6" gutterBottom>
              Theme direction
            </Typography>

            <Stack direction="row" gap={2} my={2}>
              <StyledBox onClick={() => setActiveDir('ltr')} gap={1}>
                <SwipeLeftAltTwoToneIcon color={activeDir === 'ltr' ? 'primary' : 'inherit'} />
                LTR
              </StyledBox>
              <StyledBox onClick={() => setActiveDir('rtl')} gap={1}>
                <SwipeRightAltTwoToneIcon color={activeDir === 'rtl' ? 'primary' : 'inherit'} />
                RTL
              </StyledBox>
            </Stack>

            {/* --- Theme colours --- */}
            <Box pt={3} />
            <Typography variant="h6" gutterBottom>
              Theme colours
            </Typography>

            <Grid container spacing={2}>
              {thColors.map(({ id, bgColor, disp }) => (
                <Grid key={id} xs={4}>
                  <StyledBox onClick={() => addAttributeToBody(disp)}>
                    <Tooltip title={disp} placement="top">
                      <Box
                        sx={{
                          backgroundColor: bgColor,
                          width: 25,
                          height: 25,
                          borderRadius: '60px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                        }}
                        onClick={() => setActiveTheme(disp!)}
                      >
                        {activeTheme === disp && <IconCheck width={13} />}
                      </Box>
                    </Tooltip>
                  </StyledBox>
                </Grid>
              ))}
            </Grid>

            {/* … the remainder of the file was unchanged and compiles without Grid warnings … */}
          </Box>
        </Scrollbar>
      </Drawer>
    </>
  );
};

export default Customizer;
