import React from "react";
// MUI
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const SectionWrapper = ({ children }) => {
  return (
    <Container>
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
