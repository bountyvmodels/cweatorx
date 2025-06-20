"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import PageContainer from "@/app/components/container/PageContainer";
import DashboardCard from "@/app/components/shared/DashboardCard";

// Import chart components from modernize templates
import YearlyBreakup from "@/app/components/dashboards/modern/YearlyBreakup";
import MonthlyEarnings from "@/app/components/dashboards/modern/MonthlyEarnings";
import RevenueUpdates from "@/app/components/dashboards/modern/RevenueUpdates";
import EmployeeSalary from "@/app/components/dashboards/modern/EmployeeSalary";
import TopPerformers from "@/app/components/dashboards/modern/TopPerformers";
import WeeklyStats from "@/app/components/dashboards/modern/WeeklyStats";

// Compact Metric Cards Component matching the example layout
const CompactMetricCard = ({ 
  number, 
  title, 
  bgColor, 
  textColor = "#000",
  subtitle
}: {
  number: string;
  title: string;
  bgColor: string;
  textColor?: string;
  subtitle?: string;
}) => (
  <DashboardCard>
    <Box 
      sx={{ 
        backgroundColor: bgColor,
        borderRadius: '12px',
        p: 3,
        textAlign: 'center',
        minHeight: '120px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.02)'
        }
      }}
    >
      <Typography 
        variant="h2" 
        sx={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          color: textColor,
          mb: 0.5,
          lineHeight: 1
        }}
      >
        {number}
      </Typography>
      <Typography 
        variant="subtitle1" 
        sx={{ 
          fontWeight: 600, 
          color: textColor,
          letterSpacing: '0.5px',
          fontSize: '0.875rem'
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography 
          variant="caption" 
          sx={{ 
            color: textColor,
            opacity: 0.8,
            fontSize: '0.75rem',
            mt: 0.5
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  </DashboardCard>
);

// Telegram News Component - matching the example style
const TelegramNews = () => (
  <DashboardCard title="📱 Telegram Updates" subtitle="Latest creator news">
    <Box sx={{ minHeight: '180px' }}>
      {/* News Content */}
      <Box sx={{ mb: 2 }}>
        {[
          'New monetization features',
          'Creator program updates', 
          'Earnings optimization tips'
        ].map((news, index) => (
          <Box 
            key={index}
            sx={{ 
              p: 1.5, 
              backgroundColor: '#f5f5f5', 
              borderRadius: '8px',
              textAlign: 'left',
              mb: 1.5,
              fontSize: '0.875rem'
            }}
          >
            <Typography variant="body2" fontWeight="500">
              • {news}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Join Button */}
      <Box 
        sx={{ 
          backgroundColor: '#00bcd4', 
          color: 'white', 
          p: 1.5, 
          textAlign: 'center',
          borderRadius: '8px',
          cursor: 'pointer',
          '&:hover': { backgroundColor: '#0097a7' }
        }}
      >
        <Typography variant="body2" fontWeight="bold">
          ✈️ Join Creator Channel
        </Typography>
      </Box>
    </Box>
  </DashboardCard>
);

export default function CweatorsEarningsOverview() {
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(false);
  }, []);

  // Cweator earnings metrics
  const earningsMetrics = [
    {
      number: "$1,438.83",
      title: "TOTAL EARNINGS",
      bgColor: "#ff9edb", // Pink
      subtitle: "This month"
    },
    {
      number: "$522.40", 
      title: "PENDING PAYOUT",
      bgColor: "#ffd54f", // Yellow
      subtitle: "Processing"
    },
    {
      number: "$866.43",
      title: "COMPLETED PAYOUTS",
      bgColor: "#81c784", // Green
      subtitle: "This month"
    },
    {
      number: "2.4K",
      title: "TOTAL VIEWS", 
      bgColor: "#64b5f6", // Blue
      subtitle: "This month"
    }
  ];

  return (
    <PageContainer title="Cweators Earnings Overview" description="Comprehensive earnings and performance analytics">
      <Box sx={{ p: 3 }}>
        
        {/* Page Title - more compact */}
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 'bold', 
            color: '#ff9edb',
            mb: 3,
            letterSpacing: '0.1em'
          }}
        >
          CWEATOR EARNINGS OVERVIEW
        </Typography>

        {/* Top Metrics Row - 4 cards in a row like the example */}
        <Grid container spacing={3} mb={3}>
          {earningsMetrics.map((metric, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, xl: 3 }}>
              <CompactMetricCard {...metric} />
            </Grid>
          ))}
        </Grid>

        {/* Main Dashboard Grid - matching the example layout */}
        <Grid container spacing={3}>
          
          {/* Left Column - Main Charts (8 columns) */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Grid container spacing={3}>
              
              {/* Revenue Updates Chart - Full width */}
              <Grid size={{ xs: 12 }}>
                <RevenueUpdates isLoading={isLoading} />
              </Grid>
              
              {/* Yearly Breakup and Monthly Earnings - Side by side */}
              <Grid size={{ xs: 12, md: 6 }}>
                <YearlyBreakup isLoading={isLoading} />
              </Grid>
              
              <Grid size={{ xs: 12, md: 6 }}>
                <MonthlyEarnings isLoading={isLoading} />
              </Grid>
              
            </Grid>
          </Grid>

          {/* Right Column - Sidebar (4 columns) */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Grid container spacing={3}>
              
              {/* Telegram News */}
              <Grid size={{ xs: 12 }}>
                <TelegramNews />
              </Grid>
              
              {/* Weekly Stats */}
              <Grid size={{ xs: 12 }}>
                <WeeklyStats isLoading={isLoading} />
              </Grid>
              
            </Grid>
          </Grid>
          
          {/* Bottom Row - Charts spanning full width */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <EmployeeSalary isLoading={isLoading} />
          </Grid>
          
          <Grid size={{ xs: 12, lg: 6 }}>
            <TopPerformers />
          </Grid>
          
        </Grid>

      </Box>
    </PageContainer>
  );
}