import React from "react";
import {TableCell, TableRow, IconButton} from "@material-ui/core"

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Swal from "sweetalert2";

import { useHistory } from "react-router-dom";

import {useDispatch} from "react-redux"
import {deleteProductAction, editProductAction} from "../actions/ProductActions";

const ListProduct = ({ product }) => {

  const dispatch = useDispatch();
  const history = useHistory();
  
  const confirmDeleteProduct = (id) =>{

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProductAction(id));
      }
    });
  };

  const editProduct =(product) =>{
    dispatch(editProductAction(product));
    history.push(`/product/edit/${product.id}`);
  };
  return (
    <TableRow key={product.id}>
      <TableCell component="th" scope="row">
        {product.name}
      </TableCell>
      <TableCell align="right">$ {product.price}</TableCell>
      <TableCell align="right">
        {/* <RouterLink to={`/product/edit/${product.id}`}> */}
          <IconButton aria-label="edit" color="primary" onClick={ () => editProduct(product)}>
            <EditIcon />
          </IconButton>
        {/* </RouterLink> */}
        <IconButton aria-label="delete" color="secondary" onClick={ () => confirmDeleteProduct(product.id)}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default ListProduct;
