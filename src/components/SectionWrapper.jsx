import React from "react";
// MUI
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const SectionWrapper = ({ children, justify = "flex-start" }) => {
  return (
    <Container sx={{ position: "relative" }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={1}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent={justify}
        alignItems="center"
        sx={{ display: "flex", flexGrow: 1 }}
      >
        {children}
      </Grid>
    </Container>
  );
};
