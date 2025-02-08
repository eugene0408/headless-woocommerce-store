import { useEffect } from "react";
import "./App.css";

// Router
import { Routes, Route, useParams } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsTrunk } from "./redux/slices/productsSlice";
import { fetchCategoriesTrunk } from "./redux/slices/categoriesSlice";

import { Layout } from "./layout/Layout";
import { IndexPage, FavoritesPage, CategoryPage } from "./pages";
import { ProductDescription } from "./components/index.js";

function App() {
  const dispatch = useDispatch();
  const { productId } = useParams();

  useEffect(() => {
    dispatch(fetchProductsTrunk());
    dispatch(fetchCategoriesTrunk());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route
            path={"products/:productId"}
            element={<ProductDescription />}
          />
          <Route path="category/:categorySlug" element={<CategoryPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
