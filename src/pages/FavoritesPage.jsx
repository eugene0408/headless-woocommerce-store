import { PageHeader, PageWrapper, ProductCard } from "../components";
import Grid from "@mui/material/Grid2";
import { Typography, Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// Redux
import { useSelector } from "react-redux";
import { selectAllProducts } from "../redux/selectors/productsSelectors";
import { selectFavorites } from "../redux/selectors/favoritesSelectors";

import { useNavigate } from "react-router-dom";

export const FavoritesPage = () => {
  const navigate = useNavigate();
  const products = useSelector(selectAllProducts);
  const favoritesList = useSelector(selectFavorites);
  const favoriteProducts = products.filter((product) =>
    favoritesList.includes(product.id)
  );

  return (
    <PageWrapper>
      <PageHeader title="Обрані товари" />

      {favoritesList.length > 0 &&
        favoriteProducts.map((product) => (
          <Grid item key={`fav${product.id}`} size={{ xs: 4 }}>
            <ProductCard product={product} />
          </Grid>
        ))}
      {favoritesList.length === 0 && (
        <Grid
          item
          size={{ xs: 4 }}
          sx={{
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" align="center">
            Ви не обрали жодного товару
          </Typography>

          <Button
            variant="contained"
            startIcon={<ChevronLeftIcon />}
            onClick={() => navigate("/")}
            sx={{ mt: 2 }}
          >
            На головну
          </Button>
        </Grid>
      )}
    </PageWrapper>
  );
};
