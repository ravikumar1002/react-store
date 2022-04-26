import { useContext, useEffect } from "react";
import { userProductsDataContext } from "../service/getUserProductsData";
import {
    addToWishlist,
    removeFromWishlist,
    getWishlist,
} from "../api-request/wishlist-api";
import { useAuth } from "../context/auth/auth-context";
import { getCart, addToCart, removeFromCart, updateQuantityInCart } from "../api-request/cart-api";
import { useNavigate } from "react-router-dom";

function useOperations() {
    const navigate = useNavigate();
    const { userSavedProductsState, dispatchUserSavedProducts } = useContext(
        userProductsDataContext
    );
    const wishlistAddedproducts = userSavedProductsState.wishlist;
    const cartAddedProducts = userSavedProductsState.cart
    const { token } = useAuth()

    const getWishlistProductsFromApi = async (authToken) => {
        const receiveWishlistProducts = await getWishlist(authToken);
        dispatchUserSavedProducts({
            type: "GET_WISHLIST_PRODUCTS_FROM_SERVER",
            payload: {
                wishlistData: receiveWishlistProducts.wishlist,
            },
        });
    };

    const getCartFromApi = async (authToken) => {
        const receiveCartProducts = await getCart(authToken);
        dispatchUserSavedProducts({
            type: "GET_CART_PRODUCTS_FROM_SERVER",
            payload: {
                cartData: receiveCartProducts.cart,
            },
        });
    }

    useEffect(() => {
        if (token) {
            getWishlistProductsFromApi(token);
            getCartFromApi(token)
        }
    }, []);

    const wishlistButtonText = (item) => {
        const checkitemInWishlist = wishlistAddedproducts.filter(
            (wishlistItem) => wishlistItem._id === item._id
        );
        return checkitemInWishlist.length > 0
            ? "Go To wishlist "
            : "Add To wishlist";
    };

    const isWishlisted = (product) => {
        return wishlistAddedproducts.find(
            (wishlistProduct) => wishlistProduct._id === product._id
        );
    };

    const toggleWishlist = async (authToken, product) => {
        const getUpdatedWishlistItem = isWishlisted(product)
            ? navigate("/wishlist")
            : await addToWishlist(authToken, product);
        dispatchUserSavedProducts({
            type: "WISHLIST_TOGGLE",
            payload: { wishlistData: getUpdatedWishlistItem.wishlist },
        });
    };

    const removeWishlistItem = async (authToken, product) => {
        const removeitemFromWishlist = await removeFromWishlist(
            authToken,
            product._id
        );
        dispatchUserSavedProducts({
            type: "REMOVE_FROM_WISHLIST",
            payload: { wishlistData: removeitemFromWishlist.wishlist },
        });
    };


    const cartButtonText = (item) => {
        const checkitemIncart = cartAddedProducts.filter(
            (cartItem) => cartItem._id === item._id
        );
        return checkitemIncart.length > 0
            ? "Go To Cart "
            : "Add To Cart";
    };


    const iscart = (product) => {
        return cartAddedProducts.find(
            (cartProduct) => cartProduct._id === product._id
        );
    };

    const togglecart = async (authToken, product) => {
        const getUpdatedcartItem = iscart(product)
            ? navigate("/cart")
            : await addToCart(authToken, product);
        dispatchUserSavedProducts({
            type: "CART_TOGGLE",
            payload: { cartData: getUpdatedcartItem.cart },
        });
    };


    const removeProductsFromCart = async (authToken, product) => {
        const removeitemFromcart = await removeFromCart(
            authToken,
            product._id
        );
        dispatchUserSavedProducts({
            type: "REMOVE_FROM_CART",
            payload: { cartData: removeitemFromcart.cart },
        });
    }

    const updateProductQuantityInCart = async (authToken, product, type) => {
        const updatedCartItem = await updateQuantityInCart(authToken, product._id, type)
        dispatchUserSavedProducts({
            type: "UPDATE_QUANTITY",
            payload: { cartData: updatedCartItem.cart },
        });
    }


    return { wishlistButtonText, toggleWishlist, removeWishlistItem, togglecart, cartButtonText, removeProductsFromCart, updateProductQuantityInCart, getWishlistProductsFromApi, getCartFromApi };
}

export { useOperations };
