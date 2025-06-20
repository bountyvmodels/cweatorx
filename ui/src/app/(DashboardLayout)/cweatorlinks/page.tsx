// ui/src/app/(DashboardLayout)/cweatorlinks/page.tsx
"use client";
import React, { useState } from "react";
import { 
  Grid, 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Switch,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  LinearProgress,
  Stack,
  Tooltip,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControlLabel,
  Paper
} from "@mui/material";
import PageContainer from "@/app/components/container/PageContainer";
import DashboardCard from "@/app/components/shared/DashboardCard";
import { 
  IconCopy, 
  IconEye, 
  IconShield, 
  IconTrendingUp,
  IconCalendar,
  IconUsers,
  IconChartLine,
  IconDots,
  IconEdit,
  IconTrash,
  IconSettings,
  IconPlus,
  IconDownload,
  IconFilter,
  IconSearch,
  IconLink,
  IconShieldCheck
} from "@tabler/icons-react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// Sample link data
const sampleLinks = [
  {
    id: 1,
    url: "https://getallmylinks.com/itstillyreign",
    description: "Main Profile",
    type: "Direct Link",
    shield: false,
    isActive: true,
    visits: 2431,
    color: "#4CAF50"
  },
  {
    id: 2,
    url: "https://getallmylinks.com/walfustory", 
    description: "Creative Portfolio",
    type: "Direct Link",
    shield: true,
    isActive: true,
    visits: 956,
    color: "#9C27B0"
  },
  {
    id: 3,
    url: "https://getallmylinks.com/newfunnels",
    description: "Marketing Funnels",
    type: "Landing Page",
    shield: false,
    isActive: false,
    visits: 245,
    color: "#009688"
  }
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`cweatorlinks-tabpanel-${index}`}
      aria-labelledby={`cweatorlinks-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const MetricCard = ({ 
  number, 
  title, 
  subtitle,
  bgColor, 
  textColor = "#000",
  icon 
}: {
  number: string;
  title: string;
  subtitle?: string;
  bgColor: string;
  textColor?: string;
  icon?: React.ReactNode;
}) => (
  <Card 
    sx={{ 
      backgroundColor: bgColor,
      minHeight: '160px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '16px',
      border: '1px solid rgba(0,0,0,0.08)',
      cursor: 'pointer',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'scale(1.02)'
      }
    }}
  >
    <CardContent sx={{ textAlign: 'center', p: 2 }}>
      {icon && (
        <Box sx={{ mb: 1, color: textColor }}>
          {icon}
        </Box>
      )}
      <Typography 
        variant="h2" 
        sx={{ 
          fontWeight: 'bold', 
          color: textColor,
          mb: 1,
          lineHeight: 1
        }}
      >
        {number}
      </Typography>
      <Typography 
        variant="h6" 
        sx={{ 
          fontWeight: 'medium', 
          color: textColor,
          mb: 0.5
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography 
          variant="body2" 
          sx={{ 
            color: textColor,
            opacity: 0.8
          }}
        >
          {subtitle}
        </Typography>
      )}
    </CardContent>
  </Card>
);

const OverviewTab = () => {
  const totalVisits = sampleLinks.reduce((sum, link) => sum + link.visits, 0);
  const activeLinks = sampleLinks.filter(link => link.isActive).length;
  const protectedLinks = sampleLinks.filter(link => link.shield).length;

  const chartData = {
    series: [{
      name: 'Visits',
      data: [30, 25, 35, 20, 30, 40, 35, 25, 30, 35, 25, 40, 30, 35, 25, 30, 40, 35, 30, 25, 35, 40, 30, 25, 35, 30, 40, 35, 25, 30]
    }],
    options: {
      chart: {
        type: 'area' as const,
        height: 300,
        toolbar: { show: false },
        sparkline: { enabled: false }
      },
      stroke: {
        width: 3,
        curve: 'smooth' as const
      },
      colors: ['#5D87FF'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.1,
          stops: [0, 90, 100]
        }
      },
      xaxis: {
        categories: Array.from({length: 30}, (_, i) => `${i + 1}`),
        title: { text: 'Last 30 Days' }
      },
      yaxis: {
        title: { text: 'Visits' }
      },
      grid: {
        borderColor: '#f1f1f1'
      }
    }
  };

  return (
    <Box>
      {/* Metrics Cards */}
      <Grid container spacing={3} mb={4}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <MetricCard 
            number="43"
            title="My Deeplinks"
            subtitle="Active Links"
            bgColor="#E3F2FD"
            textColor="#1976D2"
            icon={<IconLink size={28} />}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <MetricCard 
            number="16"
            title="Shield Protection"
            subtitle="Protected Links"
            bgColor="#FFF3E0"
            textColor="#F57C00"
            icon={<IconShield size={28} />}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <MetricCard 
            number="6,924"
            title="June Analytics"
            subtitle="Visitors in June 2025"
            bgColor="#F3E5F5"
            textColor="#7B1FA2"
            icon={<IconChartLine size={28} />}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <MetricCard 
            number="234,381"
            title="All Time Analytics"
            subtitle="Total Visitors"
            bgColor="#E8F5E8"
            textColor="#388E3C"
            icon={<IconTrendingUp size={28} />}
          />
        </Grid>
      </Grid>

      {/* Analytics Chart */}
      <DashboardCard title="Traffic Analytics" subtitle="Visits over the last 30 days">
        <Chart 
          options={chartData.options} 
          series={chartData.series} 
          type="area" 
          height={300} 
        />
      </DashboardCard>
    </Box>
  );
};

const MyLinksTab = () => {
  const [links, setLinks] = useState(sampleLinks);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingLink, setEditingLink] = useState<any>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedLinkId, setSelectedLinkId] = useState<number | null>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, linkId: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedLinkId(linkId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedLinkId(null);
  };

  const handleCreateLink = () => {
    setEditingLink(null);
    setOpenDialog(true);
  };

  const handleEditLink = (link: any) => {
    setEditingLink(link);
    setOpenDialog(true);
    handleMenuClose();
  };

  const handleDeleteLink = (linkId: number) => {
    setLinks(links.filter(link => link.id !== linkId));
    handleMenuClose();
  };

  const handleToggleActive = (linkId: number) => {
    setLinks(links.map(link => 
      link.id === linkId ? { ...link, isActive: !link.isActive } : link
    ));
  };

  const handleToggleShield = (linkId: number) => {
    setLinks(links.map(link => 
      link.id === linkId ? { ...link, shield: !link.shield } : link
    ));
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
  };

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5">My Deeplinks</Typography>
        <Button 
          variant="contained" 
          startIcon={<IconPlus />}
          onClick={handleCreateLink}
          sx={{
            bgcolor: '#5D87FF',
            '&:hover': { bgcolor: '#4570EA' }
          }}
        >
          Create Deeplink
        </Button>
      </Stack>

      <DashboardCard>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><Typography variant="subtitle2" fontWeight={600}>Link</Typography></TableCell>
                <TableCell><Typography variant="subtitle2" fontWeight={600}>Description</Typography></TableCell>
                <TableCell><Typography variant="subtitle2" fontWeight={600}>Type</Typography></TableCell>
                <TableCell><Typography variant="subtitle2" fontWeight={600}>Shield</Typography></TableCell>
                <TableCell><Typography variant="subtitle2" fontWeight={600}>Status</Typography></TableCell>
                <TableCell><Typography variant="subtitle2" fontWeight={600}>Analytics</Typography></TableCell>
                <TableCell><Typography variant="subtitle2" fontWeight={600}>Actions</Typography></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {links.map((link) => (
                <TableRow key={link.id}>
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography variant="body2" sx={{ maxWidth: 200 }} noWrap>
                        {link.url}
                      </Typography>
                      <Tooltip title="Copy Link">
                        <IconButton size="small" onClick={() => copyToClipboard(link.url)}>
                          <IconCopy size={16} />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">{link.description}</Typography>
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={link.type}
                      size="small"
                      color={link.type === 'Landing Page' ? 'secondary' : 'primary'}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Switch 
                        checked={link.shield} 
                        onChange={() => handleToggleShield(link.id)}
                        size="small"
                      />
                      {link.shield ? (
                        <Chip label="Safe Page" size="small" color="warning" />
                      ) : (
                        <Typography variant="body2" color="textSecondary">No</Typography>
                      )}
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Switch 
                        checked={link.isActive} 
                        onChange={() => handleToggleActive(link.id)}
                        size="small"
                      />
                      <Typography variant="body2" color={link.isActive ? 'success.main' : 'text.secondary'}>
                        {link.isActive ? 'Active' : 'Inactive'}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Button size="small" startIcon={<IconEye />} variant="outlined">
                      {link.visits.toLocaleString()}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={(e) => handleMenuClick(e, link.id)}>
                      <IconDots />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DashboardCard>

      {/* Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleEditLink(links.find(l => l.id === selectedLinkId))}>
          <IconEdit size={16} style={{ marginRight: 8 }} />
          Edit
        </MenuItem>
        <MenuItem onClick={() => selectedLinkId && handleDeleteLink(selectedLinkId)} sx={{ color: 'error.main' }}>
          <IconTrash size={16} style={{ marginRight: 8 }} />
          Delete
        </MenuItem>
      </Menu>

      {/* Create/Edit Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          {editingLink ? 'Edit Deeplink' : 'Create New Deeplink'}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={3} sx={{ mt: 1 }}>
            <TextField
              label="Link URL"
              fullWidth
              defaultValue={editingLink?.url || ''}
              placeholder="https://getallmylinks.com/yourname"
            />
            <TextField
              label="Description"
              fullWidth
              defaultValue={editingLink?.description || ''}
              placeholder="Enter a description for this link"
            />
            <FormControlLabel
              control={<Switch defaultChecked={editingLink?.shield || false} />}
              label="Enable Shield Protection"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpenDialog(false)}>
            {editingLink ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const ShieldProtectionTab = () => {
  return (
    <Box>
      <Typography variant="h4" mb={3} fontWeight={600}>
        Information about Shield Protection
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <DashboardCard>
            <Stack spacing={3}>
              <Box display="flex" alignItems="center" gap={2}>
                <IconShieldCheck size={32} color="#4CAF50" />
                <Typography variant="h5" fontWeight={600}>
                  What is Shield Protection?
                </Typography>
              </Box>
              
              <Typography variant="body1" color="textSecondary">
                Shield Protection is an optimal strategy for safely directing users from Instagram to pages, 
                such as OnlyFans or affiliate platforms. It leverages sophisticated technology and machine 
                learning (AI) to identify moderators and bots, displaying a safe page instead of the 
                destination page if such entities are detected.
              </Typography>

              <Divider />

              <Box>
                <Typography variant="h6" fontWeight={600} mb={2}>
                  What is a Safe Page?
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  A safe page is a webpage, similar to Linktree, where moderators and bots are redirected. 
                  It is advisable to configure an alternate Instagram account and link it on your safe page.
                </Typography>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h6" fontWeight={600} mb={2}>
                  How do I enable Shield Protection?
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  To enable Shield Protection, you must subscribe to a Creator or Agency plan. Each time 
                  you create a new link, you will have the option to activate Shield Protection.
                </Typography>
              </Box>
            </Stack>
          </DashboardCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <DashboardCard>
            <Stack spacing={3}>
              <Typography variant="h6" fontWeight={600}>
                How does a shielded link work?
              </Typography>

              <Box>
                <Typography variant="subtitle1" fontWeight={600} mb={1}>
                  1 - Link Placement on Instagram:
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Place a shielded link (a GetAllMyLinks link) in your Instagram profile bio.
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle1" fontWeight={600} mb={1}>
                  2 - User Interaction:
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  When a user on Instagram clicks on this shielded link, the request is first sent to 
                  the shield protection software's server instead of directly to the final destination URL.
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle1" fontWeight={600} mb={1}>
                  3 - Detection and Redirection by Shield Protection Software:
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  The shield protection Software detects the request, including important information 
                  such as the user's device type, location, and the fact that the request originated 
                  from the Instagram app on a mobile device.
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle1" fontWeight={600} mb={1}>
                  4 - Customized Redirection:
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Based on the detected information and predefined rules, the software decides the most 
                  appropriate version of the destination URL to which the user should be redirected. 
                  The final destination URL (private platforms, affiliate platform...etc) or the safe 
                  page with your social medias.
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle1" fontWeight={600} mb={1}>
                  5 - Final User Destination:
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  The shield protection software redirects the user to the chosen destination URL using 
                  the mobile browser after processing the request. This redirection is usually done so 
                  the user overlooks the intermediate steps – they find themselves on the final page 
                  as intended.
                </Typography>
              </Box>
            </Stack>
          </DashboardCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default function CweatorLinks() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <PageContainer title="CweatorLinks" description="Manage your deeplinks and analytics">
      <Box sx={{ width: '100%' }}>
        {/* Header */}
        <Stack direction="row" alignItems="center" spacing={2} mb={3}>
          <IconLink size={32} color="#5D87FF" />
          <Typography variant="h3" fontWeight={600} color="#5D87FF">
            CweatorLinks
          </Typography>
        </Stack>

        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs value={activeTab} onChange={handleTabChange}>
            <Tab 
              label="Overview" 
              icon={<IconChartLine size={20} />} 
              iconPosition="start"
            />
            <Tab 
              label="My Links" 
              icon={<IconLink size={20} />} 
              iconPosition="start"
            />
            <Tab 
              label="Shield Protection" 
              icon={<IconShield size={20} />} 
              iconPosition="start"
            />
          </Tabs>
        </Box>

        {/* Tab Panels */}
        <TabPanel value={activeTab} index={0}>
          <OverviewTab />
        </TabPanel>
        <TabPanel value={activeTab} index={1}>
          <MyLinksTab />
        </TabPanel>
        <TabPanel value={activeTab} index={2}>
          <ShieldProtectionTab />
        </TabPanel>
      </Box>
    </PageContainer>
  );
}