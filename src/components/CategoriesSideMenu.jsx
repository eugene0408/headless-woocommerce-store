import { useSelector } from "react-redux";
import { selectCategories } from "../redux/selectors/categoriesSelectors";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Drawer,
} from "@mui/material";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { CategoryListIcon } from "./CategoryListIcon";

export const CategoriesSideMenu = ({ isOpen, close }) => {
  const categories = useSelector(selectCategories);

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={() => {
        close();
      }}
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <ListItem>
        <WidgetsIcon sx={{ marginRight: 1 }} />
        <ListItemText primary="Категорії" />
      </ListItem>
      <List
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {categories.map((category) => (
          <ListItem
            key={category.id}
            button
            component={Link}
            to={`/category/${category.slug}`}
            onClick={close}
          >
            <ListItemIcon>
              <CategoryListIcon categorySlug={category.slug} />
            </ListItemIcon>
            <ListItemText primary={category.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
