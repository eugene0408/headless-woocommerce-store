import { useSelector } from "react-redux";
import {
  selectCategories,
  selectCategoriesLoading,
} from "../redux/selectors/categoriesSelectors";

import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid2";

import { SectionWrapper } from "./SectionWrapper.jsx";
import { SectionHeader } from "./SectionHeader.jsx";
import { CategoryItem } from "./CategoryItem";
import { LoadingCircular } from "./LoadingCircular";

export const CategoriesMenu = () => {
  const categories = useSelector(selectCategories);
  const categoriesLoading = useSelector(selectCategoriesLoading);

  return (
    <SectionWrapper>
      <SectionHeader title="Категорії" />
      {categoriesLoading && <LoadingCircular />}
      {categories.length > 0 &&
        categories.map((category) => (
          <Grid key={category.id} size={{ xs: 2 }}>
            <Link to={`/category/${category.slug}`}>
              <CategoryItem name={category.name} image={category.image.src} />
            </Link>
          </Grid>
        ))}
    </SectionWrapper>
  );
};
