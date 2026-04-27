import { Typography } from "@mui/material";

export const SectionHeader = ({ title, mt = "3em" }) => {
  return (
    <Typography
      variant="h4"
      component="h3"
      align="center"
      sx={{
        mt: mt,
        mb: 2,
        opacity: 0.3,
        textTransform: "uppercase",
        fontWeight: 900,
        textAlign: "center",
        width: "100%",
      }}
    >
      {title}
    </Typography>
  );
};
