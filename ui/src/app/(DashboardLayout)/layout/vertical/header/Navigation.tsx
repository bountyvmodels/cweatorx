import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import Link from "next/link";
import { IconChevronDown, IconHelp } from "@tabler/icons-react";
import AppLinks from "./AppLinks";
import QuickLinks from "./QuickLinks";

const AppDD = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (<>
    {/* Removed Apps dropdown and individual navigation buttons */}
    {/* You can add custom navigation items here if needed */}
  </>);
};

export default AppDD;