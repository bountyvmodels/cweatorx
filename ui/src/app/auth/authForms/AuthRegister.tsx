import { Box, Typography, Button, Divider, Alert } from "@mui/material";

import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import { Stack } from "@mui/system";
import { registerType } from "@/app/(DashboardLayout)/types/auth/auth";
import AuthSocialButtons from "./AuthSocialButtons";

import { useRouter } from "next/navigation";
import { SetStateAction, useContext, useState } from "react";
import AuthContext from "@/app/context/AuthContext";

const AuthRegister = ({ title, subtitle, subtext }: registerType) => {
  const [email, setEmail] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const router = useRouter();
  const { signup }: any = useContext(AuthContext);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await signup(email, password, userName);
      router.push("/auth/auth1/login");
    } catch (err: any) {
      setError(err.message);
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
      <AuthSocialButtons title="Sign up with" />

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
            or sign up with
          </Typography>
        </Divider>
      </Box>
      {error && <Alert severity="error">{error}</Alert>}

      <Box>
        <form onSubmit={handleRegister}>
          <Stack mb={3}>
            <CustomFormLabel htmlFor="username">User Name</CustomFormLabel>
            <CustomTextField
              id="username"
              variant="outlined"
              fullWidth
              value={userName}
              onChange={(e: { target: { value: SetStateAction<string> } }) =>
                setuserName(e.target.value)
              }
            />
            <CustomFormLabel htmlFor="email">Email Address</CustomFormLabel>
            <CustomTextField
              id="email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e: { target: { value: SetStateAction<string> } }) =>
                setEmail(e.target.value)
              }
            />
            <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
            <CustomTextField
              id="password"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e: { target: { value: SetStateAction<string> } }) =>
                setPassword(e.target.value)
              }
            />
          </Stack>
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
          >
            Register
          </Button>
        </form>
      </Box>
      {subtitle}
    </>
  );
};

export default AuthRegister;