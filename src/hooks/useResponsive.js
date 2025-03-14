import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const useResponsive = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLaptop = useMediaQuery(theme.breakpoints.up("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isMobileDevice = isMobile || isTablet;

  return { isMobile, isTablet, isLaptop, isDesktop, isMobileDevice };
};
