"use client";
import React from "react";
import { useEffect, useState } from "react";

import { Grid, Box, Card, CardContent, Typography, Stack } from "@mui/material";
import PageContainer from "@/app/components/container/PageContainer";
import DashboardCard from "@/app/components/shared/DashboardCard";

// Metric Cards Component
const MetricCard = ({ 
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
      minHeight: '200px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '16px',
      border: '2px solid rgba(0,0,0,0.1)',
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
          mb: 1
        }}
      >
        {number}
      </Typography>
      <Typography 
        variant="h6" 
        sx={{ 
          fontWeight: 'bold', 
          color: textColor,
          letterSpacing: '0.5px'
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
            mt: 0.5
          }}
        >
          {subtitle}
        </Typography>
      )}
    </CardContent>
  </Card>
);

// Agency News Component
const AgencyNews = () => (
  <DashboardCard>
    <Box>
      {/* Header */}
      <Box 
        sx={{ 
          backgroundColor: '#00bcd4', 
          color: 'white', 
          p: 2, 
          borderRadius: '12px 12px 0 0',
          textAlign: 'center',
          mb: 2
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          AGENCY NEWS
        </Typography>
      </Box>

      {/* News Items */}
      <Stack spacing={2}>
        {[
          'New client onboarding system',
          'Q4 performance metrics',
          'Team expansion update',
          'Platform integration news',
          'Revenue milestone achieved'
        ].map((news, index) => (
          <Box 
            key={index}
            sx={{ 
              p: 2, 
              backgroundColor: '#f5f5f5', 
              borderRadius: '8px',
              textAlign: 'center'
            }}
          >
            <Typography variant="subtitle1" fontWeight="600">
              AGENCY UPDATE
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {news}
            </Typography>
          </Box>
        ))}
      </Stack>

      {/* Join Button */}
      <Box 
        sx={{ 
          backgroundColor: '#00bcd4', 
          color: 'white', 
          p: 2, 
          borderRadius: '12px',
          textAlign: 'center',
          mt: 2,
          cursor: 'pointer',
          '&:hover': { backgroundColor: '#0097a7' }
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          📊 VIEW ANALYTICS
        </Typography>
      </Box>
    </Box>
  </DashboardCard>
);

export default function Dashboard() {
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(false);
  }, []);

  const metrics = [
    {
      number: "47",
      title: "ACTIVE CLIENTS",
      bgColor: "#ff9edb",
      textColor: "#000"
    },
    {
      number: "156",
      title: "PENDING CAMPAIGNS",
      bgColor: "#ffd54f",
      textColor: "#000"
    },
    {
      number: "892",
      title: "CAMPAIGNS COMPLETED",
      bgColor: "#81c784",
      textColor: "#000"
    },
    {
      number: "12",
      title: "OVERDUE DELIVERABLES",
      bgColor: "#f44336",
      textColor: "#fff"
    }
  ];

  return (
    <PageContainer title="Agency Dashboard" description="Agency Management Dashboard">
      <Box sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 'bold', 
              color: '#ff9edb',
              mb: 1
            }}
          >
            AGENCY
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Manage Your Creators & Campaigns
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* Metric Cards */}
          {metrics.map((metric, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
              <MetricCard {...metric} />
            </Grid>
          ))}

          {/* Agency News Section */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <AgencyNews />
          </Grid>

          {/* Revenue Chart Placeholder */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <DashboardCard title="Revenue Analytics" subtitle="Monthly Performance Overview">
              <Box 
                sx={{ 
                  height: '400px', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px dashed #ddd'
                }}
              >
                <Typography variant="h6" color="textSecondary">
                  Revenue Chart Component
                </Typography>
              </Box>
            </DashboardCard>
          </Grid>

          {/* Recent Activity */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <DashboardCard title="Recent Activity" subtitle="Latest Agency Updates">
              <Stack spacing={2}>
                {[
                  { action: "New client signed", time: "2 hours ago", icon: "👤" },
                  { action: "Campaign launched", time: "4 hours ago", icon: "🚀" },
                  { action: "Payment received", time: "6 hours ago", icon: "💰" },
                  { action: "Creator onboarded", time: "1 day ago", icon: "⭐" }
                ].map((activity, index) => (
                  <Box 
                    key={index}
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      p: 2, 
                      backgroundColor: '#f8f9fa',
                      borderRadius: '8px'
                    }}
                  >
                    <Typography sx={{ fontSize: '1.5rem', mr: 2 }}>
                      {activity.icon}
                    </Typography>
                    <Box>
                      <Typography variant="subtitle2" fontWeight="600">
                        {activity.action}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        {activity.time}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </DashboardCard>
          </Grid>

          {/* Top Performers */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <DashboardCard title="Top Performing Creators" subtitle="This Month's Stars">
              <Stack spacing={2}>
                {[
                  { name: "Sarah Johnson", earnings: "$12,450", avatar: "🌟" },
                  { name: "Mike Chen", earnings: "$8,920", avatar: "🎯" },
                  { name: "Emma Davis", earnings: "$7,340", avatar: "💎" },
                  { name: "Alex Rivera", earnings: "$6,180", avatar: "🔥" }
                ].map((creator, index) => (
                  <Box 
                    key={index}
                    sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center', 
                      p: 2, 
                      backgroundColor: index === 0 ? '#fff3e0' : '#f8f9fa',
                      borderRadius: '8px',
                      border: index === 0 ? '2px solid #ff9edb' : 'none'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography sx={{ fontSize: '1.5rem', mr: 2 }}>
                        {creator.avatar}
                      </Typography>
                      <Typography variant="subtitle2" fontWeight="600">
                        {creator.name}
                      </Typography>
                    </Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#ff9edb', 
                        fontWeight: 'bold' 
                      }}
                    >
                      {creator.earnings}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </DashboardCard>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}