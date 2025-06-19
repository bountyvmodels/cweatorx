'use client'
import { CustomizerContext } from "@/app/context/customizerContext";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import config from '@/app/context/config'
import Image from "next/image";
import { useContext } from "react";
import { Typography, Box } from "@mui/material";

const Logo = () => {
  const { isCollapse, isSidebarHover, activeDir, activeMode } = useContext(CustomizerContext);

  const TopbarHeight = config.topbarHeight;

  const LinkStyled = styled(Link)(() => ({
    height: TopbarHeight,
    width: isCollapse == "mini-sidebar" && !isSidebarHover ? '40px' : '220px',
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textDecoration: "none",
  }));

  return (
    <LinkStyled href="/">
      <Image
        src="/images/cweatorlogo.png"
        alt="CWEATORS logo"
        height={45}
        width={45}
        priority
        style={{ objectFit: 'contain' }}
      />
      {!(isCollapse == "mini-sidebar" && !isSidebarHover) && (
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 700, 
            letterSpacing: '0.15em', // Increased letter spacing for C W E A T O R effect
            color: activeMode === "dark" ? 'white' : '#2A3547',
            fontSize: '1.25rem',
            lineHeight: 1,
          }}
        >
          C W E A T O R
        </Typography>
      )}
    </LinkStyled>
  );
};

export default Logo;