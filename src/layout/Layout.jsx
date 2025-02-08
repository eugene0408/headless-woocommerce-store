import React, { useState } from "react";
// Router
import { Outlet, useNavigate, useLocation } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../redux/slices/cartStatusSlice";
import { selectCartItemsCount } from "../redux/selectors/cartSelectors";
import { selectFavoritesItemsCount } from "../redux/selectors/favoritesSelectors";
// MUI
import {
  Container,
  IconButton,
  useMediaQuery,
  AppBar,
  Toolbar,
  Typography,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Badge,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
// MUI Icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import WidgetsIcon from "@mui/icons-material/Widgets";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
// Components
import { ThemeSwitch, Cart } from "../components";

export const Layout = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const location = useLocation();
  const cartItemsCount = useSelector(selectCartItemsCount);
  const favoritesItemsCount = useSelector(selectFavoritesItemsCount);

  return (
    <Container>
      {/* ------------- Topline ------------------*/}
      <AppBar>
        <Container>
          <Toolbar position="static">
            <Typography
              variant="body1"
              sx={{
                flexGrow: 1,
                textAlign: "left",
              }}
            >
              TEST Shop
            </Typography>
            {/* -----------Desctop navigation----------- */}
            {!isMobile && (
              <IconButton color="inherit" onClick={() => dispatch(openCart())}>
                <ShoppingCartIcon />
              </IconButton>
            )}
            <ThemeSwitch />
          </Toolbar>
        </Container>
      </AppBar>
      {/* ------------Cart Component---------------- */}
      <Cart />
      {/* -------------Mobile Navigation------------- */}
      {isMobile && (
        <Paper
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 999,
          }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingX: 1,
            }}
          >
            {/* =======Home Icon Button======= */}
            <BottomNavigationAction
              label="Головна"
              icon={
                <HomeIcon
                  color={location.pathname === "/" ? "primary" : "inherit"}
                />
              }
              sx={{ flex: 1 }}
              onClick={() => navigate("/")}
            />
            {/* =======Categories Icon Button======= */}
            <BottomNavigationAction
              label="Категорії"
              icon={<WidgetsIcon />}
              sx={{ flex: 1 }}
              onClick={() => navigate("/")}
            />
            {/* ---------Cart Icon Wrapper--------- */}
            <Box sx={{ flex: 1, position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  top: -12,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 56,
                  height: 56,
                  bgcolor: "primary.main",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: 3,
                }}
              >
                {/* =======Cart Icon Button======= */}
                <Badge badgeContent={cartItemsCount} color="error">
                  <IconButton
                    color="inherit"
                    onClick={() => dispatch(openCart())}
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Badge>
              </Box>
            </Box>
            {/* =======Favorites Icon Button======= */}

            <BottomNavigationAction
              label="Обране"
              icon={
                <Badge
                  badgeContent={favoritesItemsCount}
                  color="error"
                  sx={{
                    "& .MuiBadge-badge": {
                      fontSize: "0.55rem",
                      height: "16px",
                      minWidth: "16px",
                    },
                  }}
                >
                  <FavoriteIcon
                    color={
                      location.pathname === "/favorites" ? "primary" : "inherit"
                    }
                  />
                </Badge>
              }
              sx={{ flex: 1 }}
              onClick={() => navigate("/favorites")}
            />

            {/* =======Search Icon Button======= */}
            <BottomNavigationAction
              label="Пошук"
              icon={<SearchIcon />}
              sx={{ flex: 1 }}
              onClick={() => navigate("/")}
            />
          </BottomNavigation>
        </Paper>
      )}
      <Outlet />
    </Container>
  );
};
