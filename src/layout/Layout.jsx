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
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Badge,
  Button,
  InputBase,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
// MUI Icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import WidgetsIcon from "@mui/icons-material/Widgets";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
// Components
import Logo from "../assets/logo.svg?react";
import { ThemeSwitch, Cart, CategoriesSideMenu, Footer } from "../components";

export const Layout = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const location = useLocation();
  const cartItemsCount = useSelector(selectCartItemsCount);
  const favoritesItemsCount = useSelector(selectFavoritesItemsCount);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const closeCategoriesList = () => {
    setIsCategoriesOpen(false);
  };

  return (
    <>
      <Container>
        {/* ------------- Topline ------------------*/}
        <AppBar>
          <Container>
            <Toolbar
              position="static"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              {/* -----------Logo----------- */}
              <IconButton
                color="inherit"
                onClick={() => navigate("/")}
                sx={{
                  p: 0,
                  justifyContent: "flex-start",
                  borderRadius: 0,
                }}
              >
                <Logo
                  style={{ height: "32px", fill: theme.palette.text.primary }}
                />
              </IconButton>
              {!isMobile && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      borderRadius: 2,
                      background: "rgba(255,255,255, .15)",
                      px: 2,
                      py: 0.5,
                      "&:hover": {
                        background: "rgba(255,255,255, .25)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        pointerEvents: "none",
                      }}
                    >
                      <SearchIcon sx={{ height: "1em" }} />
                    </Box>
                    <InputBase
                      placeholder="Пошук"
                      sx={{
                        pl: "1.7em",
                      }}
                    />
                  </Box>
                  <Button
                    startIcon={
                      <HomeIcon
                        sx={{ opacity: location.pathname === "/" ? 1 : 0.5 }}
                      />
                    }
                    onClick={() => navigate("/")}
                    size="large"
                    variant="text"
                    color="inherit"
                  >
                    Головна
                  </Button>
                  <Button
                    startIcon={
                      <WidgetsIcon
                        sx={{
                          opacity: location.pathname.startsWith("/category/")
                            ? 1
                            : 0.5,
                        }}
                      />
                    }
                    onClick={() => setIsCategoriesOpen(true)}
                    size="large"
                    variant="text"
                    color="inherit"
                  >
                    Категорії
                  </Button>
                  <Button
                    startIcon={
                      <FavoriteIcon
                        sx={{
                          opacity: location.pathname === "/favorites" ? 1 : 0.5,
                        }}
                      />
                    }
                    onClick={() => navigate("/favorites")}
                    size="large"
                    variant="text"
                    color="inherit"
                  >
                    Обране
                  </Button>
                </Box>
              )}
              <ThemeSwitch />
            </Toolbar>
          </Container>
        </AppBar>
        {/* -----------Desktop floating cart----------- */}
        {!isMobile && (
          <Box
            sx={{
              position: "fixed",
              bottom: 15,
              right: 15,
              height: 56,
              width: 56,
              borderRadius: "50%",
              bgcolor: "secondary.main",
              zIndex: 999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Badge badgeContent={cartItemsCount} color="error">
              <IconButton
                color="inherit"
                onClick={() => dispatch(openCart())}
                sx={{
                  position: "relative",
                  height: "100%",
                  width: "100%",
                }}
              >
                <ShoppingCartIcon />
              </IconButton>
            </Badge>
          </Box>
        )}
        {/* ------------Categories List ------------ */}
        <CategoriesSideMenu
          isOpen={isCategoriesOpen}
          close={closeCategoriesList}
        />
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
                icon={
                  <WidgetsIcon
                    color={
                      location.pathname.startsWith("/category/")
                        ? "primary"
                        : "inherit"
                    }
                  />
                }
                sx={{ flex: 1 }}
                onClick={() => setIsCategoriesOpen(true)}
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
                        location.pathname === "/favorites"
                          ? "primary"
                          : "inherit"
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
        {/* ------------Footer---------------- */}
      </Container>
      <Footer sx={{ width: "100vw" }} />
    </>
  );
};
