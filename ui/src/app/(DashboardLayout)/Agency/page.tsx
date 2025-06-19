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

// Telegram News Component - Live Embed
const TelegramNews = () => (
  <DashboardCard title="TELEGRAM NEWS" subtitle="Latest Updates">
    <Box sx={{ minHeight: '400px' }}>
      {/* News Content */}
      <Box sx={{ mb: 3 }}>
        {[
          'TELEGRAM CHANNEL POSTS',
          'TELEGRAM CHANNEL POSTS', 
          'TELEGRAM CHANNEL POSTS',
          'TELEGRAM CHANNEL POSTS'
        ].map((news, index) => (
          <Box 
            key={index}
            sx={{ 
              p: 2, 
              backgroundColor: '#f5f5f5', 
              borderRadius: '8px',
              textAlign: 'center',
              mb: 2
            }}
          >
            <Typography variant="body1" fontWeight="600">
              TELEGRAM CHANNEL POSTS
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Join Button */}
      <Box 
        sx={{ 
          backgroundColor: '#00bcd4', 
          color: 'white', 
          p: 2, 
          textAlign: 'center',
          borderRadius: '8px',
          cursor: 'pointer',
          '&:hover': { backgroundColor: '#0097a7' }
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          ✈️ JOIN OUR CHANNEL
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
          {/* Main Metrics Area */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Grid container spacing={3}>
              {metrics.map((metric, index) => (
                <Grid key={index} size={{ xs: 12, sm: 6 }}>
                  <MetricCard {...metric} />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right Side - Telegram News */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <TelegramNews />
          </Grid>
        </Grid>

        {/* Additional Content Section */}
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <DashboardCard title="Quick Actions" subtitle="Manage your agency">
              <Box sx={{ p: 2 }}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  • View all Cweators
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  • Manage tasks and assignments
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  • Process payments
                </Typography>
                <Typography variant="body1">
                  • Generate reports
                </Typography>
              </Box>
            </DashboardCard>
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <DashboardCard title="Recent Activity" subtitle="Latest updates">
              <Box sx={{ p: 2 }}>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                  2 hours ago
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  New Cweator registered
                </Typography>
                
                <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                  4 hours ago
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Task completed by John Doe
                </Typography>
                
                <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                  1 day ago
                </Typography>
                <Typography variant="body1">
                  Payment processed - $500
                </Typography>
              </Box>
            </DashboardCard>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}