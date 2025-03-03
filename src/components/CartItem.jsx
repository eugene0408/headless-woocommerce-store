import React from "react";
import { useDispatch } from "react-redux";
import { addAmount, reduceAmount, removeItem } from "../redux/slices/cartSlice";
import { Card, Box, Typography, CardMedia, IconButton } from "@mui/material";
// MUI Icons
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

export const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Card
      sx={{
        width: "100%",
        border: "none",
        boxShadow: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: 110,
          position: "relative",
        }}
      >
        <CardMedia
          component={"img"}
          image={product.image}
          alt={product.name}
          sx={{
            width: "30%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 1,
            width: "70%",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: "85%",
            }}
          >
            {product.name}
          </Typography>
          {/* ------------- Size ---------- */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              opacity: 0.7,
            }}
          >
            <Typography>
              {product.weight}
              <span style={{ fontSize: "12px" }}>г</span>
            </Typography>
          </Box>
          {/* --------------------------------- */}

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 1,
            }}
          >
            {/* ------------- Quantity counter ---------- */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton
                onClick={() => dispatch(reduceAmount({ id: product.id }))}
                size="small"
              >
                <RemoveIcon sx={{ height: ".8em" }} />
              </IconButton>
              <Typography>{product.quantity}</Typography>
              <IconButton
                onClick={() => dispatch(addAmount({ id: product.id }))}
                size="small"
              >
                <AddIcon sx={{ height: ".8em" }} />
              </IconButton>
            </Box>
            {/* ------------- Total Price ---------- */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  "&::after": {
                    content: '"₴"',
                    fontSize: "0.8em",
                    ml: 0.2,
                  },
                }}
              >
                {product.quantity * product.price}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* ------------- Delete Item ---------- */}
        <IconButton
          onClick={() => dispatch(removeItem({ id: product.id }))}
          sx={{
            position: "absolute",
            top: 2,
            right: 7,
            color: "error.main",
            size: "small",
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Card>
  );
};
