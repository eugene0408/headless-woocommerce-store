import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

export const CategoryItem = ({ image, name }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" m={2}>
      <Avatar src={image} alt={name} sx={{ width: 100, height: 100 }} />
      <Typography variant="subtitle1" mt={1}>
        {name}
      </Typography>
    </Box>
  );
};
