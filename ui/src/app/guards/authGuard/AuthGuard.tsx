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
    // Only redirect after the auth state is initialized
    if (isInitialized) {
      setIsChecking(false);
      if (!isAuthenticated) {
        redirect('/auth/auth1/login');
      }
    }
  }, [isAuthenticated, isInitialized, pathname]);

  // Show loading while checking authentication
  if (isChecking || !isInitialized) {
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

  return children;
};

export default AuthGuard;