/* app/(DashboardLayout)/layout/vertical/header/AppLinks.tsx */
import Avatar    from '@mui/material/Avatar';
import Box       from '@mui/material/Box';
import Grid      from '@mui/material/Unstable_Grid2';   // ← Grid v2
import Stack     from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as dropdownData from './data';
import Link      from 'next/link';
import React     from 'react';

const AppLinks = () => (
  <Grid container spacing={3} mb={4}>
    {dropdownData.appsLink.map((link, index) => (
      <Grid key={index} xs={12} lg={6}>
        <Link href={link.href} className="hover-text-primary">
          <Stack direction="row" spacing={2}>
            <Box
              minWidth={45}
              height={45}
              bgcolor="grey.100"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Avatar
                src={link.avatar}
                alt={link.avatar}
                sx={{ width: 24, height: 24, borderRadius: 0 }}
              />
            </Box>

            <Box>
              <Typography
                variant="subtitle2"
                fontWeight={600}
                color="textPrimary"
                noWrap
                sx={{ width: 240 }}
                className="text-hover"
              >
                {link.title}
              </Typography>
              <Typography
                color="textSecondary"
                variant="subtitle2"
                fontSize={12}
                sx={{ width: 240 }}
                noWrap
              >
                {link.subtext}
              </Typography>
            </Box>
          </Stack>
        </Link>
      </Grid>
    ))}
  </Grid>
);

export default AppLinks;
