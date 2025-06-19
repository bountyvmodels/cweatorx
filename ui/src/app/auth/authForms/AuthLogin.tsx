"use client"
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Divider,
} from "@mui/material";

import { loginType } from "@/app/(DashboardLayout)/types/auth/auth";
import CustomCheckbox from "@/app/components/forms/theme-elements/CustomCheckbox";
import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import AuthSocialButtons from "./AuthSocialButtons";
import { SetStateAction, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import AuthContext from "@/app/context/AuthContext";

import { Alert } from "@mui/material";


const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  const [email, setEmail] = useState<string>("demo1234@gmail.com");
  const [password, setPassword] = useState<string>("demo1234");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const { signin } = useContext(AuthContext);

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      await signin(email, password);
      
      // Add a small delay to ensure authentication state is updated
      setTimeout(() => {
        router.push("/Agency");
        router.refresh(); // Force a refresh to ensure state is updated
      }, 100);
      
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h3" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      <AuthSocialButtons title="Sign in with" />
      <Box mt={3}>
        <Divider>
          <Typography
            component="span"
            color="textSecondary"
            variant="h6"
            fontWeight="400"
            position="relative"
            px={2}
          >
            or sign in with
          </Typography>
        </Divider>

        {error && (
          <Box mt={2}>
            <Alert severity="error">{error}</Alert>
          </Box>
        )}
      </Box>
      <form onSubmit={handleLogin}>
        <Stack>
          <Box>
            <CustomFormLabel htmlFor="email">Email Address</CustomFormLabel>
            <CustomTextField
              id="email"
              variant="outlined"
              fullWidth
              value={email}
              disabled={isLoading}
              onChange={(e: { target: { value: SetStateAction<string> } }) =>
                setEmail(e.target.value)
              }
            />
          </Box>
          <Box>
            <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
            <CustomTextField
              id="password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              disabled={isLoading}
              onChange={(e: { target: { value: SetStateAction<string> } }) =>
                setPassword(e.target.value)
              }
            />
          </Box>
          <Stack
            justifyContent="space-between"
            direction="row"
            alignItems="center"
            my={2}
          >
            <FormGroup>
              <FormControlLabel
                control={<CustomCheckbox defaultChecked />}
                label="Remember this Device"
              />
            </FormGroup>
          </Stack>
        </Stack>
        <Box>
          <Button
            sx={{
              bgcolor: '#ff9edb',
              color: 'white',
              '&:hover': {
                bgcolor: '#ff7dc7',
              },
            }}
            variant="contained"
            size="large"
            fullWidth
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
        </Box>
      </form>

      {subtitle}
    </>
  );
};

export default AuthLogin;