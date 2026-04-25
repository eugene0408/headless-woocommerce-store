import { useSelector, useDispatch } from "react-redux";
import { selectFavorites } from "@/redux/selectors/favoritesSelectors";
import { toggleFavorites } from "@/redux/slices/favoritesSllice";
// MUI
import { useTheme } from "@emotion/react";
import { IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

export const FavoritesButton = ({ product, sx }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const favoritesList = useSelector(selectFavorites);
  const isFavorite = favoritesList.includes(product.id);
  return (
    <IconButton
      onClick={() => dispatch(toggleFavorites(Number(product.id)))}
      sx={{
        borderRadius: "50%",
        bgcolor: theme.palette.primary.main,
        "&:hover": {
          bgcolor: theme.palette.primary.main,
        },
        color: theme.palette.background.topline,
        ...sx,
      }}
    >
      {isFavorite ? <Favorite /> : <FavoriteBorder />}
    </IconButton>
  );
};
