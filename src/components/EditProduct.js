import React,{useState, useEffect} from "react";
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
} from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import { updateProductAction } from "../actions/ProductActions";
import {showAlertAction,closeAlertAction} from "../actions/AlertActions";
import ErrorSnack from "./ErrorSnack";
import {useHistory } from 'react-router-dom';

const EditProduct = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"), {
    defaultMatches: true,
  });
  const history = useHistory();
  const [product, setProduct] = useState({
    name:'',
    price:''
  })

  const dispatch = useDispatch();
  const currentProduct = useSelector((state) => state.products.productEdit);
  const alertShow = useSelector( (state) =>state.alert.alert);

  useEffect(() => {
    setProduct(currentProduct);
  }, [currentProduct])
  // if (!currentProduct) return null;
  const { name, price } = product;

  const onChangeProuct = (e) =>{
    setProduct({
      ...product,
      [e.target.name] : e.target.value
    })
  }

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    if(name.trim() === '' || price <= 0){
      let alert = {
        message: "all the input are required",
        typeAlert: "error",
      };
      dispatch(showAlertAction(alert));
      return;
    }
    dispatch( updateProductAction(product));
    dispatch( closeAlertAction());
    history.push('/');
  };
  return (
    <Grid container justify="center">
      <Grid item>
        <Box mt={5}>
        {alertShow ? (
        <ErrorSnack
          message={alertShow.message}
          typeAlert={alertShow.typeAlert}
        />
      ) : null}
          <Card>
            <form onSubmit={handleUpdateProduct}>
              <CardContent>
                <Typography variant="h5" align="center">
                  Edit Product
                </Typography>
                <Box mt={3} mx={isMobile ? 2 : 10}>
                  <Box mb={2}>
                    <TextField
                      id="productName"
                      name="name"
                      label="Product Name"
                      value={name} onChange={onChangeProuct}
                      fullWidth
                    />
                  </Box>
                  <Box mb={2}>
                    <TextField
                      type="number"
                      id="productPrice"
                      name="price"
                      label="Product Price"
                      value={price} onChange={onChangeProuct}
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
                  Save change
                </Button>
              </Box>
            </form>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default EditProduct;
