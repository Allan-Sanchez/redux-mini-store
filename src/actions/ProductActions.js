import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from "../types";
import clientAxios from '../config/clientAxios';
import Swal from "sweetalert2";

export function newProducActions(product) {
  return  async(dispatch) =>{
      dispatch(addProduct());

      try {
        await clientAxios.post('/products',product);
        dispatch( addProductSucess(product));
        Swal.fire(
          'Correct',
          'The product saved successfully',
          'success'
        );
      } catch (error) {
        console.log(error);
        dispatch( addProductErro(true));
      }
  } 
};

const addProduct = () =>({
  type:ADD_PRODUCT
});

const addProductSucess = (product) =>({
  type:ADD_PRODUCT_SUCCESS,
  payload:product
});

const addProductErro = (state) =>({
  type:ADD_PRODUCT_ERROR,
  payload:state
});