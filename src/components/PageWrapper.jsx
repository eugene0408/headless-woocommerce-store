import React from "react";
// MUI
import { Container, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTheme } from "@mui/material/styles";

export const PageWrapper = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container sx={{ paddingBottom: isMobile ? 10 : 0 }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={1}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {children}
      </Grid>
    </Container>
  );
};
