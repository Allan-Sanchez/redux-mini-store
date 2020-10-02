import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  Card,
  CardContent,
  Box,
  Typography,
  TextField,
  Button,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import { updateProductAction } from "../actions/ProductActions";

const EditProduct = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"), {
    defaultMatches: true,
  });

  const dispatch = useDispatch();
  const currentProduct = useSelector((state) => state.products.productEdit);
  if (!currentProduct) return null;
  const { name, price } = currentProduct;

  const handleUpdateProduct = (e) => {
    e.preventDefault();

  };
  return (
    <Grid container justify="center">
      <Grid item>
        <Box mt={5}>
          <Card>
            <form onSubmit={handleUpdateProduct}>
              <CardContent>
                <Typography variant="h5" align="center">
                  Edit Product
                </Typography>
                <Box mt={3} mx={isMobile ? 2 : 10}>
                  <Box mb={2}>
                    <TextField
                      id="productName"
                      name="productName"
                      label="Product Name"
                      value={name}
                      fullWidth
                    />
                  </Box>
                  <Box mb={2}>
                    <TextField
                      type="number"
                      id="productPrice"
                      name="productPrice"
                      label="Product Price"
                      value={price}
                      fullWidth
                    />
                  </Box>
                </Box>
              </CardContent>
              <Box
                mx={isMobile ? 2 : 10}
                my={3}
                display="flex"
                justifyContent="flex-end"
              >
                <Button
                  type="submit"
                  size="large"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Save change
                </Button>
              </Box>
            </form>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default EditProduct;
