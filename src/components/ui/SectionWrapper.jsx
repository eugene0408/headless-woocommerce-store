// MUI
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const SectionWrapper = ({
  children,
  justify = "flex-start",
  align = "center",
  sx,
}) => {
  return (
    <Container sx={{ position: "relative", ...sx }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={1}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent={justify}
        alignItems={align}
        sx={{
          display: "flex",
          flexGrow: 1,
        }}
      >
        {children}
      </Grid>
    </Container>
  );
};
