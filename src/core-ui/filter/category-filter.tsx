import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategoryFilter,
  updateCategoryFilter,
} from "../../redux/features/filter-slice";
import { updateProductTitle } from "../../redux/features/product-slice";
import { CategoryType } from "../../types";
import { categories } from "../../utils/filter-data";

function CategoryFilter() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(selectCategoryFilter);

  const selectCategory = (category: CategoryType, title: string) => {
    dispatch(updateCategoryFilter(category.value));
    dispatch(updateProductTitle(title));
  };

  const shouldRenderCategory = (category: CategoryType) => {
    const categoryExclusions = {
      fullAvatar: ["others"],
      human: ["animal", "robot", "otherAvatar", "others"],
      male: ["others", "robot", "animal", "otherAvatar"],
      female: ["robot", "animal", "otherAvatar", "others"],
      unisex: ["animal", "robot", "otherAvatar", "others"],
      animal: ["others"],
      robot: ["others"],
      otherAvatar: ["others"],
    };

    // Add more conditions here...
    const exclusions =
      categoryExclusions[selectedCategory as keyof typeof categoryExclusions] ||
      [];
    return !exclusions.includes(category.value);
  };

  const renderCategories = (
    categories: CategoryType[],
    level: number = 0,
    parentValues: string[] = [],
  ) => (
    <List component='div' disablePadding>
      {categories.map((category) => {
        const newParentValues = [...parentValues, category.label];

        if (!shouldRenderCategory(category)) {
          return null;
        }

        return (
          <React.Fragment key={category.value}>
            <ListItemButton
              selected={selectedCategory === category.value}
              onClick={() =>
                selectCategory(category, newParentValues.join(" > "))
              }
              sx={{ pl: level * 3 + 3 }}>
              <ListItemText primary={category.label} />
            </ListItemButton>

            {category.children && category.children.length > 0 && (
              <Collapse
                in={
                  selectedCategory === category.value ||
                  category.children.some(
                    (child) => child.value === selectedCategory,
                  ) ||
                  category.children.some(
                    (child) =>
                      child?.children &&
                      child.children.some((v) => v.value === selectedCategory),
                  )
                }
                timeout='auto'
                unmountOnExit>
                {renderCategories(
                  category.children,
                  level + 1,
                  newParentValues,
                )}
              </Collapse>
            )}
          </React.Fragment>
        );
      })}
    </List>
  );

  return (
    <div>
      <Typography className='text-sm font-semibold pt-3 capitalize'>
        Category
      </Typography>
      {renderCategories(categories)}
    </div>
  );
}

export default CategoryFilter;
