import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
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