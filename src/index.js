import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/auth/auth-context";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsListProider } from "./context/products-context/products-list-context";
import { UserProductsDataProvider } from "./service/getUserProductsData";
import { ProductsDataProvider } from "./context/products-context/products-data";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ProductsListProider>
          <ProductsDataProvider>
            <UserProductsDataProvider>
              <App />
            </UserProductsDataProvider>
          </ProductsDataProvider>
        </ProductsListProider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
