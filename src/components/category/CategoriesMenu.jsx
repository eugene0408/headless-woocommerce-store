import { useSelector } from "react-redux";
import {
  selectCategories,
  selectCategoriesLoading,
} from "@/redux/selectors/categoriesSelectors";

import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid2";

import { SectionWrapper } from "../ui/SectionWrapper.jsx";
import { SectionHeader } from "../ui/SectionHeader.jsx";
import { LoadingCircular } from "../ui/LoadingCircular";
import { CategoryItem } from "./CategoryItem";

export const CategoriesMenu = () => {
  const categories = useSelector(selectCategories);
  const categoriesLoading = useSelector(selectCategoriesLoading);

  return (
    <SectionWrapper justify="center" align="center">
      <SectionHeader title="Категорії" />
      {categoriesLoading && <LoadingCircular />}
      {categories.length > 0 &&
        categories.map((category) => (
          <Grid key={category.id} size={{ xs: 2 }} item>
            <Link to={`/category/${category.slug}`}>
              <CategoryItem name={category.name} image={category.image.src} />
            </Link>
          </Grid>
        ))}
    </SectionWrapper>
  );
};
