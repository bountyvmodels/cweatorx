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
    width: isCollapse == "mini-sidebar" && !isSidebarHover ? '40px' : '280px',
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    textDecoration: "none",
  }));

  return (
    <LinkStyled href="/">
      <Image
        src="/images/cweatorlogo.png"
        alt="CWEATORS logo"
        height={35}
        width={35}
        priority
        style={{ objectFit: 'contain', flexShrink: 0 }}
      />
      {!(isCollapse == "mini-sidebar" && !isSidebarHover) && (
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 600, 
            letterSpacing: '0.1em',
            color: activeMode === "dark" ? 'white' : '#2A3547',
            fontSize: '1rem',
            lineHeight: 1,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          C W E A T O R
        </Typography>
      )}
    </LinkStyled>
  );
};

export default Logo;