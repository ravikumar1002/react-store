import { createContext, useEffect, useReducer, useState } from "react";
import { getWishlist } from "../api-request/wishlist-api";
import { userDataReducer } from "../reducer/userData/user-data-reducer";

const userProductsDataContext = createContext();

const UserProductsDataProvider = ({ children }) => {
    const userSavedProductsInitial = {
        wishlist: [],
        cart: [],
    };

    const [userSavedProductsState, dispatchUserSavedProducts] = useReducer(
        userDataReducer,
        userSavedProductsInitial
    );

    return (
        <userProductsDataContext.Provider
            value={{ userSavedProductsState, dispatchUserSavedProducts }}
        >
            {children}
        </userProductsDataContext.Provider>
    );
};

export { userProductsDataContext, UserProductsDataProvider };
