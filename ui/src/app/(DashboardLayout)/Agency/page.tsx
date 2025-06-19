"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Grid, Box, Card, CardContent, Typography } from "@mui/material";
import PageContainer from "@/app/components/container/PageContainer";

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
      minHeight: '240px',
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
    <CardContent sx={{ textAlign: 'center', p: 4 }}>
      <Typography 
        variant="h1" 
        sx={{ 
          fontSize: '5rem', 
          fontWeight: 'bold', 
          color: textColor,
          mb: 2,
          lineHeight: 1
        }}
      >
        {number}
      </Typography>
      <Typography 
        variant="h5" 
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
  <Card sx={{ height: '100%', minHeight: '600px' }}>
    <CardContent sx={{ p: 0, height: '100%' }}>
      {/* Header */}
      <Box 
        sx={{ 
          backgroundColor: '#00bcd4', 
          color: 'white', 
          p: 3, 
          textAlign: 'center'
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          TELEGRAM NEWS
        </Typography>
      </Box>

      {/* News Content */}
      <Box sx={{ p: 3, height: 'calc(100% - 140px)', overflow: 'auto' }}>
        {[
          'TELEGRAM CHANNEL POSTS',
          'TELEGRAM CHANNEL POSTS', 
          'TELEGRAM CHANNEL POSTS',
          'TELEGRAM CHANNEL POSTS'
        ].map((news, index) => (
          <Box 
            key={index}
            sx={{ 
              p: 3, 
              backgroundColor: '#f5f5f5', 
              borderRadius: '8px',
              textAlign: 'center',
              mb: 2
            }}
          >
            <Typography variant="h6" fontWeight="600">
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
          p: 3, 
          textAlign: 'center',
          cursor: 'pointer',
          '&:hover': { backgroundColor: '#0097a7' }
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          ✈️ JOIN OUR CHANNEL
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default function Dashboard() {
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
      <Box sx={{ 
        display: 'flex', 
        height: '100vh',
        backgroundColor: '#f8f9fa'
      }}>
        
        {/* Left Sidebar */}
        <Box sx={{ 
          width: '250px',
          backgroundColor: '#fff',
          p: 3,
          borderRight: '1px solid #e0e0e0'
        }}>
          {/* Logo/Title */}
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 'bold', 
              color: '#ff9edb',
              mb: 4,
              letterSpacing: '1px'
            }}
          >
            CWEATOR
          </Typography>

          {/* Navigation Items */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="overline" color="textSecondary" sx={{ fontWeight: 'bold' }}>
              HOME
            </Typography>
          </Box>

          <Box sx={{ 
            backgroundColor: '#ff9edb', 
            color: 'white',
            p: 2,
            borderRadius: '8px',
            mb: 2
          }}>
            <Typography variant="h6" fontWeight="bold">
              DASHBOARD
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="overline" color="textSecondary" sx={{ fontWeight: 'bold' }}>
              OTHER
            </Typography>
          </Box>

          {[
            { name: 'VIEW CWEATORS', disabled: false },
            { name: 'CWEATOR UNI', disabled: false },
            { name: 'CWEATORLINKS', disabled: false }
          ].map((item, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontWeight: '600',
                    color: item.disabled ? '#ccc' : '#333'
                  }}
                >
                  {item.name}
                </Typography>
                {item.name === 'VIEW CWEATORS' && (
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="caption" color="textSecondary">
                      ⏷
                    </Typography>
                    <Box sx={{ ml: 2, mt: 1 }}>
                      <Typography variant="caption" color="textSecondary">
                        🔗 Disabled
                      </Typography>
                      <Typography variant="caption" color="#ff9edb" sx={{ ml: 2 }}>
                        Online
                      </Typography>
                    </Box>
                  </Box>
                )}
                {item.name === 'CWEATORLINKS' && (
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="caption" color="textSecondary">
                      🔗 Outlined
                    </Typography>
                    <Typography variant="caption" color="#ff9edb" sx={{ ml: 2 }}>
                      Online
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          ))}

          <Box sx={{ 
            backgroundColor: '#ff9edb', 
            color: 'white',
            p: 2,
            borderRadius: '8px',
            mt: 4,
            textAlign: 'center'
          }}>
            <Typography variant="body1" fontWeight="bold">
              JOIN OUR COMMUNITY
            </Typography>
          </Box>
        </Box>

        {/* Main Content Area */}
        <Box sx={{ 
          flex: 1,
          display: 'flex',
          gap: 3,
          p: 3
        }}>
          
          {/* Center - Metrics Overview */}
          <Box sx={{ flex: 2 }}>
            <Grid container spacing={3}>
              {metrics.map((metric, index) => (
                <Grid key={index} size={{ xs: 6 }}>
                  <MetricCard {...metric} />
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Right Side - Telegram News */}
          <Box sx={{ width: '350px' }}>
            <TelegramNews />
          </Box>
        </Box>
      </Box>
    </PageContainer>
  );
}