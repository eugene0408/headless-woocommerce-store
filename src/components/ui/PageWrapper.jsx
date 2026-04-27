import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const PageWrapper = ({ children, sx = {} }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        pb: isMobile ? "56px" : 0,
        pt: { xs: 8, md: 15 },
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
