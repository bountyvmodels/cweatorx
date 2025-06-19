'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import {
  IconApps,
  IconCalendarEvent,
  IconChevronDown,
  IconChevronUp,
  IconGridDots,
  IconMail,
  IconMessages,
} from '@tabler/icons-react';

import {
  Box,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

import AppLinks   from './AppLinks';
import QuickLinks from './QuickLinks';

const MobileRightSidebar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [openApps,  setOpenApps]   = useState(true);

  const handleAppsToggle = () => setOpenApps(!openApps);

  const drawerContent = (
    <Box>
      {/* ───────────── Top quick-access list ───────────── */}
      <Box px={1}>
        <List sx={{ maxWidth: 360 }} component="nav">
          <ListItemButton component={Link} href="/apps/chats">
            <ListItemIcon sx={{ minWidth: 35 }}>
              <IconMessages size={21} stroke={1.5} />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="subtitle2" fontWeight={600}>Chats</Typography>}
            />
          </ListItemButton>

          <ListItemButton component={Link} href="/apps/calendar">
            <ListItemIcon sx={{ minWidth: 35 }}>
              <IconCalendarEvent size={21} stroke={1.5} />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="subtitle2" fontWeight={600}>Calendar</Typography>}
            />
          </ListItemButton>

          <ListItemButton component={Link} href="/apps/email">
            <ListItemIcon sx={{ minWidth: 35 }}>
              <IconMail size={21} stroke={1.5} />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="subtitle2" fontWeight={600}>Email</Typography>}
            />
          </ListItemButton>

          <ListItemButton onClick={handleAppsToggle}>
            <ListItemIcon sx={{ minWidth: 35 }}>
              <IconApps size={21} stroke={1.5} />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="subtitle2" fontWeight={600}>Apps</Typography>}
            />
            {openApps ? (
              <IconChevronDown size={21} stroke={1.5} />
            ) : (
              <IconChevronUp size={21} stroke={1.5} />
            )}
          </ListItemButton>

          <Collapse in={openApps} timeout="auto" unmountOnExit>
            <Box px={4} pt={3}>
              <AppLinks />
            </Box>
          </Collapse>
        </List>
      </Box>

      {/* ───────────── Quick-links grid ───────────── */}
      <Box px={3} mt={3}>
        <QuickLinks />
      </Box>
    </Box>
  );

  return (
    <Box>
      {/* launcher icon */}
      <IconButton
        size="large"
        color="inherit"
        onClick={() => setShowDrawer(true)}
        sx={showDrawer ? { color: 'primary.main' } : undefined}
      >
        <IconGridDots size={21} stroke={1.5} />
      </IconButton>

      {/* right sidebar drawer */}
      <Drawer
        anchor="right"
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        PaperProps={{ sx: { width: 300 } }}
        ModalProps={{ keepMounted: true }}
        variant="temporary"
      >
        <Box p={3} pb={0}>
          <Typography variant="h5" fontWeight={600}>
            Navigation
          </Typography>
        </Box>

        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default MobileRightSidebar;
