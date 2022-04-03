import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/home";
import ProductsPage from "./pages/products/products-combine-page";
import WishlistPage from "./pages/wishlist/wishlsit";
import SignUpPage from "./pages/signup/signup";
import CartPage from "./pages/cart/cart";
import Mockman from "mockman-js";
import { ErrorPage } from "./pages/error-page/error-page";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productspage" element={<ProductsPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path = "*" element = {<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

