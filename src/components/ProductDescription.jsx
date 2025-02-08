import { useEffect } from "react";
import { useParams } from "react-router-dom";
// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectProductById,
  selectAllProducts,
} from "../redux/selectors/productsSelectors.js";
import { selectCart } from "../redux/selectors/cartSelectors.js";
import { fetchProductsTrunk } from "../redux/slices/productsSlice.js";
import { addToCart } from "../redux/slices/cartSlice.js";
import { openCart } from "../redux/slices/cartStatusSlice.js";
import { selectFavorites } from "../redux/selectors/favoritesSelectors.js";
import { toggleFavorites } from "../redux/slices/favoritesSllice.js";
// MUI
import { Container, Typography, Box, Button, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DoneIcon from "@mui/icons-material/Done";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

export const ProductDescription = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const numericProductId = Number(productId);
  const products = useSelector(selectAllProducts);
  const cart = useSelector(selectCart);
  const favoritesList = useSelector(selectFavorites);
  const isFavorite = favoritesList.includes(numericProductId);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProductsTrunk());
    }
  }, [dispatch, products]);

  const product = useSelector(selectProductById(numericProductId));

  return (
    <Container>
      {product && (
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            pt: 8,
          }}
        >
          <Grid size={{ xs: 4, sm: 8, md: 8 }}>
            {/*------------ Image ------------*/}
            <Box
              sx={{
                mt: 5,
                width: "100%",
                height: "320px",
              }}
            >
              <img
                src={product.images[0].src}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
            </Box>

            <Typography variant="h4" sx={{ mt: 2 }}>
              {product.name}
            </Typography>

            <Typography
              variant="p"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
            <Box
              sx={{
                mt: 5,
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* ========= Favorite Button =========  */}
              <IconButton
                onClick={() => dispatch(toggleFavorites(numericProductId))}
                sx={{
                  mr: 1,
                  boxShadow: 2,
                  borderRadius: 1,
                }}
              >
                {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
              </IconButton>
              {/*================Cart buttons================*/}
              {!cart[productId] && (
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<ShoppingCartIcon />}
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        weight: product.weight,
                        image: product.images[0].src,
                      })
                    )
                  }
                  sx={{
                    width: "100%",
                  }}
                >
                  Додати у кошик
                </Button>
              )}
              {cart[productId] && (
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<DoneIcon />}
                  onClick={() => dispatch(openCart())}
                  sx={{
                    width: "100%",
                  }}
                >
                  Відкрити кошик
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};
