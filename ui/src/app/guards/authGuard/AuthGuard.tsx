'use client'
import { redirect, usePathname } from "next/navigation";
import { useEffect, useState } from 'react';
import useAuth from "./UseAuth";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const AuthGuard = ({ children }: any) => {
  const { isAuthenticated, isInitialized } = useAuth();
  const pathname = usePathname();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    console.log('AuthGuard - isInitialized:', isInitialized, 'isAuthenticated:', isAuthenticated);
    
    // Only redirect after the auth state is initialized
    if (isInitialized) {
      setIsChecking(false);
      if (!isAuthenticated) {
        console.log('User not authenticated, redirecting to login');
        redirect('/auth/auth1/login');
      } else {
        console.log('User authenticated, allowing access to:', pathname);
      }
    }
  }, [isAuthenticated, isInitialized, pathname]);

  // Show loading while checking authentication
  if (isChecking || !isInitialized) {
    console.log('AuthGuard showing loading...');
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  console.log('AuthGuard allowing access to children');
  return children;
};

export default AuthGuard;