import { useSelector } from "react-redux";
// Selectors
import { selectAllProducts } from "@/redux/selectors/productsSelectors";
// Components
import { ProductsList } from "@/components/product";
import { SectionHeader, PageWrapper } from "@/components/ui";
import { CategoriesMenu } from "@/components/category";

export const IndexPage = () => {
  const products = useSelector(selectAllProducts);
  return (
    <PageWrapper>
      <CategoriesMenu />
      <SectionHeader title="Каталог" />
      <ProductsList products={products} />
    </PageWrapper>
  );
};
