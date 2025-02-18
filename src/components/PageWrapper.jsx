import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const PageWrapper = ({ children, sx = {} }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        paddingBottom: isMobile ? "56px" : 0,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
