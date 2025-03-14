import { useEffect } from "react";
import { useParams } from "react-router-dom";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { selectAllProducts } from "../redux/selectors/productsSelectors.js";
import { fetchProductsTrunk } from "../redux/slices/productsSlice.js";

import { useResponsive } from "../hooks/useResponsive.js";

// Components
import {
  ProductDescription,
  CategoriesMenu,
  SectionHeader,
  ProductsList,
  PageWrapper,
} from "../components";

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { isMobile } = useResponsive();
  const { productId } = useParams();
  const numericProductId = Number(productId);
  const products = useSelector(selectAllProducts);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProductsTrunk());
    }
  }, [dispatch, products]);

  const currentProduct = products.find(
    (product) => product.id === numericProductId
  );

  //return an array of same category random products
  const getRelatedProducts = (allProducts, currentProduct, quantity) => {
    if (!allProducts || !currentProduct) return [];

    const categoryId = currentProduct.categories?.[0]?.id;
    if (!categoryId) return [];

    const relatedProducts = allProducts.filter(
      (product) =>
        product.id !== numericProductId &&
        product.categories.some((category) => category.id === categoryId)
    );

    return relatedProducts.sort(() => 0.5 - Math.random()).slice(0, quantity);
  };

  const relatedQuantity = isMobile ? 4 : 6;

  const relatedProducts = getRelatedProducts(
    products,
    currentProduct,
    relatedQuantity
  );

  return (
    <PageWrapper>
      <ProductDescription numericProductId={numericProductId} />
      <SectionHeader title="Схожі товари" />
      <ProductsList products={relatedProducts} />
      <CategoriesMenu />
    </PageWrapper>
  );
};
