import WidgetsIcon from "@mui/icons-material/Widgets";
import HiveIcon from "@mui/icons-material/Hive";
import BottleIcon from "../assets/bottle.svg?react";
import HerbsIcon from "../assets/herbs.svg?react";
import TeaIcon from "../assets/teapot.svg?react";
import { useTheme } from "@emotion/react";

export const CategoryListIcon = ({ categorySlug }) => {
  const theme = useTheme();

  const iconStyle = {
    height: "24px",
    width: "24px",
    fill: theme.palette.primary.main,
    color: theme.palette.primary.main,
  };

  const categoryIcons = {
    default: <WidgetsIcon sx={iconStyle} />,
    med: <HiveIcon sx={iconStyle} />,
    nastoyku: <BottleIcon style={iconStyle} />,
    travu: <HerbsIcon style={iconStyle} />,
    chaj: <TeaIcon style={iconStyle} />,
  };

  return categoryIcons[categorySlug] || categoryIcons.default;
};
