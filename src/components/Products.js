import React, { Fragment } from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import { withStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

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
  return (
    <Fragment>
      <Box mb={8} mt={5} display="flex" justifyContent="center">
        <Typography variant="h3" color="primary">
          List Products
        </Typography>
      </Box>

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
              <TableRow>
                <TableCell omponent="th" scope="row">
                  Computer
                </TableCell>
                <TableCell align="right">$ 200.00</TableCell>
                <TableCell align="right">
                  <RouterLink to="/product/edit/1">
                    <IconButton aria-label="edit" color="primary">
                      <EditIcon />
                    </IconButton>
                  </RouterLink>
                  <IconButton aria-label="delete" color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>

              {/* temporally */}
              <TableRow>
                <TableCell omponent="th" scope="row">
                  Computer
                </TableCell>
                <TableCell align="right">$ 200.00</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="edit" color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete" color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Products;
