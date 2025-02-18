import Grid from "@mui/material/Grid2";
import { Typography, Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// Redux
import { useSelector } from "react-redux";
import { selectAllProducts } from "../redux/selectors/productsSelectors";
import { selectFavorites } from "../redux/selectors/favoritesSelectors";

import { useNavigate } from "react-router-dom";

import {
  SectionHeader,
  SectionWrapper,
  ProductCard,
  ProductsList,
  PageWrapper,
} from "../components";

export const FavoritesPage = () => {
  const navigate = useNavigate();
  const products = useSelector(selectAllProducts);
  const favoritesList = useSelector(selectFavorites);
  const favoriteProducts = products.filter((product) =>
    favoritesList.includes(product.id)
  );

  return (
    <PageWrapper>
      <SectionHeader title="Обрані товари" />
      <ProductsList products={favoriteProducts} />

      {/* ------- Empty -------  */}
      {favoritesList.length === 0 && (
        <SectionWrapper>
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
              sx={{ mt: 4 }}
            >
              На головну
            </Button>
          </Grid>
        </SectionWrapper>
      )}
    </PageWrapper>
  );
};
