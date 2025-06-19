"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Grid, Box, Card, CardContent, Typography } from "@mui/material";
import PageContainer from "@/app/components/container/PageContainer";
import DashboardCard from "@/app/components/shared/DashboardCard";

// Metric Cards Component matching your design exactly
const MetricCard = ({ 
  number, 
  title, 
  bgColor, 
  textColor = "#000"
}: {
  number: string;
  title: string;
  bgColor: string;
  textColor?: string;
}) => (
  <Card 
    sx={{ 
      backgroundColor: bgColor,
      minHeight: '200px',
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
        variant="h1" 
        sx={{ 
          fontSize: '4rem', 
          fontWeight: 'bold', 
          color: textColor,
          mb: 2,
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
          lineHeight: 1.2
        }}
      >
        {title}
      </Typography>
    </CardContent>
  </Card>
);

// Telegram News Component - Compact version
const TelegramNews = () => (
  <DashboardCard title="📱 Telegram Updates" subtitle="Latest news">
    <Box sx={{ minHeight: '200px' }}>
      {/* Compact News Content */}
      <Box sx={{ mb: 2 }}>
        {[
          'New features released',
          'Weekly updates', 
          'Community highlights'
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
          ✈️ Join Channel
        </Typography>
      </Box>
    </Box>
  </DashboardCard>
);

export default function AgencyDashboard() {
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(false);
  }, []);

  // Agency metrics with dummy data
  const metrics = [
    {
      number: "4",
      title: "CWEATORS",
      bgColor: "#ff9edb" // Pink like your design
    },
    {
      number: "30", 
      title: "PENDING TASKS",
      bgColor: "#ffd54f" // Yellow like your design
    },
    {
      number: "102",
      title: "TASKS COMPLETED",
      bgColor: "#81c784" // Green like your design
    },
    {
      number: "3",
      title: "OVERDUE PAYMENTS", 
      bgColor: "#f44336", // Red like your design
      textColor: "#fff"
    }
  ];

  return (
    <PageContainer title="Agency Dashboard" description="Agency Management Dashboard">
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
          CWEATOR AGENCY DASHBOARD
        </Typography>

        <Grid container spacing={3}>
          {/* Main Metrics Area - Takes up more space */}
          <Grid size={{ xs: 12, lg: 9 }}>
            <Grid container spacing={3}>
              {metrics.map((metric, index) => (
                <Grid key={index} size={{ xs: 12, sm: 6 }}>
                  <MetricCard {...metric} />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right Side - Compact Telegram News */}
          <Grid size={{ xs: 12, lg: 3 }}>
            <TelegramNews />
          </Grid>
        </Grid>

        {/* Additional Content Section - REMOVED based on user request */}
        {/* The Quick Actions and Recent Activity sections have been removed */}
      </Box>
    </PageContainer>
  );
}