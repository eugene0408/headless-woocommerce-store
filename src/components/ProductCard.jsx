import React from "react";
import { Link } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { selectFavorites } from "../redux/selectors/favoritesSelectors";
import { toggleFavorites } from "../redux/slices/favoritesSllice";
// MUI
import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
// Icons
import { Favorite, FavoriteBorder, ShoppingCart } from "@mui/icons-material";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const favoritesList = useSelector(selectFavorites);
  const isFavorite = favoritesList.includes(product.id);
  const theme = useTheme();

  const truncateHtmlText = (html, maxLength = 100) => {
    if (!html) return "";
    // remove html tags
    const textOnly = html.replace(/<[^>]*>?/gm, "").trim();
    // return if text is shorter than maxLength
    if (textOnly.length <= maxLength) return textOnly;
    // truncate to the nearest word
    const truncated = textOnly.substring(0, maxLength).trim();
    return truncated.substring(0, truncated.lastIndexOf(" ")) + "...";
  };

  return (
    <Card
      sx={{
        maxWidth: 340,
        height: 420,
        // maxHeight: 460,
        my: 2,
        position: "relative",
        border: "none",
        boxShadow: "none",
        backgroundColor: "transparent",
        backgroundImage: "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        alt={product.name}
        image={product.images[0].src}
        sx={{
          height: 240,
          borderRadius: 3,
        }}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          mb: 0,
          pb: 0,
        }}
      >
        {/* Title & Weight*/}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ textTransform: "uppercase", lineHeight: 1.1, height: "2em" }}
          >
            {product.name}
          </Typography>
          <Typography gutterBottom variant="body1">
            {product.weight}
            <span style={{ fontSize: "12px" }}>г</span>
          </Typography>
        </Box>
        {/* Description */}
        <Typography
          variant="body2"
          component="div"
          sx={{
            height: "3em",
            fontSize: 14,
            lineHeight: 1.1,
          }}
        >
          {/* trimmed description */}
          {truncateHtmlText(product.description, 100)}
        </Typography>
      </CardContent>
      {/* ------------------ Price & Buttons --------------------*/}
      <CardActions>
        <Box
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          {/* ============ Price ============ */}
          <Typography
            variant="h6"
            sx={{
              mr: "auto",
              "&::after": {
                content: '"₴"',
                fontSize: "18px",
                ml: 0.3,
                opacity: 0.6,
                fontWeight: 500,
              },
            }}
          >
            {product.price}
          </Typography>
          {/* ========= Favorite Button =========  */}
          <IconButton
            onClick={() => dispatch(toggleFavorites(product.id))}
            sx={{
              mr: 1,
              boxShadow: 2,
              borderRadius: 1,
              backgroundColor: theme.palette.background.paper,
            }}
          >
            {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
          </IconButton>
          {/*============= Add to cart ============= */}
          <Button
            value={product.id}
            onClick={(e) =>
              dispatch(
                addToCart({
                  id: [e.currentTarget.value],
                  name: product.name,
                  price: product.price,
                  weight: product.weight,
                  image: product.images[0].src,
                })
              )
            }
            variant="contained"
            sx={{
              p: ".5em .8em .5em .5em",
              width: 120,
              color: theme.palette.text.primary,
            }}
            startIcon={<ShoppingCart />}
          >
            Купити
          </Button>
        </Box>
      </CardActions>

      <Link to={`/products/${product.id}`}>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "88%",
          }}
        />
      </Link>
    </Card>
  );
};
