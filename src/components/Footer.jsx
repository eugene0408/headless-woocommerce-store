import React from "react";
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  useColorScheme,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { mode } = useColorScheme();

  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: 4,
        pt: 8,
        pb: isMobile ? 12 : 0,
        background:
          mode === "light" ? "#f4f4f4" : theme.palette.background.paper,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
        }}
      >
        <IconButton
          color="inherit"
          href="https://www.facebook.com"
          target="_blank"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.twitter.com"
          target="_blank"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.instagram.com"
          target="_blank"
        >
          <InstagramIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body2" color="textSecondary" align="center">
          © {currentYear}
        </Typography>
      </Box>
    </Box>
  );
};
