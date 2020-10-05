import React, { useState } from "react";
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
  CircularProgress,
} from "@material-ui/core";
import ErrorSnack from "./ErrorSnack";

import { useDispatch, useSelector } from "react-redux";
import { newProducActions } from "../actions/ProductActions";
import { showAlertAction, closeAlertAction } from "../actions/AlertActions";

const NewProduct = ({ history }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"), {
    defaultMatches: true,
  });

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();

  const errorMessage = useSelector((state) => state.products.error);
  const spinner = useSelector((state) => state.products.loading);
  const alertShow = useSelector((state) => state.alert.alert);

  const addProduct = (product) => dispatch(newProducActions(product));

  const submitNewProduct = (e) => {
    e.preventDefault();

    if (name.trim() === "" || price <= 0) {
      let alert = {
        message: "all the input are required",
        typeAlert: "error",
      };
      dispatch(showAlertAction(alert));
      return;
    }
    addProduct({ name, price });
    dispatch(closeAlertAction());
    setName("");
    setPrice("");
    history.push("/");
  };

  return (
    <Grid container justify="center">
      {errorMessage ? (
        <ErrorSnack
          message="Error: Product could not be saved"
          typeAlert="error"
        />
      ) : null}
      {alertShow ? (
        <ErrorSnack
          message={alertShow.message}
          typeAlert={alertShow.typeAlert}
        />
      ) : null}
      {spinner ? <CircularProgress /> : null}
      <Grid item>
        <Box mt={5}>
          <Card>
            <form onSubmit={submitNewProduct} className="test">
              <CardContent>
                <Typography variant="h5" align="center">
                  Add Product
                </Typography>
                <Box mt={3} mx={isMobile ? 2 : 10}>
                  <Box mb={2}>
                    <TextField
                      id="productName"
                      name="productName"
                      label="Product Name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      fullWidth
                      autoFocus
                    />
                  </Box>
                  <Box mb={2}>
                    <TextField
                      type="number"
                      id="productPrice"
                      name="productPrice"
                      label="Product Price"
                      value={price}
                      onChange={(e) => {
                        setPrice(Number(e.target.value));
                      }}
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
                  Add product
                </Button>
              </Box>
            </form>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NewProduct;
