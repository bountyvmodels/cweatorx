"use client";
import React, { useState } from "react";
import { 
  Grid, 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Button, 
  ButtonGroup,
  Tab,
  Tabs,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Stack,
  Chip
} from "@mui/material";
import { 
  IconCalendar, 
  IconFilter,
  IconCircleCheck,
  IconBrandTelegram,
  IconCurrencyDollar,
  IconMessage,
  IconFlame,
  IconUsers,
  IconFileStack
} from "@tabler/icons-react";
import PageContainer from "@/app/components/container/PageContainer";
import DashboardCard from "@/app/components/shared/DashboardCard";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// Earnings Summary Cards
const EarningsSummaryCard = ({ 
  amount, 
  label, 
  icon, 
  color = "#5D87FF" 
}: {
  amount: string;
  label: string;
  icon: React.ReactNode;
  color?: string;
}) => (
  <Card sx={{ border: '1px solid #e0e0e0', borderRadius: 2 }}>
    <CardContent sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box 
            sx={{ 
              width: 48, 
              height: 48, 
              borderRadius: 2, 
              backgroundColor: `${color}20`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: color
            }}
          >
            {icon}
          </Box>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight={700} color="text.primary">
            {amount}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            {label}
          </Typography>
        </Box>
      </Stack>
    </CardContent>
  </Card>
);

// Main Earnings Card (Left side - Total earnings)
const MainEarningsCard = ({ totalEarnings }: { totalEarnings: string }) => (
  <Card sx={{ border: '1px solid #e0e0e0', borderRadius: 2, height: '100%' }}>
    <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Stack spacing={2}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box 
            sx={{ 
              width: 48, 
              height: 48, 
              borderRadius: '50%', 
              backgroundColor: '#5D87FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}
          >
            <IconCircleCheck size={24} />
          </Box>
        </Box>
        <Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Total earnings
          </Typography>
          <Typography variant="h2" fontWeight={700} color="#5D87FF">
            {totalEarnings}
          </Typography>
        </Box>
      </Stack>
    </CardContent>
  </Card>
);

export default function CweatorsEarningsOverview() {
  const [timeFilter, setTimeFilter] = useState('30days');
  const [activeTab, setActiveTab] = useState(0);

  // Chart configuration for earnings trends
  const chartOptions = {
    chart: {
      type: 'bar' as const,
      height: 300,
      toolbar: { show: false },
    },
    colors: ['#5D87FF'],
    plotOptions: {
      bar: {
        columnWidth: '60%',
        borderRadius: 4,
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: [
        'May 21', 'May 22', 'May 23', 'May 24', 'May 25', 'May 26', 'May 27', 'May 28', 'May 29', 'May 30', 'May 31',
        'Jun 1', 'Jun 2', 'Jun 3', 'Jun 4', 'Jun 5', 'Jun 6', 'Jun 7', 'Jun 8', 'Jun 9', 'Jun 10',
        'Jun 11', 'Jun 12', 'Jun 13', 'Jun 14', 'Jun 15', 'Jun 16', 'Jun 17', 'Jun 18', 'Jun 19'
      ],
      labels: { rotate: -45 }
    },
    yaxis: {
      max: 1000,
      tickAmount: 5,
    },
    grid: {
      strokeDashArray: 3,
    },
  };

  const chartSeries = [{
    name: 'Earnings',
    data: [600, 380, 850, 340, 300, 250, 200, 150, 220, 100, 120, 350, 450, 350, 200, 150, 320, 180, 150, 320, 180, 100, 250, 150, 100, 220, 250, 220, 250, 100]
  }];

  // Channel breakdown chart
  const channelChartOptions = {
    chart: {
      type: 'line' as const,
      height: 200,
      toolbar: { show: false },
    },
    colors: ['#5D87FF', '#00D4AA', '#FF6B6B', '#FFB020'],
    stroke: { width: 3 },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    },
    legend: { show: false },
  };

  const channelSeries = [
    { name: 'Subscriptions', data: [550, 700, 600, 550] },
    { name: 'Tips', data: [300, 250, 280, 300] },
    { name: 'Posts', data: [0, 0, 0, 0] },
    { name: 'Messages', data: [450, 500, 480, 470] }
  ];

  return (
    <PageContainer title="Creator Reports" description="Creator earnings and performance analytics">
      <Box sx={{ p: 3 }}>
        
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" fontWeight={600}>
            Creator reports
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <ButtonGroup size="small">
              <Button 
                startIcon={<IconCalendar size={16} />}
                sx={{ borderColor: '#e0e0e0' }}
              >
                May 21, 2025 → Jun 19, 2025
              </Button>
              <Button sx={{ borderColor: '#e0e0e0' }}>
                <IconCalendar size={16} />
              </Button>
            </ButtonGroup>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <Select value="day" displayEmpty>
                <MenuItem value="day">Shown by day</MenuItem>
                <MenuItem value="week">Shown by week</MenuItem>
                <MenuItem value="month">Shown by month</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <Select value="earnings" displayEmpty>
                <MenuItem value="earnings">Net earnings</MenuItem>
                <MenuItem value="gross">Gross earnings</MenuItem>
              </Select>
            </FormControl>
            <Button variant="outlined" startIcon={<IconFilter size={16} />} size="small">
              Filters
            </Button>
          </Box>
        </Box>

        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs value={activeTab} onChange={(e, val) => setActiveTab(val)}>
            <Tab label="Overview" />
            <Tab label="Creator performance" />
          </Tabs>
        </Box>

        {/* Earnings Summary Section */}
        <Typography variant="h6" fontWeight={600} sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
          Earnings summary
          <Box sx={{ width: 16, height: 16, borderRadius: '50%', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="caption" sx={{ fontSize: '10px' }}>?</Typography>
          </Box>
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {/* Main Total Earnings Card */}
          <Grid size={{ xs: 12, md: 3 }}>
            <MainEarningsCard totalEarnings="$32,778.72" />
          </Grid>

          {/* Other Earnings Cards */}
          <Grid size={{ xs: 12, md: 9 }}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 6, md: 3 }}>
                <EarningsSummaryCard
                  amount="$3,243.49"
                  label="Subscriptions"
                  icon={<IconUsers size={20} />}
                  color="#5D87FF"
                />
              </Grid>
              <Grid size={{ xs: 6, md: 3 }}>
                <EarningsSummaryCard
                  amount="$156.00"
                  label="Posts"
                  icon={<IconFileStack size={20} />}
                  color="#00D4AA"
                />
              </Grid>
              <Grid size={{ xs: 6, md: 3 }}>
                <EarningsSummaryCard
                  amount="$26,553.20"
                  label="Messages"
                  icon={<IconMessage size={20} />}
                  color="#9C27B0"
                />
              </Grid>
              <Grid size={{ xs: 6, md: 3 }}>
                <EarningsSummaryCard
                  amount="$2,826.03"
                  label="Tips"
                  icon={<IconFlame size={20} />}
                  color="#FF9800"
                />
              </Grid>
              <Grid size={{ xs: 6, md: 3 }}>
                <EarningsSummaryCard
                  amount="$0.00"
                  label="Referrals"
                  icon={<IconUsers size={20} />}
                  color="#FF5722"
                />
              </Grid>
              <Grid size={{ xs: 6, md: 3 }}>
                <EarningsSummaryCard
                  amount="$0.00"
                  label="Streams"
                  icon={<IconFileStack size={20} />}
                  color="#2196F3"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Earnings Trends Chart */}
        <DashboardCard 
          title="Earnings trends" 
          subtitle=""
          action={
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="caption">?</Typography>
            </Box>
          }
        >
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="bar"
            height={300}
          />
        </DashboardCard>

        {/* Earnings by Channel */}
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 8 }}>
              <DashboardCard title="Earnings by channel">
                <Chart
                  options={channelChartOptions}
                  series={channelSeries}
                  type="line"
                  height={200}
                />
              </DashboardCard>
            </Grid>
            
            <Grid size={{ xs: 12, md: 4 }}>
              <Card sx={{ border: '1px solid #e0e0e0', height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Stack spacing={3}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="body2" color="text.secondary">Subscriptions</Typography>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="body2" fontWeight={600}>32.38%</Typography>
                        <Typography variant="caption" color="text.secondary">$2587.94</Typography>
                      </Box>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="body2" color="text.secondary">Tips</Typography>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="body2" fontWeight={600}>5.12%</Typography>
                        <Typography variant="caption" color="text.secondary">$409.45</Typography>
                      </Box>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="body2" color="text.secondary">Posts</Typography>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="body2" fontWeight={600}>0%</Typography>
                        <Typography variant="caption" color="text.secondary">$0</Typography>
                      </Box>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="body2" color="text.secondary">Messages</Typography>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="body2" fontWeight={600}>62.50%</Typography>
                        <Typography variant="caption" color="text.secondary">$4994.81</Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

      </Box>
    </PageContainer>
  );
}