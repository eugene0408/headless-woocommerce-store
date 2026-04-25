import { useSelector, useDispatch } from "react-redux";
import { selectCart } from "@/redux/selectors/cartSelectors";
import { addToCart } from "@/redux/slices/cartSlice";
import { openCart } from "@/redux/slices/cartStatusSlice";

import { Button } from "@mui/material";
import { ShoppingCartOutlined, TaskAltOutlined } from "@mui/icons-material";

export const AddToCartButton = ({ product, sx }) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  return (
    <>
      {!cart[Number(product.id)] && (
        <Button
          value={Number(product.id)}
          onClick={() =>
            dispatch(
              addToCart({
                id: Number(product.id),
                name: product.name,
                price: product.price,
                weight: product.weight,
                image: product.images[0].src,
              }),
            )
          }
          variant="contained"
          sx={{
            // height: 50,
            // width: 150,
            px: 3.5,
            py: 1.5,
            borderRadius: "30px",
            ...sx,
          }}
          startIcon={<ShoppingCartOutlined />}
        >
          Купити
        </Button>
      )}
      {/*******************************
            Open Cart if product is in cart already 
          ******************************/}
      {cart[Number(product.id)] && (
        <Button
          value={Number(product.id)}
          onClick={() => dispatch(openCart())}
          variant="contained"
          sx={{
            px: 2.5,
            py: 1.5,
            borderRadius: "30px",
            ...sx,
          }}
          startIcon={<TaskAltOutlined />}
        >
          Відкрити кошик
        </Button>
      )}
    </>
  );
};
