import React from "react";
import { Link } from "react-router-dom";
// redux
import { useSelector, useDispatch } from "react-redux";
import { selectCart } from "@/redux/selectors/cartSelectors";
import { selectCartStatus } from "@/redux/selectors/cartStatusSelectors";
import { closeCart } from "@/redux/slices/cartStatusSlice";

// MUI
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { CartItem } from "./CartItem";

const buttonStyles = {
  borderRadius: 10,
  px: 3.5,
  py: 1.5,
};

export const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const cartList = Object.values(cart);
  const isCartOpen = useSelector(selectCartStatus);

  const totalSum = () => {
    let total = 0;
    cartList.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <Drawer
      anchor="right"
      open={isCartOpen}
      onClose={() => dispatch(closeCart())}
    >
      <List
        sx={{
          width: {
            xs: 360,
            sm: 400,
            md: 500,
          },
          height: "100%",
        }}
      >
        <ListItem>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Кошик" />
        </ListItem>
        {cartList.length > 0 && (
          <>
            {/* -------------- Products in cart -------------- */}
            {cartList.map((product) => (
              <ListItem key={`cart${product.id}`}>
                <CartItem product={product} />
              </ListItem>
            ))}
            <Divider />
            {/* ----------------- Total sum ------------------ */}
            <ListItem>
              <Typography
                variant="h4"
                sx={{
                  width: "100%",
                  textAlign: "right",
                  mt: 1,
                  "&::after": {
                    content: '"₴"',
                    fontSize: "0.6em",
                    ml: 0.2,
                  },
                }}
              >
                {totalSum()}
              </Typography>
            </ListItem>
            {/*  ------------------------- 
                Action Buttons 
              ----------------------------  */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: 3,
                width: "100%",
              }}
            >
              {/* Go to delivery page */}
              <Link
                to={"/delivery"}
                style={{
                  width: "80%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => dispatch(closeCart())}
                  endIcon={<ChevronRightIcon />}
                  sx={{ ...buttonStyles, width: "100%" }}
                >
                  Оформити замовлення
                </Button>
              </Link>
              {/* Return to page */}
              <Button
                variant="contained"
                size="large"
                color="secondary"
                onClick={() => dispatch(closeCart())}
                startIcon={<ChevronLeftIcon />}
                sx={{
                  ...buttonStyles,
                  width: "80%",
                  mt: 2,
                }}
              >
                Продовжити покупки
              </Button>
            </Box>
          </>
        )}
        {/* ------------------------------------  
                    Empty cart 
            --------------------------------------*/}
        {cartList < 1 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100%",
              position: "relative",
            }}
          >
            <Typography variant="h6">Кошик порожній</Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => dispatch(closeCart())}
              startIcon={<ChevronLeftIcon />}
              sx={{
                ...buttonStyles,
                mt: 2,
                width: "80%",
              }}
            >
              Назад
            </Button>
          </Box>
        )}
      </List>
    </Drawer>
  );
};
