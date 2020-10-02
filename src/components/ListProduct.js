import React from "react";
import {TableCell, TableRow, IconButton} from "@material-ui/core"

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Link as RouterLink } from "react-router-dom";


const ListProduct = ({ product }) => {
  return (
    <TableRow key={product.id}>
      <TableCell component="th" scope="row">
        {product.name}
      </TableCell>
      <TableCell align="right">$ {product.price}</TableCell>
      <TableCell align="right">
        <RouterLink to={`/product/edit/${product.id}`}>
          <IconButton aria-label="edit" color="primary">
            <EditIcon />
          </IconButton>
        </RouterLink>
        <IconButton aria-label="delete" color="secondary">
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default ListProduct;
