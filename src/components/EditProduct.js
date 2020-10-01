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
  useTheme
} from "@material-ui/core";

const EditProduct = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"), {
    defaultMatches: true,
    });
  return (
    <Grid container justify="center">
      <Grid item md="6">
        <Box mt={5}>
          <Card>
            <CardContent>
              <Typography variant="h5" align="center">
                Edit Product
              </Typography>
              <Box mt={3} mx={isMobile ? 2 : 10}>
                <form>
                  <Box mb={2}>
                    <TextField
                      id="productName"
                      name="productName"
                      label="Product Name"
                      fullWidth
                    />
                  </Box>
                  <Box mb={2}>
                    <TextField
                      type="number"
                      id="productPrice"
                      name="productPrice"
                      label="Product Price"
                      fullWidth
                    />
                  </Box>
                </form>
              </Box>
            </CardContent>
            <Box mx={isMobile ? 2 : 10} my={3} display="flex" justifyContent="flex-end">
              <Button
                size="large"
                variant="contained"
                color="primary"
                fullWidth
              >
                Save change
              </Button>
            </Box>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default EditProduct;
