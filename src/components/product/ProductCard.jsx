import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { AddToCartButton, FavoritesButton } from "@/components/ui";

export const ProductCard = ({ product }) => {
  return (
    <Card
      sx={{
        maxWidth: { xs: 320, md: 260 },
        width: { xs: 320, md: 260 },
        height: { xs: 480, md: 420 },
        my: 2,
        position: "relative",
        border: "none",
        borderRadius: "30px 0 30px 0",
        backgroundColor: "transparent",
        backgroundImage: "none",
        display: "flex",
        flexDirection: "column",
        overflow: "visible",
      }}
    >
      {/*********** Product Image ***********/}
      <CardMedia
        component="img"
        alt={product.name}
        image={product.images[0].src}
        sx={{
          height: { xs: 320, md: 260 },
          borderRadius: "30px 0 0 0",
          objectFit: "contain",
        }}
      />
      {/* ========= Favorite Button Wrapper =========  */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 99,
          mr: 1,
          mt: 1,
        }}
      >
        <FavoritesButton product={product} />
      </Box>
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          mb: 0,
          pb: 0,
        }}
      >
        {/* Title*/}
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
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            mt: 1,
          }}
        >
          {/* ============ Size ============ */}
          <Typography gutterBottom variant="body1" sx={{ mb: 0 }}>
            {product.weight}
            <span style={{ fontSize: "12px" }}>г</span>
          </Typography>
          {/* ============ Price ============ */}
          <Typography
            variant="h6"
            sx={{
              ml: "auto",
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
        </Box>
      </CardContent>
      {/* ============================================
          ========== Action Button Wrapper ==========
          ==========================================*/}
      <CardActions sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <AddToCartButton product={product} />
        </Box>
      </CardActions>
      {/* ========== Link to product page overlay ========== */}
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
