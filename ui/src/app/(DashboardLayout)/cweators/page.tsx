"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Grid, Box, Card, CardContent, Typography } from "@mui/material";
import PageContainer from "@/app/components/container/PageContainer";
import DashboardCard from "@/app/components/shared/DashboardCard";

// Import chart components from modernize templates
import YearlyBreakup from "@/app/components/dashboards/modern/YearlyBreakup";
import MonthlyEarnings from "@/app/components/dashboards/modern/MonthlyEarnings";
import RevenueUpdates from "@/app/components/dashboards/modern/RevenueUpdates";
import EmployeeSalary from "@/app/components/dashboards/modern/EmployeeSalary";
import TopPerformers from "@/app/components/dashboards/modern/TopPerformers";
import WeeklyStats from "@/app/components/dashboards/modern/WeeklyStats";

// Metric Cards Component for Cweator-specific earnings data
const EarningsMetricCard = ({ 
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
  <Card 
    sx={{ 
      backgroundColor: bgColor,
      minHeight: '150px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '24px',
      border: '3px solid rgba(0,0,0,0.1)',
      cursor: 'pointer',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'scale(1.02)'
      }
    }}
  >
    <CardContent sx={{ textAlign: 'center', p: 3 }}>
      <Typography 
        variant="h2" 
        sx={{ 
          fontSize: '3rem', 
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
          fontWeight: 'bold', 
          color: textColor,
          letterSpacing: '1px',
          lineHeight: 1.2,
          mb: subtitle ? 1 : 0
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography 
          variant="body2" 
          sx={{ 
            color: textColor,
            opacity: 0.8,
            fontSize: '0.75rem'
          }}
        >
          {subtitle}
        </Typography>
      )}
    </CardContent>
  </Card>
);

// Telegram News Component - cweator-focused content
const TelegramNews = () => (
  <DashboardCard title="📱 Telegram Updates" subtitle="Latest creator news">
    <Box sx={{ minHeight: '200px' }}>
      {/* Compact News Content */}
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
              borderRadius: '6px',
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

      {/* Compact Join Button */}
      <Box 
        sx={{ 
          backgroundColor: '#00bcd4', 
          color: 'white', 
          p: 1.5, 
          textAlign: 'center',
          borderRadius: '6px',
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
        
        {/* Page Title */}
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: 'bold', 
            color: '#ff9edb',
            mb: 4,
            letterSpacing: '1px'
          }}
        >
          CWEATOR EARNINGS OVERVIEW
        </Typography>

        {/* Top Metrics Row */}
        <Grid container spacing={3} mb={4}>
          {earningsMetrics.map((metric, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
              <EarningsMetricCard {...metric} />
            </Grid>
          ))}
        </Grid>

        {/* Main Dashboard Grid */}
        <Grid container spacing={3}>
          
          {/* Left Column - Main Charts */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Grid container spacing={3}>
              
              {/* Revenue Updates Chart */}
              <Grid size={{ xs: 12 }}>
                <RevenueUpdates isLoading={isLoading} />
              </Grid>
              
              {/* Yearly Breakup and Monthly Earnings */}
              <Grid size={{ xs: 12, md: 6 }}>
                <YearlyBreakup isLoading={isLoading} />
              </Grid>
              
              <Grid size={{ xs: 12, md: 6 }}>
                <MonthlyEarnings isLoading={isLoading} />
              </Grid>
              
              {/* Creator Performance Chart */}
              <Grid size={{ xs: 12 }}>
                <EmployeeSalary isLoading={isLoading} />
              </Grid>
              
            </Grid>
          </Grid>

          {/* Right Column - Stats and Updates */}
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
          
          {/* Full Width Bottom Section - Top Performers */}
          <Grid size={{ xs: 12 }}>
            <TopPerformers />
          </Grid>
          
        </Grid>

      </Box>
    </PageContainer>
  );
}