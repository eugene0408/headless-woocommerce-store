import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/slices/productsSlice";
import { useNavigate } from "react-router-dom";
import { selectFilteredProducts } from "../redux/selectors/productsSelectors";
import { useResponsive } from "../hooks/useResponsive";

import {
  Box,
  InputBase,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = ({ mobileSearchOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isMobileDevice } = useResponsive();
  const searchQuery = useSelector((state) => state.products.searchQuery);
  const filteredProducts = useSelector(selectFilteredProducts);
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef(null);

  const handleChange = (event) => {
    const value = event.currentTarget.value;
    dispatch(setSearchQuery(value));
    setShowResults(true);
  };

  const handleSelect = (productId) => {
    navigate(`/products/${productId}`);
    setShowResults(false);
    mobileSearchOpen && mobileSearchOpen(false);
    dispatch(setSearchQuery(""));
  };

  // Focus input on mobile
  useEffect(() => {
    if (mobileSearchOpen) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
    }
  }, [mobileSearchOpen]);

  const handleBlur = () => {
    if (isMobileDevice) {
      setTimeout(() => mobileSearchOpen(false), 200);
    }
    setTimeout(() => setShowResults(false), 200);
    dispatch(setSearchQuery(""));
  };

  return (
    <Box
      sx={{
        position: isMobileDevice ? "absolute" : "relative",
        top: isMobileDevice ? 64 : "unset",
        left: isMobileDevice ? 0 : "unset",
        right: isMobileDevice ? 0 : "unset",
        width: isMobileDevice ? "100%" : "unset",
        display: "flex",
        borderRadius: 2,
        background: isMobileDevice
          ? (theme) => theme.palette.background.paper
          : "rgba(255,255,255, .15)",
        px: 2,
        py: 0.5,
        "@media (hover: hover)": {
          "&:hover": {
            background: "rgba(255,255,255, .25)",
            transition: "background .2s",
          },
        },
        boxShadow: isMobileDevice ? 1 : "none",
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
        <SearchIcon sx={{ height: "1em" }} color="primary" />
      </Box>
      <InputBase
        placeholder="Пошук"
        ref={inputRef}
        autoFocus
        value={searchQuery}
        onChange={(e) => handleChange(e)}
        onFocus={() => setShowResults(searchQuery.length > 0)}
        onBlur={() => handleBlur()}
        sx={{
          pl: "1.7em",
        }}
      />
      {showResults && filteredProducts && filteredProducts.length > 0 && (
        <Paper
          sx={{
            position: "absolute",
            top: isMobileDevice ? "2.8em" : "3.5em",
            left: 0,
            right: 0,
            width: isMobileDevice ? "100%" : "250%",
            borderRadius: 2,
          }}
        >
          <List>
            {filteredProducts.slice(0, 5).map((product) => (
              <ListItem
                key={product.id}
                button
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleSelect(product.id);
                }}
              >
                <ListItemText primary={product.name} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};
