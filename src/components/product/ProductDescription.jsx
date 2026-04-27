// Redux
import { useSelector } from "react-redux";
import { selectProductById } from "@/redux/selectors/productsSelectors.js";
// MUI
import { Container, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { AddToCartButton, FavoritesButton } from "@/components/ui";

export const ProductDescription = ({ numericProductId }) => {
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
          {/*-------------- 
            Image Wrapper
            ---------------*/}
          <Grid size={{ xs: 4, sm: 8, md: 6 }}>
            {/*------------ Image ------------*/}
            <Box
              sx={{
                mt: { xs: 1, md: 4 },
                p: { xs: 0, md: 1 },
                width: "100%",
                height: "450px",
              }}
            >
              <img
                src={product.images[0].src}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "75px 0 75px 0",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
          {/*------------------
             Description Wrapper 
             ------------------*/}
          <Grid size={{ xs: 4, sm: 8, md: 6 }}>
            <Box
              sx={{
                height: "450px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexGrow: 1,
                p: 1,
                ml: { xs: 0, md: 4 },
                mt: { xs: 0, md: 3 },
              }}
            >
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
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                {/*================  Action Button  ================*/}
                <AddToCartButton product={product} sx={{ width: 250 }} />

                {/* ========= Favorite Button =========  */}
                <FavoritesButton product={product} sx={{ p: 1.5, ml: 2 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};
