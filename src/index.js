import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TokenProvider } from "./context/auth/token-context";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { SignUpProvider } from "./context/signup-context/signup-context";
import { ProductsListProider } from "./context/products-context/products-list-context";
import { UserProductsDataProvider } from "./service/getUserProductsData";
import { ProductsDataProvider } from "./context/products-context/products-data";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TokenProvider>
        <SignUpProvider>
          <ProductsListProider>
            <ProductsDataProvider>
              <UserProductsDataProvider>
              <App />
              </UserProductsDataProvider>
            </ProductsDataProvider>
          </ProductsListProider>
        </SignUpProvider>
      </TokenProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

