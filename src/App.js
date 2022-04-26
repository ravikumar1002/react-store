import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/home";
import ProductsPage from "./pages/products/products-combine-page";
import WishlistPage from "./pages/wishlist/wishlsit";
import { SignUp } from "./pages/auth/signup";
import CartPage from "./pages/cart/cart";
import Mockman from "mockman-js";
import { ErrorPage } from "./pages/error-page/error-page";
import { RequiresAuth } from "./pages/auth/components/RequiresAuth";
import { Profile } from "./pages/profile/Profile";
import { Login } from "./pages/auth/login";
import { useAuth } from "./context/auth/auth-context";
import { useOperations } from "./hooks/useOperations";
import { useEffect } from "react";
function App() {
  const { getCartFromApi, getWishlistProductsFromApi } = useOperations();
  const { token } = useAuth();
  useEffect(() => {
    console.log(token);
    if (token) {
      getWishlistProductsFromApi(token);
      getCartFromApi(token);
    }
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productspage" element={<ProductsPage />} />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <WishlistPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <CartPage />
            </RequiresAuth>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="*" element={<ErrorPage />} />
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
