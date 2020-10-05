import React, { Fragment, useEffect } from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import ErrorSnack from "./ErrorSnack";

import ListProduct from "./ListProduct";

import { withStyles } from "@material-ui/core/styles";

import { useSelector, useDispatch } from "react-redux";
import { getProductAction } from "../actions/ProductActions";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#9575cd",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = () => dispatch(getProductAction());
    getProduct();
    //eslint-disable-next-line
  }, []);

  const products = useSelector((state) => state.products.products);
  const errorMessage = useSelector((state) => state.products.error);
  const spinner = useSelector((state) => state.products.loading);
  // console.log(products);
  return (
    <Fragment>
      <Box mb={8} mt={5} display="flex" justifyContent="center">
        <Typography variant="h3" color="primary">
          List Products
        </Typography>
      </Box>

      {errorMessage ? (
        <ErrorSnack message="Error: Products not found, try again"  typeAlert="error"/>
      ) : null}
      {spinner ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        <Grid container justify="center">
          <Grid item md={8}>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Product Name</StyledTableCell>
                  <StyledTableCell align="right">Price</StyledTableCell>
                  <StyledTableCell align="right">Accion</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.lenght === 0
                  ? "product not fount"
                  : products.map((product) => (
                      <ListProduct
                        product={product}
                        key={product.id}
                      ></ListProduct>
                    ))}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      )}
    </Fragment>
  );
};

export default Products;
