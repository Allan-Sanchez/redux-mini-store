import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  EDIT_PRODUCT,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_ERROR
} from "../types";
import clientAxios from "../config/clientAxios";
import Swal from "sweetalert2";

export function newProducActions(product) {
  return async (dispatch) => {
    dispatch(addProduct());

    try {
      dispatch(addProductSucess(product));
      await clientAxios.post("/products", product);
      Swal.fire("Correct", "The product saved successfully", "success");
    } catch (error) {
      console.log(error);
      dispatch(addProductErro(true));
    }
  };
}

const addProduct = () => ({
  type: ADD_PRODUCT,
});

const addProductSucess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

const addProductErro = (state) => ({
  type: ADD_PRODUCT_ERROR,
  payload: state,
});

export function getProductAction() {
  return async (dispatch) => {
    dispatch(getProduct());

    try {
     
      const response = await clientAxios.get("/products");
      dispatch(getProductSuccess(response.data));

    } catch (error) {
      console.log(error);
      dispatch(getProductError(true));
    }
  };
}

const getProduct = () => ({
  type: GET_PRODUCT,
});

const getProductError = (state) =>({
  type:GET_PRODUCT_ERROR,
  payload:state
});

const getProductSuccess = (products) =>({
  type:GET_PRODUCT_SUCCESS,
  payload:products
});

//action delete product

export function deleteProductAction(id) {
  return async (dispatch) =>{
    dispatch(deleteProduct(id));

    try {
      await clientAxios.delete(`/products/${id}`);
      dispatch( deleteProductSucces());
      Swal.fire(
        'Deleted!',
        'Your product has been deleted.',
        'success'
      );
    } catch (error) {
      console.log(error);
      dispatch( deleteProductError ());
    }
  }
}

const deleteProduct = (id) =>({
  type:DELETE_PRODUCT,
  payload:id
});

const deleteProductError = () =>({
  type:DELETE_PRODUCT_ERROR,
  payload:true
});

const deleteProductSucces = () =>({
  type:DELETE_PRODUCT_SUCCESS
});

// actions edit product
export function editProductAction(product) {
  return (dispatch) =>{
    dispatch(editProduct (product)); 
   }
}

const editProduct = (product) =>({
  type:EDIT_PRODUCT,
  payload:product
});

// ACTIONS UPDATE PRODUCT
export function updateProductAction(product) {
  return async(dispatch) =>{
    dispatch(updateProduct(product));

    try {
      const response = await clientAxios.put(`/products/${product.id}`,product);
      console.log(response)
    } catch (error) {
      console.log(error)
    }

  }
}

const updateProduct = (product) =>({
  type:UPDATE_PRODUCT,
  payload:product
})