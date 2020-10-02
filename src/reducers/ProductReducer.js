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

const initialState = {
  products: [],
  error: false,
  loading: false,
  productDelete:null,
  productEdit:null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT:
    case ADD_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false,
      };
    case ADD_PRODUCT_ERROR:
    case GET_PRODUCT_ERROR:
    case DELETE_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_PRODUCT_SUCCESS:
        return{
            ...state,
            loading:false,
            error:false,
            products:action.payload
        }
    case DELETE_PRODUCT:
      return{
        ...state,
        productDelete:action.payload
      }
    case DELETE_PRODUCT_SUCCESS:
      return{
        ...state,
        products: state.products.filter( product => product.id !== state.productDelete),
        productDelete:null
      }
    case EDIT_PRODUCT:
      return{
        ...state,
        productEdit:action.payload
      }
    default:
      return state;
  }
}
