import React from "react";
import Navbar from "./components/Navbar";
import Container from "@material-ui/core/Container";
import Product from "./components/Products";
import NewProduct from "./components/NewProduct";
import EditProduct from "./components/EditProduct";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Navbar></Navbar>
        <Container maxWidth="lg">
          <Switch>
            <Route exact path="/" component={Product}></Route>
            <Route exact path="/product/new" component={NewProduct}></Route>
            <Route
              exact
              path="/product/edit/:id"
              component={EditProduct}
            ></Route>
          </Switch>
        </Container>
      </Provider>
    </Router>
  );
}

export default App;
